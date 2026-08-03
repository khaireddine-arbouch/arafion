import type { Metadata } from "next";
import { getSiteConfig, type SiteConfig } from "./config";
import { isTechnicalOnlySite } from "./offerings";
import type { Locale } from "@/lib/i18n/translations";

type SeoCopy = {
  titleDefault: string;
  titleTemplate: string;
  description: string;
  ogDescription: string;
  keywords: string[];
  knowsAbout: string[];
  homeTitle: string;
  homeDescription: string;
  homeOgDescription: string;
  workTitle: string;
  workDescription: string;
  workOgTitle: string;
  servicesTitle: string;
  servicesDescription: string;
  servicesOgTitle: string;
  aboutDescription: string;
  aboutOgDescription: string;
  aboutOgTitle: string;
};

const NOREX_SEO: Record<"en" | "he", SeoCopy> = {
  en: {
    titleDefault: "Norex Systems — Product Engineering Lab in Israel",
    titleTemplate: "%s · Norex",
    description:
      "Norex Systems is an Israeli product engineering lab building SaaS products, AI workflows, dashboards, websites, and digital infrastructure for teams that ship.",
    ogDescription:
      "Software, AI systems, dashboards, and websites — engineered in Israel and built to last.",
    keywords: [
      "Norex Systems",
      "Norex",
      "product engineering Israel",
      "SaaS development Israel",
      "AI systems Israel",
      "dashboard development",
      "Next.js agency Israel",
      "software engineering studio Israel",
      "web development Tel Aviv",
      "custom software Israel",
      "AI workflows",
      "intelligence dashboards",
      "B2B software development",
      "product engineering lab",
      "מעבדת הנדסת מוצר",
      "פיתוח תוכנה ישראל",
      "פיתוח SaaS",
    ],
    knowsAbout: [
      "Software Engineering",
      "SaaS Development",
      "AI Systems",
      "Dashboard Development",
      "Web Development",
      "API Integrations",
      "Product Engineering",
      "Israel Technology",
    ],
    homeTitle: "Norex Systems — Product Engineering Lab in Israel",
    homeDescription:
      "Norex builds SaaS products, AI workflows, dashboards, websites, and digital infrastructure for Israeli teams. Serious technical execution, end to end.",
    homeOgDescription:
      "We build SaaS products, AI systems, dashboards, and websites for teams in Israel. Built and shipped.",
    workTitle: "Work",
    workDescription:
      "Norex case studies across SaaS, AI, dashboards, and websites. Production systems engineered and delivered for teams in Israel.",
    workOgTitle: "Work — Norex Case Studies",
    servicesTitle: "Services",
    servicesDescription:
      "Software engineering, websites, AI systems, dashboards, and strategy scoping — built end to end by Norex Systems in Israel.",
    servicesOgTitle: "Services — Software, AI, Dashboards & Web",
    aboutDescription:
      "Norex Systems is a product engineering lab in Israel. We design and ship SaaS products, AI workflows, dashboards, and digital infrastructure.",
    aboutOgDescription:
      "Israeli product engineering lab building software, AI systems, dashboards, and websites.",
    aboutOgTitle: "About Norex — Product Engineering Lab",
  },
  he: {
    titleDefault: "Norex Systems — מעבדת הנדסת מוצר בישראל",
    titleTemplate: "%s · Norex",
    description:
      "Norex Systems היא מעבדת הנדסת מוצר בישראל. אנחנו בונים מוצרי SaaS, מערכות AI, דשבורדים, אתרים ותשתיות דיגיטליות לצוותים שמשחררים לפרודקשן.",
    ogDescription:
      "תוכנה, מערכות AI, דשבורדים ואתרים — מתוכננים בישראל ונבנים להחזיק.",
    keywords: [
      "Norex Systems",
      "Norex",
      "מעבדת הנדסת מוצר",
      "פיתוח תוכנה ישראל",
      "פיתוח SaaS ישראל",
      "מערכות AI ישראל",
      "פיתוח דשבורדים",
      "סוכנות Next.js ישראל",
      "הנדסת תוכנה ישראל",
      "פיתוח אתרים תל אביב",
      "תוכנה מותאמת ישראל",
      "זרימות עבודה AI",
      "דשבורדי מודיעין",
      "פיתוח תוכנה B2B",
      "product engineering Israel",
      "SaaS development Israel",
    ],
    knowsAbout: [
      "הנדסת תוכנה",
      "פיתוח SaaS",
      "מערכות AI",
      "פיתוח דשבורדים",
      "פיתוח אתרים",
      "אינטגרציות API",
      "הנדסת מוצר",
      "טכנולוגיה בישראל",
    ],
    homeTitle: "Norex Systems — מעבדת הנדסת מוצר בישראל",
    homeDescription:
      "Norex בונה מוצרי SaaS, זרימות AI, דשבורדים, אתרים ותשתיות דיגיטליות לצוותים בישראל. ביצוע טכני רציני מקצה לקצה.",
    homeOgDescription:
      "אנחנו בונים מוצרי SaaS, מערכות AI, דשבורדים ואתרים לצוותים בישראל. נבנה ונמסר.",
    workTitle: "עבודות",
    workDescription:
      "תיקי מקרה של Norex ב־SaaS, AI, דשבורדים ואתרים. מערכות פרודקשן שתוכננו ונמסרו לצוותים בישראל.",
    workOgTitle: "עבודות — תיקי מקרה של Norex",
    servicesTitle: "שירותים",
    servicesDescription:
      "הנדסת תוכנה, אתרים, מערכות AI, דשבורדים והגדרת היקף אסטרטגית — מקצה לקצה עם Norex Systems בישראל.",
    servicesOgTitle: "שירותים — תוכנה, AI, דשבורדים ואתרים",
    aboutDescription:
      "Norex Systems היא מעבדת הנדסת מוצר בישראל. אנחנו מתכננים ומשחררים מוצרי SaaS, זרימות AI, דשבורדים ותשתיות דיגיטליות.",
    aboutOgDescription:
      "מעבדת הנדסת מוצר ישראלית שבונה תוכנה, מערכות AI, דשבורדים ואתרים.",
    aboutOgTitle: "אודות Norex — מעבדת הנדסת מוצר",
  },
};

function localeKey(locale: Locale): "en" | "he" {
  return locale === "he" ? "he" : "en";
}

export function getNorexSeo(locale: Locale = "he"): SeoCopy {
  return NOREX_SEO[localeKey(locale)];
}

/** Open Graph / HTML locale codes per site + UI locale. */
export function getOgLocale(locale: Locale, site: SiteConfig = getSiteConfig()): string {
  if (site.id === "norex") {
    return locale === "he" ? "he_IL" : "en_IL";
  }
  switch (locale) {
    case "fr":
      return "fr_FR";
    case "tr":
      return "tr_TR";
    case "ar":
      return "ar_MA";
    case "he":
      return "he_IL";
    case "en":
      return "en_US";
    default: {
      const _exhaustive: never = locale;
      return _exhaustive;
    }
  }
}

export function getHreflangAlternates(
  path: string,
  site: SiteConfig = getSiteConfig(),
): Metadata["alternates"] {
  const normalized = path === "/" ? "" : path.replace(/\/$/, "");
  const languages: Record<string, string> = {};
  for (const locale of site.locales) {
    const hreflang =
      site.id === "norex"
        ? locale === "he"
          ? "he-IL"
          : "en-IL"
        : locale;
    languages[hreflang] = `${site.siteUrl}${normalized}`;
  }
  languages["x-default"] = `${site.siteUrl}${normalized}`;
  return {
    canonical: `${site.siteUrl}${normalized || "/"}`,
    languages,
  };
}

export function buildRootMetadata(site: SiteConfig = getSiteConfig()): Metadata {
  if (site.id === "norex") {
    const seo = getNorexSeo(site.defaultLocale);
    return {
      metadataBase: new URL(site.siteUrl),
      title: {
        default: seo.titleDefault,
        template: seo.titleTemplate,
      },
      description: seo.description,
      keywords: seo.keywords,
      authors: [{ name: site.name, url: site.siteUrl }],
      creator: site.name,
      publisher: site.name,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        type: "website",
        locale: getOgLocale(site.defaultLocale, site),
        alternateLocale: site.locales
          .filter((l) => l !== site.defaultLocale)
          .map((l) => getOgLocale(l, site)),
        url: site.siteUrl,
        siteName: site.name,
        title: seo.titleDefault,
        description: seo.ogDescription,
        images: [
          {
            url: "/background-clean.png",
            width: 1513,
            height: 747,
            alt: seo.titleDefault,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: seo.titleDefault,
        description: seo.ogDescription,
        images: ["/background-clean.png"],
        creator: site.twitterHandle,
        site: site.twitterHandle,
      },
      icons: {
        icon: [{ url: site.iconPath, type: "image/png" }],
        apple: [{ url: site.iconPath, type: "image/png" }],
        shortcut: site.iconPath,
      },
      category: "technology",
      alternates: getHreflangAlternates("/"),
    };
  }

  const titleDefault = `${site.name} — ${site.tagline}`;
  return {
    metadataBase: new URL(site.siteUrl),
    title: {
      default: titleDefault,
      template: `%s · ${site.shortName}`,
    },
    description: site.description,
    keywords: [
      "product engineering",
      "SaaS development",
      "AI workflows",
      "dashboard development",
      "web development agency",
      "architectural visualization",
      "3D rendering",
      "Next.js development",
      "software engineering studio",
      "digital systems",
      "marketing infrastructure",
      site.shortName,
    ],
    authors: [{ name: site.name, url: site.siteUrl }],
    creator: site.name,
    publisher: site.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: site.siteUrl,
      siteName: site.name,
      title: titleDefault,
      description:
        "We build websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems for businesses that need serious digital execution.",
      images: [
        {
          url: "/background-clean.png",
          width: 1513,
          height: 747,
          alt: titleDefault,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleDefault,
      description:
        "We build websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems.",
      images: ["/background-clean.png"],
      creator: site.twitterHandle,
      site: site.twitterHandle,
    },
    icons: {
      icon: [{ url: site.iconPath, type: "image/png" }],
      apple: [{ url: site.iconPath, type: "image/png" }],
      shortcut: site.iconPath,
    },
    category: "technology",
    alternates: { canonical: site.siteUrl },
  };
}

export function buildOrganizationJsonLd(
  site: SiteConfig = getSiteConfig(),
  locale: Locale = site.defaultLocale,
) {
  const technical = isTechnicalOnlySite(site.id);
  const norex = site.id === "norex" ? getNorexSeo(locale) : null;

  return {
    "@context": "https://schema.org",
    "@type": technical ? ["Organization", "ProfessionalService"] : "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: site.siteUrl,
    logo: `${site.siteUrl}${site.iconPath}`,
    image: `${site.siteUrl}/background-clean.png`,
    description: norex?.description ?? site.description,
    email: site.email,
    sameAs: site.sameAs,
    ...(site.id === "norex"
      ? {
          areaServed: {
            "@type": "Country",
            name: "Israel",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "IL",
          },
        }
      : {}),
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      contactType: "customer service",
      availableLanguage: site.availableLanguages,
      ...(site.id === "norex" ? { areaServed: "IL" } : {}),
    },
    knowsAbout: norex?.knowsAbout ?? [
      "Software Engineering",
      "SaaS Development",
      "AI Systems",
      "Dashboard Development",
      "Architectural Visualization",
      "3D Rendering",
      "Marketing Infrastructure",
      "Web Development",
    ],
  };
}

export function buildWebsiteJsonLd(
  site: SiteConfig = getSiteConfig(),
  locale: Locale = site.defaultLocale,
) {
  const norex = site.id === "norex" ? getNorexSeo(locale) : null;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: site.shortName,
    url: site.siteUrl,
    description:
      norex?.description ??
      "Product engineering lab building digital systems, AI products, and visual sales assets.",
    inLanguage: site.locales,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.siteUrl,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.siteUrl}/work?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
