"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-56">
          <div className="mx-auto max-w-6xl">
            {/* Main headline */}
            <h1 
              className="mb-12 text-5xl font-bold leading-[0.95] tracking-tight text-neutral-900 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] sm:mb-16 sm:text-7xl lg:text-[9rem]" 
            >
              <span className="inline-block">{t.home.hero.title}</span>
              <span className="ml-4 inline-block h-2 w-2 rounded-full bg-blue-600 opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]"></span>
            </h1>
            
            {/* CTA */}
            <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.1s_forwards]">
              <Button href="/contact">{t.home.hero.ctaPrimary}</Button>
            </div>
          </div>
          
          {/* Large decorative text */}
          <div className="pointer-events-none mt-20 sm:mt-32 lg:mt-40">
            <div 
              className="text-[8rem] font-bold leading-none text-neutral-900/5 transition-all duration-700 sm:text-[12rem] lg:text-[18rem]"
              style={{ transform: `translateX(${-scrollY * 0.3}px)` }}
            >
              DIGITAL
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-stone-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Title column */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                {t.home.value.title}
                <span className="ml-3 inline-block h-1 w-12 bg-blue-600"></span>
              </h2>
            </div>
            
            {/* Content column */}
            <div className="space-y-12 sm:space-y-16 lg:col-span-6 lg:col-start-7">
              <p className="text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                {t.home.value.subtitle}
              </p>
              
              <div className="space-y-10 sm:space-y-12">
                <div>
                  <div className="mb-2 text-6xl font-bold text-blue-600/10 sm:mb-3 sm:text-8xl">01</div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900 sm:mb-4 sm:text-2xl">{t.home.value.card1Title}</h3>
                  <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">{t.home.value.card1Text}</p>
                </div>
                
                <div>
                  <div className="mb-2 text-6xl font-bold text-neutral-900/10 sm:mb-3 sm:text-8xl">02</div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900 sm:mb-4 sm:text-2xl">{t.home.value.card2Title}</h3>
                  <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">{t.home.value.card2Text}</p>
                </div>
                
                <div>
                  <div className="mb-2 text-6xl font-bold text-blue-600/10 sm:mb-3 sm:text-8xl">03</div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900 sm:mb-4 sm:text-2xl">{t.home.value.card3Title}</h3>
                  <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">{t.home.value.card3Text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-neutral-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:mb-8 sm:text-5xl lg:text-6xl">
              {t.home.services.title}
              <span className="ml-3 inline-block h-1 w-12 bg-blue-500"></span>
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-300 sm:text-xl lg:text-2xl">
              {t.home.services.subtitle}
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            <div className="group border-t border-white/10 pt-8 sm:pt-12">
              <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-3xl">
                    {t.home.services.service1}
                  </h3>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
                    {t.home.services.service1Text}
                  </p>
                </div>
              </div>
            </div>

            <div className="group border-t border-white/10 pt-8 sm:pt-12">
              <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-3xl">
                    {t.home.services.service2}
                  </h3>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
                    {t.home.services.service2Text}
                  </p>
                </div>
              </div>
            </div>

            <div className="group border-t border-white/10 pt-8 sm:pt-12">
              <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-3xl">
                    {t.home.services.service3}
                  </h3>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
                    {t.home.services.service3Text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <Link 
              href="/services"
              className="group inline-flex items-center gap-2 text-lg font-bold text-white transition-all duration-300 hover:gap-4 hover:text-blue-400 sm:gap-3 sm:text-xl"
            >
              <span>{t.home.services.cta}</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-stone-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              {t.home.work.title}
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {/* Project 1 */}
            <Link 
              href="/work"
              className="group grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <div className="order-2 flex flex-col justify-center lg:order-1">
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-500 sm:mb-4 sm:text-sm">
                  Featured Project
                </div>
                <h3 className="mb-4 text-3xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-neutral-600 sm:mb-6 sm:text-4xl lg:text-5xl">
                  {t.home.work.projectTitle}
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-neutral-600 sm:mb-8 sm:text-xl">
                  {t.home.work.projectText}
                </p>
                <div className="inline-flex items-center gap-2 text-base font-bold text-neutral-900 transition-all duration-300 group-hover:gap-4 sm:text-lg">
                  <span>{t.home.work.caseStudy}</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-4/3 overflow-hidden bg-linear-to-br from-neutral-100 to-neutral-200 transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center text-neutral-400">
                      <svg className="mx-auto h-16 w-16 sm:h-20 sm:w-20" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <Link 
              href="/work"
              className="group inline-flex items-center gap-2 text-lg font-bold text-neutral-900 transition-all duration-300 hover:gap-4 hover:text-blue-600 sm:gap-3 sm:text-xl"
            >
              <span>{t.home.work.cta}</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <blockquote className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              &ldquo;{t.home.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8 sm:mt-12">
              <div className="text-lg font-bold text-neutral-900 sm:text-xl">{t.home.testimonial.author}</div>
              <div className="mt-2 text-base text-neutral-600 sm:text-lg">{t.home.testimonial.company}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:mb-12 lg:text-6xl">
              {t.home.cta.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-400 sm:text-xl lg:mb-12 lg:text-2xl">
              {t.home.cta.subtitle}
            </p>
            <Button href="/contact">{t.home.cta.button}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
