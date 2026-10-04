import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "active";
};

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200",
        variant === "default"
          ? "border-[var(--glass-border)] bg-glass text-text-muted hover:border-[var(--glass-border-hover)] hover:text-text"
          : "border-primary/30 bg-primary/10 text-primary-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
