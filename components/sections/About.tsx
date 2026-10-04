import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section className="section-glow py-24 md:py-32" aria-labelledby="about-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="mb-4 inline-block rounded-full border border-[var(--glass-border)] bg-glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-soft">
                About Us
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="about-heading"
                className="heading-section font-display text-text"
              >
                WE DON&apos;T JUST CREATE CONTENT.{" "}
                <span className="gradient-text">WE CREATE BRAND IMPACT.</span>
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed text-text-muted md:text-lg">
                BWIDE Media is a creative advertising and digital marketing agency focused on
                helping businesses build stronger brands and communicate with their audience in
                meaningful ways.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-base leading-relaxed text-text-muted md:text-lg">
                We combine creative thinking, strategic marketing, visual communication and digital
                execution to create marketing that goes beyond simply looking good.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-sm leading-relaxed text-text-dim">
                Whether you&apos;re launching a brand, promoting a product, building your social
                media presence or planning a complete digital campaign — we build the creative
                direction around your goals.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
