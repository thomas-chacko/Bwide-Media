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
        className="animate-marquee flex whitespace-nowrap"
        style={{ animationDuration: speedMap[speed] }}
      >
        {/* Duplicate content for seamless loop */}
        {[0, 1].map((i) => (
          <span
            key={i}
            className="mr-8 font-display text-sm font-medium uppercase tracking-[0.2em] text-text-muted md:text-base"
          >
            {content} {separator}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
