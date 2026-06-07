"use client";

import Link from "next/link";

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';

type FooterLink = { title: string; href: string; external?: boolean };

const NAV: { label: string; links: FooterLink[] }[] = [
  {
    label: "Site",
    links: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Work & portfolio", href: "/work" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
      { title: "FAQ", href: "/#faq" },
    ],
  },
  {
    label: "Capabilities",
    links: [
      { title: "Software & SaaS", href: "/services#software" },
      { title: "Websites & digital", href: "/services#websites" },
      { title: "Dashboards & intelligence", href: "/services#intelligence" },
      { title: "Marketing systems", href: "/services#marketing" },
      { title: "Architecture & 3D", href: "/services#visualization" },
      { title: "Strategy & scoping", href: "/services#strategy" },
      { title: "Project audit", href: "/services#audit" },
    ],
  },
  {
    label: "Demos & case studies",
    links: [
      { title: "All projects", href: "/work" },
      { title: "Case studies (homepage)", href: "/#case-studies" },
      { title: "NileRoute OS", href: "https://nileroute-os.vercel.app/", external: true },
      { title: "Evo2 Variant Intelligence", href: "https://evo2-variant-intelligence.vercel.app/", external: true },
      { title: "SignalsFrame", href: "https://www.signalsframe.com/", external: true },
      { title: "Geoflex360", href: "https://www.geoflex360.com/", external: true },
      { title: "Atlas Intelligence", href: "https://atlas-intelligence.vercel.app/scan", external: true },
    ],
  },
  {
    label: "Legal & connect",
    links: [
      { title: "Privacy policy", href: "/privacy-policy" },
      { title: "Terms of use", href: "/terms" },
      { title: "Email us", href: "mailto:contact@arafion.com" },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/arafion", external: true },
      { title: "Instagram — @arafionhq", href: "https://www.instagram.com/arafionhq", external: true },
      { title: "Instagram — architects", href: "https://www.instagram.com/arafion.architects/", external: true },
    ],
  },
];

const YEAR = new Date().getFullYear();

function FooterLinkRow({ link }: { link: FooterLink }) {
  const isExternal = Boolean(link.external) || link.href.startsWith("http") || link.href.startsWith("mailto:");
  return (
    <li>
      <Link
        href={link.href}
        {...(isExternal && link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="transition-colors hover:text-white"
        style={{
          fontFamily: NM,
          fontWeight: 400,
          fontSize: "13.5px",
          color: "rgba(255,255,255,0.52)",
          letterSpacing: "-0.008em",
          lineHeight: 1.45,
          textDecoration: "none",
        }}
      >
        {link.title}
      </Link>
    </li>
  );
}

export default function SiteFooter() {
  return (
    <footer id="site-footer" style={{ fontFamily: NM, background: "#141416" }}>
      <div className="mx-auto max-w-[1320px] px-8 pt-20 pb-16 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16 xl:gap-20">
          {/* Brand */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              <div className="mb-6 flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Arafion%20Icon.png"
                  alt="Arafion"
                  width={26}
                  height={26}
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
                />
                <span
                  style={{ fontFamily: NM, fontWeight: 500, fontSize: "16px", color: "white", letterSpacing: "-0.02em" }}
                >
                  Arafion
                </span>
              </div>

              <h2
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "clamp(1.45rem, 2.2vw, 1.9rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.025em",
                  color: "white",
                  marginBottom: "1rem",
                  maxWidth: "300px",
                }}
              >
                Product engineering lab, built for scale.
              </h2>

              <p
                style={{
                  fontFamily: NM,
                  fontWeight: 400,
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.38)",
                  maxWidth: "280px",
                }}
              >
                We build dashboards, SaaS products, AI systems, and digital infrastructure for teams moving fast.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/20 px-6 py-3 transition-colors hover:border-white/40 hover:bg-white/[0.05]"
              style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.75)", letterSpacing: "-0.01em" }}
            >
              Start a project
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px] opacity-60">
                <path d="M2 5h6M5 2l3 3-3 3" />
              </svg>
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-x-10">
            {NAV.map((col) => (
              <div key={col.label}>
                <p
                  style={{
                    fontFamily: NM,
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: "1.1rem",
                  }}
                >
                  {col.label}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <FooterLinkRow key={`${col.label}-${link.title}`} link={link} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-8 md:px-14 lg:px-20" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span style={{ fontFamily: NM, fontWeight: 400, fontSize: "11.5px", color: "rgba(255,255,255,0.22)" }}>
              &copy; {YEAR} Arafion. All rights reserved.
            </span>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white/50"
              style={{ fontFamily: NM, fontWeight: 400, fontSize: "11.5px", color: "rgba(255,255,255,0.22)", textDecoration: "none" }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-white/50"
              style={{ fontFamily: NM, fontWeight: 400, fontSize: "11.5px", color: "rgba(255,255,255,0.22)", textDecoration: "none" }}
            >
              Terms
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/arafion",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[14px]">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "Instagram @arafionhq",
                href: "https://www.instagram.com/arafionhq",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[14px]">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
              {
                label: "Instagram @arafion.architects",
                href: "https://www.instagram.com/arafion.architects/",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-[14px]">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-8 items-center justify-center rounded-full border border-white/10 text-white/35 transition-all hover:border-white/25 hover:text-white/65"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
