"use client";

import Button from "@/components/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function Work() {
  const { t } = useLanguage();

  // Placeholder projects - to be replaced with real content
  const projects = [
    {
      id: 1,
      title: t.home.work.projectTitle,
      category: "Branding & Web",
      description: t.home.work.projectText,
    },
    {
      id: 2,
      title: t.home.work.projectTitle,
      category: "Social Media",
      description: t.home.work.projectText,
    },
    {
      id: 3,
      title: t.home.work.projectTitle,
      category: "Web Development",
      description: t.home.work.projectText,
    },
    {
      id: 4,
      title: t.home.work.projectTitle,
      category: "Branding",
      description: t.home.work.projectText,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-neutral-900 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] sm:text-6xl lg:text-8xl">
              {t.work.hero.title}
              <span className="ml-4 inline-block h-2 w-16 bg-blue-600"></span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 opacity-0 animate-[fadeIn_0.8s_ease-out_0.1s_forwards] sm:mt-8 sm:text-xl lg:text-2xl">
              {t.work.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-neutral-900 p-12 text-center sm:rounded-3xl sm:p-16 lg:p-24">
            <h2 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl lg:text-5xl">
              {t.work.comingSoon}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-neutral-400 sm:mb-12 sm:text-lg lg:text-xl">
              We're currently updating our portfolio with recent projects. In the meantime, let's discuss your project.
            </p>
            <Button href="/contact">{t.home.hero.ctaPrimary}</Button>
          </div>
        </div>
      </section>

      {/* Projects Grid - Placeholder */}
      <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:gap-12">
            {projects.map((project) => (
              <Link
                key={project.id}
                href="/contact"
                className="group overflow-hidden bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-linear-to-br from-neutral-100 to-neutral-200">
                  <div className="flex h-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <div className="text-center text-neutral-400">
                      <svg className="mx-auto h-16 w-16 sm:h-20 sm:w-20" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-500 sm:mb-4 sm:text-sm">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 transition-colors group-hover:text-neutral-600 sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-600 sm:mt-4 sm:text-lg">{project.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-neutral-900 transition-all duration-300 group-hover:gap-4 sm:mt-6 sm:text-lg">
                    <span>{t.home.work.caseStudy}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
