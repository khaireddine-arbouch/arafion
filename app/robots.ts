import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/legislation/"],
      },
    ],
    sitemap: "https://arafion.com/sitemap.xml",
    host: "https://arafion.com",
  };
}
