import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for does not exist.",
  robots: { index: false, follow: false },
};

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';

const LINKS = [
  { label: "Home",     href: "/"        },
  { label: "Work",     href: "/work"    },
  { label: "Services", href: "/services"},
  { label: "About",    href: "/about"   },
  { label: "Blog",     href: "/blog"    },
  { label: "Contact",  href: "/contact" },
];

export default function NotFound() {
  return (
    <main style={{
      fontFamily: NM,
      background: "#080A0E",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1.25rem",
      textAlign: "center",
    }}>
      {/* Subtle radial glow */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)",
      }} />

      {/* 404 number */}
      <p style={{
        fontFamily: NM, fontWeight: 400,
        fontSize: "clamp(5rem, 18vw, 12rem)",
        lineHeight: 1, letterSpacing: "-0.06em",
        color: "rgba(255,255,255,0.06)",
        userSelect: "none",
        marginBottom: "0",
      }}>
        404
      </p>

      {/* Logo + brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem", marginTop: "-1rem" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Arafion%20Icon.png"
          alt="Arafion"
          style={{ height: "20px", width: "20px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }}
        />
        <span style={{ fontFamily: NM, fontWeight: 500, fontSize: "14px", color: "rgba(255,255,255,0.5)", letterSpacing: "-0.02em" }}>
          Arafion
        </span>
      </div>

      <h1 style={{
        fontFamily: NM, fontWeight: 400,
        fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
        lineHeight: 1.15, letterSpacing: "-0.03em",
        color: "rgba(255,255,255,0.88)",
        marginBottom: "1rem",
        maxWidth: "480px",
      }}>
        This page does not exist.
      </h1>

      <p style={{
        fontFamily: NM, fontWeight: 400,
        fontSize: "15px", lineHeight: 1.7,
        color: "rgba(255,255,255,0.38)",
        maxWidth: "380px", marginBottom: "3rem",
      }}>
        It may have moved, been deleted, or you followed a broken link. Here are some places to go instead.
      </p>

      {/* Navigation pills */}
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "center",
        gap: "0.5rem", marginBottom: "3rem",
      }}>
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: NM, fontWeight: 400, fontSize: "13.5px",
              color: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "100px", padding: "8px 20px",
              textDecoration: "none",
              transition: "border-color 0.15s, color 0.15s",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Or start fresh */}
      <Link
        href="/contact"
        style={{
          fontFamily: NM, fontWeight: 500, fontSize: "13px",
          background: "white", color: "#080A0E",
          borderRadius: "100px", padding: "10px 24px",
          textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: "6px",
        }}
      >
        Start a project
        <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ width: "9px", height: "9px" }}>
          <path d="M2 5h6M5 2l3 3-3 3" />
        </svg>
      </Link>
    </main>
  );
}
