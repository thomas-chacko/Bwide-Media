import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/work";

export function CaseStudyTeaser() {
  const featured = projects[0];
  if (!featured) return null;

  return (
    <section className="py-24 md:py-32" aria-labelledby="case-study-heading">
      <Container>
        <Reveal>
          <Link
            href={`/work/${featured.slug}`}
            className="group block overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-glass transition-all duration-300 hover:border-[var(--glass-border-hover)] hover:shadow-[0_8px_40px_var(--primary-glow)]"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[400px]">
                <Image
                  src={featured.thumbnail}
                  alt={`${featured.title} — ${featured.client}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-primary-soft">
                  Featured Case Study
                </span>
                <h2
                  id="case-study-heading"
                  className="font-display text-2xl font-bold text-text md:text-3xl"
                >
                  {featured.title}
                </h2>
                <p className="mt-2 text-sm text-text-dim">{featured.client}</p>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  {featured.challenge}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-soft transition-colors group-hover:text-primary">
                  Read the Case Study
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
