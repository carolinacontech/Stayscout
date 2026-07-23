import Image from "next/image";
import Link from "next/link";
import { Users, BedDouble, Bath } from "lucide-react";
import type { Property } from "@/data/types";
import { Badge } from "@/components/ui/Badge";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const image = property.images[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white transition-shadow hover:shadow-md">
      <Link href={`/stays/${property.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-sand">
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        {property.isSampleContent && (
          <span className="absolute left-3 top-3 rounded-full bg-navy/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Demo listing
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ocean">
            {property.city}, {property.state}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-navy">
            <Link href={`/stays/${property.slug}`} className="hover:underline">
              {property.title}
            </Link>
          </h3>
        </div>

        <Badge tone="outline" className="w-fit">
          {property.stayType}
        </Badge>

        <p className="line-clamp-2 text-sm text-charcoal/75">{property.shortDescription}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-charcoal/70">
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" aria-hidden="true" /> Sleeps {property.sleeps}
          </span>
          <span className="flex items-center gap-1">
            <BedDouble className="h-3.5 w-3.5" aria-hidden="true" /> {property.bedrooms} bed
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-3.5 w-3.5" aria-hidden="true" /> {property.bathrooms} bath
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          {property.approximatePriceFrom ? (
            <p className="tabular-nums text-sm font-medium text-charcoal">
              From ${property.approximatePriceFrom}
              <span className="text-charcoal/60">/night*</span>
            </p>
          ) : (
            <p className="text-xs text-charcoal/50">Pricing on Airbnb</p>
          )}
          <Link
            href={`/stays/${property.slug}`}
            className="text-sm font-semibold text-terracotta hover:underline"
          >
            View Stay →
          </Link>
        </div>
      </div>
    </article>
  );
}
