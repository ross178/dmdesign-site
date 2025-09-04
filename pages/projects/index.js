export default function Projects() {
  return (
    <div style={{minHeight:"100vh",fontFamily:"sans-serif"}}>
      <header style={{position:"sticky",top:0,padding:"16px",borderBottom:"1px solid #e5e5e5",background:"#fff"}}>
        <a href="/" style={{textDecoration:"none",color:"#111",fontWeight:600}}>DM Design</a>
        <nav style={{float:"right"}}>
          <a href="/kitchens" style={{marginLeft:16}}>Kitchens</a>
          <a href="/bedrooms" style={{marginLeft:16}}>Bedrooms</a>
          <a href="/bathrooms" style={{marginLeft:16}}>Bathrooms</a>
          <a href="/projects" style={{marginLeft:16}}>Recent Projects</a>
          <a href="/news" style={{marginLeft:16}}>In The News</a>
          <a href="/contact" style={{marginLeft:16}}>Contact</a>
        </nav>
      </header>
      <main style={{maxWidth:960,margin:"0 auto",padding:"48px 16px"}}>
  <h1 style={{fontSize:32,marginBottom:8}}>Recent Projects</h1>
  <p style={{color:"#555",marginBottom:24}}>
    Featured installs and customer case studies.
  </p>

  {/* Diane’s Project Card */}
  <a
    href="/projects/dianes-dream-kitchen"
    style={{
      display: "block",
      border: "1px solid #eee",
      borderRadius: 16,
      overflow: "hidden",
      textDecoration: "none",
      color: "inherit",
      marginTop: 24
    }}
  >
    <div style={{ height: 260, background: "#f6f6f6", overflow: "hidden" }}>
      <img
        src="/images/projects/diane/diane-hero-kitchen-overview.jpg"
        alt="Diane’s Dream Kitchen"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div style={{ padding: 14 }}>
      <div style={{ fontWeight: 600 }}>Diane’s Dream Kitchen</div>
      <div style={{ color: "#666", fontSize: 14, marginTop: 6 }}>
        Porcelain-painted shaker, white mottled quartz, antique bronze
        detailing, Jurassic limestone flooring.
      </div>
    </div>
  </a>
</main>

      <footer style={{borderTop:"1px solid #e5e5e5",background:"#fafafa",marginTop:48}}>
        <div style={{maxWidth:960,margin:"0 auto",padding:"24px 16px",fontSize:14,color:"#555"}}>
          <div>© {new Date().getFullYear()} DM Design</div>
          <div>sales@DMdesign.uk · 0131 344 0936 · Designed &amp; crafted in Scotland</div>
        </div>
      </footer>
    </div>
  );
}

