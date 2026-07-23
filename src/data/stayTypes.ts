import type { StayCategory, StayTypeCollection } from "./types";

/**
 * The exhaustive stay-type taxonomy behind /stay-types/[category].
 * Every value of the StayCategory union has an entry here so the route
 * always resolves; some have shorter copy than the higher-traffic
 * categories, which is intentional rather than an oversight.
 */
const heroFallback = {
  src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2000&auto=format&fit=crop",
  alt: "Vacation rental exterior surrounded by trees",
};

export const stayTypes: StayTypeCollection[] = [
  {
    slug: "beachfront",
    name: "Beachfront",
    heroImage: { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000&auto=format&fit=crop", alt: "Beachfront home with direct sand access" },
    seoIntro: [
      "A true beachfront rental borders the sand directly, with no road or public path between the property and the water. We verify this distinction on every listing we feature rather than relying on a host's own description.",
    ],
    planningAdvice: [
      "Ask specifically whether beach access is private or shared with neighboring properties.",
      "Confirm flood insurance and storm policies aren't your concern, but do check the host's cancellation policy for hurricane season if relevant.",
    ],
    faqs: [{ question: "Is beachfront the same as oceanfront?", answer: "Oceanfront specifically means the Atlantic or Pacific; beachfront can also apply to Gulf Coast or lake beaches. We use the more specific term where it applies." }],
    relatedCategories: ["oceanfront", "waterfront", "family-friendly"],
  },
  {
    slug: "oceanfront",
    name: "Oceanfront",
    heroImage: { src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=2000&auto=format&fit=crop", alt: "Oceanfront house on the Atlantic coast" },
    seoIntro: [
      "Oceanfront properties sit directly on the Atlantic or Pacific coastline. These stays command a premium over homes even a block or two inland, and for many travelers the view alone justifies it.",
    ],
    planningAdvice: ["Upper floors or elevated decks often have the best unobstructed views — ask for specific sightline details if that matters to you."],
    faqs: [{ question: "Are oceanfront homes noisier?", answer: "Wave and wind noise varies by location and construction. Some travelers love falling asleep to surf sound; light sleepers should ask the host about window/door sealing." }],
    relatedCategories: ["beachfront", "waterfront", "luxury"],
  },
  {
    slug: "waterfront",
    name: "Waterfront",
    heroImage: heroFallback,
    seoIntro: [
      "Waterfront is our broadest water-adjacent category, covering ocean, lake, and river properties alike. Check each listing's specific waterfront type — oceanfront, lakefront, or riverfront — for the exact setting.",
    ],
    planningAdvice: ["Confirm what body of water the listing actually borders — 'waterfront' alone doesn't specify ocean, lake, or river."],
    faqs: [{ question: "Does waterfront guarantee swimming access?", answer: "Not always — some waterfront properties border marshland, a canal, or water not suited to swimming. Ask the host directly if swimming access matters to your trip." }],
    relatedCategories: ["beachfront", "lakefront", "private-dock"],
  },
  {
    slug: "lakefront",
    name: "Lakefront",
    heroImage: { src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2000&auto=format&fit=crop", alt: "Lakefront cabin with calm water view" },
    seoIntro: [
      "Lake houses draw a quieter, more boating-and-fishing-focused crowd than beach destinations. We feature lakefront homes across mountain lakes, reservoirs, and alpine lakes alike.",
    ],
    planningAdvice: ["Ask about lake level fluctuations, especially at reservoir lakes, which can affect dock and shoreline access seasonally."],
    faqs: [{ question: "Do lakefront rentals include kayaks or paddleboards?", answer: "Some do, as a listed amenity. We only note this when the host explicitly includes it — never assume equipment is provided." }],
    relatedCategories: ["private-dock", "cabins", "large-group-homes"],
  },
  {
    slug: "private-dock",
    name: "Private Dock",
    heroImage: { src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=2000&auto=format&fit=crop", alt: "Private dock extending into a lake" },
    seoIntro: [
      "For boaters and anglers, a private (not shared) dock is one of the most meaningful amenities we track. We confirm this distinction directly rather than taking a generic 'dock access' claim at face value.",
    ],
    planningAdvice: ["Ask about dock depth and any boat length or draft restrictions before arriving with your own boat or a rental."],
    faqs: [{ question: "Can I bring my own boat?", answer: "Usually yes at private-dock properties, but confirm size and depth limitations with the host in advance." }],
    relatedCategories: ["lakefront", "waterfront", "large-group-homes"],
  },
  {
    slug: "private-pool",
    name: "Private Pool",
    heroImage: { src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop", alt: "Private swimming pool at a vacation home" },
    seoIntro: [
      "A private pool — one used only by your group, not shared with other units or guests — is a defining feature for many family and group trips. We flag whether a pool is heated separately, since that materially affects usability outside of summer.",
    ],
    planningAdvice: ["If traveling with young children, ask specifically about pool fencing, gate locks, and depth before booking."],
    faqs: [{ question: "Is the pool heated?", answer: "Only when explicitly stated — we never assume a pool is heated unless the host confirms it in the listing." }],
    relatedCategories: ["heated-pool", "luxury", "family-friendly"],
  },
  {
    slug: "heated-pool",
    name: "Heated Pool",
    heroImage: heroFallback,
    seoIntro: [
      "A heated pool extends usable swim season into fall, winter, and spring, especially valuable in desert destinations like Scottsdale or cooler-water regions in shoulder season.",
    ],
    planningAdvice: ["Ask whether pool heating is included in the base rate or an additional fee, which varies by host."],
    faqs: [{ question: "Is heated pool access guaranteed year-round?", answer: "Not necessarily — some hosts only run heating on request or during certain months. Confirm current policy before booking a cold-weather trip." }],
    relatedCategories: ["private-pool", "luxury", "desert-homes"],
  },
  {
    slug: "hot-tub",
    name: "Hot Tub",
    heroImage: { src: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=2000&auto=format&fit=crop", alt: "Outdoor hot tub with mountain view" },
    seoIntro: [
      "A hot tub is close to a default expectation for mountain cabin rentals, and we look specifically for private, well-maintained tubs with a genuine view rather than an afterthought bolted onto a back deck.",
    ],
    planningAdvice: ["In winter, ask how the host handles hot tub maintenance and whether it's drained during freezing weather."],
    faqs: [{ question: "Is the hot tub private or shared?", answer: "We only feature properties with a private hot tub for the booking group's exclusive use unless a listing states otherwise." }],
    relatedCategories: ["cabins", "romantic", "ski-in-ski-out"],
  },
  {
    slug: "pet-friendly",
    name: "Pet-Friendly",
    heroImage: { src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2000&auto=format&fit=crop", alt: "Dog-friendly vacation rental with fenced yard" },
    seoIntro: [
      "Traveling with a pet narrows the field considerably, and policies vary widely — weight limits, additional fees, and which rooms pets can access. We flag pet-friendly properties, but always confirm current pet policy directly with the host.",
    ],
    planningAdvice: ["Ask about fenced yards, nearby pet-friendly beaches or trails, and any breed or weight restrictions before booking."],
    faqs: [{ question: "Are there extra fees for bringing a pet?", answer: "Often, yes — cleaning fees or pet deposits are common. Confirm the exact policy on the listing before booking." }],
    relatedCategories: ["family-friendly", "cabins", "beachfront"],
  },
  {
    slug: "family-friendly",
    name: "Family-Friendly",
    heroImage: { src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=2000&auto=format&fit=crop", alt: "Family vacation home with spacious living area" },
    seoIntro: [
      "Family-friendly stays prioritize enough bedrooms and bathrooms for the group, safer layouts, and proximity to activities kids will actually enjoy — not just a generic 'kids welcome' label.",
    ],
    planningAdvice: ["Check the specific bed configuration, not just the total sleep count, to make sure it matches how your family will actually split up rooms."],
    faqs: [{ question: "What should I ask about pool or stair safety?", answer: "Ask the host directly about pool fencing, gate locks, and stair gates if traveling with young children — we never assume these features exist unless confirmed." }],
    relatedCategories: ["pet-friendly", "large-group-homes", "beachfront"],
  },
  {
    slug: "romantic",
    name: "Romantic",
    heroImage: { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000&auto=format&fit=crop", alt: "Romantic private cottage courtyard" },
    seoIntro: [
      "For a couples' trip, we weigh privacy and design as much as amenities — a well-designed small cottage frequently makes a better romantic getaway than a larger, more generic rental.",
    ],
    planningAdvice: ["Ask about proximity to noise (bar districts, event venues) if quiet is a priority for your trip."],
    faqs: [{ question: "What makes a stay romantic rather than just small?", answer: "Thoughtful design, privacy from neighboring units, and features like a soaking tub, fireplace, or private outdoor space." }],
    relatedCategories: ["luxury", "private-pool", "treehouses"],
  },
  {
    slug: "luxury",
    name: "Luxury",
    heroImage: { src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop", alt: "Luxury modern vacation home" },
    seoIntro: [
      "Our luxury category covers higher-end finishes, larger footprints, and standout amenities — but we still avoid unverifiable claims like 'five-star' or 'award-winning' unless a listing can substantiate them.",
    ],
    planningAdvice: ["Ask about concierge or additional services directly — most vacation rentals, even luxury ones, do not include hotel-style staff unless explicitly listed."],
    faqs: [{ question: "Do luxury rentals include daily housekeeping?", answer: "Rarely, unless explicitly stated. Most vacation rentals, including higher-end ones, are cleaned only between stays." }],
    relatedCategories: ["private-pool", "romantic", "desert-homes"],
  },
  {
    slug: "budget-friendly",
    name: "Budget-Friendly",
    heroImage: heroFallback,
    seoIntro: [
      "Budget-friendly doesn't mean low-quality — it means we've prioritized value: solid basics, a good location, and no unnecessary frills that drive up the nightly rate.",
    ],
    planningAdvice: ["Traveling in shoulder season and splitting a larger home among more people are two of the most effective ways to lower per-person cost."],
    faqs: [{ question: "Are cleaning fees included in approximate pricing shown?", answer: "No — approximate nightly pricing shown does not include cleaning fees, taxes, or service fees, which are set and displayed by Airbnb at checkout." }],
    relatedCategories: ["family-friendly", "cabins"],
  },
  {
    slug: "cabins",
    name: "Cabins",
    heroImage: { src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2000&auto=format&fit=crop", alt: "Wood cabin in a forest setting" },
    seoIntro: [
      "Cabins are one of the most consistently popular stay types on this site, ranging from small romantic hideaways to reunion-sized mountain lodges. We look for genuine seclusion and a real view over a merely rustic-looking interior.",
    ],
    planningAdvice: ["Check road conditions and driveway grade before a winter cabin trip — many mountain cabins sit on steep, unpaved access roads."],
    faqs: [{ question: "Do cabins usually have a hot tub?", answer: "Many do, though not all — check the specific amenity list rather than assuming." }],
    relatedCategories: ["hot-tub", "national-park-stays", "ski-in-ski-out"],
  },
  {
    slug: "tiny-homes",
    name: "Tiny Homes",
    heroImage: heroFallback,
    seoIntro: [
      "Tiny homes trade square footage for efficient, often architecturally interesting design — a good fit for a couple or solo traveler who wants a stay that's an experience in itself.",
    ],
    planningAdvice: ["Confirm storage space and kitchen size match your trip's needs — tiny homes vary widely in how fully equipped the kitchen is."],
    faqs: [{ question: "Are tiny homes good for longer stays?", answer: "They can be for one or two guests, but limited storage and living space make them less practical for stays longer than about a week with a family." }],
    relatedCategories: ["treehouses", "a-frames", "romantic"],
  },
  {
    slug: "treehouses",
    name: "Treehouses",
    heroImage: { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop", alt: "Treehouse cabin among forest canopy" },
    seoIntro: [
      "Treehouse stays are a genuine unique-stay category, not just a marketing label — we confirm the property is actually elevated among trees, not merely themed.",
    ],
    planningAdvice: ["Many treehouses involve stairs, ladders, or suspension bridges — check accessibility before booking if that's a concern."],
    faqs: [{ question: "Are treehouse stays safe in storms?", answer: "Reputable treehouse builds are engineered for wind and weather, but ask the host about their specific storm protocol if traveling during storm season." }],
    relatedCategories: ["treehouses", "a-frames", "romantic"],
  },
  {
    slug: "a-frames",
    name: "A-Frames",
    heroImage: { src: "https://images.unsplash.com/photo-1518602164578-cd0074062767?q=80&w=2000&auto=format&fit=crop", alt: "A-frame cabin among pine trees" },
    seoIntro: [
      "The A-frame's steep roofline and tall windows have made it one of the most in-demand cabin styles of the last several years. We look for A-frames that pair the look with a genuinely comfortable, well-equipped interior.",
    ],
    planningAdvice: ["A-frame lofts often have low ceilings and steep stairs or ladders — worth checking if traveling with older guests or young children."],
    faqs: [{ question: "Are A-frames good for groups?", answer: "Small to mid-size groups generally work well; very large groups should look at more traditional large-group homes instead." }],
    relatedCategories: ["cabins", "ski-in-ski-out", "tiny-homes"],
  },
  {
    slug: "farm-stays",
    name: "Farm Stays",
    heroImage: heroFallback,
    seoIntro: [
      "Farm stays put you on or near a working property — orchards, vineyards, or small farms — for a slower, more rural trip than a typical vacation rental.",
    ],
    planningAdvice: ["Ask what farm activities, if any, are included versus simply nearby, since this varies enormously between listings."],
    faqs: [{ question: "Will I interact with farm animals?", answer: "Sometimes, but this varies by property — confirm with the host what on-site activities or animal interactions are actually available." }],
    relatedCategories: ["desert-homes", "cabins"],
  },
  {
    slug: "desert-homes",
    name: "Desert Homes",
    heroImage: { src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop", alt: "Modern desert home with mountain backdrop" },
    seoIntro: [
      "Desert homes, concentrated around destinations like Scottsdale, tend toward modern architecture, mountain views, and a private pool as a near-default amenity given the climate.",
    ],
    planningAdvice: ["A heated pool matters more here than almost anywhere else on this site — check specifically if visiting outside summer."],
    faqs: [{ question: "How hot does it get at desert destinations in summer?", answer: "Often well above 100°F. Many travelers prefer visiting desert destinations in the cooler months (November–April) instead." }],
    relatedCategories: ["heated-pool", "luxury", "private-pool"],
  },
  {
    slug: "ski-in-ski-out",
    name: "Ski-In/Ski-Out",
    heroImage: { src: "https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=2000&auto=format&fit=crop", alt: "Ski-in ski-out mountain home" },
    seoIntro: [
      "True ski-in/ski-out access means you can reach a lift directly from the property without a car or shuttle. We confirm this specifically, since many listings use the term loosely to mean 'near the mountain.'",
    ],
    planningAdvice: ["Ask exactly how far the walk is to the nearest lift, and whether that access is seasonal or requires specific snow conditions."],
    faqs: [{ question: "Is ski-in/ski-out worth the premium?", answer: "For serious ski trips, many travelers find it worthwhile to avoid parking and shuttle logistics — but it commands a real price premium over nearby non-slopeside homes." }],
    relatedCategories: ["cabins", "hot-tub", "large-group-homes"],
  },
  {
    slug: "national-park-stays",
    name: "National Park Stays",
    heroImage: { src: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?q=80&w=2000&auto=format&fit=crop", alt: "Cabin near a national park" },
    seoIntro: [
      "National park gateway stays put you close to a trailhead or park entrance rather than in a resort town further away, saving valuable drive time on a park-focused trip.",
    ],
    planningAdvice: ["Check actual drive time to the specific trailheads you plan to visit — 'near the park' can mean very different things at a large park."],
    faqs: [{ question: "Do national park gateway stays book up further ahead?", answer: "Often yes, especially near the most-visited parks during peak season — booking three or more months ahead is common." }],
    relatedCategories: ["cabins", "family-friendly"],
  },
  {
    slug: "large-group-homes",
    name: "Large Group Homes",
    heroImage: { src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=2000&auto=format&fit=crop", alt: "Large vacation home for group stays" },
    seoIntro: [
      "Large group homes are built around reunions, weddings, and multi-family trips — we look closely at bedroom-to-bathroom ratios and common space size, since a high sleep count alone doesn't guarantee comfort.",
    ],
    planningAdvice: ["Confirm the exact bed configuration (not just total sleep count) and ask about a group event or wedding-use policy if relevant."],
    faqs: [{ question: "Do large group homes require a minimum stay?", answer: "Often yes, especially in peak season — some regions like the Outer Banks default to a full-week, Saturday-to-Saturday lease." }],
    relatedCategories: ["family-friendly", "lakefront", "beachfront"],
  },
  {
    slug: "accessible-stays",
    name: "Accessible Stays",
    heroImage: heroFallback,
    seoIntro: [
      "Accessibility needs vary widely, from step-free entry to roll-in showers to specific doorway widths. We only label a property accessible when the host has documented specific features — never as a general assumption.",
    ],
    planningAdvice: ["Always confirm specific accessibility features directly with the host before booking, since needs vary and details aren't always complete in a listing."],
    faqs: [{ question: "Can I trust the accessibility features listed?", answer: "Confirm directly with the host before booking — feature accuracy varies, and it's the most reliable way to avoid a mismatch on arrival." }],
    relatedCategories: ["family-friendly", "budget-friendly"],
  },
  {
    slug: "remote-work-stays",
    name: "Remote Work Stays",
    heroImage: heroFallback,
    seoIntro: [
      "A good workcation stay needs reliable Wi-Fi, a real desk setup, and enough quiet to take a call — we prioritize these functional details over general aesthetics for this category.",
    ],
    planningAdvice: ["Ask about actual measured internet speed, not just 'Wi-Fi included,' if you'll be on video calls."],
    faqs: [{ question: "How do I know the Wi-Fi is fast enough for video calls?", answer: "Ask the host directly for measured upload/download speeds — listed 'Wi-Fi' alone doesn't guarantee it." }],
    relatedCategories: ["budget-friendly", "luxury"],
  },
];

export function getStayType(slug: StayCategory) {
  return stayTypes.find((s) => s.slug === slug);
}
