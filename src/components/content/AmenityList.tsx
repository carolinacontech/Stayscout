import { Check } from "lucide-react";

export function AmenityList({ amenities }: { amenities: string[] }) {
  if (amenities.length === 0) {
    return <p className="text-sm text-charcoal/60">Amenity details for this stay are not yet available.</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <li key={amenity} className="flex items-center gap-2 text-sm text-charcoal">
          <Check className="h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
          {amenity}
        </li>
      ))}
    </ul>
  );
}
