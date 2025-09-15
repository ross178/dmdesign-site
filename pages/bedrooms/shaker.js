import Nav from "../../components/Nav";

export default function Shaker() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold">Shaker Bedrooms — v2</h1>
        <p className="mt-4 max-w-2xl text-neutral-700">
          Our Shaker bedrooms are built around proportion, balance and craft. Defined by framed doors
          with clean rails and subtle detailing, the Shaker style offers a timeless look that works as
          well in a modern apartment as it does in a traditional home.
        </p>
      </div>
    </div>
  );
}
