import type { ReactNode } from "react";

/**
 * Pass-through root layout. The <html> and <body> tags live in the
 * [locale] layout so the `lang` attribute always matches the active
 * locale. Next.js renders the locale layout's html/body for all routes
 * because every route is nested under /[locale] via middleware.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
