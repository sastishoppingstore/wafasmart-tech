#!/usr/bin/env node
"use strict";
/* WAFA Smart Tech /tools static generator (ADDITIVE ONLY).
   Reads layout (header/footer/environment) from the already-built dist/services.html,
   splices in the "Free Tools" links for the tools pages, and writes pre-rendered HTML
   into dist/tools/. It never writes to any existing file.
   Usage: node build/tools-build.js            → build hub + every tool with built:true
          node build/tools-build.js <slug...>  → also rebuild specific pages
          node build/tools-build.js --report    → print per-page weight report + content audit */

const fs = require("fs");
const path = require("path");
const { CATS, LIBS, TOOLS, HUB, BRAND } = require("./src/tools/tools.config.js");

const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SRC = path.join(__dirname, "src", "tools");
const OUT = path.join(DIST, "tools");
const BASE = BRAND.url;
const LASTMOD = "2026-10-28";

/* per-tool content lives in src/tools/content/<slug>.js — presence marks the tool as built */
fs.readdirSync(path.join(SRC, "content")).forEach(f => {
  if (!/\.js$/.test(f) || f.startsWith("_")) return;
  const slug = f.replace(/\.js$/, "");
  const c = require(path.join(SRC, "content", f));
  const t = TOOLS.find(x => x.slug === slug);
  if (!t) { console.error("content file without catalog entry: " + slug); process.exit(1); }
  Object.assign(t, c, { built: true });
});

const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const url = slug => slug === "index" ? BASE + "/tools" : `${BASE}/tools/${slug}`;

/* ---------- layout capture from existing pages (read-only) ---------- */
function layout() {
  const h = fs.readFileSync(path.join(DIST, "services.html"), "utf8");
  const env = (h.match(/<body[^>]*>(.*?)<header/i) || [ , ""])[1];
  const bodyAttrs = (h.match(/<body([^>]*)>/i) || [ , ' dir="ltr"'])[1];
  const hdr = (h.match(/<header class="hdr">[\s\S]*?<\/header>/) || [""])[0];
  const foot = (h.match(/<footer>[\s\S]*?<\/footer>/) || [""])[0];
  if (!hdr || !foot) throw new Error("Could not find header/footer in dist/services.html — is dist built?");
  return { env, bodyAttrs, hdr, foot };
}

function toolsHeader(hdrBase, activeHub) {
  let h = hdrBase
    .replace('<button class="lang-btn" id="lang-toggle" type="button">اردو</button>',
             '<button class="lang-btn" id="lang-toggle" type="button" aria-pressed="false">اردو</button>')
    .replace('<li><a href="/contact.html"',
             `<li><a href="${activeHub ? "/tools/index.html" : "/tools/index.html"}" data-i18n="nav.tools">Free Tools</a></li><li><a href="/contact.html"`);
  if (activeHub) h = h.replace('href="/tools/index.html" data-i18n="nav.tools">', 'href="/tools/index.html" class="active" aria-current="page" data-i18n="nav.tools">');
  if (!h.includes('nav.tools')) throw new Error("nav splice failed — header markup changed in dist/services.html");
  return h;
}
function toolsFooter(footBase) {
  let f = footBase.replace(/<button class="btn btn-sm btn-wa"[^>]*data-quote>[\s\S]*?<\/button>/, "");
  f = f.replace('<a href="/contact.html"', '<a href="/tools/index.html">Free Tools</a></li><li><a href="/contact.html"');
  if (!f.includes('/tools/index.html')) throw new Error("footer splice failed — footer markup changed in dist/services.html");
  return f;
}

/* ---------- shared head ---------- */
function metaHead({ title, desc, canonical, page, ogType = "website" }) {
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="en" href="${canonical}"><link rel="alternate" hreflang="ur" href="${canonical}"><link rel="alternate" hreflang="x-default" href="${canonical}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:type" content="${ogType}"><meta property="og:site_name" content="${esc(BRAND.name)}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}"><meta property="og:image" content="${BRAND.og}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${BRAND.og}">
<meta name="theme-color" content="#050d20"><meta name="format-detection" content="telephone=no">
<meta name="author" content="${esc(BRAND.name)}, Lahore">
<link rel="icon" href="/assets/img/favicon-32.png" sizes="32x32"><link rel="icon" href="/assets/img/favicon-16.png" sizes="16x16">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest">
<link rel="preload" href="/assets/css/styles.css" as="style"><link rel="stylesheet" href="/assets/css/styles.css">
<link rel="stylesheet" href="/tools/assets/tools.css?v=2">
<link rel="stylesheet" href="/tools/assets/tools-3d.css?v=1">`;
}

const ldWebApp = t => ({ "@context": "https://schema.org", "@type": "WebApplication", name: t.name + " — " + BRAND.name,
  url: url(t.slug), applicationCategory: "UtilitiesApplication", operatingSystem: "Any",
  browserRequirements: "Requires a browser with JavaScript", inLanguage: ["en", "ur"],
  isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
  featureList: t.features, description: t.desc, publisher: { "@type": "Organization", name: BRAND.name, url: BRAND.url } });
const ldFaq = t => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
const ldCrumb = (t, pageName) => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: BASE + "/index.html" },
  { "@type": "ListItem", position: 2, name: "Free Tools", item: url("index") },
  { "@type": "ListItem", position: 3, name: pageName, item: url(t ? t.slug : "index") }] });
const ldScripts = arr => arr.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n");

const PRIVACY_SVG = `<p class="privacy"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5.5V11c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5.5Z"/><path d="m9 12 2 2 4-4"/></svg> ${esc(BRAND.privacy)}</p>`;

/* ---------- docs block (unique content below the tool) ---------- */
function docsBlock(t) {
  return `<section class="t-docs">
<div class="t-hero-img"><img src="/tools/assets/img/tool-${t.cat === 'pdf' ? 'pdf' : t.cat === 'calc' ? 'calc' : t.cat === 'text' ? 'text' : 'image-compress'}.jpg" alt="${esc(t.name)} - 3D animated tool interface" loading="lazy" decoding="async"></div>
<h2 id="about">What this tool does</h2>
${t.intro.map(p => `<p>${esc(p)}</p>`).join("\n")}
<h2 id="how-to-use">How to use the ${esc(t.name)} <span style="color:var(--cy)">| Step by Step Guide</span></h2>
<div class="howto"><ol>${t.steps.map(s => `<li><span>${esc(s)}</span></li>`).join("")}</ol></div>
<span class="ru" data-ru lang="ros">${esc(t.ur)}</span>
<h2 id="features">Features</h2>
<ul class="feat-list">${t.features.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
<h2 id="tips">Tips</h2>
<ul>${t.tips.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
<h2 id="faq">Frequently asked questions</h2>
${t.faqs.map(f => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("\n")}
<h2 id="related">Related tools <span style="color:var(--cy)">— Try more free tools</span></h2>
<div class="related-grid">${t.related.map(([sl, lb]) => `<a class="rel-card" href="/tools/${sl === "index" ? "index.html" : sl + ".html"}"><span class="rel-ic">⚡</span><span><b>${esc(lb)}</b><small>Open this 3D animated tool</small></span></a>`).join("")}</div>
${PRIVACY_SVG}
</section>`;
}

/* ---------- tool page ---------- */
function toolPage(t, L) {
  const libsOnPage = t.libs || [];
  const libJson = JSON.stringify(Object.fromEntries(libsOnPage.map(k => [k, { url: LIBS[k].url, sri: LIBS[k].sri, global: LIBS[k].global }])));
  const libCfg = libsOnPage.length ? `<script>window.WST_T=window.WST_T||{};WST_T.LIBS=${libJson};</script>` : "";
  const body = `${L.env}${L.hdr}<main id="main" data-slug="${t.slug}" data-cat="${t.cat}">
<div class="wrap"><nav class="bcrumbs" aria-label="Breadcrumb"><a href="/index.html">Home</a><span aria-hidden="true">›</span><a href="/tools/index.html">Free Tools</a><span aria-hidden="true">›</span><span>${esc(t.name)}</span></nav></div>
<div class="wrap tool-hero">
  <span class="eyebrow">${esc(CATS[t.cat])} · free · no upload</span>
  <h1>${esc(t.h1)}</h1>
  <p class="sub">${esc(t.short || t.desc)}</p>
  ${PRIVACY_SVG}
</div>
<div class="wrap" role="region" aria-label="${esc(t.name)} tool">
${t.ui}
</div>
<div class="wrap">
${docsBlock(t)}
</div>
</main>`;
  return `<!doctype html>
<html lang="en" dir="ltr" data-page="tools/${t.slug}.html">
<head>
${metaHead({ title: t.title, desc: t.desc, canonical: url(t.slug) })}
${ldScripts([ldWebApp(t), ldFaq(t), ldCrumb(t, t.name)])}
${libCfg}
</head>
<body${L.bodyAttrs}>${body}
${L.foot}
<script src="/assets/js/main.js" defer></script>
<script src="/tools/assets/tools.js?v=1" defer></script>
<script src="/tools/assets/tools-3d.js?v=1" defer></script>
${t.built ? `<script src="/tools/assets/t/${t.slug}.js?v=1" defer></script>` : ""}
</body></html>
`;
}

/* ---------- hub page ---------- */
const ICONS = {
  image: '<path d="M4 5h16v14H4z"/><path d="m5 17 5-6 3 3.5L16 11l3 6"/><circle cx="9" cy="9" r="1.3"/>',
  pdf: '<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4"/><path d="M10 13h4M10 17h4"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2m3 0h3M8 16h2m3 0h3"/>',
  text: '<path d="M4 7V5h16v2M12 5v14M9 19h6"/>',
  def: '<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/>'
};
const CARD_BLURB = {
  "image-to-pdf": "Photos into one A4/Letter PDF, reorder & margins",
  "jpg-to-png": "Lossless PNG output, one file or a batch",
  "add-watermark": "Corner mark or full diagonal tile, opacity control",
  "lorem-ipsum-generator": "Placeholder paragraphs, sentences or words",
  "remove-duplicate-lines": "De-duplicate, trim, sort and clean a list",
  "percentage-calculator": "Three modes: %, of, and percentage change",
  "word-counter": "Words, characters, reading time and Urdu-aware count",
  "password-generator": "crypto-grade random, copy or save as text",
  "qr-code-generator": "URL, text, WhatsApp or WiFi as PNG + SVG",
  "json-formatter": "Prettify, minify and validate with line numbers",
  "ideal-weight-calculator": "Four clinical formulas side by side",
  "crop-image": "Drag a box, lock 1:1 / story / passport ratio",
  "compress-image": "Hit an exact 20/50/100/200 KB target",
};
/* hub cards: prefer a hand-tuned line, else the first clause of the page's `short` */
function blurbOf(t) {
  const s = (t.short || "").split(/ — |;|\u2014 /)[0];
  if (s.length <= 62) return s;
  const cut = s.slice(0, 60);
  return cut.slice(0, Math.max(cut.lastIndexOf(" "), cut.lastIndexOf(","))) + "…";
}
function hubPage(L) {
  const byCat = {};
  TOOLS.forEach(t => (byCat[t.cat] = byCat[t.cat] || []).push(t));
  const ACC = {image:'var(--t3d-gold)',pdf:'var(--t3d-blue)',calc:'var(--t3d-purple)',text:'var(--t3d-cyan)'};
  const cards = cat => byCat[cat].map(t => {
    const ic = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[t.cat] || ICONS.def}</svg>`;
    return t.built
      ? `<a class="t3d-card" style="--t3d-acc:${ACC[cat]||'var(--t3d-gold)'}" href="/tools/${t.slug}" data-search="${esc((t.name + " " + (t.kw || []).join(" ")).toLowerCase())}"><span class="t3d-ic">${ic}</span><span class="t3d-txt"><b>${esc(t.name)}</b><small>${esc(CARD_BLURB[t.slug] || blurbOf(t))}</small></span></a>`
      : `<span class="t3d-card" style="--t3d-acc:${ACC[cat]||'var(--t3d-gold)'};opacity:.6" aria-disabled="true"><span class="t3d-ic">${ic}</span><span class="t3d-txt"><b>${esc(t.name)}</b><small>Coming soon</small></span></span>`;
  }).join("\n");
  const secs = Object.keys(CATS).map(c => `<section data-cat="${c}"><h2 class="cat-h2">${esc(CATS[c])}</h2><div class="t3d-persp"><div class="t3d-hub-grid">${cards(c)}</div></div></section>`).join("\n");
  const body = `${L.env}${L.hdr}<main id="main" class="tools-main">
<div class="wrap"><nav class="bcrumbs" aria-label="Breadcrumb"><a href="/index.html">Home</a><span aria-hidden="true">›</span><span>Free Tools</span></nav></div>
<div class="wrap tool-hero">
  <span class="eyebrow">Free · private · works offline after first load</span>
  <h1>${esc(HUB.h1)}</h1>
  <p class="sub">${esc(HUB.intro)}</p>
  ${PRIVACY_SVG}
  <span class="ru" data-ru lang="ros">${esc(HUB.ur)}</span>
  <div class="hub-search"><label class="sr-only" for="q">Search tools</label><input type="search" id="q" placeholder="Search: compress, pdf, qr, bmi, zakat…" autocomplete="off"><span class="hint" aria-hidden="true">${TOOLS.length} tools</span></div>
</div>
<div class="wrap">${secs}
<p id="no-res" class="hint" hidden>No tools match that search yet — try “pdf”, “image” or “calc”.</p>
</div>
</main>`;
  const toolListLd = { "@context": "https://schema.org", "@type": "ItemList", name: "Free Online Tools — " + BRAND.name, itemListElement: TOOLS.filter(t => t.built).map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: url(t.slug) })) };
  return `<!doctype html>
<html lang="en" dir="ltr" data-page="tools/index.html">
<head>
${metaHead({ title: HUB.title, desc: HUB.desc, canonical: url("index") })}
${ldScripts([ldCrumb(null, "index"), toolListLd])}
</head>
<body${L.bodyAttrs}>${body}
${L.foot}
<script src="/assets/js/main.js" defer></script>
<script src="/tools/assets/tools.js?v=1" defer></script>
<script src="/tools/assets/tools-3d.js?v=1" defer></script>
</body></html>
`;
}

/* ---------- write ---------- */
function ensure(d) { fs.mkdirSync(d, { recursive: true }); }
function build(slugs) {
  ensure(OUT); ensure(path.join(OUT, "assets", "t"));
  fs.copyFileSync(path.join(SRC, "tools.css"), path.join(OUT, "assets", "tools.css"));
  fs.copyFileSync(path.join(SRC, "tools.js"), path.join(OUT, "assets", "tools.js"));
  const CFGD = path.join(SRC, "config");
  if (fs.existsSync(CFGD)) {
    ensure(path.join(OUT, "assets", "config"));
    fs.readdirSync(CFGD).filter(f => f.endsWith(".json")).forEach(f => fs.copyFileSync(path.join(CFGD, f), path.join(OUT, "assets", "config", f)));
  }
  const L = layout();
  const H = { ...L, hdr: toolsHeader(L.hdr, true), foot: toolsFooter(L.foot) };
  const B = { ...L, hdr: toolsHeader(L.hdr, false), foot: toolsFooter(L.foot) };
  fs.writeFileSync(path.join(OUT, "index.html"), hubPage(H));
  const list = TOOLS.filter(t => t.built && (!slugs.length || slugs.includes(t.slug)));
  list.forEach(t => {
    const mod = t.module || t.slug;
    const srcT = path.join(SRC, "t", mod + ".js");
    if (fs.existsSync(srcT)) fs.copyFileSync(srcT, path.join(OUT, "assets", "t", t.slug + ".js"));
    else console.error("missing module: t/" + mod + ".js for " + t.slug);
    fs.writeFileSync(path.join(OUT, t.slug + ".html"), toolPage(t, B));
  });
  console.log("built: tools/index.html + " + list.map(t => t.slug).join(", "));
}

/* ---------- report + content audit ---------- */
function report() {
  const zlib = require("zlib");
  const rows = [];
  const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(html|css|js)$/.test(e.name)) rows.push(p);
  });
  walk(OUT);
  const dup = new Map(), wordTotals = [];
  rows.sort().forEach(p => {
    const buf = fs.readFileSync(p);
    const gz = zlib.gzipSync(buf).length;
    if (p.endsWith(".html")) {
      const h = buf.toString("utf8");
      const un = s => s.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      const t = un((h.match(/<title>([^<]*)/) || [ , ""])[1]);
      const d = un((h.match(/name="description" content="([^"]*)"/) || [ , ""])[1]);
      const words = (h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").match(/[\p{L}\p{N}][\p{L}\p{N}'’\-]*/gu) || []).length;
      wordTotals.push([path.relative(DIST, p), words]);
      (h.match(/<p>([^<]{80,})<\/p>/g) || []).forEach(s => dup.set(s, (dup.get(s) || 0) + 1));
      console.log(`${String(gz).padStart(7)} gz  ${t.length}t/${d.length}d  ${path.relative(DIST, p)}`);
    } else console.log(`${String(gz).padStart(7)} gz  ${path.relative(DIST, p)}`);
  });
  const dups = [...dup.entries()].filter(([, n]) => n > 1);
  console.log("\ncontent audit: pages=" + wordTotals.length + " duplicate-paragraphs=" + dups.length);
  dups.forEach(([s, n]) => console.log("  DUP×" + n + ": " + s.slice(3, 90)));
  const titles = {};
  wordTotals.forEach(([f]) => { const h = fs.readFileSync(path.join(DIST, f), "utf8"); const t = (h.match(/<title>([^<]*)/) || [ , ""])[1]; if (titles[t]) console.log("TITLE COLLISION: " + t); titles[t] = 1; });
}

const argv = process.argv.slice(2);
if (argv[0] === "--report") report();
else build(argv.filter(a => !a.startsWith("--")));
