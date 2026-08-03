import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/site/config";

const site = getSiteConfig();

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies across software, AI, data, and design. Multi-tenant SaaS platforms, genomics research tools, intelligence dashboards, browser-based media editors, and multilingual marketing sites — built and shipped.",
  keywords: [
    "case studies", "SaaS portfolio", "NileRoute OS", "SignalsFrame", "Evo2 Variant Intelligence",
    "Atlas Intelligence", "intelligence dashboard", "software portfolio", "web development portfolio",
  ],
  openGraph: {
    title: `Work — ${site.shortName} Case Studies`,
    description:
      "Systems built across software, AI, data, and design. From multi-tenant SaaS to genomics research tools and intelligence dashboards.",
    url: `${site.siteUrl}/work`,
  },
  alternates: { canonical: `${site.siteUrl}/work` },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
