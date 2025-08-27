
import React, { useEffect, useRef, useState } from "react";

export default function Carousel({ slides = [], interval = 5000, className = "" }) {
  const [i, setI] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (!slides.length) return;
    timer.current = setInterval(() => setI((p) => (p + 1) % slides.length), interval);
    return () => clearInterval(timer.current);
  }, [slides.length, interval]);

  const go = (n) => setI((n + slides.length) % slides.length);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* slide */}
      <div className="relative h-[48vh] min-h-[360px]">
        {slides.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* arrows */}
      <button
        aria-label="Prev"
        onClick={() => go(i - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={() => go(i + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => go(idx)}
            className={`h-2.5 w-2.5 rounded-full ${idx === i ? "bg-white" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}
