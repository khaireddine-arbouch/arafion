"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { ALL_PORTFOLIO_PROJECTS } from "@/lib/map-projects";
import type { ArafionProjectRow } from "@/lib/portfolio-view";
import rawProjectsJson from "@/data/arafion-data/projects.json";
import { regionLabel, serviceLabel, statusLabel } from "@/lib/i18n/labels";
import { getClientBrief, getMoreLabel } from "@/lib/i18n/work-content";

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";
const RAW = rawProjectsJson as unknown as ArafionProjectRow[];

/* ── Hero image (first/best screenshot) per slug ── */
const HERO: Record<string, string> = {
  "nileroute-os":              "/case%20studies/nileroute-os/image.png",
  "evo2-variant-intelligence": "/case%20studies/Evo2-Variant-Intelligence/Predictions.png",
  "signalsframe":              "/case%20studies/SignalsFrame/image.png",
  "intelligence-console":      "/case%20studies/supply-chain-intelligence/image1.png",
  "atlas-intelligence":        "/case%20studies/Atlas-Intelligence/Scan.png",
  "atlas-geoint":              "",
  "draftly":                   "/case%20studies/Draftly/image.png",
  "geoflex360":                "/case%20studies/geoflex/image.png",
  "chiro-site":                "/case%20studies/chiro-site/image1.png",
};

/* ── Client intent / what they asked for ── */
const STATUS_DOT: Record<string, string> = {
  live:               "#30D158",
  delivered:          "#86868B",
  "in-development":   "#FF9F0A",
  prototype:          "#FF9F0A",
};

export default function WorkPage() {
  const [active, setActive] = useState("all");
  const { locale } = useLanguage();
  const filters = [
    { label: locale === "fr" ? "Tout" : locale === "tr" ? "Tümü" : locale === "ar" ? "الكل" : "All", slug: "all" },
    { label: locale === "fr" ? "SaaS" : locale === "tr" ? "SaaS" : locale === "ar" ? "SaaS" : "SaaS", slug: "saas-software" },
    { label: "AI", slug: "ai-systems" },
    { label: locale === "fr" ? "Tableaux" : locale === "tr" ? "Panolar" : locale === "ar" ? "لوحات" : "Dashboards", slug: "dashboards-intelligence" },
    { label: locale === "fr" ? "Sites web" : locale === "tr" ? "Web siteleri" : locale === "ar" ? "المواقع" : "Websites", slug: "websites" },
  ];
  const heroTitle =
    locale === "fr"
      ? "Systèmes conçus à travers le logiciel, l'IA, la donnée et le design."
      : locale === "tr"
        ? "Yazılım, AI, veri ve tasarım genelinde inşa edilen sistemler."
        : locale === "ar"
          ? "أنظمة مبنية عبر البرمجيات والذكاء الاصطناعي والبيانات والتصميم."
          : "Systems built across software, AI, data, and design.";
  const heroSub =
    locale === "fr"
      ? "Des plateformes SaaS multi-tenant aux outils de recherche en génomique, en passant par les dashboards d'intelligence, les éditeurs médias dans le navigateur et les sites marketing multilingues — conçus et livrés."
      : locale === "tr"
        ? "Çok kiracılı SaaS platformlarından genomik araştırma araçlarına, zeka panolarından tarayıcı tabanlı medya editörlerine ve çok dilli pazarlama sitelerine kadar — tasarlandı ve yayımlandı."
        : locale === "ar"
          ? "من منصات SaaS متعددة المستأجرين إلى أدوات أبحاث الجينوم، ولوحات الذكاء، ومحررات الوسائط داخل المتصفح، والمواقع التسويقية متعددة اللغات — تم بناؤها وتسليمها."
          : "From multi-tenant SaaS platforms to genomics research tools, intelligence dashboards, browser-based media editors, and multilingual marketing sites — built and shipped.";

  const projects = ALL_PORTFOLIO_PROJECTS.filter((p) =>
    active === "all" ? true : p.serviceCategories.includes(active),
  );

  return (
    <main style={{ fontFamily: NM, background: "white", minHeight: "100vh" }}>

      {/* Top bar */}
      <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{
          maxWidth: "1320px", margin: "0 auto", padding: "0 2rem",
          height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/" style={{ fontFamily: NM, fontWeight: 500, fontSize: "14px", color: "#1D1D1F", letterSpacing: "-0.02em", textDecoration: "none" }}>
            Arafion
          </Link>
          <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {locale === "fr" ? "Travaux" : locale === "tr" ? "İşler" : locale === "ar" ? "الأعمال" : "Work"}
          </span>
        </div>
      </div>

      {/* Header */}
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem clamp(2rem, 3.5vw, 3.5rem)" }}>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", marginBottom: "1.25rem" }}>
          {ALL_PORTFOLIO_PROJECTS.length} {locale === "fr" ? "projets" : locale === "tr" ? "proje" : locale === "ar" ? "مشروعًا" : "projects"}
        </p>
        <h1 style={{
          fontFamily: NM, fontWeight: 400,
          fontSize: "clamp(2rem, 4vw, 3.8rem)",
          lineHeight: 1.08, letterSpacing: "-0.035em",
          color: "#1D1D1F", maxWidth: "820px", marginBottom: "1.5rem",
        }}>
          {heroTitle}
        </h1>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.7, color: "#86868B", maxWidth: "560px" }}>
          {heroSub}
        </p>
      </div>

      {/* Filters + grid */}
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 1.25rem 6rem" }}>
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "1.75rem", paddingBottom: "1.75rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {filters.map((f) => {
            const isActive = active === f.slug;
            return (
              <button key={f.slug} onClick={() => setActive(f.slug)} style={{
                fontFamily: NM, fontWeight: isActive ? 500 : 400, fontSize: "12.5px",
                background: isActive ? "#1D1D1F" : "transparent",
                color: isActive ? "white" : "#86868B",
                border: `1px solid ${isActive ? "#1D1D1F" : "rgba(0,0,0,0.1)"}`,
                borderRadius: "100px", padding: "5px 14px", cursor: "pointer", outline: "none",
              }}>
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(380px, 100%), 1fr))",
          gap: "2rem",
        }}>
          {projects.map((project) => {
            const raw = RAW.find((r) => (r.slug ?? r.id) === project.slug);
            const heroSrc = HERO[project.slug] ?? "";
            const dotColor = STATUS_DOT[project.status] ?? "#86868B";
            const brief = getClientBrief(locale, project.slug) || project.shortDescription;
            const built = raw?.whatWeBuilt ?? [];

            return (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group"
                style={{ textDecoration: "none", display: "block" }}
              >
                <article style={{
                  borderRadius: "16px", overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.07)",
                  background: "white",
                  display: "flex", flexDirection: "column",
                  height: "100%",
                  transition: "box-shadow 0.2s ease",
                }}>

                  {/* ── Screenshot or dark fallback ── */}
                  {heroSrc ? (
                    <div style={{
                      aspectRatio: "16/9", overflow: "hidden",
                      background: "#080A0E", position: "relative",
                    }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={heroSrc}
                        alt={project.displayTitle}
                        style={{
                          width: "100%", height: "100%",
                          objectFit: "cover", objectPosition: "top",
                          display: "block",
                        }}
                      />
                      {/* Status overlay */}
                      <div style={{
                        position: "absolute", bottom: "0.85rem", right: "0.85rem",
                        display: "flex", alignItems: "center", gap: "5px",
                        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
                        borderRadius: "100px", padding: "3px 10px",
                      }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: dotColor, display: "inline-block" }} />
                        <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "10px", color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em" }}>
                          {statusLabel(locale, project.status)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div style={{
                      aspectRatio: "16/9", background: "#080A0E",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      position: "relative",
                    }}>
                      <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        backgroundImage: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)",
                      }} />
                      <p style={{
                        fontFamily: NM, fontWeight: 400, fontSize: "1.1rem",
                        letterSpacing: "-0.025em", color: "rgba(255,255,255,0.75)",
                        textAlign: "center", padding: "0 2rem", lineHeight: 1.2,
                      }}>
                        {project.displayTitle}
                      </p>
                      <div style={{
                        position: "absolute", bottom: "0.85rem", right: "0.85rem",
                        display: "flex", alignItems: "center", gap: "5px",
                        background: "rgba(255,255,255,0.07)", borderRadius: "100px", padding: "3px 10px",
                      }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: dotColor }} />
                        <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "10px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>
                          {project.statusLabel}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ── Card content ── */}
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1, gap: "0" }}>

                    {/* Service + region */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.7rem" }}>
                      <span style={{
                        fontFamily: NM, fontWeight: 500, fontSize: "10px",
                        letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B",
                      }}>
                        {serviceLabel(locale, project.serviceCategories[0] ?? "")}
                      </span>
                      <span style={{
                        fontFamily: NM, fontWeight: 400, fontSize: "11px", color: "#86868B",
                      }}>
                        {regionLabel(locale, project.regionLabel)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: NM, fontWeight: 400, fontSize: "1.15rem",
                      letterSpacing: "-0.022em", color: "#1D1D1F",
                      lineHeight: 1.25, marginBottom: "0.75rem",
                    }}>
                      {project.displayTitle}
                    </h3>

                    {/* Client brief / what they wanted */}
                    <p style={{
                      fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
                      lineHeight: 1.65, color: "#86868B",
                      marginBottom: built.length > 0 ? "1.25rem" : "0",
                    }}>
                      {brief}
                    </p>

                    {/* What we built — up to 5 items */}
                    {built.length > 0 && (
                      <div style={{ marginBottom: "1.25rem" }}>
                        <p style={{
                          fontFamily: NM, fontWeight: 500, fontSize: "10px",
                          letterSpacing: "0.08em", textTransform: "uppercase",
                          color: "#86868B", marginBottom: "0.6rem",
                        }}>
                          {locale === "fr" ? "Ce que nous avons construit" : locale === "tr" ? "Ne inşa ettik" : locale === "ar" ? "ما الذي بنيناه" : "What we built"}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                          {built.slice(0, 5).map((item: string, i: number) => (
                            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
                              <span style={{ color: "#86868B", fontSize: "12px", flexShrink: 0 }}>—</span>
                              <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#1D1D1F", lineHeight: 1.4 }}>
                                {item}
                              </span>
                            </div>
                          ))}
                          {built.length > 5 && (
                            <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B", paddingLeft: "1.2rem" }}>
                            +{built.length - 5} {getMoreLabel(locale)}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Spacer */}
                    <div style={{ flex: 1 }} />

                    {/* Bottom: stack + CTA */}
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "1rem", marginTop: "1rem",
                      gap: "0.75rem",
                    }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", flex: 1, minWidth: 0 }}>
                        {project.stackTags.slice(0, 3).map((tag) => (
                          <span key={tag} style={{
                            fontFamily: NM, fontWeight: 400, fontSize: "10.5px",
                            color: "#86868B", border: "1px solid rgba(0,0,0,0.08)",
                            borderRadius: "100px", padding: "2px 8px", whiteSpace: "nowrap",
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span style={{
                        fontFamily: NM, fontWeight: 400, fontSize: "12.5px",
                        color: "#1D1D1F", display: "inline-flex", alignItems: "center",
                        gap: "4px", flexShrink: 0,
                      }}>
                        {locale === "fr" ? "Voir l'étude de cas" : locale === "tr" ? "Vaka çalışmasını görüntüle" : locale === "ar" ? "عرض دراسة الحالة" : "View case study"}
                        <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "9px", height: "9px" }}>
                          <path d="M2 5h6M5 2l3 3-3 3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>

    </main>
  );
}
