import type { ImpactTag, MapProject, MapProjectStatus } from "@/types";
import arafionProjectsRaw from "@/data/arafion-data/projects.json";
import {
  buildPortfolioProjects,
  type ArafionProjectRow,
  type PortfolioProject,
} from "@/lib/portfolio-view";
import { getSiteConfig, type SiteId } from "@/lib/site/config";
import {
  homeMarketCountry,
  israelPinCoords,
  isIsraelOnlySite,
  scrubNonIsraelPlaces,
} from "@/lib/site/geography";
import { isProjectOfferingAllowed } from "@/lib/site/offerings";

function localizePortfolioForSite(projects: PortfolioProject[]): PortfolioProject[] {
  if (!isIsraelOnlySite()) return projects;
  const market = homeMarketCountry();
  return projects.map((project) => {
    const pin = israelPinCoords(project.slug.length + project.weight);
    return {
      ...project,
      country: market,
      regionLabel: market,
      locationLabel: market,
      globeLabel: `${project.serviceLabels[0] ?? "Project"} · ${market}`,
      shortDescription: scrubNonIsraelPlaces(project.shortDescription, "en"),
      lat: pin.lat,
      lng: pin.lng,
    };
  });
}

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

export function isProjectVisibleOnSite(
  row: Pick<ArafionProjectRow, "sites">,
  siteId: SiteId = getSiteConfig().id,
): boolean {
  if (!row.sites || row.sites.length === 0) return true;
  return row.sites.includes(siteId);
}

function toMapProject(view: PortfolioProject, row: ArafionProjectRow): MapProject {
  const filterCountry = isIsraelOnlySite()
    ? homeMarketCountry()
    : normalizeFilterCountry(row.location.country, view.country);
  const pin = isIsraelOnlySite()
    ? israelPinCoords(view.slug.length + view.weight)
    : { lat: view.lat, lng: view.lng };
  const state =
    filterCountry === "United States" ? inferUSState(pin.lat, pin.lng) : undefined;

  return {
    id: view.id,
    slug: view.slug,
    operator: view.displayTitle,
    displayTitle: view.displayTitle,
    globeLabel: isIsraelOnlySite()
      ? `${view.serviceLabels[0] ?? "Project"} · Israel`
      : view.globeLabel,
    location: isIsraelOnlySite() ? homeMarketCountry() : view.locationLabel,
    regionLabel: isIsraelOnlySite() ? homeMarketCountry() : view.regionLabel,
    state,
    country: filterCountry,
    lat: pin.lat,
    lng: pin.lng,
    engagementWeight: view.weight,
    status: mapEngagementStatus(row.status),
    rawStatus: row.status,
    statusLabel: view.statusLabel,
    notes: isIsraelOnlySite()
      ? scrubNonIsraelPlaces(view.shortDescription, "en")
      : view.shortDescription,
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

const site = getSiteConfig();
const rows = (arafionProjectsRaw as unknown as ArafionProjectRow[]).filter(
  (row) =>
    isProjectVisibleOnSite(row, site.id) &&
    isProjectOfferingAllowed(row.serviceCategories, site.id),
);
export const ALL_PORTFOLIO_PROJECTS: PortfolioProject[] =
  localizePortfolioForSite(buildPortfolioProjects(rows));

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
  "Morocco", "Tunisia", "Israel", "Palestine",
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

export const SITE_ATTRIBUTION = `${site.name} — ${site.domain}`;

/** @deprecated Use SITE_ATTRIBUTION */
export const ARAFION_ATTRIBUTION = SITE_ATTRIBUTION;

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
