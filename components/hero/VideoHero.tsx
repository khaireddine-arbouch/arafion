"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FONT_INTER_STACK } from "@/lib/font-stacks";

gsap.registerPlugin(useGSAP);

const MASK =
  "radial-gradient(ellipse 42% 48% at 64% 34%, transparent 0%, transparent 44%, rgba(0,0,0,0.06) 52%, black 78%)";

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
      className="relative flex h-dvh min-h-[600px] flex-col overflow-hidden bg-black text-white"
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

      {/* ── Gradient overlays for legibility ── */}
      {/* Left */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(56%,560px)]"
        style={{
          background: "linear-gradient(to right, rgba(6,5,5,0.62) 0%, rgba(6,5,5,0.22) 58%, transparent 100%)",
          maskImage: MASK,
          WebkitMaskImage: MASK,
        }}
      />
      {/* Right */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[min(46%,460px)]"
        style={{
          background: "linear-gradient(to left, rgba(6,5,5,0.54) 0%, rgba(6,5,5,0.16) 52%, transparent 100%)",
          maskImage: MASK,
          WebkitMaskImage: MASK,
        }}
      />
      {/* Bottom — stronger fade so feature text is always readable */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[min(55vh,480px)]"
        style={{
          background: "linear-gradient(to top, rgba(5,4,4,0.72) 0%, rgba(5,4,4,0.32) 46%, transparent 100%)",
        }}
      />
      {/* Top — subtle fade for brand area */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[min(22vh,200px)]"
        style={{
          background: "linear-gradient(to bottom, rgba(5,4,4,0.38) 0%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-8 pt-9 pb-[max(5.5rem,env(safe-area-inset-bottom)+4rem)] sm:px-12 sm:pt-10 md:px-16 md:pb-12 lg:px-20 lg:pb-10 lg:pt-11">

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

        {/* Headline — editorial weight (no pill eyebrow; brand + type carry the story) */}
        <div className="mt-14 lg:mt-[4.25rem]">
          <h1
            className="vh-headline text-white [@media(max-height:740px)]:text-[clamp(1.9rem,8vw,3rem)]! [@media(max-height:740px)]:leading-[1.1]!"
            style={{
              fontFamily: FONT_INTER_STACK,
              fontWeight: 300,
              fontSize: "clamp(3rem, 7.2vw, 6.2rem)",
              lineHeight: 1.03,
              letterSpacing: "-0.045em",
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

        {/* Thin divider above features */}
        <div
          className="vh-divider mb-6 h-px w-full lg:max-w-[640px]"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />

        {/* Bottom row */}
        <div className="flex shrink-0 flex-col-reverse gap-9 lg:flex-row lg:items-end lg:justify-between lg:gap-14">

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
          <div className="relative z-20 flex w-full flex-col items-start gap-6 pt-1 sm:gap-7 lg:w-auto lg:max-w-[400px] lg:shrink-0 lg:items-end lg:gap-7 lg:pl-6 lg:pt-0 lg:text-right xl:pl-10">
            <p
              className="vh-tagline"
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

            <div className="flex flex-col items-start gap-3 lg:items-end">
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
    </section>
  );
}
