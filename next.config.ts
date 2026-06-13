import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
  },
  sassOptions: {
    // Lets every *.module.scss resolve `@use "tokens"` / `@use "mixins"`
    // from src/styles without long relative paths. `loadPaths` is the modern
    // Dart Sass option (the older `includePaths` is ignored by this loader).
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;
