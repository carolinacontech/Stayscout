/**
 * Central content types for StayScout USA.
 *
 * These types intentionally mirror a "document" shape (flat fields + arrays of
 * strings/refs) rather than deeply relational tables, because that is the
 * shape headless CMSs (Sanity, Contentful, Supabase) work best with. When
 * migrating off local files, each exported const array below (properties,
 * destinations, states, collections, guides, tripIdeas) becomes one
 * collection/table, and each `slug` becomes the document id / route key.
 * Fields are left as plain strings/numbers/booleans (no functions, no
 * class instances) specifically so they serialize straight into a CMS
 * dataset or a Postgres row without transformation.
 */

export type USRegion =
  | "Northeast"
  | "Southeast"
  | "Midwest"
  | "Southwest"
  | "West"
  | "Pacific Northwest";

export type StayCategory =
  | "beachfront"
  | "oceanfront"
  | "waterfront"
  | "lakefront"
  | "private-dock"
  | "private-pool"
  | "heated-pool"
  | "hot-tub"
  | "pet-friendly"
  | "family-friendly"
  | "romantic"
  | "luxury"
  | "budget-friendly"
  | "cabins"
  | "tiny-homes"
  | "treehouses"
  | "a-frames"
  | "farm-stays"
  | "desert-homes"
  | "ski-in-ski-out"
  | "national-park-stays"
  | "large-group-homes"
  | "accessible-stays"
  | "remote-work-stays";

export type TripType =
  | "family-vacations"
  | "couples-getaways"
  | "girls-trips"
  | "group-retreats"
  | "weekend-escapes"
  | "workcations"
  | "fishing-trips"
  | "national-park-trips";

export type LinkStatus = "active" | "needs-review" | "unavailable";

export interface PropertyImage {
  src: string;
  alt: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  city: string;
  citySlug: string;
  state: string;
  stateSlug: string;
  region: USRegion;
  latitude: number;
  longitude: number;
  shortDescription: string;
  editorialSummary: string;
  whyWePickedIt: string;
  bestFor: string[];
  stayType: string;
  categories: StayCategory[];
  images: PropertyImage[];
  /** Standard, non-tracked Airbnb listing URL, when known. */
  airbnbUrl?: string;
  /** Tracked Airbnb Creator/affiliate link. Preferred over airbnbUrl when present. */
  creatorLink?: string;
  linkStatus: LinkStatus;
  sourcePlatform: "Airbnb";
  sleeps: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: string[];
  waterfrontType?: "Oceanfront" | "Beachfront" | "Lakefront" | "Riverfront" | "Canal-front";
  petFriendly: boolean;
  familyFriendly: boolean;
  hasPool: boolean;
  hasHotTub: boolean;
  hasDock: boolean;
  /** Only ever displayed when set. Omit rather than guess. */
  approximatePriceFrom?: number;
  priceLastChecked?: string;
  nearbyAttractions: string[];
  thingsToConsider: string[];
  featured: boolean;
  published: boolean;
  dateAdded: string;
  lastVerified: string;
  /** Demo content flag — required to be true until a real, verified listing replaces it. */
  isSampleContent: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DestinationSeason {
  season: string;
  description: string;
}

export interface CityDestination {
  slug: string;
  city: string;
  stateSlug: string;
  state: string;
  region: USRegion;
  heroImage: PropertyImage;
  tagline: string;
  metaDescription: string;
  introduction: string[];
  quickFacts: { label: string; value: string }[];
  neighborhoods: { name: string; description: string }[];
  stayCategories: StayCategory[];
  attractions: { name: string; description: string }[];
  bestTimeToVisit: string;
  tripStyles: string[];
  gettingThere: string;
  faqs: FaqItem[];
  relatedDestinations: string[]; // city slugs
  relatedGuides: string[]; // guide slugs
  latitude: number;
  longitude: number;
  trending: boolean;
}

export interface StateGuide {
  slug: string;
  name: string;
  abbreviation: string;
  region: USRegion;
  heroImage: PropertyImage;
  metaDescription: string;
  overview: string[];
  popularDestinations: string[]; // city slugs
  bestSeasons: DestinationSeason[];
  commonTripTypes: string[];
  planningInfo: { label: string; value: string }[];
  faqs: FaqItem[];
  hasCompletePage: boolean;
}

export interface Collection {
  slug: string;
  name: string;
  shortDescription: string;
  image: PropertyImage;
  categories: StayCategory[];
  seoIntro: string[];
  faqs: FaqItem[];
  relatedCollections: string[];
}

export interface StayTypeCollection {
  slug: StayCategory;
  name: string;
  seoIntro: string[];
  planningAdvice: string[];
  faqs: FaqItem[];
  relatedCategories: StayCategory[];
  heroImage: PropertyImage;
}

export interface TripIdea {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage: PropertyImage;
  intro: string[];
  destinationSlugs: string[];
  propertySlugs: string[];
  planningAdvice: string[];
  faqs: FaqItem[];
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export type GuideCategory =
  | "Destination guides"
  | "Seasonal travel"
  | "Family travel"
  | "Beach vacations"
  | "Mountain vacations"
  | "Road trips"
  | "Fishing and boating"
  | "National parks"
  | "Travel planning"
  | "Weekend getaways";

export interface Guide {
  slug: string;
  title: string;
  category: GuideCategory;
  author: string;
  publishedDate: string;
  updatedDate: string;
  readingTimeMinutes: number;
  heroImage: PropertyImage;
  excerpt: string;
  metaDescription: string;
  sections: GuideSection[];
  propertySlugs: string[];
  relatedGuideSlugs: string[];
}
