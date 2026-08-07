"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
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

export function HeroSearch() {
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
    router.push(`/stays${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-3 rounded-3xl bg-white p-4 shadow-xl sm:grid-cols-4 sm:items-end sm:gap-4 sm:p-5"
    >
      <Select
        id="hero-destination"
        label="Destination"
        placeholder="Any state"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        options={usStates.map((s) => ({ label: s.name, value: s.slug }))}
      />
      <Select
        id="hero-stay-type"
        label="Stay type"
        placeholder="Any stay type"
        value={stayType}
        onChange={(e) => setStayType(e.target.value)}
        options={stayTypes.map((s) => ({ label: s.name, value: s.slug }))}
      />
      <Select
        id="hero-trip-type"
        label="Trip type"
        placeholder="Any trip type"
        value={tripType}
        onChange={(e) => setTripType(e.target.value)}
        options={tripTypeOptions}
      />
      <Button type="submit" size="md" className="w-full sm:w-auto">
        <Search className="h-4 w-4" aria-hidden="true" />
        Search
      </Button>
    </form>
  );
}
