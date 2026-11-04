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

The main page (`src/pages/index.astro`, the Spectrum PPC page) reads its copy
from `src/data/ppc.ts`. Every fact there matches icareaircare.com; check the
website before changing numbers, and never add offers, prices or "free
estimate" claims without Daniel's OK. Photos in `public/images/real/` come from
the real ICAC photo shoot. `src/data/icac.ts` still feeds the older section
components used by /thank-you.

## Form / webhook

`src/components/ppc/LeadForm.astro` posts JSON to the LeadConnector (GHL)
webhook with UTMs, `lead_source`, page URL and form id, then redirects to
`/thank-you`. A hidden honeypot field drops bot submissions. Call buttons carry
`data-call="<location>"` and push a `call_click` dataLayer event.

## Brand

Matched to icareaircare.com, tokens in `src/styles/global.css`:

| Token | Hex | Use |
| --- | --- | --- |
| `--color-navy` / `--color-brand-darker` | `#1a2e45` | headings, dark bands |
| `--color-navy-deep` | `#0f1a29` | hero, footer |
| `--color-brand-dark` | `#2a5e6d` | eyebrows |
| `--color-brand` | `#397d90` | icons, links |
| `--color-brand-lighter` | `#f0f5f8` | section background |
| `--color-accent` | `#e88a38` | orange call buttons |
| `--color-accent-dark` | `#d0761f` | hover |

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
