# InventiX — marketing website

Next.js 15 (App Router) + Tailwind CSS v4. Six pages, brand colours pulled
straight from the logo.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Pages

| Route            | What it does                                                      |
| ---------------- | ----------------------------------------------------------------- |
| `/`              | Hero with the animated stock board, problem framing, four pillars, seasonal strip, supplier teaser |
| `/features`      | The six modules in detail — stock, alerts, forecasting, suppliers, deliveries, reports |
| `/how-it-works`  | Setup steps, the four delivery stages, how the forecasting model works, roadmap |
| `/suppliers`     | Ranking criteria, the scorecard, ratings, delivery tracking       |
| `/pricing`       | Three plans and an FAQ                                            |
| `/about`         | Story, principles, contact form                                   |
| `404`            | Custom not-found page                                             |

## Design tokens

All colours live in `app/globals.css` under `@theme`. Change them there and
every page follows.

| Token          | Hex       | Used for                        |
| -------------- | --------- | ------------------------------- |
| `ink`          | `#1A0704` | Dark sections, hero, footer     |
| `maroon`       | `#501602` | Headings, primary brand         |
| `gold`         | `#FFC800` | Buttons, accents, meters        |
| `amber`        | `#C4910C` | Eyebrow labels, secondary       |
| `leaf`         | `#086C1A` | "Healthy stock", success states |
| `paper`        | `#FFFCF4` | Light section background        |

Typefaces: **Inter** for everything (per your brand guideline), with
**JetBrains Mono** as a utility face for counts, labels and timestamps —
grocery inventory is numbers, and the mono reads like a shelf-edge label.

## The signature elements

- **Shelf rail** (`.shelf-rail` in `globals.css`) — the ticked hairline used as
  the section divider, borrowed from a shelf-edge label strip.
- **Stock board** (`components/StockBoard.tsx`) — the hero runs one sequence on
  load: meters fill, rice drops below its reorder point, the alert lands, the
  WhatsApp draft appears. That's the entire product in seven seconds. It runs
  once, not on a loop.

Everything else is restrained on purpose: scroll reveals, a hover lift on
cards, an underline that grows under the active nav link. All of it is
disabled under `prefers-reduced-motion`.

## Things to change before you launch

1. **Logo** — the real mark is wired in. `public/logo-mark.png` (maroon + gold)
   is used on light backgrounds and `public/logo-mark-light.png` (cream + gold)
   on the dark ones; both are transparent and cropped tight. The original
   white-background file is kept at `public/logo.png` for reference. If your
   designer has a vector, save it as `public/logo-mark.svg` and change the two
   imports at the top of `components/Logo.tsx` — nothing else needs touching.
2. **Pricing** — the LKR figures in `app/pricing/page.tsx` are placeholders.
3. **Contact details** — `hello@inventix.lk`, the WhatsApp number and "Colombo"
   appear in `components/Footer.tsx` and `app/about/page.tsx`.
4. **Contact form** — `components/ContactForm.tsx` currently opens the
   visitor's mail client. Point `submit()` at a real endpoint (Formspree,
   Resend, or your own API route) when you have one.
5. **Copy** — the supplier names, stock figures and the shop story are written
   to feel real, but they're invented. Swap in anything you have from actual
   shops you've talked to; it will read better.

## Accessibility

Skip link, visible keyboard focus rings on both surfaces, `aria-current` on the
active nav item, labelled form fields, and reduced-motion support throughout.
