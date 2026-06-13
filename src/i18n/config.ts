import { site } from "@/config/site";

export const locales = ["ka", "en"] as const;

export type Locale = (typeof locales)[number];

/** Default locale comes from the central brand config (Georgian). */
export const defaultLocale: Locale = site.defaultLocale;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Human-readable label for each locale, shown in the language switcher. */
export const localeLabels: Record<Locale, string> = {
  ka: "ქარ",
  en: "ENG",
};
