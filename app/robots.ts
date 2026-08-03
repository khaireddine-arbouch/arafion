import type { MetadataRoute } from "next";
import { getSiteConfig } from "@/lib/site/config";

export default function robots(): MetadataRoute.Robots {
  const site = getSiteConfig();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/legislation/"],
      },
    ],
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: site.siteUrl,
  };
}
