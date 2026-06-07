import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Arafion. Reach out about software engineering, AI systems, dashboards, campaign infrastructure, architectural visualization, or a project audit.",
  openGraph: {
    title: "Contact Arafion — Start a Project",
    description:
      "Share your project goal. We will define the scope, delivery path, and execution model. Reply within one business day.",
    url: "https://arafion.com/contact",
  },
  alternates: { canonical: "https://arafion.com/contact" },
};

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';

const CHANNELS = [
  {
    label: "Email",
    value: "contact@arafion.com",
    href: "mailto:contact@arafion.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/company/arafion",
    href: "https://www.linkedin.com/company/arafion",
    external: true,
  },
  {
    label: "Instagram",
    value: "@arafionhq",
    href: "https://www.instagram.com/arafionhq",
    external: true,
  },
  {
    label: "Architecture",
    value: "@arafion.architects",
    href: "https://www.instagram.com/arafion.architects/",
    external: true,
  },
  {
    label: "Location",
    value: "Global · Remote-friendly",
    href: null,
    external: false,
  },
];

const SERVICES = [
  "Software & Product Engineering",
  "Websites & Digital Presence",
  "Intelligence, Data & AI",
  "Marketing, Campaigns & Production",
  "Architecture Visualization & 3D",
  "Strategy, Scoping & Maintenance",
];

export default function ContactPage() {
  return (
    <main style={{ fontFamily: NM, background: "white", minHeight: "100vh" }}>

      {/* Top bar */}
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
            }}
          >
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
            Contact
          </span>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(3rem, 5vw, 5rem) 1.25rem clamp(3.5rem, 6vw, 6rem)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "5rem",
        }}
      >

        {/* Header */}
        <div>
          <p
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "13px",
              color: "#86868B",
              marginBottom: "1.25rem",
            }}
          >
            Start a project
          </p>
          <h1
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              lineHeight: 1.07,
              letterSpacing: "-0.038em",
              color: "#1D1D1F",
              maxWidth: "780px",
              marginBottom: "1.75rem",
            }}
          >
            Let&rsquo;s build something that ships.
          </h1>
          <p
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#86868B",
              maxWidth: "560px",
            }}
          >
            Share a bit of context — what you&rsquo;re building, what constraints
            you&rsquo;re operating under, and what a great outcome looks like.
            We typically reply within one business day.
          </p>
        </div>

        {/* Two-column: contact info + services */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "4rem",
            borderTop: "1px solid rgba(0,0,0,0.07)",
            paddingTop: "3.5rem",
          }}
        >

          {/* Contact channels */}
          <div>
            <p
              style={{
                fontFamily: NM,
                fontWeight: 500,
                fontSize: "10.5px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#86868B",
                marginBottom: "1.75rem",
              }}
            >
              Get in touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {CHANNELS.map((ch) => (
                <div key={ch.label}>
                  <p
                    style={{
                      fontFamily: NM,
                      fontWeight: 400,
                      fontSize: "11px",
                      letterSpacing: "0.04em",
                      color: "#86868B",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {ch.label}
                  </p>
                  {ch.href ? (
                    <a
                      href={ch.href}
                      target={ch.external ? "_blank" : undefined}
                      rel={ch.external ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: NM,
                        fontWeight: 400,
                        fontSize: "15px",
                        letterSpacing: "-0.012em",
                        color: "#1D1D1F",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(0,0,0,0.15)",
                        paddingBottom: "1px",
                      }}
                    >
                      {ch.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: NM,
                        fontWeight: 400,
                        fontSize: "15px",
                        letterSpacing: "-0.012em",
                        color: "#1D1D1F",
                      }}
                    >
                      {ch.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services list */}
          <div>
            <p
              style={{
                fontFamily: NM,
                fontWeight: 500,
                fontSize: "10.5px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#86868B",
                marginBottom: "1.75rem",
              }}
            >
              What we can help with
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
              {SERVICES.map((svc) => (
                <div
                  key={svc}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.85rem 0",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#86868B",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: NM,
                      fontWeight: 400,
                      fontSize: "14.5px",
                      letterSpacing: "-0.012em",
                      color: "#1D1D1F",
                      lineHeight: 1.3,
                    }}
                  >
                    {svc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div
          style={{
            background: "#F5F5F7",
            borderRadius: "20px",
            padding: "clamp(2rem, 3vw, 3rem) clamp(1.5rem, 3vw, 3rem)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                color: "#1D1D1F",
                marginBottom: "0.5rem",
              }}
            >
              Ready to scope your project?
            </p>
            <p
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "13.5px",
                color: "#86868B",
              }}
            >
              Email us directly or reach out on LinkedIn — we&rsquo;ll set up a scoping call.
            </p>
          </div>
          <a
            href="mailto:contact@arafion.com"
            style={{
              fontFamily: NM,
              fontWeight: 500,
              fontSize: "13.5px",
              letterSpacing: "-0.01em",
              color: "white",
              background: "#1D1D1F",
              borderRadius: "100px",
              padding: "12px 28px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
            }}
          >
            contact@arafion.com
            <svg
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              style={{ width: "10px", height: "10px" }}
            >
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </a>
        </div>

      </div>

    </main>
  );
}
