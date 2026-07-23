import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.brandName} collects and uses information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy" }]} />

      <div className="mt-4">
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-charcoal/60">Last updated: July 2026</p>
      </div>

      <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-charcoal/80">
        <p>
          This Privacy Policy describes how {siteConfig.brandName} (&quot;we,&quot; &quot;us&quot;) handles
          information collected through this website.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-navy">Information we collect</h2>
          <p className="mt-3">
            If you submit our newsletter or contact form, we collect the information you provide (such as
            your name and email address). We do not collect payment information, since this website does
            not process bookings or transactions of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">Cookies and analytics</h2>
          <p className="mt-3">
            This site is built with a placeholder analytics utility (see our engineering documentation)
            that is not connected to any tracking provider by default. If we enable analytics or
            advertising cookies in the future, this policy will be updated accordingly, and any
            non-essential tracking will only run with appropriate notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">Third-party links</h2>
          <p className="mt-3">
            This site links to Airbnb and other third-party services. We are not responsible for the
            privacy practices of those third parties — please review their own privacy policies before
            providing any personal information on their platforms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">Your choices</h2>
          <p className="mt-3">
            You can unsubscribe from our newsletter at any time using the link in any email we send. To
            request deletion of any information you&apos;ve submitted to us, contact us at{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-terracotta hover:underline">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy">Changes to this policy</h2>
          <p className="mt-3">
            We may update this policy from time to time. Material changes will be reflected by an updated
            &quot;Last updated&quot; date at the top of this page.
          </p>
        </section>
      </div>
    </div>
  );
}
