import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { getAboutContent } from "@/lib/i18n/about-content";
import { applySiteCopy, getSiteConfig } from "@/lib/site/config";

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getAboutContent(locale);
  const site = getSiteConfig();

  const description = applySiteCopy(
    locale === "fr"
      ? "{brand} est un studio d'execution hybride qui conçoit des sites web, des produits SaaS, des workflows IA, des tableaux de bord et des systemes de visualisation."
      : locale === "tr"
        ? "{brand}, web siteleri, SaaS urunleri, AI is akislari, panolar ve gorsellestirme sistemleri kuran hibrit bir uygulama stüdyosudur."
        : locale === "ar"
          ? "{brand} هو استوديو تنفيذ هجين يبني المواقع ومنتجات SaaS ومسارات الذكاء الاصطناعي ولوحات البيانات وانظمة التصور."
          : "{brand} is a hybrid execution studio combining software engineering, AI, data systems, creative production, and architectural visualization into one execution pipeline.",
  );

  return {
    title: locale === "en" ? "About" : copy.topBar,
    description,
    openGraph: {
      title:
        locale === "en"
          ? `About ${site.shortName} - Product Engineering Lab`
          : `${copy.topBar} - ${site.shortName}`,
      description:
        locale === "fr"
          ? "Nous construisons des sites, des produits SaaS, des workflows IA, des tableaux de bord et des systemes visuels."
          : locale === "tr"
            ? "Web siteleri, SaaS ürünleri, AI is akislari, panolar ve görsel sistemler kuruyoruz."
            : locale === "ar"
              ? "نبني المواقع ومنتجات SaaS ومسارات الذكاء الاصطناعي ولوحات البيانات والانظمة البصرية."
              : "We build websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and 3D visualization systems.",
      url: `${site.siteUrl}/about`,
    },
    alternates: { canonical: `${site.siteUrl}/about` },
  };
}

export default async function AboutPage() {
  const locale = await getRequestLocale();
  const copy = getAboutContent(locale);

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
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
            {copy.topBar}
          </span>
        </div>
      </div>

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 6vw, 6rem) 1.25rem clamp(2.5rem, 5vw, 5rem)" }}>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.5rem" }}>
          {copy.hero.eyebrow}
        </p>
        <h1 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(2.2rem, 5vw, 4.4rem)", lineHeight: 1.05, letterSpacing: "-0.04em", color: "#1D1D1F", maxWidth: "900px", marginBottom: "2rem" }}>
          {copy.hero.title}
        </h1>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.6, letterSpacing: "-0.01em", color: "#1D1D1F", maxWidth: "780px", marginBottom: "1.5rem" }}>
          {copy.hero.body1}
        </p>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.75, color: "#86868B", maxWidth: "700px", marginBottom: "2.5rem" }}>
          {copy.hero.body2}
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link
            href="/work"
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
            {copy.hero.primaryCta}
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "9px", height: "9px" }}>
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "13.5px",
              background: "transparent",
              color: "#1D1D1F",
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: "100px",
              padding: "9px 22px",
              textDecoration: "none",
            }}
          >
            {copy.hero.secondaryCta}
          </Link>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", maxWidth: "900px" }}>
            <div>
              <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
                {copy.whatIs.eyebrow}
              </p>
              <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1D1D1F", marginBottom: "2rem" }}>
                {copy.whatIs.heading}
              </h2>
              <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.8, color: "#86868B", marginBottom: "1.25rem" }}>
                {copy.whatIs.body1}
              </p>
              <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.8, color: "#86868B", marginBottom: "2rem" }}>
                {copy.whatIs.body2}
              </p>
              <p
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: 1.55,
                  letterSpacing: "-0.015em",
                  color: "#1D1D1F",
                  borderLeft: "2px solid #1D1D1F",
                  paddingLeft: "1.25rem",
                }}
              >
                {copy.whatIs.quote}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#FAFAFA" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
            {copy.whatWeBuild.eyebrow}
          </p>
          <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1D1D1F", maxWidth: "640px", marginBottom: "1rem" }}>
            {copy.whatWeBuild.heading}
          </h2>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.7, color: "#86868B", maxWidth: "600px", marginBottom: "3.5rem" }}>
            {copy.whatWeBuild.subheading}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(380px, 100%), 1fr))", gap: "1px", background: "rgba(0,0,0,0.07)", borderRadius: "16px", overflow: "hidden" }}>
            {copy.whatWeBuild.cards.map((s) => (
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
                    <span
                      key={item}
                      style={{
                        fontFamily: NM,
                        fontWeight: 400,
                        fontSize: "11px",
                        color: "#1D1D1F",
                        border: "1px solid rgba(0,0,0,0.1)",
                        borderRadius: "100px",
                        padding: "3px 10px",
                      }}
                    >
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

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
            {copy.howWeThink.eyebrow}
          </p>
          <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1D1D1F", maxWidth: "640px", marginBottom: "3.5rem" }}>
            {copy.howWeThink.heading}
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {copy.howWeThink.cards.map((p, i) => (
              <div
                key={p.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: "2rem",
                  padding: "2rem 0",
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

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#080A0E" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
            {copy.howWeWork.eyebrow}
          </p>
          <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.88)", maxWidth: "640px", marginBottom: "1rem" }}>
            {copy.howWeWork.heading}
          </h2>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.4)", maxWidth: "540px", marginBottom: "3.5rem" }}>
            {copy.howWeWork.subheading}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
            {copy.howWeWork.steps.map((step) => (
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

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
            {copy.proof.eyebrow}
          </p>
          <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1D1D1F", maxWidth: "640px", marginBottom: "1rem" }}>
            {copy.proof.heading}
          </h2>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.7, color: "#86868B", maxWidth: "600px", marginBottom: "3.5rem" }}>
            {copy.proof.subheading}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: "1px", background: "rgba(0,0,0,0.07)", borderRadius: "16px", overflow: "hidden" }}>
            {copy.proof.categories.map((cat) => (
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

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#FAFAFA" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
            {copy.difference.eyebrow}
          </p>
          <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1D1D1F", maxWidth: "640px", marginBottom: "3.5rem" }}>
            {copy.difference.heading}
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {copy.difference.items.map((d, i) => (
              <div
                key={d.title}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "2rem 0",
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

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <div style={{ maxWidth: "680px" }}>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
              {copy.name.eyebrow}
            </p>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.1rem, 2vw, 1.4rem)", lineHeight: 1.65, letterSpacing: "-0.015em", color: "#1D1D1F" }}>
              {copy.name.body}
            </p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#FAFAFA" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <div style={{ maxWidth: "720px" }}>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
              {copy.team.eyebrow}
            </p>
            <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", lineHeight: 1.15, letterSpacing: "-0.028em", color: "#1D1D1F", marginBottom: "1.5rem" }}>
              {copy.team.heading}
            </h2>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.8, color: "#86868B", marginBottom: "1.25rem" }}>
              {copy.team.body1}
            </p>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.8, color: "#86868B" }}>
              {copy.team.body2}
            </p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
            {copy.clients.eyebrow}
          </p>
          <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", lineHeight: 1.15, letterSpacing: "-0.028em", color: "#1D1D1F", maxWidth: "640px", marginBottom: "1rem" }}>
            {copy.clients.heading}
          </h2>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.7, color: "#86868B", maxWidth: "540px", marginBottom: "2.5rem" }}>
            {copy.clients.subheading}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))", gap: "1px", background: "rgba(0,0,0,0.07)", borderRadius: "14px", overflow: "hidden", marginBottom: "2rem" }}>
            {copy.clients.types.map((ct) => (
              <div key={ct} style={{ background: "white", padding: "1.25rem 1.5rem" }}>
                <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", color: "#1D1D1F", lineHeight: 1.4 }}>
                  {ct}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#86868B",
              maxWidth: "580px",
              borderLeft: "2px solid rgba(0,0,0,0.1)",
              paddingLeft: "1.25rem",
            }}
          >
            {copy.clients.closing}
          </p>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#080A0E" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 5vw, 5rem) 1.25rem" }}>
          <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
            {copy.doNotDo.eyebrow}
          </p>
          <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", lineHeight: 1.15, letterSpacing: "-0.028em", color: "rgba(255,255,255,0.88)", maxWidth: "640px", marginBottom: "3rem" }}>
            {copy.doNotDo.heading}
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {copy.doNotDo.items.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1.25rem",
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

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(3rem, 6vw, 6rem) 1.25rem clamp(3.5rem, 7vw, 7rem)" }}>
          <div
            style={{
              background: "#F5F5F7",
              borderRadius: "20px",
              padding: "clamp(2.5rem, 5vw, 4.5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#86868B" }}>
              {copy.finalCta.eyebrow}
            </p>
            <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.7rem, 3.5vw, 3.2rem)", lineHeight: 1.08, letterSpacing: "-0.035em", color: "#1D1D1F", maxWidth: "760px" }}>
              {copy.finalCta.heading}
            </h2>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", lineHeight: 1.7, color: "#86868B", maxWidth: "540px" }}>
              {copy.finalCta.body}
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
              <Link
                href="/contact"
                style={{
                  fontFamily: NM,
                  fontWeight: 500,
                  fontSize: "13.5px",
                  background: "#1D1D1F",
                  color: "white",
                  borderRadius: "100px",
                  padding: "10px 24px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {copy.finalCta.primaryCta}
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
                  background: "transparent",
                  color: "#1D1D1F",
                  border: "1px solid rgba(0,0,0,0.15)",
                  borderRadius: "100px",
                  padding: "10px 24px",
                  textDecoration: "none",
                }}
              >
                {copy.finalCta.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
