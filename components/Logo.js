export default function Logo({ className = "" }) {
  return (
    <div
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Blue Slide Studio"
    >
      <span className="h-3 w-3 shrink-0 rounded-full bg-blue-600 shadow-[3px_3px_0_currentColor] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
      <span className="leading-none">
        <span className="block text-[1.3rem] font-black uppercase tracking-[-0.08em] [text-shadow:2px_2px_0_rgba(37,99,235,0.24)] sm:text-[1.5rem]">
          Blue{" "}
          <span className="relative inline-block text-blue-600 [text-shadow:2px_2px_0_rgba(15,23,42,0.22)]">
            <span className="relative z-10">Slide</span>
            <span className="absolute inset-x-0 bottom-0 z-0 h-2 -rotate-1 bg-blue-600/18" />
          </span>
        </span>
        <span className="block font-mono text-[0.48rem] font-black uppercase tracking-[0.5em] text-current/45">
          Studio
        </span>
      </span>
    </div>
  );
}
