import type { Entity, Region } from "@/types";
import { INTERNATIONAL_ENTITIES } from "./international-entities";

const NA_ENTITIES: Entity[] = [
  {
    id: "na-bloc",
    geoId: "na-bloc",
    name: "Americas",
    region: "na",
    level: "bloc",
    isOverview: true,
    canDrillDown: true,
    stance: "flagship",
    stancePortfolio: "flagship",
    stanceAI: "growth",
    contextBlurb:
      "Arafion's Americas portfolio spans AI trading systems in New York, clinical intelligence in San Francisco, fleet optimization in Austin, open banking in Toronto, and ESG analytics in Miami. The Americas is our largest market by active engagements.",
    legislation: [
      {
        id: "na-neurotrade",
        billCode: "NRT-2025",
        title: "NeuroTrade — AI Trading Platform",
        summary: "End-to-end AI-powered trading platform processing 2M+ daily signals. Real-time analytics dashboard, ML inference pipeline, and institutional-grade UI.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["ai-ml", "frontend-engineering", "data-engineering"],
        category: "ai-system",
        updatedDate: "2025-04-10",
      },
      {
        id: "na-meridian",
        billCode: "MRD-2024",
        title: "Meridian Health — Clinical Decision Support",
        summary: "HIPAA-compliant clinical AI used by 340+ hospitals. Diagnostic workflow engine and patient-facing portal.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["ai-ml", "backend-engineering", "cloud-infrastructure"],
        category: "ai-system",
        updatedDate: "2024-11-20",
      },
      {
        id: "na-atlas",
        billCode: "ATL-2025",
        title: "Atlas Logistics — Fleet Management OS",
        summary: "Real-time fleet platform orchestrating 12,000+ vehicles. Route optimization, driver mobile app, dispatch dashboard.",
        stage: "Live",
        stance: "flagship",
        impactTags: ["mobile", "backend-engineering", "data-engineering"],
        category: "platform-engineering",
        updatedDate: "2025-02-15",
      },
    ],
    keyFigures: [],
    news: [
      { id: "na-news-1", headline: "Arafion Named Top Product Engineering Partner by G2", source: "G2", date: "2025-09-01", url: "#" },
      { id: "na-news-2", headline: "How Arafion Built a Clinical AI Platform for 340+ Hospitals", source: "TechCrunch", date: "2025-03-12", url: "#" },
    ],
  },

  // United States (federal)
  {
    id: "us-federal",
    geoId: "840",
    name: "United States",
    region: "na",
    level: "federal",
    canDrillDown: true,
    stance: "flagship",
    stancePortfolio: "flagship",
    stanceAI: "flagship",
    contextBlurb:
      "Our largest market. Active projects in New York, San Francisco, Austin, Washington DC, and Miami. Click 'View state projects' to drill into individual states.",
    legislation: [
      { id: "us-neurotrade", billCode: "NRT-2025", title: "NeuroTrade — AI Trading Platform", summary: "End-to-end AI-powered trading platform processing 2M+ daily signals.", stage: "Live", stance: "flagship", impactTags: ["ai-ml", "frontend-engineering", "data-engineering"], category: "ai-system", updatedDate: "2025-04-10" },
      { id: "us-meridian", billCode: "MRD-2024", title: "Meridian Health — Clinical Decision Support", summary: "HIPAA-compliant clinical AI used by 340+ hospitals.", stage: "Live", stance: "flagship", impactTags: ["ai-ml", "backend-engineering", "cloud-infrastructure"], category: "ai-system", updatedDate: "2024-11-20" },
      { id: "us-atlas", billCode: "ATL-2025", title: "Atlas Logistics — Fleet Management OS", summary: "Real-time fleet platform orchestrating 12,000+ vehicles.", stage: "Live", stance: "flagship", impactTags: ["mobile", "backend-engineering", "data-engineering"], category: "platform-engineering", updatedDate: "2025-02-15" },
      { id: "us-civitas", billCode: "CVT-2026", title: "Civitas Gov — Citizen Services Platform", summary: "Digital services platform for 3 federal agencies.", stage: "In Progress", stance: "growth", impactTags: ["product-design", "design-systems", "frontend-engineering"], category: "product-build", updatedDate: "2026-01-15" },
      { id: "us-verde", billCode: "VRD-2025", title: "Verde Carbon — ESG Scoring & Analytics", summary: "ESG scoring and carbon tracking for Fortune 500 companies.", stage: "Live", stance: "growth", impactTags: ["data-engineering", "ai-ml", "frontend-engineering"], category: "data-dashboard", updatedDate: "2025-06-01" },
    ],
    keyFigures: [],
    news: [],
  },

  // ─── US States ────────────────────────────────────────────────────
  {
    id: "new-york", geoId: "New York", name: "New York", region: "na", level: "state",
    stance: "flagship", stancePortfolio: "flagship", stanceAI: "flagship",
    contextBlurb: "New York City — Home to NeuroTrade, our AI trading platform processing 2M+ daily signals for institutional clients on Wall Street.",
    legislation: [
      { id: "ny-neurotrade", billCode: "NRT-2025", title: "NeuroTrade — AI Trading Platform", summary: "End-to-end AI-powered trading platform with real-time analytics dashboard, ML inference pipeline, and institutional-grade UI.", stage: "Live", stance: "flagship", impactTags: ["ai-ml", "frontend-engineering", "data-engineering"], category: "ai-system", updatedDate: "2025-04-10" },
    ],
    keyFigures: [], news: [],
  },
  {
    id: "california", geoId: "California", name: "California", region: "na", level: "state",
    stance: "flagship", stancePortfolio: "flagship", stanceAI: "flagship",
    contextBlurb: "San Francisco — Meridian Health's HIPAA-compliant clinical decision support system used by 340+ hospitals across the country.",
    legislation: [
      { id: "ca-meridian", billCode: "MRD-2024", title: "Meridian Health — Clinical Decision Support", summary: "HIPAA-compliant clinical AI with diagnostic workflow engine and patient-facing portal.", stage: "Live", stance: "flagship", impactTags: ["ai-ml", "backend-engineering", "cloud-infrastructure"], category: "ai-system", updatedDate: "2024-11-20" },
    ],
    keyFigures: [], news: [],
  },
  {
    id: "texas", geoId: "Texas", name: "Texas", region: "na", level: "state",
    stance: "flagship", stancePortfolio: "flagship", stanceAI: "growth",
    contextBlurb: "Austin — Atlas Logistics' real-time fleet management platform orchestrating 12,000+ vehicles with route optimization and dispatch tools.",
    legislation: [
      { id: "tx-atlas", billCode: "ATL-2025", title: "Atlas Logistics — Fleet Management OS", summary: "Real-time fleet platform with route optimization, driver mobile app, and dispatch dashboard.", stage: "Live", stance: "flagship", impactTags: ["mobile", "backend-engineering", "data-engineering"], category: "platform-engineering", updatedDate: "2025-02-15" },
    ],
    keyFigures: [], news: [],
  },
  {
    id: "florida", geoId: "Florida", name: "Florida", region: "na", level: "state",
    stance: "growth", stancePortfolio: "growth", stanceAI: "growth",
    contextBlurb: "Miami — Verde Carbon's ESG scoring and carbon tracking platform serving Fortune 500 companies with real-time environmental analytics.",
    legislation: [
      { id: "fl-verde", billCode: "VRD-2025", title: "Verde Carbon — ESG Scoring & Analytics", summary: "ESG scoring and carbon tracking for Fortune 500 companies. Data ingestion, scoring algorithms, executive reporting.", stage: "Live", stance: "growth", impactTags: ["data-engineering", "ai-ml", "frontend-engineering"], category: "data-dashboard", updatedDate: "2025-06-01" },
    ],
    keyFigures: [], news: [],
  },
  {
    id: "virginia", geoId: "Virginia", name: "Virginia", region: "na", level: "state",
    stance: "growth", stancePortfolio: "growth", stanceAI: "sprint",
    contextBlurb: "Washington DC — Civitas Gov's digital services platform modernizing citizen-government interaction for 3 federal agencies.",
    legislation: [
      { id: "va-civitas", billCode: "CVT-2026", title: "Civitas Gov — Citizen Services Platform", summary: "Digital services platform for 3 federal agencies with accessibility-first design system.", stage: "In Progress", stance: "growth", impactTags: ["product-design", "design-systems", "frontend-engineering"], category: "product-build", updatedDate: "2026-01-15" },
    ],
    keyFigures: [], news: [],
  },
  {
    id: "georgia", geoId: "Georgia", name: "Georgia", region: "na", level: "state",
    stance: "sprint", stancePortfolio: "sprint", stanceAI: "sprint",
    contextBlurb: "Atlanta — Building a logistics coordination platform for Delta's ground operations. Real-time gate assignment, crew scheduling, and baggage tracking.",
    legislation: [
      { id: "ga-delta", billCode: "DLT-2026", title: "Delta — Ground Operations Platform", summary: "Real-time gate assignment, crew scheduling, and baggage tracking for one of the world's largest airlines.", stage: "In Progress", stance: "sprint", impactTags: ["backend-engineering", "mobile", "data-engineering"], category: "platform-engineering", updatedDate: "2026-02-20" },
    ],
    keyFigures: [], news: [],
  },
  {
    id: "washington", geoId: "Washington", name: "Washington", region: "na", level: "state",
    stance: "growth", stancePortfolio: "growth", stanceAI: "growth",
    contextBlurb: "Seattle — Cloud cost intelligence platform for a major enterprise client. FinOps dashboards, anomaly detection, and automated savings recommendations.",
    legislation: [
      { id: "wa-cloudcost", billCode: "CCO-2025", title: "CloudScope — FinOps Intelligence", summary: "Cloud cost optimization platform with spend anomaly detection and automated rightsizing recommendations.", stage: "Live", stance: "growth", impactTags: ["cloud-infrastructure", "data-engineering", "frontend-engineering"], category: "data-dashboard", updatedDate: "2025-08-01" },
    ],
    keyFigures: [], news: [],
  },
  {
    id: "illinois", geoId: "Illinois", name: "Illinois", region: "na", level: "state",
    stance: "sprint", stancePortfolio: "sprint", stanceAI: "advisory",
    contextBlurb: "Chicago — Product strategy and design system buildout for a major insurance provider's digital transformation initiative.",
    legislation: [
      { id: "il-insurtech", billCode: "INS-2026", title: "InsureTech — Digital Transformation", summary: "Design system and product strategy for a major insurance provider's customer-facing platform redesign.", stage: "In Progress", stance: "sprint", impactTags: ["product-design", "design-systems", "strategy"], category: "product-build", updatedDate: "2026-03-01" },
    ],
    keyFigures: [], news: [],
  },
  {
    id: "massachusetts", geoId: "Massachusetts", name: "Massachusetts", region: "na", level: "state",
    stance: "growth", stancePortfolio: "growth", stanceAI: "flagship",
    contextBlurb: "Boston — BioSync's drug discovery acceleration platform. ML models for molecular simulation, clinical trial matching, and research collaboration tools.",
    legislation: [
      { id: "ma-biosync", billCode: "BIO-2025", title: "BioSync — Drug Discovery Platform", summary: "ML-powered drug discovery acceleration with molecular simulation, clinical trial matching, and research collaboration.", stage: "Live", stance: "flagship", impactTags: ["ai-ml", "backend-engineering", "cloud-infrastructure"], category: "ai-system", updatedDate: "2025-05-15" },
    ],
    keyFigures: [], news: [],
  },
  {
    id: "colorado", geoId: "Colorado", name: "Colorado", region: "na", level: "state",
    stance: "sprint", stancePortfolio: "sprint", stanceAI: "sprint",
    contextBlurb: "Denver — Outdoor retail analytics platform for a major sportswear brand. Customer segmentation, demand forecasting, and omnichannel inventory optimization.",
    legislation: [
      { id: "co-sportswear", billCode: "SPT-2026", title: "TrailMetrics — Retail Analytics", summary: "Customer segmentation, demand forecasting, and omnichannel inventory optimization for outdoor retail.", stage: "In Progress", stance: "sprint", impactTags: ["data-engineering", "ai-ml", "frontend-engineering"], category: "data-dashboard", updatedDate: "2026-01-20" },
    ],
    keyFigures: [], news: [],
  },

  // Canada
  {
    id: "canada-federal",
    geoId: "124",
    name: "Canada",
    region: "na",
    level: "federal",
    stancePortfolio: "flagship",
    stanceAI: "growth",
    contextBlurb: "Toronto — Finova's open banking aggregation platform connecting 40+ Canadian financial institutions.",
    legislation: [
      { id: "ca-finova", billCode: "FNV-2024", title: "Finova — Open Banking Aggregation Platform", summary: "Connecting 40+ Canadian financial institutions. API gateway, consent management, and real-time transaction enrichment.", stage: "Live", stance: "flagship", impactTags: ["api-development", "backend-engineering", "cloud-infrastructure"], category: "platform-engineering", updatedDate: "2024-10-15" },
    ],
    keyFigures: [],
    news: [],
  },
];

export const ENTITIES: Entity[] = [...NA_ENTITIES, ...INTERNATIONAL_ENTITIES];

export function getEntity(geoId: string, region: Region): Entity | null {
  return ENTITIES.find((e) => e.geoId === geoId && e.region === region) ?? null;
}

export function getOverviewEntity(region: Region): Entity | null {
  return ENTITIES.find((e) => e.region === region && e.isOverview) ?? null;
}

export function getEntitiesByRegion(region: Region): Entity[] {
  return ENTITIES.filter((e) => e.region === region);
}
