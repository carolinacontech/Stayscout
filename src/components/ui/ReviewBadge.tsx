import { ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ReviewTier } from "@/data/types";

const tierConfig: Record<
  ReviewTier,
  { label: string; icon: typeof ShieldCheck; className: string }
> = {
  scout: {
    label: "Scout Stay Review",
    icon: ShieldCheck,
    className: "bg-terracotta text-white",
  },
  guest: {
    label: "Guest Review",
    icon: Users,
    className: "bg-sand text-navy",
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
  const { label, icon: Icon, className: toneClassName } = tierConfig[tier];

  if (compact) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold",
          toneClassName,
          className
        )}
        aria-label={score !== undefined ? `${label}: ${score.toFixed(1)} out of 10` : label}
      >
        <Icon className="h-3 w-3 shrink-0" aria-hidden="true" />
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
