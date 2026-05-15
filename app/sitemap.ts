import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.GITHUB_PAGES === "true"
  ? "https://luckyz777.github.io/PortWeb"
  : "https://luckyz777.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
