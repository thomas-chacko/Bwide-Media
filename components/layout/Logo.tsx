import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Link to wrap the logo with. Defaults to "/" */
  href?: string;
};

/**
 * Text wordmark component — "BWIDE" bold + "MEDIA" light, with a violet dot.
 * Swap this out later with an SVG or image logo.
 */
export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-baseline gap-0.5", className)}
      aria-label="BWIDE Media — Home"
    >
      <span className="font-display text-xl font-bold tracking-tight text-text md:text-2xl">
        BWIDE
      </span>
      <span
        className="inline-block h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"
        aria-hidden="true"
      />
      <span className="font-display text-xl font-light tracking-wide text-text-muted md:text-2xl">
        MEDIA
      </span>
    </Link>
  );
}
