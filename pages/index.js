import React from "react";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import { Button } from "../components/ui/button";

function Section({ children }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {children}
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-neutral-50">
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="DM Design" className="h-7 w-auto" />
            <span className="text-sm text-neutral-600">
              © {new Date().getFullYear()} DM Design. All rights reserved.
            </span>
          </div>
          <div className="text-sm text-neutral-600">
            <div>0131 344 0936</div>
            <div>Designed &amp; crafted in Scotland</div>
          </div>
          <div className="flex items-center sm:justify-end gap-4 text-sm">
            <a href="#" className="hover:opacity-70">Facebook</a>
            <a href="#" className="hover:opacity-70">Instagram</a>
            <a href="#" className="hover:opacity-70">X</a>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />

      {/* HERO CAROUSEL */}
      <Carousel
        className="border-b"
        slides={[
          "/public/images/cambridge-fir-green.jpg",
          "/public/images/cambridge-indigo.jpg",
          "/public/images/kitchens-hero.jpg",
          "/public/images/newmarket-d.jpg",
          "/public/images/sage-island.jpg",
        ]}
      />

      {/* INTRO + CTAs */}
      <Section>
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Bespoke Kitchens, Bedrooms &amp; Bathrooms
        </h1>
        <p className="mt-4 text-neutral-700 max-w-2xl">
          Made-to-measure design and installation for real homes and everyday living — 
          blending timeless craftsmanship with modern innovation.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="/contact"><Button>Book your free design consultation</Button></a>
          <a href="/kitchens"><Button variant="outline">Explore Kitchens</Button></a>
        </div>
      </Section>

      {/* PROJECT OF THE MONTH */}
      <Section>
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Project of the Month</h2>
          <a href="/projects" className="text-sm hover:opacity-70">View all projects →</a>
        </div>

        <a
          href="/projects/dianes-dream-kitchen"
          className="block mt-6 rounded-2xl border overflow-hidden hover:shadow"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="h-56 bg-neutral-100 overflow-hidden">
            <img
              src="/images/kitchens-hero.jpg"
              alt="Diane’s Dream Kitchen and Living Space"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="font-medium">Diane’s Dream Kitchen and Living Space</div>
            <div className="text-sm text-neutral-600">
              Porcelain-painted shaker, white mottled quartz, antique bronze detailing, Jurassic limestone.
            </div>
          </div>
        </a>
      </Section>

      <Footer />
    </div>
  );
}
