import { properties } from "@/data/properties";
import type { Property, StayCategory } from "@/data/types";

export interface StaysSearchParams {
  state?: string;
  category?: string;
  trip?: string;
  waterfront?: string;
  pool?: string;
  hotTub?: string;
  pet?: string;
  family?: string;
  dock?: string;
  guests?: string;
  bedrooms?: string;
  budget?: string;
  featured?: string;
  page?: string;
}

const tripTypeKeywords: Record<string, string[]> = {
  "family-vacations": ["famil"],
  "couples-getaways": ["couple", "romantic", "anniversary"],
  "girls-trips": ["girls", "friends"],
  "group-retreats": ["group", "reunion"],
  "weekend-escapes": ["weekend"],
  workcations: ["remote", "work"],
  "fishing-trips": ["fishing", "boat", "anglers"],
  "national-park-trips": ["national park"],
};

const waterfrontCategories: StayCategory[] = ["beachfront", "oceanfront", "waterfront", "lakefront"];

export interface ActiveFilterChip {
  key: string;
  label: string;
}

export function filterProperties(params: StaysSearchParams) {
  let results: Property[] = properties.filter((p) => p.published);
  const chips: ActiveFilterChip[] = [];

  if (params.state) {
    results = results.filter((p) => p.stateSlug === params.state);
    chips.push({ key: "state", label: `State: ${params.state.replace(/-/g, " ")}` });
  }

  if (params.category) {
    results = results.filter((p) => p.categories.includes(params.category as StayCategory));
    chips.push({ key: "category", label: params.category.replace(/-/g, " ") });
  }

  if (params.trip && tripTypeKeywords[params.trip]) {
    const keywords = tripTypeKeywords[params.trip];
    results = results.filter((p) =>
      p.bestFor.some((tag) => keywords.some((kw) => tag.toLowerCase().includes(kw)))
    );
    chips.push({ key: "trip", label: `Trip: ${params.trip.replace(/-/g, " ")}` });
  }

  if (params.waterfront === "true") {
    results = results.filter(
      (p) => Boolean(p.waterfrontType) || p.categories.some((c) => waterfrontCategories.includes(c))
    );
    chips.push({ key: "waterfront", label: "Waterfront" });
  }

  if (params.pool === "true") {
    results = results.filter((p) => p.hasPool);
    chips.push({ key: "pool", label: "Private pool" });
  }

  if (params.hotTub === "true") {
    results = results.filter((p) => p.hasHotTub);
    chips.push({ key: "hotTub", label: "Hot tub" });
  }

  if (params.pet === "true") {
    results = results.filter((p) => p.petFriendly);
    chips.push({ key: "pet", label: "Pet-friendly" });
  }

  if (params.family === "true") {
    results = results.filter((p) => p.familyFriendly);
    chips.push({ key: "family", label: "Family-friendly" });
  }

  if (params.dock === "true") {
    results = results.filter((p) => p.hasDock);
    chips.push({ key: "dock", label: "Private dock" });
  }

  if (params.guests) {
    const min = Number(params.guests);
    if (!Number.isNaN(min)) {
      results = results.filter((p) => p.sleeps >= min);
      chips.push({ key: "guests", label: `Sleeps ${min}+` });
    }
  }

  if (params.bedrooms) {
    const min = Number(params.bedrooms);
    if (!Number.isNaN(min)) {
      results = results.filter((p) => p.bedrooms >= min);
      chips.push({ key: "bedrooms", label: `${min}+ bedrooms` });
    }
  }

  if (params.budget) {
    const max = Number(params.budget);
    if (!Number.isNaN(max)) {
      results = results.filter((p) => typeof p.approximatePriceFrom === "number" && p.approximatePriceFrom <= max);
      chips.push({ key: "budget", label: `Under $${max}/night` });
    }
  }

  if (params.featured === "true") {
    results = results.filter((p) => p.featured);
    chips.push({ key: "featured", label: "Featured only" });
  }

  return { results, chips };
}
