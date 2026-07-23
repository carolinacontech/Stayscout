import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/data/types";

export function EditorialGuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <Image
          src={guide.heroImage.src}
          alt={guide.heroImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-ocean">{guide.category}</p>
        <h3 className="font-serif-heading text-lg font-semibold text-navy">{guide.title}</h3>
        <p className="line-clamp-3 text-sm text-charcoal/75">{guide.excerpt}</p>
        <p className="mt-auto pt-2 text-xs text-charcoal/60">{guide.readingTimeMinutes} min read</p>
      </div>
    </Link>
  );
}
