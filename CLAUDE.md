# BioStrategy Landing Page

Landing page pro biostrategy.co — health coaching Jakuba Noska.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (PostCSS plugin, bez tailwind.config.js)
- **Deploy:** Vercel
- **Doména:** biostrategy.co (nastavit ručně na Vercelu)

## Struktura

```
app/
  layout.tsx              — Bebas Neue + Manrope fonty, metadata, LangProvider
  page.tsx                — hlavní landing page
  globals.css             — Tailwind v4 import, CSS custom properties, animace
  podminky/page.tsx       — obchodní podmínky (placeholder)
  ochrana-soukromi/page.tsx — GDPR / privacy (placeholder)

components/
  LangContext.tsx         — CZ/EN context + useLang hook
  Navbar.tsx              — fixed nav, scroll effect, lang switch, CTA
  Hero.tsx                — headline, CTA, profile photo, floating cards
  Credentials.tsx         — 4 credentials (olympionik, fyzio, S&C, platforma)
  Story.tsx               — timeline + fotky + citát
  Problem.tsx             — 3 statistiky
  Comparison.tsx          — tabulka Běžný trenér vs BioStrategy
  Services.tsx            — 4 service karty
  Platform.tsx            — 4× phone-frame screenshot
  Process.tsx             — 4 kroky
  FAQ.tsx                 — accordion
  FinalCTA.tsx            — závěrečné CTA
  Footer.tsx              — copyright, links, email
  ScrollReveal.tsx        — IntersectionObserver wrapper

public/
  images/                 — všechny obrázky
```

## Design

- **Colors:** navy-deep `#060e1a`, navy `#0a1628`, emerald `#10b981`, emerald-bright `#34d399`
- **Fonts:** Bebas Neue (display), Manrope (body)
- **Tailwind v4:** konfigurace přes `@theme {}` v globals.css, žádný tailwind.config.js

## Jazykový přepínač

Implementováno přes `LangContext` — client-side React state, žádný i18n framework.
`useLang()` hook vrací `{ lang, setLang, t(cs, en) }`.

## Lokální vývoj

```bash
npm install
npm run dev
```

## Deploy na Vercel

```bash
# první deploy
vercel --prod

# nebo přes Vercel dashboard — napojit GitHub repo BS-landingpage
```

Po deployi nastavit doménu `biostrategy.co` ručně v Vercel dashboardu:
Settings → Domains → Add → biostrategy.co

## Podstránky (TODO)

- `/podminky` — obchodní podmínky, obsah dodá právnička
- `/ochrana-soukromi` — GDPR privacy policy, obsah dodá právnička

## Screenshoty platformy (TODO)

Až budou dostupné nové dark mode screenshoty, vyměnit v `public/images/`:
- `coach_triage.PNG` → coach dashboard
- `blood_markers.PNG` → blood markers
- `training_app.jpg` → perform / training app
- `protocols.jpg` → health protocols

Použití je v `components/Platform.tsx`.
