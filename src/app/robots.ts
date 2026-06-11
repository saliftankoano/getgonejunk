import type { MetadataRoute } from "next";
import { business } from "@/config/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/sitemap.xml"],
        disallow: [
          "/admin/",
          "/api/",
          "/_next/",
          "/_vercel/",
          "/server-action/",
          "/search",
          "/*?*utm_*",
          "/*?*gclid=*",
          "/*?*fbclid=*",
        ],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "Bytespider",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: `${business.url}/sitemap.xml`,
    host: business.url,
  };
}
