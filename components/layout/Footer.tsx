import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/content/site";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--glass-border)] bg-bg-alt" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Creative Advertising & Digital Marketing Agency
            </p>
            <p className="mt-2 text-sm italic text-text-dim">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-text">
              Services
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {siteConfig.footerServices.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary-soft"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-text">
              Company
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-text">
              Contact
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary-soft"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary-soft"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary-soft"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.instagram}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-text-muted">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-[var(--glass-border)] pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-dim">
            &copy; {currentYear} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow BWIDE Media on Instagram"
              className="text-text-dim transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
