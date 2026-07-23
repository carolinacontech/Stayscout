import type { USRegion } from "./types";

/**
 * Full 50-state registry, used to keep /destinations architecture scalable
 * even before every state has a complete editorial page. `hasCompletePage`
 * gates whether a state renders a full guide (section 10) or a lightweight
 * "coming soon to this level of detail" state that still has genuine,
 * non-thin content (see StateGuide fallback in states.ts).
 */
export interface USStateEntry {
  slug: string;
  name: string;
  abbreviation: string;
  region: USRegion;
}

export const usStates: USStateEntry[] = [
  { slug: "alabama", name: "Alabama", abbreviation: "AL", region: "Southeast" },
  { slug: "alaska", name: "Alaska", abbreviation: "AK", region: "West" },
  { slug: "arizona", name: "Arizona", abbreviation: "AZ", region: "Southwest" },
  { slug: "arkansas", name: "Arkansas", abbreviation: "AR", region: "Southeast" },
  { slug: "california", name: "California", abbreviation: "CA", region: "West" },
  { slug: "colorado", name: "Colorado", abbreviation: "CO", region: "Southwest" },
  { slug: "connecticut", name: "Connecticut", abbreviation: "CT", region: "Northeast" },
  { slug: "delaware", name: "Delaware", abbreviation: "DE", region: "Northeast" },
  { slug: "florida", name: "Florida", abbreviation: "FL", region: "Southeast" },
  { slug: "georgia", name: "Georgia", abbreviation: "GA", region: "Southeast" },
  { slug: "hawaii", name: "Hawaii", abbreviation: "HI", region: "West" },
  { slug: "idaho", name: "Idaho", abbreviation: "ID", region: "West" },
  { slug: "illinois", name: "Illinois", abbreviation: "IL", region: "Midwest" },
  { slug: "indiana", name: "Indiana", abbreviation: "IN", region: "Midwest" },
  { slug: "iowa", name: "Iowa", abbreviation: "IA", region: "Midwest" },
  { slug: "kansas", name: "Kansas", abbreviation: "KS", region: "Midwest" },
  { slug: "kentucky", name: "Kentucky", abbreviation: "KY", region: "Southeast" },
  { slug: "louisiana", name: "Louisiana", abbreviation: "LA", region: "Southeast" },
  { slug: "maine", name: "Maine", abbreviation: "ME", region: "Northeast" },
  { slug: "maryland", name: "Maryland", abbreviation: "MD", region: "Northeast" },
  { slug: "massachusetts", name: "Massachusetts", abbreviation: "MA", region: "Northeast" },
  { slug: "michigan", name: "Michigan", abbreviation: "MI", region: "Midwest" },
  { slug: "minnesota", name: "Minnesota", abbreviation: "MN", region: "Midwest" },
  { slug: "mississippi", name: "Mississippi", abbreviation: "MS", region: "Southeast" },
  { slug: "missouri", name: "Missouri", abbreviation: "MO", region: "Midwest" },
  { slug: "montana", name: "Montana", abbreviation: "MT", region: "West" },
  { slug: "nebraska", name: "Nebraska", abbreviation: "NE", region: "Midwest" },
  { slug: "nevada", name: "Nevada", abbreviation: "NV", region: "West" },
  { slug: "new-hampshire", name: "New Hampshire", abbreviation: "NH", region: "Northeast" },
  { slug: "new-jersey", name: "New Jersey", abbreviation: "NJ", region: "Northeast" },
  { slug: "new-mexico", name: "New Mexico", abbreviation: "NM", region: "Southwest" },
  { slug: "new-york", name: "New York", abbreviation: "NY", region: "Northeast" },
  { slug: "north-carolina", name: "North Carolina", abbreviation: "NC", region: "Southeast" },
  { slug: "north-dakota", name: "North Dakota", abbreviation: "ND", region: "Midwest" },
  { slug: "ohio", name: "Ohio", abbreviation: "OH", region: "Midwest" },
  { slug: "oklahoma", name: "Oklahoma", abbreviation: "OK", region: "Southwest" },
  { slug: "oregon", name: "Oregon", abbreviation: "OR", region: "Pacific Northwest" },
  { slug: "pennsylvania", name: "Pennsylvania", abbreviation: "PA", region: "Northeast" },
  { slug: "rhode-island", name: "Rhode Island", abbreviation: "RI", region: "Northeast" },
  { slug: "south-carolina", name: "South Carolina", abbreviation: "SC", region: "Southeast" },
  { slug: "south-dakota", name: "South Dakota", abbreviation: "SD", region: "Midwest" },
  { slug: "tennessee", name: "Tennessee", abbreviation: "TN", region: "Southeast" },
  { slug: "texas", name: "Texas", abbreviation: "TX", region: "Southwest" },
  { slug: "utah", name: "Utah", abbreviation: "UT", region: "Southwest" },
  { slug: "vermont", name: "Vermont", abbreviation: "VT", region: "Northeast" },
  { slug: "virginia", name: "Virginia", abbreviation: "VA", region: "Southeast" },
  { slug: "washington", name: "Washington", abbreviation: "WA", region: "Pacific Northwest" },
  { slug: "west-virginia", name: "West Virginia", abbreviation: "WV", region: "Southeast" },
  { slug: "wisconsin", name: "Wisconsin", abbreviation: "WI", region: "Midwest" },
  { slug: "wyoming", name: "Wyoming", abbreviation: "WY", region: "West" },
];

export const usRegions: USRegion[] = [
  "Northeast",
  "Southeast",
  "Midwest",
  "Southwest",
  "West",
  "Pacific Northwest",
];

export function getStateBySlug(slug: string) {
  return usStates.find((s) => s.slug === slug);
}
