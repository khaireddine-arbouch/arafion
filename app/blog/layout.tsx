import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thinking from the Arafion lab — on software architecture, AI workflows, dashboard design, campaign infrastructure, rendering pipelines, and building digital systems that ship.",
  keywords: [
    "software engineering blog", "AI systems", "SaaS architecture", "dashboard design",
    "rendering pipeline", "product engineering", "campaign infrastructure", "tech blog",
  ],
  openGraph: {
    title: "From the Lab — Arafion Blog",
    description:
      "Writing on software architecture, AI workflows, dashboard design, campaign infrastructure, and building digital systems that ship.",
    url: "https://arafion.com/blog",
  },
  alternates: { canonical: "https://arafion.com/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
