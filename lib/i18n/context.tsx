"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type Locale, type Translations, translations } from "./translations";
import { applySiteCopy, getSiteConfig, isLocaleAllowed } from "@/lib/site/config";
import { applyNorexMarketCopy } from "@/lib/site/geography";
import {
  filterServiceCategories,
  isBlogCategoryAllowed,
  isTechnicalOnlySite,
} from "@/lib/site/offerings";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
}

const site = getSiteConfig();

const NOREX_API_FEATURE: Record<string, { title: string; desc: string }> = {
  en: {
    title: "API Integrations",
    desc: "System connections, data pipelines, and integration infrastructure built for reliability and scale.",
  },
  fr: {
    title: "Intégrations API",
    desc: "Connexions système, pipelines de données et infrastructure d'intégration conçus pour la fiabilité et l'échelle.",
  },
  tr: {
    title: "API Entegrasyonları",
    desc: "Güvenilirlik ve ölçek için kurulan sistem bağlantıları, veri hatları ve entegrasyon altyapısı.",
  },
  ar: {
    title: "تكاملات API",
    desc: "اتصالات أنظمة وخطوط بيانات وبنية تكامل مبنية للاستقرار والتوسع.",
  },
  he: {
    title: "אינטגרציות API",
    desc: "חיבורי מערכות, צינורות נתונים ותשתיות אינטגרציה שנבנות ליציבות ולסקייל.",
  },
};

function brandify(locale: Locale): Translations {
  let t = applySiteCopy(translations[locale] ?? translations.en, site);
  t = applyNorexMarketCopy(t, locale);

  if (!isTechnicalOnlySite(site.id)) return t;

  const apiFeature = NOREX_API_FEATURE[locale] ?? NOREX_API_FEATURE.en;
  const categories = filterServiceCategories(t.services.categories).map((c, index) => ({
    ...c,
    num: String(index + 1).padStart(2, "0"),
  }));

  return {
    ...t,
    hero: {
      ...t.hero,
      features: t.hero.features.map((feature, index) =>
        index === 3 ? apiFeature : feature,
      ),
    },
    services: {
      ...t.services,
      categories,
    },
    sections: {
      ...t.sections,
      blog: {
        ...t.sections.blog,
        subheading:
          locale === "he"
            ? "אנחנו מפרסמים איך חושבים על ארכיטקטורת תוכנה, זרימות AI, דשבורדים ומערכות דיגיטליות שנשלחות לייצור."
            : "We publish how we think through software architecture, AI workflows, dashboards, and shipping production systems.",
        categories: t.sections.blog.categories.filter(
          (c) => c.slug === "all" || isBlogCategoryAllowed(c.slug, site.id),
        ),
      },
    },
  };
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: site.defaultLocale,
  t: brandify(site.defaultLocale),
  setLocale: () => {},
});

function applyLocale(l: Locale) {
  if (typeof document === "undefined") return;
  const dir = translations[l]?.dir ?? "ltr";
  document.documentElement.setAttribute("lang", l);
  document.documentElement.setAttribute("dir", dir);
  document.cookie = `${site.localeCookieKey}=${l}; path=/; max-age=31536000; samesite=lax`;
}

/**
 * `initialLocale` must come from the server cookie (`getRequestLocale`) so SSR
 * HTML and the first client paint share the same copy — no English flash on
 * Hebrew Norex (or the reverse).
 */
export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const startLocale = isLocaleAllowed(initialLocale, site)
    ? initialLocale
    : site.defaultLocale;
  const [locale, setLocaleState] = useState<Locale>(startLocale);

  useEffect(() => {
    applyLocale(locale);
    try {
      localStorage.setItem(site.localeCookieKey, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    if (!isLocaleAllowed(l, site)) return;
    setLocaleState(l);
  }, []);

  const t = useMemo(() => brandify(locale), [locale]);

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
