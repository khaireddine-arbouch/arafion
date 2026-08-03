import type { Metadata } from "next";
import VideoHero from "@/components/hero/VideoHero";
import { getRequestLocale } from "@/lib/i18n/server";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import ServiceSection from "@/components/sections/ServiceSection";
import ServicesGridSection from "@/components/sections/ServicesGridSection";
import BlogSection from "@/components/sections/BlogSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import { applySiteCopy, getSiteConfig } from "@/lib/site/config";
import {
  getHreflangAlternates,
  getNorexSeo,
  getOgLocale,
} from "@/lib/site/seo";

const HOME_METADATA: Record<string, { title: string; description: string; ogDescription: string }> = {
  en: {
    title: "{brand} — Product Engineering Lab",
    description:
      "{brand} builds websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems. Serious digital execution, end to end.",
    ogDescription:
      "We build websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and 3D visualization systems. Built and shipped.",
  },
  fr: {
    title: "{brand} — Laboratoire d'ingénierie produit",
    description:
      "{brand} construit des sites web, des produits SaaS, des workflows IA, des tableaux de bord, une infrastructure marketing et des systèmes de visualisation architecturale. Une exécution numérique sérieuse, de bout en bout.",
    ogDescription:
      "Nous construisons des sites web, des produits SaaS, des workflows IA, des tableaux de bord, une infrastructure marketing et des systèmes de visualisation 3D. Construit et livré.",
  },
  tr: {
    title: "{brand} — Ürün Mühendisliği Laboratuvarı",
    description:
      "{brand}; web siteleri, SaaS ürünleri, yapay zeka iş akışları, gösterge tabloları, pazarlama altyapısı ve mimari görselleştirme sistemleri geliştirir. Baştan sona ciddi dijital uygulama.",
    ogDescription:
      "Web siteleri, SaaS ürünleri, yapay zeka iş akışları, gösterge tabloları, pazarlama altyapısı ve 3D görselleştirme sistemleri geliştiriyoruz. İnşa edildi ve teslim edildi.",
  },
  ar: {
    title: "أرافيون — مختبر هندسة المنتجات",
    description:
      "تبني أرافيون مواقع الويب ومنتجات SaaS وسير عمل الذكاء الاصطناعي ولوحات التحكم والبنية التحتية التسويقية وأنظمة التصور المعماري. تنفيذ رقمي جاد من البداية إلى النهاية.",
    ogDescription:
      "نبني مواقع ويب ومنتجات SaaS وسير عمل ذكاء اصطناعي ولوحات تحكم وبنية تحتية تسويقية وأنظمة تصور ثلاثي الأبعاد. مبني ومُسلَّم.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const site = getSiteConfig();

  if (site.id === "norex") {
    const seo = getNorexSeo(locale);
    return {
      title: { absolute: seo.homeTitle },
      description: seo.homeDescription,
      keywords: seo.keywords,
      openGraph: {
        title: seo.homeTitle,
        description: seo.homeOgDescription,
        url: site.siteUrl,
        type: "website",
        locale: getOgLocale(locale, site),
        siteName: site.name,
      },
      twitter: {
        card: "summary_large_image",
        title: seo.homeTitle,
        description: seo.homeOgDescription,
      },
      alternates: getHreflangAlternates("/"),
    };
  }

  const m = applySiteCopy(HOME_METADATA[locale] ?? HOME_METADATA.en);
  return {
    title: m.title,
    description: m.description,
    keywords: [
      "product engineering lab", "SaaS development", "AI systems", "dashboard development",
      "architectural visualization", "3D rendering", "web development", "Next.js agency",
      "digital systems", "software studio",
    ],
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      url: site.siteUrl,
      type: "website",
    },
    alternates: { canonical: site.siteUrl },
  };
}

export default function Page() {
  return (
    <>
      <VideoHero />
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
