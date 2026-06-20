import type { Locale } from "@/lib/i18n/translations";
import { getCaseStudyText } from "@/lib/i18n/case-study-content";

/**
 * Extended metadata for case study detail pages.
 * Keyed by project slug (matching projects.json id/slug).
 */
export interface CaseStudyMeta {
  imageFolder: string;
  images: string[];
  overview: string[];
  challenge?: string;
  outcome?: string;
}

const CS: Record<string, CaseStudyMeta> = {
  "nileroute-os": {
    imageFolder: "nileroute-os",
    images: [
      "image.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
      "image6.png",
      "image7.png",
      "image8.png",
      "image9.png",
    ],
    overview: [
      "NileRoute OS is a multi-tenant freight logistics operations platform built for the complexities of international shipping — container tracking, shipment lifecycle management, document handling, and AI-assisted operational queries, all within a single authenticated workspace.",
      "The system was built from the ground up to handle real operational constraints: role-based access for different team members, a complete audit trail on every entity, and an NVIDIA-powered AI assistant that understands the domain and can answer queries against live shipment data.",
      "Every major workflow is covered — from customer onboarding and request intake, through shipment assignment and container management, to document storage and delivery confirmation. The platform is live, deployed on Vercel, and backed by Supabase with Row Level Security.",
    ],
    challenge:
      "Freight logistics operations involve multiple user roles with different access requirements, high-stakes document management, and the need for real-time data across shipments, containers, and customers — all while maintaining a clean, fast interface that operators can rely on daily.",
    outcome:
      "A fully operational SaaS logistics platform with multi-tenant isolation, complete shipment lifecycle coverage, a document drive, and an AI assistant capable of answering domain-specific queries against live operational data.",
  },

  "evo2-variant-intelligence": {
    imageFolder: "Evo2-Variant-Intelligence",
    images: [
      "Predictions.png",
      "Analysis Sessions.png",
      "Assembly Analysis.png",
      "Mol 3d View.png",
      "Docs.png",
    ],
    overview: [
      "Evo2 Variant Intelligence is a full-stack genomics research platform built to make variant pathogenicity prediction accessible and interpretable for researchers. It connects to the Evo2 7B model running on H100 GPU infrastructure via Modal, accepting SNV, deletion, and insertion variants and returning likelihood scores with clinical context.",
      "The platform integrates directly with NCBI for gene search, UCSC for sequence fetching, and ClinVar for variant annotation — giving researchers a single interface for the full analysis workflow. A Molstar 3D viewer renders protein structure context alongside prediction results.",
      "Built with a Next.js frontend, Python Modal backend, and Supabase for session and history management, the platform demonstrates serious backend inference architecture: real GPU compute, external scientific API integrations, and a research-grade UX designed for domain experts.",
    ],
    challenge:
      "Connecting a cutting-edge genomic foundation model to a usable research interface required bridging async GPU inference, multiple external scientific APIs, and a complex domain UX — all while keeping the experience fast and interpretable.",
    outcome:
      "A production-grade genomics research console with live Evo2 model inference, ClinVar and NCBI integration, Molstar 3D visualization, and a session-persistent analysis history — demonstrating real deep-tech engineering capability.",
  },

  signalsframe: {
    imageFolder: "SignalsFrame",
    images: ["image.png", "image1.png", "image2.png"],
    overview: [
      "SignalsFrame is a browser-based video, audio, and photo editing application built entirely in the browser — no installations, no server-side rendering of media. It runs a full timeline engine, FFmpeg-powered export pipeline, and WASM audio processing modules directly in the user's browser using WebCodecs and WebGPU.",
      "The product handles the full content production workflow: clip import and arrangement, audio mixing, color and filter application, social preset exports, and project recovery. Clerk handles authentication, Convex manages the backend state and file storage, and PostHog tracks usage.",
      "The architecture is technically demanding — browser-based media processing at this level requires careful WASM memory management, frame-accurate timeline state, and a robust export pipeline that handles different target formats and aspect ratios.",
    ],
    outcome:
      "A live browser-based media production platform with a timeline engine, FFmpeg export pipeline, WASM audio modules, social presets, and project recovery — all running in-browser without plugins or installations.",
  },

  "intelligence-console": {
    imageFolder: "supply-chain-intelligence",
    images: ["image1.png", "image2.png", "image3.png", "image4.png"],
    overview: [
      "The Intelligence Console is a supply chain, ESG, and company-performance intelligence dashboard built as an enterprise storytelling demo for procurement teams, CFOs, and operations risk managers. It uses deterministic mock data and scenario modeling to demonstrate what a real deployment would look like.",
      "The platform covers executive KPI dashboards, supplier risk metrics with heatmaps, a scenario lab for modeling procurement decisions, DCF valuation views, peer benchmarking, and an investigation workspace for drilling into specific suppliers or events.",
      "Additional capabilities include PDF export via jsPDF/html2canvas, multi-company switching, and an AI chat endpoint powered by the Vercel AI SDK and OpenAI — allowing analysts to ask questions against the dashboard context.",
    ],
    outcome:
      "An enterprise-grade intelligence demo platform with executive dashboards, supplier risk scoring, scenario modeling, DCF analysis, PDF export, and an AI query layer — purpose-built to demonstrate Arafion's capability for enterprise analytics engagements.",
  },

  "atlas-intelligence": {
    imageFolder: "Atlas-Intelligence",
    images: ["Scan.png", "Investigate.png", "Decide.png", "Execute.png"],
    overview: [
      "Atlas Intelligence is a reusable intelligence UI framework built as an internal demo shell. It implements four operational modes — Scan, Investigate, Decide, and Execute — each with purpose-built views, resizable panels, and a command palette, all driven by mock data.",
      "The platform was designed as a composable foundation that can be adapted for different enterprise intelligence use cases: market intelligence, procurement risk, operations monitoring, or executive decision support. Every component — the command palette, the sidebar entities, the right context panel, the charts — was built to be reusable.",
      "Built with Next.js, Zustand for state persistence, and a vendored design system, the platform demonstrates Arafion's ability to build serious, keyboard-driven intelligence interfaces at speed.",
    ],
    outcome:
      "A reusable four-mode intelligence UI framework with command palette, resizable panels, Zustand state persistence, and a vendored design system — demonstrating enterprise UI architecture capability.",
  },

  "atlas-geoint": {
    imageFolder: "Atlas-Intelligence",
    images: ["Scan.png", "Investigate.png"],
    overview: [
      "Atlas GEOINT is a geospatial intelligence workstation prototype for visualizing incidents, entities, and movement corridors on an interactive map. It was built to demonstrate Arafion's capability for OSINT and map-based decision support workflows.",
      "The platform renders incident severity markers, entity layers, corridor overlays, confidence scores, and provenance data on a Leaflet map. A drill panel surfaces evidence linking, decision tagging, and an audit timeline — giving analysts the full context behind each data point.",
    ],
    outcome:
      "A geospatial intelligence prototype with layered incident visualization, confidence scoring, evidence linking, decision tagging, and an audit timeline — demonstrating capability for map-based decision support platforms.",
  },

  draftly: {
    imageFolder: "Draftly",
    images: ["image.png"],
    overview: [
      "Draftly is a web-based collaborative design project platform for managing design projects, mood boards, assets, and authenticated workspaces. It was built as a platform prototype demonstrating a design workflow management product.",
      "The platform supports authenticated project creation and listing, mood board upload and management, protected dashboard access with project-level access control, and a style-guide data query layer. Convex handles both the backend state and file storage, with Convex Auth managing authentication.",
    ],
    outcome:
      "A collaborative design project platform with Convex auth, project and mood board management, protected workspaces, and a style-guide query layer.",
  },

  geoflex360: {
    imageFolder: "geoflex",
    images: ["image.png", "image2.png"],
    overview: [
      "GeoFlex360 is a multilingual French marketing website built for a Moroccan topographic engineering and land surveying firm. The site presents the company's services, project portfolio, and expertise — and includes a fully functional contact form backed by a Nodemailer/SMTP endpoint.",
      "The site was built with full SEO infrastructure: metadata optimization, LocalBusiness schema markup, sitemap generation, and robots.txt — positioned for local and regional search visibility for topography and construction services in Morocco and France.",
    ],
    outcome:
      "A live multilingual B2B website with service presentation, project portfolio, contact form backend, LocalBusiness schema, and full SEO infrastructure.",
  },

  "chiro-site": {
    imageFolder: "chiro-site",
    images: ["image1.png"],
    overview: [
      "A healthcare website built for a chiropractic practice, presenting the clinic's services, team, and patient information in a clean, trustworthy design. Built with full SEO infrastructure and a contact/booking flow.",
    ],
    outcome:
      "A live healthcare marketing website with service presentation, team profiles, contact flow, and SEO infrastructure.",
  },
};

export function getCaseStudyMeta(slug: string, locale: Locale = "en"): CaseStudyMeta | null {
  const base = CS[slug] ?? null;
  if (!base) return null;
  const localized = getCaseStudyText(locale, slug);
  if (!localized) return base;
  return {
    ...base,
    overview: localized.overview ?? base.overview,
    challenge: localized.challenge ?? base.challenge,
    outcome: localized.outcome ?? base.outcome,
  };
}

export function imageUrl(folder: string, filename: string): string {
  return `/case%20studies/${folder}/${encodeURIComponent(filename)}`;
}
