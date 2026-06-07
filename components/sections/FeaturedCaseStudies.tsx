"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FadeInOnView from "@/components/ui/FadeInOnView";
import { ALL_PORTFOLIO_PROJECTS } from "@/lib/map-projects";

const COLORS = ["#0A84FF", "#30D158", "#BF5AF2", "#FF9F0A", "#FF375F"];

const CASES = ALL_PORTFOLIO_PROJECTS.filter((project) => project.featured).slice(0, 5);

function proofLabel(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function FeaturedCaseStudies() {
  const [activeId, setActiveId] = useState(CASES[0].id);
  const active = CASES.find((c) => c.id === activeId) ?? CASES[0];
  const activeColor = COLORS[Math.max(0, CASES.findIndex((c) => c.id === active.id)) % COLORS.length];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left: selector cards */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-[260px] shrink-0 pb-2 lg:pb-0">
        {CASES.map((c, i) => (
          <FadeInOnView key={c.id} delay={i * 40}>
            <button
              type="button"
              onClick={() => setActiveId(c.id)}
              className={`relative w-[200px] lg:w-full shrink-0 text-left rounded-2xl p-4 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                c.id === activeId
                  ? "bg-ink text-white shadow-lg shadow-ink/10"
                  : "bg-white border border-black/[.06] text-ink hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              <div className="text-[11px] font-medium opacity-60 tracking-tight mb-0.5">
                {c.regionLabel}
              </div>
              <div className="text-sm font-semibold tracking-tight">
                {c.displayTitle}
              </div>
              <div className={`text-xs mt-1 ${c.id === activeId ? "text-white/60" : "text-muted"}`}>
                {c.serviceLabels[0] ?? "Product system"}
              </div>
              {c.id === activeId && (
                <motion.div
                  layoutId="case-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full bg-white hidden lg:block"
                  style={{ left: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </FadeInOnView>
        ))}
      </div>

      {/* Right: detail card */}
      <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="rounded-3xl border border-black/[.06] bg-white overflow-hidden h-full"
          >
            {/* Accent bar */}
            <div className="h-1" style={{ backgroundColor: activeColor }} />

            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="text-[11px] font-medium text-muted tracking-tight uppercase mb-1">
                    {active.regionLabel}
                  </div>
                  <h3 className="text-xl font-semibold text-ink tracking-tight">
                    {active.displayTitle}
                  </h3>
                  <p className="text-sm text-muted mt-0.5">{active.serviceLabels.join(", ")}</p>
                </div>
                <div
                  className="text-right shrink-0 px-5 py-3 rounded-2xl"
                  style={{ backgroundColor: `${activeColor}0D` }}
                >
                  <div
                    className="text-sm font-semibold tracking-tight"
                    style={{ color: activeColor }}
                  >
                    {active.statusLabel}
                  </div>
                  <div className="text-[10px] font-medium text-muted tracking-tight uppercase mt-0.5">
                    Project status
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[15px] text-ink/80 leading-relaxed mb-6">
                {active.shortDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[...active.serviceLabels, ...active.proofTypes.slice(0, 3).map(proofLabel)].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-3 py-1 rounded-full border border-black/[.06] text-muted tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/work?project=${encodeURIComponent(active.slug)}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-ink/70 transition-colors group"
              >
                View in work explorer
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-muted group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
