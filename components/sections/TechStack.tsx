"use client";

import { motion } from "framer-motion";
import FadeInOnView from "@/components/ui/FadeInOnView";

interface StackItem {
  name: string;
  category: string;
}

const STACK: Record<string, StackItem[]> = {
  "Frontend": [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Framer Motion", category: "frontend" },
    { name: "D3.js", category: "frontend" },
  ],
  "Backend": [
    { name: "Node.js", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Go", category: "backend" },
    { name: "Rust", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "tRPC", category: "backend" },
  ],
  "AI & Data": [
    { name: "PyTorch", category: "ai" },
    { name: "TensorFlow", category: "ai" },
    { name: "LangChain", category: "ai" },
    { name: "OpenAI", category: "ai" },
    { name: "Spark", category: "ai" },
    { name: "dbt", category: "ai" },
  ],
  "Infrastructure": [
    { name: "AWS", category: "infra" },
    { name: "GCP", category: "infra" },
    { name: "Kubernetes", category: "infra" },
    { name: "Terraform", category: "infra" },
    { name: "Docker", category: "infra" },
    { name: "Vercel", category: "infra" },
  ],
  "Data Stores": [
    { name: "PostgreSQL", category: "data" },
    { name: "Redis", category: "data" },
    { name: "MongoDB", category: "data" },
    { name: "Kafka", category: "data" },
    { name: "Elasticsearch", category: "data" },
    { name: "ClickHouse", category: "data" },
  ],
};

const CAT_COLORS: Record<string, string> = {
  frontend: "from-blue-500/10 to-blue-500/5 border-blue-500/10",
  backend: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/10",
  ai: "from-purple-500/10 to-purple-500/5 border-purple-500/10",
  infra: "from-orange-500/10 to-orange-500/5 border-orange-500/10",
  data: "from-rose-500/10 to-rose-500/5 border-rose-500/10",
};

export default function TechStack() {
  return (
    <div className="space-y-6">
      {Object.entries(STACK).map(([category, items], ci) => (
        <FadeInOnView key={category} delay={ci * 60}>
          <div>
            <div className="text-[11px] font-semibold text-muted tracking-tight uppercase mb-3">
              {category}
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05, y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`px-4 py-2 rounded-xl bg-gradient-to-br ${CAT_COLORS[item.category]} border text-sm font-medium text-ink tracking-tight cursor-default`}
                >
                  {item.name}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInOnView>
      ))}
    </div>
  );
}
