import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `Learn about ${siteConfig.brandName}, an independent travel discovery website curating vacation rentals across the United States.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      <div className="mt-4">
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">
          About {siteConfig.brandName}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">{siteConfig.tagline}</p>
      </div>

      <div className="mt-10 flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-semibold text-navy">What we do</h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            {siteConfig.brandName} is a travel discovery website focused exclusively on vacation rentals
            and unique stays in the United States. We don&apos;t try to list every available property —
            instead, we build curated collections organized around real trip needs: beach weeks, mountain
            cabin getaways, lakefront reunions, and more. When you find a stay you like, we send you to
            Airbnb to check current availability and complete a reservation directly with the host.
          </p>
        </section>

        <section>
          <SectionHeading as="h2" title="What we are not" />
          <ul className="mt-3 flex flex-col gap-2 text-base leading-relaxed text-charcoal/80">
            <li>• We are not a property-booking platform. We don&apos;t process reservations or payments.</li>
            <li>• We are not a property-management company, and we don&apos;t own or manage any featured stays.</li>
            <li>• We are not an Airbnb clone, and we are not affiliated with or endorsed by Airbnb.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">How we choose stays</h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            Our editorial team looks for properties with a clear reason to stand out — a private dock, a
            genuinely private pool, a real mountain view, a walkable location — and writes original
            context for each one rather than reformatting a host&apos;s own listing description. We label
            demo or sample content clearly wherever it appears on this site, and we only publish factual
            details (amenities, capacity, pricing) that we can confirm.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">How we make money</h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            {siteConfig.disclosures.long} Read our full{" "}
            <a href="/disclosure" className="text-terracotta hover:underline">
              affiliate disclosure
            </a>{" "}
            for details.
          </p>
        </section>
      </div>
    </div>
  );
}
