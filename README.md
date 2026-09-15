# Portfolio — Ahmed Adel Goda

Personal portfolio site built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**. Showcases 13 projects plus a featured case study for the graduation project, **Eshara**.

## Stack

- **Next.js** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4** (class-based dark mode via `@custom-variant dark`)
- No extra UI/animation libraries — hand-rolled components + inline SVG icons, kept deliberately dependency-light

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx       Root layout, fonts, metadata
    page.tsx          Assembles all sections
    globals.css        Theme tokens (light/dark) + Tailwind import
  components/
    Navbar.tsx         Sticky nav + dark mode toggle
    Hero.tsx            Intro section
    Eshara.tsx           Featured graduation project case study
    ProjectsSection.tsx  Filterable project grid (client component)
    Skills.tsx            Skills grouped by category
    Contact.tsx            Contact CTA
    Footer.tsx
    ThemeToggle.tsx        Dark mode toggle (localStorage + system preference)
    icons.tsx               Hand-written inline SVG icons (no icon library dependency)
  data/
    projects.ts        All project + Eshara content lives here — edit this file to add/update projects
public/
  favicon.ico
  (add resume.pdf and any images here — see checklist below)
```

## Editing content

All project copy (titles, descriptions, tech tags, GitHub links, the Eshara case study) lives in **`src/data/projects.ts`** — this is the only file you need to touch to add a new project or update an existing one's description.

## ⚠️ Still needed before this is "done"

This is a fully working site, but a few things are placeholders or missing on purpose — fill these in before publishing:

1. **`public/resume.pdf`** — the Hero section links to `/resume.pdf`; add your actual résumé PDF at that path (or remove the button in `Hero.tsx` if you don't want a download link yet).
2. **Real screenshots/demo GIFs** — currently there are no project images; consider adding a screenshot or short GIF per project (especially Eshara, CustomsX, and DRMS, which have visible UIs) and wiring them into `ProjectsSection.tsx`/`Eshara.tsx` with `next/image`.
3. **Eshara demo video** — you already have `demo-final3.mp4` in the Eshara repo; consider embedding a trimmed clip or a YouTube/hosted link in the Eshara section.
4. **Update social links** — `Navbar.tsx`/`Hero.tsx`/`Contact.tsx` currently point to `github.com/ahmed171102` and `linkedin.com/in/ahmed171102`; double-check the LinkedIn URL is correct (a placeholder is currently in the profile README too).
5. **`metadataBase` domain** — `layout.tsx` sets `https://ahmedadel.dev` as a placeholder; update it once you pick/buy a real domain (or leave it if you actually get that domain).
6. **OG/social preview image** — add a `public/og-image.png` (1200×630) and reference it in `layout.tsx`'s `openGraph.images` so link previews on LinkedIn/Twitter look good.
7. **Analytics (optional)** — consider Vercel Analytics or Plausible if you want visitor stats.
8. **Contact form (optional)** — currently just a `mailto:` link. If you want an actual form, a simple option is a serverless route + Resend/EmailJS, or a service like Formspree.
9. **Favicon** — still the default Next.js icon; replace `src/app/favicon.ico` with your own.
10. **Deploy** — push this repo to GitHub, then import it on [Vercel](https://vercel.com/new) for free hosting + auto-deploy on every push.

## Deployment (Vercel)

```bash
npm i -g vercel   # one-time
vercel             # follow prompts, links to your GitHub repo
```

Or connect the GitHub repo directly at vercel.com/new — every push to `main` auto-deploys.

<!-- deployed via Vercel, connected to GitHub for auto-deploy -->
