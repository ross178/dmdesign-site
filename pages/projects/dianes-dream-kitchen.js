// pages/projects/dianes-dream-kitchen.js
export default function DianesDreamKitchen() {
  const gallery = [
    // Replace these with your real filenames once uploaded
    "/images/projects/diane/hero.jpg",
    "/images/projects/diane/kitchen-island.jpg",
    "/images/projects/diane/dining-living.jpg",
    "/images/projects/diane/lounge.jpg",
    "/images/projects/diane/bench-detail.jpg",
  ];

  return (
    <div style={{minHeight:"100vh",fontFamily:"sans-serif"}}>
      {/* Header */}
      <header style={{position:"sticky",top:0,padding:"16px",borderBottom:"1px solid #e5e5e5",background:"#fff"}}>
        <a href="/projects" style={{textDecoration:"none",color:"#111"}}>← Back to Recent Projects</a>
        <nav style={{float:"right"}}>
          <a href="/kitchens" style={{marginLeft:16}}>Kitchens</a>
          <a href="/bedrooms" style={{marginLeft:16}}>Bedrooms</a>
          <a href="/bathrooms" style={{marginLeft:16}}>Bathrooms</a>
          <a href="/projects" style={{marginLeft:16}}>Recent Projects</a>
          <a href="/news" style={{marginLeft:16}}>In The News</a>
          <a href="/contact" style={{marginLeft:16}}>Contact</a>
        </nav>
      </header>

      {/* Body */}
      <main style={{maxWidth:1120,margin:"0 auto",padding:"48px 16px"}}>
        <h1 style={{fontSize:32,marginBottom:8}}>Diane’s Dream Kitchen</h1>
        <p style={{color:"#666",marginBottom:24}}>
          When Diane approached Ryan to design a new kitchen and living area for her impressive extension, it was the kind of project that designers love to be part of. With Diane open to ideas, Ryan and the team had the freedom to bring creative instincts to the forefront and craft a space that is as functional as it is beautiful.
        </p>

        {/* Hero image */}
        <div style={{height:420,borderRadius:16,overflow:"hidden",border:"1px solid #e5e5e5",background:"#f4f4f4",marginBottom:24}}>
          <img
            src={gallery[0]}
            alt="Diane’s Kitchen – Hero"
            style={{width:"100%",height:"100%",objectFit:"cover"}}
          />
        </div>

        {/* Body copy */}
        <div style={{maxWidth:820,color:"#444",lineHeight:1.6}}>
          <p>
            The result was a timeless kitchen featuring <strong>solid timber painted shaker doors in Porcelain</strong>, paired with a <strong>white mottled quartz worktop</strong>. To add depth and warmth, the team specified <strong>antique bronze handles and taps</strong>, balancing elegance with subtle character.
          </p>
          <p>
            For contrast, a striking <strong>real Jurassic limestone tiled floor</strong> was sourced from{" "}
            <a href="https://www.strathearnstone.co.uk/" target="_blank" rel="noreferrer">Strathearn Stone and Timber</a>{" "}
            in Perth. The darker tones of the limestone anchor the light cabinetry and work surfaces, creating a sophisticated balance across the room.
          </p>
          <p>
            The brief extended beyond the kitchen: Ryan also designed a <strong>custom dresser for the dining area</strong> and a <strong>bespoke media unit</strong> to frame the TV, ensuring the open-plan space feels seamlessly connected and tailored to Diane’s lifestyle.
          </p>
          <p>
            The project was worth the wait. The finished installation reflects both Ryan’s creativity and Diane’s trust in the process — a kitchen and living space that feels premium, personal, and perfectly suited to its setting.
          </p>
        </div>

        {/* Gallery */}
        <h2 style={{fontSize:20,marginTop:32,marginBottom:12}}>Gallery</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
          {gallery.slice(1).map((src) => (
            <div key={src} style={{height:200,borderRadius:12,overflow:"hidden",border:"1px solid #e5e5e5",background:"#f4f4f4"}}>
              <img src={src} alt="Diane’s Kitchen" style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{marginTop:32,padding:16,border:"1px solid #e5e5e5",borderRadius:12}}>
          <div style={{fontWeight:600,marginBottom:8}}>Inspired by Diane’s kitchen?</div>
          <a href="/contact" style={{display:"inline-block",padding:"10px 14px",borderRadius:12,background:"#111",color:"#fff",textDecoration:"none"}}>
            Book your free home design appointment
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{borderTop:"1px solid #e5e5e5",background:"#fafafa",marginTop:48}}>
        <div style={{maxWidth:1120,margin:"0 auto",padding:"24px 16px",fontSize:14,color:"#555"}}>
          <div>© {new Date().getFullYear()} DM Design</div>
          <div>sales@DMdesign.uk · 0131 344 0936 · Designed &amp; crafted in Scotland</div>
        </div>
      </footer>
    </div>
  );
}
