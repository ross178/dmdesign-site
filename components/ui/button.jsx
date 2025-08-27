import React from "react";
export function Button({ children, variant="default", size="md", className="", ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition border";
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-5 py-3 text-base" };
  const variants = {
    default: "bg-neutral-900 text-white border-neutral-900 hover:opacity-90",
    outline: "bg-white text-neutral-900 border-neutral-300 hover:bg-neutral-50",
    secondary: "bg-neutral-800 text-white border-neutral-800 hover:opacity-90",
  };
  return (
    <button className={[base, sizes[size] || sizes.md, variants[variant] || variants.default, className].join(" ")} {...props}>
      {children}
    </button>
  );
}
