import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/data/types";

interface CollectionCardProps {
  collection: Collection;
  count?: number;
}

export function CollectionCard({ collection, count }: CollectionCardProps) {
  return (
    <Link
      href={`/stays?category=${collection.categories[0]}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <Image
          src={collection.image.src}
          alt={collection.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-serif-heading text-lg font-semibold text-navy">{collection.name}</h3>
        <p className="line-clamp-2 text-sm text-charcoal/75">{collection.shortDescription}</p>
        {typeof count === "number" && count > 0 && (
          <p className="mt-auto pt-2 text-xs font-medium uppercase tracking-wide text-ocean">
            {count} curated {count === 1 ? "stay" : "stays"}
          </p>
        )}
      </div>
    </Link>
  );
}
