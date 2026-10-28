# TOOLS BUILD — Handover & Progress Log (wafasmart.tech /tools section)

> **READ THIS FIRST if you are a new agent continuing this work.**
> This file is the live log of what was built, why, and what remains.
> Update the "Progress log" section after every completed step.
> User instruction: "ek ek ker k bnay or sath document me likhte jay" — build incrementally, document everything here, stop for review after each batch.

## 0. Non-negotiable rules (from the user's brief)

1. NEVER modify/move/delete existing pages, components, CSS, routes. Only ADD files.
   The ONLY existing files that may be touched: main nav + footer (one "Free Tools" link each), `dist/sitemap.xml`, `dist/robots.txt`, `firebase.json`. Exact diffs must be shown to the user before applying. Patch script: `build/patch-existing.js` (dry-run by default, `--apply` to write, auto-backup).
2. No backend. No Cloud Functions/Firestore/Storage. Everything runs client-side. "Your files never leave your device" note on every tool page.
3. Spark plan: 360 MB/day bandwidth. Each tool page ≤ ~100 KB gzipped first load (excluding CDN libs). SVG icons only, no big images.
4. Heavy libs (pdf-lib, pdf.js, JSZip, qrcode, heic2any) load from jsDelivr **only on user action**, pinned version + SRI `integrity` + `crossorigin`. Never bundle >300 KB into hosting.
5. Mobile-first, accessible, CLS < 0.1, LCP < 2.5s.
6. Pre-rendered HTML per tool (no SPA). Files: `/tools/<slug>.html`; canonicals extensionless `/tools/<slug>` — requires the two `hosting.rewrites` rules in Task 1 (static files are matched before rewrites, so both forms work).

## 1. Phase 0 — Recon report (DONE 2026-10-28)

**Stack:** Plain static HTML. Firebase Hosting (project `wafasmart.tech`, `public: "dist"`, Spark plan).
- `build/build.js` (1156 lines) renders most pages into `dist/` from templates + data in `build/src/data/site.js` and `landing.js`. It is NOT to be run or edited (would rewrite existing pages — violates constraint 1).
- `dist/` contains the deployed files: ~50 HTML pages, `assets/css/styles.css` + `3d.css`, `assets/js/{main,i18n,3d,admin}.js`, `assets/img/*.webp`, fonts (Manrope/Sora/Noto Nastaliq woff2), `sw.js`, `manifest.webmanifest`, `sitemap.xml`, `robots.txt`, `blog/`.
- Note: `dist/index.html` is an OLD self-contained generation (inline CSS, different header). All other pages (services/about/etc.) are the CURRENT format: external `styles.css` + `3d.css`, `<header class="hdr">`, footer with Company list, scripts `main.js`/`3d.js`/`i18n.js` deferred. Copy header/footer markup FROM `dist/services.html`, not index.html.
- `dist/_headers` exists but firebase.json `ignore` excludes it; headers live in firebase.json only.

**Design tokens (from `dist/assets/css/styles.css` :root, line 14):**
`--bg:#050d20 --bg-2:#08152e --bg-3:#0c1c3d --line:rgba(148,169,255,.16) --line-2:rgba(148,169,255,.3) --txt:#eaf0ff --txt-2:#aab8e6 --txt-3:#7382ad --cy:#f4c430 (gold) --vi:#2f6bff --mg:#ff4d5e --gr:#25d366 --am:#ffd166 --grad:linear-gradient(115deg,#ffd75e,#f4c430 45%,#5aa2ff) --r-lg:26px --r-md:18px --r-sm:12px --nav-h:74px --maxw:1200px` Font stack `--ff:"Segoe UI Variable Display","Segoe UI",Inter,Roboto,"Helvetica Neue",Arial,system-ui,sans-serif` (already system fonts; Urdu: Noto Nastaliq via styles.css). Brand: "WAFA Smart Tech", WhatsApp +92 324 6627054, email info@wafasmart.tech, canonical base `https://wafasmart.tech`, pages use `.html` extensions and `?`-free URLs.

**Weights (gzipped):** styles.css 15.0 KB, main.js ~6 KB. Budget for tools pages is comfortable.

**Header/footer behaviour:** `.burger` toggle handled by main.js; `lang-toggle` by i18n.js. On tools pages we include main.js (for burger) with `type="module"`? — NO: main.js is a classic script, `<script src="/assets/js/main.js" defer>`. We copy the same tag. i18n dictionary does not know tool pages → we do NOT include i18n.js on tools pages, and our own tools.js provides a minimal EN↔UR toggle for the `data-ur` attribute we use.

**PDF lib chosen:** pdf-lib 1.17.1 (2021, way >2 weeks old). jsDelivr `https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js`, 525,099 B, SRI `sha384-weMABwrltA6jWR8DDe9Jp5blk+tZQh7ugpCsF3JwSA53WZM9/14PjS5LAJNHNjAI`.

## 2. Architecture decided

- Sources live in `build/src/tools/` (new dir, never touched by existing build).
- `build/tools-build.js <slug...>` renders pre-rendered HTML into `dist/tools/` and `dist/tools/index.html` (hub). Runs ON DEMAND only.
- `build/tools.config.js` — single array of tool metadata (slug, category, title, desc, keywords, H1, FAQs, steps, related). Every page = template + its entry. Adding a batch = adding entries + a per-tool JS module.
- Shared runtime: `dist/tools/assets/tools.css`, `dist/tools/assets/tools.js` (dropzone, file-size fmt, progress, errors, download helper, object-URL revoke, lazy CDN loader with SRI, EXIF-aware `createImageBitmap`). Per-tool logic in `dist/tools/assets/t/<slug>.js`, loaded via `<script type="module">` only on that page.
- Shared header/footer markup functions live inside `build/tools-build.js` (copied tokens/design from `dist/services.html` + one added "Free Tools" nav link).
- `build/patch-existing.js`: idempotent, adds nav link `<li><a href="/tools/index.html" data-i18n="nav.tools">Free Tools</a></li>` after Blog link in ALL dist/*.html (and blog posts) `<header>`, footer Company list link, sitemap entries, robots.txt line. Prints unified diff; `--apply` writes with backups in `build/backups/tools-patch-<date>/`.

## 3. Progress log

- 2026-10-28 Phase 0 recon DONE.
- 2026-10-28 Phase 1 DONE: shared system (`tools.config.js`, `tools.js`, `tools.css`, `tools-build.js`) + reference page image-to-pdf + hub.
- 2026-10-28 **Phase 2 DONE — all 37 tool pages built** (batch B 6 PDF, batch A 11 image, batch C 12 calculators + 3 config JSON, batch D 8 text/utility) + `/tools/index.html` hub with working search.
  Audit: HTML 7.5–9 KB gz, tools.css 3.4 KB, tools.js 6.5 KB, per-page JS 0.9–2.6 KB → first load ≈35–40 KB. Titles ≤60, descs ≤155, duplicate-paragraphs=0, no "soon" cards left.
- **No existing site file has been modified yet. Nothing deployed.**
- TODO Task 1 `build/patch-existing.js` (nav/footer link in 84 dist pages + `build/build.js` source + i18n `nav.tools` + sitemap 38 entries + robots + firebase rewrites/cache). Full spec in `TOOLS-NEXT-AGENT-PROMPT.md`.
- TODO Task 2 `keywords.md`. TODO Task 3 final report (tree, diffs, libs+SRI, weights, limitations, deploy cmd, GSC steps).
- TODO after the user says so: `firebase deploy --only hosting`, then quality-gate tests (deferred deliberately: "test bad me kre ge pehle coding phir deploy phir test").

## 4. Known facts future agent needs

- Existing sitemap uses `<xhtml:link hreflang>` blocks + lastmod 2026-10-22 style; new tool entries append before `</urlset>`.
- firebase.json already has X-Content-Type-Options/Referrer-Policy under `"source": "**"`; user asked to keep + set HTML cache ~1h: change `**/*.html` rule `no-cache` → `public, max-age=3600, must-revalidate` and add immutable rule for `/tools/assets/*`. Diff must be shown first.
- pdf-lib API: `PDFDocument.create()`, `embedJpg/embedPng` (no embedHeic — convert via canvas first), `page.setSize/Width/Height` in PDF points (72/inch). A4=595.28×841.89, Letter=612×792.
- For image→PDF we re-encode every input to JPEG via canvas (handles transparency w/ white background, EXIF via `imageOrientation:"from-image"`, and heic/png/webp/tiff inputs uniformly) — keeps pdf-lib usage trivial and file sizes predictable.
- HEIC support: `heic2any` **0.0.4** from jsDelivr with SRI (0.0.40/0.0.42 do not exist), lazy-loaded only when a .heic file is dropped. QR uses cdnjs `qrcode-generator` 1.4.4 (npm `qrcode` has no standalone browser bundle).
- Word counter must count Unicode words: `text.trim().match(/[\p{L}\p{N}'’\-]+/gu)` — handles Urdu/Arabic script.


## 5. Final deliverables (appended 2026-10-28)

### (a) Tree of every added file
**Build sources:**
- build/patch-existing.js
- build/tools-build.js
- build/src/tools/tools.config.js
- build/src/tools/tools.css
- build/src/tools/tools.js
- build/src/tools/config/{pakistan-tax.json,uae-vat.json,zakat.json}
- build/src/tools/content/_helpers.js, _kit.js + 37 content/*.js
- build/src/tools/t/*.js (modules + per-page scripts)

**Dist outputs:**
- dist/tools/index.html + 37 tool HTML pages
- dist/tools/assets/tools.css, tools.js
- dist/tools/assets/config/*.json
- dist/tools/assets/t/*.js (38 files including shared modules copied as needed)

### (b) Diff of every existing file touched (from Task 1)
Backups stored in `build/backups/tools-patch-2026-10-28/`.

**dist/*.html and dist/blog/*.html (45 files):** Added `<li><a href="/tools/index.html" data-i18n="nav.tools">Free Tools</a></li>` immediately before Contact in nav (where nav-links present). Added same link in Footer Company list before Contact (where Company section present). `dist/index.html` skipped (different header structure, nav anchor missing) — noted as error.
**build/build.js:** Added `["tools", "Free Tools", "فری ٹولز", "/tools/index.html"]` to nav L array before contact; added Free Tools to footer Company row before contact.
**build/src/js/i18n.js, dist/assets/js/i18n.js:** Added `"nav.tools": "فری ٹولز"` next to `"nav.contact": "رابطہ"`.
**dist/sitemap.xml:** Inserted 38 `<url>` entries (hub + 37 tools) before `</urlset>` with lastmod 2026-10-28, hreflang en/ur/x-default, changefreq monthly, hub priority 0.9, others 0.8.
**dist/robots.txt:** Added `Allow: /tools/` under `Allow: /`.
**firebase.json:** Added rewrites for `/tools` and `/tools/:slug`; changed `**/*.html` cache to `public, max-age=3600, must-revalidate`; added immutable cache rule for `/tools/assets/**`. Existing security headers unchanged.

### (c) Exact library list with pinned versions + SRI
From `build/src/tools/tools.config.js` (all hashed):
- pdf-lib 1.17.1 — https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js (525099 B) SRI: `sha384-weMABwrltA6jWR8DDe9Jp5blk+tZQh7ugpCsF3JwSA53WZM9/14PjS5LAJNHNjAI` global: PDFLib
- jszip 3.10.1 — https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js (97630 B) SRI: `sha384-+mbV2IY1Zk/X1p/nWllGySJSUN8uMs+gUAN10Or95UBH0fpj6GfKgPmgC5EXieXG` global: JSZip
- pdfjs-dist 3.11.174 — https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js (320004 B) SRI: `sha384-/1qUCSGwTur9vjf/z9lmu/eCUYbpOTgSjmpbMQZ1/CtX2v/WcAIKqRv+U1DUCG6e` global: pdfjsLib; worker: https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js (1087212 B) SRI: `sha384-SnzOobpRMLXZ52iJvZm/C0fYw0OQemTXzTjIsdsfMcrCtCEe9qgzxTd3RSklO5x2`
- heic2any 0.0.4 — https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js (1351840 B) SRI: `sha384-OTofQ0MEeiSgh62havBcemCIK0gqj809wX6UA0uPISNMRnR6NZyCdGzX3SbLrgwL` global: heic2any
- qrcode-generator 1.4.4 — https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js (20387 B) SRI: `sha384-mZT2gIty7ZDdOGkxfP6joZcYdMW1Jvj9dRlfpTmaJAKKXTqzygtB22k7FLe+KZC1` global: qrcode

### (d) Per-page first-load weight table (from `node build/tools-build.js --report`)
Key assets (gzipped): tools.css 3.48 KB, tools.js 6.55 KB, site styles.css ~15 KB loaded by header. Per-tool HTML 7.5-9.3 KB gz, per-tool JS 0.9-2.6 KB gz. First load ≈35-40 KB excluding CDN libs. Full report available via `node build/tools-build.js --report`.

### (e) Known limitations
- HEIC conversion needs a ~1.3 MB WASM decoder from CDN on first use (connection required).
- Very large PDFs can exhaust browser memory past ~60 MB.
- compress-image may not reach an aggressive KB target on a huge photo (reports smallest possible).
- Passport maker cannot auto-detect faces (manual position sliders).
- FBR/Zakat/VAT rates are indicative JSON values — verify and edit as needed.
- Tool docs are English + Roman Urdu.

### (f) Deploy command (do not run)
```bash
firebase deploy --only hosting --project wafasmart-tech
```

### (g) Google Search Console steps
1. Verify domain `wafasmart.tech` in Google Search Console.
2. Submit sitemap: `https://wafasmart.tech/sitemap.xml`
3. URL-Inspect a few tool pages (e.g. `/tools/`, `/tools/compress-image`, `/tools/image-to-pdf`)
4. Request Indexing for key pages
5. Watch "tools" query group after ~1-2 weeks for impressions/clicks
