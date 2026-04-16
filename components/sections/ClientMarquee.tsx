"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInOnView from "@/components/ui/FadeInOnView";

interface Client {
  name: string;
  region: string;
  type: string;
}

const CLIENTS: Client[] = [
  { name: "NeuroTrade", region: "Americas", type: "AI/ML" },
  { name: "Meridian Health", region: "Americas", type: "Healthcare" },
  { name: "Atlas Logistics", region: "Americas", type: "Logistics" },
  { name: "Finova", region: "Americas", type: "FinTech" },
  { name: "Verde Carbon", region: "Americas", type: "Climate" },
  { name: "BioSync", region: "Americas", type: "BioTech" },
  { name: "Civitas Gov", region: "Americas", type: "GovTech" },
  { name: "CloudScope", region: "Americas", type: "Cloud" },
  { name: "Delta", region: "Americas", type: "Aviation" },
  { name: "Revolut", region: "Europe", type: "FinTech" },
  { name: "Siemens", region: "Europe", type: "Industrial" },
  { name: "Klarna", region: "Europe", type: "FinTech" },
  { name: "Wise", region: "Europe", type: "FinTech" },
  { name: "Aramco Digital", region: "MENA", type: "Energy" },
  { name: "Careem", region: "MENA", type: "Super App" },
  { name: "QIA", region: "MENA", type: "Finance" },
  { name: "STC", region: "MENA", type: "Telecom" },
  { name: "Getir", region: "MENA", type: "Delivery" },
  { name: "Trendyol", region: "MENA", type: "E-commerce" },
  { name: "Zain Group", region: "MENA", type: "Telecom" },
  { name: "Mawdoo3", region: "MENA", type: "AI/ML" },
  { name: "Anghami", region: "MENA", type: "Media" },
  { name: "CIH Bank", region: "MENA", type: "Banking" },
  { name: "OCP Group", region: "MENA", type: "Industry" },
  { name: "Safaricom", region: "MENA", type: "Telecom" },
  { name: "Flutterwave", region: "MENA", type: "FinTech" },
  { name: "MTN Group", region: "MENA", type: "Telecom" },
  { name: "Noon", region: "MENA", type: "E-commerce" },
  { name: "Grab", region: "APAC", type: "Super App" },
  { name: "Sony", region: "APAC", type: "Entertainment" },
  { name: "Tencent Cloud", region: "APAC", type: "Cloud" },
  { name: "Razorpay", region: "APAC", type: "FinTech" },
];

const REGIONS = ["All", "Americas", "Europe", "MENA", "APAC"];

const REGION_COLOR: Record<string, string> = {
  Americas: "bg-blue-500",
  Europe: "bg-emerald-500",
  MENA: "bg-amber-500",
  APAC: "bg-purple-500",
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
              key={client.name}
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
