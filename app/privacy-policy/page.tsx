import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Arafion collects, uses, and protects information on this website and during service engagements.",
  alternates: { canonical: "https://arafion.com/privacy-policy" },
};

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';
const EFFECTIVE = "1 June 2025";

const SECTIONS = [
  {
    title: "1. Who we are",
    body: `Arafion is a product engineering studio that provides software development, AI systems, data infrastructure, marketing systems, and architectural visualization services. This Privacy Policy explains how we handle information collected through this website (arafion.com) and in the course of service engagements. Contact: contact@arafion.com.`,
  },
  {
    title: "2. Information we collect",
    body: `We collect information you voluntarily provide, such as your name, email address, company name, and project details when you reach out via our contact page or email. We do not run user accounts, collect payment information directly, or store sensitive personal data on this website. We may collect basic analytics data (pages visited, referrer, browser type) through privacy-respecting analytics tools to understand how the site is used.`,
  },
  {
    title: "3. How we use your information",
    body: `We use contact information solely to respond to your enquiry, discuss your project, and communicate about an engagement. We do not sell, rent, or share your personal information with third parties for marketing purposes. Analytics data is used in aggregate to improve site content and performance — it is never tied to identifiable individuals.`,
  },
  {
    title: "4. Cookies and tracking",
    body: `This website may use essential cookies required for basic functionality. We do not use advertising cookies or cross-site tracking cookies. If you use an analytics-blocking browser extension, it will not affect your ability to use this site. We do not run retargeting pixels, Facebook Pixel, or Google Ads tags on this website.`,
  },
  {
    title: "5. Client project data",
    body: `When working on a project, clients may share business data, assets, credentials, or proprietary information. We treat all project data as strictly confidential. We do not share client materials with third parties except subcontractors engaged to deliver project work under confidentiality obligations. We retain project files for a reasonable period for support and handoff purposes, then securely delete them upon request.`,
  },
  {
    title: "6. Data storage and security",
    body: `Information you send us via email or the contact form is stored in our email system and project management tools, which are hosted on reputable cloud providers with industry-standard security. We take reasonable precautions to protect your information, but no transmission over the internet is 100% secure. We are not responsible for interception by third parties outside our control.`,
  },
  {
    title: "7. Third-party services",
    body: `This website may link to external websites, demos, and case studies hosted on third-party platforms (Vercel, GitHub, etc.). Once you leave arafion.com, this Privacy Policy no longer applies. We are not responsible for the privacy practices of those sites.`,
  },
  {
    title: "8. Your rights",
    body: `You may request access to, correction of, or deletion of any personal information we hold about you by emailing contact@arafion.com. We will respond within a reasonable time. If you are located in the EU/EEA, you have additional rights under the GDPR, including the right to data portability and the right to lodge a complaint with a supervisory authority.`,
  },
  {
    title: "9. Children's privacy",
    body: `This website is not directed at children under 16. We do not knowingly collect personal information from minors. If you believe a minor has submitted information to us, please contact us and we will delete it.`,
  },
  {
    title: "10. Changes to this policy",
    body: `We may update this Privacy Policy from time to time. The effective date at the top of this page reflects when the policy was last revised. Continued use of this website after an update constitutes acceptance of the revised policy.`,
  },
  {
    title: "11. Contact",
    body: `For privacy-related questions or requests, email contact@arafion.com. We aim to respond within two business days.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main style={{ fontFamily: NM, background: "white", minHeight: "100vh" }}>

      {/* Top bar */}
      <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{
          maxWidth: "1320px", margin: "0 auto", padding: "0 1.25rem",
          height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/" style={{ fontFamily: NM, fontWeight: 500, fontSize: "14px", color: "#1D1D1F", letterSpacing: "-0.02em", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Arafion%20Icon.png" alt="" style={{ height: "18px", width: "18px", objectFit: "contain" }} />
            Arafion
          </Link>
          <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Privacy Policy
          </span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "clamp(3rem, 6vw, 5rem) 1.25rem 0" }}>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#86868B", marginBottom: "1.25rem" }}>
          Legal
        </p>
        <h1 style={{
          fontFamily: NM, fontWeight: 400,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          lineHeight: 1.08, letterSpacing: "-0.035em",
          color: "#1D1D1F", marginBottom: "1.25rem",
        }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14px", color: "#86868B", marginBottom: "0.5rem" }}>
          Effective date: {EFFECTIVE}
        </p>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.75, color: "#86868B" }}>
          We keep this short and plain. Here is what we collect, why, and what we do with it.
        </p>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: "760px", margin: "2.5rem auto 0", padding: "0 1.25rem" }}>
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
      </div>

      {/* Sections */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 1.25rem clamp(4rem, 8vw, 7rem)" }}>
        {SECTIONS.map((s) => (
          <div
            key={s.title}
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.07)",
              padding: "2.5rem 0",
            }}
          >
            <h2 style={{
              fontFamily: NM, fontWeight: 400, fontSize: "16px",
              letterSpacing: "-0.018em", color: "#1D1D1F",
              marginBottom: "0.85rem",
            }}>
              {s.title}
            </h2>
            <p style={{
              fontFamily: NM, fontWeight: 400, fontSize: "14.5px",
              lineHeight: 1.8, color: "#86868B",
            }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "#F5F5F7" }}>
        <div style={{
          maxWidth: "760px", margin: "0 auto",
          padding: "2.5rem 1.25rem",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem",
        }}>
          <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B" }}>
            Questions? <a href="mailto:contact@arafion.com" style={{ color: "#1D1D1F", textDecoration: "none" }}>contact@arafion.com</a>
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/terms" style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", textDecoration: "none" }}>
              Terms of Use
            </Link>
            <Link href="/" style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", textDecoration: "none" }}>
              ← Home
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
