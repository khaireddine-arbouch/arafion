import { cookies } from "next/headers";
import { type Locale, translations } from "./translations";
import { getSiteConfig, isLocaleAllowed } from "@/lib/site/config";

export async function getRequestLocale(): Promise<Locale> {
  const site = getSiteConfig();
  const jar = await cookies();
  const value = jar.get(site.localeCookieKey)?.value;
  if (value && isLocaleAllowed(value, site) && value in translations) {
    return value as Locale;
  }
  return site.defaultLocale;
}
