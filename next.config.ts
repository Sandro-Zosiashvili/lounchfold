import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // Lets every *.module.scss resolve `@use "tokens"` / `@use "mixins"`
    // from src/styles without long relative paths.
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;