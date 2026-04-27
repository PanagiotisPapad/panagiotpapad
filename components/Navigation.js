"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/work", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6 lg:pt-6">
      <style jsx>{`
        @keyframes navPulse {
          0% { transform: scale(1); }
          50% { transform: scale(0.985) rotate(-0.25deg); }
          100% { transform: scale(1); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div
          key={pathname}
          className="relative rounded-4xl border-2 border-neutral-950 bg-neutral-950/95 px-4 py-3 text-white shadow-[8px_8px_0_rgba(37,99,235,0.28)] backdrop-blur-xl animate-[navPulse_0.38s_ease-out] sm:px-5 sm:py-3.5 lg:px-6"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[1.85rem] opacity-25 spray-texture" />
          <div className="pointer-events-none absolute -right-2 -top-2 hidden rotate-6 rounded-full border-2 border-neutral-950 bg-white px-3 py-1 font-mono text-[0.62rem] font-black uppercase tracking-[0.2em] text-blue-600 shadow-[4px_4px_0_#2563eb] sm:block">
            BSS
          </div>

          <div className="relative flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-white transition-all duration-300 hover:-rotate-1 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Blue Slide Studio home"
            >
              <Logo className="origin-left scale-[0.82] sm:scale-90 lg:scale-100" />
            </Link>

            <div className="hidden items-center gap-1.5 md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative overflow-hidden rounded-full font-mono text-xs font-black uppercase tracking-[0.14em] transition-all duration-300 ${
                    pathname === link.href
                      ? "-rotate-1 bg-blue-600 text-white shadow-[4px_4px_0_rgba(255,255,255,0.18)]"
                      : "text-white/68 hover:-rotate-1 hover:bg-white/10 hover:text-white"
                  } px-4 py-2.5 lg:px-5`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-x-4 bottom-1 h-px scale-x-0 bg-blue-400 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}

              <div className="relative ml-2">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-2 rounded-full border-2 border-white/15 bg-white/5 px-4 py-2.5 font-mono text-xs font-black uppercase tracking-[0.14em] text-white/90 transition-all duration-300 hover:-rotate-1 hover:border-blue-400 hover:bg-white/10"
                  aria-expanded={langDropdownOpen}
                  aria-label="Change language"
                >
                  <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>{language}</span>
                  <svg className={`h-3 w-3 transition-transform duration-300 ${langDropdownOpen ? "rotate-180" : ""}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 top-full mt-3 min-w-44 overflow-hidden rounded-3xl border-2 border-neutral-950 bg-[#f8f5ee] p-2 text-neutral-950 shadow-[7px_7px_0_#2563eb] animate-[slideDown_0.2s_ease-out]">
                    <button
                      onClick={() => {
                        toggleLanguage();
                        setLangDropdownOpen(false);
                      }}
                      className="block w-full rounded-2xl px-4 py-3 text-left font-mono text-xs font-black uppercase tracking-[0.14em] transition-all hover:bg-blue-600 hover:text-white"
                    >
                      {language === "el" ? "English (EN)" : "Ελληνικά (EL)"}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-white/15 bg-white/5 text-white transition-all duration-300 hover:-rotate-2 hover:border-blue-400 hover:bg-white/10 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M7 12h13M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-3 overflow-hidden rounded-4xl border-2 border-neutral-950 bg-[#f8f5ee] p-3 text-neutral-950 shadow-[8px_8px_0_#2563eb] animate-[slideDown_0.3s_ease-out] md:hidden">
            <div className="spray-texture rounded-3xl bg-white/75 p-2">
              <div className="grid gap-2">
                {links.map((link, index) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-2xl border-2 px-4 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] transition-all duration-300 ${
                        isActive
                          ? "border-blue-600 bg-blue-600 text-white shadow-[4px_4px_0_#111827]"
                          : "border-neutral-950 bg-white text-neutral-950 hover:-rotate-1 hover:bg-neutral-950 hover:text-white"
                      }`}
                      style={{
                        animation: `fadeIn 0.3s ease-out ${index * 0.05}s forwards`,
                        opacity: 0
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <button
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="rounded-2xl border-2 border-neutral-950 bg-neutral-950 px-4 py-3 font-mono text-sm font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-rotate-1 hover:bg-blue-600"
                  style={{
                    animation: `fadeIn 0.3s ease-out ${links.length * 0.05}s forwards`,
                    opacity: 0
                  }}
                >
                  {language === "el" ? "English" : "Ελληνικά"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
