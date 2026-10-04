import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyBwide } from "@/components/sections/WhyBwide";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/content/faq";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "BWIDE Media offers digital marketing strategy, social media management, Meta advertising, creative content, branding, logo design and video production services in Kerala, India.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <FaqJsonLd faqs={faqItems} />

      <div className="pt-24 md:pt-32">
        <Services />
        <Process />
        <WhyBwide />

        {/* FAQ Section */}
        <section className="section-glow py-24 md:py-32" aria-labelledby="faq-heading">
          <Container>
            <Reveal>
              <SectionHeading
                id="faq-heading"
                label="FAQ"
                title="FREQUENTLY ASKED QUESTIONS"
                subtitle="Common questions about working with BWIDE Media."
                align="center"
              />
            </Reveal>

            <div className="mx-auto max-w-3xl space-y-4">
              {faqItems.map((faq, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <GlassCard hover={false} className="p-6">
                    <h3 className="font-display text-base font-semibold text-text">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">
                      {faq.answer}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <CtaBanner />
      </div>
    </>
  );
}
