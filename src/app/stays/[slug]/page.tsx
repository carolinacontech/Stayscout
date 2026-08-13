import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Users, BedDouble, Bath, Home, MapPin, CalendarDays } from "lucide-react";
import { properties, getPropertyBySlug, getRelatedProperties } from "@/data/properties";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, lodgingBusinessSchema, jsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ImageGallery } from "@/components/content/ImageGallery";
import { AmenityList } from "@/components/content/AmenityList";
import { PropertyReviews } from "@/components/content/PropertyReviews";
import { RelatedStays } from "@/components/content/RelatedStays";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";
import { BookingButton } from "@/components/content/BookingButton";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  return buildMetadata({
    title: `${property.title} — ${property.city}, ${property.state}`,
    description: property.shortDescription,
    path: `/stays/${property.slug}`,
    image: property.images[0]?.src,
  });
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const related = getRelatedProperties(property);

  const breadcrumbItems = [
    { name: "Stays", href: "/stays" },
    { name: property.title, href: `/stays/${property.slug}` },
  ];

  const stats = [
    { icon: Users, label: `Sleeps ${property.sleeps}` },
    { icon: BedDouble, label: `${property.bedrooms} bedrooms, ${property.beds} beds` },
    { icon: Bath, label: `${property.bathrooms} bathrooms` },
    { icon: Home, label: property.stayType },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
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
        dangerouslySetInnerHTML={{ __html: jsonLdScript(lodgingBusinessSchema(property))! }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {property.isSampleContent && (
          <Badge tone="terracotta">Demo listing — sample content</Badge>
        )}
        {property.featured && <Badge tone="ocean">Editor&apos;s pick</Badge>}
      </div>

      <div className="mt-2 flex items-start justify-between gap-4">
        <div>
          <h1 className="font-serif-heading text-3xl font-semibold text-navy sm:text-4xl">{property.title}</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-charcoal/70">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {property.city}, {property.state}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <ImageGallery images={property.images} title={property.title} />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col gap-10 lg:col-span-2">
          <section>
            <div className="flex flex-wrap gap-x-6 gap-y-3 rounded-lg border border-border bg-white p-5">
              {stats.map((stat) => (
                <span key={stat.label} className="flex items-center gap-2 text-sm text-charcoal">
                  <stat.icon className="h-4 w-4 text-ocean" aria-hidden="true" />
                  {stat.label}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Editorial summary</h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/80">{property.editorialSummary}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Why we picked it</h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/80">{property.whyWePickedIt}</p>
          </section>

          {property.reviews && property.reviews.length > 0 && (
            <PropertyReviews reviews={property.reviews} />
          )}

          <section>
            <h2 className="text-xl font-semibold text-navy">Best for</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {property.bestFor.map((tag) => (
                <Badge key={tag} tone="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </section>

          {property.bestMonths && property.bestMonths.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-navy">Best time to visit</h2>
              <div className="mt-3 flex items-center gap-3 rounded-lg border border-border bg-white p-4">
                <CalendarDays className="h-5 w-5 shrink-0 text-terracotta" aria-hidden="true" />
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {property.bestMonths.map((month) => (
                      <Badge key={month} tone="terracotta">
                        {month}
                      </Badge>
                    ))}
                  </div>
                  {property.bestMonthsReason && (
                    <p className="mt-2 text-sm text-charcoal/75">{property.bestMonthsReason}</p>
                  )}
                </div>
              </div>
            </section>
          )}

          <section>
            <h2 className="text-xl font-semibold text-navy">Amenities</h2>
            <div className="mt-3">
              <AmenityList amenities={property.amenities} />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Nearby attractions</h2>
            {property.nearbyAttractions.length > 0 ? (
              <ul className="mt-3 flex flex-col gap-1.5">
                {property.nearbyAttractions.map((attraction) => (
                  <li key={attraction} className="text-sm text-charcoal/80">
                    • {attraction}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-charcoal/60">Nearby attraction details are not yet available.</p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Things to consider</h2>
            {property.thingsToConsider.length > 0 ? (
              <ul className="mt-3 flex flex-col gap-1.5">
                {property.thingsToConsider.map((item) => (
                  <li key={item} className="text-sm text-charcoal/80">
                    • {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-charcoal/60">No specific considerations noted for this stay.</p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Approximate location</h2>
            <div className="mt-3 flex aspect-[16/9] items-center justify-center rounded-lg border border-dashed border-border bg-sand/40 text-sm text-charcoal/60">
              Map view coming soon — approximate coordinates: {property.latitude.toFixed(2)},{" "}
              {property.longitude.toFixed(2)}
            </div>
            <p className="mt-2 text-xs text-charcoal/60">
              Exact address is provided by Airbnb after booking, per standard short-term rental practice.
            </p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-lg border border-border bg-white p-6">
            {property.approximatePriceFrom ? (
              <p className="text-lg font-semibold text-navy">
                From ${property.approximatePriceFrom}
                <span className="text-sm font-normal text-charcoal/60"> / night*</span>
              </p>
            ) : (
              <p className="text-sm text-charcoal/60">Pricing available on Airbnb</p>
            )}
            <p className="mt-1 text-xs text-charcoal/50">{siteConfig.disclosures.priceAvailability}</p>

            <div className="mt-5">
              <BookingButton property={property} />
            </div>

            <AffiliateDisclosure className="mt-4" />
          </div>
        </aside>
      </div>

      <div className="mt-16">
        <RelatedStays properties={related} />
      </div>
    </div>
  );
}
