import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Arafion is a hybrid execution studio combining software engineering, AI, data systems, creative production, and architectural visualization into one execution pipeline. We build the systems behind serious digital execution.",
  openGraph: {
    title: "About Arafion — Product Engineering Lab",
    description:
      "We build websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and 3D visualization systems. One pipeline instead of disconnected vendors.",
    url: "https://arafion.com/about",
  },
  alternates: { canonical: "https://arafion.com/about" },
};

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';

const SERVICES = [
  {
    index: "01",
    title: "Software & Product Engineering",
    description:
      "We build full-stack products, SaaS platforms, internal tools, dashboards, client portals, and workflow systems.",
    items: [
      "SaaS MVPs",
      "Admin dashboards",
      "Client portals",
      "Internal operating systems",
      "Multi-tenant platforms",
      "Authentication and RBAC",
      "Heavy CRUD systems",
      "Browser-based production tools",
      "E-commerce systems",
      "Maintenance systems",
    ],
    proof:
      "Systems like NileRoute OS, SignalsFrame, Draftly, and Evo2 Variant Intelligence show full-stack product thinking across logistics, media, design, and research workflows.",
  },
  {
    index: "02",
    title: "Websites & Digital Presence",
    description:
      "We build websites that explain the business clearly, present proof, capture leads, and support growth.",
    items: [
      "Landing pages",
      "Corporate websites",
      "Portfolio websites",
      "Healthcare websites",
      "Architecture websites",
      "E-commerce storefronts",
      "SEO-ready pages",
      "CMS integrations",
      "Analytics setup",
      "Maintenance",
    ],
    proof:
      "Client-facing websites such as GeoFlex360 and Cabinet Chiropratique focus on business credibility, service presentation, SEO, contact flows, and trust-building.",
  },
  {
    index: "03",
    title: "Intelligence, Data & AI",
    description:
      "We turn scattered workflows and data into AI-assisted systems, dashboards, and decision interfaces.",
    items: [
      "AI copilots",
      "LLM API integrations",
      "Workflow automation",
      "Document intelligence",
      "Research assistants",
      "Decision-support systems",
      "Custom BI dashboards",
      "ETL/data pipelines",
      "Executive consoles",
      "Geospatial dashboards",
      "Market/risk intelligence interfaces",
    ],
    proof:
      "Evo2 Variant Intelligence, Atlas GEOINT, Atlas Intelligence, and Intelligence Console demonstrate this layer across genomics research, geospatial dashboards, and executive intelligence systems.",
  },
  {
    index: "04",
    title: "Marketing, Campaigns & Production",
    description:
      "We build the campaign infrastructure, creative production pipeline, tracking layer, and reporting structure behind growth systems.",
    items: [
      "Meta / Google / TikTok setup",
      "Campaign planning",
      "Landing pages",
      "Tracking and pixel implementation",
      "Creative production pipeline",
      "Post-production workflows",
      "Monthly reporting structures",
      "CRM and lead flow setup",
      "Client training and handoff",
    ],
    proof:
      "Our strength is the technical and production layer: campaign setup, creative systems, tracking, post-production, reporting, and client enablement — not generic social media management.",
  },
  {
    index: "05",
    title: "Architecture Visualization & 3D Sales Systems",
    description:
      "We transform plans, models, and design references into cinematic renders, interactive walkthroughs, and sales-ready visual systems.",
    items: [
      "Interior renders",
      "Exterior renders",
      "Kitchen and room visualization",
      "3D modeling from 2D plans",
      "Virtual walkthroughs",
      "Three.js web showcases",
      "Real estate sales visuals",
      "Social media render packs",
      "Portfolio and project pages",
      "Before/after presentations",
    ],
    proof:
      "Some architecture and rendering projects are confidential. Selected renders, before/after visuals, and delivered outputs can be shown publicly with permission.",
  },
  {
    index: "06",
    title: "Strategy, Scoping & Delivery Systems",
    description:
      "Before we build, we clarify the scope, architecture, business objective, timeline, and delivery path.",
    items: [
      "Project audit",
      "Technical scoping",
      "MVP roadmap",
      "Feature prioritization",
      "System architecture",
      "Delivery milestones",
      "QA process",
      "Launch planning",
      "Training and handoff",
      "Maintenance roadmap",
    ],
    proof:
      "Serious work fails when scope is vague. This layer protects both the client and the build.",
  },
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Systems before deliverables",
    body: "A website is not only a website. A dashboard is not only charts. A render is not only an image. Each output should connect to a business system: lead generation, sales, operations, decision-making, training, or product usage.",
  },
  {
    n: "02",
    title: "Execution must be visible",
    body: "Clients should know what is being built, why it matters, what stage it is in, and what happens next. We structure projects around scope, milestones, deliverables, QA, launch, and handoff.",
  },
  {
    n: "03",
    title: "Technology must serve the workflow",
    body: "We do not add AI, dashboards, 3D, or automation because they sound advanced. We use them when they improve speed, clarity, quality, decision-making, or user experience.",
  },
  {
    n: "04",
    title: "Proof matters more than claims",
    body: "Arafion's portfolio is separated clearly between client work, internal products, prototypes, research dashboards, and confidential work. We avoid pretending that demos are enterprise deployments or prototypes are finished products.",
  },
  {
    n: "05",
    title: "Build for launch, then improvement",
    body: "The first launch is not the end. Good systems need iteration: maintenance, reporting, optimization, new modules, better content, stronger visuals, and clearer workflows.",
  },
];

const STEPS = [
  { n: "01", title: "Diagnose", body: "We clarify the business goal, users, workflow, assets, constraints, and success criteria." },
  { n: "02", title: "Scope", body: "We define what needs to be built, what should wait, what data/assets are required, and what the delivery path looks like." },
  { n: "03", title: "Design", body: "We design the user experience, visual direction, system structure, and interaction model." },
  { n: "04", title: "Build", body: "We implement the frontend, backend, integrations, AI workflows, dashboards, renders, production assets, or campaign infrastructure." },
  { n: "05", title: "Test", body: "We check performance, usability, responsiveness, data correctness, content, visuals, and edge cases." },
  { n: "06", title: "Launch", body: "We deploy, configure analytics/tracking, prepare handoff material, and train the client when needed." },
  { n: "07", title: "Improve", body: "We support the next iteration through maintenance, reporting, optimization, campaigns, or new features." },
];

const PROOF_CATEGORIES = [
  {
    label: "Client work",
    description: "Real business websites and digital systems delivered for clients across industries such as topography, healthcare, architecture, and e-commerce.",
    examples: ["GeoFlex360", "Cabinet Chiropratique", "Chafai Architects", "Almajliss Heritage"],
  },
  {
    label: "Product systems",
    description: "Internal and productized systems that show Arafion's ability to build full-stack platforms, SaaS products, and advanced interfaces.",
    examples: ["NileRoute OS", "SignalsFrame", "Draftly", "Evo2 Variant Intelligence"],
  },
  {
    label: "Intelligence platforms",
    description: "Research dashboards, enterprise-style consoles, data interfaces, and geospatial workstations.",
    examples: ["Visibility Intelligence Lab", "Intelligence Console", "Atlas Intelligence", "Atlas GEOINT"],
  },
  {
    label: "Confidential client work",
    description: "Projects where the client name is private, but approved visuals and outputs can be shown.",
    examples: [
      "Confidential interior render series",
      "Confidential kitchen visualization projects",
      "Confidential virtual walkthroughs",
      "Confidential campaign production systems",
    ],
  },
];

const DIFFERENTIATORS = [
  {
    title: "One pipeline instead of disconnected vendors",
    body: "A website, campaign, dashboard, render, and AI workflow can all connect. Arafion reduces the fragmentation between strategy, engineering, visuals, production, and delivery.",
  },
  {
    title: "Technical depth beyond surface design",
    body: "We can build interfaces, databases, APIs, authentication, dashboards, AI workflows, rendering systems, and deployment pipelines — not only landing pages.",
  },
  {
    title: "Visual quality with engineering structure",
    body: "For architecture, real estate, and campaigns, we connect visual production with websites, quote flows, portfolio systems, and sales assets.",
  },
  {
    title: "Honest project classification",
    body: "Client work, internal products, prototypes, demos, and confidential work are labeled clearly. That protects trust.",
  },
  {
    title: "Built for business outcomes",
    body: "Every project is connected to a business need: credibility, leads, sales, operations, automation, decision-making, visualization, or product launch.",
  },
];

const CLIENT_TYPES = [
  "Architecture firms",
  "Interior designers",
  "Real estate teams",
  "Healthcare practices",
  "E-commerce brands",
  "B2B service companies",
  "Founders building SaaS or MVPs",
  "Businesses needing dashboards or internal tools",
  "Teams exploring AI workflows",
  "Brands needing campaign infrastructure and production systems",
];

const NOPE = [
  "We do not sell fake “AI-powered” features without a real workflow.",
  "We do not present prototypes as proven enterprise deployments.",
  "We do not build cheap template websites with no strategy.",
  "We do not promise campaign results without the right offer, budget, assets, and tracking.",
  "We do not start complex projects without scope, milestones, and clear ownership.",
  "We do not disclose confidential client work without permission.",
];

export default function AboutPage() {
  return (
    <main style={{ fontFamily: NM, background: "white", minHeight: "100vh" }}>

      {/* Top bar */}
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
            About
          </span>
        </div>
      </div>

      {/* ── 1. HERO ── */}
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 6vw, 6rem) 1.25rem clamp(2.5rem, 5vw, 5rem)" }}>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.5rem" }}>
          About Arafion
        </p>
        <h1 style={{
          fontFamily: NM, fontWeight: 400,
          fontSize: "clamp(2.2rem, 5vw, 4.4rem)",
          lineHeight: 1.05, letterSpacing: "-0.04em",
          color: "#1D1D1F", maxWidth: "900px", marginBottom: "2rem",
        }}>
          We build the systems behind serious digital execution.
        </h1>
        <p style={{
          fontFamily: NM, fontWeight: 400, fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          lineHeight: 1.6, letterSpacing: "-0.01em",
          color: "#1D1D1F", maxWidth: "780px", marginBottom: "1.5rem",
        }}>
          Arafion is a hybrid execution studio building websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems for businesses that need more than surface-level digital work.
        </p>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.75, color: "#86868B", maxWidth: "700px", marginBottom: "2.5rem" }}>
          We work across software engineering, AI, data, production, and visual systems. Our role is not only to design attractive interfaces or deliver isolated assets. We help clients turn ideas, workflows, campaigns, and visual concepts into usable systems that can be launched, operated, measured, and improved.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link href="/work" style={{
            fontFamily: NM, fontWeight: 500, fontSize: "13.5px",
            background: "#1D1D1F", color: "white",
            borderRadius: "100px", padding: "9px 22px", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "6px",
          }}>
            See our work
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "9px", height: "9px" }}>
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </Link>
          <Link href="/contact" style={{
            fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
            background: "transparent", color: "#1D1D1F",
            border: "1px solid rgba(0,0,0,0.15)",
            borderRadius: "100px", padding: "9px 22px", textDecoration: "none",
          }}>
            Start a project
          </Link>
        </div>
      </div>

      {/* ── 2. WHAT ARAFION IS ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", maxWidth: "900px" }}>
            <div>
              <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
                What Arafion is
              </p>
              <h2 style={{
                fontFamily: NM, fontWeight: 400,
                fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                lineHeight: 1.1, letterSpacing: "-0.03em",
                color: "#1D1D1F", marginBottom: "2rem",
              }}>
                Arafion is not a traditional agency.
              </h2>
              <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.8, color: "#86868B", marginBottom: "1.25rem" }}>
                Most agencies separate strategy, design, development, data, production, and marketing into disconnected services. That creates weak execution: a website that does not connect to the campaign, a dashboard without a real workflow, renders that never become sales assets, or an AI feature that does not fit the business.
              </p>
              <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.8, color: "#86868B", marginBottom: "2rem" }}>
                Arafion is built differently. We combine engineering, AI, data systems, creative production, and architectural visualization into one execution pipeline. That allows us to build complete digital systems — from public-facing websites and SaaS platforms to internal tools, dashboards, campaign infrastructure, and cinematic 3D sales visuals.
              </p>
              <p style={{
                fontFamily: NM, fontWeight: 400, fontSize: "17px",
                lineHeight: 1.55, letterSpacing: "-0.015em",
                color: "#1D1D1F",
                borderLeft: "2px solid #1D1D1F", paddingLeft: "1.25rem",
              }}>
                We do not sell isolated deliverables. We build systems that help businesses present, operate, sell, and scale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. WHAT WE BUILD ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#FAFAFA" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
            What we build
          </p>
          <h2 style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
            lineHeight: 1.1, letterSpacing: "-0.03em",
            color: "#1D1D1F", maxWidth: "640px", marginBottom: "1rem",
          }}>
            Six execution lines.
          </h2>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.7, color: "#86868B", maxWidth: "600px", marginBottom: "3.5rem" }}>
            Each one can stand alone, but the real strength appears when they connect into one system.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(380px, 100%), 1fr))", gap: "1px", background: "rgba(0,0,0,0.07)", borderRadius: "16px", overflow: "hidden" }}>
            {SERVICES.map((s) => (
              <div key={s.index} style={{ background: "white", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "11px", color: "#86868B", letterSpacing: "0.06em" }}>
                    {s.index}
                  </span>
                  <h3 style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", letterSpacing: "-0.018em", color: "#1D1D1F", lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                </div>
                <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", lineHeight: 1.65, color: "#86868B", marginBottom: "1.25rem" }}>
                  {s.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "1.25rem" }}>
                  {s.items.map((item) => (
                    <span key={item} style={{
                      fontFamily: NM, fontWeight: 400, fontSize: "11px",
                      color: "#1D1D1F", border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: "100px", padding: "3px 10px",
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
                <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12.5px", lineHeight: 1.6, color: "#86868B", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "1rem" }}>
                  {s.proof}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. HOW WE THINK ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
            How we think
          </p>
          <h2 style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
            lineHeight: 1.1, letterSpacing: "-0.03em",
            color: "#1D1D1F", maxWidth: "640px", marginBottom: "3.5rem",
          }}>
            Five principles that shape every project.
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.n}
                style={{
                  display: "grid", gridTemplateColumns: "60px 1fr",
                  gap: "2rem", padding: "2rem 0",
                  borderTop: i === 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                  alignItems: "start",
                }}
              >
                <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "11px", color: "#86868B", letterSpacing: "0.06em", paddingTop: "3px" }}>
                  {p.n}
                </span>
                <div>
                  <h3 style={{ fontFamily: NM, fontWeight: 400, fontSize: "18px", letterSpacing: "-0.02em", color: "#1D1D1F", marginBottom: "0.6rem" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.75, color: "#86868B" }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. HOW WE WORK ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#080A0E" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
            How we work
          </p>
          <h2 style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
            lineHeight: 1.1, letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.88)", maxWidth: "640px", marginBottom: "1rem",
          }}>
            Seven stages from goal to growth.
          </h2>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.4)", maxWidth: "540px", marginBottom: "3.5rem" }}>
            Every project starts by understanding the real outcome. Then we scope, design, build, test, launch, and support the system.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
            {STEPS.map((step) => (
              <div key={step.n} style={{ background: "#080A0E", padding: "1.75rem" }}>
                <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em", display: "block", marginBottom: "0.75rem" }}>
                  {step.n}
                </span>
                <h3 style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", letterSpacing: "-0.018em", color: "rgba(255,255,255,0.88)", marginBottom: "0.5rem" }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", lineHeight: 1.65, color: "rgba(255,255,255,0.38)" }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6. PROOF LAYER ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
            Proof
          </p>
          <h2 style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
            lineHeight: 1.1, letterSpacing: "-0.03em",
            color: "#1D1D1F", maxWidth: "640px", marginBottom: "1rem",
          }}>
            Proof across multiple types of work.
          </h2>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.7, color: "#86868B", maxWidth: "600px", marginBottom: "3.5rem" }}>
            Our work is organized into clear categories so clients can understand what has been delivered, what is internal, what is a prototype, and what is confidential.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: "1px", background: "rgba(0,0,0,0.07)", borderRadius: "16px", overflow: "hidden" }}>
            {PROOF_CATEGORIES.map((cat) => (
              <div key={cat.label} style={{ background: "white", padding: "2rem" }}>
                <h3 style={{ fontFamily: NM, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#86868B", marginBottom: "0.75rem" }}>
                  {cat.label}
                </h3>
                <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", lineHeight: 1.65, color: "#86868B", marginBottom: "1.25rem" }}>
                  {cat.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {cat.examples.map((ex) => (
                    <div key={ex} style={{ display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#1D1D1F", flexShrink: 0, marginTop: "6px", display: "inline-block" }} />
                      <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", color: "#1D1D1F", lineHeight: 1.4 }}>
                        {ex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 7. THE ARAFION DIFFERENCE ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#FAFAFA" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
            Why clients work with Arafion
          </p>
          <h2 style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
            lineHeight: 1.1, letterSpacing: "-0.03em",
            color: "#1D1D1F", maxWidth: "640px", marginBottom: "3.5rem",
          }}>
            Five reasons that come up again and again.
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {DIFFERENTIATORS.map((d, i) => (
              <div
                key={d.title}
                style={{
                  display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between",
                  gap: "1rem", padding: "2rem 0",
                  borderTop: i === 0 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <div>
                  <h3 style={{ fontFamily: NM, fontWeight: 400, fontSize: "17px", letterSpacing: "-0.02em", color: "#1D1D1F", marginBottom: "0.5rem" }}>
                    {d.title}
                  </h3>
                  <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14px", lineHeight: 1.75, color: "#86868B", maxWidth: "680px" }}>
                    {d.body}
                  </p>
                </div>
                <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "11px", color: "rgba(0,0,0,0.15)", letterSpacing: "0.06em", paddingTop: "4px", flexShrink: 0 }}>
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 8. ABOUT THE NAME ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <div style={{ maxWidth: "680px" }}>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
              The name
            </p>
            <p style={{
              fontFamily: NM, fontWeight: 400,
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              lineHeight: 1.65, letterSpacing: "-0.015em",
              color: "#1D1D1F",
            }}>
              Arafion was built around a simple idea: serious digital work needs both imagination and operating discipline. The name represents a studio designed to move between engineering, intelligence, production, and visual systems without losing execution quality.
            </p>
          </div>
        </div>
      </div>

      {/* ── 9. TEAM ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#FAFAFA" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <div style={{ maxWidth: "720px" }}>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
              The team
            </p>
            <h2 style={{
              fontFamily: NM, fontWeight: 400,
              fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
              lineHeight: 1.15, letterSpacing: "-0.028em",
              color: "#1D1D1F", marginBottom: "1.5rem",
            }}>
              Built by a focused technical team.
            </h2>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.8, color: "#86868B", marginBottom: "1.25rem" }}>
              Arafion operates as a focused execution studio. Depending on the project, we combine product engineering, design, AI development, data systems, rendering, production, and campaign infrastructure into a lean delivery team.
            </p>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.8, color: "#86868B" }}>
              Arafion is founder-led and built around hands-on execution. The studio works with a focused network of technical and creative collaborators when projects require specialized support.
            </p>
          </div>
        </div>
      </div>

      {/* ── 10. WHO WE WORK WITH ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
            Who we work with
          </p>
          <h2 style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
            lineHeight: 1.15, letterSpacing: "-0.028em",
            color: "#1D1D1F", maxWidth: "640px", marginBottom: "1rem",
          }}>
            Clients who need serious digital execution.
          </h2>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.7, color: "#86868B", maxWidth: "540px", marginBottom: "2.5rem" }}>
            We work with clients who need serious digital execution, not generic online presence.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))", gap: "1px", background: "rgba(0,0,0,0.07)", borderRadius: "14px", overflow: "hidden", marginBottom: "2rem" }}>
            {CLIENT_TYPES.map((ct) => (
              <div key={ct} style={{ background: "white", padding: "1.25rem 1.5rem" }}>
                <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", color: "#1D1D1F", lineHeight: 1.4 }}>
                  {ct}
                </span>
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: NM, fontWeight: 400, fontSize: "14px", lineHeight: 1.7,
            color: "#86868B", maxWidth: "580px",
            borderLeft: "2px solid rgba(0,0,0,0.1)", paddingLeft: "1.25rem",
          }}>
            The best clients come with a real problem, decision-making authority, available assets, and a willingness to build properly. If the scope is unclear, we start with scoping before execution.
          </p>
        </div>
      </div>

      {/* ── 11. WHAT WE DO NOT DO ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#080A0E" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
            What we do not do
          </p>
          <h2 style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
            lineHeight: 1.15, letterSpacing: "-0.028em",
            color: "rgba(255,255,255,0.88)", maxWidth: "640px", marginBottom: "3rem",
          }}>
            Six things clients can count on us not doing.
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {NOPE.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex", alignItems: "baseline", gap: "1.25rem",
                }}
              >
                <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em", flexShrink: 0 }}>
                  0{i + 1}
                </span>
                <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.65, color: "rgba(255,255,255,0.7)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 12. FINAL CTA ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 6vw, 6rem) 1.25rem clamp(3.5rem, 7vw, 7rem)" }}>
          <div style={{
            background: "#F5F5F7", borderRadius: "20px",
            padding: "clamp(2.5rem, 5vw, 4.5rem)",
            display: "flex", flexDirection: "column", gap: "1.5rem",
          }}>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B" }}>
              Start here
            </p>
            <h2 style={{
              fontFamily: NM, fontWeight: 400,
              fontSize: "clamp(1.7rem, 3.5vw, 3.2rem)",
              lineHeight: 1.08, letterSpacing: "-0.035em",
              color: "#1D1D1F", maxWidth: "760px",
            }}>
              Have a system, product, campaign, or visual experience that needs building?
            </h2>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.7, color: "#86868B", maxWidth: "540px" }}>
              Start with the project goal. We will help define the scope, delivery path, and right execution model.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
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
              <Link href="/work" style={{
                fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
                background: "transparent", color: "#1D1D1F",
                border: "1px solid rgba(0,0,0,0.15)",
                borderRadius: "100px", padding: "10px 24px", textDecoration: "none",
              }}>
                See case studies
              </Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
