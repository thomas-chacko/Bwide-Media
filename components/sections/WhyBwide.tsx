import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import {
  Target,
  Lightbulb,
  BookOpen,
  Smartphone,
  Compass,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Strategy Before Execution",
    description:
      "We don't start with a poster. We start by understanding the problem.",
  },
  {
    icon: Lightbulb,
    title: "Creative With Purpose",
    description: "Every visual should have a reason behind it.",
  },
  {
    icon: BookOpen,
    title: "Storytelling That Connects",
    description:
      "We turn products and services into stories people can understand and remember.",
  },
  {
    icon: Smartphone,
    title: "Digital-First Thinking",
    description:
      "We create communication designed for the platforms where your audience actually spends time.",
  },
  {
    icon: Compass,
    title: "One Creative Direction",
    description:
      "From branding to social media to advertising, we maintain consistency across your communication.",
  },
  {
    icon: Handshake,
    title: "Built Around Your Business",
    description:
      "No copy-paste marketing packages. We develop the approach around your requirements.",
  },
];

export function WhyBwide() {
  return (
    <section className="section-glow py-24 md:py-32" aria-labelledby="why-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="why-heading"
            label="Why BWIDE"
            title="WHY WORK WITH US?"
            align="center"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 0.08}>
                <GlassCard className="h-full text-center">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-text md:text-lg">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {reason.description}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
