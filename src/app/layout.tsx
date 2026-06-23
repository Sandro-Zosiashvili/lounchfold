import type { ReactNode } from "react";
import type { Metadata } from "next";
import { site } from "@/config/site";

/** Base URL so every relative OG/Twitter image resolves to an absolute URL. */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

/**
 * Pass-through root layout. The <html> and <body> tags live in the
 * [locale] layout so the `lang` attribute always matches the active
 * locale. Next.js renders the locale layout's html/body for all routes
 * because every route is nested under /[locale] via middleware.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
