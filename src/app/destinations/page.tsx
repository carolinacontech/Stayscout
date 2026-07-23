import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { usStates, usRegions } from "@/data/usStates";
import { getTrendingDestinations } from "@/data/destinations";
import { getAllStateSlugsWithGuides } from "@/data/states";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DestinationCard } from "@/components/content/DestinationCard";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = buildMetadata({
  title: "Destinations",
  description:
    "Browse handpicked US vacation rental destinations by state and region, from beach towns to mountain gateways and national park destinations.",
  path: "/destinations",
});

export default function DestinationsPage() {
  const trending = getTrendingDestinations();
  const guidedSlugs = new Set(getAllStateSlugsWithGuides());

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Destinations", href: "/destinations" }]} />

      <div className="mt-4 max-w-3xl">
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">
          Explore destinations across the United States
        </h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          {siteConfig.brandName} focuses on a curated set of destinations rather than trying to cover
          every US city. Below, browse our currently trending picks, or explore by state and region to
          find handpicked stays wherever your trip is headed.
        </p>
      </div>

      <section className="mt-12">
        <SectionHeading eyebrow="Trending Now" title="Popular destinations this season" />
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {trending.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Browse by Region" title="Every state, organized by region" />
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {usRegions.map((region) => {
            const statesInRegion = usStates.filter((s) => s.region === region);
            return (
              <div key={region} className="rounded-lg border border-border bg-white p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ocean">{region}</h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {statesInRegion.map((state) => (
                    <li key={state.slug} className="flex items-center gap-2">
                      <Link href={`/destinations/${state.slug}`} className="text-sm text-charcoal hover:text-navy hover:underline">
                        {state.name}
                      </Link>
                      {guidedSlugs.has(state.slug) && (
                        <Badge tone="outline" className="text-[10px]">
                          Full guide
                        </Badge>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
