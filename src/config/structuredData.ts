/**
 * Schema.org structured data (JSON-LD) for the site.
 *
 * This is the single most important signal for winning the brand search
 * "webily" on Google — it tells search engines the canonical name, logo,
 * social profiles and contact details, and powers rich results such as the
 * knowledge panel and sitelinks. All values flow from the central site config.
 */
import { site, socialLinks } from "@/config/site";
import type { Locale } from "@/i18n/config";

export function buildJsonLd(locale: Locale, description: string) {
  const orgId = `${site.url}/#organization`;
  const webId = `${site.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        alternateName: site.domain,
        legalName: site.name,
        url: site.url,
        logo: `${site.url}/logo.svg`,
        image: `${site.url}/logo.svg`,
        description,
        email: site.contact.email,
        telephone: site.contact.phone,
        foundingDate: String(site.foundedYear),
        sameAs: socialLinks.map((link) => link.href),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tbilisi",
          addressCountry: "GE",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: site.contact.email,
          telephone: site.contact.phone,
          contactType: "customer support",
          areaServed: "GE",
          availableLanguage: ["ka", "en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": webId,
        url: site.url,
        name: site.name,
        alternateName: site.domain,
        description,
        inLanguage: locale === "ka" ? "ka-GE" : "en-US",
        publisher: { "@id": orgId },
      },
    ],
  };
}
