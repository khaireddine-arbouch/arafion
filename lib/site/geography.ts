import type { Locale } from "@/lib/i18n/translations";
import type { Translations } from "@/lib/i18n/translations";
import { getSiteConfig, type SiteId } from "./config";

/** Tel Aviv — default pin for Norex market framing. */
export const ISRAEL_COORDS = { lat: 32.0853, lng: 34.7818 } as const;

export function isIsraelOnlySite(siteId: SiteId = getSiteConfig().id): boolean {
  return siteId === "norex";
}

export function homeMarketCountry(): string {
  return "Israel";
}

export function homeMarketLabel(locale: Locale = "en"): string {
  return locale === "he" ? "ישראל" : "Israel";
}

/** Slight jitter so stacked Israel pins remain clickable on the map. */
export function israelPinCoords(seed: number): { lat: number; lng: number } {
  const n = Math.abs(seed) % 17;
  return {
    lat: ISRAEL_COORDS.lat + ((n % 5) - 2) * 0.045,
    lng: ISRAEL_COORDS.lng + ((Math.floor(n / 5) % 4) - 1.5) * 0.05,
  };
}

/**
 * Rewrite homepage geography copy so Norex only mentions Israel.
 * Arafion keeps the multi-market framing unchanged.
 */
export function applyNorexMarketCopy(
  t: Translations,
  locale: Locale,
): Translations {
  if (!isIsraelOnlySite()) return t;

  if (locale === "he") {
    return {
      ...t,
      hero: {
        ...t.hero,
        features: t.hero.features.map((feature) =>
          feature.desc.includes("מרוקו") ||
          feature.desc.includes("סינגפור") ||
          feature.title.includes("חוצת")
            ? {
                title: "הנדסה מקומית",
                desc: "תוכנה שנבנית לצוותים בישראל.",
              }
            : feature,
        ),
      },
      about: {
        ...t.about,
        body1: t.about.body1
          .replace("לחברות שפועלות בין שווקים", "לחברות שבונות בישראל")
          .replace("בין שווקים", "בישראל"),
        body2: "צוברים ערך לאורך זמן. מבוססים בישראל, ומשרתים צוותים מקומיים.",
      },
      globe: {
        ...t.globe,
        eyebrow: "פרויקטים",
        heading: "בונים בישראל.",
        subheading:
          "כל נקודה היא התקשרות חיה או שנמסרה. לחצו על סמן כדי לראות פרטי פרויקט.",
        regionLabels: Object.fromEntries(
          Object.keys(t.globe.regionLabels).map((key) => [
            key,
            "ישראל — הנדסת מוצר",
          ]),
        ) as Translations["globe"]["regionLabels"],
      },
    };
  }

  return {
    ...t,
    hero: {
      ...t.hero,
      features: t.hero.features.map((feature) =>
        feature.title === "Cross-Market Engineering" ||
        feature.desc.includes("Morocco") ||
        feature.desc.includes("Singapore")
          ? {
              title: "Local Engineering",
              desc: "Software built for teams in Israel.",
            }
          : feature,
      ),
    },
    about: {
      ...t.about,
      body1: t.about.body1.replace(
        "for companies moving across markets",
        "for companies building in Israel",
      ),
      body2: "compound over time. Based in Israel, serving local teams.",
    },
    globe: {
      ...t.globe,
      eyebrow: "Deployed projects",
      heading: "Building in Israel.",
      subheading:
        "Each dot is a live or delivered engagement. Click any marker to see project details.",
      regionLabels: Object.fromEntries(
        Object.keys(t.globe.regionLabels).map((key) => [
          key,
          "Israel — Product engineering",
        ]),
      ) as Translations["globe"]["regionLabels"],
    },
  };
}

/** Replace non-Israel place names in free text shown on Norex. */
export function scrubNonIsraelPlaces(
  text: string,
  locale: Locale = "en",
): string {
  if (!isIsraelOnlySite() || !text) return text;

  const israel = homeMarketLabel(locale);
  const israeli = locale === "he" ? "ישראלי" : "Israeli";

  let out = text;
  const pairs: [RegExp, string][] = [
    [/\bMoroccan\b/gi, israeli],
    [/\bTurkish\b/gi, israeli],
    [/\bEuropean\b/gi, israeli],
    [/\bFrench\b/gi, israeli],
    [/\bGerman\b/gi, israeli],
    [/\bIndian\b/gi, israeli],
    [/\bBrazilian\b/gi, israeli],
    [/\bBritish\b/gi, israeli],
    [/\bSingaporean\b/gi, israeli],
    [/\bMorocco\b/gi, israel],
    [/\bTürkiye\b/gi, israel],
    [/\bTurkiye\b/gi, israel],
    [/\bTurkey\b/gi, israel],
    [/\bSingapore\b/gi, israel],
    [/\bFrance\b/gi, israel],
    [/\bGermany\b/gi, israel],
    [/\bIndia\b/gi, israel],
    [/\bBrazil\b/gi, israel],
    [/\bUnited Kingdom\b/gi, israel],
    [/\bUnited States\b/gi, israel],
    [/\bCanada\b/gi, israel],
    [/\bEurope\b/gi, israel],
    [/\bMENA\b/gi, israel],
    [/\bAPAC\b/gi, israel],
    [/\bAsia Pacific\b/gi, israel],
    [/\bInternational\b/gi, israel],
    [/\bGlobal\b/gi, israel],
    [/מרוקו/g, israel],
    [/טורקיה/g, israel],
    [/סינגפור/g, israel],
    [/צרפת/g, israel],
    [/גרמניה/g, israel],
    [/הודו/g, israel],
    [/ברזיל/g, israel],
    [/אירופה/g, israel],
    [/בינלאומי/g, israel],
    [/גלובלי/g, israel],
  ];

  for (const [pattern, replacement] of pairs) {
    out = out.replace(pattern, replacement);
  }
  return out;
}
