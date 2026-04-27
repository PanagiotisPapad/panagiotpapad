"use client";

import Button from "@/components/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function Work() {
  const { t, language } = useLanguage();

  const copy =
    language === "el"
      ? {
          eyebrow: "Selected work",
          intro:
            "Τα case studies ετοιμάζονται. Μέχρι τότε, αυτή η σελίδα λειτουργεί σαν wall για το είδος δουλειάς που χτίζουμε: brands, websites και growth συστήματα με χαρακτήρα.",
          noticeTitle: "Case studies loading",
          noticeText:
            "Ανανεώνουμε το portfolio με πρόσφατα projects. Αν θέλεις να δεις παραδείγματα πριν ανέβουν εδώ, στείλε μήνυμα και τα συζητάμε απευθείας.",
          cardEyebrow: "Coming soon",
          wallTag: "Proof wall",
          stats: [
            "Brand systems",
            "Fast websites",
            "Social presence",
            "Growth loops",
          ],
          finalEyebrow: "Got a project?",
        }
      : {
          eyebrow: "Selected work",
          intro:
            "The case studies are being prepared. Until then, this page acts like a wall for the kind of work we build: brands, websites, and growth systems with character.",
          noticeTitle: "Case studies loading",
          noticeText:
            "We are updating the portfolio with recent projects. If you want examples before they go live here, reach out and we can walk through them directly.",
          cardEyebrow: "Coming soon",
          wallTag: "Proof wall",
          stats: [
            "Brand systems",
            "Fast websites",
            "Social presence",
            "Growth loops",
          ],
          finalEyebrow: "Got a project?",
        };

  const projects = [
    {
      id: 1,
      title: t.home.work.projectTitle,
      category: "Branding & Web",
      description: t.home.work.projectText,
      number: "01",
      accent: "rotate-1",
    },
    {
      id: 2,
      title: t.home.work.projectTitle,
      category: "Social Media",
      description: t.home.work.projectText,
      number: "02",
      accent: "-rotate-1",
    },
    {
      id: 3,
      title: t.home.work.projectTitle,
      category: "Web Development",
      description: t.home.work.projectText,
      number: "03",
      accent: "-rotate-2",
    },
    {
      id: 4,
      title: t.home.work.projectTitle,
      category: "Branding",
      description: t.home.work.projectText,
      number: "04",
      accent: "rotate-2",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ee] text-neutral-950">
      <section className="relative isolate overflow-hidden bg-[#f8f5ee] spray-texture">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.9),rgba(248,245,238,0.8)_48%,rgba(37,99,235,0.18))]" />
        <div className="absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl animate-[sprayDrift_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-8 right-4 -z-10 hidden text-[10rem] font-black uppercase leading-none tracking-[-0.12em] text-neutral-950/[0.035] sm:block lg:text-[16rem]">
          WORK
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:grid-cols-12 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="lg:col-span-8">
            <div className="mb-6 inline-flex -rotate-1 rounded-full border-2 border-neutral-950 bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-600 shadow-[5px_5px_0_#111827] opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
              {copy.eyebrow}
            </div>
            <h1 className="text-6xl font-black leading-[0.86] tracking-[-0.08em] text-neutral-950 tag-shadow opacity-0 animate-[fadeIn_0.8s_ease-out_0.05s_forwards] sm:text-7xl lg:text-[9rem]">
              {t.work.hero.title}
              <span className="marker-highlight ml-2 text-blue-600">.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-neutral-700 opacity-0 animate-[fadeIn_0.8s_ease-out_0.14s_forwards] sm:text-xl lg:text-2xl">
              {t.work.hero.subtitle} {copy.intro}
            </p>
          </div>

          <div className="lg:col-span-4 lg:pt-12">
            <div className="relative rotate-2 rounded-4xl border-2 border-neutral-950 bg-neutral-950 p-5 text-white shadow-[14px_14px_0_rgba(37,99,235,0.24)] animate-[stickerFloat_6s_ease-in-out_infinite]">
              <div className="absolute -left-5 top-8 -rotate-12 rounded-full bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-[5px_5px_0_rgba(255,255,255,0.18)]">
                {copy.wallTag}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 spray-texture">
                <div className="relative mb-8 aspect-square overflow-hidden rounded-3xl border-2 border-white/70 bg-blue-600">
                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    <span className="font-mono text-[0.6rem] font-black uppercase tracking-[0.28em] text-white/55">
                      Portfolio
                    </span>
                    <div>
                      <div className="text-[4.5rem] font-black leading-none tracking-[-0.14em] text-white">
                        (2)4.
                      </div>
                      <div className="mt-2 font-mono text-[0.6rem] font-black uppercase tracking-[0.24em] text-white/60">
                        Selected projects
                      </div>
                    </div>
                    <div className="h-[2px] w-14 rounded-full bg-white/30" />
                  </div>
                </div>
                <h2 className="text-3xl font-black leading-none tracking-[-0.05em]">
                  {copy.noticeTitle}
                </h2>
                <p className="mt-5 text-base font-medium leading-relaxed text-neutral-300">
                  {copy.noticeText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-950 py-16 text-white sm:py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.stats.map((stat, index) => (
              <div
                key={stat}
                className="rounded-3xl border border-white/10 bg-white/4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:bg-white/[0.07]"
              >
                <div className="mb-4 font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-400">
                  0{index + 1}
                </div>
                <div className="text-2xl font-black leading-none tracking-[-0.05em]">
                  {stat}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                href="/contact"
                className="group overflow-hidden rounded-4xl border-2 border-neutral-950 bg-[#f8f5ee] text-neutral-950 shadow-[8px_8px_0_rgba(37,99,235,0.36)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[13px_13px_0_rgba(37,99,235,0.55)]"
              >
                <div className="relative min-h-72 overflow-hidden bg-neutral-950 p-6 spray-texture">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(37,99,235,0.52),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_50%)]" />
                  <div className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-[5px_5px_0_#2563eb]">
                    {copy.cardEyebrow}
                  </div>
                  <div
                    className={`absolute bottom-8 left-8 h-40 w-40 rounded-4xl border-2 border-white/75 bg-blue-600 shadow-[10px_10px_0_rgba(255,255,255,0.12)] transition-transform duration-500 group-hover:scale-105 ${project.accent}`}
                  >
                    <div className="absolute inset-4 rounded-3xl border border-white/30" />
                    <div className="absolute bottom-6 left-6 bg-white px-3 py-2 text-3xl font-black tracking-[-0.08em] text-neutral-950">
                      {project.number}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-5 inline-flex -rotate-1 bg-blue-600 px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.2em] text-white">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-black leading-none tracking-[-0.06em] text-neutral-950 transition-colors group-hover:text-blue-600 sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-base font-medium leading-relaxed text-neutral-700 sm:text-lg">
                    {project.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-3 text-lg font-black text-neutral-950 transition-all duration-300 group-hover:gap-5 group-hover:text-blue-600">
                    <span>{t.home.work.caseStudy}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8f5ee] py-20 spray-texture sm:py-24 lg:py-32">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-4xl border-2 border-neutral-950 bg-white p-8 text-center shadow-[12px_12px_0_#2563eb] sm:p-12 lg:p-16">
            <div className="mb-6 font-mono text-xs font-black uppercase tracking-[0.28em] text-blue-600">
              {copy.finalEyebrow}
            </div>
            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] text-neutral-950 sm:text-6xl lg:text-7xl">
              {t.home.cta.title}
            </h2>
            <p className="mx-auto mb-8 mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-700 sm:text-xl">
              {t.home.cta.subtitle}
            </p>
            <Button href="/contact">{t.home.hero.ctaPrimary}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
