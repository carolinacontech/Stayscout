import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  tone?: "sand" | "ocean" | "terracotta" | "outline";
  className?: string;
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  sand: "bg-sand text-navy",
  ocean: "bg-ocean text-white",
  terracotta: "bg-terracotta text-white",
  outline: "border border-border text-charcoal",
};

export function Badge({ children, tone = "sand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
