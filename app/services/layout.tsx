import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/site/config";
import { isTechnicalOnlySite } from "@/lib/site/offerings";

const site = getSiteConfig();
const technical = isTechnicalOnlySite(site.id);

export const metadata: Metadata = {
  title: "Services",
  description: technical
    ? "Software engineering, websites, AI systems, dashboards, and strategy scoping — built end to end."
    : "Digital systems, AI products, visual sales assets, and growth infrastructure — built end to end. Software engineering, websites, AI & data, marketing campaigns, architecture visualization, and strategy scoping.",
  keywords: technical
    ? [
        "SaaS development",
        "AI systems",
        "web development",
        "dashboard development",
        "Next.js agency",
        "software product engineering",
      ]
    : [
        "SaaS development",
        "AI systems",
        "web development",
        "architecture visualization",
        "3D rendering",
        "dashboard development",
        "marketing campaigns",
        "Next.js agency",
        "software product engineering",
        "digital transformation",
      ],
  openGraph: {
    title: `Services — ${site.name}`,
    description: technical
      ? "Software & Product Engineering, Websites, Intelligence & AI, and Strategy. One studio, end-to-end delivery."
      : "Six execution lines: Software & Product Engineering, Websites, Intelligence & AI, Marketing, Architecture Visualization, and Strategy. One studio, end-to-end delivery.",
    url: `${site.siteUrl}/services`,
  },
  alternates: { canonical: `${site.siteUrl}/services` },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
