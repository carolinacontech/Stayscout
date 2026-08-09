import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  imageClassName?: string;
}

export function Logo({ className, imageClassName }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className ?? ""}`}>
      <Image
        src="/logo-full.png"
        alt="Stay Scout"
        width={1191}
        height={580}
        priority
        className={imageClassName ?? "h-8 w-auto"}
      />
    </Link>
  );
}
