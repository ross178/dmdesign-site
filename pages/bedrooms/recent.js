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

// ✅ Add your recent filenames here
const RECENT = [
  "dm-design-shaker-alnwick-blue.webp",
  "dm-design-shaker-alnwick-blue-drawers.webp",
];

export default function BedroomsRecentExamples() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />

      <div className="border-b bg-neutral-50">
        <Section>
          <h1 className="text-3xl sm:text-4xl font-semibold">Recent Bedroom Examples</h1>
          <p className="mt-4 max-w-3xl text-neutral-700">
            DM Design craft and install bespoke fitted bedrooms across Scotland. 
            Below is an unfiltered stream of recent work — lots of examples, minimal commentary.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/projects">
              <Button>View our project case studies</Button>
            </a>
            <a href="/bedrooms">
              <Button variant="outline">Back to Bedrooms</Button>
            </a>
          </div>
        </Section>
      </div>

      <Section>
        <div
          className="grid gap-4 sm:gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
        >
          {RECENT.map((name, i) => (
            <div key={i} className="border rounded-xl overflow-hidden">
              <img
                src={`/images/bedrooms/recent/${name}`}
                alt={`Recent bedroom example ${i + 1}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

