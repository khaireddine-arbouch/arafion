"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NM = '"Neue Montreal", ui-sans-serif, system-ui, sans-serif';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-label", {
        y: 14,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: ".about-label", start: "top 88%" },
      });
      gsap.from(".about-text", {
        y: 32,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: ".about-text", start: "top 88%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ fontFamily: NM }}
    >
      <div className="mx-auto max-w-[1320px] px-8 py-28 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr] lg:gap-20">

          {/* Label */}
          <div className="about-label pt-1.5">
            <span
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "13px",
                color: "#86868B",
                letterSpacing: "0.01em",
              }}
            >
              About us
            </span>
          </div>

          {/* Body */}
          <div className="about-text flex flex-col gap-8">
            <p
              style={{
                fontFamily: NM,
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)",
                lineHeight: 1.28,
                letterSpacing: "-0.025em",
                color: "#1D1D1F",
              }}
            >
              Arafion is a product engineering lab that designs and builds
              high-leverage digital systems for companies moving across markets.
              We turn scattered operations into clear execution — shipping
              dashboards, automation systems, SaaS products, and data
              infrastructure that{" "}
              <span style={{ color: "#86868B" }}>
                compound over time. Anchored in Morocco and Türkiye, serving
                teams across Europe and beyond.
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-5 py-2.5 transition-colors hover:border-black/30"
                style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#1D1D1F", letterSpacing: "-0.01em", textDecoration: "none" }}
              >
                Learn about us
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px]">
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-5 py-2.5 transition-colors hover:border-black/30"
                style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", letterSpacing: "-0.01em", textDecoration: "none" }}
              >
                View services
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[9px]">
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
