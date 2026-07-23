import Image from "next/image";
import Link from "next/link";
import type { CityDestination } from "@/data/types";

interface DestinationCardProps {
  destination: CityDestination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.stateSlug}/${destination.slug}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-lg bg-sand"
    >
      <Image
        src={destination.heroImage.src}
        alt={destination.heroImage.alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-serif-heading text-lg font-semibold text-white">{destination.city}</p>
        <p className="text-sm text-white/80">{destination.state}</p>
      </div>
    </Link>
  );
}
