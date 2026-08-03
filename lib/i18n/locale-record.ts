import type { Locale } from "./translations";

/** Locale content maps may omit locales; getters should fall back to `en`. */
export type LocaleRecord<T> = Partial<Record<Locale, T>> & { en: T };
