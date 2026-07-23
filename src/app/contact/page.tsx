import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/content/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Get in touch with the ${siteConfig.brandName} editorial team.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

      <div className="mt-4">
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">Contact us</h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Have a stay to suggest, a correction to report, or a partnership question? Send us a note and
          we&apos;ll get back to you. You can also reach us directly at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-terracotta hover:underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </div>

      <div className="mt-10 rounded-lg border border-border bg-white p-6">
        <ContactForm />
      </div>
    </div>
  );
}
