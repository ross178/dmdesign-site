# DM Design Site (Next.js + Tailwind)

## Quick Start
1. Install deps
   ```bash
   npm install
   ```
2. Run dev
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

## Deploy on Vercel
- Push this folder to a GitHub repo (e.g., `dmdesign-site`)
- In Vercel: New Project → Import your repo → Deploy

## Where to add images
- Logo: `public/images/logo.png`
- Kitchens hero: `public/images/kitchens-hero.jpg`
- Cambridge images: `public/images/cambridge/*`

## Edit content
- Main code: `pages/index.js`
- UI components: `components/ui/*`
- Styles: `styles/globals.css`

Routes (hash-based):
- `#/kitchens` → Kitchens main
- `#/kitchens/cambridge` → Cambridge gallery
- `#/contact` → Contact form
