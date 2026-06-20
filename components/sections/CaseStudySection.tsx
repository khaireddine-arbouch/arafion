"use client";

import Link from "next/link";
import { useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ALL_PORTFOLIO_PROJECTS } from "@/lib/map-projects";
import { regionLabel, serviceLabel, statusLabel } from "@/lib/i18n/labels";
import type { PortfolioProject } from "@/lib/portfolio-view";
import { useLanguage } from "@/lib/i18n/context";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

/** Hero screenshots for the dark panel (path relative to /public). */
const CASE_STUDY_SCREENSHOT: Record<string, string> = {
  "nileroute-os":              "/case%20studies/nileroute-os/image.png",
  "evo2-variant-intelligence": "/case%20studies/Evo2-Variant-Intelligence/Predictions.png",
  signalsframe:                "/case%20studies/SignalsFrame/image.png",
  "intelligence-console":      "/case%20studies/supply-chain-intelligence/image1.png",
  "atlas-intelligence":        "/case%20studies/Atlas-Intelligence/Scan.png",
  draftly:                     "/case%20studies/Draftly/image.png",
  geoflex360:                  "/case%20studies/geoflex/image.png",
  "chiro-site":                "/case%20studies/chiro-site/image1.png",
};

/** Optional logo overlaid on top of the screenshot. */
const CASE_STUDY_LOGO: Record<string, { src: string; invert?: boolean }> = {
  "nileroute-os": { src: "/logos/nile-route-os-logo.png", invert: true },
  "evo2-variant-intelligence": { src: "/logos/evo2-Logo.png" },
  signalsframe: { src: "/logos/SignalsFrame%20logo.png" },
  "atlas-intelligence": { src: "/logos/Atlas%20Intelligence%20Logo.png" },
  geoflex360: { src: "/logos/geoflex%20logo.png" },
  "chafai-architects": { src: "/logos/chafai-architects.png" },
  "almajliss-heritage": { src: "/logos/Almajliss-Site-Icon.webp" },
};

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return `${s.slice(0, max - 1)}…`;
}

function caseStudyStats(
  p: PortfolioProject,
  locale: "en" | "fr" | "tr" | "ar",
  labels: { status: string; region: string; focus: string; stack: string },
): { value: string; label: string }[] {
  const a = p.stackTags[0] ?? "—";
  const b = p.stackTags[1];
  return [
    { value: statusLabel(locale, p.status), label: labels.status },
    { value: truncate(regionLabel(locale, p.regionLabel), 32), label: labels.region },
    { value: truncate(serviceLabel(locale, p.serviceCategories[0] ?? ""), 36), label: labels.focus },
    { value: b ? truncate(`${a} · ${b}`, 40) : truncate(a, 40), label: labels.stack },
  ];
}

function statusAccent(status: string): string {
  if (status === "live") return "#30D158";
  if (status === "in-development" || status === "prototype" || status === "planned-or-in-progress")
    return "#FF9F0A";
  return "#0A84FF";
}

export default function CaseStudySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useLanguage();

  const studies = useMemo(
    () =>
      [...ALL_PORTFOLIO_PROJECTS]
        .filter((p): p is PortfolioProject & { publicUrl: string } => Boolean(p.publicUrl))
        .sort((a, b) => Number(b.featured) - Number(a.featured)),
    [],
  );

  useGSAP(
    () => {
      const defaults = { ease: "power3.out", immediateRender: false };
      gsap.from(".cs-eyebrow", {
        ...defaults,
        y: 12,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: { trigger: ".cs-eyebrow", start: "top 90%", once: true },
      });
      gsap.from(".cs-headline", {
        ...defaults,
        y: 36,
        opacity: 0,
        duration: 0.95,
        scrollTrigger: { trigger: ".cs-headline", start: "top 88%", once: true },
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const cards = gsap.utils.toArray<HTMLElement>(".cs-card");
      if (cards.length === 0) return;
      gsap.from(cards, {
        x: 20,
        autoAlpha: 0,
        duration: 1.05,
        ease: "power4.out",
        stagger: { each: 0.075, amount: Math.min(0.65, cards.length * 0.075) },
        scrollTrigger: { trigger: ".cs-scroll", start: "top 86%", once: true },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative border-t border-black/[0.06] bg-white"
      style={{ fontFamily: NM }}
    >
      <div className="mx-auto max-w-[1320px] px-8 pt-24 pb-28 md:px-14 lg:px-20">
        {/* Header row */}
        <div className="cs-eyebrow mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div style={{ maxWidth: "680px" }}>
            <p
              style={{
                fontFamily: NM, fontWeight: 400, fontSize: "13px",
                color: "#86868B", letterSpacing: "0.01em", marginBottom: "1.1rem",
              }}
            >
              {t.sections.caseStudies.eyebrow}
            </p>
            <h2
              className="cs-headline"
              style={{
                fontFamily: NM, fontWeight: 400,
                fontSize: "clamp(1.7rem, 3vw, 2.8rem)",
                lineHeight: 1.18, letterSpacing: "-0.028em",
                color: "#1D1D1F", marginBottom: "1rem",
              }}
            >
              {t.sections.caseStudies.heading}
            </h2>
            <p
              style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", letterSpacing: "0.02em" }}
            >
              <span className="hidden sm:inline">{t.sections.caseStudies.subheading}</span>
              <span className="sm:hidden">{t.sections.caseStudies.subheading}</span>
            </p>
          </div>
          <Link
            href="/work"
            className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-5 py-2.5 transition-colors hover:border-black/30"
            style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#1D1D1F", letterSpacing: "-0.01em", textDecoration: "none" }}
          >
            {t.sections.caseStudies.viewAll}
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px]">
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </Link>
        </div>

        <div className="relative -mx-5 md:-mx-8 lg:-mx-10">
          <div
            ref={scrollRef}
            className="cs-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-visible scroll-smooth rounded-xl px-5 py-3 [-ms-overflow-style:none] [scrollbar-width:thin] md:gap-6 md:px-8 lg:gap-7 lg:px-10 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/10 [&::-webkit-scrollbar-track]:bg-transparent"
            role="region"
            aria-label={t.sections.caseStudies.heading}
            tabIndex={0}
            onKeyDown={(e) => {
              const el = scrollRef.current;
              if (!el) return;
              const step = Math.min(520, Math.max(320, el.clientWidth * 0.88));
              if (e.key === "ArrowRight") {
                e.preventDefault();
                el.scrollBy({ left: step, behavior: "smooth" });
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                el.scrollBy({ left: -step, behavior: "smooth" });
              }
            }}
          >
            {studies.map((project) => (
              <CaseStudyCard
                key={project.id}
                project={project}
              labels={t.sections.caseStudies.labels}
              locale={locale}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  project,
  labels,
  locale,
}: {
  project: PortfolioProject & { publicUrl: string };
  labels: { status: string; region: string; focus: string; stack: string };
  locale: "en" | "fr" | "tr" | "ar";
}) {
  const logo = CASE_STUDY_LOGO[project.id];
  const screenshot = CASE_STUDY_SCREENSHOT[project.id];
  const stats = caseStudyStats(project, locale, labels);
  const stack = project.stackTags.slice(0, 5);
  const service = serviceLabel(locale, project.serviceCategories[0] ?? "");
  const region = regionLabel(locale, project.regionLabel);

  return (
    <article
      className="cs-card grid w-[min(1080px,calc(100vw-2.5rem))] shrink-0 snap-center grid-cols-1 overflow-hidden rounded-2xl border border-black/[0.07] lg:w-[min(1080px,calc(100vw-5rem))] lg:grid-cols-[1fr_1fr]"
    >
      {/* ── Visual panel ── */}
      <div
        className="relative flex min-h-[300px] flex-col overflow-hidden sm:min-h-[360px] lg:min-h-[500px]"
        style={{ background: "#080A0E" }}
      >
        {screenshot ? (
          <>
            {/* Screenshot fills the panel */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screenshot}
              alt={project.displayTitle}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            {/* Dark gradient so footer strip stays legible */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.55) 100%)",
              }}
            />
          </>
        ) : (
          /* Fallback: subtle radial glow */
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 70%)",
            }}
          />
        )}

        {/* Center: logo only when there's no screenshot (keeps panel clean when screenshot is present) */}
        {!screenshot && (
          <div className="relative z-10 flex flex-1 items-center justify-center px-10">
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo.src}
                alt={project.displayTitle}
                style={{
                  height: "48px",
                  width: "auto",
                  maxWidth: "min(260px, 80vw)",
                  objectFit: "contain",
                  filter: logo.invert ? "brightness(0) invert(1)" : undefined,
                  opacity: 0.9,
                }}
              />
            ) : (
              <p
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "rgba(255,255,255,0.85)",
                  textAlign: "center",
                }}
              >
                {project.displayTitle}
              </p>
            )}
          </div>
        )}

        {/* Spacer pushes footer to the bottom when screenshot is shown */}
        {screenshot && <div className="flex-1" />}

        {/* Footer strip */}
        <div className="relative z-10 flex items-end justify-between gap-4 border-t border-white/[0.06] px-7 py-5">
          <span
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "10.5px",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
            }}
          >
            {project.displayTitle}
            {region ? ` · ${truncate(region, 38)}` : ""}
          </span>
          <div className="flex flex-wrap justify-end gap-1.5">
            {stack.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.04em",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "100px",
                  padding: "2px 8px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Detail panel ── */}
      <div className="flex flex-col bg-white p-8 lg:p-12">

        {/* Status */}
        <div className="mb-8 flex items-center gap-2">
          <span
            className="inline-block size-1.5 rounded-full"
            style={{ background: statusAccent(project.status) }}
          />
          <span
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "12px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#86868B",
            }}
          >
            {project.statusLabel}
          </span>
        </div>

        {/* Title + description */}
        <div className="flex-1">
          <h3
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#1D1D1F",
              marginBottom: "1rem",
            }}
          >
            {project.displayTitle}
          </h3>

          <p
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "14.5px",
              lineHeight: 1.7,
              color: "#86868B",
              maxWidth: "400px",
            }}
          >
            {project.shortDescription}
          </p>
        </div>

        {/* Stats — horizontal rows */}
        <div className="mt-8 border-t border-black/[0.07]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex items-baseline justify-between gap-4 py-3.5"
              style={{
                borderBottom: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "11.5px",
                  letterSpacing: "0.01em",
                  color: "#86868B",
                  flexShrink: 0,
                }}
              >
                {s.label}
              </span>
              <span
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "14px",
                  letterSpacing: "-0.012em",
                  color: "#1D1D1F",
                  textAlign: "right",
                }}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7 flex items-center justify-between">
          <span
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "11.5px",
              color: "#86868B",
              letterSpacing: "0.01em",
            }}
          >
            {service}
          </span>
          <Link
            href={project.publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 transition-opacity hover:opacity-60"
            style={{
              fontFamily: NM,
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "-0.01em",
              color: "#1D1D1F",
              textDecoration: "none",
            }}
          >
            View project
            <svg
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="size-[9px] transition-transform group-hover:translate-x-0.5"
            >
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
