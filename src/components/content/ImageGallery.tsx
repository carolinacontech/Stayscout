"use client";

import Image from "next/image";
import { useState } from "react";
import type { PropertyImage } from "@/data/types";
import { cn } from "@/lib/cn";

export function ImageGallery({ images, title }: { images: PropertyImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-[16/9] items-center justify-center rounded-lg bg-sand text-sm text-charcoal/60">
        Photos for {title} are not yet available.
      </div>
    );
  }

  const active = images[activeIndex];

  return (
    <div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-sand">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label={`${title} photos`}>
          {images.map((image, index) => (
            <button
              key={image.src + index}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show photo ${index + 1} of ${images.length}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden rounded-md border-2",
                index === activeIndex ? "border-terracotta" : "border-transparent"
              )}
            >
              <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
