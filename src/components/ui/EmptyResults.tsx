import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface EmptyResultsProps {
  title?: string;
  description?: string;
  clearHref?: string;
}

export function EmptyResults({
  title = "No stays match those filters",
  description = "Try removing a filter or two — or browse our full collection of handpicked stays instead.",
  clearHref = "/stays",
}: EmptyResultsProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-border bg-white/60 px-6 py-16 text-center">
      <SearchX className="h-10 w-10 text-ocean" aria-hidden="true" />
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      <p className="max-w-md text-sm text-charcoal/70">{description}</p>
      <Button href={clearHref} variant="outline" size="sm">
        Clear filters
      </Button>
    </div>
  );
}
