import Link from "next/link";
import { site } from "@/config/site";

/** Minimal 404 that points back to the localized home. */
export default function NotFound() {
  return (
    <html lang={site.defaultLocale}>
      <body
        style={{
          minHeight: "100dvh",
          display: "grid",
          placeContent: "center",
          textAlign: "center",
          gap: "1rem",
          background: "#07070d",
          color: "#edeaf2",
          fontFamily: "system-ui, sans-serif",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0 }}>404</h1>
        <p style={{ color: "#a8a2bd" }}>Page not found.</p>
        <Link
          href={`/${site.defaultLocale}`}
          style={{ color: "#7c63ff", textDecoration: "underline" }}
        >
          {site.name}
        </Link>
      </body>
    </html>
  );
}
