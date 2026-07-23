"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Local-only success state for this prototype. To go live, wire this up
    // to an email service (e.g. Resend, Formspree) or a serverless function.
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-md bg-sand/60 px-5 py-4 text-navy">
        <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
        <p className="text-sm">Thanks for reaching out — we&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input id="contact-name" label="Name" name="name" required />
      <Input id="contact-email" label="Email address" type="email" name="email" required />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean"
        />
      </div>
      <Button type="submit" className="self-start">
        Send Message
      </Button>
    </form>
  );
}
