import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <section className="section-glow py-24 md:py-32" aria-labelledby="process-heading">
      <Container>
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-[var(--glass-border)] bg-glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-soft">
            Our Process
          </span>
          <h2
            id="process-heading"
            className="heading-section font-display text-text"
          >
            HOW WE WORK
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
            We believe great marketing starts with understanding the business first.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 left-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-12"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="relative flex gap-6 md:gap-10">
                  {/* Number circle */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--glass-border)] bg-surface md:h-24 md:w-24">
                    <span className="font-display text-xl font-bold text-primary md:text-3xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center pt-1">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-text md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
