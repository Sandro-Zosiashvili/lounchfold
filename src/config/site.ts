/**
 * SINGLE SOURCE OF TRUTH for all brand information.
 *
 * Change a value here and it updates everywhere across the site.
 * Never hardcode the company name, contact details or links elsewhere —
 * always import from this file.
 */

export const site = {
  /** Company name. Change this one value to rebrand the entire site. */
  name: "Webily",

  /** Short brand mark used in tight spaces (e.g. mobile header). */
  shortName: "Wb",

  /** Tagline used in metadata / structured data — one line, no period. */
  tagline: "Websites & online stores for modern brands",

  /** Primary domain (no protocol). */
  domain: "webily.ge",

  /**
   * Canonical URL used for metadata / Open Graph.
   * Reads NEXT_PUBLIC_SITE_URL when present, otherwise the production domain.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://webily.ge",

  /** Default language served when no preference is detected. */
  defaultLocale: "ka" as const,

  contact: {
    email: "hello@webily.ge",
    phone: "+995 555 00 00 00",
    /** City / country line shown in the footer & contact section. */
    location: "Tbilisi, Georgia",
  },

  social: {
    instagram: "https://instagram.com/webily.ge",
    facebook: "https://facebook.com/webily.ge",
    tiktok: "https://tiktok.com/@webily.ge",
    linkedin: "https://linkedin.com/company/webily-ge",
  },

  /** Year the company was founded — used for the footer copyright range. */
  foundedYear: 2024,
} as const;

export type Site = typeof site;

/** Convenience: the social links as an ordered, iterable list. */
export const socialLinks = [
  { key: "instagram", label: "Instagram", href: site.social.instagram },
  { key: "facebook", label: "Facebook", href: site.social.facebook },
  { key: "tiktok", label: "TikTok", href: site.social.tiktok },
  { key: "linkedin", label: "LinkedIn", href: site.social.linkedin },
] as const;
