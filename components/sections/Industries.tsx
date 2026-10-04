import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/content/industries";

export function Industries() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="industries-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="industries-heading"
            label="Industries"
            title="WE CREATE FOR DIFFERENT BUSINESS STORIES."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[var(--glass-border)] bg-glass px-5 py-2.5 text-sm font-medium text-text-muted transition-all duration-200 hover:border-[var(--glass-border-hover)] hover:text-text md:px-6 md:py-3 md:text-base"
              >
                {industry}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm italic text-text-dim md:text-base">
            Don&apos;t see your industry? If you have a story to tell, we can help you tell it.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
