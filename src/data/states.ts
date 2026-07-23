import type { StateGuide } from "./types";
import { usStates } from "./usStates";

/**
 * Full editorial state guides. Only the states listed in the project brief
 * (Florida, Tennessee, North Carolina, South Carolina, Georgia, Alabama,
 * California, Arizona, Colorado, Utah, Texas, Oklahoma, New York,
 * Massachusetts, Maine, Hawaii) have complete guides for now.
 * `hasCompletePage` on each entry, plus `usStates.ts`'s full 50-state
 * registry, is what keeps /destinations/[state] scalable: states without an
 * entry here still render a real (if shorter) page from the base registry.
 */
export const stateGuides: StateGuide[] = [
  {
    slug: "florida",
    name: "Florida",
    abbreviation: "FL",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=2000&auto=format&fit=crop",
      alt: "Sunset over a Florida Gulf Coast beach",
    },
    metaDescription:
      "Discover handpicked beach houses, waterfront homes, family-friendly rentals, and romantic escapes throughout Florida. Compare stays before booking on Airbnb.",
    overview: [
      "Florida's coastline runs over a thousand miles between the Gulf and the Atlantic, and the vacation rental market reflects that range: sugar-sand Panhandle cottages, historic Key West conch houses, low-rise Gulf Coast islands, and busier Atlantic beach towns near the theme parks.",
      "We focus this guide on the destinations where curated, house-style rentals genuinely outperform a big resort or condo tower — usually smaller beach towns rather than the biggest metro beaches.",
    ],
    popularDestinations: ["destin", "key-west", "anna-maria-island"],
    bestSeasons: [
      { season: "Spring (March–May)", description: "Warm without being hot, and before the peak summer crowds and prices." },
      { season: "Fall (September–November)", description: "Warm Gulf water with fewer crowds, though it overlaps with hurricane season." },
    ],
    commonTripTypes: ["Family beach weeks", "Couples' getaways", "Fishing trips", "Multi-generational reunions"],
    planningInfo: [
      { label: "Hurricane season", value: "June 1 – November 30; consider travel insurance for late-summer trips." },
      { label: "Major airports", value: "Miami (MIA), Orlando (MCO), Tampa (TPA), Destin-Fort Walton Beach (VPS)" },
      { label: "Driving", value: "The state is long — Panhandle to Miami is roughly a 9-hour drive." },
    ],
    faqs: [
      {
        question: "Which part of Florida is best for a quiet family beach trip?",
        answer:
          "The Gulf Coast's smaller islands, like Anna Maria Island, tend to be quieter than the Atlantic side's bigger beach cities, thanks to lower building height limits and less nightlife.",
      },
      {
        question: "Should I worry about hurricanes when booking a Florida rental?",
        answer:
          "It's worth factoring in if you're booking June through November. Many hosts have flexible cancellation policies during named storms, but always check the specific listing's policy and consider travel insurance.",
      },
    ],
    hasCompletePage: true,
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    abbreviation: "TN",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?q=80&w=2000&auto=format&fit=crop",
      alt: "Great Smoky Mountains in Tennessee at sunrise",
    },
    metaDescription:
      "Explore handpicked cabins and mountain retreats across Tennessee, from Smoky Mountain hot-tub cabins to family reunion lodges. Compare stays before booking on Airbnb.",
    overview: [
      "Tennessee's cabin market is concentrated around the eastern edge of the state, where the Great Smoky Mountains draw more annual visitors than any other national park in the country. Gatlinburg and neighboring Pigeon Forge anchor the region's rental supply.",
      "Cabins here range enormously in scale, from one-room romantic hideaways to reunion-sized lodges with home theaters and game rooms, and nearly all lean into a hot tub and a mountain view as the two must-have features.",
    ],
    popularDestinations: ["gatlinburg"],
    bestSeasons: [
      { season: "October", description: "Peak fall foliage, and the busiest, most expensive month to book." },
      { season: "Late spring (May–June)", description: "Good weather with noticeably lower rates than fall or midsummer." },
    ],
    commonTripTypes: ["Family cabin trips", "Group reunions", "National park trips", "Fall foliage getaways"],
    planningInfo: [
      { label: "Nearest major airport", value: "McGhee Tyson (TYS), Knoxville" },
      { label: "National park entry", value: "Great Smoky Mountains National Park does not charge a general entrance fee." },
      { label: "Driving", value: "Many cabin access roads are steep gravel; confirm winter accessibility before booking." },
    ],
    faqs: [
      {
        question: "Is Great Smoky Mountains National Park free to enter?",
        answer:
          "Yes, the park does not charge a general entrance fee, though a parking tag is required for parking longer than 15 minutes at most locations.",
      },
      {
        question: "When do Gatlinburg-area cabins book up for fall?",
        answer:
          "The best cabins for peak foliage weekends (typically mid-to-late October) are often booked two to three months in advance.",
      },
    ],
    hasCompletePage: true,
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbreviation: "NC",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1552083974-186346191183?q=80&w=2000&auto=format&fit=crop",
      alt: "Sand dunes on the North Carolina Outer Banks",
    },
    metaDescription:
      "Browse curated vacation rentals across North Carolina, from Outer Banks beach houses to Blue Ridge mountain cabins. Compare stays before booking on Airbnb.",
    overview: [
      "North Carolina runs from Atlantic barrier islands to the Blue Ridge Mountains, giving it two genuinely distinct rental markets: the Outer Banks' big, week-long beach house leases, and the mountain towns around Asheville with a smaller-cabin, weekend-trip feel.",
      "We currently focus our North Carolina coverage on the Outer Banks, where the large-group rental market is especially well-developed.",
    ],
    popularDestinations: ["outer-banks"],
    bestSeasons: [
      { season: "Summer (June–August)", description: "Peak Outer Banks season, warm water and full boardwalks." },
      { season: "Late September", description: "Still-warm water with a fraction of the summer crowds." },
    ],
    commonTripTypes: ["Family reunions", "Large group beach weeks", "Weekend mountain trips"],
    planningInfo: [
      { label: "Nearest major airport (Outer Banks)", value: "Norfolk International (ORF), Virginia" },
      { label: "Lease pattern", value: "Most Outer Banks houses lease Saturday to Saturday in peak summer." },
    ],
    faqs: [
      {
        question: "Why do Outer Banks rentals usually require a full week?",
        answer:
          "It's a long-standing regional convention for peak summer, especially for larger houses. Shorter stays are more commonly available outside of June through August.",
      },
    ],
    hasCompletePage: true,
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbreviation: "SC",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
      alt: "Historic homes in downtown Charleston, South Carolina",
    },
    metaDescription:
      "Discover handpicked South Carolina vacation rentals, including historic Charleston stays and coastal getaways. Compare picks before booking on Airbnb.",
    overview: [
      "South Carolina's rental market splits between historic Charleston, a walkable, food-and-culture destination popular with couples, and the state's barrier island beach towns further south along the coast.",
      "Our South Carolina coverage currently centers on Charleston, where small, design-forward rentals in historic buildings are the standout category.",
    ],
    popularDestinations: ["charleston"],
    bestSeasons: [
      { season: "Spring (March–May)", description: "Mild weather and blooming gardens; the most popular and priciest season." },
      { season: "Fall (October–November)", description: "Similarly pleasant weather with somewhat lower rates than spring." },
    ],
    commonTripTypes: ["Couples' getaways", "Weekend trips", "Wedding travel"],
    planningInfo: [
      { label: "Nearest major airport (Charleston)", value: "Charleston International (CHS), about 15 minutes from downtown" },
    ],
    faqs: [
      {
        question: "Is Charleston walkable without a car?",
        answer:
          "The historic downtown peninsula is very walkable; most visitors don't need a car once they've checked into a downtown rental.",
      },
    ],
    hasCompletePage: true,
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbreviation: "GA",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2000&auto=format&fit=crop",
      alt: "Blue Ridge Mountains in North Georgia",
    },
    metaDescription:
      "Explore handpicked cabins and mountain retreats in North Georgia, including Blue Ridge hot tub cabins and treehouses. Compare stays before booking on Airbnb.",
    overview: [
      "North Georgia's mountain towns, led by Blue Ridge, have become the default weekend-cabin destination for Atlanta, thanks to a roughly 90-minute drive from the metro area. The rental supply here trends smaller and more romantic than Tennessee's family-lodge-heavy market just across the border.",
      "Expect a dense concentration of hot tub cabins, a growing number of treehouses and unique stays, and a walkable downtown built around a restored scenic railway.",
    ],
    popularDestinations: ["blue-ridge"],
    bestSeasons: [
      { season: "October", description: "Peak fall foliage, the most in-demand and expensive month." },
      { season: "Late spring", description: "Good hiking weather with lighter crowds and rates." },
    ],
    commonTripTypes: ["Weekend escapes", "Romantic cabin trips", "Small group getaways"],
    planningInfo: [
      { label: "Nearest major airport", value: "Hartsfield-Jackson Atlanta International (ATL)" },
      { label: "Driving", value: "About 90 minutes to 2 hours from Atlanta depending on traffic." },
    ],
    faqs: [
      {
        question: "How far ahead should I book a Blue Ridge cabin for October?",
        answer:
          "Two to three months ahead is a reasonable minimum for peak foliage weekends — the best-reviewed hot tub cabins go first.",
      },
    ],
    hasCompletePage: true,
  },
  {
    slug: "alabama",
    name: "Alabama",
    abbreviation: "AL",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000&auto=format&fit=crop",
      alt: "Gulf Coast beach near Gulf Shores, Alabama",
    },
    metaDescription:
      "Discover handpicked Gulf Coast vacation rentals in Alabama, including beach condos and family-friendly homes near Gulf Shores. Compare stays before booking on Airbnb.",
    overview: [
      "Alabama's coastline is short but popular, centered on Gulf Shores and Orange Beach, which draw a heavily family-focused summer crowd looking for a lower-cost alternative to Florida's Panhandle beaches just to the east.",
      "We're building out full destination coverage for Alabama's Gulf Coast; in the meantime, Florida Panhandle destinations like Destin cover a very similar stretch of coastline and travel style.",
    ],
    popularDestinations: [],
    bestSeasons: [
      { season: "Summer (June–August)", description: "Peak beach season with the warmest water." },
      { season: "Fall (September–October)", description: "Warm water, lower rates, and lighter crowds." },
    ],
    commonTripTypes: ["Family beach trips", "Budget-friendly beach weeks"],
    planningInfo: [
      { label: "Nearest major airport", value: "Pensacola International (PNS), Florida, about 45 minutes" },
    ],
    faqs: [
      {
        question: "Is the Alabama Gulf Coast similar to nearby Florida beaches?",
        answer:
          "Yes — Gulf Shores and Orange Beach share the same Gulf coastline character as the nearby Florida Panhandle, generally at a somewhat lower price point.",
      },
    ],
    hasCompletePage: false,
  },
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    region: "West",
    heroImage: {
      src: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2000&auto=format&fit=crop",
      alt: "Lake Tahoe shoreline in California",
    },
    metaDescription:
      "Browse handpicked California vacation rentals, from Lake Tahoe cabins to coastal escapes. Compare stays before booking on Airbnb.",
    overview: [
      "California is large enough to contain several unrelated vacation-rental markets — Sierra Nevada ski and lake towns, wine country cottages, and hundreds of miles of Pacific coastline. Our coverage currently focuses on the Lake Tahoe basin, which draws both a winter ski crowd and a summer lake crowd.",
    ],
    popularDestinations: ["lake-tahoe"],
    bestSeasons: [
      { season: "Winter (December–March)", description: "Ski season at Tahoe-area resorts." },
      { season: "Summer (July–August)", description: "Best weather for lake activities and hiking." },
    ],
    commonTripTypes: ["Ski trips", "Summer lake trips", "Couples' getaways"],
    planningInfo: [
      { label: "Nearest major airport (Tahoe)", value: "Reno-Tahoe International (RNO), Nevada" },
    ],
    faqs: [
      {
        question: "Is Lake Tahoe a summer or winter destination?",
        answer:
          "Both — it runs two genuinely distinct high seasons, one for skiing and one for lake activities, with spring and fall as quieter shoulder periods.",
      },
    ],
    hasCompletePage: true,
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbreviation: "AZ",
    region: "Southwest",
    heroImage: {
      src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop",
      alt: "Desert mountains near Scottsdale, Arizona",
    },
    metaDescription:
      "Explore handpicked Arizona vacation rentals, including Scottsdale desert homes with heated pools. Compare stays before booking on Airbnb.",
    overview: [
      "Arizona's rental market is dominated by the Phoenix metro area, and Scottsdale specifically, where desert-modern homes with private pools cater to a heavy winter-season crowd escaping colder climates. Flagstaff and Sedona offer a cooler, higher-elevation alternative in summer.",
    ],
    popularDestinations: ["scottsdale"],
    bestSeasons: [
      { season: "Winter (November–April)", description: "Mild, sunny, and the most popular season for the Phoenix area." },
      { season: "Summer", description: "Extreme heat in the low desert; better suited to higher-elevation towns like Flagstaff." },
    ],
    commonTripTypes: ["Golf trips", "Girls' trips", "Winter sun getaways"],
    planningInfo: [
      { label: "Nearest major airport", value: "Phoenix Sky Harbor International (PHX)" },
    ],
    faqs: [
      {
        question: "When is the best time to visit Scottsdale?",
        answer:
          "November through April, when daytime highs are comfortable. Summer temperatures regularly exceed 105°F in the Phoenix area.",
      },
    ],
    hasCompletePage: true,
  },
  {
    slug: "colorado",
    name: "Colorado",
    abbreviation: "CO",
    region: "Southwest",
    heroImage: {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop",
      alt: "Snow-covered Rocky Mountains in Colorado",
    },
    metaDescription:
      "Discover handpicked Colorado mountain vacation rentals, from ski cabins to summer mountain retreats. Compare stays before booking on Airbnb.",
    overview: [
      "Colorado's mountain towns run a long list of well-known ski destinations, and the vacation rental market is mature and highly seasonal, peaking hard around Christmas week, Presidents' Day weekend, and again in summer for hiking-focused trips.",
      "We're actively expanding full destination pages for Colorado; check back as we add complete coverage for towns like Breckenridge, Vail, and Estes Park.",
    ],
    popularDestinations: [],
    bestSeasons: [
      { season: "Winter (December–March)", description: "Ski season, with the highest rates around Christmas and Presidents' Day." },
      { season: "Summer (June–August)", description: "Hiking, mountain biking, and cooler temperatures than lower-elevation states." },
    ],
    commonTripTypes: ["Ski trips", "Summer mountain trips", "Group cabin getaways"],
    planningInfo: [
      { label: "Major airports", value: "Denver International (DEN), Eagle County (EGE) for the Vail Valley" },
    ],
    faqs: [
      {
        question: "When should I book a Colorado ski rental?",
        answer:
          "For Christmas week or Presidents' Day weekend, four to six months ahead is a reasonable target given how far in advance the best cabins are typically booked.",
      },
    ],
    hasCompletePage: false,
  },
  {
    slug: "utah",
    name: "Utah",
    abbreviation: "UT",
    region: "Southwest",
    heroImage: {
      src: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=2000&auto=format&fit=crop",
      alt: "Snow-covered mountain town of Park City, Utah",
    },
    metaDescription:
      "Browse handpicked Utah vacation rentals, including Park City ski homes and national park gateway stays. Compare stays before booking on Airbnb.",
    overview: [
      "Utah pairs a genuinely world-class ski destination in Park City with some of the country's most dramatic national park scenery further south — Zion, Bryce Canyon, and Arches. Our current coverage focuses on Park City's rental market.",
    ],
    popularDestinations: ["park-city"],
    bestSeasons: [
      { season: "Winter (December–February)", description: "Peak ski season in Park City." },
      { season: "Late January", description: "Sundance Film Festival — book far ahead and expect a price premium." },
    ],
    commonTripTypes: ["Ski trips", "Group getaways", "National park road trips"],
    planningInfo: [
      { label: "Nearest major airport (Park City)", value: "Salt Lake City International (SLC), about 40 minutes" },
    ],
    faqs: [
      {
        question: "How far is Park City from the airport?",
        answer:
          "About 35 to 45 minutes from Salt Lake City International Airport, making it one of the more accessible major ski towns in the country.",
      },
    ],
    hasCompletePage: true,
  },
  {
    slug: "texas",
    name: "Texas",
    abbreviation: "TX",
    region: "Southwest",
    heroImage: {
      src: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2000&auto=format&fit=crop",
      alt: "Texas Hill Country landscape",
    },
    metaDescription:
      "Discover handpicked Texas vacation rentals, from Hill Country cabins to Gulf Coast beach homes. Compare stays before booking on Airbnb.",
    overview: [
      "Texas is large enough to hold several distinct rental markets: Hill Country cabins and wineries near Fredericksburg, Gulf Coast beach towns like South Padre Island, and lake destinations across the state's many reservoirs.",
      "We're building out complete destination pages for Texas; broader statewide planning information is below while full city guides are added.",
    ],
    popularDestinations: [],
    bestSeasons: [
      { season: "Spring (March–May)", description: "Wildflower season in the Hill Country and mild statewide temperatures." },
      { season: "Fall (October–November)", description: "Cooler temperatures after the peak of summer heat." },
    ],
    commonTripTypes: ["Hill Country getaways", "Gulf Coast beach trips", "Lake house weekends"],
    planningInfo: [
      { label: "Major airports", value: "Dallas-Fort Worth (DFW), Austin-Bergstrom (AUS), Houston (IAH)" },
    ],
    faqs: [
      {
        question: "What's the best season to visit Texas Hill Country?",
        answer:
          "Spring, both for milder temperatures and for the region's well-known bluebonnet wildflower season, typically peaking in late March and April.",
      },
    ],
    hasCompletePage: false,
  },
  {
    slug: "oklahoma",
    name: "Oklahoma",
    abbreviation: "OK",
    region: "Southwest",
    heroImage: {
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
      alt: "Pine forest near Broken Bow, Oklahoma",
    },
    metaDescription:
      "Explore handpicked Oklahoma vacation rentals, including Broken Bow lake cabins with private docks. Compare stays before booking on Airbnb.",
    overview: [
      "Oklahoma's standout rental market is Broken Bow, in the pine-covered hills of the southeast corner of the state, where Broken Bow Lake has driven a boom in cabin construction over the past decade — many built specifically as vacation rentals with a hot tub and lake or dock access.",
    ],
    popularDestinations: ["broken-bow"],
    bestSeasons: [
      { season: "Summer", description: "Peak lake season for boating and swimming." },
      { season: "October", description: "Cooler weather and good fall color in the surrounding hills." },
    ],
    commonTripTypes: ["Fishing trips", "Couples' getaways", "Group cabin trips"],
    planningInfo: [
      { label: "Nearest airport (Broken Bow)", value: "No major airport nearby; most visitors drive from Dallas, Oklahoma City, or Little Rock." },
    ],
    faqs: [
      {
        question: "How far is Broken Bow from Dallas?",
        answer: "About 3.5 hours by car, which is why it's become a popular weekend and long-weekend destination for the Dallas–Fort Worth area.",
      },
    ],
    hasCompletePage: true,
  },
  {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    region: "Northeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=2000&auto=format&fit=crop",
      alt: "Fall foliage in the Catskill Mountains, New York",
    },
    metaDescription:
      "Discover handpicked New York vacation rentals, from Catskills cabins to Hamptons beach homes. Compare stays before booking on Airbnb.",
    overview: [
      "New York State stretches far beyond the city itself, and its rental market includes the Catskill Mountains' cabin renaissance, the Hamptons' well-known beach-house scene on Long Island, and the Finger Lakes' wine country cottages.",
      "We're building out complete destination pages for New York State; check back as full city-level guides are added.",
    ],
    popularDestinations: [],
    bestSeasons: [
      { season: "Fall (late September–October)", description: "Peak foliage in the Catskills and Finger Lakes." },
      { season: "Summer", description: "Beach season in the Hamptons and on Long Island." },
    ],
    commonTripTypes: ["Weekend upstate trips", "Beach weekends", "Wine country getaways"],
    planningInfo: [
      { label: "Major airports", value: "JFK, LaGuardia (LGA), Newark (EWR), Albany (ALB)" },
    ],
    faqs: [
      {
        question: "How far is the Catskills from New York City?",
        answer: "About 2 to 2.5 hours by car, making it a popular weekend-trip region for city residents.",
      },
    ],
    hasCompletePage: false,
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbreviation: "MA",
    region: "Northeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?q=80&w=2000&auto=format&fit=crop",
      alt: "Lighthouse on Cape Cod, Massachusetts",
    },
    metaDescription:
      "Browse handpicked Massachusetts vacation rentals, including Cape Cod cottages and coastal family homes. Compare stays before booking on Airbnb.",
    overview: [
      "Massachusetts' vacation rental market is anchored by Cape Cod, the Islands (Martha's Vineyard and Nantucket), and the North Shore. Cape Cod remains the classic, most accessible option for a family summer week, with a rental style built around shingled cottages and harbor towns.",
    ],
    popularDestinations: ["cape-cod"],
    bestSeasons: [
      { season: "July–August", description: "Peak Cape Cod summer, warmest water, highest rates." },
      { season: "September", description: "Warm days, cooler nights, and considerably lighter crowds." },
    ],
    commonTripTypes: ["Family vacations", "Pet-friendly trips", "Romantic weekends"],
    planningInfo: [
      { label: "Nearest major airport (Cape Cod)", value: "Boston Logan International (BOS), about 1.5–2 hours by car" },
    ],
    faqs: [
      {
        question: "How early should I book a Cape Cod rental for summer?",
        answer: "Four to six months ahead is a reasonable target for July and August — the best cottages go early.",
      },
    ],
    hasCompletePage: true,
  },
  {
    slug: "maine",
    name: "Maine",
    abbreviation: "ME",
    region: "Northeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=2000&auto=format&fit=crop",
      alt: "Rocky coastline in Maine",
    },
    metaDescription:
      "Explore handpicked Maine vacation rentals, from rocky-coast cottages to lakeside cabins. Compare stays before booking on Airbnb.",
    overview: [
      "Maine's rental market ranges from classic rocky-coast cottages near Acadia National Park to quiet lake cabins further inland. It's a shorter, more concentrated summer season than points south, with a strong lobster-and-lighthouse identity that draws a loyal repeat crowd.",
      "We're building out complete destination pages for Maine; check back as full coverage is added for Acadia-area towns and the Maine lakes region.",
    ],
    popularDestinations: [],
    bestSeasons: [
      { season: "Summer (June–August)", description: "The core season for coastal Maine, with mild temperatures and long days." },
      { season: "Fall (late September–October)", description: "Excellent foliage, particularly inland near the lakes region." },
    ],
    commonTripTypes: ["Coastal getaways", "National park trips", "Lake house weekends"],
    planningInfo: [
      { label: "Nearest major airport (Acadia area)", value: "Bangor International (BGR)" },
    ],
    faqs: [
      {
        question: "Is Maine a summer-only destination?",
        answer:
          "Summer is the peak season, but fall foliage travel is a significant second season, particularly for the lakes region and inland towns.",
      },
    ],
    hasCompletePage: false,
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    abbreviation: "HI",
    region: "West",
    heroImage: {
      src: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2000&auto=format&fit=crop",
      alt: "Tropical beach in Hawaii",
    },
    metaDescription:
      "Discover handpicked Hawaii vacation rentals across the islands, from beachfront condos to jungle retreats. Compare stays before booking on Airbnb.",
    overview: [
      "Hawaii's vacation rental rules vary significantly by island and even by county, with some areas restricting short-term rentals to specific resort-zoned neighborhoods. That regulatory patchwork makes careful, verified listings especially important here.",
      "We're building out complete, island-by-island destination pages for Hawaii; check back as full coverage is added for Oahu, Maui, Kauai, and the Big Island.",
    ],
    popularDestinations: [],
    bestSeasons: [
      { season: "April–May and September–October", description: "Shoulder seasons with lower rates and fewer crowds than winter." },
      { season: "Winter (December–March)", description: "Peak season and whale-watching months on several islands." },
    ],
    commonTripTypes: ["Honeymoons", "Multi-generational trips", "Island-hopping vacations"],
    planningInfo: [
      { label: "Major airports", value: "Honolulu (HNL), Kahului (OGG), Kona (KOA), Lihue (LIH)" },
      { label: "Short-term rental rules", value: "Vary by island and county — always confirm a listing is in a legally permitted zone." },
    ],
    faqs: [
      {
        question: "Are vacation rentals legal everywhere in Hawaii?",
        answer:
          "No — several counties restrict short-term rentals to specific resort-zoned areas. This is one of the most important things to verify directly on the listing and with the host before booking.",
      },
    ],
    hasCompletePage: false,
  },
];

export function getStateGuide(slug: string) {
  return stateGuides.find((s) => s.slug === slug);
}

export function getAllStateSlugsWithGuides() {
  return stateGuides.map((s) => s.slug);
}

export function stateHasRegistryEntry(slug: string) {
  return usStates.some((s) => s.slug === slug);
}
