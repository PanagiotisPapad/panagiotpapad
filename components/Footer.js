"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-neutral-900">
      {/* Decorative element */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
          {/* Large CTA */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:mb-8 sm:text-5xl lg:text-6xl xl:text-7xl">
              {t.footer.cta}
            </h2>
            <Link 
              href="/contact"
              className="group inline-flex items-center gap-2 text-xl font-bold text-white transition-all duration-300 hover:gap-4 hover:text-blue-400 sm:gap-3 sm:text-2xl lg:gap-4 lg:text-3xl"
            >
              <span>{t.footer.ctaButton}</span>
              <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl lg:text-4xl">→</span>
            </Link>
          </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 gap-16 border-t border-white/10 pt-16 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="text-white">
              <Logo className="h-8 w-auto" />
            </div>
            <p className="mt-6 text-lg text-neutral-400">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white/60">{t.footer.navigate}</h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: t.nav.home },
                { href: "/services", label: t.nav.services },
                { href: "/work", label: t.nav.work },
                { href: "/about", label: t.nav.about },
                { href: "/contact", label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-xl font-semibold text-white transition-all duration-300 hover:gap-4"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white/60">{t.footer.connect}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@blueslidestudio.gr"
                  className="text-xl font-semibold text-white transition-colors hover:text-neutral-300"
                >
                  hello@blueslidestudio.gr
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-white transition-colors hover:text-neutral-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-white transition-colors hover:text-neutral-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-base text-neutral-500">
            © {currentYear} Blue Slide Studio. {t.footer.rights}
          </p>
          <p className="text-sm text-neutral-600">
            Designed & Built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
