"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { HeroSearch } from "@/components/content/HeroSearch";
import { stayTypes } from "@/data/stayTypes";

interface HeroProps {
  eyebrow: string;
  valueProposition: string;
  supportingCopy: string;
  quickSearchLinks: { label: string; href: string }[];
}

export function Hero({ eyebrow, valueProposition, supportingCopy, quickSearchLinks }: HeroProps) {
  const [stayType, setStayType] = useState("");
  const targetImage = stayTypes.find((s) => s.slug === stayType)?.heroImage ?? null;
  const hasPhoto = Boolean(targetImage);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ivory">
        {targetImage && (
          // Keying on the image src forces a fresh mount on every change, so the
          // fade-in animation (globals.css) always restarts cleanly — no manual
          // opacity state machine to keep in sync.
          <div key={targetImage.src} className="absolute inset-0 animate-hero-fade-in">
            <Image src={targetImage.src} alt="" fill sizes="100vw" className="object-cover" />
          </div>
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

          <div className="mx-auto mt-10 max-w-2xl">
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
