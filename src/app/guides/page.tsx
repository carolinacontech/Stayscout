import type { Metadata } from "next";
import { guides } from "@/data/guides";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EditorialGuideCard } from "@/components/content/EditorialGuideCard";

export const metadata: Metadata = buildMetadata({
  title: "Travel Guides",
  description:
    "Editorial travel guides covering destinations, national parks, family travel, fishing and boating, and seasonal planning across the United States.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Travel Guides", href: "/guides" }]} />

      <div className="mt-4 max-w-3xl">
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">Travel guides</h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Practical, specific travel planning articles from the {siteConfig.brandName} editorial team —
          not generic destination overviews.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <EditorialGuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </div>
  );
}
