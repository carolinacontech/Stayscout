import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description: `How ${siteConfig.brandName} earns revenue through affiliate and creator links to Airbnb.`,
  path: "/disclosure",
});

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Affiliate Disclosure", href: "/disclosure" }]} />

      <div className="mt-4">
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">Affiliate Disclosure</h1>
      </div>

      <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-charcoal/80">
        <p>{siteConfig.disclosures.long}</p>

        <section>
          <h2 className="text-xl font-semibold text-navy">Independence from Airbnb</h2>
          <p className="mt-3">{siteConfig.disclosures.independence}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">What this means in practice</h2>
          <ul className="mt-3 flex flex-col gap-2">
            <li>• {siteConfig.brandName} does not own or manage any property featured on this site.</li>
            <li>• {siteConfig.brandName} does not process reservations, payments, or cancellations.</li>
            <li>• Property details, amenities, and pricing may change without notice — always verify directly on Airbnb before booking.</li>
            <li>• Links marked for booking use tracked creator or affiliate URLs, which may earn us a commission at no additional cost to you.</li>
            <li>• Our recommendations are selected independently, based on editorial judgment, not on which links pay the highest commission.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">Questions</h2>
          <p className="mt-3">
            If you have questions about this disclosure, visit our{" "}
            <a href="/contact" className="text-terracotta hover:underline">
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
