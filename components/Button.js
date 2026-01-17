import Link from "next/link";

export default function Button({ href, children, variant = "primary", onClick, type = "button" }) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold transition-all duration-300 hover:scale-105 sm:gap-3 sm:px-8 sm:py-4 sm:text-lg lg:px-10";

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-blue-600",
    secondary:
      "border-2 border-neutral-900 text-neutral-900 bg-white hover:bg-neutral-900 hover:text-white",
  };

  const content = (
    <>
      <span>{children}</span>
      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">→</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]}`}
    >
      {content}
    </button>
  );
}
