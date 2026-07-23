"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  side?: "left" | "right";
}

export function Drawer({ isOpen, onClose, title, children, side = "right" }: DrawerProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <button aria-label="Close menu" className="absolute inset-0 bg-navy/50" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "relative z-10 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-xl",
          side === "right" ? "ml-auto" : "mr-auto"
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-navy">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 text-charcoal/60 hover:bg-sand/60 hover:text-charcoal"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
