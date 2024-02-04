import { MetadataRoute } from "next";
import PROJECTJSON from "@/util/JSON/projects.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://harsh-portfolio-flax.vercel.app/";
  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...PROJECTJSON.map((item) => ({
      url: `${siteUrl}/projects/${item.title}`,
      lastModified: new Date(),
      priority: 0.5,
    })),
  ];
}
