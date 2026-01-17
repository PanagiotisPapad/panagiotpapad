"use client";

import Button from "@/components/Button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-neutral-900 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] sm:text-6xl lg:text-8xl">
              {t.about.hero.title}
              <span className="ml-4 inline-block h-2 w-16 bg-blue-600"></span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 opacity-0 animate-[fadeIn_0.8s_ease-out_0.1s_forwards] sm:mt-8 sm:text-xl lg:text-2xl">
              {t.about.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                {t.about.story.title}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                {t.about.story.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-neutral-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.about.approach.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:gap-16">
            <div className="group border-t border-white/10 pt-6 transition-all duration-300 hover:border-blue-500/30 sm:pt-8">
              <div className="mb-4 text-5xl font-bold text-white/20 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400/40 sm:mb-6 sm:text-6xl lg:text-7xl">
                01
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                {t.about.approach.step1Title}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-400 sm:text-xl">{t.about.approach.step1Text}</p>
            </div>

            <div className="group border-t border-white/10 pt-6 transition-all duration-300 hover:border-white/30 sm:pt-8">
              <div className="mb-4 text-5xl font-bold text-white/20 transition-all duration-300 group-hover:scale-110 group-hover:text-white/40 sm:mb-6 sm:text-6xl lg:text-7xl">
                02
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                {t.about.approach.step2Title}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-400 sm:text-xl">{t.about.approach.step2Text}</p>
            </div>

            <div className="group border-t border-white/10 pt-6 transition-all duration-300 hover:border-blue-500/30 sm:pt-8">
              <div className="mb-4 text-5xl font-bold text-white/20 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400/40 sm:mb-6 sm:text-6xl lg:text-7xl">
                03
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                {t.about.approach.step3Title}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-400 sm:text-xl">{t.about.approach.step3Text}</p>
            </div>

            <div className="group border-t border-white/10 pt-6 transition-all duration-300 hover:border-white/30 sm:pt-8">
              <div className="mb-4 text-5xl font-bold text-white/20 transition-all duration-300 group-hover:scale-110 group-hover:text-white/40 sm:mb-6 sm:text-6xl lg:text-7xl">
                04
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                {t.about.approach.step4Title}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-400 sm:text-xl">{t.about.approach.step4Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              {t.about.values.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-2xl font-bold text-neutral-900 sm:mb-4 sm:text-3xl">
                {t.about.values.value1}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">{t.about.values.value1Text}</p>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold text-neutral-900 sm:mb-4 sm:text-3xl">
                {t.about.values.value2}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">{t.about.values.value2Text}</p>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold text-neutral-900 sm:mb-4 sm:text-3xl">
                {t.about.values.value3}
              </h3>
              <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">{t.about.values.value3Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:mb-12 lg:text-6xl">
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
