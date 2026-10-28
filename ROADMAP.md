# WAFA Smart Tech — 3D Redesign + SEO Roadmap

> Project: `wafasmart.tech` (Firebase Hosting: `wafasmart-tech.web.app`)
> Theme: dark navy `#070b1a` · gold `#ffc83d` · red `#ff4d5e` · green `#25d366`
> Fonts: Sora (headings) + Manrope (body) · CSS + vanilla JS only · mobile-first from 320px

---

## Phase 0 — Download & Audit ✅

- [x] Firebase login + project access verified (`wafasmart-tech`, `wafawebsolutionsacademy`)
- [x] Live site mirrored: **87 files, 24 HTML pages, 2.6 MB images, CSS/JS/fonts**
- [x] Source kept clean in `wafasmart-download/site`, working copy in `wafasmart-redesign`
- [x] Audit findings:
  - Cube faces show **icons only** — no product images
  - No reviews / testimonials section on the homepage
  - Homepage is a one-off inline build; inner pages use `styles.css` (design drift)
  - No city/keyword landing pages (Lahore, Karachi, Islamabad, KSA, Dubai…)
  - Footer internal links limited to the old 24 pages

## Phase 1 — Shared 3D Design System

- [ ] `assets/css/3d.css` — tokens, 3D cube (image faces), buttons, certificates, stats, service cards, reviews, FAQ, mobile rules
- [ ] `assets/js/3d.js` — cube rotation + swipe + dots, 3D tilt, counters, scroll reveal, FAQ, reduced-motion guard
- [ ] Buttons: 44px height / 10×20 padding / 12px radius / `0 4px 0` solid shadow / shine / press-down
- [ ] Small buttons: 38px / 13px text (cube + cards)
- [ ] `prefers-reduced-motion`: no auto-rotate, no tilt, no shine

## Phase 2 — Homepage Redesign (single HTML file)

- [ ] Hero cube: **product images inside all 4 faces** (Website, AI Agent, Mobile App, Recovery)
- [ ] Depth layers: icon/price/title `translateZ(12–18px)`
- [ ] Certificates 2×2 colour boxes (AWS orange, Google blue, Engr. Jamshaid green, ZATCA purple)
- [ ] Stats with count-up (160+, 41, 96%, 5 tiers)
- [ ] Services cards: price, icon, days, 3 checks, 2 small 3D buttons, touch/hover tilt
- [ ] **Reviews section (new)** — 3D cards, stars, Google/WhatsApp proof, mobile snap slider
- [ ] Hero CTAs in one row: red demo + green WhatsApp, floating WhatsApp 50px
- [ ] Tier/footer/areas sections mobile-first

## Phase 3 — 15 New SEO Landing Pages

| # | File | Primary keyword |
|---|------|-----------------|
| 1 | `web-development-lahore.html` | web development in Lahore |
| 2 | `website-design-lahore.html` | website design in Lahore |
| 3 | `ecommerce-website-lahore.html` | ecommerce website in Lahore |
| 4 | `mobile-app-development-lahore.html` | mobile app development Lahore |
| 5 | `ai-automation-lahore.html` | AI automation Lahore |
| 6 | `seo-services-lahore.html` | SEO services Lahore |
| 7 | `web-development-karachi.html` | web development in Karachi |
| 8 | `web-development-islamabad.html` | web development in Islamabad |
| 9 | `web-development-faisalabad.html` | web development in Faisalabad |
| 10 | `web-development-rawalpindi.html` | web development in Rawalpindi |
| 11 | `web-development-multan.html` | web development in Multan |
| 12 | `website-design-saudi-arabia.html` | website design Saudi Arabia / ZATCA |
| 13 | `web-development-dubai.html` | web development Dubai |
| 14 | `ai-agents-pakistan.html` | AI agents Pakistan |
| 15 | `whatsapp-chatbot-pakistan.html` | WhatsApp chatbot Pakistan |

Each page: unique title/description/H1, 3D hero, pricing, process, area proof, 3 FAQ, schema (Service + FAQ + Breadcrumb), internal links.

## Phase 4 — Redesign Existing 24 Pages

- [ ] Inject shared `3d.css` + `3d.js` into every page
- [ ] Auto 3D tilt on cards, reveal animations, animated gradient headings
- [ ] Consistent buttons/certificates/stats and mobile spacing
- [ ] Reviews block on About, Services, Pricing, Portfolio
- [ ] Footer "Areas we serve" links → new landing pages

## Phase 5 — SEO, QA & Handover

- [ ] `sitemap.xml` with all 39 pages, `robots.txt` update
- [ ] Internal-link graph: home → services → cities → contact
- [ ] Link/HTML check, JS syntax check, local server 200 check
- [ ] Mobile-first pass at 320/390/520/768/1180 px
- [ ] Deploy commands + Firebase hosting config (`firebase.json`, `.firebaserc`)

---

### Page inventory after build

- 1 homepage
- 24 existing inner pages (redesigned)
- 15 new location/keyword pages
- **40 HTML pages total**, all mobile-first and 3D-enhanced
