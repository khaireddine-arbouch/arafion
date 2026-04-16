"use client";

import type { MapProject } from "@/types";
import { PROJECT_PIN_COLOR } from "./MapProjectDots";
import { ProposalProgress } from "@/components/ui/ProposalProgress";

interface MapProjectCardProps {
  project: MapProject;
  x: number;
  y: number;
  clusterSize?: number;
}

function formatRelativeScale(mw: number | undefined): string | null {
  if (!mw) return null;
  if (mw >= 1000) return `${(mw / 1000).toFixed(1)} GW`;
  return `${Math.round(mw)} MW`;
}

function formatCost(n: number | undefined): string | null {
  if (!n) return null;
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(0)}M`;
  return `$${n}`;
}

function formatH100e(n: number | undefined): string | null {
  if (!n) return null;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}k`;
  return `${Math.round(n)}`;
}

function stripConfidence(s: string | undefined): string | undefined {
  if (!s) return undefined;
  return s.replace(/\s*#\w+/g, "").trim();
}

const STATUS_LABEL: Record<string, string> = {
  live: "Live",
  "in-progress": "In Progress",
  concept: "Concept",
  operational: "Live",
  "under-construction": "In Progress",
  proposed: "Concept",
};

export default function MapProjectCard({
  project,
  x,
  y,
  clusterSize = 1,
}: MapProjectCardProps) {
  const title = stripConfidence(project.operator) ?? project.operator;
  const user = stripConfidence(project.primaryUser);
  const scale = formatRelativeScale(project.capacityMW);
  const cost = formatCost(project.costUSD);
  const compute = formatH100e(project.computeH100e);
  const color =
    (PROJECT_PIN_COLOR as Record<string, string>)[project.status] ??
    PROJECT_PIN_COLOR.live;
  const isProposed = project.status === "concept";
  const isCluster = clusterSize > 1;

  const rawLocation = stripConfidence(project.location);
  const qualifier = project.state ?? project.country;
  const locationLine =
    rawLocation && qualifier && !rawLocation.toLowerCase().includes(qualifier.toLowerCase())
      ? `${rawLocation}, ${qualifier}`
      : (rawLocation ?? qualifier ?? null);

  const showUser = !!user;
  const rows: Array<{ label: string; value: string }> = [];
  if (showUser) rows.push({ label: "Client", value: user! });
  if (scale) rows.push({ label: "Scale", value: scale });
  if (cost) rows.push({ label: "Investment", value: cost });
  if (compute) rows.push({ label: "Compute", value: `${compute} H100e` });
  if (locationLine) rows.push({ label: "Location", value: locationLine });

  const cardWidth = 260;
  const hasProposalBlock =
    !!project.proposal?.process && project.proposal.process.length > 0;
  const estHeight =
    120 +
    rows.length * 22 +
    (hasProposalBlock ? 70 : 0) +
    36;
  const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
  const vh = typeof window !== "undefined" ? window.innerHeight : 900;
  const flipRight = x > vw - cardWidth - 24;
  const flipDown = y > vh - estHeight - 24;
  const left = flipRight ? x - cardWidth - 16 : x + 16;
  const top = flipDown ? Math.max(16, y - estHeight + 16) : y + 16;

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{ left, top, width: cardWidth }}
      aria-hidden
    >
      <div
        className="rounded-2xl bg-white/95 backdrop-blur-2xl border border-black/[.04] overflow-hidden"
        style={{
          boxShadow:
            "0 12px 36px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <div className="px-3.5 pt-3 pb-2.5">
          <div className="text-[13px] font-semibold text-ink tracking-tight leading-tight">
            {title}
          </div>
          <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-bg/80">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                backgroundColor: isProposed ? "transparent" : color,
                border: isProposed ? `1.25px solid ${color}` : "none",
              }}
            />
            <span className="text-[11px] font-medium text-ink tracking-tight">
              {STATUS_LABEL[project.status]}
            </span>
          </div>
        </div>

        {rows.length > 0 && (
          <dl className="mx-3.5 pt-2 pb-2.5 border-t border-black/[.05] flex flex-col gap-0.5">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-baseline justify-between gap-4"
              >
                <dt className="text-[11px] font-medium text-muted tracking-tight flex-shrink-0">
                  {r.label}
                </dt>
                <dd className="text-[12px] text-ink text-right tracking-tight truncate min-w-0">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {project.proposal?.process && project.proposal.process.length > 0 && (
          <div className="px-3.5 pt-2.5 pb-2.5 border-t border-black/[.05]">
            <ProposalProgress process={project.proposal.process} variant="dense" />
            {project.proposal.nextDecision && (
              <div className="mt-2">
                <div className="text-[11px] font-medium text-muted tracking-tight mb-0.5">
                  Next
                </div>
                <div className="text-[12.5px] text-ink tracking-tight leading-snug">
                  {project.proposal.nextDecision.what}
                </div>
                {(project.proposal.nextDecision.body ||
                  project.proposal.nextDecision.date) && (
                  <div className="text-[11px] text-muted tracking-tight mt-0.5">
                    {project.proposal.nextDecision.body}
                    {project.proposal.nextDecision.body &&
                      project.proposal.nextDecision.date && (
                        <span aria-hidden> · </span>
                      )}
                    {project.proposal.nextDecision.date}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="px-3.5 pb-3 pt-1.5 border-t border-black/[.05] flex items-center justify-between gap-3">
          <span className="text-[11px] text-muted tracking-tight">
            {isCluster
              ? `+ ${clusterSize - 1} more nearby`
              : "View details"}
          </span>
          <span className="text-[11px] text-muted tracking-tight" aria-hidden>
            →
          </span>
        </div>
      </div>
    </div>
  );
}
