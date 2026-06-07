"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_PORTFOLIO_PROJECTS } from "@/lib/map-projects";

interface Engagement {
  id: string;
  name: string;
  region: string;
  type: string;
}

const CLIENTS: Engagement[] = ALL_PORTFOLIO_PROJECTS.map((project) => ({
  id: project.id,
  name: project.displayTitle,
  region: project.regionLabel,
  type: project.serviceLabels[0] ?? "Product system",
}));

const REGIONS = [
  "All",
  ...Array.from(new Set(CLIENTS.map((client) => client.region))).sort(),
];

const REGION_COLOR: Record<string, string> = {
  Americas: "bg-blue-500",
  Europe: "bg-emerald-500",
  "MENA & Africa": "bg-amber-500",
  "Asia Pacific": "bg-purple-500",
  International: "bg-gray-400",
  "Morocco / International": "bg-orange-500",
};

export default function ClientMarquee() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? CLIENTS : CLIENTS.filter((c) => c.region === filter);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
        {REGIONS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setFilter(r)}
            className={`relative px-4 py-1.5 rounded-full text-[12px] font-medium tracking-tight transition-all duration-300 whitespace-nowrap ${
              r === filter
                ? "bg-ink text-white"
                : "bg-black/[.04] text-muted hover:text-ink hover:bg-black/[.06]"
            }`}
          >
            {r === "All" ? `All (${CLIENTS.length})` : `${r} (${CLIENTS.filter((c) => c.region === r).length})`}
          </button>
        ))}
      </div>

      {/* Client grid */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((client) => (
            <motion.div
              key={client.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="group relative rounded-2xl bg-white border border-black/[.06] p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="text-[13px] font-semibold text-ink tracking-tight">
                  {client.name}
                </div>
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${REGION_COLOR[client.region] ?? "bg-gray-300"}`} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-muted/70 tracking-tight uppercase">
                  {client.type}
                </span>
                <span className="text-[10px] text-muted/50">·</span>
                <span className="text-[10px] text-muted/50 tracking-tight">
                  {client.region}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
