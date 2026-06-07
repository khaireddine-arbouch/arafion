"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';

const CATEGORIES = [
  { label: "All",          slug: "all"          },
  { label: "Software",     slug: "software"     },
  { label: "AI",           slug: "ai"           },
  { label: "Data",         slug: "data"         },
  { label: "Architecture", slug: "architecture" },
  { label: "Growth",       slug: "growth"       },
  { label: "Production",   slug: "production"   },
];

const ARTICLES = [
  {
    featured: true,
    category: "Product Engineering",
    slug: "software",
    title: "Why most SaaS MVPs fail before they ever reach users",
    thesis: "The problem is never the technology. It's the missing data model, weak role logic, and undefined business workflows that collapse the product before it ever ships.",
    readTime: "12 min",
    tags: ["SaaS Architecture", "Product Scope", "Workflows"],
    href: "/blog/why-saas-mvps-fail",
  },
  {
    featured: false,
    category: "Architecture Visualization",
    slug: "architecture",
    title: "From 2D plans to cinematic renders: our visualization pipeline",
    thesis: "Plans → model → materials → lighting → camera → QA → delivery formats.",
    readTime: "8 min",
    tags: ["3D Rendering", "Interior Design", "Sales Visuals"],
    href: "/blog/2d-plans-to-renders-pipeline",
  },
  {
    featured: false,
    category: "AI Systems",
    slug: "ai",
    title: "Building AI copilots that actually fit business workflows",
    thesis: "Copilots should connect to workflows, data, permissions, and outputs — not just chat.",
    readTime: "10 min",
    tags: ["AI Copilots", "LLM Integration", "Automation"],
    href: "/blog/ai-copilots-business-workflows",
  },
  {
    featured: false,
    category: "Data & Intelligence",
    slug: "data",
    title: "Why dashboards fail when the data model is wrong",
    thesis: "Dashboards are not charts. They are decision systems built on top of data architecture.",
    readTime: "9 min",
    tags: ["Dashboard Design", "Data Modelling", "BI"],
    href: "/blog/dashboards-data-model",
  },
  {
    featured: false,
    category: "Product Engineering",
    slug: "software",
    title: "How we build internal operating systems for business workflows",
    thesis: "Admin dashboards, RBAC, document flows, and audit trails — built as a system, not a set of pages.",
    readTime: "11 min",
    tags: ["Internal Tools", "RBAC", "Operations"],
    href: "/blog/internal-operating-systems",
  },
  {
    featured: false,
    category: "Strategy & Delivery",
    slug: "growth",
    title: "How we design quote selectors for high-ticket service businesses",
    thesis: "Package logic, add-ons, scope control, and lead qualification — not just a pricing page.",
    readTime: "7 min",
    tags: ["Lead Qualification", "Pricing UX", "Conversion"],
    href: "/blog/quote-selectors-high-ticket",
  },
  {
    featured: false,
    category: "Marketing & Production",
    slug: "production",
    title: "Campaign infrastructure is more than running ads",
    thesis: "Tracking, landing pages, CRM, creative pipeline, reporting, and training — the full system behind a campaign.",
    readTime: "8 min",
    tags: ["Campaign Setup", "Tracking", "Creative Pipeline"],
    href: "/blog/campaign-infrastructure",
  },
  {
    featured: false,
    category: "Architecture Visualization",
    slug: "architecture",
    title: "How to turn architectural visuals into a sales system",
    thesis: "Renders + portfolio + virtual walkthrough + social crops + lead capture = a complete sales machine.",
    readTime: "9 min",
    tags: ["Architecture Sales", "3D Portfolio", "Lead Capture"],
    href: "/blog/architectural-visuals-sales-system",
  },
];

const featured = ARTICLES[0];
const rest = ARTICLES.slice(1);

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? rest
    : rest.filter((a) => a.slug === activeCategory);

  useGSAP(
    () => {
      const d = { ease: "power3.out", immediateRender: false };
      gsap.from(".bl-header",   { ...d, y: 20, opacity: 0, duration: 0.8, scrollTrigger: { trigger: ".bl-header",   start: "top 88%" } });
      gsap.from(".bl-featured", { ...d, y: 28, opacity: 0, duration: 0.9, scrollTrigger: { trigger: ".bl-featured", start: "top 86%" } });
      gsap.from(".bl-tabs",     { ...d, y: 16, opacity: 0, duration: 0.6, scrollTrigger: { trigger: ".bl-tabs",     start: "top 90%" } });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white border-t border-black/6"
      style={{ fontFamily: NM }}
    >
      <div className="mx-auto max-w-[1320px] px-8 pt-24 pb-28 md:px-14 lg:px-20">

        {/* Header */}
        <div className="bl-header flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-16">
          <div style={{ maxWidth: "660px" }}>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", marginBottom: "1rem" }}>
              From the Lab
            </p>
            <h2
              style={{
                fontFamily: NM, fontWeight: 400,
                fontSize: "clamp(1.65rem, 2.8vw, 2.5rem)",
                lineHeight: 1.16, letterSpacing: "-0.028em",
                color: "#1D1D1F", marginBottom: "0.85rem",
              }}
            >
              Engineering notes, system breakdowns, and production playbooks.
            </h2>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.65, color: "#86868B" }}>
              We publish how we think through software architecture, AI workflows, dashboards,
              campaign systems, and architectural visualization — from decisions and tradeoffs
              to delivery pipelines.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-5 py-2.5 transition-colors hover:border-black/30"
            style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#1D1D1F", letterSpacing: "-0.01em" }}
          >
            View all notes
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px]">
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </Link>
        </div>

        {/* Featured article */}
        <Link
          href={featured.href}
          className="bl-featured group block mb-5 overflow-hidden rounded-2xl focus:outline-none"
          style={{ background: "#111316", textDecoration: "none" }}
        >
          <div className="p-10 md:p-14 lg:p-16">

            {/* Category + read time row */}
            <div className="flex items-center gap-4 mb-8">
              <span
                style={{
                  fontFamily: NM, fontWeight: 500, fontSize: "10.5px",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                {featured.category}
              </span>
              <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
              <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.28)" }}>
                {featured.readTime} read
              </span>
              <span
                className="ml-1 rounded-full border border-white/12 px-2.5 py-0.5"
                style={{ fontFamily: NM, fontWeight: 400, fontSize: "10.5px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em" }}
              >
                Featured
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: NM, fontWeight: 400,
                fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
                lineHeight: 1.14, letterSpacing: "-0.03em",
                color: "white", marginBottom: "1.1rem",
                maxWidth: "820px",
              }}
            >
              {featured.title}
            </h3>

            {/* Thesis */}
            <p
              style={{
                fontFamily: NM, fontWeight: 400, fontSize: "15px",
                lineHeight: 1.65, color: "rgba(255,255,255,0.42)",
                maxWidth: "640px", marginBottom: "2.5rem",
              }}
            >
              {featured.thesis}
            </p>

            {/* Bottom row */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-6">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: NM, fontWeight: 400, fontSize: "11.5px",
                      color: "rgba(255,255,255,0.3)", letterSpacing: "0.02em",
                    }}
                  >
                    {tag}
                    <span className="ml-2 text-white/10">·</span>
                  </span>
                ))}
              </div>
              <span
                className="inline-flex items-center gap-2 transition-opacity group-hover:opacity-60"
                style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.5)" }}
              >
                Read article
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px] transition-transform group-hover:translate-x-0.5">
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Category tabs */}
        <div className="bl-tabs flex flex-wrap gap-1.5 mb-6 pt-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.slug;
            const count = cat.slug === "all" ? rest.length : rest.filter((a) => a.slug === cat.slug).length;
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className="rounded-full px-4 py-1.5 transition-all focus:outline-none"
                style={{
                  fontFamily: NM,
                  fontWeight: isActive ? 500 : 400,
                  fontSize: "12.5px",
                  letterSpacing: "-0.005em",
                  background: isActive ? "#1D1D1F" : "transparent",
                  color: isActive ? "white" : "#86868B",
                  border: `1px solid ${isActive ? "#1D1D1F" : "rgba(0,0,0,0.1)"}`,
                }}
              >
                {cat.label}
                {cat.slug !== "all" && count > 0 && (
                  <span style={{ marginLeft: "5px", opacity: 0.45, fontSize: "11px" }}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Article grid */}
        {filtered.length === 0 ? (
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14px", color: "#86868B", padding: "2rem 0" }}>
            No articles in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-px bg-black/[0.07] overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col bg-white p-7 focus:outline-none transition-colors hover:bg-[#F9F9F9]"
                style={{ textDecoration: "none" }}
              >
                {/* Category + read time */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    style={{
                      fontFamily: NM, fontWeight: 500, fontSize: "10px",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "#86868B",
                    }}
                  >
                    {article.category}
                  </span>
                  <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "11px", color: "#86868B" }}>
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: NM, fontWeight: 400,
                    fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                    lineHeight: 1.38, letterSpacing: "-0.015em",
                    color: "#1D1D1F", marginBottom: "0.65rem",
                  }}
                >
                  {article.title}
                </h3>

                {/* Thesis */}
                <p
                  style={{
                    fontFamily: NM, fontWeight: 400, fontSize: "12.5px",
                    lineHeight: 1.6, color: "#86868B",
                    marginBottom: "1.5rem", flexGrow: 1,
                  }}
                >
                  {article.thesis}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-black/6 pt-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: NM, fontWeight: 400, fontSize: "10.5px",
                        color: "#86868B", letterSpacing: "0.01em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
