import type { Property } from "@/data/types";
import { PropertyCard } from "@/components/content/PropertyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RelatedStays({ properties, title = "Related stays" }: { properties: Property[]; title?: string }) {
  if (properties.length === 0) return null;

  return (
    <section aria-labelledby="related-stays-heading">
      <SectionHeading as="h2" title={title} />
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
