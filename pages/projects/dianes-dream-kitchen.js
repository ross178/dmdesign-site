// pages/projects/dianes-dream-kitchen.js
export default function DianesDreamKitchen() {
  return (
    <div style={{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",color:"#111"}}>
      {/* Top bar */}
      <header style={{position:"sticky",top:0,background:"#fff",borderBottom:"1px solid #eee",zIndex:20}}>
        <div style={{maxWidth:1120,margin:"0 auto",padding:"14px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/projects" style={{textDecoration:"none",color:"#111"}}>← Recent Projects</a>
          <nav style={{fontSize:14}}>
            <a href="/kitchens" style={{marginLeft:16,textDecoration:"none",color:"#444"}}>Kitchens</a>
            <a href="/bedrooms" style={{marginLeft:16,textDecoration:"none",color:"#444"}}>Bedrooms</a>
            <a href="/bathrooms" style={{marginLeft:16,textDecoration:"none",color:"#444"}}>Bathrooms</a>
            <a href="/news" style={{marginLeft:16,textDecoration:"none",color:"#444"}}>In The News</a>
            <a href="/contact" style={{marginLeft:16,textDecoration:"none",color:"#444"}}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{maxWidth:1280,margin:"0 auto"}}>
        <div style={{height:460,background:"#f6f6f6",borderBottom:"1px solid #eee",overflow:"hidden"}}>
          <img
            src="/images/projects/diane/diane-hero-kitchen-overview.jpg"
            alt="Diane’s Kitchen – Overview"
            style={{width:"100%",height:"100%",objectFit:"cover"}}
          />
        </div>
      </section>

      {/* Title + intro */}
      <main style={{maxWidth:920,margin:"0 auto",padding:"28px 16px 40px"}}>
        <h1 style={{fontSize:36,lineHeight:1.2,margin:"6px 0 10px"}}>Diane’s Dream Kitchen & Living Space</h1>
        <p style={{color:"#666",fontSize:16,margin:"0 0 18px"}}>
          When Diane asked Ryan to design a new kitchen and living area for her extension, she was open to ideas — the perfect brief.
          With that trust, the team created a space that’s as functional as it is beautiful.
        </p>

        {/* Section 1 — diane-extra-11 */}
        <article style={{lineHeight:1.7,fontSize:16,color:"#333"}}>
          <div style={{margin:"22px 0 12px"}}>
            <img
              src="/images/projects/diane/diane-extra-11.jpg"
              alt="Diane’s Dream Kitchen — feature view (extra 11)"
              style={{width:"100%",borderRadius:14,border:"1px solid #eee"}}
            />
          </div>
          <p>
            The core is a timeless shaker kitchen in <strong>porcelain-painted solid timber</strong>, paired with a
            <strong> white mottled quartz</strong> worktop. <strong>Antique bronze</strong> handles and taps add warmth and
            character without shouting, keeping the look calm and premium.
          </p>

          {/* Pull quote */}
          <blockquote style={{margin:"18px 0",padding:"14px 16px",borderLeft:"3px solid #111",background:"#fafafa",color:"#444"}}>
            “Everything was designed around how the family actually lives day-to-day — storage where it matters, light where it’s needed,
            and materials that will age well.”
          </blockquote>

          {/* Section 2 — diane-bench-detail */}
          <div style={{margin:"22px 0 12px"}}>
            <img
              src="/images/projects/diane/diane-bench-detail.jpg"
              alt="Bespoke bench seating and dresser detail"
              style={{width:"100%",borderRadius:14,border:"1px solid #eee"}}
            />
          </div>
          <p>
            Beyond the main run, we designed a <strong>bespoke dresser and bench seating</strong> to keep the dining zone practical and
            cohesive — same paint, same proportions, zero visual noise.
          </p>

          {/* Section 3 — diane-extra-15 */}
          <div style={{margin:"22px 0 12px"}}>
            <img
              src="/images/projects/diane/diane-extra-15.jpg"
              alt="Open-plan perspective across kitchen, dining and living (extra 15)"
              style={{width:"100%",borderRadius:14,border:"1px solid #eee"}}
            />
          </div>

          {/* Section 4 — diane-extra-13 */}
          <div style={{margin:"22px 0 12px"}}>
            <img
              src="/images/projects/diane/diane-extra-13.jpg"
              alt="Kitchen and dining connection (extra 13)"
              style={{width:"100%",borderRadius:14,border:"1px solid #eee"}}
            />
          </div>

          <p>
            The floor is a real highlight: <strong>Jurassic limestone</strong> from{" "}
            <a href="https://stoneandtimber.co.uk/" target="_blank" rel="noreferrer" style={{color:"#111"}}>
              Strathearn Stone &amp; Timber
            </a>
            , grounding the light cabinetry and adding texture underfoot. It anchors the room and
            ties the kitchen into the <strong>open-plan dining and living</strong> spaces.
          </p>

          <p>
            In the lounge, a <strong>bespoke media wall</strong> frames the TV and hides cabling, so the whole space reads clean and calm.
            The finished result reflects both Ryan’s creativity and Diane’s trust in the process — premium, personal, and built for daily life.
          </p>
        </article>

        {/* CTA */}
        <div style={{margin:"28px 0 0",padding:"18px",border:"1px solid #eee",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
          <div style={{fontWeight:600}}>Inspired by Diane’s kitchen?</div>
          <a href="/contact" style={{padding:"10px 14px",borderRadius:12,background:"#111",color:"#fff",textDecoration:"none"}}>
            Book your free home design appointment
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{borderTop:"1px solid #eee",background:"#fafafa",marginTop:20}}>
        <div style={{maxWidth:1120,margin:"0 auto",padding:"18px 16px",fontSize:14,color:"#555"}}>
          <div>© {new Date().getFullYear()} DM Design</div>
          <div>sales@DMdesign.uk · 0131 344 0936 · Designed &amp; crafted in Scotland</div>
        </div>
      </footer>
    </div>
  );
}

