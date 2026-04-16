"use client";

import { motion } from "framer-motion";
import FadeInOnView from "@/components/ui/FadeInOnView";

const CAPABILITIES = [
  {
    title: "AI-Powered Applications",
    desc: "ML inference pipelines, recommendation engines, NLU systems, and predictive analytics platforms. From prototype to production at scale.",
    tags: ["TensorFlow", "PyTorch", "LangChain", "OpenAI"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z" />
        <path d="M6 13a6 6 0 0 0 12 0" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </svg>
    ),
    span: "md:col-span-2 md:row-span-2",
    gradient: "from-blue-500/5 to-indigo-500/5",
  },
  {
    title: "Platform Engineering",
    desc: "API gateways, service meshes, real-time dispatch, and cloud infrastructure at scale.",
    tags: ["AWS", "GCP", "Kubernetes", "Terraform"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 10h.01" />
        <path d="M10 10h.01" />
        <path d="M14 10h4" />
        <path d="M6 14h4" />
        <path d="M14 14h.01" />
        <path d="M18 14h.01" />
      </svg>
    ),
    span: "",
    gradient: "from-emerald-500/5 to-teal-500/5",
  },
  {
    title: "Data Dashboards",
    desc: "Executive reporting, cohort analytics, real-time monitoring.",
    tags: ["D3.js", "Recharts", "PostgreSQL"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-10" />
      </svg>
    ),
    span: "",
    gradient: "from-amber-500/5 to-orange-500/5",
  },
  {
    title: "Product Design",
    desc: "End-to-end product development. Design systems, prototyping, and user research.",
    tags: ["Figma", "Storybook", "Radix"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4" /><path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" /><path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    span: "",
    gradient: "from-pink-500/5 to-rose-500/5",
  },
  {
    title: "Mobile Apps",
    desc: "Native and cross-platform apps for consumer, enterprise, and operator use cases.",
    tags: ["React Native", "Swift", "Kotlin"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    span: "",
    gradient: "from-purple-500/5 to-violet-500/5",
  },
  {
    title: "Corporate Websites",
    desc: "High-end marketing sites and brand-driven digital properties.",
    tags: ["Next.js", "Framer Motion", "Vercel"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
      </svg>
    ),
    span: "",
    gradient: "from-cyan-500/5 to-sky-500/5",
  },
];

export default function BentoCapabilities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {CAPABILITIES.map((cap, i) => (
        <FadeInOnView key={cap.title} delay={i * 60}>
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.25 } }}
            className={`group relative rounded-3xl bg-gradient-to-br ${cap.gradient} border border-black/[.06] p-6 h-full overflow-hidden ${cap.span}`}
          >
            <div className="absolute inset-0 bg-white/80 group-hover:bg-white/60 transition-colors duration-300" />
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-white border border-black/[.06] flex items-center justify-center text-ink/60 mb-4 shadow-sm">
                {cap.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-ink tracking-tight mb-2">
                {cap.title}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed mb-4">
                {cap.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-muted/80 bg-black/[.03] px-2 py-0.5 rounded-full tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </FadeInOnView>
      ))}
    </div>
  );
}
