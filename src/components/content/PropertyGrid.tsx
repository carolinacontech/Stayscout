import type { Property } from "@/data/types";
import { PropertyCard } from "@/components/content/PropertyCard";
import { EmptyResults } from "@/components/ui/EmptyResults";

interface PropertyGridProps {
  properties: Property[];
  emptyStateHref?: string;
}

export function PropertyGrid({ properties, emptyStateHref }: PropertyGridProps) {
  if (properties.length === 0) {
    return <EmptyResults clearHref={emptyStateHref} />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
