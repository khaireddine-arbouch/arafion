"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  type ProjectionFunction,
} from "react-simple-maps";
import { menaProjection } from "@/lib/projections";
import { getEntity } from "@/lib/placeholder-data";
import { getEntityColorForDimension } from "@/lib/dimensions";
import {
  NEUTRAL_FILL,
  NEUTRAL_STROKE,
  type SetTooltip,
} from "@/lib/map-utils";
import { MENA_MAP_PROJECTS } from "@/lib/map-projects";
import type { MapProject, Dimension, DimensionLens } from "@/types";
import MapProjectDots from "./MapProjectDots";

interface MenaMapProps {
  onSelectEntity: (geoId: string) => void;
  selectedGeoId: string | null;
  setTooltip: SetTooltip;
  dimension?: Dimension;
  lens?: DimensionLens;
  showMapPins?: boolean;
  onHoverFacility?: (
    dc: MapProject,
    x: number,
    y: number,
    clusterSize: number,
  ) => void;
  onLeaveFacility?: () => void;
  onSelectFacility?: (dc: MapProject) => void;
}

const menaProj = menaProjection as unknown as ProjectionFunction;

const WORLD_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Africa + Middle East + Turkey. 434 = Libya, 434 was missing previously.
const MENA_CODES = new Set<number>([
  // Africa
  12, 24, 72, 108, 120, 140, 148, 174, 178, 180, 204, 226, 231, 232, 262,
  266, 270, 288, 324, 328, 384, 404, 426, 430, 434, 450, 454, 466, 478, 480,
  504, 508, 516, 562, 566, 624, 646, 678, 686, 694, 706, 710, 716, 728,
  729, 732, 736, 748, 768, 788, 800, 834, 854, 894,
  // Middle East + Turkey + South Asia context
  48, 51, 196, 268, 275, 364, 368, 376, 400, 414, 422, 462, 512,
  586, 634, 682, 760, 784, 792, 818, 887,
]);

const BLOB_STYLE = {
  fill: NEUTRAL_FILL,
  stroke: NEUTRAL_FILL,
  strokeWidth: 0,
  outline: "none",
  pointerEvents: "none" as const,
};

export default function MenaMap({
  onSelectEntity,
  selectedGeoId,
  setTooltip,
  dimension = "overall",
  lens = "portfolio",
  showMapPins = false,
  onHoverFacility,
  onLeaveFacility,
  onSelectFacility,
}: MenaMapProps) {
  return (
    <div
      className="relative w-full h-full"
      onMouseMove={(e) =>
        setTooltip((current) =>
          current ? { ...current, x: e.clientX, y: e.clientY } : current,
        )
      }
      onMouseLeave={() => setTooltip(null)}
    >
      <ComposableMap
        width={960}
        height={600}
        projection={menaProj}
        style={{
          width: "100%",
          height: "100%",
          shapeRendering: "geometricPrecision",
        }}
      >
        <Geographies geography={WORLD_URL}>
          {({ geographies }) =>
            geographies
              .filter((g) => MENA_CODES.has(parseInt(g.id, 10)))
              .sort((a, b) => {
                const aId = String(parseInt(a.id as string, 10));
                const bId = String(parseInt(b.id as string, 10));
                const aSel = aId === selectedGeoId;
                const bSel = bId === selectedGeoId;
                return aSel === bSel ? 0 : aSel ? 1 : -1;
              })
              .map((geo) => {
                const id = String(parseInt(geo.id as string, 10));
                const name = geo.properties.name as string;
                const ent = getEntity(id, "mena");
                const interactive = ent !== null;
                const isSelected = selectedGeoId === id;

                if (!interactive) {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: BLOB_STYLE,
                        hover: BLOB_STYLE,
                        pressed: BLOB_STYLE,
                      }}
                    />
                  );
                }

                const fill = getEntityColorForDimension(ent, dimension, lens);
                const stroke = isSelected ? "#FFFFFF" : NEUTRAL_STROKE;
                const strokeWidth = isSelected ? 4 : 1.5;

                const base = {
                  fill,
                  stroke,
                  strokeWidth,
                  strokeLinejoin: "round" as const,
                  strokeLinecap: "round" as const,
                  outline: "none",
                  cursor: "pointer",
                  transition: "stroke 200ms, stroke-width 200ms, filter 200ms",
                  filter: isSelected
                    ? "drop-shadow(0 4px 12px rgba(0,0,0,0.15))"
                    : undefined,
                };

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(e) =>
                      setTooltip({ x: e.clientX, y: e.clientY, label: name, geoId: id, region: "mena" })
                    }
                    onMouseLeave={() => setTooltip(null)}
                    onClick={() => onSelectEntity(id)}
                    style={{
                      default: base,
                      hover: {
                        ...base,
                        filter: isSelected
                          ? "drop-shadow(0 4px 12px rgba(0,0,0,0.18)) brightness(0.94)"
                          : "brightness(0.94)",
                      },
                      pressed: base,
                    }}
                  />
                );
              })
          }
        </Geographies>
        {showMapPins && onHoverFacility && onLeaveFacility && (
          <MapProjectDots projection={menaProjection as unknown as (c: [number, number]) => [number, number] | null}
            projects={MENA_MAP_PROJECTS}
            onHoverFacility={onHoverFacility}
            onLeaveFacility={onLeaveFacility}
            onSelectFacility={onSelectFacility}
          />
        )}
      </ComposableMap>
    </div>
  );
}
