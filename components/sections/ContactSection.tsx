import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";

export function ContactSection() {
  return (
    <section className="section-glow py-24 md:py-32" id="contact" aria-labelledby="contact-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <div>
            <Reveal>
              <SectionHeading
                id="contact-heading"
                label="Get In Touch"
                title="LET'S CREATE SOMETHING THAT MATTERS."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="space-y-5" role="list">
                <li>
                  <a
                    href={siteConfig.phoneHref}
                    className="group flex items-center gap-4 text-text-muted transition-colors hover:text-text"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-glass transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs text-text-dim">Phone</p>
                      <p className="font-medium">{siteConfig.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.emailHref}
                    className="group flex items-center gap-4 text-text-muted transition-colors hover:text-text"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-glass transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs text-text-dim">Email</p>
                      <p className="font-medium">{siteConfig.email}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-text-muted transition-colors hover:text-text"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-glass transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Instagram className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs text-text-dim">Instagram</p>
                      <p className="font-medium">{siteConfig.instagram}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-4 text-text-muted">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-glass">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-text-dim">Location</p>
                    <p className="font-medium">{siteConfig.location}</p>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
