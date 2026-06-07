import type { Metadata } from "next";
import VideoHero from "@/components/hero/VideoHero";

export const metadata: Metadata = {
  title: "Arafion — Product Engineering Lab",
  description:
    "Arafion builds websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems. Serious digital execution, end to end.",
  keywords: [
    "product engineering lab", "SaaS development", "AI systems", "dashboard development",
    "architectural visualization", "3D rendering", "web development", "Next.js agency",
    "digital systems", "software studio",
  ],
  openGraph: {
    title: "Arafion — Product Engineering Lab",
    description:
      "We build websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and 3D visualization systems. Built and shipped.",
    url: "https://arafion.com",
    type: "website",
  },
  alternates: { canonical: "https://arafion.com" },
};
import GlobeProofSection from "@/components/sections/GlobeProofSection";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import ServiceSection from "@/components/sections/ServiceSection";
import ServicesGridSection from "@/components/sections/ServicesGridSection";
import BlogSection from "@/components/sections/BlogSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
export default function Page() {
  return (
    <>
      <VideoHero />
      <GlobeProofSection />
      <AboutSection />
      <CaseStudySection />
      <ServicesGridSection />
      <ServiceSection />
      <BlogSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
