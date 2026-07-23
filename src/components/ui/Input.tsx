import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hideLabel?: boolean;
  id: string;
}

export function Input({ label, hideLabel, id, className, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={cn("text-sm font-medium text-charcoal", hideLabel && "sr-only")}>
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean",
          className
        )}
        {...rest}
      />
    </div>
  );
}
