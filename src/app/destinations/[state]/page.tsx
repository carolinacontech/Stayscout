import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { usStates, getStateBySlug } from "@/data/usStates";
import { getStateGuide } from "@/data/states";
import { getDestinationsByState } from "@/data/destinations";
import { getPropertiesByState } from "@/data/properties";
import { stayTypes } from "@/data/stayTypes";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { DestinationCard } from "@/components/content/DestinationCard";
import { PropertyGrid } from "@/components/content/PropertyGrid";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";

export function generateStaticParams() {
  return usStates.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) return {};
  const guide = getStateGuide(stateSlug);

  return buildMetadata({
    title: `Best Vacation Rentals and Unique Stays in ${state.name}`,
    description:
      guide?.metaDescription ??
      `Discover handpicked vacation rentals and unique stays throughout ${state.name}, curated by ${siteConfig.brandName}.`,
    path: `/destinations/${state.slug}`,
  });
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) notFound();

  const guide = getStateGuide(stateSlug);
  const destinationsInState = getDestinationsByState(stateSlug);
  const propertiesInState = getPropertiesByState(stateSlug);
  const featured = propertiesInState.filter((p) => p.featured);

  const breadcrumbItems = [{ name: "Destinations", href: "/destinations" }, { name: state.name, href: `/destinations/${state.slug}` }];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbSchema(breadcrumbItems.map((i) => ({ name: i.name, url: `${siteConfig.url}${i.href}` })))
          )!,
        }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="mt-4 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-ocean">{state.region}</p>
        <h1 className="mt-2 font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">
          Best Vacation Rentals and Unique Stays in {state.name}
        </h1>
      </div>

      {guide ? (
        <>
          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-charcoal/80">
            {guide.overview.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {destinationsInState.length > 0 && (
            <section className="mt-14">
              <SectionHeading eyebrow="Popular Destinations" title={`Where to stay in ${state.name}`} />
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {destinationsInState.map((destination) => (
                  <DestinationCard key={destination.slug} destination={destination} />
                ))}
              </div>
            </section>
          )}

          {featured.length > 0 && (
            <section className="mt-14">
              <SectionHeading eyebrow="Featured Stays" title={`Handpicked stays in ${state.name}`} />
              <div className="mt-6">
                <PropertyGrid properties={featured} emptyStateHref={`/stays?state=${state.slug}`} />
              </div>
              <AffiliateDisclosure className="mt-4" />
            </section>
          )}

          <section className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-navy">Best seasons to visit</h2>
              <dl className="mt-4 flex flex-col gap-3">
                {guide.bestSeasons.map((season) => (
                  <div key={season.season}>
                    <dt className="text-sm font-semibold text-charcoal">{season.season}</dt>
                    <dd className="text-sm text-charcoal/75">{season.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy">Common trip types</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {guide.commonTripTypes.map((trip) => (
                  <Badge key={trip} tone="outline">
                    {trip}
                  </Badge>
                ))}
              </div>
              <h2 className="mt-8 text-2xl font-semibold text-navy">Practical planning information</h2>
              <dl className="mt-4 flex flex-col gap-3">
                {guide.planningInfo.map((info) => (
                  <div key={info.label}>
                    <dt className="text-sm font-semibold text-charcoal">{info.label}</dt>
                    <dd className="text-sm text-charcoal/75">{info.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="mt-14">
            <SectionHeading eyebrow="Stay Types" title={`Browse ${state.name} stays by type`} />
            <div className="mt-6 flex flex-wrap gap-2">
              {stayTypes.slice(0, 10).map((type) => (
                <Link
                  key={type.slug}
                  href={`/stay-types/${type.slug}`}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy hover:border-ocean hover:text-ocean"
                >
                  {type.name}
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-14 max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
            <div className="mt-6">
              <FAQAccordion faqs={guide.faqs} />
            </div>
          </section>
        </>
      ) : (
        <div className="mt-6 max-w-3xl">
          <p className="text-base leading-relaxed text-charcoal/80">
            We&apos;re still building out a complete destination guide for {state.name}. In the meantime,
            here&apos;s what we can tell you: {state.name} is part of the {state.region} region, alongside
            other {siteConfig.brandName} destinations you can explore today.
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-navy">Explore nearby covered destinations</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {usStates
                .filter((s) => s.region === state.region && s.slug !== state.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/destinations/${s.slug}`}
                    className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy hover:border-ocean hover:text-ocean"
                  >
                    {s.name}
                  </Link>
                ))}
            </div>
          </div>
          <div className="mt-8">
            <Link href="/stays" className="text-sm font-semibold text-terracotta hover:underline">
              Browse all handpicked stays →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
