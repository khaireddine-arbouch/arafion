"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FONT_INTER_STACK } from "@/lib/font-stacks";

gsap.registerPlugin(useGSAP);

/** Radial mask: transparent over the focal point (eye), feathered edge — keeps video crisp there while side fades stay legible. Aligned with video `objectPosition: 65% center`. */
const EYE_CLEAR_MASK =
  "radial-gradient(ellipse 42% 48% at 64% 34%, transparent 0%, transparent 44%, rgba(0,0,0,0.06) 52%, black 78%)";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-[17px]">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Real-Time Intelligence",
    desc: "Dashboards and pipelines that surface insights the moment they matter.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-[17px]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Automated Workflows",
    desc: "Systems that eliminate friction and scale without added overhead.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-[17px]">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 14v6M14.5 17h6" />
      </svg>
    ),
    title: "Data Visualizations",
    desc: "Complex datasets made clear through bespoke interactive charts and maps.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-[17px]">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Marketing Systems",
    desc: "CRM pipelines, lead flows, and campaign infrastructure built to convert.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-[17px]">
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
      tl.from(".vh-brand", { y: -12, duration: 0.55, ease: "power3.out" })
        .from(".vh-headline", { y: 48, opacity: 0, filter: "blur(12px)", duration: 1.05 }, "-=0.38")
        .from(".vh-feature", { y: 18, opacity: 0, duration: 0.6, stagger: 0.07 }, "-=0.62")
        .from(".vh-tagline", { y: 18, opacity: 0, duration: 0.6 }, "-=0.58");
      // CTA is intentionally not animated with GSAP — `from()` can snapshot opacity before paint and leave the link stuck at opacity:0 inline.
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-dvh min-h-[600px] flex-col overflow-hidden bg-black text-white"
    >
      {/* ── Full video — no global dimming ── */}
      <video
        src="/eye%20closeup.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "65% center" }}
      />

      {/* ── Legibility: soft side + bottom fades; mask leaves eye region untouched (premium, no heavy “box”) ── */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(52%,520px)]"
        style={{
          background:
            "linear-gradient(to right, rgba(8,7,6,0.55) 0%, rgba(8,7,6,0.18) 55%, transparent 100%)",
          maskImage: EYE_CLEAR_MASK,
          WebkitMaskImage: EYE_CLEAR_MASK,
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[min(48%,480px)]"
        style={{
          background:
            "linear-gradient(to left, rgba(8,7,6,0.5) 0%, rgba(8,7,6,0.14) 50%, transparent 100%)",
          maskImage: EYE_CLEAR_MASK,
          WebkitMaskImage: EYE_CLEAR_MASK,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[min(48vh,420px)]"
        style={{
          background:
            "linear-gradient(to top, rgba(6,5,5,0.58) 0%, rgba(6,5,5,0.2) 52%, transparent 100%)",
          maskImage: EYE_CLEAR_MASK,
          WebkitMaskImage: EYE_CLEAR_MASK,
        }}
      />

      {/* ── Content (min-h-0 + bottom padding keeps CTA above fold / floating dock) ── */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-8 pb-[max(5.5rem,env(safe-area-inset-bottom)+4rem)] pt-8 sm:px-12 sm:pb-22 md:px-16 md:pb-12 lg:px-20 lg:pb-8">

        {/* Brand — logo + wordmark only */}
        <Link
          href="/"
          className="vh-brand inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
        >
          <Image
            src="/Arafion%20Icon.png"
            alt=""
            width={32}
            height={32}
            className="size-8 shrink-0 object-contain"
            priority
          />
          <span
            className="text-[15px] font-medium tracking-[-0.02em] text-white"
            style={{ fontFamily: FONT_INTER_STACK }}
          >
            Arafion
          </span>
        </Link>

        {/* Headline — top-left, large thin weight */}
        <div className="mt-10 lg:mt-14">
          <h1
            className="vh-headline text-white [@media(max-height:740px)]:text-[clamp(2rem,9vw,3.35rem)]! [@media(max-height:740px)]:leading-[1.08]!"
            style={{
              fontFamily: FONT_INTER_STACK,
              fontWeight: 600,
              fontSize: "clamp(2.85rem, 6.8vw, 5.75rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.038em",
              maxWidth: "12ch",
            }}
          >
            Build Beyond.
            <br />
            Ship with
            <br />
            Precision.
          </h1>
        </div>

        {/* Spacer — min-h-0 allows flex to shrink so bottom row stays in view on short viewports */}
        <div className="min-h-0 flex-1" />

        {/* Bottom row — column-reverse below lg so tagline + CTA sit above the feature grid (avoids clipping) */}
        <div className="-mt-3 flex shrink-0 flex-col-reverse gap-7 sm:-mt-4 lg:-mt-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">

          {/* Features */}
          <ul className="flex flex-wrap gap-x-7 gap-y-4 lg:max-w-[640px]">
            {features.map((f) => (
              <li
                key={f.title}
                className="vh-feature flex items-start gap-2.5"
                style={{ minWidth: 160, maxWidth: 188 }}
              >
                <span className="mt-0.5 shrink-0 text-white/52">{f.icon}</span>
                <div>
                  <p
                    style={{
                      fontFamily: FONT_INTER_STACK,
                      fontWeight: 600,
                      fontSize: "13px",
                      letterSpacing: "-0.022em",
                      color: "white",
                      lineHeight: 1.2,
                    }}
                  >
                    {f.title}
                  </p>
                  <p
                    style={{
                      fontFamily: FONT_INTER_STACK,
                      fontWeight: 400,
                      fontSize: "11.5px",
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.76)",
                      marginTop: "3px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Tagline + CTA — above scrims & floating dock */}
          <div className="relative z-20 flex w-full flex-col items-start gap-4 lg:w-auto lg:max-w-[400px] lg:shrink-0 lg:items-end lg:text-right">
            <p
              className="vh-tagline text-white"
              style={{
                fontFamily: FONT_INTER_STACK,
                fontWeight: 500,
                fontSize: "clamp(1.15rem, 2.05vw, 1.65rem)",
                lineHeight: 1.24,
                letterSpacing: "-0.028em",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              Your operations hold the potential—
              <br />
              we help you{" "}
              <span style={{ fontWeight: 600, color: "#fff" }}>build on it.</span>
            </p>
            <Link
              href="/contact"
              className="vh-cta group relative z-20 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white px-6 py-3.5 text-black shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black/40"
              style={{
                fontFamily: FONT_INTER_STACK,
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "-0.018em",
                opacity: 1,
              }}
            >
              Start a project
              <span className="flex size-5 items-center justify-center rounded-full bg-black/10 transition-transform group-hover:translate-x-0.5">
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-2.5">
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
