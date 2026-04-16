import type { MapProject } from "@/types";
import researchedData from "@/data/map-projects/researched.json";
import internationalData from "@/data/map-projects/international.json";

interface MapProjectsFile {
  generatedAt: string;
  /** Legacy key kept for compatibility with older exports */
  facilities?: MapProject[];
  projects?: MapProject[];
}

const RESEARCHED = researchedData as unknown as MapProjectsFile;
const INTERNATIONAL = internationalData as unknown as MapProjectsFile;

function projectsFromFile(f: MapProjectsFile): MapProject[] {
  return f.projects ?? f.facilities ?? [];
}

const merged = new Map<string, MapProject>();
for (const p of projectsFromFile(RESEARCHED)) merged.set(p.id, p);
for (const p of projectsFromFile(INTERNATIONAL)) {
  if (!merged.has(p.id)) merged.set(p.id, p);
}

/** All geo-located engagements shown on the map. */
export const ALL_MAP_PROJECTS: MapProject[] = Array.from(merged.values());

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
