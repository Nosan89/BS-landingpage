# BioStrategy Landing Page — Claude Code Prompt

## Kontext
Stavíme nový Next.js projekt pro landing page na biostrategy.co. V aktuální složce mám hotový HTML prototyp (biostrategy-landing.html), který obsahuje kompletní design, texty (CZ/EN), strukturu. Obrázky jsou ve složce /images/. Cíl je převést prototyp do Next.js, vytvořit GitHub repo, napojit na Vercel a deploynout. Já pak na Vercelu nastavím doménu biostrategy.co.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v4
- Deploy: Vercel
- Doména: biostrategy.co

## Úkol — v tomto pořadí

### 1. Setup
- Inicializuj nový Next.js projekt s TypeScript a Tailwind CSS přímo v aktuální složce
- Vytvoř nové GitHub repo `BS-landingpage` a pushni tam initial commit
- Propoj s Vercel a deploň (Vercel CLI nebo `vercel --prod`) — já si pak na Vercelu ručně nastavím doménu biostrategy.co

### 2. Převod prototypu
- Převeď obsah z biostrategy-landing.html do Next.js komponent
- Zachovej přesně stejný design — emerald (#10b981) + navy (#0a1628) color scheme, font Bebas Neue + Manrope
- Implementuj CZ/EN přepínač (client-side state, žádný i18n framework — prostý toggle jako v prototypu)
- Všechny obrázky z /images/ přesuň do /public/images/ (logo.png, profile.png, dashboard.png, bloodmarkers.png, perform.png, sprint.jpg, gym.jpg, protocols.jpg)

### 3. Podstránky
- Přidej /podminky — obchodní podmínky (zatím placeholder text, právnička dodá obsah)
- Přidej /ochrana-soukromi — GDPR / privacy policy (zatím placeholder text)
- Obě podstránky mají mít stejný navbar + footer jako hlavní stránka

## Struktura komponent
```
app/
  layout.tsx          — fonty (Bebas Neue, Manrope), metadata, globals
  page.tsx            — hlavní landing page
  podminky/page.tsx   — obchodní podmínky (placeholder)
  ochrana-soukromi/page.tsx — GDPR / privacy (placeholder)
components/
  Navbar.tsx          — fixed nav s logem, CZ/EN switch, CTA
  Hero.tsx            — headline, sub, CTA buttons, profile photo s floating cards
  Credentials.tsx     — 2× Olympionik, Fyzioterapeut, S&C Coach, Vlastní platforma
  Story.tsx           — timeline + fotky + citát
  Problem.tsx         — "Úspěch bez zdraví" + statistiky
  Comparison.tsx      — tabulka Běžný trenér vs BioStrategy
  Services.tsx        — 4 service karty
  Platform.tsx        — 4× phone-frame screenshot (dashboard, blood, perform, protocols)
  Process.tsx         — 4 kroky
  FAQ.tsx             — accordion
  FinalCTA.tsx        — závěrečné CTA
  Footer.tsx          — copyright, links, email
```

## Design Tokeny (CSS Custom Properties / Tailwind config)
```
navy-deep: #060e1a
navy: #0a1628
navy-light: #0f1f38
navy-lighter: #162a4a
emerald: #10b981
emerald-bright: #34d399
emerald-dark: #059669
```

## Důležité detaily
- Logo: /public/images/logo.png — PNG s průhledným pozadím, emerald barva. Nesmí mít žádné pozadí/rámeček — čistě průhledné na tmavém navbaru
- Navbar je fixed, po scrollu přidá backdrop-blur + tmavší pozadí
- Hero floating karty (Recovery 77%, ApoB 1.02) se na mobilu (<640px) skrývají
- Phone-frame screenshoty mají zaoblený rámeček simulující mobil
- FAQ je accordion s +/× toggle animací
- Scroll reveal animace na sekcích (IntersectionObserver)
- Citát: "Celý život mi říkali, co nemůžu. Tak jsem jim ukázal, co můžu. Teď to samé dělám pro své klienty." — Jakub Nosek
- Kontaktní email: jakub.nosek@biostrategy.co
- Responzivní: desktop (2-column grid), tablet (1-column), mobil (full-width, credentials 2×2 grid)

## PRAVIDLA
- Neměň žádné texty ani design oproti HTML prototypu, pokud to výslovně neřeknu
- Všechny obrázky dej do /public/images/
- Použij 'use client' jen tam kde je to nutné (interaktivní komponenty: Navbar, FAQ, Hero floating cards, lang switch)
- Neměň žádné jiné soubory ani logiku mimo scope tohoto tasku
- Po dokončení vytvoř CLAUDE.md s popisem projektu, struktury a deploy postupu
- Pushni finální verzi na GitHub a deploň na Vercel
