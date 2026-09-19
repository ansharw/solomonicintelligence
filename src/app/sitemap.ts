import type { MetadataRoute } from "next";
import { capabilities } from "@/data/capabilities";
import { research } from "@/data/research";

const siteUrl = "https://www.solomonicintelligence.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/platform",
    "/capabilities",
    "/route-intelligence",
    "/institutional-systems",
    "/enterprise",
    "/government",
    "/research",
    "/security",
    "/company",
    "/founder",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const capabilityRoutes = capabilities.map((c) => ({
    url: `${siteUrl}/capabilities/${c.slug}`,
    lastModified: new Date(),
  }));

  const researchRoutes = research.map((r) => ({
    url: `${siteUrl}/research/${r.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...capabilityRoutes, ...researchRoutes];
}
