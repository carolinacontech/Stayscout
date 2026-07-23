/**
 * Dev-only content validation utility (section 25 of the project brief).
 *
 * Run with: npm run validate:content
 *
 * Flags, without failing the build:
 *  - Missing property images / alt text
 *  - Missing creator links (or a link status that isn't "active")
 *  - Missing destination reference (unknown citySlug/stateSlug)
 *  - Duplicate slugs (properties, destinations, states, guides, collections)
 *  - Old verification dates (lastVerified older than 180 days)
 *  - Missing disclosure fields on sample content
 */
import { properties } from "../src/data/properties";
import { destinations } from "../src/data/destinations";
import { stateGuides } from "../src/data/states";
import { guides } from "../src/data/guides";
import { collections } from "../src/data/collections";

const warnings: string[] = [];
const errors: string[] = [];

function daysSince(dateStr: string): number {
  const then = new Date(dateStr).getTime();
  const now = Date.now();
  return Math.floor((now - then) / (1000 * 60 * 60 * 24));
}

function checkDuplicateSlugs(items: { slug: string }[], label: string) {
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.slug)) {
      errors.push(`Duplicate slug in ${label}: "${item.slug}"`);
    }
    seen.add(item.slug);
  }
}

checkDuplicateSlugs(properties, "properties");
checkDuplicateSlugs(destinations, "destinations");
checkDuplicateSlugs(stateGuides, "states");
checkDuplicateSlugs(guides, "guides");
checkDuplicateSlugs(collections, "collections");

const destinationSlugs = new Set(destinations.map((d) => d.slug));
const stateSlugs = new Set(stateGuides.map((s) => s.slug));

for (const property of properties) {
  const ref = `Property "${property.slug}"`;

  if (!property.images || property.images.length === 0) {
    errors.push(`${ref}: missing images.`);
  } else {
    property.images.forEach((img, i) => {
      if (!img.alt || img.alt.trim().length < 5) {
        errors.push(`${ref}: image[${i}] is missing meaningful alt text.`);
      }
    });
  }

  if (!property.creatorLink && !property.airbnbUrl) {
    errors.push(`${ref}: missing both creatorLink and airbnbUrl. Booking button will render disabled.`);
  }

  if (property.linkStatus !== "active") {
    warnings.push(`${ref}: linkStatus is "${property.linkStatus}", not "active".`);
  }

  if (!destinationSlugs.has(property.citySlug)) {
    warnings.push(`${ref}: citySlug "${property.citySlug}" has no matching destination page yet.`);
  }

  if (!stateSlugs.has(property.stateSlug)) {
    warnings.push(`${ref}: stateSlug "${property.stateSlug}" has no complete state guide yet.`);
  }

  if (daysSince(property.lastVerified) > 180) {
    warnings.push(`${ref}: lastVerified is over 180 days old (${property.lastVerified}). Re-verify listing details.`);
  }

  if (property.isSampleContent !== true) {
    warnings.push(`${ref}: isSampleContent is false — confirm this is a real, verified listing before publishing.`);
  }
}

console.log("\n=== StayScout USA content validation ===\n");

if (errors.length === 0 && warnings.length === 0) {
  console.log("All content checks passed with no issues.");
} else {
  if (errors.length) {
    console.log(`\n${errors.length} error(s):`);
    errors.forEach((e) => console.log(`  ✗ ${e}`));
  }
  if (warnings.length) {
    console.log(`\n${warnings.length} warning(s):`);
    warnings.forEach((w) => console.log(`  ! ${w}`));
  }
}

console.log("\n=========================================\n");

if (errors.length > 0) {
  process.exitCode = 1;
}
