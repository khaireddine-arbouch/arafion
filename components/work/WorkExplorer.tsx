"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ALL_PORTFOLIO_PROJECTS } from "@/lib/map-projects";
import type { PortfolioProject } from "@/lib/portfolio-view";
import { getSiteConfig } from "@/lib/site/config";

const site = getSiteConfig();
const ALL = "All";

function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

function toggleValue(values: string[], value: string): string[] {
  if (values.includes(value)) return values.filter((item) => item !== value);
  return [...values, value];
}

function proofLabel(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function ProjectCard({
  project,
  selected,
  compareDisabled,
  onToggleCompare,
}: {
  project: PortfolioProject;
  selected: boolean;
  compareDisabled: boolean;
  onToggleCompare: (project: PortfolioProject) => void;
}) {
  return (
    <article className="flex min-h-[18rem] flex-col rounded-lg border border-black/[.07] bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
            {project.regionLabel}
          </div>
          <h2 className="text-xl font-semibold leading-tight tracking-tight text-ink">
            {project.displayTitle}
          </h2>
        </div>
        <span className="shrink-0 rounded-full border border-black/[.06] px-2.5 py-1 text-[11px] font-medium text-ink">
          {project.statusLabel}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-ink/72">
        {project.shortDescription}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.serviceLabels.slice(0, 4).map((label) => (
          <span
            key={label}
            className="rounded-full bg-black/[.04] px-2.5 py-1 text-[11px] font-medium text-ink/76"
          >
            {label}
          </span>
        ))}
      </div>

      {project.proofTypes.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.proofTypes.slice(0, 3).map((proof) => (
            <span
              key={proof}
              className="rounded-full border border-black/[.06] px-2 py-0.5 text-[10.5px] text-muted"
            >
              {proofLabel(proof)}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <div className="text-xs text-muted">{project.locationLabel}</div>
        <button
          type="button"
          disabled={!selected && compareDisabled}
          onClick={() => onToggleCompare(project)}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
            selected
              ? "bg-ink text-white"
              : "bg-black/[.04] text-ink hover:bg-black/[.07]"
          }`}
        >
          {selected ? "Selected" : "Compare"}
        </button>
      </div>
    </article>
  );
}

function CompareModal({
  projects,
  onClose,
  onRemove,
}: {
  projects: PortfolioProject[];
  onClose: () => void;
  onRemove: (id: string) => void;
}) {
  if (projects.length < 2) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-3 backdrop-blur-sm md:items-center md:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="compare-title"
        className="max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-black/[.06] px-5 py-4">
          <div>
            <h2 id="compare-title" className="text-lg font-semibold tracking-tight text-ink">
              Compare projects
            </h2>
            <p className="mt-1 text-sm text-muted">
              Services, status, proof, and public stack tags only.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-full bg-black/[.04] text-sm font-medium text-ink hover:bg-black/[.07]"
            aria-label="Close compare"
          >
            x
          </button>
        </div>

        <div className="overflow-auto p-5">
          <table className="min-w-[760px] w-full border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 bg-white py-3 pr-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Field
                </th>
                {projects.map((project) => (
                  <th key={project.id} className="border-l border-black/[.06] px-4 py-3 align-top">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold tracking-tight text-ink">
                        {project.displayTitle}
                      </span>
                      <button
                        type="button"
                        onClick={() => onRemove(project.id)}
                        className="text-xs text-muted hover:text-ink"
                        aria-label={`Remove ${project.displayTitle}`}
                      >
                        Remove
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Status", (p: PortfolioProject) => p.statusLabel],
                ["Region", (p: PortfolioProject) => p.regionLabel],
                ["Services", (p: PortfolioProject) => p.serviceLabels.join(", ")],
                ["Proof", (p: PortfolioProject) => p.proofTypes.map(proofLabel).join(", ") || "Private proof"],
                ["Public stack tags", (p: PortfolioProject) => p.stackTags.slice(0, 8).join(", ") || "Not public"],
              ].map(([label, getter]) => (
                <tr key={label as string}>
                  <th className="sticky left-0 border-t border-black/[.06] bg-white py-3 pr-4 text-xs font-semibold text-muted">
                    {label as string}
                  </th>
                  {projects.map((project) => (
                    <td
                      key={project.id}
                      className="border-l border-t border-black/[.06] px-4 py-3 leading-6 text-ink/76"
                    >
                      {(getter as (p: PortfolioProject) => string)(project)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function WorkExplorer() {
  const projects = ALL_PORTFOLIO_PROJECTS;
  const regions = useMemo(
    () => [ALL, ...uniqueSorted(projects.map((project) => project.regionLabel))],
    [projects],
  );
  const statuses = useMemo(
    () => [ALL, ...uniqueSorted(projects.map((project) => project.statusLabel))],
    [projects],
  );
  const services = useMemo(
    () => uniqueSorted(projects.flatMap((project) => project.serviceLabels)),
    [projects],
  );

  const [region, setRegion] = useState(ALL);
  const [status, setStatus] = useState(ALL);
  const [serviceFilters, setServiceFilters] = useState<string[]>([]);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        if (region !== ALL && project.regionLabel !== region) return false;
        if (status !== ALL && project.statusLabel !== status) return false;
        if (
          serviceFilters.length > 0 &&
          !serviceFilters.every((service) => project.serviceLabels.includes(service))
        ) {
          return false;
        }
        return true;
      }),
    [projects, region, status, serviceFilters],
  );

  const selectedProjects = compareIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is PortfolioProject => !!project);

  const toggleCompare = (project: PortfolioProject) => {
    setCompareIds((current) => {
      if (current.includes(project.id)) return current.filter((id) => id !== project.id);
      if (current.length >= 4) return current;
      return [...current, project.id];
    });
  };

  return (
    <main className="min-h-screen bg-bg text-ink">
      <section className="border-b border-black/[.06] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-sm font-semibold tracking-tight text-ink">
              {site.shortName}
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted hover:text-ink">
              Contact
            </Link>
          </div>
          <div className="max-w-3xl py-16">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted">
              Work explorer
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
              Filter, compare, and verify the portfolio.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              Browse project records from the canonical {site.shortName} project data:
              services, regions, status, proof types, and public stack tags.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="sticky top-0 z-20 -mx-5 border-b border-black/[.06] bg-bg/92 px-5 py-4 backdrop-blur-xl md:-mx-8 md:px-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {regions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRegion(item)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    region === item
                      ? "bg-ink text-white"
                      : "bg-white text-muted hover:text-ink"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {statuses.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStatus(item)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    status === item
                      ? "bg-ink text-white"
                      : "bg-white text-muted hover:text-ink"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {services.map((service) => {
                const active = serviceFilters.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setServiceFilters((current) => toggleValue(current, service))}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                      active
                        ? "bg-ink text-white"
                        : "bg-white text-muted hover:text-ink"
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted">
            Showing <span className="font-medium text-ink">{filtered.length}</span> of{" "}
            {projects.length} projects
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setRegion(ALL);
                setStatus(ALL);
                setServiceFilters([]);
              }}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-muted hover:text-ink"
            >
              Reset filters
            </button>
            <button
              type="button"
              disabled={selectedProjects.length < 2}
              onClick={() => setCompareOpen(true)}
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ink/90 disabled:cursor-not-allowed disabled:bg-ink/30"
            >
              Compare {selectedProjects.length > 0 ? `(${selectedProjects.length})` : ""}
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              selected={compareIds.includes(project.id)}
              compareDisabled={compareIds.length >= 4}
              onToggleCompare={toggleCompare}
            />
          ))}
        </div>
      </section>

      {compareOpen && (
        <CompareModal
          projects={selectedProjects}
          onClose={() => setCompareOpen(false)}
          onRemove={(id) => setCompareIds((current) => current.filter((item) => item !== id))}
        />
      )}
    </main>
  );
}
