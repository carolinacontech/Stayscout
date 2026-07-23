# StayScout USA

Remarkable stays, handpicked across America.

StayScout USA is a curated travel discovery website for vacation rentals and unique stays in the
United States. It does not process bookings — every property page links out to Airbnb (via a
tracked creator/affiliate link) so visitors complete their reservation there. This repo is the
full Next.js implementation: destination guides, stay-type collections, trip ideas, editorial
travel guides, a filterable stay directory, and property detail pages, all built on structured
local content that's designed to move into a headless CMS later without a frontend rewrite.

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Production build:

```bash
npm run build
npm run start
```

## Tech stack

- Next.js 16 (App Router, React Server Components by default)
- TypeScript
- Tailwind CSS v4
- Lucide icons
- Local TypeScript data files as the content layer (no database, no paid services required)

## Project structure

```
src/
  app/                      Routes (App Router)
    page.tsx                Homepage
    destinations/           /destinations, /destinations/[state], /destinations/[state]/[city]
    stays/                  /stays (filterable directory), /stays/[slug] (property detail)
    stay-types/             /stay-types, /stay-types/[category]
    trip-ideas/             /trip-ideas, /trip-ideas/[slug]
    guides/                 /guides, /guides/[slug]
    about/ contact/ disclosure/ privacy/ terms/
    not-found.tsx           Custom 404
    sitemap.ts / robots.ts  SEO plumbing
  components/
    ui/                     Design-system primitives (Button, Badge, Input, Select, Checkbox,
                             Modal, Drawer, SectionHeading, Breadcrumbs, AffiliateDisclosure,
                             Pagination, EmptyResults)
    layout/                 AnnouncementBar, Header, MobileNavigation, SearchOverlay, Footer
    content/                PropertyCard, PropertyGrid, DestinationCard, CollectionCard,
                             FilterBar, MobileFilterDrawer, NewsletterForm, EditorialGuideCard,
                             ImageGallery, AmenityList, FAQAccordion, RelatedDestinations,
                             RelatedStays, HeroSearch, BookingButton, ContactForm
  data/                     All structured content (see below)
  lib/                      cn, schema.ts (JSON-LD), analytics.ts, seo.ts, filterProperties.ts
scripts/
  validateContent.ts        Dev-only content QA script (see below)
```

## Content management

All content lives in `src/data/*.ts` as plain, typed arrays — no database required for the initial
version. Each file's top comment explains how it would map onto a headless CMS collection
(Sanity, Contentful, Supabase) if you outgrow local files; the shape was chosen specifically so
that migration wouldn't require touching component code, just swapping the data-fetching layer.

| File | What it holds |
|---|---|
| `siteConfig.ts` | Brand name, tagline, nav, footer links, disclosure copy, trust principles |
| `usStates.ts` | All 50 states with region assignment (drives `/destinations` architecture) |
| `states.ts` | Full editorial guides for the 16 priority states (Florida, Tennessee, etc.) |
| `destinations.ts` | City/destination pages (Destin, Key West, Gatlinburg, etc.) |
| `properties.ts` | Demo property listings (see below) |
| `collections.ts` | Homepage editorial collections (Beachfront Escapes, Lake Houses, etc.) |
| `stayTypes.ts` | The full stay-type taxonomy behind `/stay-types/[category]` |
| `tripIdeas.ts` | Trip-idea pages (weekend getaways, girls' trips, etc.) |
| `guides.ts` | Long-form editorial travel guides |
| `types.ts` | Shared TypeScript types for all of the above |

### Adding a new property

Add an entry to the `properties` array in `src/data/properties.ts` following the `Property` type
in `src/data/types.ts`. At minimum, set `isSampleContent: false` once it's a real, verified
listing, and fill in `creatorLink` (see below). Run `npm run validate:content` to catch missing
fields before publishing.

### Adding a new destination

Add an entry to `src/data/destinations.ts` (city-level) and, if it's a new state, add or update the
corresponding entry in `src/data/states.ts`. Every state already exists in `src/data/usStates.ts`,
so `/destinations/[state]` always resolves — states without a full guide render a shorter, honest
"we're still building this out" page rather than a broken link or thin duplicate content.

### Editing affiliate / creator links

All Airbnb links are centralized on the `Property` record:

- `creatorLink` — your tracked Airbnb Creator/affiliate URL. Used first when present.
- `airbnbUrl` — a fallback standard Airbnb URL if you don't have a creator link yet.
- `linkStatus` — `"active" | "needs-review" | "unavailable"`. Only `"active"` renders a live
  booking button; anything else renders a disabled "Booking link coming soon" button so the site
  never routes visitors to a broken or unverified URL.

This logic lives in `src/components/content/BookingButton.tsx` — there's nowhere else to edit.

### Changing branding

Everything in section 2 of the original brief (brand name, tagline, nav items, colors, footer
copy, disclosures) is centralized in `src/data/siteConfig.ts` and `src/app/globals.css` (color
tokens under `@theme inline`). Changing the brand name in `siteConfig.ts` updates it everywhere —
header, footer, metadata, disclosures — automatically.

### Content validation script

```bash
npm run validate:content
```

Flags (without failing your build): missing images/alt text, missing or non-active creator links,
destinations/states referenced by a property that don't exist yet, duplicate slugs across all
content types, listings not re-verified in 180+ days, and sample-content flags left in a
non-default state. Treat it as a pre-publish checklist, not a build gate.

## Analytics

`src/lib/analytics.ts` exports a single `track()` function with a typed event union
(`property_card_clicked`, `creator_link_clicked`, `destination_searched`, `filter_applied`,
`newsletter_submitted`, `guide_opened`, `collection_opened`). No provider is wired up — it only
`console.log`s in development. To connect Google Analytics, Plausible, or another provider, replace
the body of that one function.

## Replacing demo listings with real Airbnb properties

Every property in `src/data/properties.ts` currently has `isSampleContent: true`, a placeholder
`creatorLink` (`.../rooms/DEMO-00X?affiliate_id=...`), and clearly-labeled "Demo listing" badges on
its card and detail page. To go live with a real listing:

1. Replace the placeholder fields (`title`, `images`, `amenities`, `sleeps`/`bedrooms`/`beds`/
   `bathrooms`, `nearbyAttractions`, etc.) with verified, factual details from the real listing.
   Never invent ratings, review counts, Superhost/Guest Favorite status, or exact pricing — only
   include fields you can confirm, and leave them out otherwise (the UI has graceful fallbacks for
   missing amenities, images, and pricing).
2. Set `creatorLink` to your real Airbnb Creator/affiliate URL.
3. Set `linkStatus: "active"` and `lastVerified` to today's date.
4. Set `isSampleContent: false`.
5. Run `npm run validate:content` to confirm nothing else is missing.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, click **New Project** and import the repo — no configuration is required beyond the
   defaults, since this is a standard Next.js App Router project.
3. Set the `NEXT_PUBLIC_SITE_URL` environment variable (optional) if you want `siteConfig.url` to
   come from an env var instead of the hardcoded value — currently `siteConfig.url` is a plain
   string in `src/data/siteConfig.ts` and should be updated to your real production domain before
   launch (it feeds canonical URLs, Open Graph tags, and the sitemap).
4. Deploy. `next build` runs automatically; static pages (all destination, stay-type, guide, trip
   idea, and property pages) are pre-rendered at build time via `generateStaticParams`, and `/stays`
   (the filterable directory) is server-rendered on demand since it depends on query parameters.

No paid services are required for this initial version.

## Features that still require third-party credentials to fully activate

These are intentionally stubbed with clear extension points rather than half-built:

- **Newsletter signups** (`NewsletterForm`) — currently shows a local success state. Wire the
  `handleSubmit` function to Mailchimp, Klaviyo, ConvertKit, or a serverless function.
- **Contact form** (`ContactForm`) — same pattern; currently a local success state, ready to wire
  to Resend, Formspree, or a serverless function.
- **Analytics** (`src/lib/analytics.ts`) — no provider connected by default.
- **Real Airbnb Creator links** — every property currently uses a placeholder URL; see the
  "Replacing demo listings" section above.
- **Interactive maps** — destination and property pages currently show a labeled placeholder with
  coordinates instead of an embedded map, to avoid requiring a Google Maps/Mapbox API key up front.
  The `latitude`/`longitude` fields are already in place on every record.

## Accessibility & performance notes

- Semantic landmarks, skip-to-content link, visible focus states, and `prefers-reduced-motion`
  support are built into the base layout and Tailwind config.
- The mobile menu and filter drawer are keyboard-accessible (Escape to close, focus trapped within
  the panel) and use appropriate ARIA roles.
- All images use `next/image` with defined aspect ratios per content type (hero 16:9/21:9,
  property cards 4:3, destination cards 3:4, guide cards 16:10) to minimize layout shift.
- Schema.org JSON-LD is included for Organization, WebSite (with SearchAction), BreadcrumbList,
  FAQPage, TouristDestination, LodgingBusiness, and Article — never with fabricated ratings or
  review data.

## What's demo content vs. production-ready

- **Production-ready as-is:** all routing, components, filtering, SEO plumbing, legal pages, and
  the content architecture itself.
- **Demo/placeholder, by design:** all 14 properties (clearly labeled `isSampleContent: true` with
  a "Demo listing" badge), all photography (sourced from Unsplash for development use — swap for
  licensed or Airbnb-approved photography before launch), and the newsletter/contact form success
  states.
