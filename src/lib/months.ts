import type { Month } from "@/data/types";

const SHORT_LABELS: Record<Month, string> = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

/** Joins a list of months into "Jun & Sep" / "Jun" style copy, short or full labels. */
export function formatMonths(months: Month[], style: "short" | "full" = "full"): string {
  const labels = months.map((m) => (style === "short" ? SHORT_LABELS[m] : m));
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} & ${labels[1]}`;
  return `${labels.slice(0, -1).join(", ")} & ${labels[labels.length - 1]}`;
}
