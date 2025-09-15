// pages/index.js
import React from "react";
import Carousel from "../components/Carousel";
import { Button } from "../components/ui/button";

function Section({ children }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {children}
    </section>
  );
}

function Nav() {
  return (
    <div className="sticky top-0 z-30 backdrop-blur border-b bg-white/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="DM Design" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/kitchens" className="hover:opacity-70">Kitchens</a>
          <a href="/bedrooms" className="hover:opacity-70">Bedrooms</a>
          <a href="/bathrooms" className="hover:opacity-70">Bathrooms</a>
          <a href="/projects" className="hover:opacity-70">Recent Projects</a>
          <a href="/news" className="hover:opacity-70">In The News</a>
          <a href="/contact" className="hover:opacity-70">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="/contact"><Button size="sm">Free Home Design</Button></a>
        </div>
      </div>
    </div>
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
          <div className="text-sm text-neutral-700">
            <div>sales@DMdesign.uk</div>
            <div>0131 344 0936</div>
            <div>Designed & crafted in Scotland</div>
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
          "/images/home/cambridge-fir-green.jpg",
          "/images/home/cambridge-indigo.jpg",
          "/images/home/kitchens-hero.jpg",
          "/images/home/newmarket-d.jpg",
          "/images/home/sage-island.jpg",
        ]}
      />

      {/* INTRO */}
      <Section>
        <h1 className="text-3xl sm:text-4xl font-semibold">Kitchens, Bedrooms & Bathrooms.</h1>
        <p className="mt-4 text-neutral-700 max-w-3xl">
          <strong>Crafted Living. Effortless Style.</strong> At DM Design, we craft personalised spaces that elevate
          everyday living — blending timeless craftsmanship with modern innovation.
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
              src="/images/projects/diane/diane-hero-kitchen-overview.jpg"
              alt="Diane’s Dream Kitchen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="font-medium">Diane’s Dream Kitchen</div>
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

  );
}

