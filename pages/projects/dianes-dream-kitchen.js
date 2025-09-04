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
            alt="Diane’s Dream Kitchen – overview"
            style={{width:"100%",height:"100%",objectFit:"cover"}}
          />
        </div>
      </section>

      {/* Title + body */}
      <main style={{maxWidth:920,margin:"0 auto",padding:"28px 16px 40px"}}>
        <h1 style={{fontSize:36,lineHeight:1.2,margin:"6px 0 10px"}}>
          Diane’s Kitchen & Living Space Extension
        </h1>
        <p style={{color:"#666",fontSize:16,margin:"0 0 18px"}}>
          When Diane approached Ryan to design a new kitchen and living area for her impressive extension, it was the kind of project that
          designers love to be part of. With Diane open to ideas, Ryan and the team had the freedom to bring creative instincts to the forefront
          and craft a space that is as functional as it is beautiful.
        </p>

        <article style={{lineHeight:1.7,fontSize:16,color:"#333"}}>
          {/* Section 1 — extra-11 */}
          <div style={{margin:"22px 0 12px"}}>
            <img
              src="/images/projects/diane/diane-extra-11.jpg"
              alt="Porcelain-painted shaker cabinetry with white mottled quartz worktop"
              style={{width:"100%",borderRadius:14,border:"1px solid #eee"}}
            />
          </div>

          <p>
            The result is a timeless kitchen featuring <strong>solid timber shaker doors</strong> painted in Porcelain,
            paired with a <strong>white mottled quartz worktop</strong>. To add depth and warmth, the team specified
            <strong> antique bronze handles</strong> and taps, balancing elegance with subtle character.
          </p>

          <blockquote style={{margin:"18px 0",padding:"14px 16px",borderLeft:"3px solid #111",background:"#fafafa",color:"#444"}}>
            “Everything was designed around how the family actually lives day-to-day — storage where it matters, light where it’s needed,
            and materials that will age well.”
          </blockquote>

          {/* Section 2 — extra-15 */}
          <div style={{margin:"22px 0 12px"}}>
            <img
              src="/images/projects/diane/diane-extra-15.jpg"
              alt="Open-plan perspective across kitchen, dining and living"
              style={{width:"100%",borderRadius:14,border:"1px solid #eee"}}
            />
          </div>

          <p>
            Practicality was central to the design. A <strong>large undermount sink</strong> sits neatly below the quartz surface,
            while a <strong>bespoke mantle frames the large range oven with an induction hob</strong> — creating a focal point
            that blends classic proportion with modern performance. Beneath, <strong>generous drawer storage</strong> was planned
            to keep essentials within easy reach, designed around Diane’s love of cooking and entertaining family and friends.
          </p>

          {/* Section 3 — bench-detail */}
          <div style={{margin:"22px 0 12px"}}>
            <img
              src="/images/projects/diane/diane-bench-detail.jpg"
              alt="Bespoke bench seating and dresser detail in dining area"
              style={{width:"100%",borderRadius:14,border:"1px solid #eee"}}
            />
          </div>

          <p>
            For contrast, a striking <strong>Jurassic limestone tiled floor</strong> was sourced from{" "}
            <a href="https://stoneandtimber.co.uk/" target="_blank" rel="noreferrer" style={{color:"#111"}}>
              Strathearn Stone &amp; Timber
            </a>{" "}
            in Perth. The darker tones of the limestone anchor the light cabinetry and work surfaces, creating a sophisticated
            balance across the room.
          </p>

          {/* Section 4 — extra-13 */}
          <div style={{margin:"22px 0 12px"}}>
            <img
              src="/images/projects/diane/diane-extra-13.jpg"
              alt="Connection between kitchen and dining space — cabinetry and flooring alignment"
              style={{width:"100%",borderRadius:14,border:"1px solid #eee"}}
            />
          </div>

          <p>
            Beyond the kitchen, Ryan also designed a <strong>custom dresser for the dining area</strong> and a
            <strong> bespoke media unit</strong> to frame the TV, ensuring the open-plan space feels seamlessly connected and
            tailored to Diane’s lifestyle.
          </p>

          <p>
            The project was worth the wait. The finished installation reflects both Ryan’s creativity and Diane’s trust in the
            process — a kitchen and living space that feels premium, personal, and perfectly suited to its setting.
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
