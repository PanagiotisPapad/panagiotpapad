import Image from "next/image";

function AntoniadouMark({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      fill="none"
      strokeWidth="1.3"
      strokeLinecap="round"
      className={className}
    >
      <path d="M16.64 7.44A13 13 0 0 0 16.64 32.56" stroke="currentColor" />
      <path d="M23.36 7.44A13 13 0 0 1 23.36 32.56" stroke="#c5d4b8" />
    </svg>
  );
}

function CornerMark({ banner }) {
  if (banner.mark) {
    return <AntoniadouMark className="size-10 shrink-0" />;
  }

  if (banner.wordmark) {
    return (
      <span
        aria-hidden="true"
        className="shrink-0 font-[family-name:var(--font-syne),sans-serif] text-[1.35rem] font-extrabold leading-none tracking-tight text-[#00b341]"
      >
        nodifit
        <span className="font-normal text-white/25">.</span>
      </span>
    );
  }

  return (
    <span className="inline-flex h-11 max-w-[12rem] shrink-0 items-center rounded-md bg-[#f4f1ea] px-2">
      <Image
        src={banner.logo}
        alt=""
        width={180}
        height={56}
        unoptimized={banner.logo.endsWith(".svg")}
        className={`${banner.logoClass || "h-7"} w-auto max-w-[10.5rem] object-contain`}
      />
    </span>
  );
}

const banners = {
  "https://antoniadoualex.gr/": {
    panel: "bg-[#3e4938] text-[#f3efe6]",
    domain: "text-[#f3efe6]/55",
    kicker: "text-[#d5decc]",
    site: "antoniadoualex.gr",
    label: "Ψυχολόγος ΑΠΘ",
    lines: ["Αλεξάνδρα", "Αντωνιάδου"],
    serif: true,
    mark: true,
  },
  "https://beetlepestcontrol.gr/": {
    panel: "bg-[#153f33] text-[#f3f7f4]",
    domain: "text-[#f3f7f4]/55",
    kicker: "text-[#8bea7d]",
    site: "beetlepestcontrol.gr",
    label: "Pest control",
    lines: ["Beetle"],
    logo: "/projects/beetle-logo.svg",
  },
  "https://vasdiaris.com/": {
    panel: "bg-[#1c242b] text-[#f4f1ea]",
    domain: "text-[#f4f1ea]/55",
    kicker: "text-[#c5ced6]",
    site: "vasdiaris.com",
    label: "Estd. 1952",
    lines: ["Βασδιάρης"],
    logo: "/projects/vasdiaris-logo.png",
    logoClass: "h-9",
  },
  "https://zookal.gr/": {
    panel: "bg-[#1a56a0] text-[#f4f7fb]",
    domain: "text-[#f4f7fb]/55",
    kicker: "text-[#d6e6f5]",
    site: "zookal.gr",
    label: "Ζωοτροφές",
    lines: ["Zookal"],
    logo: "/projects/zookal-logo.png",
  },
  "https://nodifit.com/": {
    panel: "bg-[#071820] text-[#ecfeff]",
    domain: "text-[#ecfeff]/55",
    kicker: "text-[#8fd9a8]",
    site: "nodifit.com",
    label: "Fitness platform",
    lines: ["Nodifit"],
    linesClass: "text-[#00b341]",
    wordmark: true,
  },
};

export default function ProjectBanner({ href, size = "feature" }) {
  const banner = banners[href];
  const typeClass = banner.serif
    ? "font-[family-name:var(--font-garamond),Georgia,serif] font-normal tracking-[-0.03em]"
    : "font-black tracking-[-0.07em]";
  const sizeClass =
    size === "card"
      ? "text-5xl leading-[0.9] sm:text-6xl"
      : "text-5xl leading-[0.9] sm:text-6xl lg:text-7xl";

  return (
    <div
      className={`relative flex min-h-72 flex-col justify-between p-8 sm:p-10 ${
        size === "feature" ? "h-full lg:p-12" : "shrink-0"
      } ${banner.panel}`}
    >
      <div className="flex items-center justify-between gap-4">
        <CornerMark banner={banner} />
        <span
          className={`font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] ${banner.domain}`}
        >
          {banner.site}
        </span>
      </div>
      <div className={size === "card" ? "mt-12" : "mt-16"}>
        <p className={`${typeClass} ${sizeClass} ${banner.linesClass || ""}`}>
          {banner.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p
          className={`mt-5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] ${banner.kicker}`}
        >
          {banner.label}
        </p>
      </div>
    </div>
  );
}
