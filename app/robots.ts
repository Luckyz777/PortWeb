import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "GPTBot",
    "ChatGPT-User",
    "Google-Extended",
    "CCBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Bytespider",
    "Amazonbot",
    "Applebot-Extended",
  ];

  return {
    rules: [
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  };
}
