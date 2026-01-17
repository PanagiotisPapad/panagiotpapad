"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/work", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  // Subtle navbar animation on route change
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full px-3 pt-3 transition-transform duration-400 sm:px-4 sm:pt-4 lg:px-6 lg:pt-6 ${isAnimating ? 'animate-[navPulse_0.4s_ease-out]' : ''}`}>
      
      <style jsx>{`
        @keyframes navPulse {
          0% { transform: scale(1); }
          50% { transform: scale(0.98); }
          100% { transform: scale(1); }
        }
      `}</style>
        <div className="mx-auto max-w-7xl">
          {/* Pill-shaped nav */}
          <div className="relative rounded-full border border-white/10 bg-neutral-900/95 px-4 py-3 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:shadow-3xl sm:px-6 sm:py-3.5 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link 
                href="/" 
                className="text-white transition-all duration-300 hover:scale-105"
              >
                <Logo className="h-5 w-auto sm:h-6 lg:h-7" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-2 md:flex">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      pathname === link.href
                        ? "text-neutral-900"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {pathname === link.href && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300" />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                ))}
                
                {/* Language Dropdown */}
                <div className="relative ml-4">
                  <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/90 transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                  >
                    <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="uppercase">{language}</span>
                    <svg className={`h-3 w-3 transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {langDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-2xl animate-[slideIn_0.2s_ease-out]">
                      <button
                        onClick={() => {
                          toggleLanguage();
                          setLangDropdownOpen(false);
                        }}
                        className="block w-full px-6 py-3 text-left text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
                      >
                        {language === 'el' ? 'English (EN)' : 'Ελληνικά (EL)'}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white md:hidden"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-2xl animate-[slideDown_0.3s_ease-out] md:hidden sm:rounded-3xl">
              <div className="space-y-1 p-3 sm:p-4">
                {links.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:rounded-full sm:px-6 sm:py-3 sm:text-base ${
                      pathname === link.href
                        ? "bg-white text-neutral-900"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                    style={{ 
                      animation: `fadeIn 0.3s ease-out ${index * 0.05}s forwards`,
                      opacity: 0
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 sm:rounded-full sm:px-6 sm:py-3 sm:text-base"
                  style={{ 
                    animation: `fadeIn 0.3s ease-out ${links.length * 0.05}s forwards`,
                    opacity: 0
                  }}
                >
                  {language === 'el' ? 'English' : 'Ελληνικά'}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
