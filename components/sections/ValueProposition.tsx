"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';

const pillars = [
  {
    num: "01",
    title: "Speed without shortcuts",
    body: "Most engagements ship in 4 to 10 weeks. We move fast because we pre-empt complexity, not because we cut corners.",
  },
  {
    num: "02",
    title: "Full-stack depth",
    body: "From pixel-perfect UI to data pipelines and infrastructure. One team, full ownership, no translation layer.",
  },
  {
    num: "03",
    title: "Cross-border fluency",
    body: "Anchored in Morocco and Turkey, operating across European and international markets. We understand the friction of global builds.",
  },
  {
    num: "04",
    title: "Outcome-first",
    body: "We are not measured by tickets closed or hours logged. We are measured by what you are able to build next.",
  },
];

export default function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const ease = "power3.out";
      const defaults = { immediateRender: false, ease };

      gsap.from(".vp-label", {
        ...defaults,
        y: 14,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: { trigger: ".vp-label", start: "top 90%" },
      });

      gsap.from(".vp-headline", {
        ...defaults,
        y: 44,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.0,
        scrollTrigger: { trigger: ".vp-headline", start: "top 88%" },
      });

      gsap.from(".vp-sub", {
        ...defaults,
        y: 20,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: { trigger: ".vp-sub", start: "top 88%" },
      });

      gsap.from(".vp-divider", {
        ...defaults,
        scaleX: 0,
        duration: 1.2,
        ease: "power2.inOut",
        transformOrigin: "left center",
        scrollTrigger: { trigger: ".vp-divider", start: "top 92%" },
      });

      gsap.from(".vp-pillar", {
        ...defaults,
        y: 34,
        opacity: 0,
        duration: 0.78,
        stagger: 0.1,
        scrollTrigger: { trigger: ".vp-pillars", start: "top 84%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-white"
      style={{ fontFamily: NM }}
    >
      {/* Top — statement */}
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-24 md:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Left: label + headline */}
          <div className="lg:max-w-[58%]">
            <p
              className="vp-label mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-black/30"
              style={{ fontFamily: NM }}
            >
              What drives us
            </p>
            <h2
              className="vp-headline leading-[0.93] tracking-[-0.035em] text-[#0f0f0f]"
              style={{
                fontFamily: NM,
                fontSize: "clamp(2.8rem, 5.6vw, 5.6rem)",
                fontWeight: 300,
              }}
            >
              We don&rsquo;t ship features.
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 300 }}>We engineer</em>{" "}
              <span style={{ fontWeight: 700 }}>leverage.</span>
            </h2>
          </div>

          {/* Right: body copy */}
          <p
            className="vp-sub max-w-[340px] text-[15px] leading-[1.72] text-black/45 lg:pt-[4.8rem]"
            style={{ fontFamily: NM, fontWeight: 400 }}
          >
            Every system we deliver is designed to compound over time. Clean
            architecture, fast iteration, and code your team actually owns —
            built to give you leverage at every stage.
          </p>

        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="vp-divider h-px w-full bg-black/8" />
      </div>

      {/* Bottom — pillars */}
      <div className="vp-pillars mx-auto max-w-[1320px] px-6 pb-28 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={[
                "vp-pillar flex flex-col gap-6 py-12",
                i < 3 ? "lg:border-r lg:border-black/6 lg:pr-10" : "",
                i > 0 ? "lg:pl-10" : "",
                i % 2 === 0 && i < 2 ? "sm:border-r sm:border-black/6 sm:pr-8" : "",
                i % 2 === 1 ? "sm:pl-8" : "",
                i < 2 ? "border-b border-black/6 sm:border-b-0 lg:border-b-0" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className="text-[10.5px] font-medium tracking-[0.2em] text-black/22"
                style={{ fontFamily: NM }}
              >
                {p.num}
              </span>
              <div>
                <h3
                  className="text-[1.08rem] leading-[1.18] tracking-[-0.022em] text-[#0f0f0f]"
                  style={{ fontFamily: NM, fontWeight: 600 }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-3.5 text-[13.5px] leading-[1.74] text-black/42"
                  style={{ fontFamily: NM, fontWeight: 400 }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
