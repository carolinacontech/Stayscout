import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tripIdeas } from "@/data/tripIdeas";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Trip Ideas",
  description:
    "Editorial trip ideas for weekend getaways, family beach vacations, romantic cabin retreats, and more across the United States.",
  path: "/trip-ideas",
});

export default function TripIdeasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Trip Ideas", href: "/trip-ideas" }]} />

      <div className="mt-4 max-w-3xl">
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">Trip ideas</h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Editorial starting points for planning a trip, each pairing destination and property
          recommendations with practical advice.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tripIdeas.map((idea) => (
          <Link
            key={idea.slug}
            href={`/trip-ideas/${idea.slug}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-sand">
              <Image
                src={idea.heroImage.src}
                alt={idea.heroImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="font-serif-heading text-lg font-semibold text-navy">{idea.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-charcoal/75">{idea.intro[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
