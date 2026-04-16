"use client";

import { useEffect, useMemo, useState } from "react";
import { useMapContext } from "react-simple-maps";
import type { MapProject, MapProjectStatus } from "@/types";

interface MapProjectDotsProps {
  projects: MapProject[];
  onHoverFacility: (
    p: MapProject,
    x: number,
    y: number,
    clusterSize: number,
  ) => void;
  onLeaveFacility: () => void;
  onSelectFacility?: (p: MapProject) => void;
  clusterDeg?: number;
  projection?: (coords: [number, number]) => [number, number] | null;
}

interface Cluster {
  key: string;
  members: MapProject[];
  repr: MapProject;
  lat: number;
  lng: number;
  weight: number;
  dominantStatus: MapProjectStatus | "mixed";
}

export const PROJECT_PIN_COLOR = {
  live: "#0A84FF",
  "in-progress": "#FF9500",
  concept: "#BF5AF2",
  operational: "#0A84FF",
  "under-construction": "#FF9500",
  proposed: "#BF5AF2",
  mixed: "#0A84FF",
} as const;

export type MapProjectDotStatus =
  | MapProjectStatus
  | "mixed"
  | "operational"
  | "under-construction"
  | "proposed";

export function ProjectPinIcon({
  x,
  y,
  size,
  status,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onClick,
  interactive = true,
}: {
  x: number;
  y: number;
  size: number;
  status: MapProjectDotStatus;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick?: () => void;
  interactive?: boolean;
}) {
  const color = PROJECT_PIN_COLOR[status] ?? PROJECT_PIN_COLOR.live;
  const isProposed = status === "proposed" || status === "concept";
  const d = size * 3.2;
  const half = d / 2;
  const rx = d * 0.34;
  const gradId =
    status === "under-construction" || status === "in-progress"
      ? "dc-grad-construction"
      : status === "mixed"
        ? "dc-grad-mixed"
        : "dc-grad-operational";
  const bodyFill = isProposed ? "#FFFFFF" : `url(#${gradId})`;
  return (
    <g
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        cursor: interactive && onClick ? "pointer" : "default",
      }}
    >
      <rect
        x={x - half}
        y={y - half + 1.2}
        width={d}
        height={d}
        rx={rx}
        fill="black"
        fillOpacity={0.14}
        style={{ filter: "url(#dc-shadow)", pointerEvents: "none" }}
      />
      <rect
        x={x - half}
        y={y - half}
        width={d}
        height={d}
        rx={rx}
        fill={bodyFill}
        stroke={isProposed ? color : "rgba(255,255,255,0.35)"}
        strokeWidth={isProposed ? 1.4 : 0.7}
      />
      {!isProposed && (
        <rect
          x={x - half + 0.6}
          y={y - half + 0.6}
          width={d - 1.2}
          height={(d - 1.2) * 0.48}
          rx={rx - 0.6}
          fill="url(#dc-sheen)"
          style={{ pointerEvents: "none" }}
        />
      )}
      <rect
        x={x - d * 0.18}
        y={y - d * 0.055}
        width={d * 0.36}
        height={d * 0.11}
        rx={d * 0.055}
        fill={isProposed ? color : "#FFFFFF"}
        fillOpacity={isProposed ? 0.9 : 0.85}
        style={{ pointerEvents: "none" }}
      />
    </g>
  );
}

interface ProjectDotProps {
  x?: number;
  y?: number;
  r: number;
  status: MapProjectDotStatus;
  count?: number;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick?: () => void;
  interactive?: boolean;
}

export function ProjectDot({
  x,
  y,
  r,
  status,
  count = 1,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onClick,
  interactive = true,
}: ProjectDotProps) {
  const color = PROJECT_PIN_COLOR[status] ?? PROJECT_PIN_COLOR.live;
  const isProposed = status === "proposed" || status === "concept";
  const isCluster = count > 1;
  const positioned = typeof x === "number" && typeof y === "number";
  const haloProps = positioned ? { cx: x, cy: y } : {};
  const bodyProps = positioned ? { cx: x, cy: y } : {};
  const textProps = positioned ? { x, y } : {};

  return (
    <>
      <circle
        {...haloProps}
        r={r + 2.2}
        fill={color}
        opacity={0.18}
        style={{ pointerEvents: "none" }}
      />
      <circle
        {...bodyProps}
        r={r}
        fill={isProposed ? "#FFFFFF" : color}
        stroke={isProposed ? color : "#FFFFFF"}
        strokeWidth={isProposed ? 1.6 : 1.1}
        style={{
          cursor: interactive && onClick ? "pointer" : "default",
          pointerEvents: "all",
        }}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
      {isCluster && r >= 7 && (
        <text
          {...textProps}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: r >= 10 ? "9px" : "8px",
            fontWeight: 600,
            fontFamily: "inherit",
            fill: isProposed ? color : "#FFFFFF",
            pointerEvents: "none",
            letterSpacing: "-0.02em",
            transform: "translateY(-0.1px)",
          }}
        >
          {count}
        </text>
      )}
    </>
  );
}

function clusterProjects(facs: MapProject[], cellDeg: number): Cluster[] {
  const buckets = new Map<string, MapProject[]>();
  for (const f of facs) {
    const key = `${Math.round(f.lat / cellDeg)}|${Math.round(f.lng / cellDeg)}`;
    const bucket = buckets.get(key) ?? [];
    bucket.push(f);
    buckets.set(key, bucket);
  }
  const clusters: Cluster[] = [];
  for (const [key, bucket] of buckets) {
    let weight = 0;
    let sumLat = 0;
    let sumLng = 0;
    let repr = bucket[0];
    for (const f of bucket) {
      const w = f.capacityMW ?? 0;
      weight += w;
      sumLat += f.lat;
      sumLng += f.lng;
      if ((f.capacityMW ?? 0) > (repr.capacityMW ?? 0)) repr = f;
    }
    const statuses = new Set(bucket.map((f) => f.status));
    clusters.push({
      key,
      members: bucket,
      repr,
      lat: sumLat / bucket.length,
      lng: sumLng / bucket.length,
      weight,
      dominantStatus: statuses.size === 1 ? bucket[0].status : "mixed",
    });
  }
  clusters.sort((a, b) => b.weight - a.weight);
  return clusters;
}

export const SIZE_BANDS = [
  { key: "sm" as const, label: "Sprint", max: 100, r: 4 },
  { key: "md" as const, label: "Growth", max: 500, r: 7 },
  { key: "lg" as const, label: "Flagship", max: Infinity, r: 11 },
];

function clusterRadius(weight: number): number {
  for (const band of SIZE_BANDS) {
    if (weight < band.max) return band.r;
  }
  return SIZE_BANDS[SIZE_BANDS.length - 1].r;
}

export default function MapProjectDots({
  projects,
  onHoverFacility,
  onLeaveFacility,
  onSelectFacility,
  clusterDeg = 1.8,
  projection: projectionProp,
}: MapProjectDotsProps) {
  const clusters = useMemo(
    () => clusterProjects(projects, clusterDeg),
    [projects, clusterDeg],
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const ctx = useMapContext();
  const projection = (projectionProp ??
    (ctx as { projection?: (c: [number, number]) => [number, number] | null } | undefined)
      ?.projection) as
    | ((c: [number, number]) => [number, number] | null | undefined)
    | undefined;

  if (!mounted || typeof projection !== "function") return null;

  return (
    <g>
      {clusters.map((c) => {
        let projected: [number, number] | null | undefined;
        try {
          projected = projection([c.lng, c.lat]);
        } catch {
          return null;
        }
        if (!projected || !Array.isArray(projected) || projected.length < 2) {
          return null;
        }
        const [x, y] = projected;
        if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
        const r = clusterRadius(c.weight);
        return (
          <g key={c.key} transform={`translate(${x}, ${y})`}>
            <ProjectDot
              r={r}
              status={c.dominantStatus}
              count={c.members.length}
              onMouseEnter={(e) =>
                onHoverFacility(
                  c.repr,
                  e.clientX,
                  e.clientY,
                  c.members.length,
                )
              }
              onMouseMove={(e) =>
                onHoverFacility(
                  c.repr,
                  e.clientX,
                  e.clientY,
                  c.members.length,
                )
              }
              onMouseLeave={() => onLeaveFacility()}
              onClick={
                onSelectFacility ? () => onSelectFacility(c.repr) : undefined
              }
              interactive={!!onSelectFacility}
            />
          </g>
        );
      })}
    </g>
  );
}
