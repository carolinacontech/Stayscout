import type { TripIdea } from "./types";

export const tripIdeas: TripIdea[] = [
  {
    slug: "best-weekend-getaways-usa",
    title: "Best Weekend Getaways in the USA",
    metaDescription:
      "Handpicked weekend getaway ideas across the United States, from mountain cabins to coastal towns within driving distance. See standout stays before booking on Airbnb.",
    heroImage: { src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2000&auto=format&fit=crop", alt: "Mountain road leading to a weekend getaway destination" },
    intro: [
      "A good weekend trip lives or dies on drive time. We've built this list around destinations that reward a Friday-to-Sunday visit without eating the whole weekend in transit — mountain towns within a couple hours of a major metro, and small beach towns that don't require a full week's lease.",
    ],
    destinationSlugs: ["blue-ridge", "gatlinburg", "cape-cod"],
    propertySlugs: ["blue-ridge-overlook-cabin", "treehouse-canopy-retreat-blue-ridge"],
    planningAdvice: [
      "Book Friday check-in, Sunday check-out stays specifically — some hosts default to a minimum two- or three-night stay on weekends.",
      "Pack for weather flexibility; a two-day window doesn't leave much room to wait out a bad forecast.",
    ],
    faqs: [
      {
        question: "How far should a good weekend getaway be from home?",
        answer:
          "Generally under three hours of driving keeps a two-night trip from feeling rushed. Anything much further starts to eat meaningfully into your time at the destination.",
      },
    ],
  },
  {
    slug: "best-beach-vacations-for-families",
    title: "Best Beach Vacations for Families",
    metaDescription:
      "Family-friendly beach vacation ideas across the United States, including handpicked homes with pools, fenced yards, and easy beach access. Compare stays before booking on Airbnb.",
    heroImage: { src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=2000&auto=format&fit=crop", alt: "Family walking on a beach with a beach house in the background" },
    intro: [
      "Family beach trips have their own logistics: enough bedrooms and bathrooms, a gentle beach slope for younger kids, and ideally something to do on the one rainy day. We've prioritized destinations and homes that handle those basics well.",
    ],
    destinationSlugs: ["destin", "anna-maria-island", "outer-banks"],
    propertySlugs: ["gulfside-dunes-cottage-destin", "seagrass-bungalow-anna-maria", "sound-to-sea-outer-banks"],
    planningAdvice: [
      "Check the exact bed configuration, not just total sleep count, before booking for a family group.",
      "Ask about pool fencing and stair safety directly with the host if traveling with young children.",
    ],
    faqs: [
      {
        question: "Which US beaches are gentlest for young kids?",
        answer:
          "Gulf Coast beaches like Destin and Anna Maria Island tend to have a gradual slope and calmer average surf than much of the Atlantic coast, though conditions vary day to day.",
      },
    ],
  },
  {
    slug: "romantic-cabin-getaways",
    title: "Romantic Cabin Getaways",
    metaDescription:
      "Handpicked romantic cabin getaways in the mountains, from hot tub cabins to secluded treehouses. Compare stays before booking on Airbnb.",
    heroImage: { src: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=2000&auto=format&fit=crop", alt: "Romantic cabin with mountain overlook" },
    intro: [
      "The best romantic cabins share a few things: real privacy from neighbors, a view worth sitting outside for, and a hot tub or fireplace that makes staying in feel like the plan rather than a fallback.",
    ],
    destinationSlugs: ["blue-ridge", "gatlinburg"],
    propertySlugs: ["blue-ridge-overlook-cabin", "treehouse-canopy-retreat-blue-ridge"],
    planningAdvice: [
      "Book well ahead for October foliage weekends — the most private, view-forward cabins go first.",
      "If total isolation matters, ask the host how close the nearest neighboring cabin actually is.",
    ],
    faqs: [
      {
        question: "What's the best season for a romantic cabin trip?",
        answer:
          "Fall foliage (October) is the most popular and scenic, though it's also the most expensive and hardest to book. Late spring offers similar mountain scenery at a lower cost.",
      },
    ],
  },
  {
    slug: "vacation-rentals-with-private-docks",
    title: "Vacation Rentals With Private Docks",
    metaDescription:
      "Handpicked vacation rentals with private docks for boaters and anglers, across US lake destinations. Compare stays before booking on Airbnb.",
    heroImage: { src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2000&auto=format&fit=crop", alt: "Private dock on a calm lake" },
    intro: [
      "A private dock changes what a lake trip can be — you're not hauling gear to a public ramp or sharing space with other renters. We look specifically for properties where dock access is confirmed private, not merely 'lake access.'",
    ],
    destinationSlugs: ["broken-bow"],
    propertySlugs: ["broken-bow-dock-retreat"],
    planningAdvice: [
      "Confirm dock depth and any boat size restrictions with the host before towing your own boat.",
      "Ask about seasonal lake level changes, which can affect how usable a dock is at certain times of year.",
    ],
    faqs: [
      {
        question: "Do all lakefront rentals have a dock?",
        answer:
          "No — lakefront means the property borders the water, while a dock is a distinct, separate amenity. We label properties with a confirmed private dock explicitly.",
      },
    ],
  },
  {
    slug: "best-lake-house-vacations",
    title: "Best Lake House Vacations",
    metaDescription:
      "Curated lake house vacation ideas across the United States, from Broken Bow lodges to alpine Lake Tahoe cabins. Compare stays before booking on Airbnb.",
    heroImage: { src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2000&auto=format&fit=crop", alt: "Lake house at sunset" },
    intro: [
      "Lake vacations run quieter than beach trips, generally, and reward a slower pace: mornings on the water, afternoons on the porch. We've grouped standout lake destinations that range from Southern pine-forest lakes to alpine settings out West.",
    ],
    destinationSlugs: ["broken-bow", "lake-tahoe"],
    propertySlugs: ["broken-bow-dock-retreat", "tahoe-pines-lakeview-cabin"],
    planningAdvice: [
      "Ask whether kayaks, paddleboards, or other water equipment are included, since this varies significantly by listing.",
      "Check the specific lake's typical water temperature and season length before planning a swim-focused trip.",
    ],
    faqs: [
      {
        question: "Is Lake Tahoe good for a summer lake vacation?",
        answer:
          "Yes, though the water stays cold even in summer given its alpine elevation — it's a better fit for paddling and scenery than long, warm swims.",
      },
    ],
  },
  {
    slug: "pet-friendly-road-trips",
    title: "Pet-Friendly Road Trips",
    metaDescription:
      "Pet-friendly road trip ideas across the United States, with handpicked vacation rentals that welcome dogs. Compare stays before booking on Airbnb.",
    heroImage: { src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2000&auto=format&fit=crop", alt: "Dog looking out of a car window on a road trip" },
    intro: [
      "Traveling with a dog narrows the field, but it doesn't have to limit you to generic stays — plenty of beach cottages and mountain cabins genuinely welcome pets, with a fenced yard as the real differentiator.",
    ],
    destinationSlugs: ["destin", "cape-cod", "gatlinburg"],
    propertySlugs: ["gulfside-dunes-cottage-destin", "cape-cod-shingled-classic", "smoky-ridge-cabin-gatlinburg"],
    planningAdvice: [
      "Confirm pet fees, weight limits, and breed restrictions directly with the host — these vary widely between listings.",
      "Look specifically for a fenced yard if you want your dog to have off-leash time without a walk.",
    ],
    faqs: [
      {
        question: "Are pet fees standard for pet-friendly rentals?",
        answer:
          "Many hosts charge a pet fee or deposit — check the specific listing for current policy before booking.",
      },
    ],
  },
  {
    slug: "best-places-for-a-girls-weekend",
    title: "Best Places for a Girls' Weekend",
    metaDescription:
      "Curated girls' weekend destination and stay ideas across the United States, from beach towns to desert retreats. Compare stays before booking on Airbnb.",
    heroImage: { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000&auto=format&fit=crop", alt: "Group of friends relaxing at a vacation home pool" },
    intro: [
      "A good girls' weekend stay usually needs a shared living space bigger than any single bedroom, a pool or hot tub to gather around, and a location close enough to restaurants and nightlife to skip renting a car for every outing.",
    ],
    destinationSlugs: ["scottsdale", "key-west", "charleston"],
    propertySlugs: ["desert-modern-retreat-scottsdale", "conch-shell-hideaway-key-west", "rainbow-row-carriage-house-charleston"],
    planningAdvice: [
      "Look for homes with a large central living area — bedrooms matter less than shared space for this kind of trip.",
      "Check walkability to restaurants and nightlife if the group wants to avoid rideshares every night.",
    ],
    faqs: [
      {
        question: "Is Scottsdale a good girls' weekend destination?",
        answer:
          "Yes — it has a strong mix of pool-centered day life and Old Town nightlife within a short drive, which suits a group weekend well.",
      },
    ],
  },
  {
    slug: "national-park-vacation-rentals",
    title: "National Park Vacation Rentals",
    metaDescription:
      "Handpicked vacation rentals near major US national parks, from Smoky Mountains cabins to gateway-town stays. Compare stays before booking on Airbnb.",
    heroImage: { src: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?q=80&w=2000&auto=format&fit=crop", alt: "Trail leading into a national park forest" },
    intro: [
      "Staying close to a national park entrance saves real time on a trip built around hiking and early trailhead starts. We prioritize gateway-town rentals with genuinely short drives to the park boundary over stays that only claim to be 'near' it.",
    ],
    destinationSlugs: ["gatlinburg"],
    propertySlugs: ["smoky-ridge-cabin-gatlinburg"],
    planningAdvice: [
      "Book three or more months ahead for peak-season stays near the most-visited parks.",
      "Confirm actual drive time to the specific trailhead you plan to use, not just distance to the park boundary.",
    ],
    faqs: [
      {
        question: "Is Gatlinburg the best base for the Smoky Mountains?",
        answer:
          "It's the most convenient for the park's northern entrance and has the widest rental selection, though Cherokee, NC serves the park's southern entrance for a different set of trails.",
      },
    ],
  },
  {
    slug: "affordable-family-vacation-ideas",
    title: "Affordable Family Vacation Ideas",
    metaDescription:
      "Budget-conscious family vacation ideas across the United States, with handpicked stays that balance value and comfort. Compare stays before booking on Airbnb.",
    heroImage: { src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2000&auto=format&fit=crop", alt: "Family-friendly vacation rental living room" },
    intro: [
      "Keeping a family trip affordable usually comes down to two levers: traveling in shoulder season, and splitting a larger home's nightly rate across more people rather than booking multiple smaller units.",
    ],
    destinationSlugs: ["anna-maria-island", "gatlinburg"],
    propertySlugs: ["seagrass-bungalow-anna-maria", "smoky-ridge-cabin-gatlinburg"],
    planningAdvice: [
      "Traveling just outside peak season (early June or September for beach towns, late spring for mountain cabins) meaningfully lowers rates.",
      "A full kitchen cuts meal costs significantly compared to eating out for every meal.",
    ],
    faqs: [
      {
        question: "What's the best way to lower the cost of a family vacation rental?",
        answer:
          "Travel in shoulder season, split a larger home among more people, and prioritize a full kitchen to reduce restaurant spending.",
      },
    ],
  },
  {
    slug: "luxury-vacation-homes-usa",
    title: "Luxury Vacation Homes in the USA",
    metaDescription:
      "Handpicked luxury vacation homes across the United States, from desert modern retreats to ski-town estates. Compare stays before booking on Airbnb.",
    heroImage: { src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop", alt: "Luxury modern vacation home with pool" },
    intro: [
      "Our luxury picks focus on standout architecture, real privacy, and amenities that are actually confirmed by the host — not just a high nightly rate. We steer away from vague 'five-star' language unless it can be substantiated.",
    ],
    destinationSlugs: ["scottsdale", "park-city"],
    propertySlugs: ["desert-modern-retreat-scottsdale", "old-town-slopeside-park-city"],
    planningAdvice: [
      "Ask directly about any additional services (concierge, chef, housekeeping) — most vacation rentals, even luxury ones, don't include these by default.",
      "Confirm cancellation policy details for high-value bookings, since deposit terms can be stricter at this price point.",
    ],
    faqs: [
      {
        question: "Do luxury vacation rentals include concierge services?",
        answer: "Rarely, unless explicitly listed — always confirm directly with the host rather than assuming hotel-level service.",
      },
    ],
  },
];

export function getTripIdeaBySlug(slug: string) {
  return tripIdeas.find((t) => t.slug === slug);
}
