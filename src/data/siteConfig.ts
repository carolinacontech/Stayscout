/**
 * Centralized brand + navigation configuration.
 * Change the brand name, tagline, colors, nav items, and legal copy here —
 * nothing below should need to touch component code.
 */

export const siteConfig = {
  brandName: "StayScout USA",
  tagline: "Remarkable stays, handpicked across America.",
  valueProposition: "Find a stay worth traveling for.",
  supportingCopy:
    "Explore handpicked vacation rentals, beach homes, mountain cabins, waterfront escapes, and unique stays across the United States.",
  url: "https://www.stayscoutusa.com",
  contactEmail: "hello@stayscoutusa.com",
  social: {
    instagram: "https://www.instagram.com/",
    pinterest: "https://www.pinterest.com/",
    facebook: "https://www.facebook.com/",
  },
  announcementBar: {
    message: "Discover handpicked stays across the United States.",
    dismissible: true,
  },
  primaryNav: [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "Stay Types", href: "/stay-types" },
    { label: "Trip Ideas", href: "/trip-ideas" },
    { label: "Travel Guides", href: "/guides" },
    { label: "About", href: "/about" },
  ],
  exploreCta: { label: "Explore Stays", href: "/stays" },
  footer: {
    brandSummary:
      "StayScout USA is an independent travel discovery website that curates memorable vacation rentals across the United States. We help travelers find a stay worth traveling for, then send them to Airbnb to check availability and complete a reservation.",
    destinationLinks: [
      { label: "Florida", href: "/destinations/florida" },
      { label: "Tennessee", href: "/destinations/tennessee" },
      { label: "North Carolina", href: "/destinations/north-carolina" },
      { label: "Georgia", href: "/destinations/georgia" },
      { label: "California", href: "/destinations/california" },
      { label: "Utah", href: "/destinations/utah" },
    ],
    stayTypeLinks: [
      { label: "Beachfront", href: "/stay-types/beachfront" },
      { label: "Cabins", href: "/stay-types/cabins" },
      { label: "Lakefront", href: "/stay-types/lakefront" },
      { label: "Private Pool", href: "/stay-types/private-pool" },
      { label: "Pet-Friendly", href: "/stay-types/pet-friendly" },
    ],
    companyLinks: [
      { label: "About", href: "/about" },
      { label: "Travel Guides", href: "/guides" },
      { label: "Trip Ideas", href: "/trip-ideas" },
      { label: "Contact", href: "/contact" },
    ],
    legalLinks: [
      { label: "Affiliate Disclosure", href: "/disclosure" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
  disclosures: {
    long:
      "StayScout USA may earn a commission when you book through certain links on this website, at no additional cost to you. Recommendations are selected independently. Prices, amenities, policies, and availability may change, so please verify all information directly with the booking platform before reserving.",
    short: "We may earn a commission from qualifying bookings.",
    independence:
      "StayScout USA is an independent travel discovery website and is not affiliated with, endorsed by, or sponsored by Airbnb. Airbnb is a trademark of its respective owner. Use of Airbnb links on this site does not imply any partnership or endorsement.",
    priceAvailability:
      "Pricing and availability may change. Confirm current details directly on Airbnb.",
  },
  trustPrinciples: [
    {
      title: "Carefully Curated",
      description:
        "We feature a small, selective set of stays instead of trying to list everything, so every recommendation earns its place.",
    },
    {
      title: "Traveler-Focused",
      description:
        "Collections are organized around real trip needs — beach weekends, pet-friendly homes, group reunions — not generic categories.",
    },
    {
      title: "Transparent Recommendations",
      description:
        "We clearly disclose when a link may earn us a commission, and we never fabricate reviews, ratings, or availability.",
    },
    {
      title: "Easy Trip Inspiration",
      description:
        "Destination guides and trip ideas give you the planning context to narrow down a stay before you ever leave for Airbnb.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
