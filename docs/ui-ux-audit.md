# Azevsm Systems — Full Website UI/UX Audit

## Audit control

- Source branch: `website-v6`
- Source HEAD: `b0648192970ee9a308fcaf5af022580a892ef8aa`
- Audit / working branch: `website-v7`
- Rule: `website-v6`, `website-v5`, `website-v4`, `main` and all other branches are read-only for this audit.
- Audit mode: inspect and measure before product changes.
- Current audit status: **PHASE 1 COMPLETE / PHASE 2 RUNNING / PRODUCT FIXES NOT STARTED**

## Classification discipline

Only confirmed user-impacting defects or verified execution risks become correction tasks.

- `BLOCKER`: prevents required audit execution or blocks an essential user journey.
- `REAL WATCH`: evidence-backed risk requiring verification or correction.
- `ALREADY COVERED / NO ACTION REQUIRED`: behavior is present and works.
- `STYLE-ONLY / DO NOT SUGGEST`: cosmetic preference with no material UI/UX, accessibility, execution, acceptance, or no-drift impact.
- `OUT OF SCOPE`: unrelated to the active audit.

Severity for verified defects follows the requested P0/P1/P2/P3 scale.

---

# Phase 1 — Project discovery

## 1. Architecture

| Area | Discovered implementation |
|---|---|
| Framework | Next.js 15.4.11, App Router |
| UI | React 19.1 |
| Language | TypeScript, strict mode |
| CMS | Payload 3.90.2 |
| Database | SQLite adapter |
| Styling | Large global stylesheet plus RU V5 CSS module |
| Fonts | Manrope, Noto Sans Arabic, Noto Sans SC, IBM Plex Mono via `next/font` |
| Images | JPG / PNG / WebP / SVG assets in `public/` |
| Rendering | Server-rendered / statically generated site routes with client components for interactions |
| Deployment | Vercel integration |
| Search | Server-rendered site search route using `lib/site-search` |
| CMS/admin | `/admin` and `/studio` |
| Public assistant | Client UI using `/api/assistant` |
| Contact | Client form using `/api/contact` |

## 2. Localization model

Materialized content locales:

- `ru`
- `en`
- `az`
- `ar`
- `zh`

Declared future/site locales which are not materialized and are intentionally presented as unavailable/pending:

- `tr`
- `tk`
- `uz`
- `ky`
- `kk`
- `de`
- `it`
- `fr`

Arabic is configured RTL. Middleware redirects non-materialized locale routes to `/en`.

## 3. Route inventory

### Public localized route families

| Route family | Expected locale coverage | Audit status |
|---|---:|---|
| `/[locale]` | 5 | responsive run pending |
| `/[locale]/platform` | 5 | responsive run pending |
| `/[locale]/products` | 5 | responsive run pending |
| `/[locale]/products/azevsm-index` | 5 | responsive run pending |
| `/[locale]/products/azevsm-institutional-index` | 5 | responsive run pending |
| `/[locale]/products/azevsm-plus` | 5 | responsive run pending |
| `/[locale]/products/azevsm-plus/[service]` | 7 services × 5 locales | responsive run pending |
| `/[locale]/technology` | 5 | responsive run pending |
| `/[locale]/white-box` | 5 | responsive run pending |
| `/[locale]/trust` | 5 | responsive run pending |
| `/[locale]/company` | 5 | responsive run pending |
| `/[locale]/insights` | 5 | responsive run pending |
| `/[locale]/insights/traceability` | 5 | responsive run pending |
| `/[locale]/insights/boundaries` | 5 | responsive run pending |
| `/[locale]/contact` | AR/ZH rendered; RU/EN/AZ intentionally call notFound in page code | responsive run pending |
| `/[locale]/enter` | 5 | responsive run pending |
| `/[locale]/search` | 5 | responsive run pending |
| `/[locale]/legal/privacy` | 5 | responsive run pending |
| `/[locale]/legal/terms` | 5 | responsive run pending |
| `/[locale]/legal/cookies` | 5 | responsive run pending |
| `/[locale]/legal/security` | 5 | responsive run pending |
| `/[locale]/legal/accessibility` | 5 | responsive run pending |
| Authority route set: result-system / difference / index-field / validation / data-security / legal-compliance | RU/EN/AZ only | responsive run pending |

### Plus service slugs

1. `budget-analysis`
2. `investment-analysis`
3. `financial-resilience`
4. `institutional-risk-contours`
5. `advanced-governance-analysis`
6. `product-rights-integrity`
7. `sustainability-external-impact`

### Non-public / operational routes

- `/` → middleware redirect to `/en`
- `/admin` → Payload admin
- `/studio` → editorial/publishing studio
- `/api/contact`
- `/api/assistant`
- `/api/seed`
- Payload API catch-all

The responsive audit enumerates the generated sitemap plus root, studio, and admin. Search is tracked separately because it is not in the sitemap.

## 4. Shared components discovered

- Header / desktop navigation / mobile navigation
- Footer
- Language selector
- Hero systems
- RU pilot / authority hero
- RU V5 home
- Buttons and text links
- Product and authority cards
- Page intro blocks
- Image/photo bands
- Contact form
- Cookie banner
- Public support assistant
- Search form/results
- Legal document rendering
- Authority document rendering
- Error / not-found states

No site-wide sidebar system, tabs, carousel, or pagination component was discovered in the current route tree.

## 5. Styling / responsive architecture

### Global stylesheet

`app/globals.css`

- ~312,976 characters
- 11,095 lines
- 106 media-query blocks
- 1,006 `!important` declarations
- many repeated breakpoint layers, especially 680/681 and 1024/1025
- 290 explicit pixel `height` declarations
- 130 explicit pixel `min-height` declarations
- 26 `overflow: hidden` declarations
- mojibake is present in historical CSS comments

### RU V5 home module

`components/ru-v5-home.module.css`

- ~55,917 characters
- 1,607 lines
- 24 media-query blocks
- 128 `!important` declarations

**Classification: REAL WATCH — architecture consistency risk.**

This is not yet a correction task by itself. The responsive run must identify actual user-visible failures that map back to the cascade before any cleanup is adopted.

## 6. Existing design references / assets

The repository contains:

- dedicated desktop/mobile hero background pairs for core page families;
- RU V5 desktop/mobile hero backgrounds;
- founder icon image sets;
- company, product, security, institutional, platform, technology, trust and white-box imagery;
- shared logo mark;
- multiple RU-specific icon systems.

This indicates a deliberate institutional dark / glass / deep-blue visual system rather than a generic component-library skin.

---

# Phase 2 — Responsive design audit

## Viewport matrix

### Desktop

- 1920 × 1080
- 1600 × 900
- 1440 × 900
- 1366 × 768
- 1280 × 800

### Tablet

- 1024 × 1366
- 1024 × 768
- 768 × 1024
- 820 × 1180

### Mobile

- 430 × 932
- 390 × 844
- 375 × 812
- 360 × 800

## Rendered-test method

A Chromium audit harness has been added on `website-v7` only.

For every sitemap route and every viewport above it records:

- HTTP status and final URL
- document/client width
- horizontal overflow
- elements escaping viewport bounds
- clipped non-wrapping text
- broken images
- heading sequence
- small interactive targets
- fixed/sticky elements
- console errors
- uncaught page errors
- failure screenshots

Representative screenshots are also captured for core templates.

### Current run state

`RUNNING` — results will be merged into this report before any broad product implementation starts.

---

# Confirmed initial findings from source inspection

## SEO-001 — hreflang generation points to locale variants that do not exist

- Component: shared metadata helper `lib/seo.ts`
- Category: SEO / localization
- Severity: **P2**
- Classification: **REAL WATCH**
- Observed: `pageMetadata()` emits language alternates for all five content locales for every route.
- Impact: authority pages exist only for RU/EN/AZ, yet their metadata advertises AR/ZH alternates that resolve to not-found. Contact is rendered only for AR/ZH, while metadata/sitemap logic can advertise unavailable pilot-locale variants.
- Expected: hreflang set should contain only physically available locale variants for that route.
- Root cause: route availability is not passed into the shared metadata helper.
- Recommended correction: make alternates route-aware and derive them from an accepted availability map rather than globally from all content locales.
- Shared scope: multiple authority routes and contact.

## SEO-002 — sitemap includes contact routes that the page code intentionally rejects

- Component: `app/sitemap.ts` + contact page
- Category: SEO / route integrity
- Severity: **P2**
- Classification: **REAL WATCH**
- Observed: sitemap suppresses only `/ru/contact`, but contact page calls `notFound()` for all pilot locales RU/EN/AZ.
- Affected sitemap URLs: at minimum `/en/contact` and `/az/contact`.
- Expected: sitemap must not list routes that intentionally return 404.
- Root cause: sitemap availability rule differs from page availability rule.
- Recommended correction: centralize route availability and use it for both rendering and sitemap generation.

## A11Y-W01 — language selector ARIA menu semantics require keyboard-pattern verification

- Component: `components/language-menu.tsx`
- Category: accessibility / interaction
- Status: manual verification required
- Classification: **REAL WATCH**
- Evidence: component declares `role="menu"` / `role="menuitem"` but source does not implement roving focus or arrow-key menu navigation.
- Action: verify keyboard behavior in rendered browser before assigning final WCAG severity.

## A11Y-W02 — assistant dialog focus behavior requires manual verification

- Component: `components/assistant.tsx`
- Category: accessibility / interaction
- Status: manual verification required
- Classification: **REAL WATCH**
- Evidence: panel is exposed as `role="dialog"`; source does not visibly implement focus entry/return behavior.
- Action: verify focus order, Escape/close behavior, and mobile viewport interaction before assigning severity.

## FORM-W01 — contact form error recovery requires rendered verification

- Component: `components/contact-form.tsx`
- Category: UX / accessibility
- Status: manual verification required
- Classification: **REAL WATCH**
- Evidence: form uses `noValidate`, required controls, server response mapping and one form-level alert.
- Action: verify empty/invalid email flows, field discoverability, focus behavior and whether server errors provide enough corrective information.

---

# Test / build status

Verified on `website-v7` audit workflow:

- `npm ci` — PASS
- content gate — PASS
- lint — PASS
- production build — PASS
- Chromium viewport matrix — RUNNING

No product/UI correction batch has started yet.

---

# Implementation status

**STOP — audit-first gate active.**

No broad visual rewrite, CSS cleanup, responsive patch, accessibility modification or content change will be introduced until the initial rendered Phase 2 evidence is complete and findings are prioritized by actual impact.
