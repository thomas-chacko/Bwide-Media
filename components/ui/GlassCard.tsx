import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "li";
};

export function GlassCard({
  children,
  className,
  hover = true,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "glass-card p-6 md:p-8",
        !hover && "hover:transform-none hover:shadow-none",
        className
      )}
    >
      {children}
    </Tag>
  );
}
