import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { getTermsContent } from "@/lib/i18n/legal-content";
import { getSiteConfig } from "@/lib/site/config";

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";
const site = getSiteConfig();

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getTermsContent(locale);

  return {
    title: copy.title,
    description: copy.intro,
    alternates: { canonical: `${site.siteUrl}/terms` },
  };
}

export default async function TermsPage() {
  const locale = await getRequestLocale();
  const copy = getTermsContent(locale);

  return (
    <main style={{ fontFamily: NM, background: "white", minHeight: "100vh" }}>
      <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 1.25rem", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: NM, fontWeight: 500, fontSize: "14px", color: "#1D1D1F", letterSpacing: "-0.02em", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.iconPath} alt="" style={{ height: "18px", width: "18px", objectFit: "contain" }} />
            {site.shortName}
          </Link>
          <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {copy.topBar}
          </span>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "clamp(3rem, 6vw, 5rem) 1.25rem 0" }}>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
          {copy.eyebrow}
        </p>
        <h1 style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.035em", color: "#1D1D1F", marginBottom: "1.25rem" }}>
          {copy.title}
        </h1>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14px", color: "#86868B", marginBottom: "0.5rem" }}>
          {locale === "ar" ? "تاريخ السريان" : locale === "fr" ? "Date d'effet" : locale === "tr" ? "Yürürlük tarihi" : "Effective date"}: {copy.effective}
        </p>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.75, color: "#86868B" }}>
          {copy.intro}
        </p>
      </div>

      <div style={{ maxWidth: "760px", margin: "2.5rem auto 0", padding: "0 1.25rem" }}>
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 1.25rem clamp(4rem, 8vw, 7rem)" }}>
        {copy.sections.map((s) => (
          <div key={s.title} style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "2.5rem 0" }}>
            <h2 style={{ fontFamily: NM, fontWeight: 400, fontSize: "16px", letterSpacing: "-0.018em", color: "#1D1D1F", marginBottom: "0.85rem" }}>
              {s.title}
            </h2>
            <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14.5px", lineHeight: 1.8, color: "#86868B" }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#F5F5F7" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "2.5rem 1.25rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B" }}>
            {copy.footerQuestions} <a href={`mailto:${site.email}`} style={{ color: "#1D1D1F", textDecoration: "none" }}>{site.email}</a>
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href={copy.footerOtherHref} style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", textDecoration: "none" }}>
              {copy.footerOtherLabel}
            </Link>
            <Link href="/" style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", textDecoration: "none" }}>
              ← {copy.footerHome}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
