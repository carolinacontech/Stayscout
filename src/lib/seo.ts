import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function buildMetadata({ title, description, path, image }: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title.includes(siteConfig.brandName) ? title : `${title} | ${siteConfig.brandName}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.brandName,
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
  };
}
