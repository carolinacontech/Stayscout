import { Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <Compass className="h-12 w-12 text-ocean" aria-hidden="true" />
      <h1 className="mt-6 font-serif-heading text-4xl font-semibold text-navy">Looks like you wandered off the map</h1>
      <p className="mt-4 text-base leading-relaxed text-charcoal/80">
        We couldn&apos;t find the page you were looking for. It may have moved, or the link may be out of
        date. Here are a few places to pick back up.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/stays" variant="outline">
          Explore Stays
        </Button>
        <Button href="/destinations" variant="outline">
          Browse Destinations
        </Button>
      </div>
    </div>
  );
}
