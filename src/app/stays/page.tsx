import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";
import { filterProperties, type StaysSearchParams } from "@/lib/filterProperties";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FilterBar, FilterChips } from "@/components/content/FilterBar";
import { MobileFilterDrawer } from "@/components/content/MobileFilterDrawer";
import { PropertyGrid } from "@/components/content/PropertyGrid";
import { Pagination } from "@/components/ui/Pagination";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";

export const metadata: Metadata = buildMetadata({
  title: "Explore Stays",
  description:
    "Browse handpicked vacation rentals across the United States. Filter by state, stay type, budget, and more, then continue to Airbnb to check availability.",
  path: "/stays",
});

const PAGE_SIZE = 12;

export default async function StaysPage({
  searchParams,
}: {
  searchParams: Promise<StaysSearchParams>;
}) {
  const params = await searchParams;
  const { results, chips } = filterProperties(params);

  const currentPage = Math.max(1, Number(params.page) || 1);
  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const paginated = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function buildHref(page: number) {
    const search = new URLSearchParams(params as Record<string, string>);
    search.set("page", String(page));
    return `/stays?${search.toString()}`;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Stays", href: "/stays" }]} />

      <div className="mt-4 max-w-3xl">
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">Explore Stays</h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A curated, filterable set of handpicked vacation rentals across the United States — not an
          exhaustive listing of everything on Airbnb. Every result here is one we&apos;d actually recommend.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-charcoal/70">
          {results.length} {results.length === 1 ? "stay" : "stays"} found
        </p>
        <MobileFilterDrawer resultsCount={results.length} />
      </div>

      <div className="mt-4">
        <FilterChips chips={chips} />
      </div>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <FilterBar />
        <div className="flex-1">
          <PropertyGrid properties={paginated} />
          <div className="mt-10">
            <Pagination currentPage={currentPage} totalPages={totalPages} buildHref={buildHref} />
          </div>
          <p className="mt-8 text-xs text-charcoal/60">{siteConfig.disclosures.priceAvailability}</p>
          <AffiliateDisclosure className="mt-2" />
        </div>
      </div>
    </div>
  );
}
