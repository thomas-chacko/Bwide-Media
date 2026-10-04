import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/services";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section className="section-glow py-24 md:py-32" aria-labelledby="services-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="services-heading"
            label="What We Do"
            title="FROM IDEA TO IMPACT."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <GlassCard
                className="group relative h-full cursor-default"
                as="article"
              >
                {/* Number */}
                <span className="font-display text-5xl font-bold text-white/[0.03]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3
                  id={service.id}
                  className="mt-2 font-display text-lg font-semibold text-text md:text-xl"
                >
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" role="list">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-[11px] text-text-dim transition-colors group-hover:border-[var(--glass-border-hover)] group-hover:text-text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Arrow icon */}
                <div className="mt-6 flex justify-end">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-border)] text-text-dim transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
