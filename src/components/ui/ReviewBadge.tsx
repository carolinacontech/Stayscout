import { ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ReviewTier } from "@/data/types";

const tierConfig: Record<
  ReviewTier,
  { label: string; shortLabel: string; icon: typeof ShieldCheck; className: string }
> = {
  scout: {
    label: "Scout Stay Review",
    shortLabel: "Scout",
    icon: ShieldCheck,
    className: "bg-gold text-white",
  },
  guest: {
    label: "Guest Review",
    shortLabel: "Guest",
    icon: Users,
    className: "bg-slate text-white",
  },
};

interface ReviewBadgeProps {
  tier: ReviewTier;
  score?: number;
  /** Icon + score only, no label — for tight spaces like a listing card corner. */
  compact?: boolean;
  className?: string;
}

export function ReviewBadge({ tier, score, compact, className }: ReviewBadgeProps) {
  const { label, shortLabel, icon: Icon, className: toneClassName } = tierConfig[tier];

  if (compact) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ring-2 ring-white",
          toneClassName,
          className
        )}
        aria-label={score !== undefined ? `${label}: ${score.toFixed(1)} out of 10` : label}
      >
        <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {shortLabel}
        {score !== undefined && <span className="tabular-nums">{score.toFixed(1)}</span>}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold",
        toneClassName,
        className
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {label}
      {score !== undefined && <span className="tabular-nums">· {score.toFixed(1)}</span>}
    </span>
  );
}
