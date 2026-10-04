import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "circle";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

const baseStyles =
  "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 cursor-pointer disabled:cursor-not-allowed";

const variantStyles = {
  primary:
    "rounded-full bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_24px_var(--primary-glow)]",
  ghost:
    "rounded-full border border-[var(--glass-border)] text-text hover:border-[var(--glass-border-hover)] hover:bg-glass",
  circle:
    "rounded-full border border-[var(--glass-border)] bg-glass text-text hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_0_24px_var(--primary-glow)]",
};

const sizeStyles = {
  sm: "px-5 py-2 text-sm gap-2",
  md: "px-7 py-3 text-sm gap-2",
  lg: "px-9 py-4 text-base gap-3",
};

const circleSizeStyles = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    variant === "circle" ? circleSizeStyles[size] : sizeStyles[size],
    disabled && "pointer-events-none opacity-50",
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

/** Circular arrow button (like the "↗" reference) */
export function ArrowButton({
  href,
  className,
  ariaLabel = "View project",
  size = "md",
}: {
  href: string;
  className?: string;
  ariaLabel?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Button
      href={href}
      variant="circle"
      size={size}
      className={cn("group", className)}
      ariaLabel={ariaLabel}
    >
      <ArrowUpRight
        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45"
        aria-hidden="true"
      />
    </Button>
  );
}
