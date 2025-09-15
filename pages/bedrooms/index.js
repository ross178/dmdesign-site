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

export default function BedroomsLanding() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />

      <div className="border-b bg-neutral-50">
        <Section>
          <h1 className="text-3xl sm:text-4xl font-semibold">Bedrooms</h1>
          <p className="mt-4 max-w-2xl text-neutral-700">
            DM Design craft and install bespoke fitted bedrooms designed to last a lifetime.
            From initial design to final installation, our team work across Scotland to deliver
            spaces that maximise storage, function and beauty. Every bedroom is tailored around
            your lifestyle, combining practical solutions with finishes that look exceptional for years to come.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contact"><Button>Book a free home design</Button></a>
            <a href="/projects"><Button variant="outline">View our project case studies</Button></a>
            <a href="/bedrooms/recent" className="underline text-sm ml-2">See recent examples →</a>
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sliding range card */}
          <a
            href="/bedrooms/sliding"
            className="group border rounded-2xl overflow-hidden hover:shadow transition"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="h-52 bg-neutral-100 overflow-hidden">
              <img
                src="/images/bedrooms/sliding/dm-design-sliding-storm-grey-black-frame-2.webp"
                alt="Sliding wardrobes"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition"
              />
            </div>
            <div className="p-4">
              <div className="text-lg font-medium">Sliding</div>
              <div className="text-sm text-neutral-600 mt-1">
                Space-maximising sliding wardrobes tailored to alcoves, eaves and box rooms.
              </div>
              <div className="text-sm mt-3 opacity-70 group-hover:opacity-100">
                Explore →
              </div>
            </div>
          </a>
        </div>
      </Section>
    </div>
  );
}
