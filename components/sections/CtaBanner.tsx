import { ArrowUpRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";

export function CtaBanner() {
  return (
    <section className="section-glow py-24 md:py-32" aria-labelledby="cta-heading">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-glass p-8 md:p-16">
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/15 blur-[80px]" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-[80px]" aria-hidden="true" />

          <div className="relative text-center">
            <Reveal>
              <h2
                id="cta-heading"
                className="mx-auto max-w-3xl font-display text-3xl font-bold text-text md:text-4xl lg:text-5xl"
              >
                HAVE A BRAND THAT DESERVES TO GO{" "}
                <span className="gradient-text">WIDER?</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
                Let&apos;s talk about what you&apos;re building. Whether you need a new brand
                identity, a social media strategy, a campaign, creative content or complete digital
                marketing — let&apos;s create something meaningful together.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_24px_var(--primary-glow)]"
                >
                  Start a Conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
                </Link>

                <div className="flex items-center gap-6 text-sm text-text-muted">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-primary-soft"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={siteConfig.emailHref}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-primary-soft"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
