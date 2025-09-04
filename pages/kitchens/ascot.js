import Head from "next/head";
import fs from "fs";
import path from "path";

export default function Ascot({ images = [] }) {
  return (
    <>
      <Head>
        <title>Ascot Kitchens | DM Design</title>
        <meta name="description" content="Ascot range — classic styling with modern practicality." />
      </Head>

      <main style={{maxWidth: "1200px", margin: "0 auto", padding: "32px 16px"}}>
        <h1 style={{fontSize: "32px", fontWeight: 700, marginBottom: 8}}>Ascot</h1>
        <p style={{color:"#6b7280", marginBottom: 24}}>
          Classic shaker lines, built for daily use. Locally designed & installed.
        </p>

        {images.length === 0 ? (
          <div style={{border:"1px solid #e5e7eb", borderRadius:12, padding:24}}>
            <span style={{
              display:"inline-block", fontSize:12, padding:"2px 8px", borderRadius:999,
              background:"#f3f4f6", color:"#374151", marginBottom:8
            }}>
              No images found
            </span>
            <p style={{marginTop:8}}>
              Put photos in <code>/public/images/kitchens/ascot/</code>.
            </p>
          </div>
        ) : (
          <section style={{
            display:"grid",
            gridTemplateColumns:"repeat(3, minmax(0, 1fr))",
            gap: 16
          }}>
            {images.map(src => (
              <figure key={src} style={{
                position:"relative", width:"100%", paddingBottom:"75%",
                border:"1px solid #e5e7eb", borderRadius:12, overflow:"hidden", background:"#fff"
              }}>
                <img
                  src={src}
                  alt=""
                  style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover"}}
                />
              </figure>
            ))}
          </section>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const folder = path.join(process.cwd(), "public", "images", "kitchens", "ascot");

  let files = [];
  try {
    files = fs.readdirSync(folder);
  } catch (e) {
    // folder might not exist yet; that's fine
  }

  // keep ONLY images; preserve your original names, any case/spacing
  const exts = new Set([".jpg",".jpeg",".png",".webp",".avif",".JPG",".JPEG",".PNG",".WEBP",".AVIF"]);
  const sorted = files
    .filter((f) => exts.has(path.extname(f)))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  // URL-encode just the filename so spaces & symbols work
  const images = sorted.map((f) => `/images/kitchens/ascot/${encodeURIComponent(f)}`);

  return { props: { images } };
}
