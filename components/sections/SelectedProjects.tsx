import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/work";

export function SelectedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 md:py-32" aria-labelledby="selected-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="selected-heading"
            label="Selected Projects"
            title="WORK THAT SPEAKS."
            subtitle="A selection of projects where strategy and creativity came together."
            align="center"
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-glass transition-all duration-300 hover:border-[var(--glass-border-hover)] hover:shadow-[0_4px_24px_var(--primary-glow)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} — ${project.client}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-display text-base font-semibold text-text">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-text-dim">{project.category}</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] text-text-dim transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
