export interface ArafionProjectRow {
  id: string;
  title: string;
  slug?: string;
  status: string;
  projectType?: string;
  visibility?: string;
  targetMarkets?: string[];
  client: {
    name: string;
    publicName: string;
    isConfidential: boolean;
  };
  location: {
    country: string;
    city: string | null;
    region: string;
    lat: number | null;
    lng: number | null;
  };
  industry?: string[];
  serviceCategories: string[];
  proofTypes?: string[];
  publicUrl?: string | null;
  shortDescription: string;
  whatWeBuilt?: string[];
  saferTechnicalStack?: string[];
  bestSalesAngle?: string;
  doNotClaim?: string[];
  featured?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  status: string;
  statusLabel: string;
  clientPublicName: string;
  isConfidential: boolean;
  displayTitle: string;
  globeLabel: string;
  locationLabel: string;
  country: string;
  region: string;
  regionLabel: string;
  lat: number;
  lng: number;
  serviceCategories: string[];
  serviceLabels: string[];
  proofTypes: string[];
  stackTags: string[];
  shortDescription: string;
  publicUrl: string | null;
  featured: boolean;
  weight: number;
}

const SERVICE_LABELS: Record<string, string> = {
  websites: "Websites",
  "digital-presence": "Digital presence",
  "saas-software": "SaaS & software",
  "ai-systems": "AI systems",
  "dashboards-intelligence": "Dashboards & intelligence",
  "marketing-production": "Marketing & production",
  "architecture-visualization": "Architecture visualization",
  "3d-rendering": "3D rendering",
  ecommerce: "E-commerce",
  "internal-tools": "Internal tools",
};

const STATUS_LABELS: Record<string, string> = {
  live: "Live",
  delivered: "Delivered",
  active: "Active",
  "in-development": "In development",
  prototype: "Prototype",
  "planned-or-in-progress": "In development",
};

const REGION_LABELS: Record<string, string> = {
  americas: "Americas",
  north_america: "Americas",
  "north-america": "Americas",
  europe: "Europe",
  eu: "Europe",
  mena: "MENA & Africa",
  africa: "MENA & Africa",
  "middle-east": "MENA & Africa",
  apac: "Asia Pacific",
  asia: "Asia Pacific",
  international: "International",
  "morocco-international": "Morocco / International",
};

const REGION_CENTROIDS: Record<string, { country: string; lat: number; lng: number }> = {
  americas: { country: "United States", lat: 40.7128, lng: -74.006 },
  north_america: { country: "United States", lat: 40.7128, lng: -74.006 },
  "north-america": { country: "United States", lat: 40.7128, lng: -74.006 },
  europe: { country: "France", lat: 48.8566, lng: 2.3522 },
  eu: { country: "France", lat: 48.8566, lng: 2.3522 },
  mena: { country: "Morocco", lat: 31.7917, lng: -7.0926 },
  africa: { country: "Morocco", lat: 31.7917, lng: -7.0926 },
  "middle-east": { country: "Turkey", lat: 39.9334, lng: 32.8597 },
  apac: { country: "Singapore", lat: 1.3521, lng: 103.8198 },
  asia: { country: "Singapore", lat: 1.3521, lng: 103.8198 },
  international: { country: "France", lat: 48.8566, lng: 2.3522 },
  "morocco-international": { country: "Morocco", lat: 31.7917, lng: -7.0926 },
};

const COUNTRY_CENTROIDS: Record<string, { lat: number; lng: number }> = {
  Morocco: { lat: 31.7917, lng: -7.0926 },
  Turkey: { lat: 39.9334, lng: 32.8597 },
  Turkiye: { lat: 39.9334, lng: 32.8597 },
  France: { lat: 48.8566, lng: 2.3522 },
  "United Kingdom": { lat: 51.5072, lng: -0.1276 },
  Germany: { lat: 52.52, lng: 13.405 },
  "United States": { lat: 40.7128, lng: -74.006 },
  Canada: { lat: 43.6532, lng: -79.3832 },
  Singapore: { lat: 1.3521, lng: 103.8198 },
  "Saudi Arabia": { lat: 24.7136, lng: 46.6753 },
  "United Arab Emirates": { lat: 25.2048, lng: 55.2708 },
  Qatar: { lat: 25.2854, lng: 51.531 },
  Egypt: { lat: 30.0444, lng: 31.2357 },
  Kenya: { lat: -1.2864, lng: 36.8172 },
  Nigeria: { lat: 6.5244, lng: 3.3792 },
  "South Africa": { lat: -26.2041, lng: 28.0473 },
  India: { lat: 28.6139, lng: 77.209 },
  China: { lat: 31.2304, lng: 121.4737 },
  Japan: { lat: 35.6762, lng: 139.6503 },
};

function fallbackSlug(id: string, title: string): string {
  return (
    id ||
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
}

function normalizeCountry(raw: string): string {
  const cleaned = raw.trim();
  const composite = /^(.*?)\s*\/\s*International$/i.exec(cleaned);
  const country = composite ? composite[1].trim() : cleaned;
  if (country === "Türkiye" || country === "Turkiye") return "Turkey";
  return country;
}

function regionKey(raw: string): string {
  return raw.trim().toLowerCase().replace(/\s+/g, "-");
}

function locationFor(row: ArafionProjectRow): {
  country: string;
  lat: number;
  lng: number;
} {
  const normalized = normalizeCountry(row.location.country);
  const region = regionKey(row.location.region);
  const country = normalized === "International" ? "" : normalized;

  if (row.location.lat != null && row.location.lng != null) {
    return {
      country:
        country ||
        REGION_CENTROIDS[region]?.country ||
        inferCountryFromCoords(row.location.lat, row.location.lng),
      lat: row.location.lat,
      lng: row.location.lng,
    };
  }

  if (country && COUNTRY_CENTROIDS[country]) {
    return { country, ...COUNTRY_CENTROIDS[country] };
  }

  const fallback = REGION_CENTROIDS[region] ?? REGION_CENTROIDS.international;
  return { country: country || fallback.country, lat: fallback.lat, lng: fallback.lng };
}

function inferCountryFromCoords(lat: number, lng: number): string {
  if (lat >= 27 && lat <= 36 && lng >= -13 && lng <= -1) return "Morocco";
  if (lat >= 36 && lat <= 42.5 && lng >= 25 && lng <= 45) return "Turkey";
  if (lat >= 24 && lat <= 50 && lng >= -125 && lng <= -66) return "United States";
  if (lat >= 49 && lat <= 70 && lng >= -141 && lng <= -52) return "Canada";
  if (lat >= 49 && lat <= 61 && lng >= -11 && lng <= 2) return "United Kingdom";
  if (lat >= 47 && lat <= 55 && lng >= 5 && lng <= 24) return "Germany";
  return "France";
}

export function serviceCategoryLabel(category: string): string {
  return (
    SERVICE_LABELS[category] ??
    category
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  );
}

export function statusLabel(status: string): string {
  return STATUS_LABELS[status] ?? status.charAt(0).toUpperCase() + status.slice(1);
}

export function publicProjectTitle(row: ArafionProjectRow): string {
  if (row.client.isConfidential) return "Confidential engagement";
  if (row.client.publicName && row.client.publicName !== "Arafion Internal Product") {
    return `${row.client.publicName} - ${row.title}`;
  }
  return row.title;
}

export function buildPortfolioProjects(rows: ArafionProjectRow[]): PortfolioProject[] {
  return rows.map((row, index) => {
    const loc = locationFor(row);
    const key = regionKey(row.location.region);
    const regionLabel = REGION_LABELS[key] ?? row.location.region ?? "International";
    const serviceLabels = row.serviceCategories.map(serviceCategoryLabel);
    const displayTitle = publicProjectTitle(row);
    const locationLabel = row.location.city
      ? `${row.location.city}, ${loc.country}`
      : regionLabel === "International"
        ? loc.country
        : regionLabel;

    return {
      id: row.id,
      title: row.title,
      slug: row.slug ?? fallbackSlug(row.id, row.title),
      status: row.status,
      statusLabel: statusLabel(row.status),
      clientPublicName: row.client.publicName,
      isConfidential: row.client.isConfidential,
      displayTitle,
      globeLabel: `${serviceLabels[0] ?? "Project"} · ${regionLabel}`,
      locationLabel,
      country: loc.country,
      region: row.location.region,
      regionLabel,
      lat: loc.lat,
      lng: loc.lng,
      serviceCategories: row.serviceCategories,
      serviceLabels,
      proofTypes: row.proofTypes ?? [],
      stackTags: row.saferTechnicalStack ?? [],
      shortDescription: row.shortDescription,
      publicUrl: row.publicUrl ?? null,
      featured: !!row.featured,
      weight: (row.featured ? 100 : 0) + Math.max(0, 50 - index),
    };
  });
}
