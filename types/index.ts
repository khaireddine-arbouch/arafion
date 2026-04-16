export type Region = "na" | "eu" | "asia" | "mena";

export type NaView = "countries" | "states" | "counties";

export interface ViewTarget {
  region: Region;
  naView: NaView;
  selectedGeoId: string | null;
  selectedStateName?: string | null;
  selectedCountyFips?: string | null;
}

// ─── Project Stages ─────────────────────────────────────────────────
export type Stage =
  | "Discovery"
  | "In Progress"
  | "Shipped"
  | "Live"
  | "Archived";

/**
 * Project engagement depth — maps to the visual legend on the map.
 *
 *  - flagship    — Marquee engagement, full product build. Deep involvement.
 *  - growth      — Active ongoing relationship. Scaling / iterating.
 *  - sprint      — Focused sprint or fixed-scope delivery.
 *  - advisory    — Strategy, audit, or consulting engagement.
 *  - none        — No active engagement (placeholder).
 */
export type StanceType =
  | "flagship"
  | "growth"
  | "sprint"
  | "advisory"
  | "none";

export const STANCE_LABEL: Record<StanceType, string> = {
  flagship: "Flagship Build",
  growth: "Growth Partnership",
  sprint: "Focused Sprint",
  advisory: "Advisory",
  none: "Exploration",
};

export type GovLevel = "federal" | "state" | "bloc";

// ─── Capability Tags (replace ImpactTags) ───────────────────────────
export type ImpactTag =
  | "product-design"
  | "frontend-engineering"
  | "backend-engineering"
  | "ai-ml"
  | "data-engineering"
  | "cloud-infrastructure"
  | "mobile"
  | "design-systems"
  | "api-development"
  | "devops"
  | "strategy"
  | "branding";

// ─── Project Categories (replace LegislationCategory) ────────────────
export type LegislationCategory =
  | "product-build"
  | "platform-engineering"
  | "ai-system"
  | "data-dashboard"
  | "corporate-website"
  | "mobile-app"
  | "internal-tool"
  | "design-system";

// ─── Dimensions (capability lenses) ──────────────────────────────────
export type Dimension =
  | "overall"
  | "engineering"
  | "design"
  | "ai"
  | "infrastructure";

/** Map lens: portfolio (engineering/design) vs AI & infrastructure. */
export type DimensionLens = "portfolio" | "ai";

export const PORTFOLIO_LENS_DIMENSIONS: Dimension[] = [
  "engineering",
  "design",
];

export const AI_DIMENSIONS: Dimension[] = [
  "ai",
  "infrastructure",
];

export const IMPACT_TAG_LABEL: Record<ImpactTag, string> = {
  "product-design": "Product Design",
  "frontend-engineering": "Frontend Engineering",
  "backend-engineering": "Backend Engineering",
  "ai-ml": "AI & Machine Learning",
  "data-engineering": "Data Engineering",
  "cloud-infrastructure": "Cloud Infrastructure",
  "mobile": "Mobile Development",
  "design-systems": "Design Systems",
  "api-development": "API Development",
  "devops": "DevOps & CI/CD",
  "strategy": "Product Strategy",
  "branding": "Brand & Identity",
};

export const CATEGORY_LABEL: Record<LegislationCategory, string> = {
  "product-build": "Product Build",
  "platform-engineering": "Platform Engineering",
  "ai-system": "AI System",
  "data-dashboard": "Data Dashboard",
  "corporate-website": "Corporate Website",
  "mobile-app": "Mobile App",
  "internal-tool": "Internal Tool",
  "design-system": "Design System",
};

export const DIMENSION_LABEL: Record<Dimension, string> = {
  overall: "All capabilities",
  engineering: "Engineering",
  design: "Design",
  ai: "AI & Data",
  infrastructure: "Infrastructure",
};

// ─── Deliverable (replaces Legislation) ──────────────────────────────
export interface Legislation {
  id: string;
  billCode: string;
  title: string;
  summary: string;
  stage: Stage;
  stance?: StanceType;
  dimensionStances?: Partial<Record<Exclude<Dimension, "overall">, StanceType>>;
  impactTags: ImpactTag[];
  category: LegislationCategory;
  updatedDate: string;
  partyOrigin?: string;
  sourceUrl?: string;
  relatedMapProjectIds?: string[];
  legiscanUrl?: string;
  legiscanId?: number;
  sponsors?: string[];
  voteTally?: {
    yea: number;
    nay: number;
    abstain: number;
    notVoting: number;
    passed: boolean;
    voteDate: string;
    rollCallId?: string;
  };
}

export interface NewsItem {
  id: string;
  headline: string;
  source: string;
  date: string;
  url: string;
  summary?: string;
  summarySource?: "article" | "headline-only";
}

// ─── Entity (market / region / client hub) ───────────────────────────
export interface Entity {
  id: string;
  geoId: string;
  name: string;
  region: Region;
  level: GovLevel;
  isOverview?: boolean;
  canDrillDown?: boolean;
  stance?: StanceType;
  /** Engagement stance for engineering + design lens (portfolio map story). */
  stancePortfolio: StanceType;
  stanceAI: StanceType;
  contextBlurb: string;
  legislation: Legislation[];
  keyFigures: never[];
  news: NewsItem[];
}

// ─── Map project pin (geo-located client / case study) ─────────────────
export type MapProjectStatus = "live" | "in-progress" | "concept";

export interface MapProject {
  id: string;
  operator: string;
  location: string;
  state?: string;
  country?: string;
  lat: number;
  lng: number;
  capacityMW?: number;
  status: MapProjectStatus;
  yearBuilt?: number;
  yearProposed?: number;
  notes?: string;
  concerns?: string[];
  source: "arafion" | "researched";
  primaryUser?: string;
  computeH100e?: number;
  costUSD?: number;
  proposal?: ProposalInfo;
}

export interface ProposalGate {
  label: string;
  status: "done" | "pending" | "blocked";
  date?: string;
}

export type ProposalGateStatus = "done" | "pending" | "blocked";

export interface ProposalInfo {
  process?: ProposalGate[];
  nextDecision?: { body: string; what: string; date?: string };
  powerSource?: string;
  waterSource?: string;
  opposition?: string[];
  requirements?: string[];
}

// ─── Municipal (keep shape for compatibility, will be empty) ─────────
export type MunicipalActionStatus =
  | "enacted"
  | "proposed"
  | "under-review"
  | "failed";

export interface MunicipalAction {
  title: string;
  date: string;
  status: MunicipalActionStatus;
  summary: string;
  sourceUrl?: string;
}

export interface MunicipalEntity {
  id: string;
  name: string;
  fips: string;
  state: string;
  stateCode: string;
  type: "county" | "city" | "town" | "township";
  actions: MunicipalAction[];
  concerns: ImpactTag[];
  contextBlurb: string;
}

export const STATE_FIPS: Record<string, string> = {
  Alabama: "01", Alaska: "02", Arizona: "04", Arkansas: "05", California: "06",
  Colorado: "08", Connecticut: "09", Delaware: "10", Florida: "12", Georgia: "13",
  Hawaii: "15", Idaho: "16", Illinois: "17", Indiana: "18", Iowa: "19",
  Kansas: "20", Kentucky: "21", Louisiana: "22", Maine: "23", Maryland: "24",
  Massachusetts: "25", Michigan: "26", Minnesota: "27", Mississippi: "28",
  Missouri: "29", Montana: "30", Nebraska: "31", Nevada: "32",
  "New Hampshire": "33", "New Jersey": "34", "New Mexico": "35", "New York": "36",
  "North Carolina": "37", "North Dakota": "38", Ohio: "39", Oklahoma: "40",
  Oregon: "41", Pennsylvania: "42", "Rhode Island": "44", "South Carolina": "45",
  "South Dakota": "46", Tennessee: "47", Texas: "48", Utah: "49", Vermont: "50",
  Virginia: "51", Washington: "53", "West Virginia": "54", Wisconsin: "55",
  Wyoming: "56",
};

// ─── Energy types (kept for compat, but won't be used) ───────────────
export type FuelType =
  | "natural-gas" | "coal" | "nuclear" | "hydro" | "solar"
  | "wind" | "biomass" | "geothermal" | "battery" | "oil" | "other";

export interface PowerPlant {
  id: string;
  name: string;
  lat: number;
  lng: number;
  capacityMW: number;
  fuelType: FuelType;
  state: string;
  stateCode: string;
}

export interface StateEnergyProfile {
  state: string;
  stateCode: string;
  totalCapacityMW: number;
  totalGenerationMWh: number;
  energyMix: Array<{ source: FuelType; pct: number; generationMWh: number }>;
  plantCount: number;
  year: number;
}

export type VotePosition = "yea" | "nay" | "abstain" | "not-voting";
export interface VoteRecord { billId: string; billCode: string; voteDate: string; position: VotePosition; rollCallId?: string; sourceUrl?: string; }
export interface AlignmentScore { score: number; totalVotes: number; alignedVotes: number; contradictoryVotes: number; }
export interface SuspiciousVote { billCode: string; billTitle: string; position: VotePosition; industry: string; reason: string; confidence: "high" | "medium"; }

export interface Legislator {
  id: string;
  name: string;
  role: string;
  party: string;
  stance: StanceType;
}

export const REGION_LABEL: Record<Region, string> = {
  na: "Americas",
  eu: "Europe",
  asia: "Asia Pacific",
  mena: "MENA & Africa",
};

export const REGION_ORDER: Region[] = ["na", "eu", "asia", "mena"];
