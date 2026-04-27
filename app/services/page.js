"use client";

import Button from "@/components/Button";
import ServiceIcon from "@/components/ServiceIcon";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t, language } = useLanguage();

  const copy = language === "el"
    ? {
        eyebrow: "Services menu",
        intro: "Τρεις καθαρές κινήσεις: βρίσκουμε τη θέση σου, χτίζουμε την εμπειρία, και τη μεγαλώνουμε με συνέπεια.",
        badge: "No templates",
        noteTitle: "One studio, many moves",
        noteText: "Το αποτέλεσμα πρέπει να νιώθει custom, αλλά η διαδικασία πρέπει να είναι απλή. Γι αυτό δουλεύουμε με ξεκάθαρα βήματα, γρήγορη υλοποίηση και συνεχή βελτίωση.",
        finalEyebrow: "Ready when you are",
      }
    : {
        eyebrow: "Services menu",
        intro: "Three clean moves: find your position, build the experience, and grow it with consistency.",
        badge: "No templates",
        noteTitle: "One studio, many moves",
        noteText: "The result should feel custom, but the process should feel simple. That is why we work with clear steps, fast execution, and ongoing improvement.",
        finalEyebrow: "Ready when you are",
      };

  const serviceGroups = [
    {
      number: "01",
      type: "strategy",
      tag: "Position",
      title: t.services.strategy.title,
      items: [
        t.services.strategy.item1,
        t.services.strategy.item2,
        t.services.strategy.item3,
        t.services.strategy.item4,
        t.services.strategy.item5,
      ],
    },
    {
      number: "02",
      type: "design",
      tag: "Create",
      title: t.services.design.title,
      items: [
        t.services.design.item1,
        t.services.design.item2,
        t.services.design.item3,
        t.services.design.item4,
        t.services.design.item5,
      ],
    },
    {
      number: "03",
      type: "growth",
      tag: "Move",
      title: t.services.growth.title,
      items: [
        t.services.growth.item1,
        t.services.growth.item2,
        t.services.growth.item3,
        t.services.growth.item4,
        t.services.growth.item5,
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ee] text-neutral-950">
      <section className="relative isolate overflow-hidden bg-[#f8f5ee] spray-texture">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.88),rgba(248,245,238,0.82)_48%,rgba(37,99,235,0.16))]" />
        <div className="absolute -right-24 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl animate-[sprayDrift_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-8 right-4 -z-10 hidden text-[10rem] font-black uppercase leading-none tracking-[-0.12em] text-neutral-950/[0.035] sm:block lg:text-[16rem]">
          MENU
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:grid-cols-12 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="lg:col-span-8">
            <div className="mb-6 inline-flex -rotate-1 rounded-full border-2 border-neutral-950 bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-600 shadow-[5px_5px_0_#111827] opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
              {copy.eyebrow}
            </div>
            <h1 className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.08em] text-neutral-950 tag-shadow opacity-0 animate-[fadeIn_0.8s_ease-out_0.05s_forwards] sm:text-7xl lg:text-[9rem]">
              {t.services.hero.title}
              <span className="marker-highlight ml-2 text-blue-600">.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-neutral-700 opacity-0 animate-[fadeIn_0.8s_ease-out_0.14s_forwards] sm:text-xl lg:text-2xl">
              {t.services.hero.subtitle} {copy.intro}
            </p>
          </div>

          <div className="lg:col-span-4 lg:pt-12">
            <div className="relative rotate-2 rounded-4xl border-2 border-neutral-950 bg-neutral-950 p-5 text-white shadow-[14px_14px_0_rgba(37,99,235,0.24)] animate-[stickerFloat_6s_ease-in-out_infinite]">
              <div className="absolute -left-5 top-8 -rotate-12 rounded-full bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-[5px_5px_0_rgba(255,255,255,0.18)]">
                {copy.badge}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 spray-texture">
                <div className="mb-10 grid h-20 w-20 place-items-center rounded-3xl bg-blue-600 text-white shadow-[8px_8px_0_rgba(255,255,255,0.12)]">
                  <ServiceIcon type="strategy" className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-black leading-none tracking-[-0.05em]">
                  {copy.noteTitle}
                </h2>
                <p className="mt-5 text-base font-medium leading-relaxed text-neutral-300">
                  {copy.noteText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-950 py-16 text-white sm:py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {serviceGroups.map((service, index) => (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:bg-white/[0.07] sm:p-8 lg:p-10"
              >
                <div className="absolute -right-8 -top-10 font-mono text-9xl font-black tracking-[-0.15em] text-white/[0.035] transition-colors duration-300 group-hover:text-blue-500/20 sm:text-[11rem]">
                  {service.number}
                </div>

                <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-5">
                    <div className="mb-8 flex items-center gap-4">
                      <div className="grid h-16 w-16 place-items-center rounded-3xl bg-blue-600 text-white shadow-[6px_6px_0_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                        <ServiceIcon type={service.type} className="h-8 w-8" />
                      </div>
                      <div className="font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-400">
                        {service.tag} / {service.number}
                      </div>
                    </div>
                    <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                      {service.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-7">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="group/item rounded-3xl border border-white/10 bg-neutral-950/60 p-4 transition-all duration-300 hover:-rotate-1 hover:border-blue-400/60 hover:bg-blue-600 sm:p-5"
                        >
                          <div className="flex gap-3">
                            <span className="font-mono text-sm font-black text-blue-400 transition-colors group-hover/item:text-white">→</span>
                            <span className="text-base font-semibold leading-relaxed text-neutral-200 transition-colors group-hover/item:text-white sm:text-lg">
                              {item}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index === 1 && (
                  <div className="absolute bottom-5 left-5 hidden -rotate-6 rounded-full bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-neutral-950 shadow-[5px_5px_0_#2563eb] lg:block">
                    Blue Slide method
                  </div>
                )}
              </article>
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
            <Button href="/contact">{t.services.cta}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
