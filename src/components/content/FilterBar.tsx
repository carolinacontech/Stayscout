"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { usStates } from "@/data/usStates";
import { stayTypes } from "@/data/stayTypes";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { ActiveFilterChip } from "@/lib/filterProperties";
import { track } from "@/lib/analytics";

const booleanFilters: { key: string; label: string }[] = [
  { key: "waterfront", label: "Waterfront" },
  { key: "pool", label: "Private pool" },
  { key: "hotTub", label: "Hot tub" },
  { key: "pet", label: "Pet-friendly" },
  { key: "family", label: "Family-friendly" },
  { key: "dock", label: "Private dock" },
  { key: "featured", label: "Featured only" },
];

export function FilterControls() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete("page");
    track({ name: "filter_applied", filterName: key, filterValue: value ?? "cleared" });
    router.push(`/stays?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-5">
      <Select
        id="filter-state"
        label="State"
        placeholder="Any state"
        value={searchParams.get("state") ?? ""}
        onChange={(e) => updateParam("state", e.target.value || null)}
        options={usStates.map((s) => ({ label: s.name, value: s.slug }))}
      />
      <Select
        id="filter-category"
        label="Stay type"
        placeholder="Any stay type"
        value={searchParams.get("category") ?? ""}
        onChange={(e) => updateParam("category", e.target.value || null)}
        options={stayTypes.map((s) => ({ label: s.name, value: s.slug }))}
      />
      <Input
        id="filter-guests"
        label="Minimum guests"
        type="number"
        min={1}
        value={searchParams.get("guests") ?? ""}
        onChange={(e) => updateParam("guests", e.target.value || null)}
      />
      <Input
        id="filter-bedrooms"
        label="Minimum bedrooms"
        type="number"
        min={1}
        value={searchParams.get("bedrooms") ?? ""}
        onChange={(e) => updateParam("bedrooms", e.target.value || null)}
      />
      <Input
        id="filter-budget"
        label="Budget (max per night)"
        type="number"
        min={50}
        step={25}
        placeholder="e.g. 300"
        value={searchParams.get("budget") ?? ""}
        onChange={(e) => updateParam("budget", e.target.value || null)}
      />
      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-1 text-sm font-medium text-charcoal">Amenities</legend>
        {booleanFilters.map((filter) => (
          <Checkbox
            key={filter.key}
            id={`filter-${filter.key}`}
            label={filter.label}
            checked={searchParams.get(filter.key) === "true"}
            onChange={(e) => updateParam(filter.key, e.target.checked ? "true" : null)}
          />
        ))}
      </fieldset>
      <Button href="/stays" variant="outline" size="sm">
        Clear all filters
      </Button>
    </div>
  );
}

export function FilterChips({ chips }: { chips: ActiveFilterChip[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (chips.length === 0) return null;

  function removeChip(key: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    router.push(`/stays?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip) => (
        <button
          key={chip.key}
          onClick={() => removeChip(chip.key)}
          className="flex items-center gap-1.5 rounded-full bg-sand px-3 py-1.5 text-xs font-medium capitalize text-navy hover:bg-sand/70"
        >
          {chip.label}
          <span aria-hidden="true">×</span>
          <span className="sr-only">Remove filter</span>
        </button>
      ))}
      <Link href="/stays" className="text-xs font-medium text-terracotta hover:underline">
        Clear all
      </Link>
    </div>
  );
}

export function FilterBar() {
  return (
    <aside className="hidden w-72 shrink-0 lg:block">
      <div className="sticky top-24 rounded-lg border border-border bg-white p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-navy">Filter stays</h2>
        <FilterControls />
      </div>
    </aside>
  );
}
