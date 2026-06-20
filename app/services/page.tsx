"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import ServicesGridSection from "@/components/sections/ServicesGridSection";
import ServiceSection from "@/components/sections/ServiceSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

const SERVICE_TARGETS: Record<string, string> = {
  software: "/contact?service=software",
  websites: "/contact?service=websites",
  intelligence: "/contact?service=ai",
  marketing: "/contact?service=marketing",
  visualization: "/contact?service=3d",
  strategy: "/contact?service=strategy",
};

export default function ServicesPage() {
  const { t } = useLanguage();
  const renderQuoteLabel =
    t.services.categories.find((c) => c.id === "visualization")?.cta ?? "Get a render quote";

  return (
    <main style={{ fontFamily: NM, background: "white", minHeight: "100vh" }}>
      <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 2rem",
            height: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: NM,
              fontWeight: 500,
              fontSize: "14px",
              color: "#1D1D1F",
              letterSpacing: "-0.02em",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <img src="/Arafion Icon.png" alt="" style={{ height: "20px", width: "20px", objectFit: "contain" }} />
            Arafion
          </Link>
          <span
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "12px",
              color: "#86868B",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {t.nav.services}
          </span>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 6rem) 1.25rem clamp(2.5rem, 5vw, 4rem)",
        }}
      >
        <p
          style={{
            fontFamily: NM,
            fontWeight: 400,
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#86868B",
            marginBottom: "1.25rem",
          }}
        >
          {t.services.eyebrow}
        </p>
        <h1
          style={{
            fontFamily: NM,
            fontWeight: 400,
            fontSize: "clamp(2.2rem, 5vw, 4.25rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#1D1D1F",
            maxWidth: "980px",
            marginBottom: "1.5rem",
          }}
        >
          {t.services.heading}
        </h1>
        <p
          style={{
            fontFamily: NM,
            fontWeight: 400,
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            lineHeight: 1.7,
            color: "#86868B",
            maxWidth: "760px",
            marginBottom: "2rem",
          }}
        >
          {t.services.subheading}
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              fontFamily: NM,
              fontWeight: 500,
              fontSize: "13.5px",
              background: "#1D1D1F",
              color: "white",
              borderRadius: "100px",
              padding: "9px 22px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {t.cta.startProject}
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "9px", height: "9px" }}>
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </Link>
          <Link
            href="/work"
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "13.5px",
              color: "#1D1D1F",
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: "100px",
              padding: "9px 22px",
              textDecoration: "none",
            }}
          >
            {t.common.viewWork}
          </Link>
          <Link
            href={SERVICE_TARGETS.visualization}
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "13.5px",
              color: "#86868B",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "100px",
              padding: "9px 22px",
              textDecoration: "none",
            }}
          >
            {renderQuoteLabel}
          </Link>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.07)",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          background: "#FAFAFA",
        }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "2rem 1.25rem" }}>
          <p
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#86868B",
              marginBottom: "1.1rem",
            }}
          >
            {t.services.viewAll}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {t.services.categories.map((item) => (
              <Link
                key={item.id}
                href={SERVICE_TARGETS[item.id] ?? "/contact"}
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#1D1D1F",
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.12)",
                  borderRadius: "100px",
                  padding: "7px 18px",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {item.title}
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "8px", height: "8px", opacity: 0.4 }}>
                  <path d="M5 2v6M2 5l3 3 3-3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ServicesGridSection />
      <ServiceSection />
      <FAQSection />
      <CTABanner />
    </main>
  );
}
