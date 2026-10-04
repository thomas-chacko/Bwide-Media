import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
  align?: "left" | "center";
  label?: string;
};

export function SectionHeading({
  title,
  subtitle,
  id,
  className,
  align = "left",
  label,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="mb-4 inline-block rounded-full border border-[var(--glass-border)] bg-glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-soft">
          {label}
        </span>
      )}
      <h2
        id={id}
        className="heading-section font-display text-text"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
