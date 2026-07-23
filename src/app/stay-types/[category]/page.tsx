import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stayTypes, getStayType } from "@/data/stayTypes";
import { getPropertiesByCategory } from "@/data/properties";
import { destinations } from "@/data/destinations";
import type { StayCategory } from "@/data/types";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyGrid } from "@/components/content/PropertyGrid";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { DestinationCard } from "@/components/content/DestinationCard";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";

export function generateStaticParams() {
  return stayTypes.map((type) => ({ category: type.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const type = getStayType(category as StayCategory);
  if (!type) return {};

  return buildMetadata({
    title: `Best ${type.name} Vacation Rentals in the USA`,
    description: `Explore handpicked ${type.name.toLowerCase()} vacation rentals across the United States. Compare standout features and continue to Airbnb to check current availability.`,
    path: `/stay-types/${type.slug}`,
    image: type.heroImage.src,
  });
}

export default async function StayTypePage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const type = getStayType(category as StayCategory);
  if (!type) notFound();

  const stays = getPropertiesByCategory(type.slug);
  const relatedDestinations = destinations.filter((d) => d.stayCategories.includes(type.slug)).slice(0, 8);

  const breadcrumbItems = [
    { name: "Stay Types", href: "/stay-types" },
    { name: type.name, href: `/stay-types/${type.slug}` },
  ];

  return (
    <div>
      <section className="relative">
        <div className="relative aspect-[21/9] w-full">
          <Image src={type.heroImage.src} alt={type.heroImage.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <h1 className="font-serif-heading text-4xl font-semibold text-white sm:text-5xl">{type.name} Stays</h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-charcoal/80 lg:max-w-3xl">
          {type.seoIntro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-10">
          <SectionHeading
            eyebrow="Handpicked Stays"
            title={`${type.name} stays we recommend`}
            action={
              <Link href={`/stays?category=${type.slug}`} className="text-sm font-semibold text-terracotta hover:underline">
                Filter all stays →
              </Link>
            }
          />
          <div className="mt-6">
            <PropertyGrid properties={stays} emptyStateHref={`/stays?category=${type.slug}`} />
          </div>
          <AffiliateDisclosure className="mt-4" />
        </section>

        {relatedDestinations.length > 0 && (
          <section className="mt-14">
            <SectionHeading eyebrow="Destinations" title={`Popular destinations for ${type.name.toLowerCase()} stays`} />
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {relatedDestinations.map((d) => (
                <DestinationCard key={d.slug} destination={d} />
              ))}
            </div>
          </section>
        )}

        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-semibold text-navy">Planning advice</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {type.planningAdvice.map((advice) => (
              <li key={advice} className="text-sm leading-relaxed text-charcoal/80">
                • {advice}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-6">
            <FAQAccordion faqs={type.faqs} />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-navy">Related stay types</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {type.relatedCategories.map((related) => {
              const relatedType = getStayType(related);
              return (
                <Link
                  key={related}
                  href={`/stay-types/${related}`}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy hover:border-ocean hover:text-ocean"
                >
                  {relatedType?.name ?? related}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
