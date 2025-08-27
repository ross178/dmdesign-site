import React from "react";
import { Button } from "../../components/ui/button";

function Section({ children }) {
  return <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">{children}</section>;
}
function Nav() {
  return (
    <div className="sticky top-0 z-30 backdrop-blur border-b bg-white/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="/" className="flex items-center gap-3"><img src="/images/logo.png" alt="DM Design" className="h-9 w-auto" /></a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/kitchens" className="hover:opacity-70">Kitchens</a>
          <a href="/bedrooms" className="hover:opacity-70">Bedrooms</a>
          <a href="/bathrooms" className="hover:opacity-70">Bathrooms</a>
          <a href="/projects" className="hover:opacity-70">Recent Projects</a>
          <a href="/news" className="hover:opacity-70">In The News</a>
          <a href="/contact" className="hover:opacity-70">Contact</a>
        </nav>
        <div className="flex items-center gap-2"><a href="/contact"><Button size="sm">Free Home Design</Button></a></div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer className="border-t bg-neutral-50">
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3"><img src="/images/logo.png" alt="DM Design" className="h-7 w-auto" /><span className="text-sm text-neutral-600">© {new Date().getFullYear()} DM Design.</span></div>
          <div className="text-sm text-neutral-700"><div>sales@DMdesign.uk</div><div>0131 344 0936</div><div>Designed & crafted in Scotland</div></div>
          <div className="flex items-center sm:justify-end gap-4 text-sm"><a href="#" className="hover:opacity-70">Facebook</a><a href="#" className="hover:opacity-70">Instagram</a><a href="#" className="hover:opacity-70">X</a></div>
        </div>
      </Section>
    </footer>
  );
}
export default function Kitchens() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />
      <div className="border-b bg-neutral-50">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold">Kitchens</h1>
              <p className="mt-3 text-neutral-600">Explore our ranges. Click a range to see variations in layouts and colours.</p>
              <div className="mt-6 flex items-center gap-3">
                <a href="/contact"><Button>Book Free Home Design</Button></a>
                <a href="/kitchens/cambridge"><Button variant="outline">View Cambridge</Button></a>
              </div>
            </div>
            <div className="rounded-2xl border bg-white shadow-sm h-64 lg:h-72 overflow-hidden">
              <img src="/images/home/kitchens-hero.jpg" alt="Kitchens Hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </Section>
      </div>
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="/kitchens/cambridge" className="block rounded-2xl border overflow-hidden hover:shadow">
            <div className="h-40 bg-neutral-200 overflow-hidden">
              <img src="/images/cambridge/Cambridge_Cream_Main.jpg" alt="Cambridge" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="font-medium">Cambridge</div>
              <div className="text-sm text-neutral-600 mt-1">Solid timber, painted. Timeless shaker with modern features.</div>
            </div>
          </a>
          {/* Add more styles here later */}
        </div>
      </Section>
      <Footer />
    </div>
  );
}

