# Andres_S_W26Portfolio

Course portfolio for **COMP3078 – Portfolio Development Project** (Winter 2026).

## What’s inside

| Path | Purpose |
|------|---------|
| `web/` | Next.js site (minimal UI, all required sections) |
| `web/public/docs/` | Optional diploma PDFs (GBC, Baccalauréat); link from Academic page |
| `web/public/capstone/` | Team PDFs + `capstonePdfFiles` in `web/src/lib/capstone.ts` must stay in sync |

## Run locally (development)

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build static files (for inspection without a host)

```bash
cd web
npm run build
```

Output folder: `web/out/`. For static sites, open `out/index.html` via a simple static server (some browsers block `file://` routing for SPAs). **Recommended:** deploy to Vercel or Netlify and submit that URL.

## Deploy (Vercel)

1. Push `web/` (or the whole repo) to GitHub.
2. Import the project in Vercel; set **Root Directory** to `web` if the repo contains this README at the parent level.
3. Framework: Next.js. Build: `next build`, Output: static export is already configured (`output: 'export'` in `next.config.ts`).

Ensure the live URL remains valid past **April 30, 2026**, per the assignment.

## Before you submit

1. Edit **`web/src/lib/site.ts`**: `contactEmail` for FormSubmit; optional `linkedInUrl` if you add a profile later. GitHub: [asanchezalzate13](https://github.com/asanchezalzate13).
2. Confirm FormSubmit: first form post triggers an activation email from FormSubmit.
3. Replace placeholder links on **Work samples** and **Professional** pages.
4. **Tatamá** URL is in `site.ts`; secondary credential line is `baccalaureat` in the same file.
5. Keep capstone PDFs in `web/public/capstone/` aligned with **`capstonePdfFiles`** in `web/src/lib/capstone.ts`. Figma mockup URL: **`parkSpotMockupFigmaUrl`** in the same file.
6. Record the **demo video** (with audio) walking through every rubric section.
7. Zip this folder for D2L: **`Andres_S_W26Portfolio.zip`** including `web/` and this README.

## Assignment checklist (mapping)

- **Personal data:** Home (bio), Resume, Cover letter, Philosophy  
- **Academic credentials:** Academic page  
- **Academic work:** Work samples (5+), Capstone subpages  
- **Professional:** Professional page (Tatamá + ParkSpot samples)  
- **Contact:** Contact page (form + LinkedIn + GitHub)
