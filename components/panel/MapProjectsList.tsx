"use client";

import type { MapProject } from "@/types";
import { PROJECT_PIN_COLOR } from "@/components/map/MapProjectDots";

interface MapProjectsListProps {
  projects: MapProject[];
  groupBy: "state" | "country" | null;
  onSelectProject?: (p: MapProject) => void;
}

function stripConfidence(s: string | undefined): string {
  return (s ?? "").replace(/\s*#\w+/g, "").trim();
}

const STATUS_LABEL: Record<string, string> = {
  live: "Live",
  "in-progress": "In Progress",
  concept: "Concept",
  operational: "Live",
  "under-construction": "In Progress",
  proposed: "Concept",
};

function sortByEngagementDesc(a: MapProject, b: MapProject): number {
  return (b.engagementWeight ?? 0) - (a.engagementWeight ?? 0);
}

function groupProjects(
  projects: MapProject[],
  key: "state" | "country",
): Array<{ label: string; items: MapProject[] }> {
  const map = new Map<string, MapProject[]>();
  for (const p of projects) {
    const k = (p[key] ?? "Unknown").toString();
    const list = map.get(k) ?? [];
    list.push(p);
    map.set(k, list);
  }
  return Array.from(map.entries())
    .map(([label, items]) => ({
      label,
      items: items.slice().sort(sortByEngagementDesc),
      total: items.reduce((s, p) => s + (p.engagementWeight ?? 0), 0),
    }))
    .sort((a, b) => b.total - a.total)
    .map(({ label, items }) => ({ label, items }));
}

function ProjectRow({
  project,
  onSelect,
}: {
  project: MapProject;
  onSelect?: (p: MapProject) => void;
}) {
  const title =
    (project.displayTitle ?? stripConfidence(project.operator)) || "Project";
  const service = project.serviceLabels?.[0];
  const color =
    (PROJECT_PIN_COLOR as Record<string, string>)[project.status] ??
    PROJECT_PIN_COLOR.live;
  const isProposed = project.status === "concept";

  const clickable = !!onSelect;
  const Inner = (
    <>
      <span
        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
        style={{
          backgroundColor: isProposed ? "transparent" : color,
          border: isProposed ? `1.25px solid ${color}` : "none",
        }}
      />
      <span className="flex-1 min-w-0">
        <span className="block text-[13px] font-medium text-ink tracking-tight truncate">
          {title}
        </span>
        <span className="block text-[11px] text-muted truncate">
          {STATUS_LABEL[project.status]}
          {service ? ` · ${service}` : ""}
        </span>
      </span>
    </>
  );

  if (clickable) {
    return (
      <button
        type="button"
        onClick={() => onSelect!(project)}
        className="w-full flex items-start gap-2.5 py-2 px-2 -mx-2 rounded-lg text-left hover:bg-black/[.03] transition-colors"
      >
        {Inner}
      </button>
    );
  }
  return (
    <div className="flex items-start gap-2.5 py-2 px-2 -mx-2">{Inner}</div>
  );
}

export default function MapProjectsList({
  projects,
  groupBy,
  onSelectProject,
}: MapProjectsListProps) {
  if (projects.length === 0) {
    return (
      <p className="text-xs text-muted">No engagements listed for this market yet.</p>
    );
  }

  if (!groupBy) {
    const sorted = projects.slice().sort(sortByEngagementDesc);
    return (
      <div className="flex flex-col">
        {sorted.map((p) => (
          <ProjectRow
            key={p.id}
            project={p}
            onSelect={onSelectProject}
          />
        ))}
      </div>
    );
  }

  const groups = groupProjects(projects, groupBy);
  return (
    <div className="flex flex-col gap-4">
      {groups.map((g) => (
        <section key={g.label}>
          <div className="flex items-baseline justify-between mb-1.5">
            <h3 className="text-[11px] font-semibold tracking-tight text-muted">
              {g.label}
            </h3>
            <span className="text-[11px] text-muted/70">
              {g.items.length} {g.items.length === 1 ? "project" : "projects"}
            </span>
          </div>
          <div className="flex flex-col">
            {g.items.map((p) => (
              <ProjectRow
                key={p.id}
                project={p}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
