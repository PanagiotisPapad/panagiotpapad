"use client";

import Button from "@/components/Button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-neutral-900 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] sm:text-6xl lg:text-8xl">
              {t.services.hero.title}
              <span className="ml-4 inline-block h-2 w-16 bg-blue-600"></span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 opacity-0 animate-[fadeIn_0.8s_ease-out_0.1s_forwards] sm:text-xl lg:mt-8 lg:text-2xl">
              {t.services.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Strategy & Analysis */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                {t.services.strategy.title}
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-5">
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.strategy.item1}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.strategy.item2}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.strategy.item3}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.strategy.item4}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.strategy.item5}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Development */}
      <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                {t.services.design.title}
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-5">
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.design.item1}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.design.item2}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.design.item3}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.design.item4}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.design.item5}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Growth */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-5xl">
                {t.services.growth.title}
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-5">
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.growth.item1}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.growth.item2}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.growth.item3}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.growth.item4}</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2 sm:gap-4">
                    <span className="mt-0.5 text-xl font-bold text-neutral-900/20 transition-colors duration-300 group-hover:text-neutral-900/50 sm:text-2xl">→</span>
                    <span className="text-base text-neutral-700 sm:text-lg lg:text-xl">{t.services.growth.item5}</span>
                  </div>
                </li>
              </ul>
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
