import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar } from "lucide-react";
import { guides, getGuideBySlug } from "@/data/guides";
import { properties } from "@/data/properties";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, articleSchema, jsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedStays } from "@/components/content/RelatedStays";
import { EditorialGuideCard } from "@/components/content/EditorialGuideCard";
import { NewsletterForm } from "@/components/content/NewsletterForm";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
    image: guide.heroImage.src,
  });
}

function slugifyHeading(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const guideProperties = properties.filter((p) => guide.propertySlugs.includes(p.slug) && p.published);
  const relatedGuides = guides.filter((g) => guide.relatedGuideSlugs.includes(g.slug));
  const url = `${siteConfig.url}/guides/${guide.slug}`;

  const breadcrumbItems = [
    { name: "Travel Guides", href: "/guides" },
    { name: guide.title, href: `/guides/${guide.slug}` },
  ];

  return (
    <article>
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
        dangerouslySetInnerHTML={{ __html: jsonLdScript(articleSchema(guide, url))! }}
      />

      <section className="relative">
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <Image src={guide.heroImage.src} alt={guide.heroImage.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-sand">{guide.category}</p>
            <h1 className="mt-2 font-serif-heading text-3xl font-semibold text-white sm:text-4xl">{guide.title}</h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-charcoal/70">
          <span>By {guide.author}</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            Published {new Date(guide.publishedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            Updated {new Date(guide.updatedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {guide.readingTimeMinutes} min read
          </span>
        </div>

        <nav aria-label="Table of contents" className="mt-8 rounded-lg border border-border bg-white p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-navy">In this guide</h2>
          <ol className="mt-3 flex flex-col gap-1.5">
            {guide.sections.map((section) => (
              <li key={section.heading}>
                <a href={`#${slugifyHeading(section.heading)}`} className="text-sm text-ocean hover:underline">
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose-content mt-10 flex flex-col gap-10">
          {guide.sections.map((section) => (
            <section key={section.heading} id={slugifyHeading(section.heading)}>
              <h2 className="text-2xl font-semibold text-navy">{section.heading}</h2>
              <div className="mt-3 flex flex-col gap-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-charcoal/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {guideProperties.length > 0 && (
          <div className="mt-14">
            <RelatedStays properties={guideProperties} title="Stays mentioned in this guide" />
            <AffiliateDisclosure className="mt-4" />
          </div>
        )}

        <div className="mt-14 rounded-lg bg-navy p-8 text-center">
          <h2 className="font-serif-heading text-2xl font-semibold text-white">A better getaway starts here.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/80">
            Get standout stays, destination guides, and fresh weekend ideas delivered to your inbox.
          </p>
          <div className="mx-auto mt-6 max-w-lg text-left">
            <NewsletterForm />
          </div>
        </div>

        {relatedGuides.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-navy">Related guides</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedGuides.map((g) => (
                <EditorialGuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </section>
        )}

        <div className="mt-14">
          <Link href="/guides" className="text-sm font-semibold text-terracotta hover:underline">
            ← Back to all guides
          </Link>
        </div>
      </div>
    </article>
  );
}
