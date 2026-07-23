import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center sm:text-center"
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">{eyebrow}</p>
        )}
        <Heading className="text-3xl font-normal text-navy sm:text-4xl">{title}</Heading>
        {description && <p className="mt-3 text-base leading-relaxed text-charcoal/80">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
