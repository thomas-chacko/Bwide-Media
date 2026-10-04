"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-bg/80 border-b border-[var(--glass-border)] py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex" role="list">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors duration-200",
                    pathname === link.href
                      ? "text-text"
                      : "text-text-muted hover:text-text"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_var(--primary-glow)] md:inline-flex"
          >
            Start a Project
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-glass md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-text" />
            ) : (
              <Menu className="h-5 w-5 text-text" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-bg/98 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col items-center gap-8" role="list">
                {siteConfig.navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-display text-3xl font-bold tracking-tight transition-colors",
                        pathname === link.href
                          ? "text-primary"
                          : "text-text hover:text-primary-soft"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: siteConfig.navLinks.length * 0.05 }}
                >
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-primary/90"
                    onClick={() => setMobileOpen(false)}
                  >
                    Start a Project
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
