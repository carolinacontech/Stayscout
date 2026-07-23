import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms of use for the ${siteConfig.brandName} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Terms of Use", href: "/terms" }]} />

      <div className="mt-4">
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">Terms of Use</h1>
        <p className="mt-2 text-sm text-charcoal/60">Last updated: July 2026</p>
      </div>

      <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-charcoal/80">
        <section>
          <h2 className="text-xl font-semibold text-navy">Nature of this website</h2>
          <p className="mt-3">
            {siteConfig.brandName} is an independent travel discovery and editorial website. We curate and
            describe vacation rental properties located in the United States and direct visitors to
            third-party platforms, primarily Airbnb, to check availability and complete a reservation.
            {" "}{siteConfig.brandName} does not own, manage, or operate any of the properties featured on
            this site, and does not process bookings, payments, or cancellations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">No guarantee of accuracy</h2>
          <p className="mt-3">
            Property details, amenities, pricing, and availability shown on this site are provided for
            general planning purposes only and may change without notice. We do not guarantee the
            accuracy, completeness, or current availability of any listing. Always verify details directly
            with the booking platform before making travel plans.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">Third-party services</h2>
          <p className="mt-3">
            This site contains links to Airbnb and other third-party websites. Airbnb is a trademark of
            its respective owner; use of Airbnb links on this site does not imply any partnership,
            sponsorship, or endorsement. We are not responsible for the content, policies, or practices of
            any third-party site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">Affiliate relationships</h2>
          <p className="mt-3">{siteConfig.disclosures.long}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">Limitation of liability</h2>
          <p className="mt-3">
            {siteConfig.brandName} is provided &quot;as is&quot; without warranties of any kind. We are not
            liable for any damages arising from your use of this site or your reliance on information
            found here, including any issues arising from a booking made through a third-party platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">Changes to these terms</h2>
          <p className="mt-3">
            We may update these terms from time to time. Continued use of the site after changes are
            posted constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">Contact</h2>
          <p className="mt-3">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-terracotta hover:underline">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
