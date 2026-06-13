import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === site.defaultLocale ? 1 : 0.8,
  }));
}
