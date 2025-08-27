import React from "react"; import { Button } from "../../components/ui/button";
const Section = ({children}) => <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">{children}</section>;
const Nav=()=>(
  <div className="sticky top-0 z-30 backdrop-blur border-b bg-white/80">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
      <a href="/" className="flex items-center gap-3"><img src="/images/logo.png" className="h-9 w-auto" alt="DM Design"/></a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="/kitchens" className="hover:opacity-70">Kitchens</a><a href="/bedrooms" className="hover:opacity-70">Bedrooms</a>
        <a href="/bathrooms" className="hover:opacity-70">Bathrooms</a><a href="/projects" className="hover:opacity-70">Recent Projects</a>
        <a href="/news" className="hover:opacity-70">In The News</a><a href="/contact" className="hover:opacity-70">Contact</a>
      </nav>
      <div className="flex items-center gap-2"><a href="/contact"><Button size="sm">Free Home Design</Button></a></div>
    </div>
  </div>
);
const Footer=()=>(
  <footer className="border-t bg-neutral-50"><Section>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
      <div className="flex items-center gap-3"><img src="/images/logo.png" className="h-7 w-auto" alt="DM Design"/><span className="text-sm text-neutral-600">© {new Date().getFullYear()} DM Design.</span></div>
      <div className="text-sm text-neutral-700"><div>sales@DMdesign.uk</div><div>0131 344 0936</div><div>Designed & crafted in Scotland</div></div>
      <div className="flex items-center sm:justify-end gap-4 text-sm"><a href="#" className="hover:opacity-70">Facebook</a><a href="#" className="hover:opacity-70">Instagram</a><a href="#" className="hover:opacity-70">X</a></div>
    </div></Section>
  </footer>
);
export default function Projects(){return(
  <div className="min-h-screen bg-white text-neutral-900">
    <Nav/>
    <Section>
      <h1 className="text-3xl sm:text-4xl font-semibold">Recent Projects</h1>
      <p className="mt-3 text-neutral-600">Featured installs and testimonials. Content coming soon.</p>
    </Section>
    <Footer/>
  </div>
);}

