import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/register";
import { LIVE_ROUTES } from "@/lib/routes";

const baseUrl = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return LIVE_ROUTES.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
