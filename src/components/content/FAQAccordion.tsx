"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/types";
import { faqSchema, jsonLdScript } from "@/lib/schema";
import { cn } from "@/lib/cn";

export function FAQAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <div className="flex flex-col divide-y divide-border rounded-lg border border-border bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqSchema(faqs))! }}
      />
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <h3>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-navy"
              >
                {faq.question}
                <ChevronDown
                  className={cn("h-4 w-4 shrink-0 transition-transform", isOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              hidden={!isOpen}
              className="px-5 pb-4 text-sm leading-relaxed text-charcoal/80"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
