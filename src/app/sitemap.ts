import type { MetadataRoute } from "next";
import { business } from "@/config/business";
import { locations } from "@/config/locations";
import { services } from "@/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url;
  const now = new Date();
  const staticImages = {
    home: [`${base}/hero-family.png`, `${base}/home-before-after.png`],
    about: [`${base}/about-handshake.png`, `${base}/logo.png`],
  };

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: staticImages.home,
    },
    { url: `${base}/junk-removal`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      images: staticImages.about,
    },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/junk-removal/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
