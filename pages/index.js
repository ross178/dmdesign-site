import React from "react";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Carousel with your 5 images */}
      <Carousel
        slides={[
          "/images/home/cambridge-fir-green.jpg",
          "/images/home/cambridge-indigo.jpg",
          "/images/home/kitchens-hero.jpg",
          "/images/home/newmarket-d.jpg",
          "/images/home/sage-island.jpg",
        ]}
      />

      {/* Test image just to confirm images are working */}
      <img src="/images/home/cambridge-fir-green.jpg" alt="sanity-check" />
    </div>
  );
}
