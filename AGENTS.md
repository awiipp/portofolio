# portofolio — AGENTS.md

Single-page personal portfolio (Vite + React 19 + TypeScript 6.0 + Tailwind v4 + Framer Motion).

## Commands

```sh
npm run dev       # Vite dev server
npm run build     # tsc -b && vite build  (both steps required)
npm run lint      # eslint .
npm run preview   # vite preview
```

No test framework is set up.

## Architecture

- **Entry**: `src/main.tsx` → `App.tsx` → `pages/LandingPage.tsx`
- **No router** — anchor links only (`#home`, `#projects`, `#stack`, `#contact`)
- Components in `src/components/`: `Navbar`, `HeroSection`, `PhotoCard`, `TerminalLine`
- `App.css` is empty / unused — all styling is in `index.css` + Tailwind utility classes

## Framework quirks

- **Tailwind v4**: Uses `@import "tailwindcss"` in CSS (NOT the old `@tailwind base/components/utilities` directives)
- **TypeScript project references**: `tsconfig.app.json` covers `src/`, `tsconfig.node.json` covers `vite.config.ts`
- **`verbatimModuleSyntax: true`** — use `import type`/`export type` for type-only imports/exports
- **`erasableSyntaxOnly: true`** — no enums, no namespaces, no parameter properties
- **HeroSection.jsx** is the lone `.jsx` file (others are `.tsx`); keep consistency with `.tsx` for new files
