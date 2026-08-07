import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { collections } from "@/data/collections";
import { getTrendingDestinations } from "@/data/destinations";
import { getFeaturedProperties } from "@/data/properties";
import { getFeaturedGuide } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/content/Hero";
import { CollectionCard } from "@/components/content/CollectionCard";
import { DestinationCard } from "@/components/content/DestinationCard";
import { PropertyCard } from "@/components/content/PropertyCard";
import { NewsletterForm } from "@/components/content/NewsletterForm";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.brandName} | ${siteConfig.tagline}`,
  description: siteConfig.supportingCopy,
  path: "/",
});

const quickSearchLinks = [
  { label: "Florida Beach Homes", href: "/stays?state=florida&category=beachfront" },
  { label: "Smoky Mountain Cabins", href: "/destinations/tennessee/gatlinburg" },
  { label: "Lakefront Stays", href: "/stay-types/lakefront" },
  { label: "Romantic Getaways", href: "/stay-types/romantic" },
  { label: "Pet-Friendly Homes", href: "/stay-types/pet-friendly" },
];

const tripTypes = [
  { label: "Family Vacations", href: "/stays?trip=family-vacations" },
  { label: "Couples' Getaways", href: "/stays?trip=couples-getaways" },
  { label: "Girls' Trips", href: "/stays?trip=girls-trips" },
  { label: "Group Retreats", href: "/stays?trip=group-retreats" },
  { label: "Weekend Escapes", href: "/stays?trip=weekend-escapes" },
  { label: "Workcations", href: "/stays?trip=workcations" },
  { label: "Fishing Trips", href: "/stays?trip=fishing-trips" },
  { label: "National Park Trips", href: "/stays?trip=national-park-trips" },
];

export default function HomePage() {
  const trendingDestinations = getTrendingDestinations().slice(0, 12);
  const featuredProperties = getFeaturedProperties().slice(0, 6);
  const featuredGuide = getFeaturedGuide();

  return (
    <>
      {/* Hero */}
      <Hero
        eyebrow="Curated Stays Across America"
        valueProposition={siteConfig.valueProposition}
        supportingCopy={siteConfig.supportingCopy}
        quickSearchLinks={quickSearchLinks}
      />

      {/* Featured collections */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated Collections"
          title="Stay somewhere unforgettable."
          description="Browse curated escapes for beach weekends, mountain adventures, family vacations, romantic trips, and everything in between."
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </section>

      {/* Trending destinations */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trending Destinations"
            title="Where America is checking in."
            action={
              <Button href="/destinations" variant="outline" size="sm">
                View all destinations
              </Button>
            }
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {trendingDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Editor's picks */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Editor's Picks"
          title="Stays we can't stop thinking about."
          description="A small, hand-selected set of standout properties — not an exhaustive listing of everything available."
          action={
            <Button href="/stays" variant="outline" size="sm">
              Browse all stays
            </Button>
          }
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <p className="mt-6 text-sm text-charcoal/60">{siteConfig.disclosures.priceAvailability}</p>
      </section>

      {/* Browse by trip type */}
      <section className="bg-sand/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Trip Types" title="Browse by the kind of trip you're planning." />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {tripTypes.map((trip) => (
              <Link
                key={trip.href}
                href={trip.href}
                className="flex items-center justify-center rounded-xl border border-border bg-white px-4 py-6 text-center text-sm font-medium text-navy hover:border-ocean hover:text-ocean"
              >
                {trip.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured editorial guide */}
      {featuredGuide && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="From the Journal" title="Planning inspiration, from people who love this stuff." />
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={featuredGuide.heroImage.src}
                alt={featuredGuide.heroImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ocean">{featuredGuide.category}</p>
              <h3 className="mt-2 font-serif-heading text-2xl font-semibold text-navy sm:text-3xl">
                {featuredGuide.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80">{featuredGuide.excerpt}</p>
              <Button href={`/guides/${featuredGuide.slug}`} className="mt-6">
                Read the Guide
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Email signup */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-terracotta to-[#f2a65a] px-6 py-10 sm:px-12 sm:py-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-lg">
              <h2 className="font-serif-heading text-3xl font-semibold text-white sm:text-4xl">
                A better getaway starts here.
              </h2>
              <p className="mt-3 text-base text-white/90">
                Get standout stays, destination guides, and fresh weekend ideas delivered to your inbox.
              </p>
            </div>
            <div className="w-full lg:max-w-md">
              <NewsletterForm />
              <p className="mt-3 text-xs text-white/75">
                We&apos;ll only send travel inspiration — no spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading align="center" eyebrow="Why Trust Us" title="Fewer, better recommendations." />
        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm sm:p-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.trustPrinciples.map((principle) => (
              <div key={principle.title} className="text-center">
                <h3 className="text-lg font-semibold text-navy">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <AffiliateDisclosure variant="long" className="justify-center text-center" />
        </div>
      </section>
    </>
  );
}
