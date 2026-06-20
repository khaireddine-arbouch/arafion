"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { MapProject } from "@/types";
import { useLanguage } from "@/lib/i18n/context";
import { regionLabel, serviceLabel, statusLabel } from "@/lib/i18n/labels";

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  live:          { label: "Live",        color: "#30D158", bg: "rgba(48,209,88,0.12)"  },
  "in-progress": { label: "In Progress", color: "#FF9F0A", bg: "rgba(255,159,10,0.12)" },
  concept:       { label: "Concept",     color: "#BF5AF2", bg: "rgba(191,90,242,0.12)" },
};

interface Props {
  project: MapProject;
  onClose: () => void;
}

export default function GlobeProjectCard({ project, onClose }: Props) {
  const { locale } = useLanguage();
  const status = STATUS_CONFIG[project.status] ?? STATUS_CONFIG["concept"];
  const title  = project.displayTitle ?? project.globeLabel ?? project.operator;
  const services = (project.serviceCategories ?? []).map((category) => serviceLabel(locale, category));
  const stack    = project.stackTags ?? [];
  const hasSlug  = Boolean(project.slug);
  const localizedStatus = statusLabel(locale, project.status);
  const localizedRegion = project.regionLabel ? regionLabel(locale, project.regionLabel) : "";

  /* ESC to close */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      style={{
        animation: "globe-card-in 0.36s cubic-bezier(0.22,1,0.36,1) both",
        background: "rgba(10,11,14,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.35)",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Header */}
      <div style={{ padding: "1.1rem 1.25rem 0.9rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              background: status.bg,
              borderRadius: "100px", padding: "2px 9px",
              fontFamily: NM, fontWeight: 400, fontSize: "10.5px",
              color: status.color, letterSpacing: "0.02em",
              marginBottom: "0.55rem",
            }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: status.color, display: "inline-block" }} />
              {localizedStatus}
            </span>
            <p style={{
              fontFamily: NM, fontWeight: 400,
              fontSize: "15px", lineHeight: 1.28,
              letterSpacing: "-0.02em", color: "rgba(255,255,255,0.92)",
            }}>
              {title}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              flexShrink: 0, width: "26px", height: "26px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginTop: "2px",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)")}
          >
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ width: "9px", height: "9px", color: "rgba(255,255,255,0.55)" }}>
              <path d="M2 2l6 6M8 2l-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "0.9rem 1.25rem" }}>
        {/* Region + location */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem 1.25rem", marginBottom: "0.85rem" }}>
          {project.regionLabel && (
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" style={{ width: "10px", height: "10px", color: "rgba(255,255,255,0.28)", flexShrink: 0 }}>
                <circle cx="6" cy="6" r="4.5" /><path d="M6 1.5a6 4.5 0 0 1 0 9M1.5 6h9" />
              </svg>
              <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.46)" }}>{localizedRegion}</span>
            </div>
          )}
          {project.location && (
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" style={{ width: "10px", height: "10px", color: "rgba(255,255,255,0.28)", flexShrink: 0 }}>
                <path d="M6 1C4.34 1 3 2.34 3 4c0 2.25 3 7 3 7s3-4.75 3-7c0-1.66-1.34-3-3-3z" /><circle cx="6" cy="4" r="1" />
              </svg>
              <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.46)" }}>{project.location}</span>
            </div>
          )}
        </div>

        {/* Notes */}
        {project.notes && (
          <p style={{
            fontFamily: NM, fontWeight: 400, fontSize: "13px",
            lineHeight: 1.65, color: "rgba(255,255,255,0.52)",
            marginBottom: "0.9rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {project.notes}
          </p>
        )}

        {/* Service tags */}
        {services.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: stack.length > 0 ? "0.65rem" : 0 }}>
            {services.slice(0, 3).map((s) => (
              <span key={s} style={{
                fontFamily: NM, fontWeight: 400, fontSize: "11px",
                color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "2px 9px",
              }}>{s}</span>
            ))}
          </div>
        )}

        {/* Stack tags */}
        {stack.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem 0.6rem" }}>
            {stack.slice(0, 4).map((t) => (
              <span key={t} style={{ fontFamily: NM, fontWeight: 400, fontSize: "10.5px", color: "rgba(255,255,255,0.28)" }}>{t}</span>
            ))}
            {stack.length > 4 && (
              <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "10.5px", color: "rgba(255,255,255,0.18)" }}>+{stack.length - 4}</span>
            )}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      {hasSlug ? (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "0.75rem 1.25rem" }}>
          <Link href={`/work/${project.slug}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none" }}>
              <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12.5px", color: "rgba(255,255,255,0.42)" }}>
                {locale === "fr" ? "Voir l'étude de cas" : locale === "tr" ? "Vaka çalışmasını görüntüle" : locale === "ar" ? "عرض دراسة الحالة" : "View case study"}
              </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: NM, fontWeight: 500, fontSize: "12px", color: "rgba(255,255,255,0.88)" }}>
              {locale === "fr" ? "Ouvrir" : locale === "tr" ? "Aç" : locale === "ar" ? "افتح" : "Open"}
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ width: "9px", height: "9px" }}>
                <path d="M2 5h6M5 2l3 3-3 3" />
              </svg>
            </span>
          </Link>
        </div>
      ) : project.isConfidential ? (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "0.75rem 1.25rem" }}>
          <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.22)" }}>
            {locale === "fr" ? "Mission confidentielle" : locale === "tr" ? "Gizli çalışma" : locale === "ar" ? "مهمة سرية" : "Confidential engagement"}
          </span>
        </div>
      ) : null}
    </div>
  );
}
