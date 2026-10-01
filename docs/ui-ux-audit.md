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


---

## Phase 2 rendered responsive audit — completed baseline

### Measured coverage

Chromium rendered audit completed successfully on `website-v7`.

- Discovered/tested routes: **160**
- Required viewport sizes: **13**
- Required route × viewport combinations: **2,080**
- Raw harness PASS: **1,930**
- Raw harness FAIL: **150**
- Breakpoint probe: **144 additional rendered checks** across 16 intermediate widths and 9 representative routes.
- Build / lint / content gate: **PASS**

The 150 raw failures were manually triaged. Most are detector false positives or intentional states; they are not being converted into correction tasks merely because the harness marked them.

### Raw-failure triage

| Raw group | Count | Classification | Disposition |
|---|---:|---|---|
| Search pages: visually hidden `.sr-only` label has 1px client width | 65 | ALREADY COVERED / NO ACTION REQUIRED | Accessibility pattern is intentional; detector false positive |
| EN/AZ/root home: decorative `.hero-photo` extends slightly beyond its clipping box while document width remains stable | 30 | ALREADY COVERED / NO ACTION REQUIRED | No page horizontal scroll; art-direction behavior |
| RU/EN/AZ “how AzevsmAI is different”: wide data table inside `.ru-pilot-table-wrap` | 12 | ALREADY COVERED / NO ACTION REQUIRED | Wrapper has `overflow-x:auto` and mobile scroll hint; horizontal table interaction is intentional |
| EN/AZ contact | 26 | REAL WATCH — SEO/route integrity | Page intentionally returns 404, but sitemap/metadata availability is inconsistent |
| Payload `/admin` | 13 | BLOCKER — audit environment | Test DB had no `users` table; admin UI cannot be visually certified from this run |
| `/studio` mobile | 4 | REAL WATCH — P1 | Genuine horizontal overflow / clipped operational UI |

### Responsive findings

#### UI-RESP-001 — RU shared header collides on phone widths

- Page/component: shared RU corporate header; visible on `/ru`, company, legal, authority and other RU routes
- Verified viewport: **390 × 844** screenshot; same shared header affects 360/375/430 widths
- Category: responsive navigation
- Severity: **P1 — High**
- Classification: **REAL WATCH**
- Observed: company wordmark, globe/language controls and menu control occupy the same horizontal region; text/icons visually collide.
- Evidence: rendered Chromium baseline screenshot `mobile-390x844/ru.png` and `mobile-390x844/ru__company.png`.
- Expected: one clean compact mobile header with non-overlapping wordmark, locale access and menu.
- Likely root cause: multiple late RU V5 header layers keep direct RU/EN/AZ controls while also rendering compact/current-locale and menu controls.
- Recommended correction: at phone widths show one compact locale control and menu; suppress redundant direct-locale row in the closed header.

#### UI-RESP-002 — RU desktop-nav gate overlaps at 861–901 px

- Page/component: shared RU corporate header
- Verified viewports: **861 × 1000, 899 × 900, 900 × 900, 901 × 900**
- Category: responsive navigation / breakpoint transition
- Severity: **P1 — High**
- Classification: **REAL WATCH**
- Observed: wordmark overlaps “Платформа”; “Компания” overlaps RU locale control.
- Evidence: breakpoint DOM overlap measurements. At 861 px, overlap areas measured 2,232 px² and 881 px².
- Expected: tablet/compact navigation until there is enough room for full desktop navigation.
- Likely root cause: a late `@media (min-width: 861px)` desktop gate overrides the pre-existing compact/tablet header behavior.
- Recommended correction: align the desktop gate to the established tablet boundary instead of forcing full navigation at 861 px.

#### UI-RESP-003 — Standard non-RU header overlap immediately above desktop breakpoint

- Page/component: standard header (verified on EN)
- Verified viewport: **1181 × 900**
- Category: responsive navigation / breakpoint transition
- Severity: **P1 — High**
- Classification: **REAL WATCH**
- Observed: “Search” and “Enter AzevsmAI” overlap; measured overlap area 1,410 px².
- Expected: compact navigation should remain active until the desktop header fits without collision.
- Likely root cause: desktop mode begins one pixel after the 1180 compact-header breakpoint while the available width is still insufficient.
- Recommended correction: move the non-RU desktop activation point upward to a measured safe width; re-test around the new boundary.

#### UI-RESP-004 — Studio is not usable on mobile

- Page/component: `/studio`
- Verified viewports: **430 × 932, 390 × 844, 375 × 812, 360 × 800**
- Category: responsive operational UI
- Severity: **P1 — High**
- Classification: **REAL WATCH**
- Observed: page has document-level horizontal scrolling. At 390 px, primary content is approximately 600 px wide; service table and claims content are clipped off-screen.
- Evidence: harness `horizontalOverflow=true`; failure screenshots for all four mobile widths.
- Expected: operational page content should fit the viewport; wide tables may scroll inside their own wrapper without making the whole page scroll.
- Likely root cause: generic `.prose` / table content has desktop minimum geometry and the Studio page has no dedicated responsive wrapper.
- Recommended correction: give Studio a bounded responsive content class and wrap the service table in an internal horizontal scroller.

#### UI-A11Y-001 — Legal document body has severe low-contrast color mismatch

- Page/component: RU legal privacy/terms content using `ru-legal-stage1 ru-authority-section`
- Verified viewports: **1440 × 900 and 390 × 844**
- Category: accessibility / readability / cascade
- Severity: **P1 — High**
- Classification: **REAL WATCH**
- Observed: dark navy headings and muted dark body copy render over the later dark authority-section background and dark glass wrapper; text becomes very difficult to read.
- Evidence: rendered screenshots `desktop-1440x900/ru__legal__privacy.png` and `mobile-390x844/ru__legal__privacy.png`.
- Expected: legal body copy must maintain strong text/background contrast.
- Root cause: later global authority-theme rules with `!important` override the earlier white legal section/wrapper backgrounds, while legal-specific text colors remain dark.
- Recommended correction: explicitly exclude/override `.ru-legal-stage1` from the dark authority surface theme after the authority theme layer.

### Route / SEO findings

#### SEO-001 — hreflang advertises unavailable locale variants

Status: **P2 / REAL WATCH**.

Authority pages are physically available only in RU/EN/AZ, but the shared metadata helper builds alternates from all content locales. AR/ZH alternates can therefore point to non-existent route variants.

#### SEO-002 — sitemap lists contact routes that intentionally return 404

Status: **P2 / REAL WATCH**.

Rendered audit confirmed `/en/contact` and `/az/contact` return 404 at all 13 required viewports. The contact page explicitly rejects pilot locales, while sitemap generation does not use the same availability rule.

### Audit-environment blocker

#### EXEC-001 — Payload admin cannot be certified in the current isolated audit DB

- Route: `/admin`
- Severity: not assigned as a production defect
- Classification: **BLOCKER**
- Observed: HTTP 500 in the audit environment.
- Server evidence: SQLite error `no such table: users`.
- Boundary: this proves the isolated audit database was not initialized; it does **not** prove production admin is broken.
- Required closure: initialize a disposable Payload schema/data set and re-run admin at representative desktop/tablet/mobile widths.

### Manual accessibility watches still open

- `A11Y-W01`: language menu uses ARIA menu/menuitem semantics; arrow-key/roving-focus behavior requires manual keyboard verification.
- `A11Y-W02`: assistant uses `role="dialog"`; focus entry, focus return and Escape behavior require manual verification.
- `FORM-W01`: contact form validation/error recovery requires rendered interaction testing.

---

# Root-cause analysis

1. **Late CSS cascade overrides earlier component intent — REAL WATCH.**  
   The global stylesheet is 11k+ lines with many appended responsive/visual layers and more than 1,000 `!important` declarations. Confirmed consequences include the legal-surface contrast failure and conflicting RU header breakpoints. This is not a request for general CSS cleanup; only shared cascade causes tied to verified defects are correction targets.

2. **Breakpoint ownership is inconsistent — REAL WATCH.**  
   Base navigation switches at 1024, pilot behavior has an 1180 boundary, while a later RU layer forces desktop navigation at 861. Confirmed transition collisions occur because these gates compete.

3. **Route availability is duplicated — REAL WATCH.**  
   Page rendering, sitemap and metadata do not use one canonical availability contract, causing contact/alternate inconsistencies.

4. **Operational Studio lacks its own responsive boundary — REAL WATCH.**  
   Desktop content/table geometry is inherited without an internal table-scrolling contract.

---

# Prioritized implementation plan

## Batch 1 — P1 shared responsive/readability defects

1. Fix RU corporate header phone collision.
2. Fix RU 861–901 breakpoint collision by reconciling the desktop gate with the established tablet boundary.
3. Fix standard header transition above 1180.
4. Restore legal-stage readable surface/contrast without altering legal content.
5. Make Studio responsive and contain table overflow.

Acceptance: re-run affected routes at exact failing dimensions plus adjacent breakpoint dimensions; do not mark PASS from source changes alone.

## Batch 2 — route/SEO integrity

1. Centralize route locale availability.
2. Remove unavailable contact URLs from sitemap.
3. Emit hreflang only for physical route variants.

Acceptance: sitemap URLs must resolve; alternates must not point to deliberate 404s.

## Batch 3 — accessibility interaction verification

1. Keyboard test language selector.
2. Focus-entry/return/Escape test assistant dialog.
3. Contact validation/error-recovery test.
4. Apply code corrections only where failures are reproduced.

## Batch 4 — final regression

Re-run all 160 discovered routes across the 13 required viewports, re-run breakpoint probes, then update final PASS/FAIL matrix and change log.


---

## User screenshot evidence — 2026-10-01

Founder review supplied 10 rendered screenshots from the current website. These are direct visual evidence and override any earlier “not reproduced” assumption for the affected surfaces.

### UI-A11Y-002 — dark list/card body text is unreadable

- Affected examples: White Box, Azevsm Index, Azevsm Institutional Index, Index Field / investor ecosystem.
- Severity: **P1**
- Classification: **REAL WATCH**
- Evidence: screenshots 1, 2, 3 and 5.
- Observed: list-card backgrounds use the dark authority treatment while `li` keeps the earlier light-theme dark ink value.
- Root cause: later dark-surface rule colors the parent `ul`, but an earlier more-specific `.ru-pilot-blocks > ul li` declaration remains active on the child.
- Correction: explicit light body color for list items inside dark authority/product/existing-authority sections.

### UI-NAV-002 — RU corporate header hides access to additional languages

- Component: shared RU corporate header.
- Severity: **P1**
- Classification: **REAL WATCH**
- Evidence: screenshot 1.
- Observed: RU/EN/AZ are visible, but the “Языки” / additional-language control is hidden, so supported AR/ZH and pending-language status are not discoverable from the header.
- Correction: restore a visible Languages plaque on tablet/desktop; retain compact current-locale control on phone widths.

### UI-HERO-003 — landscape hero lead loses contrast over bright image regions

- Affected example: Result System.
- Severity: **P2**
- Classification: **REAL WATCH**
- Evidence: screenshot 4.
- Observed: subtitle crosses a bright horizon and loses separation.
- Correction: stronger lead opacity/text shadow without changing copy or hero geometry.

### UI-A11Y-003 — Insights list surface has insufficient text/background separation

- Route: RU Insights.
- Severity: **P1**
- Classification: **REAL WATCH**
- Evidence: screenshot 6.
- Observed: the large list panel reads as a washed-out light rectangle and list text is not comfortably readable inside the dark authority composition.
- Root cause: light-theme Insights list surface survives inside the later dark authority section.
- Correction: use the existing dark authority glass surface and explicit light list text.

### UI-HERO-004 — thematic hero photo missing on confirmed routes

- Severity: **P2**
- Classification: **REAL WATCH**
- Evidence: screenshots 6–10.
- Confirmed routes/surfaces:
  - Insights
  - Terms
  - Cookies
  - Security
  - Validation / reproducibility
- Existing repository assets are available; no new visual generation is required.
- Correction mapping uses only existing accepted asset families:
  - Insights → Technology landscape
  - Terms / Cookies → Legal landscape
  - Security → Data-security landscape
  - Validation → Trust landscape

No product semantics or page copy are changed by this batch.
