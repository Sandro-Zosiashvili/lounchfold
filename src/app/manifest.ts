import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/**
 * PWA / installability manifest. Also feeds the browser theme color and
 * gives search engines a consistent app name + icon set.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.tagline,
    start_url: `/${site.defaultLocale}`,
    display: "standalone",
    background_color: "#07070d",
    theme_color: "#07070d",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
    ],
  };
}
