import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy text-white/90">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <p className="font-serif-heading text-xl font-semibold text-white">{siteConfig.brandName}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">{siteConfig.footer.brandSummary}</p>
            <div className="mt-4 flex gap-3">
              <a href={siteConfig.social.instagram} aria-label="Instagram" className="rounded-full p-2 hover:bg-white/10">
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="rounded-full p-2 hover:bg-white/10">
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <FooterColumn title="Destinations" links={siteConfig.footer.destinationLinks} />
          <FooterColumn title="Stay Types" links={siteConfig.footer.stayTypeLinks} />
          <FooterColumn title="Company" links={siteConfig.footer.companyLinks} />
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <AffiliateDisclosure variant="long" className="max-w-3xl text-white/60 [&_svg]:text-white/60" />
          <p className="mt-4 text-xs leading-relaxed text-white/50">{siteConfig.disclosures.independence}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/50">
              © {year} {siteConfig.brandName}. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex gap-4">
              {siteConfig.footer.legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-white/60 hover:text-white">
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
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">{title}</h3>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/80 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
