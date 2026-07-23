import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-terracotta text-white hover:bg-[#b25a3c] focus-visible:outline-terracotta",
  secondary: "bg-navy text-white hover:bg-[#0d1d2c] focus-visible:outline-navy",
  outline: "border border-navy text-navy hover:bg-navy hover:text-white",
  ghost: "text-navy hover:bg-sand/60",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function isLinkProps(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (isLinkProps(props)) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;

    if (external) {
      return (
        <a href={href} target="_blank" rel="sponsored nofollow noopener noreferrer" className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
