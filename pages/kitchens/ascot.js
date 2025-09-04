// pages/kitchens/ascot.js
export default function AscotRange() {
  return (
    <div style={{ fontFamily: "sans-serif", color: "#111" }}>
      {/* Header */}
      <header style={{ padding: "16px", borderBottom: "1px solid #eee" }}>
        <a href="/" style={{ textDecoration: "none", color: "#111" }}>
          ← Home
        </a>
        <nav style={{ float: "right" }}>
          <a href="/kitchens" style={{ marginLeft: 16 }}>Kitchens</a>
          <a href="/bedrooms" style={{ marginLeft: 16 }}>Bedrooms</a>
          <a href="/bathrooms" style={{ marginLeft: 16 }}>Bathrooms</a>
          <a href="/projects" style={{ marginLeft: 16 }}>Projects</a>
          <a href="/contact" style={{ marginLeft: 16 }}>Contact</a>
        </nav>
      </header>

      {/* Hero image */}
      <section style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ height: 460, overflow: "hidden" }}>
          <img
            src="/images/ascot/ascot-light-grey-dust-grey-kitchen-island-with-bar-stools.jpg"
            alt="Ascot kitchen hero"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Content */}
      <main style={{ maxWidth: 920, margin: "0 auto", padding: "28px 16px 40px" }}>
        <h1 style={{ fontSize: 36, lineHeight: 1.2, margin: "6px 0 10px" }}>
          Ascot – Slim-Frame Shaker
        </h1>
        <p style={{ color: "#666", fontSize: 16, margin: "0 0 18px" }}>
          Ascot pares back the classic shaker with a slim 60&nbsp;mm frame and a
          smooth one-piece face — a contemporary, low-maintenance take on a timeless door.
        </p>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #eee", background: "#fafafa", marginTop: 20 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 16px", fontSize: 14, color: "#555" }}>
          <div>© {new Date().getFullYear()} DM Design</div>
          <div>sales@DMdesign.uk · 0131 344 0936 · Designed &amp; crafted in Scotland</div>
        </div>
      </footer>
    </div>
  );
}
