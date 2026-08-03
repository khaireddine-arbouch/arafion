import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/site/config";

const site = getSiteConfig();

export const metadata: Metadata = {
  title: "Blog",
  description: `Thinking from the ${site.shortName} lab — on software architecture, AI workflows, dashboard design, campaign infrastructure, rendering pipelines, and building digital systems that ship.`,
  keywords: [
    "software engineering blog", "AI systems", "SaaS architecture", "dashboard design",
    "rendering pipeline", "product engineering", "campaign infrastructure", "tech blog",
  ],
  openGraph: {
    title: `From the Lab — ${site.shortName} Blog`,
    description:
      "Writing on software architecture, AI workflows, dashboard design, campaign infrastructure, and building digital systems that ship.",
    url: `${site.siteUrl}/blog`,
  },
  alternates: { canonical: `${site.siteUrl}/blog` },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
