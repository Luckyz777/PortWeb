import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/PortWeb" : undefined,
  assetPrefix: isGitHubPages ? "/PortWeb/" : undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isGitHubPages
  },
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot
  },
  poweredByHeader: false
};

export default nextConfig;
