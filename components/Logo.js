export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Slide icon - inspired by playground slide */}
      <div className="relative h-8 w-8">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract slide shape */}
          <path
            d="M6 4 L22 4 L28 28 L12 28 Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M8 4 L24 4 L26 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Text */}
      <span className="text-xl font-bold tracking-tight">
        Blue Slide
      </span>
    </div>
  );
}
