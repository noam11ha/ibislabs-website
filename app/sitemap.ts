import type { MetadataRoute } from "next";

// /investors is deliberately left out: it is shared by direct link only.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://ibislabs.io", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://ibislabs.io/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://ibislabs.io/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
