import type { Locale } from "@/lib/i18n/translations";

export type SiteId = "arafion" | "norex";

export type SiteSocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  id: SiteId;
  /** Formal brand for metadata / legal */
  name: string;
  /** Short brand for UI chrome and `{brand}` copy tokens */
  shortName: string;
  domain: string;
  siteUrl: string;
  email: string;
  localeCookieKey: string;
  locales: readonly Locale[];
  defaultLocale: Locale;
  tagline: string;
  description: string;
  iconPath: string;
  twitterHandle: string;
  linkedInUrl: string;
  socialLinks: SiteSocialLink[];
  sameAs: string[];
  availableLanguages: string[];
};

const ARAFION: SiteConfig = {
  id: "arafion",
  name: "Arafion",
  shortName: "Arafion",
  domain: "arafion.com",
  siteUrl: "https://arafion.com",
  email: "contact@arafion.com",
  localeCookieKey: "arafion-locale",
  locales: ["en", "fr", "tr", "ar"],
  defaultLocale: "en",
  tagline: "Product Engineering Lab",
  description:
    "Arafion is a hybrid execution studio building websites, SaaS products, AI workflows, dashboards, marketing infrastructure, and architectural visualization systems. We build the systems behind serious digital execution.",
  iconPath: "/Arafion%20Icon.png",
  twitterHandle: "@arafionhq",
  linkedInUrl: "https://www.linkedin.com/company/arafion",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/arafion",
    },
    {
      label: "Instagram @arafionhq",
      href: "https://www.instagram.com/arafionhq",
    },
    {
      label: "Instagram @arafion.architects",
      href: "https://www.instagram.com/arafion.architects/",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/arafion",
    "https://www.instagram.com/arafionhq",
    "https://www.instagram.com/arafion.architects/",
  ],
  availableLanguages: ["English", "French", "Turkish", "Arabic"],
};

const NOREX: SiteConfig = {
  id: "norex",
  name: "Norex Systems",
  shortName: "Norex",
  domain: "norexsystems.com",
  siteUrl: "https://norexsystems.com",
  email: "contact@norexsystems.com",
  localeCookieKey: "norex-locale",
  locales: ["en", "he"],
  defaultLocale: "he",
  tagline: "Product Engineering Lab",
  description:
    "Norex Systems is an Israeli product engineering lab building SaaS products, AI workflows, dashboards, websites, and digital infrastructure for teams that ship.",
  iconPath: "/norex/Norex%20Logo.png",
  twitterHandle: "@norexsystems",
  linkedInUrl: "https://www.linkedin.com/company/norexsystems",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/norexsystems",
    },
  ],
  sameAs: ["https://www.linkedin.com/company/norexsystems"],
  availableLanguages: ["English", "Hebrew"],
};

const SITES: Record<SiteId, SiteConfig> = {
  arafion: ARAFION,
  norex: NOREX,
};

function resolveSiteId(): SiteId {
  const raw =
    process.env.NEXT_PUBLIC_SITE_ID ?? process.env.SITE_ID ?? "arafion";
  if (raw === "norex") return "norex";
  return "arafion";
}

/** Build-time / runtime brand config. Defaults to Arafion when unset. */
export function getSiteConfig(): SiteConfig {
  return SITES[resolveSiteId()];
}

export function getSiteId(): SiteId {
  return resolveSiteId();
}

export function isLocaleAllowed(locale: string, site: SiteConfig = getSiteConfig()): locale is Locale {
  return (site.locales as readonly string[]).includes(locale);
}

export function getAvailableLocales(site: SiteConfig = getSiteConfig()): readonly Locale[] {
  return site.locales;
}

/** Replace source-brand tokens so shared copy can render for either site. */
export function applySiteCopy<T>(value: T, site: SiteConfig = getSiteConfig()): T {
  const json = JSON.stringify(value)
    .replaceAll("{brand}", site.shortName)
    .replaceAll("Arafion", site.shortName)
    .replaceAll("contact@arafion.com", site.email)
    .replaceAll("https://arafion.com", site.siteUrl)
    .replaceAll("arafion.com", site.domain);
  return JSON.parse(json) as T;
}
