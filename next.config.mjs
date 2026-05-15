import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot
  },
  poweredByHeader: false
};

export default nextConfig;
