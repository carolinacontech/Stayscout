import type { Collection } from "./types";

/**
 * Homepage / editorial collections. Distinct from stay-type category pages
 * (see stayTypes.ts) — collections are curated groupings meant for homepage
 * and marketing use, while stay types are the exhaustive, filterable
 * taxonomy. Maps to a `collection` document type in a future CMS.
 */
export const collections: Collection[] = [
  {
    slug: "beachfront-escapes",
    name: "Beachfront Escapes",
    shortDescription: "Homes and cottages steps from the sand, from the Gulf Coast to Cape Cod.",
    image: {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
      alt: "Beachfront cottage with ocean view",
    },
    categories: ["beachfront", "oceanfront"],
    seoIntro: [
      "A beachfront stay means the property borders the sand directly — no road, boardwalk crossing, or shuttle required. We flag this distinction because it's one of the most commonly overstated claims in short-term rental listings.",
    ],
    faqs: [
      {
        question: "What's the difference between 'beachfront' and 'near the beach'?",
        answer:
          "Beachfront means the property directly borders the sand. 'Near the beach' can mean anywhere from a two-minute walk to a mile away — always check the map and listing details.",
      },
    ],
    relatedCollections: ["lake-houses", "romantic-getaways"],
  },
  {
    slug: "cabins-in-the-mountains",
    name: "Cabins in the Mountains",
    shortDescription: "Wood-burning fireplaces, hot tub decks, and real mountain views.",
    image: {
      src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1200&auto=format&fit=crop",
      alt: "Log cabin in the mountains",
    },
    categories: ["cabins", "hot-tub"],
    seoIntro: [
      "Mountain cabins range from one-room romantic hideaways to reunion-sized lodges. We look for a real view and genuine seclusion, not just a rustic-looking interior a short walk from a parking lot.",
    ],
    faqs: [
      {
        question: "Do I need a 4WD vehicle for a mountain cabin stay?",
        answer:
          "Sometimes — many cabins sit on gravel or unpaved roads that can be difficult in winter. Check road conditions for a specific property before a cold-weather trip.",
      },
    ],
    relatedCollections: ["family-vacation-homes", "romantic-getaways"],
  },
  {
    slug: "homes-with-private-pools",
    name: "Homes With Private Pools",
    shortDescription: "A pool that's yours alone for the trip, heated where it matters most.",
    image: {
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
      alt: "Home with a private swimming pool",
    },
    categories: ["private-pool", "heated-pool"],
    seoIntro: [
      "A private pool changes the rhythm of a trip, especially traveling with kids. We note whether a pool is heated, since that matters enormously in shoulder-season or desert destinations.",
    ],
    faqs: [
      {
        question: "Are private pools fenced?",
        answer:
          "Fencing and safety features vary by property and local code. If traveling with young children, confirm pool fencing and safety details directly with the host before booking.",
      },
    ],
    relatedCollections: ["luxury-homes", "family-vacation-homes"],
  },
  {
    slug: "lake-houses",
    name: "Lake Houses",
    shortDescription: "Calm water, dock access, and long porch evenings.",
    image: {
      src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop",
      alt: "Lake house with dock",
    },
    categories: ["lakefront", "private-dock"],
    seoIntro: [
      "Lake houses draw a different crowd than the beach — more boating and fishing, generally quieter evenings, and a strong pull for multi-generational groups who return to the same lake year after year.",
    ],
    faqs: [
      {
        question: "Does a lakefront property always include a dock?",
        answer:
          "No — lakefront means the property borders the water; a dock is a separate, specific amenity. We label properties with a private dock explicitly.",
      },
    ],
    relatedCollections: ["stays-with-private-docks", "beachfront-escapes"],
  },
  {
    slug: "stays-with-private-docks",
    name: "Stays With Private Docks",
    shortDescription: "For boaters and anglers who want the water at the back door.",
    image: {
      src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop",
      alt: "Private dock on a lake",
    },
    categories: ["private-dock"],
    seoIntro: [
      "A private dock is one of the more specific, valuable amenities we track, and one of the most frequently misrepresented in casual listings. We confirm dock access is private, not shared, before featuring a property here.",
    ],
    faqs: [
      {
        question: "Can I dock my own boat at these properties?",
        answer:
          "In most cases, yes, though depth, dock size, and any marina rules vary by property. Confirm boat size limits directly with the host before arriving with a trailer.",
      },
    ],
    relatedCollections: ["lake-houses", "beachfront-escapes"],
  },
  {
    slug: "romantic-getaways",
    name: "Romantic Getaways",
    shortDescription: "Small, private, and designed for two.",
    image: {
      src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
      alt: "Romantic cottage courtyard",
    },
    categories: ["romantic"],
    seoIntro: [
      "For a couples' trip, we weigh privacy and atmosphere as heavily as square footage — a small, well-designed cottage often beats a larger, less personal rental for this kind of trip.",
    ],
    faqs: [
      {
        question: "What makes a stay 'romantic' in your collections?",
        answer:
          "Generally a smaller, more private layout, thoughtful design, and features like a soaking tub, courtyard, or view that suit a couple rather than a large group.",
      },
    ],
    relatedCollections: ["homes-with-private-pools", "unique-stays"],
  },
  {
    slug: "family-vacation-homes",
    name: "Family Vacation Homes",
    shortDescription: "Enough bedrooms, enough bathrooms, and something for the kids to do.",
    image: {
      src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=1200&auto=format&fit=crop",
      alt: "Large family beach house",
    },
    categories: ["family-friendly", "large-group-homes"],
    seoIntro: [
      "Family trips have different requirements than a couples' getaway: more bedrooms and bathrooms relative to guest count, safer stair and pool setups, and proximity to kid-friendly activities.",
    ],
    faqs: [
      {
        question: "What should families check before booking?",
        answer:
          "Confirm sleeping arrangements match your group exactly (not just total 'sleeps' count), and ask the host directly about pool fencing, stair gates, or other safety features if traveling with young children.",
      },
    ],
    relatedCollections: ["cabins-in-the-mountains", "beachfront-escapes"],
  },
  {
    slug: "unique-stays",
    name: "Unique Stays",
    shortDescription: "Treehouses, A-frames, and homes worth booking for the building alone.",
    image: {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
      alt: "Treehouse cabin",
    },
    categories: ["treehouses", "a-frames", "tiny-homes", "farm-stays"],
    seoIntro: [
      "Some stays are worth booking for the building itself — a treehouse, an A-frame, a converted barn. We look for places that are genuinely comfortable to stay in, not just photogenic for an hour.",
    ],
    faqs: [
      {
        question: "Are unique stays like treehouses accessible for all guests?",
        answer:
          "Often not — many involve stairs, bridges, or ladders by design. Check the specific listing's accessibility details if that's a concern.",
      },
    ],
    relatedCollections: ["romantic-getaways", "cabins-in-the-mountains"],
  },
];

export function getCollectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug);
}
