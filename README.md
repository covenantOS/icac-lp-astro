# icac-lp-astro

PPC landing page for **I Care Air Care** (Wesley Chapel, FL).
Astro + Tailwind v4, deployed via Cloudflare Pages.

## Stack

- Astro 6 (static)
- Tailwind v4 (via `@tailwindcss/vite`)
- Inter Variable (`@fontsource-variable/inter`)
- `@astrojs/partytown` for tag-loaded analytics

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview
```

Requires Node ≥ 22.12.

## Project layout

```
src/
  pages/
    index.astro          ← single landing page (no other routes)
  layouts/
    LandingLayout.astro  ← <head>, fonts, press-feedback JS
  components/
    Icon.astro           ← inline SVG icon set
    GoogleLogo.astro     ← Google "G" mark
    QuoteForm.astro      ← lead-capture form (no-op until webhook is wired)
    sections/            ← every page section as its own .astro file
  data/
    icac.ts              ← all copy, services, reviews, FAQs, ZIPs
    types.ts
  styles/
    global.css           ← Tailwind theme + brand color tokens
public/
  images/                ← logo, team, services, gallery, hero
  _redirects             ← Cloudflare Pages redirect rules (none today)
  robots.txt             ← Disallow all (LP, not for organic SEO)
```

## Editing content

99% of copy lives in `src/data/icac.ts`. To change a service blurb, the
phone number, ZIP list, reviews, or FAQs — edit that file. Components
read from it; no hard-coded strings in the section files.

## Form / webhook

`QuoteForm.astro` currently prevents default on submit and shows a
thank-you state. The submit handler logs the payload to `console.log`.

To wire it to a real backend, replace the body of the form `submit`
listener at the bottom of `QuoteForm.astro` with a `fetch()` POST to
your webhook (e.g. GHL, Zapier, Cloudflare Worker).

## Brand

Tokens defined in `src/styles/global.css`:

| Token | Hex | Use |
| --- | --- | --- |
| `--color-brand` | `#1ea7b8` | mid teal, buttons, links |
| `--color-brand-dark` | `#15788a` | headlines |
| `--color-brand-darker` | `#0e4f5b` | nav, footer, hero overlay |
| `--color-brand-light` | `#e6f5f7` | section bg |
| `--color-brand-lighter` | `#f3fafb` | near-white tint |
| `--color-accent` | `#f5953c` | orange — primary CTA |
| `--color-accent-dark` | `#d97a20` | hover |

## Tracking

A comment slot in `LandingLayout.astro` (`<head>`) marks where the
Spectrum / call-tracking script should be pasted when provided.

## Deployment

Cloudflare Pages — connect this repo, set:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22`

Once approved, transfer the `contact.icareaircare.com` subdomain from
the existing GHL LP to this Pages project.
