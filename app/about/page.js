"use client";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import ServiceIcon from "@/components/ServiceIcon";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  const copy = language === "el"
    ? {
        eyebrow: "About the studio",
        intro: "Ένα μικρό studio με καθαρό τρόπο δουλειάς: στρατηγική σκέψη, design με χαρακτήρα και υλοποίηση που στέκεται επαγγελματικά.",
        sticker: "Trust the process",
        noteTitle: "Built from the slide up",
        noteText: "Το Blue Slide κρατάει την ενέργεια της γειτονιάς, αλλά τη μεταφράζει σε σοβαρή ψηφιακή παρουσία για επιχειρήσεις που θέλουν κάτι δικό τους.",
        approachEyebrow: "How we move",
        valuesEyebrow: "What stays steady",
        finalEyebrow: "Start the next move",
      }
    : {
        eyebrow: "About the studio",
        intro: "A small studio with a clear way of working: strategic thinking, design with character, and execution that feels professional.",
        sticker: "Trust the process",
        noteTitle: "Built from the slide up",
        noteText: "Blue Slide keeps the energy of the neighborhood, then translates it into serious digital presence for businesses that want something of their own.",
        approachEyebrow: "How we move",
        valuesEyebrow: "What stays steady",
        finalEyebrow: "Start the next move",
      };

  const steps = [
    { number: "01", title: t.about.approach.step1Title, text: t.about.approach.step1Text },
    { number: "02", title: t.about.approach.step2Title, text: t.about.approach.step2Text },
    { number: "03", title: t.about.approach.step3Title, text: t.about.approach.step3Text },
    { number: "04", title: t.about.approach.step4Title, text: t.about.approach.step4Text },
  ];

  const values = [
    { type: "clarity", title: t.about.values.value1, text: t.about.values.value1Text },
    { type: "quality", title: t.about.values.value2, text: t.about.values.value2Text },
    { type: "results", title: t.about.values.value3, text: t.about.values.value3Text },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ee] text-neutral-950">
      <section className="relative isolate overflow-hidden bg-[#f8f5ee] spray-texture">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.9),rgba(248,245,238,0.82)_48%,rgba(37,99,235,0.16))]" />
        <div className="absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl animate-[sprayDrift_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-8 right-4 -z-10 hidden text-[10rem] font-black uppercase leading-none tracking-[-0.12em] text-neutral-950/[0.035] sm:block lg:text-[16rem]">
          ABOUT
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:grid-cols-12 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="lg:col-span-8">
            <div className="mb-6 inline-flex -rotate-1 rounded-full border-2 border-neutral-950 bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-600 shadow-[5px_5px_0_#111827] opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
              {copy.eyebrow}
            </div>
            <h1 className="max-w-6xl text-5xl font-black leading-[0.86] tracking-[-0.08em] text-neutral-950 tag-shadow opacity-0 animate-[fadeIn_0.8s_ease-out_0.05s_forwards] sm:text-7xl lg:text-[8rem]">
              {t.about.hero.title}
              <span className="marker-highlight ml-2 text-blue-600">.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-neutral-700 opacity-0 animate-[fadeIn_0.8s_ease-out_0.14s_forwards] sm:text-xl lg:text-2xl">
              {t.about.hero.subtitle}. {copy.intro}
            </p>
          </div>

          <div className="lg:col-span-4 lg:pt-12">
            <div className="relative rotate-2 rounded-4xl border-2 border-neutral-950 bg-neutral-950 p-5 text-white shadow-[14px_14px_0_rgba(37,99,235,0.24)] animate-[stickerFloat_6s_ease-in-out_infinite]">
              <div className="absolute -left-5 top-8 -rotate-12 rounded-full bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-[5px_5px_0_rgba(255,255,255,0.18)]">
                {copy.sticker}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 spray-texture">
                <div className="relative mb-8 aspect-square overflow-hidden rounded-3xl border-2 border-white/70 bg-blue-600">
                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    <span className="font-mono text-[0.6rem] font-black uppercase tracking-[0.28em] text-white/55">
                      The studio
                    </span>
                    <div className="-rotate-2 self-start rounded-2xl border-2 border-neutral-950 bg-white px-4 py-3 text-neutral-950 shadow-[5px_5px_0_rgba(15,23,42,0.22)]">
                      <Logo />
                    </div>
                    <div className="h-[2px] w-14 rounded-full bg-white/30" />
                  </div>
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

      <section className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="mb-5 font-mono text-xs font-black uppercase tracking-[0.28em] text-blue-600">
                Origin story
              </div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-neutral-950 sm:text-5xl lg:text-7xl">
                {t.about.story.title}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-4xl border-2 border-neutral-950 bg-[#f8f5ee] p-6 shadow-[10px_10px_0_#2563eb] sm:p-10">
                <p className="text-xl font-medium leading-relaxed text-neutral-700 sm:text-2xl">
                  {t.about.story.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-950 py-16 text-white sm:py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-4xl sm:mb-16 lg:mb-20">
            <div className="mb-5 font-mono text-xs font-black uppercase tracking-[0.28em] text-blue-400">
              {copy.approachEyebrow}
            </div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
              {t.about.approach.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:bg-white/[0.07] sm:p-8"
              >
                <div className="absolute -right-5 -top-8 font-mono text-8xl font-black tracking-[-0.15em] text-white/[0.035] transition-colors duration-300 group-hover:text-blue-500/20 sm:text-9xl">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="mb-8 inline-flex -rotate-2 bg-blue-600 px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.22em] text-white">
                    Step {step.number}
                  </div>
                  <h3 className="text-3xl font-black leading-none tracking-[-0.05em] text-white sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-lg font-medium leading-relaxed text-neutral-300">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f8f5ee] py-16 spray-texture sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-4xl sm:mb-16">
            <div className="mb-5 font-mono text-xs font-black uppercase tracking-[0.28em] text-blue-600">
              {copy.valuesEyebrow}
            </div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-neutral-950 sm:text-5xl lg:text-7xl">
              {t.about.values.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`group min-h-80 border-2 border-neutral-950 bg-white p-6 shadow-[8px_8px_0_#111827] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0_#2563eb] sm:p-8 ${index === 1 ? "md:translate-y-8" : ""}`}
              >
                <div className="mb-12 grid h-16 w-16 place-items-center rounded-3xl bg-blue-600 text-white shadow-[6px_6px_0_rgba(17,24,39,0.16)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                  <ServiceIcon type={value.type} className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-black leading-none tracking-[-0.05em] text-neutral-950 sm:text-4xl">
                  {value.title}
                </h3>
                <p className="mt-5 text-lg font-medium leading-relaxed text-neutral-700">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-950 py-20 text-white spray-texture sm:py-24 lg:py-32">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 font-mono text-xs font-black uppercase tracking-[0.28em] text-blue-400">
              {copy.finalEyebrow}
            </div>
            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-8xl">
              {t.home.cta.title}
            </h2>
            <p className="mx-auto mb-8 mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-300 sm:text-xl lg:mb-12 lg:text-2xl">
              {t.home.cta.subtitle}
            </p>
            <Button href="/contact">{t.home.cta.button}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
