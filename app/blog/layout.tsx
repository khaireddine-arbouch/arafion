import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/site/config";
import { getHreflangAlternates } from "@/lib/site/seo";

const site = getSiteConfig();

export const metadata: Metadata =
  site.id === "norex"
    ? {
        title: site.defaultLocale === "he" ? "בלוג" : "Blog",
        description:
          site.defaultLocale === "he"
            ? "מהמעבדה של Norex — על ארכיטקטורת תוכנה, זרימות AI, עיצוב דשבורדים ובניית מערכות דיגיטליות שנשלחות לפרודקשן."
            : "From the Norex lab — on software architecture, AI workflows, dashboard design, and building digital systems that ship.",
        keywords: [
          "Norex blog",
          "software engineering Israel",
          "AI systems",
          "SaaS architecture",
          "dashboard design",
          "product engineering",
          "בלוג הנדסת תוכנה",
          "ארכיטקטורת SaaS",
        ],
        openGraph: {
          title:
            site.defaultLocale === "he"
              ? "מהמעבדה — בלוג Norex"
              : `From the Lab — ${site.shortName} Blog`,
          description:
            site.defaultLocale === "he"
              ? "כתיבה על ארכיטקטורת תוכנה, זרימות AI, עיצוב דשבורדים ובניית מערכות שנשלחות לפרודקשן."
              : "Writing on software architecture, AI workflows, dashboard design, and building digital systems that ship.",
          url: `${site.siteUrl}/blog`,
        },
        alternates: getHreflangAlternates("/blog"),
      }
    : {
        title: "Blog",
        description: `Thinking from the ${site.shortName} lab — on software architecture, AI workflows, dashboard design, campaign infrastructure, rendering pipelines, and building digital systems that ship.`,
        keywords: [
          "software engineering blog",
          "AI systems",
          "SaaS architecture",
          "dashboard design",
          "rendering pipeline",
          "product engineering",
          "campaign infrastructure",
          "tech blog",
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
