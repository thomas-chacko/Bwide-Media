"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

const lines = [
  "MAKE PEOPLE STOP.",
  "MAKE THEM LOOK.",
  "MAKE THEM REMEMBER.",
];

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 md:py-48"
      aria-labelledby="philosophy-heading"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" aria-hidden="true" />

      <Container className="relative">
        <h2 id="philosophy-heading" className="sr-only">
          Creative Philosophy
        </h2>

        <div className="space-y-4 md:space-y-6">
          {lines.map((line, i) => (
            <PhilosophyLine
              key={line}
              line={line}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <motion.p
          className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-text-muted md:mt-16 md:text-lg"
          style={{
            opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
          }}
        >
          In a crowded digital world, being present isn&apos;t enough. Your brand needs a reason to
          be noticed. At BWIDE Media, we combine ideas, visuals, storytelling and strategy to create
          communication that earns attention and builds recognition.
        </motion.p>
      </Container>
    </section>
  );
}

function PhilosophyLine({
  line,
  index,
  progress,
}: {
  line: string;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = 0.1 + index * 0.12;
  const end = start + 0.15;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const y = useTransform(progress, [start, end], [20, 0]);

  return (
    <motion.p
      className="text-center font-display text-4xl font-bold tracking-tight text-text md:text-6xl lg:text-8xl"
      style={{ opacity, y }}
    >
      {line}
    </motion.p>
  );
}
