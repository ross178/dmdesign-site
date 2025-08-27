export default function Bathrooms() {
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
        <h1 style={{fontSize:32,marginBottom:8}}>Bathrooms</h1>
        <p style={{color:"#555"}}>Fitted bathrooms and vanity units. Content coming soon.</p>
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

