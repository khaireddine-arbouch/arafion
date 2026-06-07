"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FONT_INTER_STACK } from "@/lib/font-stacks";

gsap.registerPlugin(useGSAP);

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" className="size-[15px]">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Real-Time Intelligence",
    desc: "Dashboards that surface insights the moment they matter.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" className="size-[15px]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Automated Workflows",
    desc: "Systems that eliminate friction and scale without overhead.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" className="size-[15px]">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 14v6M14.5 17h6" />
      </svg>
    ),
    title: "Data Visualizations",
    desc: "Complex datasets made clear through bespoke interactive interfaces.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" className="size-[15px]">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Marketing Systems",
    desc: "CRM pipelines and campaign infrastructure built to convert.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" className="size-[15px]">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Cross-Market Engineering",
    desc: "Software built for global teams, from Morocco to Singapore.",
  },
];

export default function VideoHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".vh-brand",    { y: -14, opacity: 0, duration: 0.5 })
        .from(".vh-headline", { y: 52, opacity: 0, filter: "blur(14px)", duration: 1.1 }, "-=0.28")
        .from(".vh-divider",  { scaleX: 0, opacity: 0, duration: 0.55, transformOrigin: "left center" }, "-=0.3")
        .from(".vh-feature",  { y: 16, opacity: 0, duration: 0.55, stagger: 0.065 }, "-=0.42")
        .from(".vh-tagline",  { y: 16, opacity: 0, duration: 0.55 }, "-=0.5");
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-dvh flex-col overflow-hidden bg-black text-white"
      style={{ minHeight: "min(100dvh, 560px)" }}
    >
      {/* ── Video ── */}
      <video
        src="/eye%20closeup.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/background.png"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "65% center" }}
      />

      {/* ── Gradient overlays ── */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[65%]"
        style={{ background: "linear-gradient(to right, rgba(5,4,4,0.72) 0%, rgba(5,4,4,0.18) 60%, transparent 100%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[70%]"
        style={{ background: "linear-gradient(to top, rgba(4,3,3,0.85) 0%, rgba(4,3,3,0.35) 50%, transparent 100%)" }}
      />
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[25%]"
        style={{ background: "linear-gradient(to bottom, rgba(4,3,3,0.45) 0%, transparent 100%)" }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 flex min-h-0 flex-1 flex-col px-6 pt-9 sm:px-10 sm:pt-10 md:px-14 lg:px-20 lg:pt-11"
        style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px) + 2rem, 2.5rem)" }}
      >

        {/* Brand */}
        <Link
          href="/"
          className="vh-brand inline-flex items-center gap-2.5 self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
        >
          <Image
            src="/Arafion%20Icon.png"
            alt=""
            width={28}
            height={28}
            className="size-7 shrink-0 object-contain"
            priority
          />
          <span
            className="text-[14px] font-medium tracking-[-0.02em] text-white/90"
            style={{ fontFamily: FONT_INTER_STACK }}
          >
            Arafion
          </span>
        </Link>

        {/* Headline */}
        <div className="mt-8 lg:mt-[4.25rem]">
          <h1
            className="vh-headline text-white"
            style={{
              fontFamily: FONT_INTER_STACK,
              fontWeight: 300,
              fontSize: "clamp(2.6rem, 10vw, 6.2rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.042em",
              maxWidth: "13ch",
            }}
          >
            Build Beyond.
            <br />
            <span style={{ fontWeight: 600 }}>Ship</span> with
            <br />
            Precision.
          </h1>
        </div>

        {/* Flex spacer */}
        <div className="min-h-0 flex-1" />

        {/* ─── MOBILE bottom (hidden on lg+) ─── */}
        <div className="flex flex-col gap-4 lg:hidden">
          {/* Compact tagline */}
          <p
            className="vh-tagline"
            style={{
              fontFamily: FONT_INTER_STACK,
              fontWeight: 300,
              fontSize: "clamp(1rem, 4.5vw, 1.25rem)",
              lineHeight: 1.35,
              letterSpacing: "-0.025em",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "26ch",
            }}
          >
            Your operations hold the potential—
            {" "}we help you{" "}
            <span style={{ fontWeight: 600, color: "#fff" }}>build on it.</span>
          </p>

          <div className="flex flex-col gap-2.5">
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-black shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-200 hover:bg-white/93 focus:outline-none focus:ring-2 focus:ring-white/40"
              style={{
                fontFamily: FONT_INTER_STACK,
                fontWeight: 600,
                fontSize: "14.5px",
                letterSpacing: "-0.018em",
              }}
            >
              Start a project
              <span className="flex size-5 items-center justify-center rounded-full bg-black/[0.08] transition-transform group-hover:translate-x-0.5">
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-2.5">
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </span>
            </Link>
            <span
              style={{
                fontFamily: FONT_INTER_STACK,
                fontWeight: 400,
                fontSize: "11px",
                color: "rgba(255,255,255,0.30)",
                letterSpacing: "0.01em",
              }}
            >
              Reply within one business day
            </span>
          </div>
        </div>

        {/* ─── DESKTOP bottom (hidden below lg) ─── */}
        <div className="hidden lg:flex lg:shrink-0 lg:flex-col lg:pb-2">
          {/* Thin divider */}
          <div
            className="vh-divider mb-6 h-px w-full lg:max-w-[640px]"
            style={{ background: "rgba(255,255,255,0.12)" }}
          />

          <div className="flex items-end justify-between gap-14">
            {/* Feature tiles */}
            <ul className="flex flex-wrap gap-x-8 gap-y-5 lg:max-w-[660px]">
              {features.map((f) => (
                <li
                  key={f.title}
                  className="vh-feature flex items-start gap-2.5"
                  style={{ minWidth: 152, maxWidth: 192 }}
                >
                  <span className="mt-0.5 shrink-0 text-white/40">{f.icon}</span>
                  <div>
                    <p
                      style={{
                        fontFamily: FONT_INTER_STACK,
                        fontWeight: 500,
                        fontSize: "12.5px",
                        letterSpacing: "-0.02em",
                        color: "rgba(255,255,255,0.92)",
                        lineHeight: 1.25,
                      }}
                    >
                      {f.title}
                    </p>
                    <p
                      style={{
                        fontFamily: FONT_INTER_STACK,
                        fontWeight: 400,
                        fontSize: "11px",
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.46)",
                        marginTop: "3px",
                        letterSpacing: "-0.008em",
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Tagline + CTA */}
            <div className="vh-tagline relative z-20 flex w-auto max-w-[400px] shrink-0 flex-col items-end gap-7 pl-6 text-right xl:pl-10">
              <p
                style={{
                  fontFamily: FONT_INTER_STACK,
                  fontWeight: 300,
                  fontSize: "clamp(1.1rem, 1.9vw, 1.55rem)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.03em",
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                Your operations hold the potential—
                <br />
                we help you{" "}
                <span style={{ fontWeight: 600, color: "#fff" }}>build on it.</span>
              </p>

              <div className="flex flex-col items-end gap-3">
                <Link
                  href="/contact"
                  className="group relative z-20 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-black shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-200 hover:bg-white/93 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-white/40"
                  style={{
                    fontFamily: FONT_INTER_STACK,
                    fontWeight: 600,
                    fontSize: "14.5px",
                    letterSpacing: "-0.018em",
                  }}
                >
                  Start a project
                  <span className="flex size-5 items-center justify-center rounded-full bg-black/[0.08] transition-transform group-hover:translate-x-0.5">
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-2.5">
                      <path d="M2 5h6M5 2l3 3-3 3" />
                    </svg>
                  </span>
                </Link>
                <span
                  style={{
                    fontFamily: FONT_INTER_STACK,
                    fontWeight: 400,
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.32)",
                    letterSpacing: "0.01em",
                  }}
                >
                  Reply within one business day
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
