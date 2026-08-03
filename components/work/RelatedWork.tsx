"use client";

import Link from "next/link";
import type { PortfolioProject } from "@/lib/portfolio-view";
import { useLanguage } from "@/lib/i18n/context";
import { regionLabel, serviceLabel, statusLabel } from "@/lib/i18n/labels";
import { getProjectDisplayTitle } from "@/lib/i18n/project-content";

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

export default function RelatedWork({ projects }: { projects: PortfolioProject[] }) {
  const { locale } = useLanguage();
  if (projects.length === 0) return null;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
      gap: "1px", background: "rgba(0,0,0,0.07)",
      borderRadius: "16px", overflow: "hidden",
    }}>
      {projects.map((p) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          className="group block"
          style={{ textDecoration: "none" }}
        >
          <div
            className="transition-colors group-hover:bg-[#F9F9F9]"
            style={{ background: "white", padding: "1.5rem", height: "100%" }}
          >
            <span style={{
              fontFamily: NM, fontWeight: 500, fontSize: "10px",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#86868B", display: "block", marginBottom: "0.5rem",
            }}>
              {serviceLabel(locale, p.serviceCategories[0] ?? "")}
            </span>
            <p style={{
              fontFamily: NM, fontWeight: 400, fontSize: "14.5px",
              letterSpacing: "-0.012em", color: "#1D1D1F",
              lineHeight: 1.35, marginBottom: "0.5rem",
            }}>
              {getProjectDisplayTitle(locale, p.slug, p.title || p.displayTitle)}
            </p>
            <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "11.5px", color: "#86868B" }}>
              {statusLabel(locale, p.status)} · {regionLabel(locale, p.regionLabel)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
