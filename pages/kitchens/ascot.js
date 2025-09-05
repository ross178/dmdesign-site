import React from "react";
import fs from "fs";
import path from "path";
import { Button } from "../../components/ui/button";

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
          <a href="/contact">
            <Button size="sm">Free Home Design</Button>
          </a>
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
              © {new Date().getFullYear()} DM Design.
            </span>
          </div>
          <div className="text-sm text-neutral-700">
            <div>sales@DMdesign.uk</div>
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

export default function Ascot({ hero, gallery }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />

      {/* Hero */}
      <div className="border-b bg-neutral-50">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold">Ascot</h1>
              <p className="mt-3 text-neutral-700">
                Ascot is a refined take on the shaker kitchen. Its 60&nbsp;mm narrow frame and
                one-piece, solid 18&nbsp;mm MDF door create a clean, contemporary profile. The
                shallow centre panel keeps maintenance simple, while the one-piece construction
                adds durability. Available primed or in our paint-to-order matt finish.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="/contact">
                  <Button>Book Free Home Design</Button>
                </a>
                <a href="/kitchens">
                  <Button variant="outline">Back to Ranges</Button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl border bg-white shadow-sm h-64 lg:h-72 overflow-hidden">
              <img
                src={hero || "/images/home/kitchens-hero.jpg"}
                alt="Ascot Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>
      </div>

      {/* Gallery */}
      <Section>
        <h2 className="text-xl font-semibold">Gallery</h2>
        {gallery.length === 0 ? (
          <div className="mt-4 rounded-2xl border p-6 bg-white">
            <div className="inline-flex items-center text-sm px-3 py-1 rounded-full bg-neutral-100 text-neutral-700">
              No images found
            </div>
            <p className="mt-2 text-neutral-600">
              Put photos in <code>/public/images/ascot/</code>.
            </p>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((src) => (
              <div key={src} className="h-40 rounded-xl overflow-hidden bg-neutral-200">
                <img src={src} alt="Ascot variant" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </Section>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const folder = path.join(process.cwd(), "public", "images", "ascot");

  let files = [];
  try {
    files = fs.readdirSync(folder);
  } catch (e) {
    // folder missing is fine
  }

  const exts = new Set([".jpg",".jpeg",".png",".webp",".avif",".JPG",".JPEG",".PNG",".WEBP",".AVIF"]);
  const sorted = files
    .filter((f) => exts.has(path.extname(f)))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  const urls = sorted.map((f) => `/images/ascot/${encodeURIComponent(f)}`);
  const hero = urls[0] || null;
  const gallery = urls.slice(1); // rest of images

  return { props: { hero, gallery } };
}
