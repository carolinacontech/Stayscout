import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { stayTypes } from "@/data/stayTypes";
import { getPropertiesByCategory } from "@/data/properties";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Stay Types",
  description:
    "Browse vacation rentals by stay type — beachfront, lakefront, cabins, private pool, pet-friendly, and more — across the United States.",
  path: "/stay-types",
});

export default function StayTypesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Stay Types", href: "/stay-types" }]} />

      <div className="mt-4 max-w-3xl">
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">
          Browse stays by type
        </h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every stay type below links to a filtered collection of handpicked properties, along with
          planning advice specific to that kind of trip.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {stayTypes.map((type) => {
          const count = getPropertiesByCategory(type.slug).length;
          return (
            <Link
              key={type.slug}
              href={`/stay-types/${type.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-sand">
                <Image
                  src={type.heroImage.src}
                  alt={type.heroImage.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-navy">{type.name}</h2>
                {count > 0 && <p className="mt-1 text-xs text-charcoal/60">{count} curated stays</p>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
