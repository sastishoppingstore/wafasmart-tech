# WAFA SMART TECH — Complete Website Plan (Plan → Tasks → Execution)

**Domain:** wafasmart.tech · **WhatsApp/Leads:** 03246627054 · **City:** Lahore, Pakistan
**Model (final v8):** Premium software-house site — fixed build rates **PKR 14,000 / 20,000 / 23,500 / 30,000 / 35,000** + emergency recovery **7,000 / 5,000** · bilingual English + اردو · static ultra-fast
**Final delivery:** **34 pages** · live on Firebase `wafasmart-tech` · see §12 for the current design/deploy record.

---

## 1. Brand & Design System

| Item | Decision |
|---|---|
| Brand | **Wafa Smart Tech** — "AI · Apps · Websites · Earning Portals" |
| Theme | Deep navy `#050d20` + **gold `#f4c430` + emerald `#25d366`**, cream/light/sky/orange section rhythm, sky-blue footer |
| 3D | CSS-3D hero panel + rotating 4-product mobile cube, 3D tilt service cards, particle canvas, floating orbs, parallax layers, 3D **Order Now / Get Quote** buttons |
| Type | Self-hosted/system-safe stacks (works offline in zip), big Arabic-capable Naskh fallback for Urdu |
| Motion | Scroll-reveal (IntersectionObserver), counters, marquee, tabs, slider, accordion, magnetic hover, page preloader |
| A11y/Perf | reduced-motion support, lazy images, `<picture>` WebP+PNG, no heavy libs → Lighthouse-grade |

## 2. Site Map (14 SEO pages)

1. `index.html` — hero, trust bar, **9 3D service cards**, why-us, process, pricing preview, portfolio, stats, testimonials, FAQ, CTA
2. `services.html` — all services grid + filters
3. Service detail pages (each = 1 SEO keyword set, own pricing + Order/Quote):
   `ai-agents.html` · `voice-agents.html` · `ai-receptionist.html` · `website-design.html` · `job-portal.html` · `website-management.html` · `android-app.html` · `ios-app.html` · `windows-app.html`
4. `pricing.html` — 3 fixed PKR packages (10k / 22k / 40k) + custom + add-ons table + EMI note
5. `portfolio.html` — case-study grid with 3D hover
6. `about.html` — story, values, timeline, team values
7. `blog.html` + 2 articles (SEO long-tail: "AI receptionist in Pakistan price", "ghar beth ker online kamai portal")
8. `contact.html` — WhatsApp-first form → builds `wa.me` deep-link, map block, hours
9. `admin.html` — client-side CMS (leads viewer, editor, JSON export/import, backup)
10. `404.html`, `offline.html` (PWA)

## 3. Content / SEO

- Per-page `<title>` / meta description / canonical / OpenGraph / Twitter card / `hreflang` (en + ur)
- JSON-LD: `Organization` `LocalBusiness(Lahore)` `WebSite` `Service` x9 `Product/OfferCatalog` (PKR 10000–40000) `FAQPage` `BreadcrumbList` `Article`
- `sitemap.xml` · `robots.txt` · `manifest.webmanifest` · service-worker (offline)
- Keyword sets (EN + Roman Urdu): ai agent pakistan, voice ai agent, ai receptionist lahore, website design lahore price, job portal development pakistan, ghar bethan kamai portal, android app development lahore, iOS app pakistan, windows desktop software, website management system
- Image SEO: `alt` + descriptive filenames + `loading=lazy`
- Urdu mode: `i18n.js` dictionary + `dir="rtl"` + logical CSS (site stays bilingual with one toggle)

## 4. Functional Features

- **Order Now** → WhatsApp deep-link auto-filled with the exact service + package price
- **Get Quote** → 4-step quote wizard (service → scope → budget → contact) → summary → send to WhatsApp + saved to Admin leads
- Sticky WhatsApp float + call bar · pricing toggle (PKR/USD) · filter/search · scroll progress · toast
- Admin panel: login (localStorage), edit texts/prices/phone (data-wf runtime patch + persisted), leads inbox (from quote wizard/contact form), CSV + content.json export, import, reset

## 5. Assets (generated, then optimized)

`logo` · `hero-ai` · 9 service 3D renders · `about-team` · `ai-future` (blog/OG) · favicon set (16/32/180/512, maskable) · `og-cover` — all PNG **and** WebP, resized/cropped with Pillow.

## 6. Engineering

- `build/build.js` (zero-dependency Node) → renders all pages from `src/data/site.js` + templates → writes `dist/`
- `build/scripts/optimize-images.py` → PNG→WebP + resize + favicon/OG generation
- `build/scripts/check.js` → internal link/asset validation, HTML sanity, SEO field coverage (must be 100% before delivery)
- Deliverable: **`wafa-smart-tech-website.zip`** = `dist/` (ready to upload to wafasmart.tech) + `build/` source + `PLAN.md` + `README.md` (deployment, DNS/SSL, admin guide, Urdu guide)

---

## 7. TASK LIST (all mandatory — no skips)

- [x] **T1** Plan + folder scaffold + config
- [x] **T2** Generate all images (logo, hero, 9 services, about, ai-future)
- [x] **T3** Optimize images → WebP + PNG, sizes, favicons, OG cover
- [x] **T4** Design system CSS (tokens, glass, 3D, RTL, animations, responsive)
- [x] **T5** JS engine (particles/neural canvas, 3D tilt, reveal, counters, slider, tabs, wizard, toasts, PWA)
- [x] **T6** i18n EN/اردو dictionary + RTL switch
- [x] **T7** Data model: 9 services (prices 10k–40k), packages, portfolio, testimonials, FAQ, blog, contact
- [x] **T8** Page templates (head/SEO/JSON-LD/nav/footer/cards/CTA)
- [x] **T9** Build all 14+ pages via build.js
- [x] **T10** Admin panel (auth, editor, leads, export/import)
- [x] **T11** SEO files: sitemap, robots, manifest, sw, 404/offline
- [x] **T12** Contact + Order/Quote → WhatsApp 03246627054 flow
- [x] **T13** QA: build, link/asset checker, a11y, reduced-motion, mobile breakpoints
- [x] **T14** README (deploy to wafasmart.tech, cPanel/Netlify/Cloudflare, DNS/SSL, admin how-to)
- [x] **T15** Zip = source + build + images + logo + hero + docs → deliver

---

## 8. Execution log (2026-10-22)

- T2: 10/13 AI images generated (logo, hero, 9 services incl. AI-composited `service-windows`). **Session image limit (10)** blocked `about-team` + `ai-future` + a fancier windows render — pages auto-fallback to hero art; ask "retry images" any time to upgrade + rebuild.
- T3: 39 production assets (WebP primary + PNG fallback, favicon set, maskable icons, og-cover.png/webp) — 16.2 MB total.
- T4–T12: design system 480+ lines CSS, engine JS (canvas neural FX, 3D tilt, wizard, overrides), bilingual EN/ur + RTL, 21 pages, admin CMS, PWA, SEO files, WhatsApp flow — all from `site.js` single source.
- T13: `check.js` QA gate — 21 pages · 793 links · 102 imgs (alt ✓) · 92 JSON-LD blocks · 529 Urdu nodes → **PASSED, 0 problems**. Server smoke test: 13/13 URLs HTTP 200.
- T14: README (deploy cPanel/Netlify/Cloudflare, DNS/SSL, admin, SEO checklist).
- T15: `wafa-smart-tech-website.zip` = source + build + images + docs.

## 9. v2 update (same day — client feedback)

- **15 services** added: travel agency, hotel booking, school, hospital OPD, property dealer, management system (ERP) — each with own AI 3D render, full description, Order/Quote buttons.
- **Flat PKR 14,000** every service + **free domain 1 year**; combos 28K/39K. Old 10–40K band retired across all pages/JSON-LD.
- **3 demo designs before build** (Classic Blue / Golden Luxe / Modern Minimal) — hero, why-us, process step 3, per-service pages, wizard step 2, FAQ, og-cover.
- **Theme:** gold (#f4c430) + royal blue (#2f6bff), red order buttons (#d1132e), green WhatsApp/quote; logo & icons re-duotoned; hero + ai-agents + voice images regenerated gold/blue. Receptionist keeps v1 render (turn image cap) — background still matches; regenerate on request.
- QA re-run: 27 pages · 1044 links · 0 broken · 128 JSON-LD · 820 Urdu nodes → PASSED. Zip rebuilt.

## 10. v3 update — 21 services

- +6 cards with full descriptions & own gold/blue 3D renders: WhatsApp Chatbot, CV/Logo/Brand Design, Food Delivery, E-commerce Store, Online Courses (LMS), Donation & Zakat platform. Receptionist image upgraded to gold/blue too. All at flat PKR 14,000 + free domain + 3 demos.
- QA: 33 pages · 1308 links · 164 JSON-LD · 1204 Urdu nodes → PASSED.

## 11. v6 update — emergency recovery

- Added a separate **Emergency recovery** section + `/recovery.html` — intentionally outside the 21 build services.
- **Hacked Website & PHP Recovery:** PKR 7,000 · 1–3 days · malware/backdoor cleanup, blacklist removal help, access recovery, patching, hardening, clean backup, 14-day re-check.
- **Hacked WhatsApp Recovery:** PKR 5,000 · 1–2 days · official-process guidance, 2FA, linked-device cleanup, Business profile help. No OTP/password requests, no fake tools.
- Cards on home, services, pricing and contact; anchors `/recovery.html#website-php` and `/recovery.html#whatsapp`; recovery FAQ + Service JSON-LD; SW cache bumped to `wafa-v6`.
- Fixed price-card “BEST VALUE” flag centering (was causing 320px horizontal expansion).
- QA: 34 pages · 1,374 links · 157 images · 171 JSON-LD blocks · 1,301 Urdu nodes → **PASSED**; desktop/390px/320px/RTL browser tests passed.

## 12. v8 final — premium redesign + production deploy (2026-10-26)

- **Hero:** copy sits inside a CSS-3D animated panel; desktop shows the panel beside the AI visual, mobile shows a rotating 4-face product cube (Recovery / Business Website / AI & Voice / Mobile App) after the CTAs.
- **Colour system:** deep navy base + gold/emerald; service cards in green/gold/yellow with 3D depth; section rhythm cream → gold demos → orange why-us/CTA → light pricing → sky portfolio/footer; footer is sky blue with a gold top border.
- **Contrast/accessibility:** light-section cards, pricing muted text, portfolio overlays and price tags retuned; all key UI icons are inline SVG (no emoji tofu); phone numbers, counters and cube caption are bidi-isolated for Urdu RTL.
- **Mobile:** 390px and 320px compaction; CTA + cube visible quickly, WhatsApp number hides at ≤350px, floating WhatsApp hides while the cube or footer is visible; footer certification line has bottom breathing room.
- **Immediate render:** portfolio cards no longer use delayed `.rv` reveal; gallery is visible on scroll. Service/pricing reveals remain.
- **Build + QA:** 34 pages · 1,374 links · 157 images · 171 JSON-LD blocks · 1,480 Urdu nodes · 2.9 MB images · 4.9 MB dist · **0 broken links/assets**. Desktop 1440 / mobile 390 / 320 and 390 RTL browser checks: no console errors, no page-level horizontal overflow.
- **Deploy:** Firebase Hosting project **`wafasmart-tech`** (`https://wafasmart-tech.web.app`, `https://wafasmart-tech.firebaseapp.com`), 102 files released 2026-10-26.
- **Custom domain:** `https://wafasmart.tech` (`CERT_ACTIVE`, `DNS_MATCH`) and `https://www.wafasmart.tech` both return HTTP 200 with the exact deployed build (SHA-256 match with `dist/index.html`). The old root→`www` redirect was removed; root is now the canonical direct URL. `www` certificate is `CERT_PROPAGATING` and serving. Both A records point to `199.36.158.100`; TXT `hosting-site=wafasmart-tech` is present.
- **Archive:** `wafa-smart-tech-stackcp.zip` regenerated as a flat `dist/` upload (root `index.html`, `.htaccess`, `_headers`, assets).
