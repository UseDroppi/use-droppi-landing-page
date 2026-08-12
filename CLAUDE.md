# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check via `tsc -b` then build with Vite
- `npm run lint` — run Oxlint
- `npm run preview` — preview the production build locally

There is no test runner configured in this project.

## Architecture

This is a Vite + React 19 + TypeScript single-page app (landing page for "Droppi"), currently at the default `create-vite` scaffold stage — most of the app still lives in a single component.

- `index.html` — Vite entry point, mounts `#root`
- `src/main.tsx` — React root, wraps `<App />` in `StrictMode`
- `src/App.tsx` — currently the entire page (hero section, next-steps/links section); styled via `src/App.css`
- `src/index.css` — global styles
- `src/assets/` — imported images (bundled by Vite)
- `public/` — static assets served as-is, including `icons.svg` (referenced via `<use href="/icons.svg#...">` for inline SVG icons) and `favicon.svg`

TypeScript project is split via project references (`tsconfig.json` → `tsconfig.app.json` for app source, `tsconfig.node.json` for Vite config).

## Linting

Oxlint is configured in `.oxlintrc.json` with `react`, `typescript`, and `oxc` plugins. Type-aware lint rules are not currently enabled (would require `oxlint-tsgolint`).
