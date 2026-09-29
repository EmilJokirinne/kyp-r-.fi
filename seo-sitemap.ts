import type { MetadataRoute } from "next";
import { site } from "@/site";

/** Tuottaa tiedoston /sitemap.xml. Lisää uudet sivut tähän, kun niitä luodaan. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
