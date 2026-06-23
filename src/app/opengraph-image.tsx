import { ImageResponse } from "next/og";
import { site } from "@/config/site";

/**
 * Dynamically generated social-share / Open Graph card (1200×630).
 * Next.js automatically wires this into openGraph.images and twitter.images
 * for every route, so links to webily.ge unfurl with a branded preview.
 */
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background:
            "radial-gradient(120% 120% at 50% 0%, #1a0b2e 0%, #07070d 60%)",
          color: "#edeaf2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg width="84" height="84" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="7" fill="#12121f" />
            <path
              d="M9 24V11a2 2 0 0 1 2-2h7l5 5v10a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2Z"
              stroke="#7c63ff"
              strokeWidth="2"
            />
            <path d="M18 9v5h5" stroke="#d946ef" strokeWidth="2" />
          </svg>
          <span style={{ fontSize: 64, fontWeight: 700 }}>{site.name}</span>
        </div>

        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: 56,
            maxWidth: 900,
            backgroundImage:
              "linear-gradient(120deg, #ffffff 0%, #c9c2ff 45%, #7c63ff 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {site.tagline}
        </div>

        <div style={{ fontSize: 32, color: "#a8a2bd", marginTop: 40 }}>
          {site.domain}
        </div>
      </div>
    ),
    size,
  );
}
