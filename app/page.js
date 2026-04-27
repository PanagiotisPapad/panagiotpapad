"use client";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { t, language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copy =
    language === "el"
      ? {
          kicker: "Digital studio",
          heroNote:
            "Στρατηγική, design, websites και growth για επιχειρήσεις που θέλουν να δείχνουν σοβαρές χωρίς να μοιάζουν ίδιες με όλους.",
          secondaryCta: "Δες υπηρεσίες",
          trusted: "Custom αισθητική. Καθαρή υλοποίηση. Μετρήσιμο growth.",
          slideLabel: "The Blue Slide",
          slideCaption: (
            <>
              Για όσους δεν κάνουν{" "}
              <span className="inline-block -rotate-2 bg-blue-600 px-1.5 py-0.5 text-white shadow-[3px_3px_0_#111827]">
                blend in
              </span>
              .
            </>
          ),
          sticker: "Disrupting the pattern",
          proofTitle: "Street energy, business discipline",
          proofText:
            "Παίρνουμε την ενέργεια από murals, stickers και mixtape culture, αλλά την κρατάμε καθαρή, γρήγορη και αξιόπιστη για πραγματικές επιχειρήσεις.",
          servicesEyebrow: "What we build",
          workEyebrow: "Studio method",
          trustEyebrow: "Why it works",
          finalEyebrow: "Blue Slide Studio",
        }
      : {
          kicker: "Digital studio",
          heroNote:
            "Strategy, design, websites, and growth for businesses that need to look serious without looking like everyone else.",
          secondaryCta: "Explore services",
          trusted: "Custom aesthetic. Clean execution. Measurable growth.",
          slideLabel: "The Blue Slide",
          slideCaption: (
            <>
              For the ones who don&apos;t{" "}
              <span className="inline-block -rotate-2 bg-blue-600 px-1.5 py-0.5 text-white shadow-[3px_3px_0_#111827]">
                blend in
              </span>
              .
            </>
          ),
          sticker: "Disrupting the pattern",
          proofTitle: "Street energy, business discipline",
          proofText:
            "We borrow the energy of murals, stickers, and mixtape culture, then keep the experience clean, fast, and trustworthy for real businesses.",
          servicesEyebrow: "What we build",
          workEyebrow: "Studio method",
          trustEyebrow: "Why it works",
          finalEyebrow: "Blue Slide Studio",
        };

  const proofPoints = [
    {
      number: "01",
      title: t.home.value.card1Title,
      text: t.home.value.card1Text,
    },
    {
      number: "02",
      title: t.home.value.card2Title,
      text: t.home.value.card2Text,
    },
    {
      number: "03",
      title: t.home.value.card3Title,
      text: t.home.value.card3Text,
    },
  ];

  const services = [
    {
      tag: "Strategy",
      title: t.home.services.service1,
      text: t.home.services.service1Text,
    },
    {
      tag: "Build",
      title: t.home.services.service2,
      text: t.home.services.service2Text,
    },
    {
      tag: "Growth",
      title: t.home.services.service3,
      text: t.home.services.service3Text,
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ee] text-neutral-950">
      <section className="relative isolate min-h-[calc(100vh-96px)] overflow-hidden bg-[#f8f5ee] spray-texture">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.88),rgba(248,245,238,0.78)_44%,rgba(37,99,235,0.16))]" />
        <div
          className="absolute -right-28 top-24 -z-10 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl animate-[sprayDrift_9s_ease-in-out_infinite] sm:h-96 sm:w-96"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div className="absolute left-4 top-28 -z-10 hidden h-40 w-40 rotate-12 rounded-full border-18 border-neutral-950/5 sm:block" />
        <div className="absolute bottom-16 right-8 -z-10 hidden text-[12rem] font-black uppercase leading-none tracking-[-0.12em] text-neutral-950/[0.035] sm:block lg:text-[18rem]">
          SLIDE
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:grid-cols-12 lg:px-8 lg:pb-36 lg:pt-44">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex rotate-[-1.5deg] items-center gap-3 rounded-full border-2 border-neutral-950 bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] shadow-[5px_5px_0_#111827] opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              {copy.kicker}
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.86] tracking-[-0.08em] text-neutral-950 opacity-0 tag-shadow animate-[fadeIn_0.8s_ease-out_0.05s_forwards] sm:text-7xl lg:text-[8.8rem]">
              <span>{t.home.hero.title}</span>
              <span className="marker-highlight ml-2 text-blue-600">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-700 opacity-0 animate-[fadeIn_0.8s_ease-out_0.14s_forwards] sm:text-xl lg:text-2xl">
              {copy.heroNote}
            </p>

            <div className="mt-10 flex flex-col gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_0.22s_forwards] sm:flex-row sm:items-center">
              <Button href="/contact">{t.home.hero.ctaPrimary}</Button>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 border-2 border-neutral-950 bg-white px-6 py-3 text-base font-black text-neutral-950 shadow-[6px_6px_0_#2563eb] transition-all duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_0_#2563eb] sm:px-8 sm:py-4 sm:text-lg"
              >
                <span>{copy.secondaryCta}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <p className="mt-8 max-w-xl font-mono text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
              {copy.trusted}
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-10">
            <div className="relative mx-auto max-w-md rotate-2 rounded-4xl border-2 border-neutral-950 bg-neutral-950 p-4 shadow-[16px_16px_0_rgba(37,99,235,0.24)] animate-[stickerFloat_6s_ease-in-out_infinite]">
              <div className="rounded-3xl bg-[#f8f5ee] p-5 spray-texture">
                <div className="mb-4 flex items-center justify-between font-mono text-xs font-black uppercase tracking-[0.2em] text-neutral-500">
                  <span>{copy.slideLabel}</span>
                  <span>412</span>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-neutral-950 bg-blue-600">
                  <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-8">
                    <span className="font-mono text-[0.6rem] font-black uppercase tracking-[0.28em] text-white/55">
                      Strategy · Design · Growth
                    </span>
                    <div>
                      <div className="text-[5rem] font-black leading-none tracking-[-0.14em] text-white sm:text-[6rem]">
                        412
                      </div>
                      <div className="mt-2 font-mono text-[0.6rem] font-black uppercase tracking-[0.24em] text-white/60">
                        Blue Slide Park
                      </div>
                    </div>
                    <div className="h-[2px] w-14 rounded-full bg-white/30" />
                  </div>
                </div>
                <p className="mt-5 text-lg font-bold leading-snug text-neutral-950">
                  {copy.slideCaption}
                </p>
              </div>
              <div className="absolute -left-6 top-10 rotate-[-10deg] rounded-full bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.18em] text-blue-600 shadow-[6px_6px_0_rgba(255,255,255,0.35)]">
                {copy.sticker}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-950 py-16 text-white sm:py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="mb-5 font-mono text-xs font-black uppercase tracking-[0.28em] text-blue-400">
                {copy.trustEyebrow}
              </div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                {copy.proofTitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-300 sm:text-xl">
                {copy.proofText}
              </p>
            </div>

            <div className="grid gap-4 lg:col-span-7">
              {proofPoints.map((point, index) => (
                <div
                  key={point.number}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:bg-white/[0.07] sm:p-8"
                >
                  <div className="absolute -right-5 -top-8 font-mono text-8xl font-black tracking-[-0.15em] text-white/[0.035] transition-colors duration-300 group-hover:text-blue-500/20 sm:text-9xl">
                    {point.number}
                  </div>
                  <div className="relative">
                    <div className="mb-4 inline-flex rounded-full bg-blue-500 px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.2em] text-white">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                      {point.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f8f5ee] py-16 sm:py-24 lg:py-32">
        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-4xl sm:mb-16 lg:mb-20">
            <div className="mb-5 font-mono text-xs font-black uppercase tracking-[0.28em] text-blue-600">
              {copy.servicesEyebrow}
            </div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-7xl">
              {t.home.services.title}
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-700 sm:text-xl lg:text-2xl">
              {t.home.services.subtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative min-h-80 overflow-hidden border-2 border-neutral-950 bg-white p-6 shadow-[8px_8px_0_#111827] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0_#2563eb] sm:p-8 ${index === 1 ? "md:translate-y-8" : ""}`}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-600/10 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-12 inline-flex -rotate-2 bg-blue-600 px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.22em] text-white">
                    {service.tag}
                  </div>
                  <h3 className="text-3xl font-black leading-none tracking-[-0.05em] text-neutral-950 sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base font-medium leading-relaxed text-neutral-600 sm:text-lg">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-28">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-xl font-black text-neutral-950 transition-all duration-300 hover:gap-5 hover:text-blue-600 sm:text-2xl"
            >
              <span>{t.home.services.cta}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-4xl sm:mb-16 lg:mb-20">
            <div className="mb-5 font-mono text-xs font-black uppercase tracking-[0.28em] text-blue-600">
              {copy.workEyebrow}
            </div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-7xl">
              {t.home.work.title}
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-700 sm:text-xl">
              {t.home.work.subtitle}
            </p>
          </div>

          <Link
            href="/work"
            className="group grid grid-cols-1 overflow-hidden border-2 border-neutral-950 bg-[#f8f5ee] shadow-[10px_10px_0_#111827] transition-all duration-300 hover:-translate-y-2 hover:shadow-[16px_16px_0_#2563eb] lg:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
              <div className="mb-6 inline-flex w-fit -rotate-2 bg-neutral-950 px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.22em] text-white">
                Featured Project
              </div>
              <h3 className="text-4xl font-black leading-none tracking-[-0.06em] text-neutral-950 transition-colors duration-300 group-hover:text-blue-600 sm:text-5xl">
                {t.home.work.projectTitle}
              </h3>
              <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-700 sm:text-xl">
                {t.home.work.projectText}
              </p>
              <div className="mt-8 inline-flex items-center gap-3 text-lg font-black text-neutral-950 transition-all duration-300 group-hover:gap-5 sm:text-xl">
                <span>{t.home.work.caseStudy}</span>
              </div>
            </div>

            <div className="relative min-h-96 overflow-hidden bg-neutral-950 p-6 spray-texture sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(37,99,235,0.5),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative flex h-full min-h-80 items-center justify-center">
                <div className="relative h-64 w-64 rounded-4xl border-2 border-white/80 bg-blue-600 shadow-[16px_16px_0_rgba(255,255,255,0.12)] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 sm:h-80 sm:w-80">
                  <div className="absolute inset-5 rounded-3xl border border-white/30" />
                  <div className="absolute left-12 top-14 h-28 w-6 rounded-full bg-white" />
                  <div className="absolute left-12 top-14 h-6 w-32 rounded-full bg-white" />
                  <div className="absolute left-20 top-24 h-36 w-24 origin-top-left rotate-20 rounded-full border-14 border-white border-l-transparent border-t-transparent" />
                  <div className="absolute bottom-10 left-10 rotate-[-8deg] bg-white px-4 py-2 text-2xl font-black uppercase tracking-[-0.08em] text-neutral-950">
                    BSS
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 text-xl font-black text-neutral-950 transition-all duration-300 hover:gap-5 hover:text-blue-600 sm:text-2xl"
            >
              <span>{t.home.work.cta}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f8f5ee] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-4xl border-2 border-neutral-950 bg-white p-6 shadow-[10px_10px_0_#2563eb] sm:p-10 lg:p-14">
            <blockquote className="text-3xl font-black leading-tight tracking-[-0.05em] text-neutral-950 sm:text-4xl lg:text-6xl">
              &ldquo;{t.home.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8 sm:mt-12">
              <div className="text-lg font-black text-neutral-950 sm:text-xl">
                {t.home.testimonial.author}
              </div>
              <div className="mt-2 font-mono text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                {t.home.testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-950 py-20 text-white spray-texture sm:py-24 lg:py-32">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl text-center">
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
