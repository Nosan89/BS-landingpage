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
  layout.tsx              — Bebas Neue + Manrope fonty, metadata, LangProvider + ModalProvider
  page.tsx                — hlavní landing page + QuestionnaireModal
  globals.css             — Tailwind v4 import, CSS custom properties, animace
  api/questionnaire/route.ts — POST endpoint, odesílá email přes Resend
  podminky/page.tsx       — obchodní podmínky (placeholder)
  ochrana-soukromi/page.tsx — GDPR / privacy (placeholder)

components/
  LangContext.tsx         — CZ/EN context + useLang hook
  ModalContext.tsx        — modal open/close context + useModal hook
  QuestionnaireModal.tsx  — 4-krokový kvalifikační dotazník (modal overlay)
  Navbar.tsx              — fixed nav, scroll effect, lang switch, CTA
  Hero.tsx                — headline, CTA, profile photo, floating cards
  Credentials.tsx         — 4 credentials (olympionik, fyzio, S&C, platforma)
  Story.tsx               — timeline (9 položek) + fotky + citát; první 3 (1993, 2014, 2018) viditelné, zbytek za tlačítkem "Celý příběh ↓" (useState expand)
  Problem.tsx             — 3 statistiky
  Comparison.tsx          — tabulka Běžný trenér vs BioStrategy
  Services.tsx            — 4 service karty; každá karta zobrazuje ikonu + název + první větu, zbytek + tagy za tlačítkem "Více ↓" (nezávislý useState per karta)
  Platform.tsx            — tabs layout (4 taby, 1 screenshot najednou); přepínání přes useState activeTab, taby horizontálně scrollovatelné na mobilu
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
- **Pomlčky:** v celém projektu se používá krátká pomlčka `-`, nikoliv em dash `—` ani en dash `–`

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

## Obrázky (`public/images/`)

### Screenshoty platformy — `components/Platform.tsx`
- `coach_triage.jpg` — coach dashboard (dark mode)
- `blood_markers.jpg` — blood markers (dark mode)
- `training_app.jpg` — perform / training app
- `protocols.jpg` — health protocols

Až přibudou nové screenshoty, stačí soubory přepsat (stejný název) — kód se nemusí měnit.

### Ostatní obrázky
- `profilephoto.PNG` — profilová fotka Jakuba, používá `components/Hero.tsx`
- `logo_transparent.png` — logo BioStrategy, používá `components/Navbar.tsx`
- `sprint_training.jpg` — foto sprintového tréninku, používá `components/Story.tsx`
- `strength_training.jpg` — foto silového tréninku, používá `components/Story.tsx`
- `boby.jpg` — zatím nepoužito (rezerva)

## Kvalifikační dotazník (modal)

Otevírá se po kliknutí na všechna CTA tlačítka (Hero, Navbar, FinalCTA).

- **4 kroky:** Kdo jsi → Situace → Motivace → Závazek
- **Email:** odesílá se přes Resend na jakub.nosek@biostrategy.co
- **API route:** `POST /api/questionnaire`
- **ENV var:** `RESEND_API_KEY` — nastavit v Vercel dashboardu (Settings → Environment Variables)
- **Sender:** `noreply@biostrategy.co` — doména biostrategy.co musí být ověřena v Resend dashboardu
- CZ/EN plně podporováno

### CTA texty (aktuální stav)
- **Navbar:** `Vyplnit dotazník` / `Fill in the Questionnaire`
- **Hero (primární tlačítko):** `ZAČÍT KVALIFIKAČNÍM DOTAZNÍKEM →` / `START WITH THE QUALIFICATION QUESTIONNAIRE →`
- **FinalCTA (primární tlačítko):** `Vyplnit dotazník` / `Take the Questionnaire` — sekundární tlačítko (konzultace) odstraněno
- **FinalCTA (nadpis):** `TVŮJ BYZNYS JEDE NA DATA.<br>ZAČNI TAK ŘÍDIT I SVÉ TĚLO.` / `YOUR BUSINESS RUNS ON DATA.<br>START RUNNING YOUR BODY THE SAME WAY.`
