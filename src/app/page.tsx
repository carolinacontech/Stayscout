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
import { HeroSearch } from "@/components/content/HeroSearch";
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
      <section className="relative">
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2400&auto=format&fit=crop"
            alt="Beach cottage with a private boardwalk to the sand on the Florida coast"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-navy/10" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand">
              Curated Stays Across America
            </p>
            <h1 className="mt-3 max-w-2xl font-serif-heading text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              {siteConfig.valueProposition}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              {siteConfig.supportingCopy}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/stays" size="lg">
                Explore Stays
              </Button>
              <Button href="/destinations" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                Browse Destinations
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="-mt-24 sm:-mt-16 lg:-mt-20 relative z-10">
          <HeroSearch />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {quickSearchLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy hover:border-ocean hover:text-ocean"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

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
                className="flex items-center justify-center rounded-lg border border-border bg-white px-4 py-6 text-center text-sm font-medium text-navy hover:border-ocean hover:text-ocean"
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
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
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
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif-heading text-3xl font-semibold text-white sm:text-4xl">
            A better getaway starts here.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/80">
            Get standout stays, destination guides, and fresh weekend ideas delivered to your inbox.
          </p>
          <div className="mx-auto mt-8 max-w-xl text-left">
            <NewsletterForm />
          </div>
          <p className="mt-4 text-xs text-white/50">
            We&apos;ll only send travel inspiration — no spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Why trust us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading align="center" eyebrow="Why Trust Us" title="Fewer, better recommendations." />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.trustPrinciples.map((principle) => (
            <div key={principle.title} className="text-center">
              <h3 className="text-lg font-semibold text-navy">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{principle.description}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <AffiliateDisclosure variant="long" className="justify-center text-center" />
        </div>
      </section>
    </>
  );
}
