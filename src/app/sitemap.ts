import { getAllSlugs } from "@/lib/projects";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = getAllSlugs().map((slug) => ({
    url: `https://antoinedeveyrac.fr/project/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://antoinedeveyrac.fr", lastModified: new Date() },
    { url: "https://antoinedeveyrac.fr/resume", lastModified: new Date() },
    {
      url: "https://antoinedeveyrac.fr/mentions-legales",
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}
