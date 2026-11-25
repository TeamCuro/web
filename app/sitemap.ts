import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/register";
import { ROUTE_LAST_MODIFIED } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(ROUTE_LAST_MODIFIED).map(([route, date]) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(date),
  }));
}
