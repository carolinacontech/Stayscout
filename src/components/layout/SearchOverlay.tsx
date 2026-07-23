"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Modal } from "@/components/ui/Modal";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { usStates } from "@/data/usStates";
import { stayTypes } from "@/data/stayTypes";
import { track } from "@/lib/analytics";

const tripTypeOptions = [
  { label: "Family Vacations", value: "family-vacations" },
  { label: "Couples' Getaways", value: "couples-getaways" },
  { label: "Girls' Trips", value: "girls-trips" },
  { label: "Group Retreats", value: "group-retreats" },
  { label: "Weekend Escapes", value: "weekend-escapes" },
  { label: "Workcations", value: "workcations" },
  { label: "Fishing Trips", value: "fishing-trips" },
  { label: "National Park Trips", value: "national-park-trips" },
];

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [stayType, setStayType] = useState("");
  const [tripType, setTripType] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    track({ name: "destination_searched", destination, stayType, tripType });
    const params = new URLSearchParams();
    if (destination) params.set("state", destination);
    if (stayType) params.set("type", stayType);
    if (tripType) params.set("trip", tripType);
    onClose();
    router.push(`/stays${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Search stays">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Select
          id="search-destination"
          label="Destination"
          placeholder="Any state"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          options={usStates.map((s) => ({ label: s.name, value: s.slug }))}
        />
        <Select
          id="search-stay-type"
          label="Stay type"
          placeholder="Any stay type"
          value={stayType}
          onChange={(e) => setStayType(e.target.value)}
          options={stayTypes.map((s) => ({ label: s.name, value: s.slug }))}
        />
        <Select
          id="search-trip-type"
          label="Trip type"
          placeholder="Any trip type"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          options={tripTypeOptions}
        />
        <Button type="submit" className="mt-2">
          Search Stays
        </Button>
      </form>
    </Modal>
  );
}
