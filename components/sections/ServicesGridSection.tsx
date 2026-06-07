"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';

const SERVICES = [
  {
    number: "01",
    title: "Software & Product Engineering",
    outcome: "Full-stack products, portals, dashboards, and operating systems built for real workflows.",
    for: "Startups, scale-ups, and operations-heavy businesses building internal tools or external platforms.",
    highlights: [
      "SaaS MVPs & multi-tenant platforms",
      "Admin dashboards & client portals",
      "Internal operating systems",
      "E-commerce & order management",
      "Auth, RBAC & data models",
    ],
    capabilities: [
      "SaaS MVPs",
      "Multi-tenant platforms",
      "Browser-based production software",
      "Admin dashboards",
      "Client portals",
      "Internal operating systems",
      "Workflow automation tools",
      "Authentication & RBAC systems",
      "E-commerce storefronts",
      "Product catalog architecture",
      "Cart, checkout & payment flows",
      "Customer accounts & order management",
      "Product prototypes",
      "Maintenance systems",
    ],
    cta: "Start a software project",
    href: "/contact?service=software",
  },
  {
    number: "02",
    title: "Websites & Digital Presence",
    outcome: "Websites that explain the business clearly, present proof, capture leads, and support growth.",
    for: "Businesses that need credibility, online leads, and a serious public-facing presence.",
    highlights: [
      "Corporate & portfolio websites",
      "Landing pages & lead capture",
      "E-commerce storefronts",
      "SEO-ready architecture",
      "CMS integrations & maintenance",
    ],
    capabilities: [
      "Landing pages",
      "Corporate websites",
      "Portfolio websites",
      "Healthcare websites",
      "Architecture & studio websites",
      "E-commerce storefronts",
      "SEO-ready pages",
      "CMS integrations",
      "Conversion landing pages",
      "Analytics setup",
      "Maintenance & content updates",
      "Performance optimisation",
    ],
    cta: "Build a business website",
    href: "/contact?service=websites",
  },
  {
    number: "03",
    title: "Intelligence, Data & AI",
    outcome: "We turn scattered workflows and data into AI-assisted systems, dashboards, and decision interfaces.",
    for: "Operations teams, executives, and businesses sitting on unstructured or underused data.",
    highlights: [
      "AI copilots & workflow automation",
      "LLM API & document intelligence",
      "Custom BI dashboards",
      "ETL pipelines & data infrastructure",
      "Decision-support systems",
    ],
    capabilities: [
      "AI copilots & assistants",
      "LLM API integrations",
      "Workflow automation pipelines",
      "Document intelligence",
      "Video & media AI tools",
      "Research assistants",
      "Decision-support dashboards",
      "Prompt engineering & fine-tuning",
      "Custom BI dashboards",
      "ETL & data pipelines",
      "Executive consoles",
      "Operational reporting tools",
      "Geospatial dashboards",
      "Market & risk intelligence UIs",
      "Multi-source data aggregation",
      "Role-based reporting",
      "Export & report generation",
    ],
    cta: "Build an intelligence system",
    href: "/contact?service=ai",
  },
  {
    number: "04",
    title: "Marketing, Campaigns & Production",
    outcome: "We build the campaign infrastructure, creative pipeline, tracking, and reporting layer behind growth systems.",
    for: "Businesses running or planning paid media, campaigns, or content production at scale.",
    highlights: [
      "Meta / Google / TikTok setup",
      "Pixel & conversion tracking",
      "Creative production pipelines",
      "CRM & lead flow setup",
      "Monthly reporting structures",
    ],
    capabilities: [
      "Meta / Google / TikTok setup",
      "Tracking & pixel implementation",
      "CRM and lead flow setup",
      "Conversion landing pages",
      "Campaign dashboards",
      "UTM structure",
      "Campaign planning & strategy",
      "Creative production pipeline",
      "Post-production workflows",
      "Brand content calendars",
      "Social media asset packs",
      "QA pipeline",
      "Delivery formats (ads/social/web)",
      "Monthly performance reporting",
      "Client training & handoff",
    ],
    cta: "Build a campaign system",
    href: "/contact?service=marketing",
  },
  {
    number: "05",
    title: "Architecture Visualization & 3D",
    outcome: "Transform plans, models, and references into cinematic renders, interactive walkthroughs, and sales-ready visuals.",
    for: "Architects, interior designers, developers, real estate teams, and kitchen/interior brands.",
    highlights: [
      "Interior & exterior renders",
      "3D modeling from 2D plans",
      "Virtual walkthroughs",
      "Three.js & WebGL web showcases",
      "Social media render packs",
    ],
    capabilities: [
      "Interior & exterior renders",
      "3D modeling from 2D plans",
      "Virtual walkthroughs",
      "Three.js web showcases",
      "WebGL scenes & configurators",
      "Real estate sales visuals",
      "Social media render packs",
      "Portfolio & project pages",
      "Kitchen & space visualization",
      "Before/after presentation",
      "Embedded render galleries",
      "Interactive 3D product viewers",
    ],
    cta: "Get a render quote",
    href: "/contact?service=3d",
  },
  {
    number: "06",
    title: "Strategy, Scoping & Maintenance",
    outcome: "Before we build, we clarify the scope, architecture, objective, and delivery path — so the project does not collapse into vague execution.",
    for: "Serious clients about to invest in a software product, AI system, campaign infrastructure, or data platform.",
    highlights: [
      "Technical scoping & MVP roadmap",
      "System architecture & data models",
      "Feature prioritisation",
      "Hosting, deployment & monitoring",
      "Ongoing maintenance & iteration",
    ],
    capabilities: [
      "Project audit",
      "Product requirements",
      "Feature prioritisation",
      "MVP scope definition",
      "Technical architecture",
      "User flows",
      "Data model planning",
      "Integration planning",
      "Delivery roadmap",
      "Cost & timeline estimation",
      "Hosting setup",
      "Deployment monitoring",
      "Bug fixes & security updates",
      "Content updates",
      "Analytics reporting",
      "Monthly improvements",
      "Backup & recovery",
      "Performance optimisation",
      "QA process",
      "Training & handoff",
    ],
    cta: "Book a scoping call",
    href: "/contact?service=strategy",
  },
];

export default function ServicesGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState<boolean[]>(
    new Array(SERVICES.length).fill(false),
  );

  const toggle = (i: number) => {
    setExpanded((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  useGSAP(
    () => {
      gsap.from(".sg-header", {
        y: 24, opacity: 0, duration: 0.8, ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: ".sg-header", start: "top 88%" },
      });
      gsap.from(".sg-card", {
        y: 28, opacity: 0, duration: 0.7, ease: "power3.out",
        stagger: 0.09, immediateRender: false,
        scrollTrigger: { trigger: ".sg-grid", start: "top 84%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-black/6"
      style={{ fontFamily: NM, background: "#F5F5F7" }}
    >
      <div className="mx-auto max-w-[1320px] px-8 pt-20 pb-24 md:px-14 lg:px-20">

        {/* Header */}
        <div className="sg-header mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", marginBottom: "0.75rem" }}>
              What we build
            </p>
            <h2
              style={{
                fontFamily: NM, fontWeight: 400,
                fontSize: "clamp(1.65rem, 2.8vw, 2.6rem)",
                lineHeight: 1.16, letterSpacing: "-0.028em",
                color: "#1D1D1F", maxWidth: "600px",
              }}
            >
              Six service families. One integrated team.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-5 py-2.5 transition-colors hover:border-black/30"
              style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#1D1D1F", letterSpacing: "-0.01em" }}
            >
              View all services
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px]">
                <path d="M2 5h6M5 2l3 3-3 3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-5 py-2.5 transition-colors hover:border-black/30 hover:bg-black/5"
              style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", letterSpacing: "-0.01em" }}
            >
              Start a project
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px]">
                <path d="M2 5h6M5 2l3 3-3 3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Cards grid */}
        <div className="sg-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.number}
              className="sg-card flex flex-col overflow-hidden rounded-2xl bg-white border border-black/6"
            >
              {/* Card top */}
              <div className="flex flex-col gap-0 p-7 pb-6 flex-1">

                {/* Number + title */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    style={{
                      fontFamily: NM, fontWeight: 400, fontSize: "11px",
                      color: "#86868B", letterSpacing: "0.06em",
                      textTransform: "uppercase", paddingTop: "3px",
                    }}
                  >
                    {svc.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: NM, fontWeight: 400,
                    fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
                    lineHeight: 1.22, letterSpacing: "-0.02em",
                    color: "#1D1D1F", marginBottom: "0.75rem",
                  }}
                >
                  {svc.title}
                </h3>

                {/* Outcome */}
                <p
                  style={{
                    fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
                    lineHeight: 1.6, color: "#86868B", marginBottom: "1.4rem",
                  }}
                >
                  {svc.outcome}
                </p>

                {/* "For" tag */}
                <p
                  style={{
                    fontFamily: NM, fontWeight: 500, fontSize: "10.5px",
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: "#86868B", marginBottom: "0.6rem",
                  }}
                >
                  For
                </p>
                <p
                  style={{
                    fontFamily: NM, fontWeight: 400, fontSize: "12.5px",
                    lineHeight: 1.5, color: "#86868B", marginBottom: "1.6rem",
                  }}
                >
                  {svc.for}
                </p>

                {/* Key highlights */}
                <p
                  style={{
                    fontFamily: NM, fontWeight: 500, fontSize: "10.5px",
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: "#86868B", marginBottom: "0.7rem",
                  }}
                >
                  We build
                </p>
                <ul className="flex flex-col gap-1.5 mb-5">
                  {svc.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5"
                      style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", color: "#1D1D1F", lineHeight: 1.4 }}
                    >
                      <span style={{ color: "#86868B", marginTop: "1px", flexShrink: 0 }}>—</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Accordion toggle */}
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center gap-1.5 self-start focus:outline-none group"
                  style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B", letterSpacing: "-0.005em" }}
                >
                  <svg
                    viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className="size-[9px] transition-transform duration-200"
                    style={{ transform: expanded[i] ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path d="M2 3.5l3 3 3-3" />
                  </svg>
                  {expanded[i] ? "Hide capabilities" : "View all capabilities"}
                </button>

                {/* Full capability list — accordion */}
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: expanded[i] ? "600px" : "0px",
                    transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div className="pt-4 pb-1">
                    <div
                      className="grid grid-cols-2 gap-x-4 gap-y-1.5 rounded-xl p-4"
                      style={{ background: "#F5F5F7" }}
                    >
                      {svc.capabilities.map((c) => (
                        <p
                          key={c}
                          style={{
                            fontFamily: NM, fontWeight: 400, fontSize: "12px",
                            color: "#86868B", lineHeight: 1.45,
                          }}
                        >
                          {c}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card CTA — pinned to bottom */}
              <div className="border-t border-black/6 px-7 py-4">
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                  style={{ fontFamily: NM, fontWeight: 500, fontSize: "13px", color: "#1D1D1F", letterSpacing: "-0.01em" }}
                >
                  {svc.cta}
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-[9px]">
                    <path d="M2 5h6M5 2l3 3-3 3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
