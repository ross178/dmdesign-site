// pages/projects/index.js
export default function Projects() {
  return (
    <div style={{ minHeight: "100vh", fontFamily: "sans-serif", color: "#111" }}>
      {/* Top bar — logo left, nav right (match homepage) */}
      <header
        style={{
          position: "sticky",
          top: 0,
          padding: "12px 0",
          borderBottom: "1px solid #e5e5e5",
          background: "#fff",
          zIndex: 30,
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Logo on the left */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/images/logo.png" alt="DM Design" style={{ height: 36, width: "auto" }} />
          </a>

          {/* Nav on the right */}
          <nav style={{ fontSize: 14, display: "flex", gap: 16 }}>
            <a href="/kitchens" style={{ textDecoration: "none", color: "#444" }}>Kitchens</a>
            <a href="/bedrooms" style={{ textDecoration: "none", color: "#444" }}>Bedrooms</a>
            <a href="/bathrooms" style={{ textDecoration: "none", color: "#444" }}>Bathrooms</a>
            <a href="/projects" style={{ textDecoration: "none", color: "#111", fontWeight: 600 }}>Projects</a>
            <a href="/news" style={{ textDecoration: "none", color: "#444" }}>In The News</a>
            <a href="/contact" style={{ textDecoration: "none", color: "#444" }}>Contact</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "36px 16px 48px" }}>
        {/* Page title */}
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>Project of the Month</h1>
        <p style={{ color: "#666", marginBottom: 24 }}>
          A closer look at a standout project from our recent installations.
        </p>

        {/* Hero row: smaller image (left) + teaser text (right) */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(260px, 420px) 1fr",
            gap: 24,
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: 14,
              overflow: "hidden",
              background: "#fafafa",
            }}
          >
            <img
              src="/images/projects/diane/diane-dining-living-overview.jpg"
              alt="Diane’s kitchen & living space overview"
              style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
            />
          </div>

          <div>
            <h2 style={{ fontSize: 22, margin: "0 0 8px" }}>
              Diane’s Dream Kitchen and Living Space
            </h2>
            <p style={{ color: "#444", lineHeight: 1.7, margin: "0 0 10px" }}>
              When Diane approached Ryan to design a new kitchen and living area for her
              impressive extension, it was the kind of project that designers love to be part of.
              With Diane open to ideas, Ryan and the team had the freedom to bring creative instincts
              to the forefront and craft a space that is as functional as it is beautiful...
              <a href="/projects/dianes-dream-kitchen" style={{ color: "#111", textDecoration: "none", fontWeight: 600 }}>
                {" "}Read more…
              </a>
            </p>
          </div>
        </section>

        {/* Project cards (add more later if needed) */}
        <section>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {/* Diane card */}
            <a
              href="/projects/dianes-dream-kitchen"
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                border: "1px solid #eee",
                borderRadius: 14,
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <div style={{ height: 160, background: "#f0f0f0", overflow: "hidden" }}>
                <img
                  src="/images/projects/diane/diane-appliance-wall.jpg"
                  alt="Diane’s Dream Kitchen and Living Space – appliance wall"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 12 }}>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>
                  Diane’s Dream Kitchen and Living Space
                </div>
                <div style={{ fontSize: 14, color: "#666" }}>
                  Porcelain-painted timber shaker with white quartz & oak highlights.
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid #e5e5e5", background: "#fafafa", marginTop: 48 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "24px 16px", fontSize: 14, color: "#555" }}>
          <div>© {new Date().getFullYear()} DM Design</div>
          <div>sales@DMdesign.uk · 0131 344 0936 · Designed &amp; crafted in Scotland</div>
        </div>
      </footer>
    </div>
  );
}

