import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tripIdeas, getTripIdeaBySlug } from "@/data/tripIdeas";
import { destinations } from "@/data/destinations";
import { properties } from "@/data/properties";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyGrid } from "@/components/content/PropertyGrid";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { DestinationCard } from "@/components/content/DestinationCard";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";

export function generateStaticParams() {
  return tripIdeas.map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const idea = getTripIdeaBySlug(slug);
  if (!idea) return {};

  return buildMetadata({
    title: idea.title,
    description: idea.metaDescription,
    path: `/trip-ideas/${idea.slug}`,
    image: idea.heroImage.src,
  });
}

export default async function TripIdeaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idea = getTripIdeaBySlug(slug);
  if (!idea) notFound();

  const ideaDestinations = destinations.filter((d) => idea.destinationSlugs.includes(d.slug));
  const ideaProperties = properties.filter((p) => idea.propertySlugs.includes(p.slug) && p.published);

  const breadcrumbItems = [
    { name: "Trip Ideas", href: "/trip-ideas" },
    { name: idea.title, href: `/trip-ideas/${idea.slug}` },
  ];

  return (
    <div>
      <section className="relative">
        <div className="relative aspect-[21/9] w-full">
          <Image src={idea.heroImage.src} alt={idea.heroImage.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <h1 className="font-serif-heading text-4xl font-semibold text-white sm:text-5xl">{idea.title}</h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-charcoal/80 lg:max-w-3xl">
          {idea.intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {ideaDestinations.length > 0 && (
          <section className="mt-12">
            <SectionHeading eyebrow="Destinations" title="Where to go" />
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {ideaDestinations.map((d) => (
                <DestinationCard key={d.slug} destination={d} />
              ))}
            </div>
          </section>
        )}

        <section className="mt-14">
          <SectionHeading eyebrow="Handpicked Stays" title="Where to stay" />
          <div className="mt-6">
            <PropertyGrid properties={ideaProperties} emptyStateHref="/stays" />
          </div>
          <AffiliateDisclosure className="mt-4" />
        </section>

        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-semibold text-navy">Planning advice</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {idea.planningAdvice.map((advice) => (
              <li key={advice} className="text-sm leading-relaxed text-charcoal/80">
                • {advice}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FAQAccordion faqs={idea.faqs} />
          </div>
        </section>

        <div className="mt-14">
          <Link href="/trip-ideas" className="text-sm font-semibold text-terracotta hover:underline">
            ← Back to all trip ideas
          </Link>
        </div>
      </div>
    </div>
  );
}
