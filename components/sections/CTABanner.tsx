"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/lib/i18n/context";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t, locale } = useLanguage();

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>(".cb-animate");
      gsap.set(targets, { autoAlpha: 0 });

      const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(targets, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".cb-text",
        { y: 36, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.0,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".cb-text", start: "top 86%" },
        },
      );
      gsap.fromTo(
        ".cb-cta",
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          delay: 0.15,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".cb-cta", start: "top 90%" },
        },
      );
    },
    { scope: sectionRef, dependencies: [locale], revertOnUpdate: true },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black"
      style={{ fontFamily: NM }}
    >
      {/* Full image — unclipped, full natural height */}
      <Image
        src="/cta-clean.jpg"
        alt=""
        aria-hidden="true"
        width={1600}
        height={1200}
        className="relative z-0 block w-full h-auto"
        style={{ display: "block" }}
        loading="lazy"
      />

      {/* Dark gradient overlay — heavier on left/bottom for text legibility */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.42) 50%, rgba(0,0,0,0.10) 100%)," +
            "linear-gradient(to top, rgba(0,0,0,0.60) 0%, transparent 45%)",
        }}
      />

      {/* Text — start-anchored so LTR/RTL both keep copy on the readable dark side */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-8 pb-14 md:px-14 lg:px-20 lg:pb-18">
        <div className="cb-text cb-animate max-w-[640px] ltr:me-auto rtl:ms-auto">
          <h2
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 5vw, 4.8rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.032em",
              color: "white",
              marginBottom: "1.2rem",
            }}
          >
            {t.cta.line1}
            <br />
            {t.cta.line2}
            <br />
            {t.cta.line3}
          </h2>

          <p
            style={{
              fontFamily: NM,
              fontWeight: 400,
              fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.62)",
              maxWidth: "400px",
              marginBottom: "2.2rem",
            }}
          >
            {t.cta.desc}
          </p>

          <div className="cb-cta cb-animate flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30"
              style={{ fontFamily: NM, fontWeight: 500, fontSize: "13.5px", color: "#1D1D1F", letterSpacing: "-0.01em" }}
            >
              {t.cta.startProject}
              <span
                className="flex size-[26px] items-center justify-center rounded-full bg-[#1D1D1F]"
              >
                <svg viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.6" className="size-[9px]">
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ fontFamily: NM, fontWeight: 400, fontSize: "13.5px", color: "rgba(255,255,255,0.72)", letterSpacing: "-0.01em" }}
            >
              {t.cta.seeWork}
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px]">
                <path d="M2 5h6M5 2l3 3-3 3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
