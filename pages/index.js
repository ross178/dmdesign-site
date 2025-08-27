import React, { useEffect, useMemo, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Ruler, Hammer, CalendarCheck, ChevronLeft } from "lucide-react";

// Router
// SSR-safe hash router helpers
const useHash = () => {
  const subscribe = (cb) => {
    if (typeof window === "undefined") return () => {};
    window.addEventListener("hashchange", cb);
    return () => window.removeEventListener("hashchange", cb);
  };
  const get = () =>
    typeof window === "undefined"
      ? ""
      : window.location.hash.replace(/^#\/?/, "");
  return useSyncExternalStore(subscribe, get, get);
};

const navigate = (path) => {
  if (typeof window === "undefined") return;
  window.location.hash = "/" + path.replace(/^\/?/, "");
};



// CTA
const BookCTA = ({ className = "" }) => (
  <a href="#/contact" className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl border shadow-sm hover:shadow transition ${className}`}>
    <CalendarCheck className="h-4 w-4"/>
    <span>Book a Free Home Design</span>
  </a>
);
const StickyBookBar = () => (
  <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
    <BookCTA className="bg-black text-white border-black" />
  </div>
);
const InlineCTA = () => (
  <div className="mt-8">
    <BookCTA className="bg-neutral-900 text-white border-neutral-900" />
  </div>
);

// Layout
const Section = ({ id, children }) => (
  <section id={id} className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">{children}</section>
);
function Nav() {
  return (
    <div className="sticky top-0 z-30 backdrop-blur border-b bg-white/70">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-3 cursor-pointer" onClick={()=>navigate("")}>
          <img src="/images/logo.png" alt="DM Design" className="h-9 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a onClick={()=>navigate("kitchens")} className="hover:opacity-70 cursor-pointer">Kitchens</a>
          <a onClick={()=>navigate("bedrooms")} className="hover:opacity-70 cursor-pointer">Bedrooms</a>
          <a onClick={()=>navigate("bathrooms")} className="hover:opacity-70 cursor-pointer">Bathrooms</a>
          <a onClick={()=>navigate("contact")} className="hover:opacity-70 cursor-pointer">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a onClick={()=>navigate("contact")}><Button size="sm">Free Home Design</Button></a>
        </div>
      </div>
    </div>
  );
}

// Pages
function Home() {
  useEffect(()=>{ document.title = "DM Design — Bespoke Interiors"; },[]);
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white border-b">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Bespoke Kitchens, Bedrooms & Bathrooms
            </h1>
            <p className="mt-4 text-neutral-600 max-w-prose">
              Designed, built, and installed properly. Clean lines, premium finishes, no nonsense.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a onClick={()=>navigate("contact")}><Button>Book Free Home Design <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
              <a onClick={()=>navigate("kitchens")}><Button variant="outline">View Kitchens</Button></a>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <li className="flex items-center gap-2"><Ruler className="h-4 w-4"/> Made to Measure</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Premium Finishes</li>
              <li className="flex items-center gap-2"><Hammer className="h-4 w-4"/> Design & Install</li>
            </ul>
            <InlineCTA />
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-xl p-6 border w-full max-w-md flex items-center justify-center">
              <img src="/images/logo.png" alt="DM Design — Logo & Tagline" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function KitchensIndex() {
  const styles = [
    { slug: "cambridge", title: "Cambridge", desc: "Solid timber, painted. Timeless shaker with modern features." },
    { slug: "handleless", title: "Handleless", desc: "Sleek, modern, minimalist." },
    { slug: "slab", title: "Slab", desc: "Clean lines, versatile finishes." },
    { slug: "in-frame", title: "In-Frame", desc: "Craft, proportion, durability." },
  ];
  return (
    <div>
      <div className="border-b bg-neutral-50">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold">Kitchens</h1>
              <p className="mt-3 text-neutral-600">Explore our ranges. Click a range to see variations in different layouts and colours.</p>
              <InlineCTA />
            </div>
            <div className="rounded-2xl border bg-white shadow-sm h-64 lg:h-72 overflow-hidden">
              <img src="/images/kitchens-hero.jpg" alt="Kitchens Hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </Section>
      </div>
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map(s => (
            <Card key={s.slug} className="rounded-2xl shadow-sm overflow-hidden cursor-pointer" onClick={()=>navigate(`kitchens/${s.slug}`)}>
              <CardContent className="p-0">
                <div className="h-40 w-full bg-neutral-200 overflow-hidden">
                  <img src={s.slug === "cambridge" ? "/images/cambridge/Cambridge-fjord.jpg" : "/images/kitchens-hero.jpg"} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-medium">{s.title}</div>
                  <div className="text-sm text-neutral-600 mt-1">{s.desc}</div>
                  <div className="mt-4">
                    <BookCTA className="text-sm px-4 py-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <InlineCTA />
      </Section>
    </div>
  );
}

function BackBar({ label }) {
  return (
    <div className="border-b bg-white">
      <Section>
        <button onClick={()=>navigate("kitchens")} className="inline-flex items-center gap-2 text-sm hover:opacity-70">
          <ChevronLeft className="h-4 w-4"/> Back to Kitchens
        </button>
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold">{label}</h1>
      </Section>
    </div>
  );
}

function CambridgePage() {
  const intro = "Our Cambridge shaker range of solid timber painted doors and panels are a timeless classic. Traditional style with all the modern features you can expect from DM Design!";
  const gallery = ["/images/cambridge/Cambridge-fjord.jpg", "/images/cambridge/Cambridge-new-2.jpg", "/images/cambridge/Cambridge_Brown-Grey.jpg", "/images/cambridge/Cambridge_Brown-Grey-2.jpg", "/images/cambridge/Cambridge_Cashmere_Main.jpg", "/images/cambridge/Cambridge_Chalkstone_Cameo-B.jpg", "/images/cambridge/Cambridge_Chalkstone_Main.jpg", "/images/cambridge/Cambridge_Cream_Main.jpg", "/images/cambridge/Cambridge_Ivory_Stone-Grey_Cameo-A.jpg", "/images/cambridge/Cambridge_Lava_Main.jpg"];
  return (
    <div>
      <BackBar label="Cambridge" />
      <Section>
        <p className="text-neutral-600 max-w-prose">{intro}</p>
        <div className="mt-6 h-64 rounded-2xl border overflow-hidden bg-neutral-200">
          <img src={gallery.length ? gallery[0] : "/images/kitchens-hero.jpg"} alt="Cambridge Hero" className="w-full h-full object-cover" />
        </div>
        <InlineCTA />
        <h2 className="mt-10 text-xl font-semibold">Gallery</h2>
        <p className="text-sm text-neutral-600">Multiple layouts and colours in the Cambridge range.</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="h-40 rounded-xl overflow-hidden bg-neutral-200">
              <img src={src} alt={`Cambridge ${i+1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <InlineCTA />
      </Section>
    </div>
  );
}

function Bedrooms() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold">Bedrooms</h1>
      <p className="mt-2 text-neutral-600">Sliding wardrobes and built-in storage (placeholder for now).</p>
      <InlineCTA />
    </Section>
  );
}
function Bathrooms() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold">Bathrooms</h1>
      <p className="mt-2 text-neutral-600">Vanity units and fitted bathrooms (placeholder for now).</p>
      <InlineCTA />
    </Section>
  );
}
function Contact() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Book Your Free Home Design</h2>
          <p className="mt-2 text-neutral-600">Tell us what you need. We'll confirm an appointment and bring samples.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> 0141 000 0000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@dmdesign.co.uk</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Glasgow & Central Scotland</li>
          </ul>
        </div>
        <div className="bg-white border rounded-2xl shadow-sm p-6">
          <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks — we'll be in touch to schedule your free home design.");}} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input required className="w-full border rounded-xl px-3 py-2" placeholder="Your name" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" required className="w-full border rounded-xl px-3 py-2" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input className="w-full border rounded-xl px-3 py-2" placeholder="Optional" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Project Type</label>
              <select className="w-full border rounded-xl px-3 py-2">
                <option>Kitchen</option>
                <option>Bedroom / Sliding Wardrobe</option>
                <option>Bathroom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea className="w-full border rounded-xl px-3 py-2" rows={4} placeholder="Tell us about your space" />
            </div>
            <Button type="submit" className="w-full">Request Appointment</Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
function Footer() {
  return (
    <footer className="border-t bg-neutral-50">
      <Section>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="DM Design" className="h-7 w-auto" />
            <span>© {new Date().getFullYear()} DM Design. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a className="hover:opacity-70" onClick={()=>navigate("privacy")}>Privacy</a>
            <a className="hover:opacity-70" onClick={()=>navigate("terms")}>Terms</a>
          </div>
        </div>
      </Section>
    </footer>
  );
}

// Router
function Router() {
  const hash = useHash();
  const path = hash.split("?")[0];
  useEffect(()=>{ window.scrollTo(0,0); }, [path]);

  if (path.startsWith("kitchens/")) {
    const style = path.replace("kitchens/", "");
    if (style === "cambridge") return <CambridgePage />;
  }

  switch (path) {
    case "kitchens": return <KitchensIndex/>;
    case "bedrooms": return <Bedrooms/>;
    case "bathrooms": return <Bathrooms/>;
    case "contact": return <Contact/>;
    default: return <Home/>;
  }
}
export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />
      <Router />
      <Footer />
      <StickyBookBar />
    </div>
  );
}
