import { siteConfig } from "@/data/siteConfig";
import type { FaqItem, Guide, Property, CityDestination } from "@/data/types";

/**
 * Schema.org JSON-LD builders. Each function returns a plain object meant to
 * be serialized with JSON.stringify and injected via a <script type="application/ld+json">
 * tag. We never fabricate ratings/review fields here — only truthful,
 * present-in-data fields are ever included.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.url,
    description: siteConfig.supportingCopy,
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/stays?destination={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function touristDestinationSchema(destination: CityDestination) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: `${destination.city}, ${destination.state}`,
    description: destination.metaDescription,
    geo: {
      "@type": "GeoCoordinates",
      latitude: destination.latitude,
      longitude: destination.longitude,
    },
  };
}

/**
 * LodgingBusiness schema for a property detail page. Only include fields
 * that are actually present in the property record — never invent ratings,
 * review counts, or amenities. This site does not process bookings, so we
 * deliberately omit any Offer/price schema that could imply live
 * availability.
 */
export function lodgingBusinessSchema(property: Property) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.title,
    description: property.shortDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressRegion: property.state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.latitude,
      longitude: property.longitude,
    },
    image: property.images.map((img) => img.src),
    amenityFeature: property.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
    })),
  };
}

export function articleSchema(guide: Guide, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    image: [guide.heroImage.src],
    author: {
      "@type": "Organization",
      name: guide.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
    },
    datePublished: guide.publishedDate,
    dateModified: guide.updatedDate,
    mainEntityOfPage: url,
  };
}

export function jsonLdScript(data: object | null) {
  if (!data) return null;
  return JSON.stringify(data);
}
