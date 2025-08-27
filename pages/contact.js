export default function Contact() {
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
        <h1 style={{fontSize:32,marginBottom:8}}>Book Your Free Home Design</h1>
        <p style={{color:"#555",marginBottom:24}}>Tell us what you need. We’ll confirm an appointment and bring samples.</p>
        <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks — we’ll be in touch.");}} style={{border:"1px solid #e5e5e5",borderRadius:16,padding:24,maxWidth:600}}>
          <div style={{marginBottom:12}}>
            <label style={{display:"block",fontSize:14,marginBottom:6}}>Name</label>
            <input required style={{width:"100%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:12}} placeholder="Your name" />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
            <div>
              <label style={{display:"block",fontSize:14,marginBottom:6}}>Email</label>
              <input type="email" required style={{width:"100%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:12}} placeholder="you@example.com" />
            </div>
            <div>
              <label style={{display:"block",fontSize:14,marginBottom:6}}>Phone</label>
              <input style={{width:"100%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:12}} placeholder="Optional" />
            </div>
          </div>
          <div style={{marginBottom:12}}>
            <label style={{display:"block",fontSize:14,marginBottom:6}}>Project Type</label>
            <select style={{width:"100%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:12}}>
              <option>Kitchen</option><option>Bedroom / Sliding Wardrobe</option><option>Bathroom</option>
            </select>
          </div>
          <div style={{marginBottom:16}}>
            <label style={{display:"block",fontSize:14,marginBottom:6}}>Message</label>
            <textarea rows="4" style={{width:"100%",padding:"10px 12px",border:"1px solid #ddd",borderRadius:12}} placeholder="Tell us about your space" />
          </div>
          <button type="submit" style={{width:"100%",padding:"12px 16px",borderRadius:12,background:"#111",color:"#fff",border:"1px solid #111"}}>Request Appointment</button>
        </form>
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


