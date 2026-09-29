import type { MetadataRoute } from "next";
import { site } from "@/site";

/** Tuottaa tiedoston /robots.txt */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
