"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/lib/i18n/context";
import { getServiceCapabilities, getServiceCapabilitiesFull } from "@/lib/i18n/service-content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

const SERVICE_HREFS = [
  "/contact?service=software",
  "/contact?service=websites",
  "/contact?service=ai",
  "/contact?service=marketing",
  "/contact?service=3d",
  "/contact?service=strategy",
];

export default function ServicesGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t, locale } = useLanguage();
  const [expanded, setExpanded] = useState<boolean[]>(
    new Array(6).fill(false),
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

  const services = t.services.categories;
  const capabilities = getServiceCapabilities(locale);
  const capabilitiesFull = getServiceCapabilitiesFull(locale);

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
              {t.services.eyebrow}
            </p>
            <h2
              style={{
                fontFamily: NM, fontWeight: 400,
                fontSize: "clamp(1.65rem, 2.8vw, 2.6rem)",
                lineHeight: 1.16, letterSpacing: "-0.028em",
                color: "#1D1D1F", maxWidth: "600px",
              }}
            >
              {t.services.heading}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-5 py-2.5 transition-colors hover:border-black/30"
              style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#1D1D1F", letterSpacing: "-0.01em" }}
            >
              {t.services.viewAll}
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px]">
                <path d="M2 5h6M5 2l3 3-3 3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-5 py-2.5 transition-colors hover:border-black/30 hover:bg-black/5"
              style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", letterSpacing: "-0.01em" }}
            >
              {t.services.startProject} {t.services.project}
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px]">
                <path d="M2 5h6M5 2l3 3-3 3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Cards grid */}
        <div className="sg-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className="sg-card flex flex-col overflow-hidden rounded-2xl bg-white border border-black/6"
            >
              {/* Card top */}
              <div className="flex flex-col gap-0 p-7 pb-6 flex-1">

                {/* Number */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    style={{
                      fontFamily: NM, fontWeight: 400, fontSize: "11px",
                      color: "#86868B", letterSpacing: "0.06em",
                      textTransform: "uppercase", paddingTop: "3px",
                    }}
                  >
                    {svc.num}
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
                  {t.services.forLabel}
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
                  {t.services.weBuild}
                </p>
                <ul className="flex flex-col gap-1.5 mb-5">
                  {capabilities[i].map((h) => (
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
                  {expanded[i] ? t.services.hideCapabilities : t.services.viewAllCapabilities}
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
                      {capabilitiesFull[i].map((c) => (
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
                  href={SERVICE_HREFS[i]}
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
