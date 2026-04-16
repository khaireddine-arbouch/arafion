"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInOnView from "@/components/ui/FadeInOnView";

interface CaseStudy {
  id: string;
  client: string;
  title: string;
  region: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  description: string;
  color: string;
}

const CASES: CaseStudy[] = [
  {
    id: "neurotrade",
    client: "NeuroTrade",
    title: "AI Trading Platform",
    region: "New York, US",
    tags: ["AI/ML", "Real-time", "Finance"],
    metric: "2M+",
    metricLabel: "daily signals processed",
    description: "End-to-end AI-powered trading platform with real-time analytics dashboard, ML inference pipeline, and institutional-grade UI. Sub-100ms latency across the entire signal chain.",
    color: "#0A84FF",
  },
  {
    id: "aramco",
    client: "Aramco Digital",
    title: "Enterprise Energy Dashboard",
    region: "Riyadh, Saudi Arabia",
    tags: ["Data", "IoT", "Enterprise"],
    metric: "200+",
    metricLabel: "facilities monitored",
    description: "Real-time energy management platform tracking facilities across the Kingdom. Anomaly detection, predictive alerts, and executive reporting for the world's largest energy company.",
    color: "#30D158",
  },
  {
    id: "revolut",
    client: "Revolut",
    title: "Payment Intelligence Engine",
    region: "London, UK",
    tags: ["AI/ML", "FinTech", "Scale"],
    metric: "150M+",
    metricLabel: "monthly transactions",
    description: "ML-powered fraud detection and payment routing engine. Reduced false positives by 34% while maintaining sub-100ms decision latency at peak throughput.",
    color: "#BF5AF2",
  },
  {
    id: "grab",
    client: "Grab",
    title: "Driver Intelligence Platform",
    region: "Singapore",
    tags: ["AI/ML", "Mobile", "Logistics"],
    metric: "50M+",
    metricLabel: "rides optimized",
    description: "Demand prediction and earnings optimization for Southeast Asia's largest ride-hailing service. ML models, real-time heatmaps, and driver-facing app features.",
    color: "#FF9F0A",
  },
  {
    id: "safaricom",
    client: "Safaricom",
    title: "M-Pesa Transaction Analytics",
    region: "Nairobi, Kenya",
    tags: ["Data", "FinTech", "Africa"],
    metric: "40M+",
    metricLabel: "users protected",
    description: "Real-time fraud detection and transaction analytics for Africa's largest mobile money platform. Streaming pipeline with sub-second anomaly flagging.",
    color: "#FF375F",
  },
];

export default function FeaturedCaseStudies() {
  const [activeId, setActiveId] = useState(CASES[0].id);
  const active = CASES.find((c) => c.id === activeId) ?? CASES[0];

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
                {c.region}
              </div>
              <div className="text-sm font-semibold tracking-tight">
                {c.client}
              </div>
              <div className={`text-xs mt-1 ${c.id === activeId ? "text-white/60" : "text-muted"}`}>
                {c.title}
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
            <div className="h-1" style={{ backgroundColor: active.color }} />

            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="text-[11px] font-medium text-muted tracking-tight uppercase mb-1">
                    {active.region}
                  </div>
                  <h3 className="text-xl font-semibold text-ink tracking-tight">
                    {active.client}
                  </h3>
                  <p className="text-sm text-muted mt-0.5">{active.title}</p>
                </div>
                <div
                  className="text-right shrink-0 px-5 py-3 rounded-2xl"
                  style={{ backgroundColor: `${active.color}0D` }}
                >
                  <div
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: active.color }}
                  >
                    {active.metric}
                  </div>
                  <div className="text-[10px] font-medium text-muted tracking-tight uppercase mt-0.5">
                    {active.metricLabel}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[15px] text-ink/80 leading-relaxed mb-6">
                {active.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-3 py-1 rounded-full border border-black/[.06] text-muted tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-ink/70 transition-colors group"
              >
                View full case study
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-muted group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
