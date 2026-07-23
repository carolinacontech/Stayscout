import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  hideLabel?: boolean;
  id: string;
  options: SelectOption[];
  placeholder?: string;
}

export function Select({ label, hideLabel, id, options, placeholder, className, ...rest }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={cn("text-sm font-medium text-charcoal", hideLabel && "sr-only")}>
        {label}
      </label>
      <select
        id={id}
        className={cn(
          "rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean",
          className
        )}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
