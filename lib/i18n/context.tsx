"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { type Locale, type Translations, translations } from "./translations";

const STORAGE_KEY = "arafion-locale";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  t: translations.en,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && stored in translations) {
        return stored;
      }
    } catch {}
    return "en";
  });

  useEffect(() => {
    applyLocale(locale);
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    setLocaleState(l);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Mutates the <html> element to set lang + dir without a full navigation. */
function applyLocale(l: Locale) {
  if (typeof document === "undefined") return;
  const dir = translations[l].dir;
  document.documentElement.setAttribute("lang", l);
  document.documentElement.setAttribute("dir", dir);
  document.cookie = `${STORAGE_KEY}=${l}; path=/; max-age=31536000; samesite=lax`;
}
