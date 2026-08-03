import type { Locale } from "./translations";

export interface LocaleTypography {
  sans: string;
  display: string;
}

const LATIN_SANS = "var(--font-inter), ui-sans-serif, system-ui, sans-serif";
const LATIN_DISPLAY = '"Neue Montreal", var(--font-inter), ui-sans-serif, system-ui, sans-serif';
const ARABIC_SANS = 'var(--font-cairo), "Cairo", system-ui, sans-serif';
const ARABIC_DISPLAY = 'var(--font-cairo), "Cairo", system-ui, sans-serif';
const HEBREW_SANS = 'var(--font-heebo), "Heebo", system-ui, sans-serif';
const HEBREW_DISPLAY = 'var(--font-heebo), "Heebo", system-ui, sans-serif';

export const LOCALE_TYPOGRAPHY: Record<Locale, LocaleTypography> = {
  en: { sans: LATIN_SANS, display: LATIN_DISPLAY },
  fr: { sans: LATIN_SANS, display: LATIN_DISPLAY },
  tr: { sans: LATIN_SANS, display: LATIN_DISPLAY },
  ar: { sans: ARABIC_SANS, display: ARABIC_DISPLAY },
  he: { sans: HEBREW_SANS, display: HEBREW_DISPLAY },
};

export function getLocaleTypography(locale: Locale): LocaleTypography {
  return LOCALE_TYPOGRAPHY[locale] ?? LOCALE_TYPOGRAPHY.en;
}
