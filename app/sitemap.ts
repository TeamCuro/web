import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/register";

const baseUrl = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/caregivers", "/seniors", "/compare", "/partners", "/pricing", "/contact", "/terms", "/privacy"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
