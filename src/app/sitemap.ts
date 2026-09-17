import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { caseStudies } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/industries",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const workRoutes = caseStudies.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...workRoutes];
}
