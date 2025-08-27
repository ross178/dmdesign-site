import React from "react";
import { Button } from "../../components/ui/button";

function Section({ children }) { return <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">{children}</section>; }
function Nav() { return (
  <div className="sticky top-0 z-30 backdrop-blur border-b bg-white/80">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
      <a href="/" className="flex items-center gap-3"><img src="/images/logo.png" alt="DM Design" className="h-9 w-auto" /></a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="/kitchens" className="hover:opacity-70">Kitchens</a><a href="/bedrooms" className="hover:opacity-70">Bedrooms</a>
        <a href="/bathrooms" className="hover:opacity-70">Bathrooms</a><a href="/projects" className="hover:opacity-70">Recent Projects</a>
        <a href="/news" className="hover:opacity-70">In The News</a><a href="/contact" className="hover:opacity-70">Contact</a>
      </nav>
      <div className="flex items-center gap-2"><a href="/contact"><Button size="sm">Free Home Design</Button></a></div>
    </div>
  </div>
); }
function Footer() { return (
  <footer className="border-t bg-neutral-50"><Section>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
      <div className="flex items-center gap-3"><img src="/images/logo.png" alt="DM Design" className="h-7 w-auto" /><span className="text-sm text-neutral-600">© {new Date().getFullYear()} DM Design.</span></div>
      <div className="text-sm text-neutral-700"><div>sales@DMdesign.uk</div><div>0131 344 0936</div><div>Designed & crafted in Scotland</div></div>
      <div className="flex items-center sm:justify-end gap-4 text-sm"><a href="#" className="hover:opacity-70">Facebook</a><a href="#" className="hover:opacity-70">Instagram</a><a href="#" className="hover:opacity-70">X</a></div>
    </div></Section>
  </footer>
); }
export default function Cambridge() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />
      <Section>
        <a href="/kitchens" className="text-sm hover:opacity-70">← Back to Kitchens</a>
        <h1 className="mt-4 text-3xl font-semibold">Cambridge</h1>
        <p className="text-neutral-600 max-w-prose mt-2">
          Our Cambridge shaker range of solid timber painted doors and panels are a timeless classic. Traditional style with all the modern features you can expect from DM Design!
        </p>
        <div className="mt-6 h-64 rounded-2xl border overflow-hidden bg-neutral-200">
          <img src="/images/cambridge/Cambridge_Cream_Main.jpg" alt="Cambridge Hero" className="w-full h-full object-cover" />
        </div>
      </Section>
      <Section>
        <h2 className="text-xl font-semibold">Gallery</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "/images/cambridge/Cambridge_Brown-Grey.jpg",
            "/images/cambridge/Cambridge_Brown-Grey-2.jpg",
            "/images/cambridge/Cambridge_Cashmere_Main.jpg",
            "/images/cambridge/Cambridge_Chalkstone_Cameo-B.jpg",
            "/images/cambridge/Cambridge_Chalkstone_Main.jpg",
            "/images/cambridge/Cambridge_Cream_Main.jpg",
            "/images/cambridge/Cambridge_Ivory_Stone-Grey_Cameo-A.jpg",
            "/images/cambridge/Cambridge_Lava_Main.jpg",
            "/images/cambridge/Cambridge-new-2.jpg",
          ].map((src) => (
            <div key={src} className="h-40 rounded-xl overflow-hidden bg-neutral-200">
              <img src={src} alt="Cambridge variant" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
}

