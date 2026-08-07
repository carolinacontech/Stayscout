"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { HeroSearch } from "@/components/content/HeroSearch";
import { stayTypes } from "@/data/stayTypes";

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroProps {
  eyebrow: string;
  valueProposition: string;
  supportingCopy: string;
  quickSearchLinks: { label: string; href: string }[];
}

type Layers = [HeroImage | null, HeroImage | null];

export function Hero({ eyebrow, valueProposition, supportingCopy, quickSearchLinks }: HeroProps) {
  const [stayType, setStayType] = useState("");
  const targetImage = stayTypes.find((s) => s.slug === stayType)?.heroImage ?? null;
  const targetSrc = targetImage?.src ?? null;

  const [layers, setLayers] = useState<Layers>([null, null]);
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const [pendingLayer, setPendingLayer] = useState<0 | 1 | null>(null);

  // Mount the new image into the inactive layer (at opacity 0) during render,
  // following React's render-time state-sync pattern. The actual crossfade —
  // flipping which layer is opacity-100 — waits a paint via the effect below,
  // so the browser has something to transition *from*.
  const currentSrc = layers[activeLayer]?.src ?? null;
  if (targetSrc !== currentSrc && pendingLayer === null) {
    const nextLayer = activeLayer === 0 ? 1 : 0;
    const newLayers: Layers = [...layers];
    newLayers[nextLayer] = targetImage;
    setLayers(newLayers);
    setPendingLayer(nextLayer);
  }

  useEffect(() => {
    if (pendingLayer === null) return;
    const raf = requestAnimationFrame(() => {
      setActiveLayer(pendingLayer);
      setPendingLayer(null);
    });
    return () => cancelAnimationFrame(raf);
  }, [pendingLayer]);

  const hasPhoto = Boolean(targetImage);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ivory">
        {layers.map((layer, i) =>
          layer ? (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                i === activeLayer ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src={layer.src} alt="" fill sizes="100vw" className="object-cover" />
            </div>
          ) : null
        )}
      </div>

      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div
          className={
            hasPhoto
              ? "rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur-sm transition-colors duration-500 sm:p-10"
              : "transition-colors duration-500"
          }
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-terracotta shadow-sm">
              {eyebrow}
            </span>
            <h1 className="mt-5 font-serif-heading text-4xl font-semibold text-navy sm:text-5xl lg:text-6xl">
              {valueProposition}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
              {supportingCopy}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button href="/stays" size="lg">
                Explore Stays →
              </Button>
              <Button href="/destinations" variant="light" size="lg">
                Browse Destinations
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <HeroSearch stayType={stayType} onStayTypeChange={setStayType} />
          </div>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
            {quickSearchLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-navy hover:border-ocean hover:text-ocean"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
