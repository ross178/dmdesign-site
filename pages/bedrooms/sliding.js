import React from "react";
import Nav from "../../components/Nav";
import { Button } from "../../components/ui/button";

function Section({ children }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {children}
    </section>
  );
}

function Bullet({ children }) {
  return (
    <li className="pl-5 relative">
      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-neutral-800"></span>
      {children}
    </li>
  );
}

export default function SlidingRange() {
  // ✅ Hero
  const HERO =
    "/images/bedrooms/sliding/dm-design-sliding-storm-grey-black-frame-2.webp";

  // ✅ Gallery (the other 4 files)
  const gallery = [
    "/images/bedrooms/sliding/dm-design-sliding-cashmere-greysmoked-mirror-black-frame.webp",
    "/images/bedrooms/sliding/dm-design-sliding-pure-white-mirror-satin-nickel-frame.webp",
    "/images/bedrooms/sliding/dm-design-sliding-storm-grey-black-frame.webp",
    "/images/bedrooms/sliding/dm-design-sliding-storm-grey-mirror-black-frame.webp",
  ];

  const bullets = [
    "Steel or aluminium systems; soft-close optional",
    "Panel choices: mirror, glass, woodgrain, painted",
    "Tailored internals: hanging, drawers, shelves, shoe towers",
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />

      {/* Header */}
      <div className="border-b bg-neutral-50">
        <Section>
          <h1 className="text-3xl sm:text-4xl font-semibold">Sliding Wardrobes</h1>
          <p className="mt-4 max-w-2xl text-neutral-700">
            Custom sliding systems to maximise floor-to-ceiling storage. Ideal for awkward
            alcoves, eaves and compact rooms. Built around your layout with durable tracks and
            refined finishes.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contact">
              <Button>Book a free home design</Button>
            </a>
            <a href="/bedrooms/recent">
              <Button variant="outline">See recent examples</Button>
            </a>
          </div>
        </Section>
      </div>

      {/* Hero image */}
      <div className="w-full h-[44vh] min-h-[320px] bg-neutral-100 overflow-hidden border-b">
        <img
          src={HERO}
          alt="Sliding wardrobe – storm grey with black frame"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Features */}
      <Section>
        <h2 className="text-xl font-semibold">Why choose Sliding</h2>
        <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-neutral-700">
          {bullets.map((b, i) => (
            <Bullet key={i}>{b}</Bullet>
          ))}
        </ul>
      </Section>

      {/* Gallery */}
      <Section>
        <h3 className="text-lg font-semibold">Gallery</h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="border rounded-xl overflow-hidden">
              <img
                src={src}
                alt={`Sliding example ${i + 1}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
