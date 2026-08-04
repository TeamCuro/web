import type { MetadataRoute } from "next";

const baseUrl = "https://getcuro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/caregivers", "/seniors", "/compare", "/partners", "/terms", "/privacy"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
