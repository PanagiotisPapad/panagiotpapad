"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/work", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const socialLinks = [
    { href: "mailto:hello@blueslidestudio.gr", label: "hello@blueslidestudio.gr" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://instagram.com", label: "Instagram" },
  ];

  const footerCopy = language === "el"
    ? {
        eyebrow: "From strategy to launch",
        stamp: "Built fresh",
        note: "Street-inspired digital presence for businesses that need taste, trust, and momentum.",
        credit: "Designed & built with care",
      }
    : {
        eyebrow: "From strategy to launch",
        stamp: "Built fresh",
        note: "Street-inspired digital presence for businesses that need taste, trust, and momentum.",
        credit: "Designed & built with care",
      };

  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white spray-texture">
      <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-12 right-8 hidden text-[11rem] font-black uppercase leading-none tracking-[-0.12em] text-white/[0.035] sm:block lg:text-[17rem]">
        BLUE
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <div className="mb-6 inline-flex -rotate-1 rounded-full border-2 border-white/15 bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-600 shadow-[5px_5px_0_#2563eb]">
              {footerCopy.eyebrow}
            </div>
            <h2 className="max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.07em] text-white tag-shadow sm:text-6xl lg:text-8xl">
              {t.footer.cta}
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-8 text-lg font-medium leading-relaxed text-neutral-300 sm:text-xl">
              {footerCopy.note}
            </p>
            <Link
              href="/contact"
              className="group inline-flex -rotate-1 items-center gap-3 border-2 border-white bg-blue-600 px-6 py-4 text-lg font-black text-white shadow-[8px_8px_0_rgba(255,255,255,0.16)] transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-[11px_11px_0_rgba(255,255,255,0.2)] sm:text-xl"
            >
              <span>{t.footer.ctaButton}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 border-y border-white/10 py-10 md:grid-cols-12 lg:py-14">
          <div className="rounded-4xl border border-white/10 bg-white/4 p-6 md:col-span-5 lg:p-8">
            <div className="text-white">
              <Logo />
            </div>
            <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-neutral-300">
              {t.footer.tagline}
            </p>
            <div className="mt-8 inline-flex rotate-2 rounded-full bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-neutral-950 shadow-[5px_5px_0_#2563eb]">
              {footerCopy.stamp}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/4 p-6 md:col-span-3 lg:p-8">
            <h4 className="mb-6 font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-400">
              {t.footer.navigate}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-xl font-black tracking-[-0.04em] text-white transition-all duration-300 hover:gap-5 hover:text-blue-400"
                  >
                    <span className="text-blue-500 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/4 p-6 md:col-span-4 lg:p-8">
            <h4 className="mb-6 font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-400">
              {t.footer.connect}
            </h4>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex max-w-full wrap-break-word text-xl font-black tracking-[-0.04em] text-white transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} Blue Slide Studio. {t.footer.rights}
          </p>
          <p>{footerCopy.credit}</p>
        </div>
      </div>
    </footer>
  );
}
