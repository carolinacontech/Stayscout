import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function Checkbox({ label, id, className, ...rest }: CheckboxProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-2.5 text-sm text-charcoal">
      <input
        id={id}
        type="checkbox"
        className={cn(
          "h-4 w-4 rounded border-border text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean",
          className
        )}
        {...rest}
      />
      {label}
    </label>
  );
}
