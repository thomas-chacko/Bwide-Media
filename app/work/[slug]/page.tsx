import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd, CreativeWorkJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/content/work";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return buildMetadata({
    title: `${project.title} — ${project.category}`,
    description: project.challenge,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
          { name: project.title, href: `/work/${project.slug}` },
        ]}
      />
      <CreativeWorkJsonLd
        title={project.title}
        description={project.challenge}
        slug={project.slug}
      />

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        <Container>
          {/* Back link */}
          <Reveal>
            <Link
              href="/work"
              className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to all projects
            </Link>
          </Reveal>

          {/* Header */}
          <Reveal delay={0.1}>
            <header className="mb-12 md:mb-16">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-soft">
                {project.category}
              </span>
              <h1 className="font-display text-3xl font-bold text-text md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-3 text-lg text-text-muted">{project.client}</p>
            </header>
          </Reveal>

          {/* Hero image */}
          <Reveal delay={0.2}>
            <div className="relative mb-16 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--glass-border)]">
              <Image
                src={project.thumbnail}
                alt={`${project.title} — hero image`}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Content sections */}
          <div className="mx-auto max-w-3xl space-y-16">
            <Reveal>
              <section aria-labelledby="challenge">
                <h2 id="challenge" className="heading-sub font-display text-text">
                  The Challenge
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
                  {project.challenge}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="approach">
                <h2 id="approach" className="heading-sub font-display text-text">
                  The Approach
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
                  {project.approach}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="idea">
                <h2 id="idea" className="heading-sub font-display text-text">
                  The Idea
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
                  {project.idea}
                </p>
              </section>
            </Reveal>

            {/* Gallery */}
            <Reveal>
              <section aria-labelledby="execution">
                <h2 id="execution" className="heading-sub font-display text-text">
                  The Execution
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
                  {project.execution}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--glass-border)]"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} — gallery image ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="outcome">
                <h2 id="outcome" className="heading-sub font-display text-text">
                  The Outcome
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
                  {project.outcome}
                </p>
              </section>
            </Reveal>

            {/* Closing quote */}
            <Reveal>
              <blockquote className="border-l-2 border-primary/30 pl-6 text-lg italic text-text-muted">
                &ldquo;Good design gets attention. Good strategy gives that attention a direction.&rdquo;
              </blockquote>
            </Reveal>
          </div>

          {/* Next project */}
          {nextProject && (
            <Reveal>
              <div className="mt-24 border-t border-[var(--glass-border)] pt-12">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-text-dim">
                  Next Project
                </p>
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-display text-2xl font-bold text-text transition-colors group-hover:text-primary-soft md:text-3xl">
                      {nextProject.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-dim">
                      {nextProject.category}
                    </p>
                  </div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--glass-border)] text-text-dim transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </Reveal>
          )}

          {/* CTA */}
          <Reveal>
            <div className="mt-16 text-center">
              <Button href="/contact" variant="primary" size="lg">
                Start a Project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </article>
    </>
  );
}
