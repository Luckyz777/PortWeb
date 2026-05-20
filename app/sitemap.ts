import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.GITHUB_PAGES === "true"
  ? "https://luckyz777.github.io/PortWeb"
  : "https://luckyz777.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
