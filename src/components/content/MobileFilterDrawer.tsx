"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Drawer } from "@/components/ui/Drawer";
import { FilterControls } from "@/components/content/FilterBar";

export function MobileFilterDrawer({ resultsCount }: { resultsCount: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2.5 text-sm font-medium text-navy"
      >
        <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
        Filters
      </button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Filter stays" side="left">
        <FilterControls />
        <button
          onClick={() => setIsOpen(false)}
          className="mt-6 w-full rounded-md bg-navy px-5 py-3 text-sm font-medium text-white"
        >
          Show {resultsCount} {resultsCount === 1 ? "stay" : "stays"}
        </button>
      </Drawer>
    </div>
  );
}
