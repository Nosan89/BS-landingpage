# BioStrategy Landing Page

Landing page pro biostrategy.co — health coaching Jakuba Noska.

> **Copy přepis (positioning):** Landing page copy přepsána dle nového positioningu: operating system framing, dvě fáze spolupráce (iniciační fáze + performance partnerství), Founding Client Program, statistiky bez konkrétních čísel.
>
> **Update:** Sekce "Jak to funguje" přepsána na 5 karet (Realita / Data / Systém / Vedení / Partnerství). Přidána nová sekce "Zní to povědomě?" (5 objection karet) za třísloupcovou sekci.
>
> **Opraveno:** hero subheadline CS (operační systém), text sekce osobního příběhu (meningitida ve 3 letech, ZOH 26 Cortina), sekce Kompletní systém (odstraněna zmínka 12 týdnů).
>
> **Update:** Sekce "Jak to funguje" přesunuta za osobní příběh a před Kompletní systém. Opraven překlep "efective" → "effective".
>
> **Barvy:** Barvy landing page přehozeny z emerald (zelená) na navy/gold paletu konzistentní s BioStrategy platformou. Accent: #d4a84b. Emerald tokeny i hardcoded hex nahrazeny napříč globals.css i komponentami (#10b981→#d4a84b, #34d399→#e8be6a, #059669→#b8923a, glow rgba(16,185,129,…)→rgba(212,168,75,…)); CSS tokeny přejmenovány `--color-emerald*`→`--color-gold*` a `--emerald-glow*`→`--gold-glow*`. Navy a sémantické barvy (danger #ef4444) beze změny.
>
> **Update:** Logo nahrazeno za zlatou verzi (logo_transparent_gold.png). Počet pilotních míst změněn z 10 na 5 (řízeno ENV var `NEXT_PUBLIC_PILOT_SPOTS_REMAINING` - nastavit hodnotu `5` ve Vercelu; v kódu se počet nikde nezadává natvrdo).
>
> **Update:** Sekce "Časovaná bomba" (`Problem`) a "Proč data, ne dojmy" (`Comparison`) zakomentovány v page.tsx (zachovány pro případné obnovení).
>
> **Update:** Opraveny texty karet "Jak to funguje": poznám (ne poznáme), odkud začneme, týdně, první měsíc.
>
> **Update:** Záložka "Tréninková appka" odstraněna z tech sekce landing page. Screenshot protokolů nahrazen za /images/protokoly.png.
>
> **Update:** Textové úpravy: announcement banner (pilotní fáze, bez čísla míst), founding client (3 místa), FAQ — přepsány všechny odpovědi (Pro koho, Kolik to stojí, Praha, Wearable, Proč ty).
>
> **Update:** Badge "Přijímám nové klienty" odstraněn z hero sekce — informaci zajišťuje announcement banner.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (PostCSS plugin, bez tailwind.config.js)
- **Deploy:** Vercel
- **Doména:** biostrategy.co (nastavit ručně na Vercelu)

## Struktura

```
app/
  layout.tsx              — Bebas Neue + Manrope fonty, metadata, LangProvider + ModalProvider + Navbar + AnnouncementBanner; pořadí v body: <Navbar /> → <AnnouncementBanner /> → <main>{children}</main>
  page.tsx                — hlavní landing page + QuestionnaireModal; pořadí sekcí: Hero → Pillars → SoundFamiliar → Credentials → Problem → Comparison → [InlineCTA] → Testimonials → [InlineCTA] → Story → Process → Services → Platform → [InlineCTA] → FoundingClient → FAQ → FinalCTA → Footer; Navbar a AnnouncementBanner jsou v layout.tsx, ne zde
  globals.css             — Tailwind v4 import, CSS custom properties, animace
  api/questionnaire/route.ts — POST endpoint, odesílá email přes Resend
  podminky/page.tsx       — obchodní podmínky (placeholder)
  ochrana-soukromi/page.tsx — GDPR / privacy (placeholder)

components/
  LangContext.tsx         — CZ/EN context + useLang hook
  ModalContext.tsx        — modal open/close context + useModal hook
  QuestionnaireModal.tsx  — 4-krokový kvalifikační dotazník (modal overlay)
  AnnouncementBanner.tsx  — subtilní proužek těsně pod Navbar; position: fixed, top reaguje na scroll (68px bez scrollu / 56px po scrollu, odpovídá výšce Navbaru), z-index: 50 (pod Navbarem); pozadí navy-light (#0f1f38), bílý text, emerald border-bottom a bold důraz v emerald (#34d399); zobrazuje se jen pokud je nastavena ENV var NEXT_PUBLIC_PILOT_SPOTS_REMAINING; CZ/EN přes useLang(); text CS: "Aktuálně přijímám nové klienty. Zbývá {spots} míst za pilotní cenu." / EN: "Now accepting new clients. {spots} spots left at pilot pricing."; bez border; {spots} zvýrazněno emerald + bold
  Navbar.tsx              — fixed nav, scroll effect, lang switch, CTA
  Hero.tsx                — headline (operating system positioning), CTA, profile photo, floating cards
  Pillars.tsx             — 3 sloupce pod hero ("Data nestačí" / "Tělo jako infrastruktura" / "Lidský dohled"); navy-light pozadí, karty navy-deep; čistě copy + ScrollReveal, žádné ikony
  SoundFamiliar.tsx       — sekce "Zní to povědomě?" za Pillars (navy-deep pozadí); 5 objection karet (navy-light, emerald levý border) — kurzíva citát/námitka + odpověď; grid repeat(3,1fr), na mobilu 1 sloupec
  Credentials.tsx         — 4 credentials (olympionik, fyzio, S&C, platforma); ikony: Trophy, Stethoscope, Dumbbell, LayoutDashboard (lucide-react)
  Story.tsx               — timeline (9 položek) + fotky + citát; první 3 (1993, 2001, 2014) viditelné, zbytek (2015-2026) za tlačítkem "Celý příběh ↓" (useState expand)
  Problem.tsx             — nadpis "Úspěch bez zdraví je časovaná bomba" + text (bez konkrétních čísel; původní statistiky 72%/2×/35 odstraněny)
  Comparison.tsx          — tabulka Běžný trenér vs BioStrategy; 9 řádků vč. "Dlouhodobá udržitelnost" (Intenzivní program, pak konec vs. Návyky, které fungují i po skončení spolupráce); indikátory: lucide X (červený sloupec) / Check (emerald sloupec)
  Testimonials.tsx        — klientské reference; pole testimonials (cs/en objekt s quote, name, role); mapuje přes pole, připraveno na více položek; dekorativní emerald uvozovka vlevo nahoře; navy-deep pozadí; karty navy-light
  Services.tsx            — 4 service karty; každá karta zobrazuje ikonu + název + první větu, zbytek + tagy za tlačítkem "Více ↓" (nezávislý useState per karta); ikony: Watch, Droplet, Scan, Dumbbell (lucide-react); podtitulek obsahuje 2 odstavce — druhý: "Žádné 12týdenní výzvy. Stavíme návyky, které fungují i po ukončení spolupráce."; karta "TRÉNINK & PROTOKOLY" — první věta: "Individuální tréninkový plán přes TrainHeroic." / "Individual training plan via TrainHeroic."
  Platform.tsx            — tabs layout (3 taby: Coach Dashboard / Krevní markery / Health protokoly, 1 screenshot najednou); přepínání přes useState activeTab, taby horizontálně scrollovatelné na mobilu; každý tab zobrazuje benefit větu zaměřenou na klienta (ne feature list); headline: "VŠECHNA TVOJE DATA NA JEDNOM MÍSTĚ." / "ALL YOUR DATA IN ONE PLACE."; caption pod obsahem: "Klient nevidí chaos. Vidí priority."
  InlineCTA.tsx           — inline pruh s CTA tlačítkem (props: cs, en text); průhledné pozadí, emerald horní linka (opacity 20%); otvírá QuestionnaireModal přes useModal(); použit po Comparison, Testimonials a Platform; tlačítko má identický styl jako Navbar CTA (font-body, 13px, weight 800, uppercase)
  Process.tsx             — 5 karet (01 Realita / 02 Data / 03 Systém / 04 Vedení / 05 Partnerství); každá karta: velké muted číslo (emerald opacity 0.15) + titulek + text + zvýrazněná věta (emerald-bright, weight 600); grid repeat(3,1fr), na mobilu 1 sloupec; pod sekcí CTA tlačítko "CHCI ZAČÍT PRVNÍM KROKEM →" / "START WITH THE FIRST STEP →" (btn-primary, otvírá QuestionnaireModal přes useModal); nadpis: "JAK TO FUNGUJE" / "HOW IT WORKS"
  FAQ.tsx                 — accordion; 6 otázek vč. "Nechceš rovnou skočit do plného systému?" (osobní trénink bez závazku)
  FoundingClient.tsx      — sekce "FOUNDING CLIENT PROGRAM" před FAQ (navy-deep); nadpis + text o zvýhodněných podmínkách pro první klienty + CTA "Domluvit úvodní konzultaci" (otvírá QuestionnaireModal přes useModal)
  FinalCTA.tsx            — závěrečné CTA; pod tlačítkem scarcity řádek: "Spolupráce probíhá na 3měsíční bázi. Kapacita je omezená." (text-sm, opacity 60%, mt-4)
  Footer.tsx              — copyright, links, email
  ScrollReveal.tsx        — IntersectionObserver wrapper

public/
  images/                 — všechny obrázky
```

## Design

- **Colors:** navy-deep `#060e1a`, navy `#0a1628`, navy-light `#0f1f38`, gold `#d4a84b` (accent), gold-bright `#e8be6a` (hover/jasný accent), gold-dark `#b8923a`; danger `#ef4444`. (Pozn.: dřívější emerald paleta nahrazena gold - viz **Barvy** výše. V textu níže může "emerald" označovat dnešní gold accent.)
- **Fonts:** Bebas Neue (display), Manrope (body)
- **Ikony:** `lucide-react` - stroke 1.5, gold `#e8be6a` pro accent ikony, velikost 20px v kartách/credentials, 36px pro placeholder; žádné emoji jako UI elementy
- **Tailwind v4:** konfigurace přes `@theme {}` v globals.css, žádný tailwind.config.js; `navy-light` je plně exportovaná jako utility (`bg-navy-light`)
- **Alternující sekce:** vizuální rytmus střídá navy-deep a navy-light; tmavší (`#060e1a`): Hero, Problem, Testimonials, Services, Process, FinalCTA, Footer; světlejší (`#0f1f38`): Credentials, Comparison, Story, Platform, FAQ; InlineCTA má transparentní pozadí a dědí z kontextu automaticky; karty uvnitř světlejších sekcí používají navy-deep pro inverzní kontrast (viz Comparison tabulka, Story citát); přechody mezi sekcemi jsou ostré, bez gradientů
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
- `protokoly.png` — health protokoly

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
- **ENV var:** `NEXT_PUBLIC_PILOT_SPOTS_REMAINING` — aktuální počet pilotních míst (např. `9`); pokud není nastavena, AnnouncementBanner se nezobrazí
- **Sender:** `noreply@biostrategy.co` — doména biostrategy.co musí být ověřena v Resend dashboardu
- CZ/EN plně podporováno

### CTA texty (aktuální stav)
- **Navbar:** `Vyplnit dotazník` / `Fill in the Questionnaire`
- **Hero (primární tlačítko):** `DOMLUVIT ÚVODNÍ KONZULTACI →` / `BOOK AN INTRO CALL →`
- **FoundingClient (primární tlačítko):** `Domluvit úvodní konzultaci` / `Book an intro call`
- **FinalCTA (primární tlačítko):** `Vyplnit dotazník` / `Take the Questionnaire` — sekundární tlačítko (konzultace) odstraněno
- **FinalCTA (nadpis):** `TVŮJ BYZNYS JEDE NA DATA.<br>ZAČNI TAK ŘÍDIT I SVÉ TĚLO.` / `YOUR BUSINESS RUNS ON DATA.<br>START RUNNING YOUR BODY THE SAME WAY.`
