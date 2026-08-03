import type { MetadataRoute } from "next";
import { ALL_PORTFOLIO_PROJECTS } from "@/lib/map-projects";
import { getPublishedPosts } from "@/data/arafion-data/blog-posts";
import { getSiteConfig } from "@/lib/site/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteConfig();
  const BASE = site.siteUrl;
  const now = new Date();

  const languages =
    site.id === "norex"
      ? {
          "he-IL": BASE,
          "en-IL": BASE,
          "x-default": BASE,
        }
      : undefined;

  const withLang = (
    path: string,
    entry: Omit<MetadataRoute.Sitemap[number], "url">,
  ): MetadataRoute.Sitemap[number] => {
    const url = path === "/" ? BASE : `${BASE}${path}`;
    if (!languages) return { url, ...entry };
    const langUrls = Object.fromEntries(
      Object.entries(languages).map(([code]) => [
        code,
        path === "/" ? BASE : `${BASE}${path}`,
      ]),
    );
    return {
      url,
      ...entry,
      alternates: { languages: langUrls },
    };
  };

  const staticRoutes: MetadataRoute.Sitemap = [
    withLang("/", {
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    }),
    withLang("/services", {
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
    withLang("/work", {
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    }),
    withLang("/about", {
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
    withLang("/blog", {
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
    withLang("/contact", {
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    }),
  ];

  const workRoutes: MetadataRoute.Sitemap = ALL_PORTFOLIO_PROJECTS.map((p) =>
    withLang(`/work/${p.slug}`, {
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  const blogRoutes: MetadataRoute.Sitemap = getPublishedPosts().map((post) =>
    withLang(`/blog/${post.slug}`, {
      lastModified: new Date(post.publishedAt),
      changeFrequency: "yearly",
      priority: 0.65,
    }),
  );

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
