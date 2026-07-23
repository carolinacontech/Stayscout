/**
 * Privacy-conscious analytics utility.
 *
 * No provider is wired up by default — `track()` currently no-ops except for
 * a console log in development, so nothing is sent anywhere out of the box.
 * To connect a real provider (Google Analytics, Plausible, etc.), replace
 * the body of `track()` with that provider's event call. Keeping a single
 * function as the call site means the rest of the app never needs to change.
 */

export type AnalyticsEvent =
  | { name: "property_card_clicked"; propertySlug: string; location: string }
  | { name: "creator_link_clicked"; propertySlug: string; linkStatus: string }
  | { name: "destination_searched"; destination?: string; stayType?: string; tripType?: string }
  | { name: "filter_applied"; filterName: string; filterValue: string }
  | { name: "newsletter_submitted"; source: string }
  | { name: "guide_opened"; guideSlug: string }
  | { name: "collection_opened"; collectionSlug: string };

export function track(event: AnalyticsEvent) {
  if (process.env.NODE_ENV !== "production") {
    console.log("[analytics]", event.name, event);
  }
  // Wire a real provider here, e.g.:
  // window.plausible?.(event.name, { props: event });
  // window.gtag?.("event", event.name, event);
}
