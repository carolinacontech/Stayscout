import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { usStates } from "@/data/usStates";
import { destinations } from "@/data/destinations";
import { properties } from "@/data/properties";
import { stayTypes } from "@/data/stayTypes";
import { tripIdeas } from "@/data/tripIdeas";
import { guides } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/destinations",
    "/stays",
    "/stay-types",
    "/trip-ideas",
    "/guides",
    "/about",
    "/contact",
    "/disclosure",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const stateRoutes = usStates.map((state) => ({
    url: `${siteConfig.url}/destinations/${state.slug}`,
    lastModified: new Date(),
  }));

  const cityRoutes = destinations.map((destination) => ({
    url: `${siteConfig.url}/destinations/${destination.stateSlug}/${destination.slug}`,
    lastModified: new Date(),
  }));

  const stayTypeRoutes = stayTypes.map((type) => ({
    url: `${siteConfig.url}/stay-types/${type.slug}`,
    lastModified: new Date(),
  }));

  const propertyRoutes = properties
    .filter((p) => p.published)
    .map((property) => ({
      url: `${siteConfig.url}/stays/${property.slug}`,
      lastModified: new Date(property.lastVerified),
    }));

  const tripIdeaRoutes = tripIdeas.map((idea) => ({
    url: `${siteConfig.url}/trip-ideas/${idea.slug}`,
    lastModified: new Date(),
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedDate),
  }));

  return [
    ...staticRoutes,
    ...stateRoutes,
    ...cityRoutes,
    ...stayTypeRoutes,
    ...propertyRoutes,
    ...tripIdeaRoutes,
    ...guideRoutes,
  ];
}
