"use client";

import { useLanguage } from "@/contexts/LanguageContext";

function LinkedInIcon() {
  return (
    <svg
      className="h-8 w-8"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="h-8 w-8"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="h-8 w-8"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Contact() {
  const { t, language } = useLanguage();

  const copy =
    language === "el"
      ? {
          eyebrow: "Contact",
          intro:
            "Πες μας τι χτίζεις, πού έχει κολλήσει η ψηφιακή σου παρουσία, ή τι θες να βελτιώσεις. Θα απαντήσουμε με καθαρή σκέψη και χωρίς πίεση.",
          emailNote: "Click to send email",
          sticker: "Open line",
          response:
            "No pressure. Just a real conversation about the next move.",
          socialEyebrow: "Find us here too",
        }
      : {
          eyebrow: "Contact",
          intro:
            "Tell us what you are building, where your digital presence feels stuck, or what you want to improve. We will answer with clear thinking and no pressure.",
          emailNote: "Click to send email",
          sticker: "Open line",
          response:
            "No pressure. Just a real conversation about the next move.",
          socialEyebrow: "Find us here too",
        };

  const socials = [
    { href: "https://linkedin.com", label: "LinkedIn", icon: <LinkedInIcon /> },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: <InstagramIcon />,
    },
    { href: "https://facebook.com", label: "Facebook", icon: <FacebookIcon /> },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ee] text-neutral-950">
      <section className="relative isolate overflow-hidden bg-[#f8f5ee] spray-texture">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.9),rgba(248,245,238,0.82)_48%,rgba(37,99,235,0.18))]" />
        <div className="absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl animate-[sprayDrift_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-8 right-4 -z-10 hidden text-[9rem] font-black uppercase leading-none tracking-[-0.12em] text-neutral-950/[0.035] sm:block lg:text-[14rem]">
          TALK
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:grid-cols-12 lg:px-8 lg:pb-36 lg:pt-44">
          <div className="lg:col-span-8">
            <div className="mb-6 inline-flex -rotate-1 rounded-full border-2 border-neutral-950 bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-600 shadow-[5px_5px_0_#111827] opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
              {copy.eyebrow}
            </div>
            <h1 className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.08em] text-neutral-950 tag-shadow opacity-0 animate-[fadeIn_0.8s_ease-out_0.05s_forwards] sm:text-7xl lg:text-[9rem]">
              {t.contact.hero.title}
              <span className="marker-highlight ml-2 text-blue-600">.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-neutral-700 opacity-0 animate-[fadeIn_0.8s_ease-out_0.14s_forwards] sm:text-xl lg:text-2xl">
              {t.contact.hero.subtitle} {copy.intro}
            </p>
          </div>

          <div className="lg:col-span-4 lg:pt-12">
            <div className="relative rotate-2 rounded-4xl border-2 border-neutral-950 bg-neutral-950 p-5 text-white shadow-[14px_14px_0_rgba(37,99,235,0.24)] animate-[stickerFloat_6s_ease-in-out_infinite]">
              <div className="absolute -left-5 top-8 -rotate-12 rounded-full bg-white px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-[5px_5px_0_rgba(255,255,255,0.18)]">
                {copy.sticker}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 spray-texture">
                <div className="mb-8 grid h-20 w-20 place-items-center rounded-3xl bg-blue-600 text-4xl font-black text-white shadow-[8px_8px_0_rgba(255,255,255,0.12)]">
                  @
                </div>
                <h2 className="text-2xl font-black leading-none tracking-[-0.05em]">
                  hello@blueslide.studio
                </h2>
                <p className="mt-5 text-base font-medium leading-relaxed text-neutral-300">
                  {copy.response}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-950 py-16 text-white sm:py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href="mailto:hello@blueslide.studio"
            className="group block rounded-4xl border border-white/10 bg-white/4 p-6 shadow-[10px_10px_0_rgba(37,99,235,0.38)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/70 hover:bg-white/[0.07] sm:p-10 lg:p-14"
          >
            <div className="mb-8 inline-flex -rotate-2 bg-blue-600 px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.22em] text-white">
              Email
            </div>
            <div className="wrap-break-word text-4xl font-black leading-[0.9] tracking-[-0.07em] text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-6xl lg:text-8xl">
              hello@blueslide.studio
            </div>
            <div className="mt-8 inline-flex items-center gap-3 text-lg font-black text-neutral-300 transition-all duration-300 group-hover:gap-5 group-hover:text-white sm:text-xl">
              <span>{copy.emailNote}</span>
              <span>→</span>
            </div>
          </a>
        </div>
      </section>

      <section className="relative bg-[#f8f5ee] py-16 spray-texture sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-4xl sm:mb-16">
            <div className="mb-5 font-mono text-xs font-black uppercase tracking-[0.28em] text-blue-600">
              {copy.socialEyebrow}
            </div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-neutral-950 sm:text-5xl lg:text-7xl">
              {t.contact.info.social}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {socials.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group min-h-72 border-2 border-neutral-950 bg-white p-6 shadow-[8px_8px_0_#111827] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0_#2563eb] sm:p-8 ${index === 1 ? "md:translate-y-8" : ""}`}
              >
                <div className="mb-12 grid h-16 w-16 place-items-center rounded-3xl bg-blue-600 text-white shadow-[6px_6px_0_rgba(17,24,39,0.16)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                  {social.icon}
                </div>
                <h3 className="text-4xl font-black leading-none tracking-[-0.06em] text-neutral-950 transition-colors group-hover:text-blue-600">
                  {social.label}
                </h3>
                <div className="mt-6 inline-flex items-center gap-3 text-lg font-black text-neutral-950 transition-all duration-300 group-hover:gap-5 group-hover:text-blue-600">
                  <span>Open</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
