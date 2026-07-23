"use client";

import { ExternalLink } from "lucide-react";
import type { Property } from "@/data/types";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

export function BookingButton({ property }: { property: Property }) {
  const link = property.linkStatus === "active" ? property.creatorLink || property.airbnbUrl : undefined;

  if (!link) {
    return (
      <Button disabled className="w-full" aria-disabled="true">
        Booking link coming soon
      </Button>
    );
  }

  return (
    <Button
      href={link}
      external
      className="w-full"
      onClick={() =>
        track({ name: "creator_link_clicked", propertySlug: property.slug, linkStatus: property.linkStatus })
      }
    >
      Check Availability on Airbnb
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </Button>
  );
}
