"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Animation direction */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Delay in seconds */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Once triggered, stay visible */
  once?: boolean;
  /** How much of the element needs to be visible to trigger */
  amount?: number;
};

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const offset = directionMap[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
