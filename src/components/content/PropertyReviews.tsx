import { Check, X } from "lucide-react";
import type { PropertyReview } from "@/data/types";
import { ReviewBadge } from "@/components/ui/ReviewBadge";

function ScoutReviewCard({ review }: { review: PropertyReview }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ReviewBadge tier="scout" score={review.score} />
        <span className="text-xs text-charcoal/60">{review.reviewerLabel}</span>
      </div>
      <p className="mt-4 text-base leading-relaxed text-charcoal/80">{review.summary}</p>

      {(review.pros?.length || review.cons?.length) && (
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {review.pros && review.pros.length > 0 && (
            <div className="rounded-md bg-[#eaf6f0] p-4">
              <p className="text-sm font-semibold text-[#167a4c]">Pros</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {review.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-1.5 text-sm text-charcoal/80">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#167a4c]" aria-hidden="true" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {review.cons && review.cons.length > 0 && (
            <div className="rounded-md bg-[#fbebea] p-4">
              <p className="text-sm font-semibold text-[#b92a23]">Cons</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {review.cons.map((con) => (
                  <li key={con} className="flex items-start gap-1.5 text-sm text-charcoal/80">
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b92a23]" aria-hidden="true" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function GuestReviewCard({ review }: { review: PropertyReview }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ReviewBadge tier="guest" score={review.score} />
        <span className="text-xs text-charcoal/60">{review.reviewerLabel}</span>
      </div>
      <p className="mt-4 text-base leading-relaxed text-charcoal/80">{review.summary}</p>
    </div>
  );
}

export function PropertyReviews({ reviews }: { reviews: PropertyReview[] }) {
  if (reviews.length === 0) return null;

  const scoutReview = reviews.find((r) => r.tier === "scout");
  const guestReview = reviews.find((r) => r.tier === "guest");

  return (
    <section>
      <h2 className="text-xl font-semibold text-navy">Reviews</h2>
      <div className="mt-3 flex flex-col gap-4">
        {scoutReview && <ScoutReviewCard review={scoutReview} />}
        {guestReview && <GuestReviewCard review={guestReview} />}
      </div>
    </section>
  );
}
