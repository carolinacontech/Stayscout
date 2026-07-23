import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    { name: "Home", url: siteConfig.url },
    ...items.map((item) => ({ name: item.name, url: `${siteConfig.url}${item.href}` })),
  ];

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-charcoal/70">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbSchema(schemaItems))! }}
      />
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="hover:text-navy hover:underline">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-navy">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-navy hover:underline">
                    {item.name}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
