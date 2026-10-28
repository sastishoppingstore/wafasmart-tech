# PROMPT FOR THE NEXT AGENT — finish the /tools section on wafasmart.tech

Copy everything between the `=====` lines and send it to the next agent. Everything it needs
about the codebase is in this file plus `TOOLS-HANDOVER.md`.

===== BEGIN PROMPT =====

You are continuing a partially finished build in `/home/ubuntu/wafa-smart-tech` (no git repo —
never run destructive git commands; there is nothing to restore from).

## What the project is
A "Free Online Tools" section for the existing static marketing site wafasmart.tech
(Firebase Hosting, Spark free plan, project id `wafasmart-tech`, `public: "dist"`).

## HARD RULES (the user's brief — do not violate)
1. **Only ADD files.** No existing page, component, route or stylesheet may be restyled/moved/deleted.
   The ONLY edits to existing files allowed are:
   (a) a "Free Tools" link in the main nav + footer Company list,
   (b) new entries in `dist/sitemap.xml` (+ one `robots.txt` line),
   (c) additions to `firebase.json`.
   Always **print the exact diff first** (dry-run), apply only with `--apply`, and copy originals to
   `build/backups/tools-patch-<YYYY-MM-DD>/` before writing.
2. **No backend.** No Cloud Functions / Firestore / Storage / third-party APIs. All processing is
   in the browser; every tool page states "your files never leave your device".
3. **Bandwidth budget 360 MB/day.** Each tool page ≤100 KB gzipped on first load excluding CDN libs.
   SVG icons only, system font stack, no big images. Heavy libraries load from jsDelivr/cdnjs
   **only when the user picks a file or presses the action button**, with a pinned version + SRI hash.
   Never bundle a library >300 KB into hosting. No CSP that would block the CDN.
4. Mobile-first, accessible (real `<label for>` for every control, keyboard-usable dropzone,
   `role="status"`/`role="alert"`), CLS < 0.1.
5. **Do NOT deploy.** `firebase deploy --only hosting` only when the user explicitly says so.
6. Keep writing progress into `TOOLS-HANDOVER.md` (the user asked for a running log).

## Current state — already done and verified
37 tool pages + the hub exist as pre-rendered HTML in `dist/tools/`:
* Image (11): image-resizer, compress-image, jpg-to-png, png-to-jpg, webp-to-jpg, heic-to-jpg,
  crop-image, rotate-flip-image, add-watermark, image-to-base64, passport-size-photo-maker
* PDF (6): image-to-pdf, pdf-to-images, merge-pdf, split-pdf, delete-pdf-pages, extract-pdf-pages
* Calculators (12): bmi, calorie, water-intake, ideal-weight, age, percentage, discount,
  emi-loan, gpa-cgpa, zakat, uae-vat, pakistan-salary-tax (last three read
  `dist/tools/assets/config/*.json` and print "verify current rates / verify with FBR")
* Text & utility (8): word-counter (Urdu-aware), case-converter, remove-duplicate-lines,
  lorem-ipsum-generator, qr-code-generator, password-generator, json-formatter, unit-converter

Last audit output: page HTML 7.5–9 KB gz, `tools.css` 3.4 KB gz, `tools.js` 6.5 KB gz,
per-tool JS 0.9–2.6 KB gz (first load ≈35–40 KB incl. the site's own 15 KB `styles.css`);
all titles ≤60 chars, all descriptions ≤155 chars, `content audit: pages=38 duplicate-paragraphs=0`,
no title collisions, zero "soon" cards left on the hub. **Nothing has been deployed and no existing
site file has been modified yet.**

## Files that make this work (do not break these contracts)
* `build/src/tools/tools.config.js` — `{CATS, LIBS, TOOLS, HUB, BRAND}`. `TOOLS` is the catalogue of
  37 entries (`{slug, cat, name, built, ...}`); content modules auto-mark a slug `built:true`.
* `build/src/tools/tools.js` → `dist/tools/assets/tools.js` — shared runtime `window.WST_T`:
  `makeURL/revoke` (+pagehide), `bytes`, `$ / $$`, `on`, `setErr`, `status`, `progress`, `download`,
  `cdn(key)` (lazy SRI script loader), `isHeic`, `decode(file)` (heic2any path then
  `createImageBitmap(..., {imageOrientation:"from-image"})`), `canvasOf`, `paint(bmp,w,h,{fit,
  crop,alpha,fill})`, `encode(canvas,type,q)`, `ext(type)`, `rangeOut(inId,outId,suffix)`, `toBlob`,
  `yieldUI`, `userErr`, `checkFile`, `num(el,{min,max,asInt,def,req,label})`, `copy`, `zip`,
  `results`, `dropzone(el,input,cb,acceptRe)`, `tileList`, `imageTool(spec)`.
* `build/src/tools/tools.css` — copied brand tokens (never imports the site stylesheet).
* `build/src/tools/content/<slug>.js` — page copy (name, module?, libs, kw, title, desc, h1, intro[3],
  steps[5], ur, features, tips, faqs, related, ui). `content/_helpers.js` has parameterised FAQ
  builders (`faqFree/faqPrivacy/faqMobile/faqOffline/faqSafe`) — **always interpolate the tool name**,
  otherwise the duplicate-paragraph audit fails. `content/_kit.js` gives `DZ(label,accept,multi)`,
  `RUN(btn,zipName)` and `FORM(fields,btn,zipName,label)`; `RUN` provides `#go #clear #bar #status
  #dl #zip #out #err`.
* `build/src/tools/t/<slug>.js` — the per-page browser script. A `module:"<name>"` field in the
  content file lets several slugs share one script (`convert-image` serves the 4 converter pages,
  `pdf-page-picker` serves delete/extract); they read the current page from
  `document.querySelector("main[data-slug]").dataset.slug`.
* `build/tools-build.js` — the generator. Reads `dist/services.html` to borrow the live
  header/footer (dist/index.html is a LEGACY self-contained page — never use it as the donor),
  splices the Free Tools nav + footer link, writes `dist/tools/index.html`, one HTML per built slug,
  copies `tools.css/tools.js`, `build/src/tools/config/*.json` → `dist/tools/assets/config/`,
  and `t/<module||slug>.js` → `dist/tools/assets/t/<slug>.js`.
  Commands: `node build/tools-build.js` (all), `node build/tools-build.js <slugs…>`,
  `node build/tools-build.js --report` (weights + SEO/duplicate audit).

## Verified library facts
`LIBS` in tools.config.js (all hashed by actually downloading the file, ≥2 weeks old):
pdf-lib 1.17.1 (`…/dist/pdf-lib.min.js`, 525,099 B), jszip 3.10.1, pdfjs-dist 3.11.174
(`build/pdf.min.js` + `build/pdf.worker.min.js`), heic2any **0.0.4** (0.0.42/0.0.40 do not exist;
the single min file embeds its worker), qrcode-generator **1.4.4 from cdnjs** (npm `qrcode` has no
standalone browser bundle). pdf-lib measures in points: A4 595.28×841.89, Letter 612×792.
Word counting regex that works in V8: `/[\p{L}\p{N}'\u2019\-]+/gu` (the literal `''` form is a
syntax error); scripts must be written `\p{Script=Arabic}`.

## REMAINING WORK (3 tasks, in this order)

### Task 1 — `build/patch-existing.js` (the only existing-file edits)
Write it, run it dry so the full diff prints, show the user the diff summary, then run `--apply`.
It must be idempotent (re-running changes nothing) and must fail loudly if an anchor is missing.
Patch targets and exact anchors:
1. `dist/*.html` **and** `dist/blog/*.html` (84 files contain `nav-links`) — insert the nav item
   immediately before the contact `<li>`:
   anchor `<li><a href="/contact.html"  data-i18n="nav.contact">Contact</a></li>` (note the TWO
   spaces before `data-i18n`), insert
   `<li><a href="/tools/index.html" data-i18n="nav.tools">Free Tools</a></li>`.
   Skip files already containing `/tools/index.html`.
2. Footer Company list — anchor `<li><a href="/contact.html" data-i18n="nav.contact">Contact</a></li>`
   (ONE space, inside `<div><h4>Company</h4><ul>` … `<li><a href="/admin.html">Admin panel</a></li>`),
   insert the same Free Tools `<li>` before it.
3. **Source of truth too** (so a future `node build/build.js` keeps the link): in `build/build.js`
   add `["tools", "Free Tools", "فری ٹولز", "/tools/index.html"]` to the `L` array inside
   `function nav(active)` before the `contact` tuple, and add the footer `<li>` to the Company row in
   `function footer()` (line ~132). Then re-run `node build/tools-build.js` so the hub/tool pages pick
   up the new donor header.
4. i18n dictionary — in `build/src/js/i18n.js` and `dist/assets/js/i18n.js`, add
   `"nav.tools": "فری ٹولز",` next to `"nav.contact": "رابطہ",` so Urdu mode translates the new link
   (missing keys fall back to English, so this is polish, not a bug).
5. `dist/sitemap.xml` — insert 38 `<url>` blocks before `</urlset>`, one per canonical
   (`https://wafasmart.tech/tools` + each `/tools/<slug>`), formatted like the existing entries:
   `<url><loc>…</loc><lastmod>2026-10-28</lastmod><xhtml:link rel="alternate" hreflang="en" href="…"/>
   <xhtml:link rel="alternate" hreflang="ur" href="…"/><changefreq>monthly</changefreq>
   <priority>0.8</priority></url>` (hub 0.9). Canonicals are extensionless — keep them identical to
   the `<link rel="canonical">` already inside each page.
6. `dist/robots.txt` — add `Allow: /tools/` under `Allow: /` (keeps `Disallow: /admin.html` etc.).
7. `firebase.json` — keep every existing setting and add/change exactly:
   * `hosting.rewrites`: `[{"source": "/tools", "destination": "/tools/index.html"},
     {"source": "/tools/:slug", "destination": "/tools/:slug.html"}]` — this is what makes the
     extensionless canonical URLs resolve while `cleanUrls:false` stays untouched for the rest of the
     site (static files are matched before rewrites, so `/tools/index.html` still serves directly, and
     `/tools/assets/tools.js` is two segments so it never matches `/tools/:slug`).
   * change the `**/*.html` header value `no-cache` → `public, max-age=3600, must-revalidate`
     (user asked for ~1 h HTML cache). Do NOT add a CSP. Leave the security-headers block alone.
   * add `{"source": "/tools/assets/**", "headers":[{"key":"Cache-Control","value":"public, max-age=31536000, immutable"}]}`.
Verify after applying: `grep -c 'nav.tools' dist/services.html`, `grep -c '<loc>https://wafasmart.tech/tools' dist/sitemap.xml`
(= 38), `node -e "JSON.parse(require('fs').readFileSync('firebase.json','utf8'))"`, and that a tool
page renders with the header (no missing-nav regression).

### Task 2 — `keywords.md` (repo root)
A markdown table, one row per tool page: `| page | canonical | primary keyword | secondary keywords |`.
Pull the values straight from `build/src/tools/tools.config.js` (`TOOLS[].kw[0]` = primary,
the rest secondary) plus the hub row. Add a short section listing the 4 categories and the hub.

### Task 3 — final deliverables report (append to `TOOLS-HANDOVER.md`, keep its rule sections)
Produce: (a) the tree of every added file (`build/src/tools/**`, `build/tools-build.js`,
`dist/tools/**`), (b) the diff of every existing file touched (from Task 1), (c) the exact library
list with pinned versions + SRI, (d) per-page first-load weight table from
`node build/tools-build.js --report`, (e) known limitations, (f) the deploy command
`firebase deploy --only hosting` (do not run it), (g) Google Search Console steps
(verify domain → submit `https://wafasmart.tech/sitemap.xml` → URL-Inspect a few tool pages →
Request Indexing → watch the "Tools" query group after ~1–2 weeks).
Limitations that must be stated honestly: HEIC conversion depends on a 1.3 MB WASM decoder from the
CDN (needs a connection the first time); very large PDFs can exhaust browser memory past ~60 MB;
`compress-image` may not reach an aggressive KB target on a huge photo (it reports the smallest
possible instead); the passport-size maker cannot auto-detect a face (manual position sliders);
FBR/Zakat/VAT rates are indicative JSON values the user should verify and can edit;
Urdu RTL pages are handled by the site's own i18n toggle, tool docs are English + Roman Urdu.

## Gotchas that already cost time in this build
* `tools.js` must end with `W.WST_T = Object.assign(W.WST_T || {}, T)` — plain assignment wipes the
  inline `WST_T.LIBS` the generator injects and every CDN load then fails "Unknown library".
* `imageTool`'s `ctx.out(items)` takes an **array** of `{name, blob, type, note}`.
* Do not reuse identifier `a` inside blocks that destructure `[a, b]` (a past SyntaxError).
* The report measures the **unescaped** title; `&` in a title becomes `&amp;` in HTML.
* Never write non-ASCII identifiers (one `整` slipped in once).
* `T.status/T.setErr` no-op when the page has no `#status`/`#err`, which `K.RUN` always provides.
* `#dl` is used for a single result; when >1 result exists `imageTool` reveals `#zip` instead and
  reuses one tracked object URL for the ZIP.
* `node build/build.js` regenerates `dist/` from `build/src/` for the marketing site. It does not
  touch `dist/tools/`, but re-run `node build/tools-build.js` after it so tool pages stay current.

## Not yet done (do these only after Tasks 1–3 and only if the user asks)
Quality-gate testing was deliberately postponed by the user ("test bad me kre ge pehle coding phir
deploy phir test"). When testing: a 15–20 MB photo, a transparent PNG, a rotated phone JPEG, a real
HEIC, a 50-page PDF, Urdu text in the word counter, wrong-type/empty/password-protected inputs,
zero console errors, Lighthouse mobile ≥90. A playwright-core harness exists at `/tmp/ttest/test.js`
(uses `PW_CHROMIUM=/home/ubuntu/.cache/ms-playwright/chromium-1187/chrome-linux/chrome`, fixtures in
`/tmp/assets-test/`) — /tmp may be gone; rebuild it from the pattern in TOOLS-HANDOVER.md if needed.
Permissions for this project are already whitelisted in `.qoder/settings.local.json`; do not ask the
user for permission repeatedly — they explicitly said to finish the work.

===== END PROMPT =====
