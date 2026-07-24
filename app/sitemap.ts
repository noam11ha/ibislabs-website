import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-24");
  return [
    { url: "https://ibislabs.io", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://ibislabs.io/privacy-policy", lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: "https://ibislabs.io/consumer-health-data-privacy-policy", lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: "https://ibislabs.io/terms", lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
