import { Info } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

interface AffiliateDisclosureProps {
  variant?: "short" | "long";
  className?: string;
}

export function AffiliateDisclosure({ variant = "short", className }: AffiliateDisclosureProps) {
  const text = variant === "long" ? siteConfig.disclosures.long : siteConfig.disclosures.short;

  return (
    <p className={cn("flex items-start gap-2 text-xs leading-relaxed text-charcoal/70", className)}>
      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ocean" aria-hidden="true" />
      <span>{text}</span>
    </p>
  );
}
