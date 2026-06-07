import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital systems, AI products, visual sales assets, and growth infrastructure — built end to end. Software engineering, websites, AI & data, marketing campaigns, architecture visualization, and strategy scoping.",
  keywords: [
    "SaaS development", "AI systems", "web development", "architecture visualization",
    "3D rendering", "dashboard development", "marketing campaigns", "Next.js agency",
    "software product engineering", "digital transformation",
  ],
  openGraph: {
    title: "Services — Arafion Product Engineering Lab",
    description:
      "Six execution lines: Software & Product Engineering, Websites, Intelligence & AI, Marketing, Architecture Visualization, and Strategy. One studio, end-to-end delivery.",
    url: "https://arafion.com/services",
  },
  alternates: { canonical: "https://arafion.com/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
