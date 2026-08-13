"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
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

interface HeroSearchProps {
  stayType: string;
  onStayTypeChange: (value: string) => void;
}

export function HeroSearch({ stayType, onStayTypeChange }: HeroSearchProps) {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [tripType, setTripType] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    track({ name: "destination_searched", destination, stayType, tripType });
    const params = new URLSearchParams();
    if (destination) params.set("state", destination);
    if (stayType) params.set("type", stayType);
    if (tripType) params.set("trip", tripType);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    router.push(`/stays${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-3 rounded-3xl bg-white p-4 shadow-xl sm:grid-cols-3 sm:items-end sm:gap-4 sm:p-5"
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
        onChange={(e) => onStayTypeChange(e.target.value)}
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
      <Input
        id="hero-check-in"
        label="Check-in"
        type="date"
        value={checkIn}
        onChange={(e) => {
          setCheckIn(e.target.value);
          if (checkOut && e.target.value > checkOut) setCheckOut("");
        }}
      />
      <Input
        id="hero-check-out"
        label="Check-out"
        type="date"
        value={checkOut}
        min={checkIn || undefined}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <Button type="submit" size="md" className="w-full">
        <Search className="h-4 w-4" aria-hidden="true" />
        Search
      </Button>
    </form>
  );
}
