"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/lib/i18n/context";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NM = "var(--font-display), ui-sans-serif, system-ui, sans-serif";

const TEAM_INITIALS = ["KA", "ZR", "MB", "OC"];
const TEAM_COLORS = ["#2A2A2A", "#3D3D3D", "#555", "#6B6B6B"];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  useGSAP(
    () => {
      const d = { ease: "power3.out", immediateRender: false };
      gsap.from(".fq-eyebrow", { ...d, y: 12, opacity: 0, duration: 0.6, scrollTrigger: { trigger: ".fq-eyebrow", start: "top 90%" } });
      gsap.from(".fq-headline", { ...d, y: 30, opacity: 0, duration: 0.9, scrollTrigger: { trigger: ".fq-headline", start: "top 88%" } });
      gsap.from(".fq-item", { ...d, y: 16, opacity: 0, duration: 0.6, stagger: 0.07, scrollTrigger: { trigger: ".fq-list", start: "top 84%" } });
      gsap.from(".fq-cta", { ...d, y: 20, opacity: 0, duration: 0.7, scrollTrigger: { trigger: ".fq-cta", start: "top 92%" } });
    },
    { scope: sectionRef },
  );

  const faqs = t.faq.items;

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative border-t border-black/[0.06] bg-white scroll-mt-[calc(5rem+env(safe-area-inset-top))]"
      style={{ fontFamily: NM }}
    >
      <div className="mx-auto max-w-[880px] px-8 pt-24 pb-28 md:px-14 lg:px-20">

        <p
          className="fq-eyebrow mb-5"
          style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B" }}
        >
          {t.faq.eyebrow}
        </p>
        <h2
          className="fq-headline mb-12"
          style={{
            fontFamily: NM,
            fontWeight: 400,
            fontSize: "clamp(1.7rem, 3vw, 2.8rem)",
            lineHeight: 1.16,
            letterSpacing: "-0.028em",
            color: "#1D1D1F",
            maxWidth: "36ch",
          }}
        >
          {t.faq.heading}
        </h2>

        <div className="fq-list border-t border-black/[0.08]">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="fq-item border-b border-black/[0.08]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group flex w-full items-start justify-between gap-6 py-6 text-start focus:outline-none"
                >
                  <span
                    className="min-w-0 flex-1"
                    style={{
                      fontFamily: NM,
                      fontWeight: 500,
                      fontSize: "clamp(15px, 1.5vw, 16.5px)",
                      lineHeight: 1.45,
                      letterSpacing: "-0.012em",
                      color: "#1D1D1F",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-1 shrink-0 transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    <svg viewBox="0 0 10 10" fill="none" stroke="#86868B" strokeWidth="1.5" className="size-3">
                      <path d="M2 3.5l3 3 3-3" />
                    </svg>
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="pb-6 pe-10"
                      style={{
                        fontFamily: NM,
                        fontWeight: 400,
                        fontSize: "14.5px",
                        lineHeight: 1.7,
                        color: "#86868B",
                        maxWidth: "62ch",
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="fq-cta mt-16 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between rounded-2xl px-8 py-7"
          style={{ background: "#F5F5F7" }}
        >
          <div className="flex items-center gap-5">
            <div className="flex -space-x-2.5 rtl:space-x-reverse">
              {TEAM_INITIALS.map((init, i) => (
                <div
                  key={i}
                  className="flex size-9 items-center justify-center rounded-full ring-2 ring-white"
                  style={{ background: TEAM_COLORS[i] }}
                >
                  <span style={{ fontFamily: NM, fontWeight: 500, fontSize: "10px", color: "rgba(255,255,255,0.8)", letterSpacing: "0.04em" }}>
                    {init}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <p
                style={{ fontFamily: NM, fontWeight: 400, fontSize: "15.5px", letterSpacing: "-0.018em", color: "#1D1D1F", lineHeight: 1.3 }}
              >
                {t.faq.cta}
              </p>
              <p
                style={{ fontFamily: NM, fontWeight: 400, fontSize: "13px", color: "#86868B", marginTop: "3px" }}
              >
                {t.faq.ctaSub}
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-[#1D1D1F] px-7 py-3.5 text-white transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-black/20"
            style={{ fontFamily: NM, fontWeight: 500, fontSize: "13.5px", letterSpacing: "-0.01em" }}
          >
            {t.faq.startProject}
            <svg
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="size-[10px] rtl:rotate-180"
            >
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
