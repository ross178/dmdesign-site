import Nav from "../../components/Nav";
import { Button } from "../../components/ui/button";

function Section({ children }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {children}
    </section>
  );
}

const IMG = {
  hero: "/images/bedrooms/shaker/dm-design-navy-shaker-taupe-room.webp",
  detail1: "/images/bedrooms/shaker/dm-design-cashmere-wardrobe.webp",
  detail2: "/images/bedrooms/shaker/dm-design-shaker-narrow-corner-wardrobes-cashmere.webp",
  install: "/images/bedrooms/shaker/dm-design-fitted-wardrobe-porcelain-shaker.webp",
};

function Picture({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover rounded-xl border ${className}`}
      loading="lazy"
    />
  );
}

export default function Shaker() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />

      <div className="border-b bg-neutral-50">
        <Section>
          <h1 className="text-3xl sm:text-4xl font-semibold">Shaker Bedrooms</h1>
          <p className="mt-4 max-w-2xl text-neutral-700">
            Our Shaker bedrooms are built around proportion, balance and craft. Defined by framed doors
            with clean rails and subtle detailing, the Shaker style offers a timeless look that works as
            well in a modern apartment as it does in a traditional home.
          </p>
          <p className="mt-3 max-w-2xl text-neutral-700">
            A Shaker wardrobe is more than a design choice — it’s a way to bring order and calm into your
            bedroom. The framed doors and painted finishes carry a sense of tradition, while the internals
            are fully modern: soft-close runners, LED lighting and layouts customised to your storage needs.
            The result is a bedroom that feels calm, elegant and built to last.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contact"><Button>Book a free home design</Button></a>
            <a href="/bedrooms/recent"><Button variant="outline">See recent examples</Button></a>
          </div>
        </Section>
      </div>

      <div className="w-full h-[44vh] min-h-[320px] bg-neutral-100 overflow-hidden border-b">
        <Picture src={IMG.hero} alt="Shaker bedroom hero" className="w-full h-full object-cover rounded-none border-0" />
      </div>

      <Section>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl font-semibold">Timeless outside, modern inside</h2>
            <p className="mt-3 text-neutral-700">
              We build Shaker fronts with reliable paint systems and balanced rails, then pair them with
              robust carcasses and hardware that stand up to daily use. Internals are planned around how you
              actually live: long hanging for dresses and coats, split rails for shirts and trousers, deep
              drawers for knitwear, and divisions that stop piles toppling.
            </p>
          </div>
          <div>
            <Picture src={IMG.detail1} alt="Cashmere Shaker wardrobe detail" className="h-72" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="order-2 lg:order-1">
            <Picture src={IMG.detail2} alt="Narrow corner Shaker wardrobes" className="h-72" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-xl font-semibold">Smart use of awkward spaces</h2>
            <p className="mt-3 text-neutral-700">
              Corners, alcoves and eaves are where Shaker really shines. We proportion rails and stiles to
              keep the look balanced while squeezing every usable inch from the room. Door swing, access and
              lighting are planned first; the joinery follows.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold">Finish palette and hardware</h2>
            <p className="mt-3 text-neutral-700">
              Popular colours include cashmere, porcelain and deep navy, with handles in antique brass, satin
              nickel or matte black. We’ll help you pick combinations that feel right in daylight and at night,
              and specify lighting that doesn’t wash out the colour.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/contact"><Button>Book a free home design</Button></a>
              <a href="/bedrooms"><Button variant="outline">Back to Bedrooms</Button></a>
            </div>
          </div>
          <div>
            <Picture src={IMG.install} alt="Installed porcelain Shaker wardrobe" className="h-72" />
          </div>
        </div>
      </Section>
    </div>
  );
}
