"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  separator?: string;
  className?: string;
  speed?: "slow" | "normal" | "fast";
};

const speedMap = {
  slow: "60s",
  normal: "30s",
  fast: "15s",
};

export function Marquee({
  items,
  separator = "×",
  className,
  speed = "normal",
}: MarqueeProps) {
  const content = items.join(` ${separator} `);

  return (
    <div
      className={cn(
        "overflow-hidden border-y border-[var(--glass-border)] py-4",
        className
      )}
      aria-hidden="true"
    >
      <div
        className="animate-marquee flex w-max whitespace-nowrap"
        style={{ animationDuration: speedMap[speed] }}
      >
        {/* Duplicate content enough times to ensure it covers wide screens and loops seamlessly */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <span
            key={i}
            className="pr-8 font-display text-sm font-medium uppercase tracking-[0.2em] text-text-muted md:text-base"
          >
            {content} {separator}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
