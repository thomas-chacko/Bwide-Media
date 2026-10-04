import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  id?: string;
  ariaLabelledby?: string;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  id,
  ariaLabelledby,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </Tag>
  );
}
