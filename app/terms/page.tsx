import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for Arafion — the conditions under which we provide software engineering, AI systems, design, and digital services.",
  alternates: { canonical: "https://arafion.com/terms" },
};

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';
const EFFECTIVE = "1 June 2025";

const SECTIONS = [
  {
    title: "1. Acceptance of terms",
    body: `By accessing arafion.com or engaging Arafion for any service — whether through this website, email, or any other channel — you agree to be bound by these Terms of Use. If you do not agree, do not use this website or our services.`,
  },
  {
    title: "2. Services provided",
    body: `Arafion provides software engineering, web development, AI product development, data systems, marketing infrastructure, architectural visualization, and related digital services. The specific scope, deliverables, timeline, and payment terms for any project are defined in a separate written agreement (scope of work, proposal, or contract) between Arafion and the client.`,
  },
  {
    title: "3. Intellectual property",
    body: `Upon full payment, clients receive ownership of the final deliverables as specified in the project agreement. Arafion retains ownership of all underlying frameworks, reusable components, development tools, methodologies, and know-how used in the creation of deliverables. Arafion may reference completed projects in its portfolio unless the client requests confidentiality in writing before project start.`,
  },
  {
    title: "4. Client responsibilities",
    body: `Clients are responsible for providing accurate briefs, timely feedback, required assets, and all approvals necessary for project delivery. Delays caused by late or incomplete client input may affect the agreed timeline. Clients confirm that they own or have the right to use any materials (copy, logos, images, data) they provide to Arafion for use in a project.`,
  },
  {
    title: "5. Payment",
    body: `Payment terms are defined per engagement. Arafion typically requires a deposit before work begins, with milestone payments tied to delivery stages. Invoices are due within the period stated. Late payment may result in work pausing until the outstanding balance is settled. All fees are non-refundable unless stated otherwise in the project agreement.`,
  },
  {
    title: "6. Confidentiality",
    body: `Both parties agree to keep confidential any non-public information shared during the engagement. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law. Arafion handles all client data with discretion and will not share project details or sensitive business information with third parties without consent.`,
  },
  {
    title: "7. Warranties and disclaimers",
    body: `Arafion warrants that services will be performed professionally and in accordance with the agreed specifications. We do not warrant that software will be entirely free from defects in all environments, or that third-party platforms and APIs we integrate with will remain available or unchanged. This website and its contents are provided "as is" without warranty of any kind.`,
  },
  {
    title: "8. Limitation of liability",
    body: `To the maximum extent permitted by applicable law, Arafion's total liability for any claim arising from a project is limited to the fees paid by the client for the specific project giving rise to the claim. Arafion is not liable for indirect, incidental, consequential, or punitive damages, including loss of revenue, loss of data, or business interruption.`,
  },
  {
    title: "9. Termination",
    body: `Either party may terminate a project agreement with written notice as specified in that agreement. If a client terminates early, payment is due for all work completed to the termination date. If Arafion terminates due to client breach, all outstanding amounts become immediately payable.`,
  },
  {
    title: "10. Governing law",
    body: `These terms are governed by the laws of the jurisdiction in which Arafion is registered, without regard to conflict of law provisions. Any disputes shall be resolved through good-faith negotiation first, followed by mediation if necessary.`,
  },
  {
    title: "11. Changes to these terms",
    body: `Arafion may update these Terms of Use at any time. The revised terms take effect upon posting to this page. Continued use of this website or our services after any change constitutes acceptance of the updated terms.`,
  },
  {
    title: "12. Contact",
    body: `Questions about these terms should be sent to contact@arafion.com. We aim to respond within two business days.`,
  },
];

export default function TermsPage() {
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
            Terms of Use
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
          Terms of Use
        </h1>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14px", color: "#86868B", marginBottom: "0.5rem" }}>
          Effective date: {EFFECTIVE}
        </p>
        <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "15px", lineHeight: 1.75, color: "#86868B" }}>
          These terms govern your use of this website and any engagement with Arafion for services. Please read them carefully.
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
            <Link href="/privacy-policy" style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", textDecoration: "none" }}>
              Privacy Policy
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
