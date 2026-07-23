import type { CityDestination } from "./types";

/**
 * City / destination pages. Each entry becomes a `/destinations/[state]/[city]`
 * route. Maps to a `destination` document type in a future CMS, with
 * `stateSlug` as a reference field into a `state` collection.
 */
export const destinations: CityDestination[] = [
  {
    slug: "destin",
    city: "Destin",
    stateSlug: "florida",
    state: "Florida",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000&auto=format&fit=crop",
      alt: "Emerald green water and white sand beach in Destin, Florida",
    },
    tagline: "Emerald water, white sand, and a working harbor to match.",
    metaDescription:
      "Handpicked vacation rentals in Destin, Florida, including beachfront cottages and family-friendly homes near the harbor. Compare stays and continue to Airbnb.",
    introduction: [
      "Destin sits on a narrow stretch of the Florida Panhandle where the Gulf turns an unusually bright green-blue, a result of the sugar-white quartz sand that lines the coast. The town built its identity on charter fishing before the beach crowds arrived, and Destin Harbor still runs a full fleet.",
      "Most vacation rentals here fall into two categories: high-rise condo towers along Highway 98, and lower, house-style rentals set back on quieter beach roads to the east and west. We focus on the second category, since that's where a curated pick makes the most difference.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Destin-Fort Walton Beach (VPS), about 15 minutes" },
      { label: "Best for", value: "Beach weeks, family reunions, fishing trips" },
      { label: "Peak season", value: "June through August" },
      { label: "Typical drive from Atlanta", value: "About 5.5 hours" },
    ],
    neighborhoods: [
      { name: "Old Destin", description: "Quieter beach roads east of the harbor, mostly single-family homes." },
      { name: "Crystal Beach", description: "A walkable pocket of cottages and mid-rise condos west of the harbor." },
      { name: "Miramar Beach", description: "Closer to Silver Sands outlet mall and Baytowne Wharf, more resort-style." },
    ],
    stayCategories: ["beachfront", "family-friendly", "pet-friendly", "private-pool"],
    attractions: [
      { name: "Destin Harbor Boardwalk", description: "Charter boats, restaurants, and sunset cruises departing daily." },
      { name: "Henderson Beach State Park", description: "A quieter, less developed stretch of protected dune and beach." },
      { name: "Crab Island", description: "A shallow sandbar reachable by boat, popular for a floating afternoon." },
    ],
    bestTimeToVisit:
      "Late May and September offer warm Gulf water with smaller crowds than the June–July peak. Winter is mild but many rentals and restaurants scale back hours.",
    tripStyles: ["Family beach weeks", "Fishing trips", "Multi-family reunions"],
    gettingThere:
      "Destin-Fort Walton Beach Airport (VPS) is the closest option, about 15 minutes from most rentals. Pensacola International (PNS) is roughly an hour away and sometimes has cheaper fares.",
    faqs: [
      {
        question: "Do I need a car in Destin?",
        answer:
          "Yes, in most cases. While some beach-road neighborhoods are walkable to a grocery store or restaurant, Destin is spread along a long highway corridor, and a car makes it much easier to reach the harbor, state park, and grocery stores.",
      },
      {
        question: "Is Destin good for families with young kids?",
        answer:
          "Generally yes. The Gulf here has a gentler slope than many East Coast beaches, and the harbor area has kid-friendly restaurants and mini-golf. Confirm any pool fencing or stair safety details directly with the host before booking with young children.",
      },
    ],
    relatedDestinations: ["anna-maria-island", "key-west"],
    relatedGuides: ["best-beach-towns-florida-families"],
    latitude: 30.3935,
    longitude: -86.4958,
    trending: true,
  },
  {
    slug: "key-west",
    city: "Key West",
    stateSlug: "florida",
    state: "Florida",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1580541631950-7282082b53fe?q=80&w=2000&auto=format&fit=crop",
      alt: "Colorful houses on a Key West, Florida street",
    },
    tagline: "The end of the road, and a full-on party of pastel houses.",
    metaDescription:
      "Discover curated Key West vacation rentals, from historic conch cottages to private-pool escapes near Duval Street. See standout picks before booking on Airbnb.",
    introduction: [
      "Key West is the last stop on US-1, about four hours south of Miami by car, and it has a personality that's distinct from the rest of the Florida Keys — part fishing village, part art colony, part nightly street party on Duval Street.",
      "Rentals in Old Town skew historic: shotgun-style conch houses, many divided into smaller units, some with tiny private pools squeezed into what used to be a side yard. Rentals outside Old Town tend to be larger and quieter but require a short drive or bike ride in.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Key West International (EYW), 10 minutes from Old Town" },
      { label: "Best for", value: "Couples, milestone trips, small groups" },
      { label: "Peak season", value: "December through April" },
      { label: "Typical drive from Miami", value: "About 3.5–4 hours" },
    ],
    neighborhoods: [
      { name: "Old Town", description: "Walkable, historic, close to Duval Street and Mallory Square." },
      { name: "New Town", description: "Quieter, more residential, a short bike ride from Old Town." },
    ],
    stayCategories: ["private-pool", "romantic", "luxury"],
    attractions: [
      { name: "Duval Street", description: "Bars, live music, and shops running the length of Old Town." },
      { name: "Mallory Square", description: "Nightly sunset celebration with street performers." },
      { name: "Key West Butterfly Conservatory", description: "A quieter, family-friendly stop away from the bar scene." },
    ],
    bestTimeToVisit:
      "December through April brings the most reliable weather and the biggest crowds. Late spring and early fall are quieter and less humid than peak summer.",
    tripStyles: ["Couples' getaways", "Girls' trips", "Milestone celebrations"],
    gettingThere:
      "Key West International Airport (EYW) has direct flights from several East Coast hubs and sits minutes from Old Town. Flying into Miami and driving the Overseas Highway is the more affordable, more scenic option.",
    faqs: [
      {
        question: "Is Key West walkable?",
        answer:
          "Old Town is very walkable and bike-friendly. If your rental is in New Town, plan on a bike, scooter, or short rideshare to reach Duval Street and the harbor.",
      },
      {
        question: "Is Key West a good fit for a family trip?",
        answer:
          "It can be, especially outside of peak spring break weeks, but the town's nightlife-forward reputation means it's more commonly booked by couples and groups of friends. Families should look specifically at New Town rentals, away from the Duval Street noise.",
      },
    ],
    relatedDestinations: ["anna-maria-island", "destin"],
    relatedGuides: ["florida-boating-fishing-destinations"],
    latitude: 24.5551,
    longitude: -81.78,
    trending: true,
  },
  {
    slug: "anna-maria-island",
    city: "Anna Maria Island",
    stateSlug: "florida",
    state: "Florida",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2000&auto=format&fit=crop",
      alt: "Quiet low-rise beach town street on Anna Maria Island, Florida",
    },
    tagline: "A seven-mile island that never built a high-rise.",
    metaDescription:
      "Explore handpicked Anna Maria Island vacation rentals — beach bungalows and family homes on Florida's Gulf Coast. Compare stays before booking on Airbnb.",
    introduction: [
      "Anna Maria Island runs about seven miles along Florida's Gulf Coast near Bradenton, and a longstanding building height limit has kept it free of the condo towers common elsewhere in the state. Most stays are single-family cottages and bungalows, often raised on stilts.",
      "A free trolley loops the length of the island, which makes it realistic to leave a car parked for most of a trip. The pace here is intentionally slower than nearby Siesta Key or Clearwater.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Sarasota-Bradenton (SRQ), about 30 minutes" },
      { label: "Best for", value: "Couples, small families, quiet beach trips" },
      { label: "Peak season", value: "February through April" },
      { label: "Typical drive from Tampa", value: "About 1 hour" },
    ],
    neighborhoods: [
      { name: "Anna Maria", description: "The quietest, northernmost part of the island, with the historic city pier." },
      { name: "Holmes Beach", description: "The island's commercial center, with more restaurants and shops." },
      { name: "Bradenton Beach", description: "The southern end, closer to the bridge and Bean Point sunsets." },
    ],
    stayCategories: ["beachfront", "family-friendly", "pet-friendly"],
    attractions: [
      { name: "Bean Point", description: "A wide, quiet beach at the island's northern tip, popular for sunsets." },
      { name: "Anna Maria City Pier", description: "A rebuilt fishing pier with harbor views." },
      { name: "Historic Green Village", description: "A cluster of preserved 1920s cottages turned into shops." },
    ],
    bestTimeToVisit:
      "February through April brings warm days and lower humidity than summer. Hurricane season (June–November) can bring last-minute weather disruptions worth watching if booking during those months.",
    tripStyles: ["Couples' getaways", "Small family trips", "Slow beach weeks"],
    gettingThere:
      "Sarasota-Bradenton International (SRQ) is the closest airport, about 30 minutes by car. Tampa International (TPA) is roughly an hour away and often has more flight options.",
    faqs: [
      {
        question: "Do I need a car on Anna Maria Island?",
        answer:
          "Not necessarily once you've arrived — a free trolley runs the length of the island frequently. You'll likely want a car to get to and from the airport and for any day trips off-island.",
      },
      {
        question: "Is Anna Maria Island quieter than other Florida beach towns?",
        answer:
          "Yes, that's largely the draw. Building height restrictions have kept development low-rise, and the island has intentionally avoided the high-density resort feel found in some other Gulf Coast destinations.",
      },
    ],
    relatedDestinations: ["destin", "key-west"],
    relatedGuides: ["best-beach-towns-florida-families"],
    latitude: 27.5306,
    longitude: -82.7379,
    trending: false,
  },
  {
    slug: "gatlinburg",
    city: "Gatlinburg",
    stateSlug: "tennessee",
    state: "Tennessee",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?q=80&w=2000&auto=format&fit=crop",
      alt: "Fog rolling over the Great Smoky Mountains near Gatlinburg, Tennessee",
    },
    tagline: "The main gateway into the country's most-visited national park.",
    metaDescription:
      "Browse curated cabins and mountain homes near Gatlinburg, Tennessee, close to Great Smoky Mountains National Park. Compare stays before booking on Airbnb.",
    introduction: [
      "Gatlinburg sits right at the northern entrance to Great Smoky Mountains National Park, the most-visited national park in the country, and the town's whole economy is built around that fact — go-kart tracks, pancake houses, and a dense strip of attractions downtown.",
      "The better rental strategy is usually to stay a few minutes outside the downtown strip, up one of the ridge roads, where cabins get a hot tub deck and an actual mountain view instead of a parking lot.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "McGhee Tyson (TYS) in Knoxville, about 45 minutes" },
      { label: "Best for", value: "Families, group cabin trips, fall foliage" },
      { label: "Peak season", value: "October (foliage) and July" },
      { label: "Typical drive from Nashville", value: "About 3.5 hours" },
    ],
    neighborhoods: [
      { name: "Downtown Gatlinburg", description: "Walkable to the aquarium, arcades, and the SkyLift." },
      { name: "Ski Mountain Road", description: "Elevated cabins with mountain views, a short drive to downtown." },
      { name: "Chalet Village", description: "A quieter cabin community with easy park access." },
    ],
    stayCategories: ["cabins", "hot-tub", "family-friendly", "national-park-stays"],
    attractions: [
      { name: "Great Smoky Mountains National Park", description: "Free entry, with trailheads minutes from downtown." },
      { name: "Gatlinburg SkyLift Park", description: "A chairlift ride with a pedestrian sky bridge at the top." },
      { name: "Ober Gatlinburg", description: "A mountaintop amusement park and, in winter, a small ski area." },
    ],
    bestTimeToVisit:
      "Mid-to-late October brings the best fall color and the biggest crowds — book cabins months ahead. Early summer (June) offers good weather with fewer crowds than July.",
    tripStyles: ["Family cabin trips", "Group reunions", "National park trips"],
    gettingThere:
      "Knoxville's McGhee Tyson Airport (TYS) is the closest, about 45 minutes away. Asheville Regional (AVL) is a scenic 90-minute drive over the mountains.",
    faqs: [
      {
        question: "Is a 4WD vehicle necessary in Gatlinburg?",
        answer:
          "Not usually, but many cabins sit on steep gravel roads that can be difficult in winter ice or heavy rain. Check the specific access road conditions for a cabin before booking a winter trip.",
      },
      {
        question: "How far is Gatlinburg from the national park entrance?",
        answer:
          "Downtown Gatlinburg sits directly at the park boundary — you can be on a trailhead within a few minutes of leaving most rentals.",
      },
    ],
    relatedDestinations: ["blue-ridge", "outer-banks"],
    relatedGuides: ["where-to-stay-smoky-mountains-national-park"],
    latitude: 35.7143,
    longitude: -83.5102,
    trending: true,
  },
  {
    slug: "blue-ridge",
    city: "Blue Ridge",
    stateSlug: "georgia",
    state: "Georgia",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2000&auto=format&fit=crop",
      alt: "Mountain ridgeline near Blue Ridge, Georgia at golden hour",
    },
    tagline: "North Georgia's cabin capital, an easy weekend trip from Atlanta.",
    metaDescription:
      "Find handpicked cabins and mountain retreats near Blue Ridge, Georgia, including hot tub cabins and lake-area stays. Compare picks before booking on Airbnb.",
    introduction: [
      "Blue Ridge is close enough to Atlanta — about 90 minutes — that it's become the default weekend-cabin answer for much of the metro area. The town itself is small and walkable, built around a restored scenic railway depot and a short strip of shops.",
      "The surrounding hills are dense with cabin rentals of every size, from one-room romantic getaways to large ridge-top lodges built for reunions. Fall books up first, driven by leaf-peeping weekends.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Hartsfield-Jackson Atlanta (ATL), about 1.5–2 hours" },
      { label: "Best for", value: "Weekend trips, romantic cabins, small groups" },
      { label: "Peak season", value: "October" },
      { label: "Typical drive from Atlanta", value: "About 90 minutes" },
    ],
    neighborhoods: [
      { name: "Downtown Blue Ridge", description: "Walkable shops and restaurants around the scenic railway." },
      { name: "Aska Road area", description: "Cabin-dense hills with easy access to the Toccoa River." },
      { name: "Lake Blue Ridge", description: "Lakefront and lake-view cabins a short drive from town." },
    ],
    stayCategories: ["cabins", "romantic", "treehouses"],
    attractions: [
      { name: "Blue Ridge Scenic Railway", description: "A restored train that runs along the Toccoa River." },
      { name: "Toccoa River Swinging Bridge", description: "One of the longer swinging bridges in Georgia." },
      { name: "Downtown Blue Ridge", description: "Shops, breweries, and restaurants within walking distance." },
    ],
    bestTimeToVisit:
      "Early-to-mid October has the most reliable fall color; book cabins at least two to three months ahead for those weekends. Late spring is quieter with fewer crowds.",
    tripStyles: ["Weekend escapes", "Couples' getaways", "Small group trips"],
    gettingThere:
      "Hartsfield-Jackson Atlanta International (ATL) is the practical airport, followed by a 90-minute to 2-hour drive north depending on traffic.",
    faqs: [
      {
        question: "How far in advance should I book a Blue Ridge cabin for fall?",
        answer:
          "For peak foliage weekends in October, two to three months ahead is a reasonable minimum — the best cabins with hot tubs and views go first.",
      },
      {
        question: "Is Blue Ridge good for a weekend trip without a long drive?",
        answer:
          "Yes — its main appeal for Atlanta-area travelers is exactly that: a genuine mountain-cabin feel within about 90 minutes of the city.",
      },
    ],
    relatedDestinations: ["gatlinburg", "outer-banks"],
    relatedGuides: ["romantic-weekend-getaways-east-coast"],
    latitude: 34.8636,
    longitude: -84.323,
    trending: true,
  },
  {
    slug: "outer-banks",
    city: "Outer Banks",
    stateSlug: "north-carolina",
    state: "North Carolina",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1552083974-186346191183?q=80&w=2000&auto=format&fit=crop",
      alt: "Wide sandy beach and dunes on North Carolina's Outer Banks",
    },
    tagline: "A string of barrier islands built for big-family beach weeks.",
    metaDescription:
      "Explore curated Outer Banks vacation rentals, from Corolla beach houses to large group homes. Compare handpicked stays before booking on Airbnb.",
    introduction: [
      "The Outer Banks stretch across a string of barrier islands off North Carolina, and the rental market here is built around one dominant pattern: the Saturday-to-Saturday week-long lease for a large, multi-bedroom house shared by an extended family or several families together.",
      "Corolla and Duck tend toward newer, larger houses with private pools; Nags Head and points south have an older, more classic beach-cottage feel.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Norfolk International (ORF), about 1.5–2 hours" },
      { label: "Best for", value: "Family reunions, large groups, beach weeks" },
      { label: "Peak season", value: "June through August" },
      { label: "Typical drive from Richmond", value: "About 3 hours" },
    ],
    neighborhoods: [
      { name: "Corolla", description: "Newer, larger homes, including areas reachable only by 4WD." },
      { name: "Duck", description: "A walkable town center with upscale shops, quieter beaches." },
      { name: "Nags Head", description: "Classic cottage feel, closer to Jockey's Ridge and the fishing pier." },
    ],
    stayCategories: ["beachfront", "large-group-homes", "family-friendly", "private-pool"],
    attractions: [
      { name: "Currituck Beach Lighthouse", description: "A climbable historic lighthouse in Corolla." },
      { name: "Corolla Wild Horse Tours", description: "Guided drives to see the area's wild Spanish mustangs." },
      { name: "Jockey's Ridge State Park", description: "The tallest natural sand dune system on the East Coast." },
    ],
    bestTimeToVisit:
      "Summer is peak season for a reason — warm water and full boardwalks. Late September brings warm water with far fewer crowds and lower rates.",
    tripStyles: ["Family reunions", "Large group trips", "Beach weeks"],
    gettingThere:
      "Norfolk International (ORF) in Virginia is the closest major airport, about 1.5 to 2 hours from most Outer Banks rentals depending on which town.",
    faqs: [
      {
        question: "Why do most Outer Banks rentals require a full week?",
        answer:
          "It's a long-standing regional convention, especially in peak summer: most large houses lease Saturday to Saturday. Shorter stays are more commonly available in the shoulder seasons.",
      },
      {
        question: "Do I need 4WD to visit the Outer Banks?",
        answer:
          "Only if your rental is in the northern, unpaved section of Corolla beyond the paved road's end. Most Outer Banks towns are accessible by any vehicle.",
      },
    ],
    relatedDestinations: ["blue-ridge", "gatlinburg"],
    relatedGuides: ["large-group-vacation-rental-guide"],
    latitude: 35.9086,
    longitude: -75.6716,
    trending: true,
  },
  {
    slug: "charleston",
    city: "Charleston",
    stateSlug: "south-carolina",
    state: "South Carolina",
    region: "Southeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
      alt: "Historic pastel row houses in downtown Charleston, South Carolina",
    },
    tagline: "Cobblestones, carriage rides, and some of the South's best food.",
    metaDescription:
      "Discover handpicked Charleston, South Carolina vacation rentals, including historic carriage houses and downtown stays. Compare picks before booking on Airbnb.",
    introduction: [
      "Charleston's historic peninsula is compact and walkable, which makes it one of the easier US cities to explore without a car once you've arrived. Rentals range from restored carriage houses tucked behind grand homes to condos in the newer areas north of downtown.",
      "The city draws a steady mix of couples on weekend trips, wedding parties, and food-focused travelers, and the rental market skews toward smaller, design-forward units rather than large group houses.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Charleston International (CHS), about 15 minutes" },
      { label: "Best for", value: "Couples, weekend trips, food-focused travel" },
      { label: "Peak season", value: "March through May" },
      { label: "Typical drive from Atlanta", value: "About 4.5 hours" },
    ],
    neighborhoods: [
      { name: "French Quarter", description: "The most historic core, walkable to the Battery and Rainbow Row." },
      { name: "Wagener Terrace", description: "A quieter, residential neighborhood a short drive from downtown." },
      { name: "West Ashley", description: "More affordable rentals, a short drive across the river." },
    ],
    stayCategories: ["romantic", "luxury"],
    attractions: [
      { name: "The Battery", description: "A waterfront promenade lined with antebellum mansions." },
      { name: "Rainbow Row", description: "A famous stretch of colorful historic houses." },
      { name: "Charleston City Market", description: "Historic covered market with local vendors." },
    ],
    bestTimeToVisit:
      "March through May brings mild weather and blooming gardens, making it the most popular (and priciest) season. Fall is a close second with fewer crowds.",
    tripStyles: ["Couples' getaways", "Weekend trips", "Food and culture trips"],
    gettingThere:
      "Charleston International Airport (CHS) sits about 15 minutes from downtown, making it one of the more convenient fly-in weekend destinations in the Southeast.",
    faqs: [
      {
        question: "Is downtown Charleston walkable?",
        answer:
          "Yes — the historic peninsula is compact enough that most visitors don't need a car once they've checked in, though parking can be limited at some historic properties.",
      },
      {
        question: "When should I book for spring in Charleston?",
        answer:
          "Spring is the city's most popular season for weddings and garden tours, so booking three to four months ahead is reasonable for March through May travel.",
      },
    ],
    relatedDestinations: ["outer-banks", "cape-cod"],
    relatedGuides: ["romantic-weekend-getaways-east-coast"],
    latitude: 32.7765,
    longitude: -79.9311,
    trending: true,
  },
  {
    slug: "broken-bow",
    city: "Broken Bow",
    stateSlug: "oklahoma",
    state: "Oklahoma",
    region: "Southwest",
    heroImage: {
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
      alt: "Pine forest and lake near Broken Bow, Oklahoma",
    },
    tagline: "Southeastern Oklahoma's answer to a mountain lake town.",
    metaDescription:
      "Browse curated cabins near Broken Bow, Oklahoma, including private-dock lodges on Broken Bow Lake. Compare handpicked stays before booking on Airbnb.",
    introduction: [
      "Broken Bow sits in the pine-covered hills of southeastern Oklahoma, built around Broken Bow Lake and the Beavers Bend State Park area. It's become one of the region's most-booked cabin destinations, drawing travelers from Dallas, Oklahoma City, and Little Rock.",
      "The cabin market here ranges from small romantic units with a private hot tub to large lakefront lodges with a private dock — dock access is a genuine differentiator worth checking carefully in each listing.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Texarkana Regional (TXK), about 1.5 hours" },
      { label: "Best for", value: "Fishing trips, couples' getaways, group cabins" },
      { label: "Peak season", value: "Summer and October" },
      { label: "Typical drive from Dallas", value: "About 3.5 hours" },
    ],
    neighborhoods: [
      { name: "Hochatown", description: "The main cabin and dining hub near the lake and state park." },
      { name: "Beavers Bend area", description: "Closer to the state park's trails and the Mountain Fork River." },
    ],
    stayCategories: ["cabins", "lakefront", "private-dock", "hot-tub"],
    attractions: [
      { name: "Broken Bow Lake", description: "A 14,000-acre lake popular for fishing and boating." },
      { name: "Beavers Bend State Park", description: "Hiking trails, a state park lodge, and river access." },
      { name: "Mountain Fork River", description: "A trout-stocked river popular with anglers below the dam." },
    ],
    bestTimeToVisit:
      "Summer is busiest for lake activities; October brings cooler weather and good fall color in the surrounding hills.",
    tripStyles: ["Fishing trips", "Couples' getaways", "Group cabin trips"],
    gettingThere:
      "There's no major airport nearby — most visitors drive from Dallas–Fort Worth (about 3.5 hours), Oklahoma City (about 3 hours), or Little Rock (about 3 hours).",
    faqs: [
      {
        question: "What's the difference between a lakefront cabin and a private-dock cabin in Broken Bow?",
        answer:
          "Lakefront means the property borders the water; a private dock means the cabin has its own dedicated dock rather than shared or community access. Always confirm which applies in the individual listing.",
      },
      {
        question: "Is Broken Bow good for a trip without a boat?",
        answer:
          "Yes — many visitors come for the cabins, hiking, and river tubing without ever renting a boat, though lake access is a major draw for those who do.",
      },
    ],
    relatedDestinations: ["blue-ridge", "gatlinburg"],
    relatedGuides: ["best-lake-vacation-destinations-usa"],
    latitude: 34.017,
    longitude: -94.7405,
    trending: true,
  },
  {
    slug: "scottsdale",
    city: "Scottsdale",
    stateSlug: "arizona",
    state: "Arizona",
    region: "Southwest",
    heroImage: {
      src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop",
      alt: "Desert landscape with mountains near Scottsdale, Arizona",
    },
    tagline: "Desert modern homes, golf courses, and year-round sun.",
    metaDescription:
      "Discover handpicked Scottsdale, Arizona vacation rentals, including heated-pool homes with mountain views. Compare picks before booking on Airbnb.",
    introduction: [
      "Scottsdale pairs a walkable Old Town core with miles of desert-modern residential neighborhoods backed against mountain preserves. It's a golf and spa destination first, drawing a steady winter crowd escaping colder climates, plus a lively spring training and bachelorette season.",
      "Rentals here tend toward newer, single-story homes with a private pool — often heated, which matters more here than almost anywhere else on this list given how mild winter is and how brutal summer gets.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Phoenix Sky Harbor (PHX), about 20–30 minutes" },
      { label: "Best for", value: "Golf trips, girls' trips, winter sun" },
      { label: "Peak season", value: "November through April" },
      { label: "Typical drive from Los Angeles", value: "About 6 hours" },
    ],
    neighborhoods: [
      { name: "Old Town Scottsdale", description: "Walkable nightlife, galleries, and restaurants." },
      { name: "North Scottsdale", description: "Quieter, more residential, closer to hiking trails." },
      { name: "McCormick Ranch", description: "Golf-course-adjacent, family-friendly." },
    ],
    stayCategories: ["private-pool", "heated-pool", "luxury", "desert-homes"],
    attractions: [
      { name: "Camelback Mountain", description: "A popular, strenuous day-hike with panoramic views." },
      { name: "Old Town Scottsdale", description: "Galleries, restaurants, and nightlife." },
      { name: "TPC Scottsdale", description: "Home of the Phoenix Open golf tournament." },
    ],
    bestTimeToVisit:
      "November through April brings the mild, sunny weather Scottsdale is known for. Summer highs regularly top 105°F, which limits daytime outdoor activity considerably.",
    tripStyles: ["Golf trips", "Girls' trips", "Winter sun getaways"],
    gettingThere:
      "Phoenix Sky Harbor International (PHX) is 20 to 30 minutes from most Scottsdale rentals and has extensive nonstop service nationwide.",
    faqs: [
      {
        question: "Is a heated pool necessary in Scottsdale?",
        answer:
          "For a winter visit, yes, if you want to actually swim — desert nights get cool even when the days are warm. Summer visitors generally don't need heating, since ambient temperatures keep pools plenty warm.",
      },
      {
        question: "How hot does it get in Scottsdale in summer?",
        answer:
          "Regularly above 105°F (about 41°C) from June through August. Many rentals lean into shaded patios, misting systems, and pool access to make the heat manageable.",
      },
    ],
    relatedDestinations: ["park-city", "lake-tahoe"],
    relatedGuides: ["luxury-vacation-homes-usa"],
    latitude: 33.4942,
    longitude: -111.9261,
    trending: true,
  },
  {
    slug: "lake-tahoe",
    city: "Lake Tahoe",
    stateSlug: "california",
    state: "California and Nevada",
    region: "West",
    heroImage: {
      src: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2000&auto=format&fit=crop",
      alt: "Clear blue water of Lake Tahoe surrounded by pine forest and mountains",
    },
    tagline: "A high-alpine lake that works as both a ski trip and a summer escape.",
    metaDescription:
      "Explore curated Lake Tahoe vacation rentals on the California and Nevada sides, including A-frame cabins near the slopes. Compare stays before booking on Airbnb.",
    introduction: [
      "Lake Tahoe straddles the California-Nevada border, and its rental market genuinely runs two full seasons: a winter ski season centered on resorts like Palisades Tahoe and Heavenly, and a summer season built around the lake itself — paddleboarding, hiking, and beach days on an alpine lake that stays cold even in July.",
      "Cabins closer to the water command a premium; A-frame and classic mountain-cabin styles further into the pines offer a similar feel at a lower price point.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Reno-Tahoe International (RNO), about 45–60 minutes" },
      { label: "Best for", value: "Ski trips, summer lake trips, couples' getaways" },
      { label: "Peak season", value: "December–March and July–August" },
      { label: "Typical drive from San Francisco", value: "About 3.5–4 hours" },
    ],
    neighborhoods: [
      { name: "Tahoe City", description: "North shore hub, closer to Palisades Tahoe." },
      { name: "South Lake Tahoe", description: "Closer to Heavenly and the Nevada casino corridor." },
      { name: "Incline Village, NV", description: "A quieter, upscale north shore community." },
    ],
    stayCategories: ["cabins", "a-frames", "ski-in-ski-out"],
    attractions: [
      { name: "Lake Tahoe", description: "One of the clearest large alpine lakes in the country." },
      { name: "Palisades Tahoe", description: "A major ski resort on the north shore." },
      { name: "Emerald Bay State Park", description: "A dramatic overlook popular with photographers." },
    ],
    bestTimeToVisit:
      "Ski season runs roughly December through March; summer (July–August) is the best window for lake activities and hiking.",
    tripStyles: ["Ski trips", "Summer lake trips", "Couples' getaways"],
    gettingThere:
      "Reno-Tahoe International Airport (RNO) is the closest option, about 45 minutes to an hour from most lake-area rentals depending on which shore.",
    faqs: [
      {
        question: "Which side of Lake Tahoe should I stay on?",
        answer:
          "The north shore (Tahoe City, Incline Village) tends to be quieter and closer to Palisades Tahoe; the south shore (South Lake Tahoe) has more nightlife and is closer to Heavenly.",
      },
      {
        question: "Do I need tire chains for a winter trip?",
        answer:
          "Often, yes, especially for cabins on unplowed side roads. Check current chain-control requirements before a winter drive into the basin.",
      },
    ],
    relatedDestinations: ["park-city", "scottsdale"],
    relatedGuides: ["best-lake-vacation-destinations-usa"],
    latitude: 39.0968,
    longitude: -120.0324,
    trending: true,
  },
  {
    slug: "park-city",
    city: "Park City",
    stateSlug: "utah",
    state: "Utah",
    region: "Southwest",
    heroImage: {
      src: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=2000&auto=format&fit=crop",
      alt: "Snow-covered mountain town of Park City, Utah",
    },
    tagline: "A former mining town turned Sundance-famous ski destination.",
    metaDescription:
      "Browse handpicked Park City, Utah vacation rentals, including walkable ski-in/ski-out homes near Main Street. Compare picks before booking on Airbnb.",
    introduction: [
      "Park City built its identity on silver mining, then on skiing, and more recently on hosting the Sundance Film Festival every January. Main Street keeps its 19th-century brick storefronts, now filled with restaurants and galleries rather than saloons and assay offices.",
      "Rentals split between historic Old Town homes within walking distance of Main Street, and larger, newer homes further out near Deer Valley or the Canyons side of Park City Mountain Resort.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Salt Lake City International (SLC), about 35–45 minutes" },
      { label: "Best for", value: "Ski trips, group getaways, Sundance travel" },
      { label: "Peak season", value: "December through February; late January (Sundance)" },
      { label: "Typical drive from Salt Lake City", value: "About 40 minutes" },
    ],
    neighborhoods: [
      { name: "Old Town", description: "Walkable to Main Street and the Town Lift." },
      { name: "Deer Valley", description: "Ski-in/ski-out, more upscale, closer to Deer Valley Resort." },
      { name: "The Canyons area", description: "Closer to Park City Mountain's Canyons base." },
    ],
    stayCategories: ["ski-in-ski-out", "hot-tub", "large-group-homes"],
    attractions: [
      { name: "Park City Mountain Resort", description: "One of the largest ski resorts in the country." },
      { name: "Main Street", description: "Historic shops, galleries, and restaurants." },
      { name: "Utah Olympic Park", description: "Site of the 2002 Winter Olympics bobsled and ski jump events." },
    ],
    bestTimeToVisit:
      "December through February for reliable snow; late January if you want to be near the Sundance Film Festival (book six-plus months ahead for that week).",
    tripStyles: ["Ski trips", "Group getaways", "Film festival travel"],
    gettingThere:
      "Salt Lake City International Airport (SLC) is about 35 to 45 minutes away and has extensive nonstop service, making Park City one of the more accessible major ski towns.",
    faqs: [
      {
        question: "Is Park City walkable in winter?",
        answer:
          "Old Town is walkable, though steep and often snowy — sturdy footwear matters. Homes further from Main Street generally require a car or the free local bus system.",
      },
      {
        question: "How far ahead should I book for Sundance?",
        answer:
          "Rentals during the Sundance Film Festival (typically late January) often book six months to a year in advance, at a significant price premium over standard ski season rates.",
      },
    ],
    relatedDestinations: ["lake-tahoe", "scottsdale"],
    relatedGuides: ["luxury-vacation-homes-usa"],
    latitude: 40.6461,
    longitude: -111.498,
    trending: true,
  },
  {
    slug: "cape-cod",
    city: "Cape Cod",
    stateSlug: "massachusetts",
    state: "Massachusetts",
    region: "Northeast",
    heroImage: {
      src: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?q=80&w=2000&auto=format&fit=crop",
      alt: "Lighthouse and coastline on Cape Cod, Massachusetts",
    },
    tagline: "Shingled cottages, lighthouses, and a very New England summer.",
    metaDescription:
      "Discover handpicked Cape Cod vacation rentals, from shingled family cottages to harbor-view historic homes. Compare picks before booking on Airbnb.",
    introduction: [
      "Cape Cod curls out into the Atlantic east of Boston, and each town along its length has a slightly different character: Provincetown at the tip is artsy and lively, Chatham and Falmouth lean quieter and more traditional, and the Mid-Cape towns sit somewhere in between.",
      "The classic Cape rental is a gray-shingled cottage with white trim, often walkable to a harbor or town center, and the market genuinely rewards booking early for July and August.",
    ],
    quickFacts: [
      { label: "Nearest airport", value: "Barnstable Municipal (HYA) or Boston Logan (BOS), 1.5–2 hours from Boston" },
      { label: "Best for", value: "Families, pet owners, classic New England trips" },
      { label: "Peak season", value: "July and August" },
      { label: "Typical drive from Boston", value: "About 1.5–2 hours" },
    ],
    neighborhoods: [
      { name: "Chatham", description: "Quieter, upscale, near the elbow of the Cape." },
      { name: "Falmouth", description: "Closer to the ferry to Martha's Vineyard." },
      { name: "Provincetown", description: "Artsy, lively, at the very tip of the Cape." },
    ],
    stayCategories: ["family-friendly", "pet-friendly", "waterfront", "romantic"],
    attractions: [
      { name: "Chatham Lighthouse", description: "An active lighthouse with public overlook." },
      { name: "Nauset Beach", description: "A long, dune-backed Atlantic beach." },
      { name: "Cape Cod National Seashore", description: "Protected coastline running much of the outer Cape." },
    ],
    bestTimeToVisit:
      "July and August are the classic Cape Cod summer, with the warmest water and the highest prices. September offers warm days, cooler nights, and noticeably fewer crowds.",
    tripStyles: ["Family vacations", "Pet-friendly trips", "Romantic weekends"],
    gettingThere:
      "Boston Logan International (BOS) is the main airport, followed by a 1.5 to 2-hour drive depending on traffic over the Sagamore or Bourne bridges. Cape Air also serves smaller regional airports on the Cape.",
    faqs: [
      {
        question: "How far ahead should I book a Cape Cod rental for summer?",
        answer:
          "For July and August, four to six months ahead is a reasonable target — the best cottages with yards, water views, or pet-friendly policies go early.",
      },
      {
        question: "Is Cape Cod good for a trip with a dog?",
        answer:
          "Many rentals are pet-friendly, though policies vary by town and even by beach (some restrict dogs during summer months). Always confirm pet policies directly with the individual listing.",
      },
    ],
    relatedDestinations: ["charleston", "outer-banks"],
    relatedGuides: ["romantic-weekend-getaways-east-coast"],
    latitude: 41.6688,
    longitude: -70.2962,
    trending: true,
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationsByState(stateSlug: string) {
  return destinations.filter((d) => d.stateSlug === stateSlug);
}

export function getTrendingDestinations() {
  return destinations.filter((d) => d.trending);
}
