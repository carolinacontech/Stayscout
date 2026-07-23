"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative flex items-center justify-center bg-navy px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
      <p>{siteConfig.announcementBar.message}</p>
      {siteConfig.announcementBar.dismissible && (
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="absolute right-3 rounded-full p-1 hover:bg-white/10"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
