"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Local-only success state for this prototype. To go live, replace this
    // handler with a POST to your email provider (e.g. Mailchimp, Klaviyo,
    // ConvertKit, or a Supabase table) and keep the same success UI.
    track({ name: "newsletter_submitted", source: "homepage" });
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-3 rounded-md bg-white/10 px-5 py-4 text-white"
      >
        <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
        <p className="text-sm">You&apos;re on the list. Look out for new stays in your inbox soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 min-[480px]:flex-row">
        <div className="flex-1">
          <Input
            id="newsletter-first-name"
            label="First name"
            hideLabel
            placeholder="First name"
            name="firstName"
            autoComplete="given-name"
            required
            className="bg-white"
          />
        </div>
        <div className="flex-1">
          <Input
            id="newsletter-email"
            label="Email address"
            hideLabel
            placeholder="you@email.com"
            type="email"
            name="email"
            autoComplete="email"
            spellCheck={false}
            required
            className="bg-white"
          />
        </div>
      </div>
      <Button type="submit" variant="light" className="w-full">
        Subscribe
      </Button>
    </form>
  );
}
