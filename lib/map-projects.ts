import type { ImpactTag, MapProject, MapProjectStatus } from "@/types";
import arafionProjectsRaw from "@/data/arafion-data/projects.json";
import {
  buildPortfolioProjects,
  type ArafionProjectRow,
  type PortfolioProject,
} from "@/lib/portfolio-view";

const SERVICE_TO_IMPACT: Partial<Record<string, ImpactTag>> = {
  "saas-software": "frontend-engineering",
  "dashboards-intelligence": "data-engineering",
  "ai-systems": "ai-ml",
  websites: "frontend-engineering",
  ecommerce: "frontend-engineering",
  "digital-presence": "marketing",
  "internal-tools": "devops",
  "marketing-production": "marketing",
  "architecture-visualization": "design-systems",
  "3d-rendering": "branding",
  "b2b-services": "strategy",
  healthcare: "strategy",
  "data-visualization": "data-engineering",
  "research-tools": "ai-ml",
  "campaign-infrastructure": "devops",
  "technical-training": "strategy",
  "product-design": "product-design",
  "visual-sales-systems": "marketing",
};

function mapEngagementStatus(raw: string): MapProjectStatus {
  switch (raw) {
    case "live":
      return "live";
    case "in-development":
      return "in-progress";
    case "prototype":
    case "planned-or-in-progress":
      return "concept";
    case "delivered":
    default:
      return "live";
  }
}

function concernsFromServices(cats: string[]): string[] {
  const out: ImpactTag[] = [];
  for (const c of cats) {
    const t = SERVICE_TO_IMPACT[c];
    if (t && !out.includes(t)) out.push(t);
  }
  if (out.length === 0) out.push("strategy");
  return out;
}

/** Country string used for regional map filters (`EU_COUNTRIES`, etc.). */
function normalizeFilterCountry(raw: string, fallbackCountry: string): string {
  let c = raw.trim();
  const composite = /^(.*?)\s*\/\s*International$/i.exec(c);
  if (composite) c = composite[1].trim();
  if (c === "Türkiye" || c === "Turkiye") return "Turkey";
  if (c !== "International" && c.length > 0) return c;
  return fallbackCountry;
}

function inferUSState(lat: number, lng: number): string | undefined {
  if (lat > 40.4 && lat < 41.1 && lng > -74.35 && lng < -73.65)
    return "New York";
  if (lat > 38.85 && lat < 39.05 && lng > -77.15 && lng < -76.92)
    return "Virginia";
  return undefined;
}

function toMapProject(view: PortfolioProject, row: ArafionProjectRow): MapProject {
  const filterCountry = normalizeFilterCountry(row.location.country, view.country);
  const state =
    filterCountry === "United States" ? inferUSState(view.lat, view.lng) : undefined;

  return {
    id: view.id,
    slug: view.slug,
    operator: view.displayTitle,
    displayTitle: view.displayTitle,
    globeLabel: view.globeLabel,
    location: view.locationLabel,
    regionLabel: view.regionLabel,
    state,
    country: filterCountry,
    lat: view.lat,
    lng: view.lng,
    engagementWeight: view.weight,
    status: mapEngagementStatus(row.status),
    rawStatus: row.status,
    statusLabel: view.statusLabel,
    notes: view.shortDescription,
    concerns: concernsFromServices(view.serviceCategories),
    serviceCategories: view.serviceCategories,
    serviceLabels: view.serviceLabels,
    proofTypes: view.proofTypes,
    stackTags: view.stackTags,
    featured: view.featured,
    isConfidential: view.isConfidential,
    publicUrl: view.publicUrl,
    source: "arafion",
    primaryUser: row.client.isConfidential ? undefined : row.client.publicName,
  };
}

const rows = arafionProjectsRaw as unknown as ArafionProjectRow[];
export const ALL_PORTFOLIO_PROJECTS: PortfolioProject[] =
  buildPortfolioProjects(rows);

/** All geo-located engagements shown on the map. */
export const ALL_MAP_PROJECTS: MapProject[] = ALL_PORTFOLIO_PROJECTS.map(
  (project, index) => toMapProject(project, rows[index]),
);

/** US + Canada pins */
export const NA_MAP_PROJECTS: MapProject[] = ALL_MAP_PROJECTS.filter(
  (p) => p.country === "United States" || p.country === "Canada",
);

const EU_COUNTRIES = new Set<string>([
  "United Kingdom", "Germany", "France", "Sweden", "Finland",
  "Netherlands", "Ireland", "Spain", "Italy", "Poland",
  "Denmark", "Norway", "Belgium", "Austria", "Portugal",
  "Greece", "Czech Republic", "Czechia", "Switzerland",
  "Luxembourg", "Estonia",
]);

const ASIA_COUNTRIES = new Set<string>([
  "Japan", "China", "South Korea", "Singapore", "India",
  "Taiwan", "Indonesia", "Australia", "Malaysia", "Thailand",
  "Vietnam", "Philippines", "Hong Kong",
]);

const MENA_COUNTRIES = new Set<string>([
  "Saudi Arabia", "United Arab Emirates", "Egypt", "Qatar",
  "Bahrain", "Kuwait", "Oman", "Jordan", "Lebanon", "Turkey",
  "Kenya", "Nigeria", "South Africa", "Ghana", "Ethiopia",
  "Morocco", "Tunisia",
]);

export const EU_MAP_PROJECTS: MapProject[] = ALL_MAP_PROJECTS.filter(
  (p) => p.country !== undefined && EU_COUNTRIES.has(p.country),
);

export const ASIA_MAP_PROJECTS: MapProject[] = ALL_MAP_PROJECTS.filter(
  (p) => p.country !== undefined && ASIA_COUNTRIES.has(p.country),
);

export const MENA_MAP_PROJECTS: MapProject[] = ALL_MAP_PROJECTS.filter(
  (p) => p.country !== undefined && MENA_COUNTRIES.has(p.country),
);

export const ARAFION_ATTRIBUTION =
  "Arafion Product Engineering Lab — arafion.com";

export function mapProjectsForEntity(entity: {
  level: string;
  region: string;
  name: string;
}): { projects: MapProject[]; groupBy: "state" | "country" | null } {
  if (entity.level === "bloc") {
    const byRegion =
      entity.region === "eu"
        ? EU_MAP_PROJECTS
        : entity.region === "asia"
          ? ASIA_MAP_PROJECTS
          : entity.region === "mena"
            ? MENA_MAP_PROJECTS
            : NA_MAP_PROJECTS;
    return {
      projects: byRegion,
      groupBy: entity.region === "na" ? "state" : "country",
    };
  }
  if (entity.level === "state") {
    return {
      projects: ALL_MAP_PROJECTS.filter((p) => p.state === entity.name),
      groupBy: null,
    };
  }
  const inCountry = ALL_MAP_PROJECTS.filter((p) => p.country === entity.name);
  return {
    projects: inCountry,
    groupBy: entity.name === "United States" ? "state" : null,
  };
}
