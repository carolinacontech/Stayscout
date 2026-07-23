import type { CityDestination } from "@/data/types";
import { DestinationCard } from "@/components/content/DestinationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RelatedDestinations({ destinations }: { destinations: CityDestination[] }) {
  if (destinations.length === 0) return null;

  return (
    <section aria-labelledby="related-destinations-heading">
      <SectionHeading as="h2" title="Related destinations" />
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {destinations.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </div>
    </section>
  );
}
