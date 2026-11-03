# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page portfolio/landing site for STELLA& (스텔라앤): short-form vertical video adaptations of webtoon/web-novel/manga IP. Vite + React 18 + TypeScript + Tailwind 3 + framer-motion, optional Supabase backend. Code comments and default copy are Korean.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (type-check is the only static check; no linter or test suite exists)
- `npm run preview` — serve built `dist/`

TS is `strict` with `noUnusedLocals`/`noUnusedParameters`, so unused imports/params fail the build.

## Architecture

**Page composition** — `src/App.tsx` stacks sections in order: Header, Hero, CategoryAI, two `Showcase` instances (`audio` = 9:16 grid, `motion` = square grid), CTASection, Footer. Section `id`s (`audio-webtoon`, `motion-toon`, …) are nav anchor targets used by Header.

**Content data flow (static fallback + optional Supabase override)**
- `src/data/showcases.ts` holds the canonical work lists as `LocalizedWork` (every text field is `Record<Locale, …>`), exposed via `getAiSamples/getAudioWorks/getMotionWorks(locale)` which flatten to the `Work` type defined in `src/components/Showcase.tsx`.
- Media (posters, QR codes, videos, logo) are hard-coded public Supabase Storage URLs (`thumbnails`, `qr-codes`, `videos` buckets). `public/` is gitignored — it is only an upload staging area, not served assets.
- `src/hooks/useWorks.ts` queries the Supabase `works` table by `category` (`ai|audio|motion`, ordered by `sort_order`). If Supabase env is missing, the query errors, or returns zero rows, the static fallback is used. `src/lib/supabase.ts` exports `supabase = null` when env vars are absent.
- Caveats when touching this path: remote rows are not localized (single `title`/`platform`/`stats`), and `WorkRow` has no QR field, so remote works lose `qrUrl`. The `TONES` gradient fallbacks reference `amber`/`star` colors that are not defined in `tailwind.config.ts`.

**i18n** — `src/i18n/`: locales `ko` (default), `en`, `ja`. `dictionary.ts` defines `ko` as the source of truth; `en`/`ja` are typed `typeof ko`, so adding a key to `ko` requires adding it to all three. `LanguageProvider` persists choice in `localStorage` (`stella-locale`) and sets `<html lang>`. Components read `const { locale, t } = useLanguage()`. Multi-line highlighted headings use `TitleLine[]` (arrays of `{ text, highlight? }` segments). Static work data is localized separately in `showcases.ts`, not in the dictionary.

**Styling** — Brand palette lives in `tailwind.config.ts` (`canvas` dark navy page bg, `ink` logo navy, `accent` pink family, `paper`, `muted`, `line`), plus `font-display` (IBM Plex) vs default `font-sans` (Pretendard, loaded from CDN in `index.html`), `ease-fluid` timing, and `animate-marquee`. Global CSS and `.grain-overlay` in `src/index.css`. Use these tokens rather than raw hex.

**Motion** — `src/components/Reveal.tsx` is the shared scroll-in wrapper (opacity/translate/blur, once, same cubic-bezier as `ease-fluid`). Prefer wrapping with it over ad-hoc framer-motion entrances.

## Environment

Copy `.env.example` to `.env` and set `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`; omitting them is valid and runs on static data. Deployed on Vercel (`.vercel` gitignored).
