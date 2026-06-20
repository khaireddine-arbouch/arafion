import { cookies } from "next/headers";
import { type Locale, translations } from "./translations";

const STORAGE_KEY = "arafion-locale";

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(STORAGE_KEY)?.value;
  if (value && value in translations) return value as Locale;
  return "en";
}
