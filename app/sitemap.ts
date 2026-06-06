import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPaths: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1, changeFrequency: "weekly" },
    { url: `${SITE_URL}/about`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${SITE_URL}/experience`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${SITE_URL}/projects`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${SITE_URL}/contact`, lastModified: now, priority: 0.7, changeFrequency: "yearly" },
  ];

  const projectPaths: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  return [...staticPaths, ...projectPaths];
}
