import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Plane, Car } from "lucide-react";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { getPropertiesByCity } from "@/data/properties";
import { getGuideBySlug } from "@/data/guides";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, touristDestinationSchema, jsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { PropertyGrid } from "@/components/content/PropertyGrid";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { RelatedDestinations } from "@/components/content/RelatedDestinations";
import { EditorialGuideCard } from "@/components/content/EditorialGuideCard";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";
import { stayTypes } from "@/data/stayTypes";

export function generateStaticParams() {
  return destinations.map((d) => ({ state: d.stateSlug, city: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const destination = getDestinationBySlug(city);
  if (!destination) return {};

  return buildMetadata({
    title: `Best Vacation Rentals in ${destination.city}, ${destination.state}`,
    description: destination.metaDescription,
    path: `/destinations/${destination.stateSlug}/${destination.slug}`,
    image: destination.heroImage.src,
  });
}

export default async function CityPage({ params }: { params: Promise<{ state: string; city: string }> }) {
  const { state, city } = await params;
  const destination = getDestinationBySlug(city);
  if (!destination || destination.stateSlug !== state) notFound();

  const stays = getPropertiesByCity(destination.slug);
  const relatedDestinations = destinations.filter((d) => destination.relatedDestinations.includes(d.slug));
  const relatedGuides = destination.relatedGuides
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const breadcrumbItems = [
    { name: "Destinations", href: "/destinations" },
    { name: destination.state, href: `/destinations/${destination.stateSlug}` },
    { name: destination.city, href: `/destinations/${destination.stateSlug}/${destination.slug}` },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbSchema(breadcrumbItems.map((i) => ({ name: i.name, url: `${siteConfig.url}${i.href}` })))
          )!,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(touristDestinationSchema(destination))! }}
      />

      <section className="relative">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image
            src={destination.heroImage.src}
            alt={destination.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <h1 className="font-serif-heading text-4xl font-semibold text-white sm:text-5xl">
              {destination.city}, {destination.state}
            </h1>
            <p className="mt-2 max-w-xl text-base text-white/90">{destination.tagline}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-charcoal/80 lg:max-w-3xl">
          {destination.introduction.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-10 grid grid-cols-2 gap-4 rounded-lg border border-border bg-white p-6 sm:grid-cols-4">
          {destination.quickFacts.map((fact) => (
            <div key={fact.label}>
              <p className="text-xs font-medium uppercase tracking-wide text-ocean">{fact.label}</p>
              <p className="mt-1 text-sm font-medium text-charcoal">{fact.value}</p>
            </div>
          ))}
        </section>

        {destination.neighborhoods.length > 0 && (
          <section className="mt-14">
            <SectionHeading eyebrow="Where to Stay" title="Neighborhoods and nearby areas" />
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {destination.neighborhoods.map((n) => (
                <div key={n.name} className="rounded-lg border border-border bg-white p-5">
                  <h3 className="font-semibold text-navy">{n.name}</h3>
                  <p className="mt-1 text-sm text-charcoal/75">{n.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14">
          <SectionHeading
            eyebrow="Featured Stays"
            title={`Handpicked stays in ${destination.city}`}
            action={
              <Link
                href={`/stays?state=${destination.stateSlug}`}
                className="text-sm font-semibold text-terracotta hover:underline"
              >
                See all {destination.state} stays →
              </Link>
            }
          />
          <div className="mt-6">
            <PropertyGrid properties={stays} emptyStateHref={`/stays?state=${destination.stateSlug}`} />
          </div>
          <AffiliateDisclosure className="mt-4" />
        </section>

        <section className="mt-14">
          <SectionHeading eyebrow="Stay Categories" title="Browse by stay type" />
          <div className="mt-6 flex flex-wrap gap-2">
            {destination.stayCategories.map((category) => {
              const type = stayTypes.find((t) => t.slug === category);
              return (
                <Link
                  key={category}
                  href={`/stay-types/${category}`}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy hover:border-ocean hover:text-ocean"
                >
                  {type?.name ?? category}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-navy">Local attractions</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {destination.attractions.map((a) => (
                <li key={a.name} className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{a.name}</p>
                    <p className="text-sm text-charcoal/70">{a.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-navy">Planning your trip</h2>
            <div className="mt-4 flex flex-col gap-4">
              <div>
                <p className="text-sm font-semibold text-charcoal">Best time to visit</p>
                <p className="text-sm text-charcoal/70">{destination.bestTimeToVisit}</p>
              </div>
              <div className="flex gap-3">
                <Car className="mt-0.5 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-charcoal">Getting there</p>
                  <p className="text-sm text-charcoal/70">{destination.gettingThere}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Typical trip styles</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {destination.tripStyles.map((style) => (
                    <Badge key={style} tone="outline">
                      {style}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading eyebrow="Map" title="Where it's located" />
          <div className="mt-6 flex aspect-[16/9] items-center justify-center rounded-lg border border-dashed border-border bg-sand/40 text-sm text-charcoal/60">
            <div className="flex items-center gap-2">
              <Plane className="h-4 w-4" aria-hidden="true" />
              Map view coming soon — approximate coordinates: {destination.latitude.toFixed(2)},{" "}
              {destination.longitude.toFixed(2)}
            </div>
          </div>
        </section>

        <section className="mt-14 max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FAQAccordion faqs={destination.faqs} />
          </div>
        </section>

        {relatedGuides.length > 0 && (
          <section className="mt-14">
            <SectionHeading eyebrow="Related Guides" title="Planning resources for this trip" />
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGuides.map((guide) => (
                <EditorialGuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        )}

        {relatedDestinations.length > 0 && (
          <div className="mt-14">
            <RelatedDestinations destinations={relatedDestinations} />
          </div>
        )}
      </div>
    </div>
  );
}
