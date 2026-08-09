import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white text-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Logo imageClassName="h-9 w-auto" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal/70">{siteConfig.footer.brandSummary}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="rounded-full p-2 text-charcoal/60 hover:bg-sand hover:text-terracotta"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="rounded-full p-2 text-charcoal/60 hover:bg-sand hover:text-terracotta"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <FooterColumn title="Destinations" links={siteConfig.footer.destinationLinks} />
          <FooterColumn title="Stay Types" links={siteConfig.footer.stayTypeLinks} />
          <FooterColumn title="Company" links={siteConfig.footer.companyLinks} />
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <AffiliateDisclosure variant="long" className="max-w-3xl" />
          <p className="mt-4 text-xs leading-relaxed text-charcoal/50">{siteConfig.disclosures.independence}</p>

          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-charcoal/50">
              © {year} {siteConfig.brandName}. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex gap-4">
              {siteConfig.footer.legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-charcoal/60 hover:text-terracotta">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal/50">{title}</h3>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-charcoal/75 hover:text-terracotta">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
