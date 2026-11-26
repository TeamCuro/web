import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/register";

// All crawlers allowed, AI crawlers included (PM decision Nov 11, 2026; BE-102). Keep Cloudflare's
// managed robots.txt and AI-bot blocking off so they can't prepend Disallow rules to this file.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
