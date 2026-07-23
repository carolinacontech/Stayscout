"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { cn } from "@/lib/cn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent bg-ivory/95 backdrop-blur transition-shadow",
        isScrolled && "border-border shadow-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif-heading text-xl font-semibold text-navy sm:text-2xl">
          {siteConfig.brandName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {siteConfig.primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal hover:text-ocean"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="rounded-full p-2.5 text-charcoal hover:bg-sand/60"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <Button href={siteConfig.exploreCta.href} size="sm" className="hidden sm:inline-flex">
            {siteConfig.exploreCta.label}
          </Button>
          <button
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open menu"
            className="rounded-full p-2.5 text-charcoal hover:bg-sand/60 lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileNavigation isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
