"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/lib/i18n/context";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";


export default function ServiceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useGSAP(
    () => {
      const d = { ease: "power3.out", immediateRender: false };
      gsap.from(".hw-eyebrow",  { ...d, y: 12, opacity: 0, duration: 0.6,  scrollTrigger: { trigger: ".hw-eyebrow",  start: "top 90%" } });
      gsap.from(".hw-headline", { ...d, y: 36, opacity: 0, duration: 0.95, scrollTrigger: { trigger: ".hw-headline", start: "top 88%" } });
      gsap.from(".hw-sub",      { ...d, y: 20, opacity: 0, duration: 0.7,  scrollTrigger: { trigger: ".hw-sub",      start: "top 88%" } });
      gsap.from(".hw-step",     { ...d, y: 22, opacity: 0, duration: 0.7, stagger: 0.1, scrollTrigger: { trigger: ".hw-steps", start: "top 84%" } });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white border-t border-black/6"
      style={{ fontFamily: NM }}
    >
      <div className="mx-auto max-w-[1320px] px-8 pt-24 pb-0 md:px-14 lg:px-20">

        {/* Eyebrow */}
        <p className="hw-eyebrow mb-5" style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B" }}>
          {t.sections.process.eyebrow}
        </p>

        {/* Headline */}
        <h2
          className="hw-headline mb-6"
          style={{
            fontFamily: NM, fontWeight: 400,
            fontSize: "clamp(1.7rem, 3.2vw, 3rem)",
            lineHeight: 1.16, letterSpacing: "-0.028em",
            color: "#1D1D1F", maxWidth: "780px",
          }}
        >
          {t.sections.process.heading}
        </h2>

        {/* Supporting paragraph */}
        <p
          className="hw-sub mb-20"
          style={{
            fontFamily: NM, fontWeight: 400, fontSize: "15px",
            lineHeight: 1.7, color: "#86868B", maxWidth: "680px",
          }}
        >
          {t.sections.process.subheading}
        </p>

        {/* Three columns */}
        <div className="hw-steps grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-12 pb-28 border-t border-black/8 pt-12">
          {t.sections.process.steps.map((step) => (
            <div key={step.n} className="hw-step">
              <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "12px", color: "#86868B", letterSpacing: "0.04em", marginBottom: "1.1rem" }}>
                {step.n}
              </p>
              <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)", letterSpacing: "-0.02em", color: "#1D1D1F", marginBottom: "0.85rem", lineHeight: 1.25 }}>
                {step.title}
              </p>
              <p style={{ fontFamily: NM, fontWeight: 400, fontSize: "14px", lineHeight: 1.7, color: "#86868B" }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
