import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const BASE = process.env.AUDIT_BASE_URL || "http://127.0.0.1:3000";
const outDir = path.resolve("artifacts/ui-audit");
const failDir = path.join(outDir, "screens", "failures");
const baselineDir = path.join(outDir, "screens", "baseline");
const baselineRoutes = new Set(["/ru","/en","/az","/ar","/zh","/ru/platform","/ru/products","/ru/company","/ru/legal/privacy","/ru/products/azevsm-plus/budget-analysis"]);

const viewports = [
  ["desktop-1920x1080", 1920, 1080],
  ["desktop-1600x900", 1600, 900],
  ["desktop-1440x900", 1440, 900],
  ["desktop-1366x768", 1366, 768],
  ["desktop-1280x800", 1280, 800],
  ["tablet-1024x1366", 1024, 1366],
  ["tablet-1024x768", 1024, 768],
  ["tablet-768x1024", 768, 1024],
  ["tablet-820x1180", 820, 1180],
  ["mobile-430x932", 430, 932],
  ["mobile-390x844", 390, 844],
  ["mobile-375x812", 375, 812],
  ["mobile-360x800", 360, 800],
];

const breakpointViewports = [
  ["bp-679x900", 679, 900],
  ["bp-680x900", 680, 900],
  ["bp-681x900", 681, 900],
  ["bp-819x1000", 819, 1000],
  ["bp-820x1000", 820, 1000],
  ["bp-821x1000", 821, 1000],
  ["bp-859x1000", 859, 1000],
  ["bp-860x1000", 860, 1000],
  ["bp-861x1000", 861, 1000],
  ["bp-899x900", 899, 900],
  ["bp-900x900", 900, 900],
  ["bp-901x900", 901, 900],
  ["bp-1024x900", 1024, 900],
  ["bp-1025x900", 1025, 900],
  ["bp-1180x900", 1180, 900],
  ["bp-1181x900", 1181, 900],
];

const breakpointRoutes = [
  "/ru",
  "/en",
  "/ar",
  "/ru/platform",
  "/ru/products",
  "/ru/how-azevsmai-is-different",
  "/ru/company",
  "/ru/legal/privacy",
  "/studio",
];

function safeName(route) {
  if (route === "/") return "root";
  return route.replace(/^\//, "").replace(/[^a-zA-Z0-9_-]+/g, "__").slice(0, 180);
}

async function ensure(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function getRoutes() {
  const routes = new Set(["/", "/studio", "/admin", "/ru/search", "/en/search", "/az/search", "/ar/search", "/zh/search"]);
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap HTTP ${res.status}`);
  const xml = await res.text();
  for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
    const raw = match[1].replaceAll("&amp;", "&");
    const url = new URL(raw);
    routes.add(url.pathname);
  }
  return [...routes].sort();
}

async function inspectPage(page) {
  return await page.evaluate(() => {
    const vw = window.innerWidth;
    const doc = document.documentElement;
    const body = document.body;
    const visible = (el) => {
      const s = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return s.display !== "none" && s.visibility !== "hidden" && Number(s.opacity || 1) !== 0 && r.width > 0 && r.height > 0;
    };
    const label = (el) => ({
      tag: el.tagName.toLowerCase(),
      id: el.id || "",
      cls: typeof el.className === "string" ? el.className.slice(0, 120) : "",
      text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120),
    });

    const overflow = [];
    for (const el of document.querySelectorAll("body *")) {
      if (!visible(el)) continue;
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      if (s.position === "fixed" && (r.left < -2 || r.right > vw + 2)) continue;
      if (r.width > vw * 2.2) continue;
      if (r.left < -2 || r.right > vw + 2) {
        overflow.push({ ...label(el), left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) });
        if (overflow.length >= 20) break;
      }
    }

    const clippedText = [];
    for (const el of document.querySelectorAll("h1,h2,h3,h4,p,button,a,label,summary,li")) {
      if (!visible(el)) continue;
      if (el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).whiteSpace !== "normal") {
        clippedText.push({ ...label(el), scrollWidth: el.scrollWidth, clientWidth: el.clientWidth });
        if (clippedText.length >= 20) break;
      }
    }

    const brokenImages = [];
    for (const img of document.images) {
      if (!img.complete || img.naturalWidth === 0) brokenImages.push({ src: img.currentSrc || img.src, alt: img.alt });
    }

    const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].filter(visible).map(el => ({
      level: Number(el.tagName.slice(1)),
      text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 160),
    }));

    const smallControls = [];
    for (const el of document.querySelectorAll("button,input,select,textarea,summary,[role='button'],a.btn,.menu-button")) {
      if (!visible(el)) continue;
      const r = el.getBoundingClientRect();
      if ((r.width < 24 || r.height < 24) && (el.textContent || "").trim().length < 80) {
        smallControls.push({ ...label(el), width: Math.round(r.width), height: Math.round(r.height) });
        if (smallControls.length >= 20) break;
      }
    }

    const fixed = [...document.querySelectorAll("body *")].filter(el => visible(el) && ["fixed","sticky"].includes(getComputedStyle(el).position)).slice(0,20).map(el => {
      const r = el.getBoundingClientRect();
      return { ...label(el), position:getComputedStyle(el).position, top:Math.round(r.top), bottom:Math.round(r.bottom), height:Math.round(r.height) };
    });

    const headerOverlaps = [];
    const headerControls = [...document.querySelectorAll("header a, header button, header summary")].filter(visible);
    for (let i = 0; i < headerControls.length; i++) {
      for (let j = i + 1; j < headerControls.length; j++) {
        const a = headerControls[i], b = headerControls[j];
        if (a.contains(b) || b.contains(a)) continue;
        const ar = a.getBoundingClientRect(), br = b.getBoundingClientRect();
        const w = Math.max(0, Math.min(ar.right, br.right) - Math.max(ar.left, br.left));
        const h = Math.max(0, Math.min(ar.bottom, br.bottom) - Math.max(ar.top, br.top));
        const area = w * h;
        const minArea = Math.min(ar.width * ar.height, br.width * br.height);
        if (area > 16 && minArea > 0 && area / minArea > 0.08) {
          headerOverlaps.push({ a: label(a), b: label(b), area: Math.round(area) });
          if (headerOverlaps.length >= 20) break;
        }
      }
      if (headerOverlaps.length >= 20) break;
    }

    const tinyInteractiveText = [];
    for (const el of document.querySelectorAll("a,button,summary")) {
      if (!visible(el)) continue;
      const txt = (el.textContent || "").trim().replace(/\s+/g, " ");
      if (!txt) continue;
      const px = parseFloat(getComputedStyle(el).fontSize || "0");
      if (px > 0 && px < 12) {
        tinyInteractiveText.push({ ...label(el), fontSize: px });
        if (tinyInteractiveText.length >= 30) break;
      }
    }

    return {
      title: document.title,
      lang: document.documentElement.lang,
      theme: document.documentElement.dataset.theme || "",
      searchTriggerVisible: (() => {
        const el = document.querySelector("header .site-search-trigger");
        return Boolean(el && visible(el));
      })(),
      themeToggleVisible: (() => {
        const el = document.querySelector("header .presentation-theme-toggle");
        return Boolean(el && visible(el));
      })(),
      companyCtaCount: [...document.querySelectorAll(".ru-existing-section--company .next-actions a")].filter(visible).length,
      heroFingerprint: (() => {
        const hero = document.querySelector("main > .ru-pilot-hero, main > div > section:first-of-type");
        if (!hero || !visible(hero)) return null;
        const s = getComputedStyle(hero);
        const r = hero.getBoundingClientRect();
        const h1 = hero.querySelector("h1");
        const hs = h1 ? getComputedStyle(h1) : null;
        return {
          backgroundColor: s.backgroundColor,
          backgroundImage: s.backgroundImage,
          width: Math.round(r.width),
          height: Math.round(r.height),
          h1Color: hs?.color || "",
          h1FontSize: hs?.fontSize || "",
          h1LineHeight: hs?.lineHeight || "",
        };
      })(),
      dir: document.documentElement.dir || "ltr",
      h1Count: document.querySelectorAll("h1").length,
      headings,
      documentWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      bodyWidth: body.scrollWidth,
      horizontalOverflow: doc.scrollWidth > doc.clientWidth + 2 || body.scrollWidth > vw + 2,
      overflow,
      clippedText,
      brokenImages,
      smallControls,
      fixed,
      headerOverlaps,
      tinyInteractiveText,
    };
  });
}

await ensure(outDir);
await ensure(failDir);
await ensure(baselineDir);

const routes = await getRoutes();
const browser = await chromium.launch({ headless: true });
const results = [];
const baselineViewports = new Set(["desktop-1440x900", "mobile-390x844"]);

for (const [name, width, height] of viewports) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  await context.addInitScript(() => {
    try { localStorage.setItem("azevsm-cookie", "acknowledged"); localStorage.setItem("azevsm-theme", "dark"); } catch {}
  });
  const page = await context.newPage();
  page.setDefaultTimeout(15000);
  let consoleErrors = [];
  let pageErrors = [];
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text().slice(0,500)); });
  page.on("pageerror", (err) => pageErrors.push(String(err).slice(0,500)));

  for (const route of routes) {
    consoleErrors = [];
    pageErrors = [];
    const started = Date.now();
    let status = 0;
    let finalUrl = "";
    let navError = "";
    let metrics = null;
    try {
      const response = await page.goto(`${BASE}${route}`, { waitUntil: "domcontentloaded", timeout: 30000 });
      status = response?.status() || 0;
      finalUrl = page.url();
      await page.waitForTimeout(40);
      metrics = await inspectPage(page);
    } catch (err) {
      navError = String(err).slice(0,1000);
      finalUrl = page.url();
    }

    const failure =
      Boolean(navError) ||
      status >= 400 ||
      (metrics && (
        metrics.horizontalOverflow ||
        metrics.overflow.length > 0 ||
        metrics.clippedText.length > 0 ||
        metrics.brokenImages.length > 0 ||
        metrics.headerOverlaps.length > 0 ||
        metrics.theme !== "dark" ||
        (route.startsWith("/ru") && (!metrics.searchTriggerVisible || !metrics.themeToggleVisible)) ||
        (route === "/ru/company" && metrics.companyCtaCount < 2)
      ));

    const rec = {
      route, viewport: name, width, height, status, finalUrl,
      durationMs: Date.now() - started,
      navError, consoleErrors, pageErrors, metrics,
      result: failure ? "FAIL" : "PASS",
    };
    results.push(rec);

    const slug = safeName(route);
    if (failure) {
      const d = path.join(failDir, name);
      await ensure(d);
      await page.screenshot({ path: path.join(d, `${slug}.png`), fullPage: true }).catch(() => {});
    }
    if (baselineViewports.has(name) && baselineRoutes.has(route)) {
      const d = path.join(baselineDir, name);
      await ensure(d);
      await page.screenshot({ path: path.join(d, `${slug}.png`), fullPage: false }).catch(() => {});
    }
  }
  await context.close();
}
const breakpointResults = [];
for (const [name, width, height] of breakpointViewports) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  await context.addInitScript(() => {
    try { localStorage.setItem("azevsm-cookie", "acknowledged"); localStorage.setItem("azevsm-theme", "dark"); } catch {}
  });
  const page = await context.newPage();
  page.setDefaultTimeout(15000);
  for (const route of breakpointRoutes) {
    let status = 0;
    let navError = "";
    let metrics = null;
    try {
      const response = await page.goto(`${BASE}${route}`, { waitUntil: "domcontentloaded", timeout: 30000 });
      status = response?.status() || 0;
      await page.waitForTimeout(40);
      metrics = await inspectPage(page);
    } catch (err) {
      navError = String(err).slice(0,1000);
    }
    breakpointResults.push({ route, viewport:name, width, height, status, navError, metrics });
  }
  await context.close();
}

const lightRoutes = [
  "/ru",
  "/ru/company",
  "/ru/platform",
  "/ru/products",
  "/ru/technology",
  "/ru/trust",
  "/ru/data-security",
  "/ru/legal-compliance",
  "/ru/validation-reproducibility",
  "/ru/search",
];
const lightViewports = [
  ["desktop-1920x1080", 1920, 1080],
  ["desktop-1440x900", 1440, 900],
  ["desktop-1366x768", 1366, 768],
  ["mobile-390x844", 390, 844],
  ["mobile-360x800", 360, 800],
];
const lightResults = [];
const lightScreenDir = path.join(outDir, "screens", "light");
await ensure(lightScreenDir);

for (const [name, width, height] of lightViewports) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  await context.addInitScript(() => {
    try {
      localStorage.setItem("azevsm-cookie", "acknowledged");
      localStorage.setItem("azevsm-theme", "light");
    } catch {}
  });
  const page = await context.newPage();
  page.setDefaultTimeout(15000);

  for (const route of lightRoutes) {
    let status = 0;
    let navError = "";
    let metrics = null;
    let heroDrift = false;
    try {
      const response = await page.goto(`${BASE}${route}`, { waitUntil: "domcontentloaded", timeout: 30000 });
      status = response?.status() || 0;
      await page.waitForTimeout(40);
      metrics = await inspectPage(page);
      const dark = results.find((row) => row.route === route && row.viewport === name);
      if (dark?.metrics?.heroFingerprint && metrics?.heroFingerprint) {
        heroDrift = JSON.stringify(dark.metrics.heroFingerprint) !== JSON.stringify(metrics.heroFingerprint);
      }
    } catch (err) {
      navError = String(err).slice(0,1000);
    }

    const failure =
      Boolean(navError) ||
      status >= 400 ||
      !metrics ||
      Boolean(metrics && (
        metrics.horizontalOverflow ||
        metrics.overflow.length > 0 ||
        metrics.clippedText.length > 0 ||
        metrics.brokenImages.length > 0 ||
        metrics.headerOverlaps.length > 0 ||
        metrics.theme !== "light" ||
        !metrics.searchTriggerVisible ||
        !metrics.themeToggleVisible ||
        (route === "/ru/company" && metrics.companyCtaCount < 2)
      )) ||
      heroDrift;

    lightResults.push({
      route,
      viewport: name,
      width,
      height,
      status,
      navError,
      metrics,
      heroDrift,
      result: failure ? "FAIL" : "PASS",
    });

    if (name === "desktop-1440x900" || name === "mobile-390x844") {
      const d = path.join(lightScreenDir, name);
      await ensure(d);
      await page.screenshot({ path: path.join(d, `${safeName(route)}.png`), fullPage: false }).catch(() => {});
    }
  }
  await context.close();
}
await fs.writeFile(path.join(outDir, "light-results.json"), JSON.stringify(lightResults, null, 2));

await browser.close();

const routeStatus = {};
for (const route of routes) {
  const rows = results.filter(r => r.route === route);
  routeStatus[route] = {
    tested: rows.length,
    pass: rows.filter(r => r.result === "PASS").length,
    fail: rows.filter(r => r.result === "FAIL").length,
    statuses: [...new Set(rows.map(r => r.status))],
  };
}

const summary = {
  generatedAt: new Date().toISOString(),
  base: BASE,
  routes: routes.length,
  viewportCount: viewports.length,
  combinations: results.length,
  passed: results.filter(r => r.result === "PASS").length,
  failed: results.filter(r => r.result === "FAIL").length,
  lightCombinations: lightResults.length,
  lightPassed: lightResults.filter(r => r.result === "PASS").length,
  lightFailed: lightResults.filter(r => r.result === "FAIL").length,
  routeStatus,
};
await fs.writeFile(path.join(outDir, "summary.json"), JSON.stringify(summary, null, 2));
await fs.writeFile(path.join(outDir, "results.json"), JSON.stringify(results, null, 2));
await fs.writeFile(path.join(outDir, "routes.json"), JSON.stringify(routes, null, 2));
await fs.writeFile(path.join(outDir, "breakpoints.json"), JSON.stringify(breakpointResults, null, 2));

let md = `# Responsive Audit Raw Matrix\n\nGenerated: ${summary.generatedAt}\n\n- Routes: ${summary.routes}\n- Viewports: ${summary.viewportCount}\n- Combinations: ${summary.combinations}\n- PASS: ${summary.passed}\n- FAIL: ${summary.failed}\n- LIGHT combinations: ${summary.lightCombinations}\n- LIGHT PASS: ${summary.lightPassed}\n- LIGHT FAIL: ${summary.lightFailed}\n\n| Route | Tested | PASS | FAIL | HTTP statuses |\n|---|---:|---:|---:|---|\n`;
for (const route of routes) {
  const s = routeStatus[route];
  md += `| \`${route}\` | ${s.tested} | ${s.pass} | ${s.fail} | ${s.statuses.join(", ")} |\n`;
}
await fs.writeFile(path.join(outDir, "matrix.md"), md);
console.log(JSON.stringify(summary, null, 2));
