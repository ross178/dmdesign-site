import React from "react";
import { Button } from "./ui/button";

export default function Nav() {
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
