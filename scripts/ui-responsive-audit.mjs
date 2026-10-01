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

function safeName(route) {
  if (route === "/") return "root";
  return route.replace(/^\//, "").replace(/[^a-zA-Z0-9_-]+/g, "__").slice(0, 180);
}

async function ensure(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function getRoutes() {
  const routes = new Set(["/", "/studio", "/admin"]);
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

    return {
      title: document.title,
      lang: document.documentElement.lang,
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
    try { localStorage.setItem("azevsm-cookie", "acknowledged"); } catch {}
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
        metrics.brokenImages.length > 0
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
  routeStatus,
};
await fs.writeFile(path.join(outDir, "summary.json"), JSON.stringify(summary, null, 2));
await fs.writeFile(path.join(outDir, "results.json"), JSON.stringify(results, null, 2));
await fs.writeFile(path.join(outDir, "routes.json"), JSON.stringify(routes, null, 2));

let md = `# Responsive Audit Raw Matrix\n\nGenerated: ${summary.generatedAt}\n\n- Routes: ${summary.routes}\n- Viewports: ${summary.viewportCount}\n- Combinations: ${summary.combinations}\n- PASS: ${summary.passed}\n- FAIL: ${summary.failed}\n\n| Route | Tested | PASS | FAIL | HTTP statuses |\n|---|---:|---:|---:|---|\n`;
for (const route of routes) {
  const s = routeStatus[route];
  md += `| \`${route}\` | ${s.tested} | ${s.pass} | ${s.fail} | ${s.statuses.join(", ")} |\n`;
}
await fs.writeFile(path.join(outDir, "matrix.md"), md);
console.log(JSON.stringify(summary, null, 2));
