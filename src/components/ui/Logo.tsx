import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function Logo({ className, iconClassName, textClassName }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 text-terracotta ${className ?? ""}`}>
      <LogoMark className={iconClassName ?? "h-8 w-8"} />
      <span className={`font-logo text-2xl font-semibold lowercase ${textClassName ?? ""}`}>
        stay scout
      </span>
    </Link>
  );
}
