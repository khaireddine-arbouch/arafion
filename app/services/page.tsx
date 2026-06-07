"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';

/* ─── Selector config ─────────────────────────────────────────────────── */
const SELECTOR = [
  { label: "Website / Digital Presence",   id: "websites"       },
  { label: "SaaS / Software Product",      id: "software"       },
  { label: "AI System / Automation",       id: "intelligence"   },
  { label: "Dashboard / Internal Tool",    id: "intelligence"   },
  { label: "Marketing / Campaign System",  id: "marketing"      },
  { label: "Architecture / 3D Visuals",    id: "visualization"  },
  { label: "Not sure yet",                 id: "audit"          },
];

/* ─── Service data ────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "software",
    index: "01",
    title: "Software & Product Engineering",
    outcome: "Full-stack platforms, SaaS products, and operational systems — from first commit to production.",
    context: "Your business needs a real system, not a template. Whether you are building a SaaS product from scratch, replacing spreadsheets with an internal tool, or launching a multi-tenant platform, this is the execution line that handles the full engineering stack.",
    forWhom: [
      "Founders building a SaaS MVP or product prototype",
      "Businesses replacing spreadsheets or manual processes",
      "Teams needing an internal operating system",
      "Companies building client portals or multi-tenant platforms",
      "Startups needing a full-stack product with auth, data, and UI",
    ],
    delivers: [
      "SaaS MVPs",
      "Admin dashboards",
      "Client portals",
      "Internal operating systems",
      "Multi-tenant platforms",
      "Authentication & RBAC",
      "Heavy CRUD systems",
      "Browser-based production tools",
      "E-commerce systems",
      "API integrations",
      "Deployment & DevOps",
      "Maintenance systems",
    ],
    proof: [
      {
        name: "NileRoute OS",
        description: "Multi-tenant freight logistics SaaS with shipment lifecycle management, container tracking, document storage, role-based access, and an NVIDIA-powered AI assistant.",
        stack: ["Next.js", "Supabase", "NVIDIA NIM"],
      },
      {
        name: "SignalsFrame",
        description: "Browser-based video and audio editing platform with a full timeline engine, FFmpeg export pipeline, WASM audio processing, and social presets — no installations required.",
        stack: ["Next.js", "Convex", "WebCodecs", "FFmpeg WASM"],
      },
      {
        name: "Draftly",
        description: "Collaborative design project platform with authenticated workspaces, mood board management, and a style-guide query layer.",
        stack: ["Next.js", "Convex Auth"],
      },
      {
        name: "Evo2 Variant Intelligence",
        description: "Full-stack genomics research console connecting the Evo2 7B foundation model on H100 GPU infrastructure to a usable analysis interface with 3D protein visualization.",
        stack: ["Next.js", "Modal", "Supabase", "Molstar"],
      },
    ],
    engagement: "4 – 16 weeks depending on scope",
    startsWith: "Technical scoping session to define architecture, data model, and delivery milestones",
    cta: "Start a software project",
    ctaHref: "/contact",
  },
  {
    id: "websites",
    index: "02",
    title: "Websites & Digital Presence",
    outcome: "Websites that explain the business clearly, convert visitors, and rank on search.",
    context: "A website is not a brochure. It is your credibility layer, your lead capture system, and your first sales conversation. Every site Arafion builds is structured around a business goal — not just aesthetics.",
    forWhom: [
      "Architecture firms and interior designers",
      "Healthcare practices and clinics",
      "B2B service companies needing credibility online",
      "Real estate teams and developers",
      "E-commerce brands launching or redesigning",
      "Businesses with outdated or template-based websites",
      "Founders who need a strong public presence before fundraising or sales",
    ],
    delivers: [
      "Landing pages",
      "Corporate websites",
      "Portfolio websites",
      "Healthcare websites",
      "Architecture websites",
      "E-commerce storefronts",
      "SEO-optimized pages",
      "CMS integrations",
      "Analytics & tracking setup",
      "Contact & lead capture flows",
      "Multilingual websites",
      "Maintenance",
    ],
    proof: [
      {
        name: "GeoFlex360",
        description: "Multilingual French marketing website for a Moroccan topographic engineering firm. Full SEO infrastructure, LocalBusiness schema, project portfolio, and a Nodemailer contact backend.",
        stack: ["Next.js", "Tailwind CSS", "Nodemailer"],
      },
      {
        name: "Cabinet Chiropratique",
        description: "Clean, trust-building healthcare website for a chiropractic practice. Service presentation, team profiles, patient contact and booking flow, and SEO infrastructure.",
        stack: ["Next.js", "Tailwind CSS"],
      },
      {
        name: "Chafai Architects",
        description: "Architecture firm portfolio website presenting projects, services, and credentials with editorial-grade visual design.",
        stack: ["Next.js"],
      },
      {
        name: "Almajliss Heritage",
        description: "Cultural brand website presenting heritage design and craftsmanship with a refined visual identity.",
        stack: ["Next.js"],
      },
    ],
    engagement: "1 – 4 weeks depending on scope and content readiness",
    startsWith: "Discovery session to define business goals, content structure, and SEO targets",
    cta: "Start a website project",
    ctaHref: "/contact",
  },
  {
    id: "intelligence",
    index: "03",
    title: "Intelligence, Data & AI",
    outcome: "AI-assisted systems, decision interfaces, and operational dashboards built on real workflows.",
    context: "Most AI features are surface-level. Arafion builds AI systems where the workflow actually changes — copilots that understand your data, dashboards that surface real decisions, and automation layers that remove manual work. We do not add AI for show.",
    forWhom: [
      "Teams exploring AI automation for real business workflows",
      "Executives needing an operational intelligence dashboard",
      "Researchers building domain-specific analysis tools",
      "Businesses with complex data that is not being used",
      "Companies needing a custom BI console or reporting layer",
      "Teams building document intelligence or knowledge systems",
      "Enterprises needing geospatial or risk intelligence interfaces",
    ],
    delivers: [
      "AI copilots & assistants",
      "LLM API integrations",
      "Workflow automation",
      "Document intelligence",
      "Research & analysis consoles",
      "Decision-support systems",
      "Custom BI dashboards",
      "ETL / data pipelines",
      "Executive consoles",
      "Geospatial dashboards",
      "Market & risk intelligence",
      "RAG / knowledge bases",
    ],
    proof: [
      {
        name: "Evo2 Variant Intelligence",
        description: "Research console connecting the Evo2 genomic foundation model to a full analysis interface — variant prediction, ClinVar annotation, NCBI integration, and Molstar 3D protein visualization.",
        stack: ["Next.js", "Modal GPU", "Supabase", "OpenAI"],
      },
      {
        name: "Intelligence Console",
        description: "Enterprise supply chain, ESG, and company performance intelligence platform with executive dashboards, supplier risk scoring, scenario modeling, DCF analysis, PDF export, and an AI query layer.",
        stack: ["Next.js", "Vercel AI SDK", "OpenAI", "jsPDF"],
      },
      {
        name: "Atlas Intelligence",
        description: "Reusable intelligence UI framework with four operational modes (Scan, Investigate, Decide, Execute), a command palette, resizable panels, and Zustand state persistence.",
        stack: ["Next.js", "Zustand"],
      },
      {
        name: "Atlas GEOINT",
        description: "Geospatial intelligence workstation for visualizing incidents, entities, and corridors on an interactive map — with confidence scoring, evidence linking, and decision tagging.",
        stack: ["Next.js", "Leaflet", "Mapbox"],
      },
    ],
    engagement: "3 – 12 weeks depending on data complexity and integration depth",
    startsWith: "Workflow and data audit to identify what exists, what is missing, and where AI adds real value",
    cta: "Start an AI or data project",
    ctaHref: "/contact",
  },
  {
    id: "marketing",
    index: "04",
    title: "Marketing, Campaigns & Production",
    outcome: "Campaign infrastructure, creative production pipelines, and reporting systems that support growth.",
    context: "Marketing fails when the technical layer is weak: no proper tracking, no production system, no reporting structure. Arafion's strength here is not posting on social media — it is building the infrastructure that makes campaigns measurable and repeatable.",
    forWhom: [
      "Brands ready to invest in paid advertising but without proper setup",
      "Teams needing a creative production pipeline, not just one-off assets",
      "Businesses running ads with broken or missing tracking",
      "Companies that need monthly campaign reporting and optimization",
      "E-commerce brands needing Meta, Google, and TikTok infrastructure",
      "Agencies or in-house teams needing production support",
    ],
    delivers: [
      "Meta / Google / TikTok setup",
      "Campaign planning & strategy",
      "Campaign landing pages",
      "Pixel & tracking implementation",
      "Creative production pipeline",
      "Post-production workflows",
      "Monthly reporting structures",
      "CRM & lead flow setup",
      "Email automation sequences",
      "Client training & handoff",
      "Performance analytics",
      "A/B testing infrastructure",
    ],
    proof: [
      {
        name: "Campaign infrastructure engagements",
        description: "Setup of full campaign tracking, pixel implementation, creative production workflows, and monthly reporting structures for service businesses and e-commerce brands.",
        stack: ["Meta Ads", "Google Ads", "GA4", "GTM"],
      },
      {
        name: "Production pipeline systems",
        description: "Creative content production pipelines with post-production workflows, asset management, and client review processes — built for repeatability.",
        stack: ["Figma", "Premiere Pro", "After Effects"],
      },
    ],
    engagement: "2 – 6 weeks for initial setup; monthly retainer for ongoing management and optimization",
    startsWith: "Campaign audit — review of existing tracking, creatives, structure, and performance against business goals",
    cta: "Start a campaign project",
    ctaHref: "/contact",
  },
  {
    id: "visualization",
    index: "05",
    title: "Architecture Visualization & 3D Sales Systems",
    outcome: "Cinematic renders, virtual walkthroughs, and sales-ready visual systems for architecture and real estate.",
    context: "Renders that sit in a folder are not sales assets. Arafion connects 3D visualization to business outcomes: a render pack for social media, a web showcase for a real estate project, a before/after for client approval, or a full sales presentation. Visual work should sell.",
    forWhom: [
      "Architecture firms presenting to clients or investors",
      "Interior designers showing concepts before execution",
      "Real estate developers marketing projects before construction",
      "Kitchen and bathroom specialists closing high-ticket sales",
      "Contractors presenting renovation proposals",
      "Brands needing visual assets for campaigns or e-commerce",
    ],
    delivers: [
      "Interior renders",
      "Exterior renders",
      "Kitchen & room visualization",
      "3D modeling from 2D plans",
      "Virtual walkthroughs",
      "Three.js web showcases",
      "Real estate sales visuals",
      "Social media render packs",
      "Portfolio & project pages",
      "Before/after presentations",
      "360° panoramic renders",
      "Lighting & material studies",
    ],
    proof: [
      {
        name: "Kitchen visualization series",
        description: "18-render kitchen visualization series covering diverse styles — Japandi, charcoal marble waterfall, dusty blue shaker, terracotta, olive green, pale blue forest-view, and more. Delivered as sales-ready assets.",
        stack: ["Blender", "V-Ray", "Photoshop"],
      },
      {
        name: "Confidential interior render commissions",
        description: "Multi-room interior visualization for residential clients. Material options, lighting scenarios, before/after comparisons, and social media asset packs.",
        stack: ["Blender", "V-Ray"],
      },
      {
        name: "Confidential virtual walkthroughs",
        description: "Interactive walkthrough experiences for pre-sale real estate properties, delivered as web-embeddable Three.js experiences.",
        stack: ["Three.js", "Blender", "Next.js"],
      },
    ],
    gallery: [
      "/renders/archviz-kitchen-japandi-light-wood-open-shelving-island.png",
      "/renders/archviz-kitchen-charcoal-slatted-cabinets-marble-waterfall-island.png",
      "/renders/archviz-kitchen-pale-blue-shaker-fluted-island-forest-view.png",
      "/renders/archviz-kitchen-dark-wood-island-beige-wall-brass-pendants.png",
      "/renders/archviz-kitchen-terracotta-uppers-wood-tall-dark-marble.png",
      "/renders/archviz-kitchen-dusty-blue-shaker-glass-cabinets-farmhouse-sink.png",
      "/renders/archviz-kitchen-olive-green-single-wall-herringbone-floor.png",
      "/renders/archviz-kitchen-black-fluted-upper-wood-concrete-island.png",
      "/renders/archviz-kitchen-warm-beige-marble-peninsula-slatted-bar.png",
      "/renders/archviz-kitchen-vertical-wood-cabinets-stone-waterfall-globe-pendants.png",
      "/renders/archviz-kitchen-taupe-cabinets-marble-island-glass-uppers.png",
      "/renders/archviz-kitchen-oak-black-marble-island-concrete-tile.png",
    ],
    engagement: "3 – 10 days per render batch; web showcase projects 1 – 3 weeks",
    startsWith: "Plan and reference review — we assess what materials are available and define the deliverable set",
    cta: "Get a render quote",
    ctaHref: "/contact",
    ctaAlt: "Request render quote",
  },
  {
    id: "strategy",
    index: "06",
    title: "Strategy, Scoping & Maintenance",
    outcome: "Define exactly what needs to be built, how, and by when — before a single line of code is written.",
    context: "Serious work fails when scope is vague. This service line protects both the client and the build. Whether you are starting something new or improving something that already exists, scoping is the first step that prevents wasted time and budget.",
    forWhom: [
      "Businesses with an idea but no technical roadmap",
      "Founders who need a clear MVP scope before hiring or building",
      "Teams with an existing system that needs audit or improvement",
      "Companies dealing with technical debt or unclear architecture",
      "Businesses that need ongoing maintenance without a full in-house team",
      "Anyone who has been burned by scope creep on a previous project",
    ],
    delivers: [
      "Project audit",
      "Technical scoping document",
      "MVP roadmap",
      "Feature prioritization matrix",
      "System architecture diagram",
      "Delivery milestones",
      "QA process definition",
      "Launch checklist",
      "Training & handoff materials",
      "Maintenance roadmap",
      "Monthly maintenance retainers",
      "Performance optimization",
    ],
    proof: [
      {
        name: "Pre-build technical scoping",
        description: "Structured scoping sessions that define architecture, data model, feature set, delivery path, and success criteria before any build work begins — preventing scope creep and misaligned expectations.",
        stack: ["Notion", "Figma", "Linear"],
      },
      {
        name: "Ongoing maintenance retainers",
        description: "Monthly maintenance coverage for live systems: updates, bug fixes, performance improvements, new content, and incremental feature additions.",
        stack: ["Varies by project"],
      },
    ],
    engagement: "1 – 3 days for scoping; ongoing maintenance by monthly retainer",
    startsWith: "30-minute discovery call to understand the goal, constraints, timeline, and what has already been tried",
    cta: "Request a project audit",
    ctaHref: "/contact",
  },
];

const PROCESS_STEPS = [
  { n: "01", title: "Diagnose", body: "Clarify the business goal, users, workflow, existing assets, constraints, and definition of success." },
  { n: "02", title: "Scope",   body: "Define what gets built, what waits, what data or assets are needed, timeline, and delivery path." },
  { n: "03", title: "Design",  body: "User experience, visual direction, system structure, and interaction model." },
  { n: "04", title: "Build",   body: "Frontend, backend, integrations, AI workflows, dashboards, renders, production assets, or campaign infrastructure." },
  { n: "05", title: "Launch",  body: "Deploy, configure analytics and tracking, prepare handoff materials, train the client." },
  { n: "06", title: "Improve", body: "Maintenance, reporting, optimization, campaigns, new modules, stronger content, or clearer workflows." },
];

const ALL_RENDERS = [
  "/renders/archviz-kitchen-japandi-light-wood-open-shelving-island.png",
  "/renders/archviz-kitchen-charcoal-slatted-cabinets-marble-waterfall-island.png",
  "/renders/archviz-kitchen-pale-blue-shaker-fluted-island-forest-view.png",
  "/renders/archviz-kitchen-dark-wood-island-beige-wall-brass-pendants.png",
  "/renders/archviz-kitchen-terracotta-uppers-wood-tall-dark-marble.png",
  "/renders/archviz-kitchen-dusty-blue-shaker-glass-cabinets-farmhouse-sink.png",
  "/renders/archviz-kitchen-olive-green-single-wall-herringbone-floor.png",
  "/renders/archviz-kitchen-black-fluted-upper-wood-concrete-island.png",
  "/renders/archviz-kitchen-warm-beige-marble-peninsula-slatted-bar.png",
  "/renders/archviz-kitchen-vertical-wood-cabinets-stone-waterfall-globe-pendants.png",
  "/renders/archviz-kitchen-taupe-cabinets-marble-island-glass-uppers.png",
  "/renders/archviz-kitchen-oak-black-marble-island-concrete-tile.png",
  "/renders/archviz-kitchen-olive-beige-two-tone-shaker-cylindrical-hood.png",
  "/renders/archviz-kitchen-light-shaker-dark-marble-waterfall-olive-stools.png",
  "/renders/archviz-kitchen-charcoal-wood-island-marble-wine-fridge.png",
  "/renders/archviz-kitchen-black-open-shelves-white-fluted-gold-dining-extension.png",
  "/renders/archviz-kitchen-white-uppers-wood-lowers-slatted-island-pendants.png",
  "/renders/archviz-kitchen-wood-uppers-white-lowers-marble-island-wine-cooler.png",
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ServicesPage() {
  const selectorRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => i === null ? null : (i - 1 + ALL_RENDERS.length) % ALL_RENDERS.length), []);
  const next = useCallback(() => setLightboxIndex((i) => i === null ? null : (i + 1) % ALL_RENDERS.length), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, prev, next, closeLightbox]);

  return (
    <main style={{ fontFamily: NM, background: "white", minHeight: "100vh" }}>

      {/* ── Top bar ── */}
      <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{
          maxWidth: "1320px", margin: "0 auto", padding: "0 2rem",
          height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/" style={{ fontFamily: NM, fontWeight: 500, fontSize: "14px", color: "#1D1D1F", letterSpacing: "-0.02em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "7px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Arafion Icon.png" alt="" style={{ height: "20px", width: "20px", objectFit: "contain" }} />
            Arafion
          </Link>
          <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Services
          </span>
        </div>
      </div>

      {/* ── 1. Hero ── */}
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 6vw, 6rem) 1.25rem clamp(2.5rem, 5vw, 5rem)" }}>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.5rem" }}>
          Services
        </p>
        <h1 style={{
          fontFamily: NM, fontWeight: 400,
          fontSize: "clamp(2.2rem, 5vw, 4.4rem)",
          lineHeight: 1.05, letterSpacing: "-0.04em",
          color: "#1D1D1F", maxWidth: "960px", marginBottom: "2rem",
        }}>
          Digital systems, AI products, visual sales assets, and growth infrastructure — built end to end.
        </h1>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1rem, 1.5vw, 1.15rem)", lineHeight: 1.7, color: "#86868B", maxWidth: "720px", marginBottom: "2.5rem" }}>
          Arafion helps businesses build the systems they need to launch, operate, present, sell, automate, and scale. From websites and SaaS platforms to AI workflows, dashboards, campaign infrastructure, and cinematic 3D visualization.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link href="/contact" style={{
            fontFamily: NM, fontWeight: 500, fontSize: "13.5px",
            background: "#1D1D1F", color: "white",
            borderRadius: "100px", padding: "9px 22px", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "6px",
          }}>
            Start a project
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "9px", height: "9px" }}>
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </Link>
          <Link href="/work" style={{
            fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
            color: "#1D1D1F", border: "1px solid rgba(0,0,0,0.15)",
            borderRadius: "100px", padding: "9px 22px", textDecoration: "none",
          }}>
            View case studies
          </Link>
          <button
            onClick={() => scrollTo("visualization")}
            style={{
              fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
              color: "#86868B", border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "100px", padding: "9px 22px",
              background: "transparent", cursor: "pointer",
            }}
          >
            Get a render quote
          </button>
        </div>
      </div>

      {/* ── 2. Service Selector ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)", background: "#FAFAFA" }}>
        <div ref={selectorRef} style={{ maxWidth: "1320px", margin: "0 auto", padding: "2rem 2rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.1rem" }}>
            What do you need built?
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {SELECTOR.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                style={{
                  fontFamily: NM, fontWeight: 400, fontSize: "13px",
                  color: "#1D1D1F", background: "white",
                  border: "1px solid rgba(0,0,0,0.12)",
                  borderRadius: "100px", padding: "7px 18px",
                  cursor: "pointer", transition: "background 0.15s, border-color 0.15s",
                  display: "inline-flex", alignItems: "center", gap: "6px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#1D1D1F";
                  (e.currentTarget as HTMLButtonElement).style.color = "white";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#1D1D1F";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "white";
                  (e.currentTarget as HTMLButtonElement).style.color = "#1D1D1F";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.12)";
                }}
              >
                {item.label}
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "8px", height: "8px", opacity: 0.4 }}>
                  <path d="M5 2v6M2 5l3 3 3-3" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. Service Blocks ── */}
      {SERVICES.map((svc, idx) => (
        <section
          key={svc.id}
          id={svc.id}
          style={{
            borderBottom: "1px solid rgba(0,0,0,0.07)",
            background: idx % 2 === 0 ? "white" : "#FAFAFA",
            scrollMarginTop: "80px",
          }}
        >
          <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>

            {/* Header row */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.75rem" }}>
              <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "11px", color: "#86868B", letterSpacing: "0.08em" }}>
                {svc.index}
              </span>
              <h2 style={{
                fontFamily: NM, fontWeight: 400,
                fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
                lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1D1D1F",
              }}>
                {svc.title}
              </h2>
            </div>

            {/* Outcome line */}
            <p style={{
              fontFamily: NM, fontWeight: 400,
              fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
              lineHeight: 1.55, letterSpacing: "-0.012em",
              color: "#1D1D1F", maxWidth: "820px",
              marginBottom: "1.25rem",
              borderLeft: "2px solid #1D1D1F", paddingLeft: "1.1rem",
            }}>
              {svc.outcome}
            </p>

            {/* Context */}
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.8, color: "#86868B", maxWidth: "720px", marginBottom: "3rem" }}>
              {svc.context}
            </p>

            {/* Two-column: For Whom + Delivers */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: "2px", background: "rgba(0,0,0,0.07)",
              borderRadius: "16px", overflow: "hidden",
              marginBottom: "2.5rem",
            }}>
              {/* Who it's for */}
              <div style={{ background: idx % 2 === 0 ? "white" : "#FAFAFA", padding: "2rem" }}>
                <p style={{ fontFamily: NM, fontWeight: 500, fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.1rem" }}>
                  Who this is for
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {svc.forWhom.map((who) => (
                    <div key={who} style={{ display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#1D1D1F", flexShrink: 0, marginTop: "7px", display: "inline-block" }} />
                      <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", color: "#1D1D1F", lineHeight: 1.55 }}>
                        {who}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What we deliver */}
              <div style={{ background: idx % 2 === 0 ? "white" : "#FAFAFA", padding: "2rem" }}>
                <p style={{ fontFamily: NM, fontWeight: 500, fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.1rem" }}>
                  What we deliver
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {svc.delivers.map((d) => (
                    <span key={d} style={{
                      fontFamily: NM, fontWeight: 400, fontSize: "12px",
                      color: "#1D1D1F", border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: "100px", padding: "4px 12px",
                      background: "transparent",
                    }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Proof examples */}
            <p style={{ fontFamily: NM, fontWeight: 500, fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1rem" }}>
              Proof
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
              gap: "1px", background: "rgba(0,0,0,0.07)",
              borderRadius: "14px", overflow: "hidden",
              marginBottom: "2.5rem",
            }}>
              {svc.proof.map((p) => (
                <div key={p.name} style={{ background: idx % 2 === 0 ? "white" : "#FAFAFA", padding: "1.5rem" }}>
                  <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14.5px", letterSpacing: "-0.015em", color: "#1D1D1F", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                    {p.name}
                  </p>
                  <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", lineHeight: 1.65, color: "#86868B", marginBottom: "0.85rem" }}>
                    {p.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                    {p.stack.map((s) => (
                      <span key={s} style={{
                        fontFamily: NM, fontWeight: 400, fontSize: "10.5px",
                        color: "#86868B", border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: "100px", padding: "2px 8px",
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Render gallery (visualization service only) */}
            {"gallery" in svc && Array.isArray(svc.gallery) && svc.gallery.length > 0 && (
              <div style={{ marginBottom: "2.5rem" }}>
                <p style={{ fontFamily: NM, fontWeight: 500, fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1rem" }}>
                  Selected renders — kitchen visualization series
                </p>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
                  gap: "6px",
                  borderRadius: "16px", overflow: "hidden",
                }}>
                  {(svc.gallery as string[]).map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setLightboxIndex(ALL_RENDERS.indexOf(src))}
                      style={{
                        padding: 0, margin: 0, border: "none", background: "none",
                        cursor: "zoom-in", display: "block", position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`Architecture render ${i + 1}`}
                        style={{
                          width: "100%", aspectRatio: "4/3",
                          objectFit: "cover", objectPosition: "center",
                          display: "block",
                          transition: "transform 0.35s ease",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                      />
                    </button>
                  ))}
                </div>
                <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B", marginTop: "0.75rem" }}>
                  18 renders total · Click any image to preview · All projects confidential
                </p>
              </div>
            )}

            {/* Engagement + CTA row */}
            <div style={{
              display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
              gap: "1.5rem",
              borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "2rem",
            }}>
              <div>
                <p style={{ fontFamily: NM, fontWeight: 500, fontSize: "10.5px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "0.4rem" }}>
                  Typical engagement
                </p>
                <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14px", color: "#1D1D1F", marginBottom: "0.25rem" }}>
                  {svc.engagement}
                </p>
                <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B" }}>
                  Starts with: {svc.startsWith}
                </p>
              </div>
              <Link
                href={svc.ctaHref}
                style={{
                  fontFamily: NM, fontWeight: 500, fontSize: "13px",
                  background: "#1D1D1F", color: "white",
                  borderRadius: "100px", padding: "9px 22px",
                  textDecoration: "none", display: "inline-flex",
                  alignItems: "center", gap: "6px", whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {svc.cta}
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "9px", height: "9px" }}>
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </Link>
            </div>

          </div>
        </section>
      ))}

      {/* ── 4. Process ── */}
      <section style={{ background: "#080A0E", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
            How service delivery works
          </p>
          <h2 style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.5vw, 2.4rem)",
            lineHeight: 1.1, letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.88)", maxWidth: "560px", marginBottom: "3.5rem",
          }}>
            Every project follows the same six-stage delivery model.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} style={{ background: "#080A0E", padding: "1.75rem" }}>
                <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "11px", color: "rgba(255,255,255,0.22)", letterSpacing: "0.08em", display: "block", marginBottom: "0.75rem" }}>
                  {step.n}
                </span>
                <h3 style={{ fontFamily: NM, fontWeight: 400, fontSize: "16px", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.88)", marginBottom: "0.5rem" }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", lineHeight: 1.65, color: "rgba(255,255,255,0.38)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Audit / Quote CTA ── */}
      <section id="audit" style={{ borderTop: "1px solid rgba(0,0,0,0.07)", scrollMarginTop: "80px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 6vw, 6rem) 1.25rem clamp(3.5rem, 7vw, 7rem)" }}>
          <div style={{
            background: "#F5F5F7", borderRadius: "20px",
            padding: "clamp(2.5rem, 5vw, 4.5rem)",
          }}>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
              Not sure which service fits?
            </p>
            <h2 style={{
              fontFamily: NM, fontWeight: 400,
              fontSize: "clamp(1.7rem, 3.5vw, 3.2rem)",
              lineHeight: 1.08, letterSpacing: "-0.035em",
              color: "#1D1D1F", maxWidth: "760px", marginBottom: "1.25rem",
            }}>
              Start with a project audit.
            </h2>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.75, color: "#86868B", maxWidth: "600px", marginBottom: "2.5rem" }}>
              Tell us the business goal. We will identify the right service line, define the scope, estimate the timeline, and give you a clear delivery path — before any commitment.
            </p>

            {/* What's included in a project audit */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))",
              gap: "1px", background: "rgba(0,0,0,0.07)",
              borderRadius: "14px", overflow: "hidden",
              marginBottom: "2.5rem",
            }}>
              {[
                { title: "Goal clarity",     body: "We identify the real business objective behind the request." },
                { title: "Scope definition", body: "What gets built, what waits, and what is out of scope." },
                { title: "Service routing",  body: "Which Arafion service line fits — or which combination." },
                { title: "Timeline estimate",body: "Realistic delivery range based on complexity and assets." },
                { title: "Asset review",     body: "What you need to provide and what we will produce." },
                { title: "Delivery path",    body: "Milestones, handoff points, and launch sequence." },
              ].map((item) => (
                <div key={item.title} style={{ background: "#F5F5F7", padding: "1.5rem" }}>
                  <p style={{ fontFamily: NM, fontWeight: 500, fontSize: "13.5px", color: "#1D1D1F", marginBottom: "0.4rem" }}>
                    {item.title}
                  </p>
                  <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", lineHeight: 1.6, color: "#86868B" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{
                fontFamily: NM, fontWeight: 500, fontSize: "13.5px",
                background: "#1D1D1F", color: "white",
                borderRadius: "100px", padding: "10px 24px", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "6px",
              }}>
                Start a project
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "9px", height: "9px" }}>
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </Link>
              <Link href="/contact" style={{
                fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
                color: "#1D1D1F", border: "1px solid rgba(0,0,0,0.15)",
                borderRadius: "100px", padding: "10px 24px", textDecoration: "none",
              }}>
                Request a quote
              </Link>
              <button
                onClick={() => scrollTo("visualization")}
                style={{
                  fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
                  color: "#86868B", border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "100px", padding: "10px 24px",
                  background: "transparent", cursor: "pointer",
                }}
              >
                Get a render quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Image container — stop click propagation so clicking the image doesn't close */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "min(1200px, 95vw)",
              maxHeight: "90vh",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ALL_RENDERS[lightboxIndex]}
              alt={`Render ${lightboxIndex + 1} of ${ALL_RENDERS.length}`}
              style={{
                maxWidth: "100%", maxHeight: "90vh",
                objectFit: "contain", borderRadius: "12px",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
                display: "block",
              }}
            />

            {/* Prev arrow — fixed to viewport left edge, works on all screen sizes */}
            <button
              onClick={prev}
              aria-label="Previous render"
              style={{
                position: "fixed", left: "clamp(0.5rem, 2vw, 2rem)", top: "50%", transform: "translateY(-50%)",
                width: "44px", height: "44px", borderRadius: "50%",
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", transition: "background 0.2s", zIndex: 10001,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.24)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: "18px", height: "18px" }}>
                <path d="M12 5l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next arrow — fixed to viewport right edge */}
            <button
              onClick={next}
              aria-label="Next render"
              style={{
                position: "fixed", right: "clamp(0.5rem, 2vw, 2rem)", top: "50%", transform: "translateY(-50%)",
                width: "44px", height: "44px", borderRadius: "50%",
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", transition: "background 0.2s", zIndex: 10001,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.24)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: "18px", height: "18px" }}>
                <path d="M8 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Counter + close */}
          <div style={{
            position: "fixed", top: "1.25rem", left: 0, right: 0,
            display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem",
            pointerEvents: "none",
          }}>
            <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
              {lightboxIndex + 1} / {ALL_RENDERS.length}
            </span>
          </div>
          <button
            onClick={closeLightbox}
            aria-label="Close preview"
            style={{
              position: "fixed", top: "1.25rem", right: "1.5rem",
              width: "40px", height: "40px", borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: "16px", height: "16px" }}>
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}

    </main>
  );
}
