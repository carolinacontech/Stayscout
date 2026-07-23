import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  buildHref: (page: number) => string;
}

export function Pagination({ currentPage, totalPages, buildHref }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 pt-4">
      <Link
        href={buildHref(Math.max(1, currentPage - 1))}
        aria-label="Previous page"
        aria-disabled={currentPage === 1}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border border-border text-charcoal hover:bg-sand/60",
          currentPage === 1 && "pointer-events-none opacity-40"
        )}
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </Link>
      {pages.map((page) => (
        <Link
          key={page}
          href={buildHref(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium",
            page === currentPage ? "bg-navy text-white" : "text-charcoal hover:bg-sand/60"
          )}
        >
          {page}
        </Link>
      ))}
      <Link
        href={buildHref(Math.min(totalPages, currentPage + 1))}
        aria-label="Next page"
        aria-disabled={currentPage === totalPages}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border border-border text-charcoal hover:bg-sand/60",
          currentPage === totalPages && "pointer-events-none opacity-40"
        )}
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </nav>
  );
}
