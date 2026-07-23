"use client";

import Link from "next/link";
import { Drawer } from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title={siteConfig.brandName}>
      <nav aria-label="Mobile" className="flex flex-col gap-1">
        {siteConfig.primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-md px-3 py-3 text-base font-medium text-charcoal hover:bg-sand/60"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-6 border-t border-border pt-6">
        <Button href={siteConfig.exploreCta.href} onClick={onClose} className="w-full">
          {siteConfig.exploreCta.label}
        </Button>
      </div>
    </Drawer>
  );
}
