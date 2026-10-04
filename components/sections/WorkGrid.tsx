"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects, projectCategories, type ProjectCategory } from "@/content/work";
import { cn } from "@/lib/utils";

export function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="section-glow py-24 md:py-32" aria-labelledby="work-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="work-heading"
            label="Our Work"
            title="SEE THE WORK. UNDERSTAND THE THINKING."
            subtitle="We believe the best way to understand our work is to experience it. Explore selected projects where strategy, design, content and storytelling come together to solve real marketing challenges."
          />
        </Reveal>

        {/* Filter chips */}
        <Reveal delay={0.1}>
          <div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            <button
              role="tab"
              aria-selected={activeCategory === "All"}
              onClick={() => setActiveCategory("All")}
              className={cn(
                "cursor-pointer rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200",
                activeCategory === "All"
                  ? "border-primary/30 bg-primary/10 text-primary-soft"
                  : "border-[var(--glass-border)] bg-glass text-text-muted hover:border-[var(--glass-border-hover)] hover:text-text"
              )}
            >
              All
            </button>
            {projectCategories.map((cat) => (
              <button
                key={cat.name}
                role="tab"
                aria-selected={activeCategory === cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={cn(
                  "cursor-pointer rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200",
                  activeCategory === cat.name
                    ? "border-primary/30 bg-primary/10 text-primary-soft"
                    : "border-[var(--glass-border)] bg-glass text-text-muted hover:border-[var(--glass-border-hover)] hover:text-text"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project grid — bento-inspired layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-glass transition-all duration-300 hover:border-[var(--glass-border-hover)] hover:shadow-[0_8px_32px_var(--primary-glow)]",
                  /* Make first and last items span 2 cols on large screens for bento effect */
                  i === 0 && "lg:col-span-2 lg:row-span-1",
                  i === filtered.length - 1 && filtered.length > 3 && "lg:col-span-2"
                )}
              >
                <Link href={`/work/${project.slug}`} className="block">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} — ${project.client}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Arrow on hover */}
                    <div className="absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 md:p-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary-soft">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-text">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-dim">{project.client}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
