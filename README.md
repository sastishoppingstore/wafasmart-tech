# WAFA SMART TECH — Complete Website (source + build)

**Live (Firebase, current build):** <https://wafasmart-tech.web.app> · <https://wafasmart-tech.firebaseapp.com>
**Custom domain:** <https://wafasmart.tech> and <https://www.wafasmart.tech> are both live (HTTP 200, same deployed build). Root certificate is active; `www` is finishing propagation. Canonical URL remains `https://wafasmart.tech`.
**WhatsApp:** 0324 6627054 · **City:** Lahore, Pakistan
**Pricing shown:** Website **PKR 14,000** · Website + Management **20,000** · AI/voice **23,500** · Android/Windows **30,000** · iOS **35,000** · **Emergency recovery:** hacked website/PHP **7,000** · hacked WhatsApp **5,000** · FREE domain on site services · 3 demo designs before build · **Languages:** English + اردو (RTL toggle) · **Admin panel:** included
**Credentials shown:** AWS Certified · Google Certified · Engr. Jamshaid (Software Engineer, IT Ministry, Govt. of Pakistan) · Saudi Arabia ZATCA-registered · ZATCA-compliant software (KSA). Exact wording `build/src/data/site.js → trustBadges` me editable hai — publish karne se pehle certificates/registration documents verify zaroor rakhein.

> Recovery is deliberately **separate** from the 21 build services. Demo designs, free domain and source-code handover do not apply to an emergency cleanup.

---

## 1. What's inside this zip

```
wafa-smart-tech/
├── dist/                     ← FINAL BUILD — is folder ki files seedha host par upload karein
│   ├── index.html            (home: hero, 21 × 3D build services + emergency recovery, demos, pricing, portfolio, FAQ, blog)
│   ├── services.html         (21 build services + 2 emergency recovery cards + comparison table)
│   ├── recovery.html         (hacked website/PHP + hacked WhatsApp recovery, safety rules, process, FAQ)
│   ├── ai-agents.html … windows-app.html   (21 SEO service pages, red Order Now + green Quote buttons)
│   ├── pricing.html          (5 build tiers + recovery strip/table + per-service table + add-ons + PKR⇄USD toggle)
│   ├── portfolio.html · about.html · contact.html
│   ├── blog.html + blog/*.html (2 SEO articles)
│   ├── admin.html            (client CMS: leads, editor, exports)
│   ├── 404.html · offline.html · sw.js · manifest.webmanifest
│   ├── sitemap.xml · robots.txt
│   └── assets/ (css, js, responsive WebP images, favicons, og-cover.jpg, .htaccess)
├── build/                    ← SOURCE CODE (edit & rebuild)
│   ├── build.js              (zero-dependency static generator)
│   ├── src/css/styles.css    src/js/main.js i18n.js admin.js
│   ├── src/data/site.js      ← SAARI CONTENT YAHAN HAI (build prices, recovery rates, services, text, Urdu)
│   ├── src/assets/img/raw/   (original AI-generated art)
│   └── scripts/ (optimize-images.py, check.js QA gate)
├── PLAN.md  (plan + full task list)   └── README.md (ye file)
├── firebase.json               ← Firebase Hosting config (public root = dist)
└── .firebaserc                 ← Firebase project alias — live default: `wafasmart-tech`
```

## 2. Rebuild locally (optional)

Koi npm install nahi chahiye — sirf Node 18+:

```bash
node build/build.js          # re-generates dist/
node build/scripts/check.js  # QA gate: links, SEO, assets (must say PASSED)
python3 build/scripts/optimize-images.py   # re-compress images (needs Pillow)
```

Sab kuch `build/src/data/site.js` se badalta hai: **prices, service names, Urdu text, FAQ, portfolio, blog** — sirf yahi file edit karke rebuild chalain.

Current QA baseline (2026-10-26): **34 pages · 1,374 links · 157 images · 171 JSON-LD blocks · 1,480 Urdu nodes · 2.9 MB images · 4.9 MB dist · 0 broken links/assets**.

## 3. Deploy on wafasmart.tech

### StackCP / cPanel (recommended for this zip)
1. StackCP → **File Manager** → `public_html/`
2. `wafa-smart-tech-stackcp.zip` upload karein → **Extract** (zip ke andar `index.html` root par hai)
3. `.htaccess` hidden file extract hui hai ya nahi check karein (gzip + caching isi se chalti hai)
4. StackCP → **SSL/TLS** → AutoSSL / Let's Encrypt enable karein
5. Browser me `https://wafasmart.tech/` kholein; `sitemap.xml` bhi check karein

### Other options

### A) cPanel / traditional hosting (sab se aam in Pakistan)
1. File Manager → `public_html/`
2. Zip ka **`dist/` folder ka content** (folder nahi, andar ki files) upload karein
3. SSL: cPanel → SSL/TLS Status → **Run AutoSSL** (free Let's Encrypt)
4. DNS: domain ke liye A record = hosting IP, ya nameservers pointing (wafasmart.tech + www)
5. Check: `https://wafasmart.tech/sitemap.xml` khulta ho → done. Google Search Console me sitemap submit karein.

### B) Netlify (free, 2 minute)
`app.netlify.com/drop` par **dist** folder drag karein → Domain settings → `wafasmart.tech` add → DNS me diye gaye records apne domain registrar me lagayein → HTTPS auto.

### C) Cloudflare Pages (free, fastest in PK)
Pages → Create project → `dist` upload → custom domain `wafasmart.tech` → Cloudflare DNS me CNAME. SSL = Full(strict).

### D) Firebase Hosting (ready — `firebase.json` included)
Firebase config already set hai: public root **`dist`**, `.html` URLs preserve (`cleanUrls: false`), 404 automatic, cache + security headers Firebase par bhi lagte hain, `sw.js` no-cache. `.htaccess` Firebase ignore karta hai — uski jagah `firebase.json` headers use hoti hain.

1. Live Firebase project **`wafasmart-tech`** already configured hai (`.firebaserc` + `firebase.json`); naya project banane ki zaroorat nahi.
2. Firebase CLI install + login (agar naye machine par ho):
   ```bash
   npm install -g firebase-tools
   firebase login
   ```
3. Build + deploy (project root `wafa-smart-tech/` me):
   ```bash
   node build/build.js
   node build/scripts/check.js
   firebase deploy --only hosting --project wafasmart-tech
   ```
   Current deploy: **2026-10-26**, 102 files. Live URLs: `https://wafasmart-tech.web.app` aur `https://wafasmart-tech.firebaseapp.com`.
4. **Custom domain:** `https://wafasmart.tech` (`CERT_ACTIVE`, `DNS_MATCH`) aur `https://www.wafasmart.tech` dono live hain aur same build serve karte hain (HTTP 200). Root ka purana `www` redirect hata diya gaya hai; root ab direct site serve karta hai. `www` ka certificate `CERT_PROPAGATING` hai — serve ho raha hai, bas CDN propagation complete hone baqi hai. DNS root + www dono `199.36.158.100` par hain aur TXT `hosting-site=wafasmart-tech` present hai.
5. Agar sirf `PROJECT.web.app` par deploy kar rahe hain to canonical/OG abhi bhi `https://wafasmart.tech` hain. Custom domain active hone ke baad yahi canonical rahega; project URL par test karte waqt SEO duplicate signals ignore karein.

> Firebase Spark (free) plan static hosting ke liye kaafi hai. Har deploy se pehle `node build/scripts/check.js` zaroor chalayein.

> **www vs root:** Primary/canonical URL **`https://wafasmart.tech`** hai. `www` bhi live hai, lekin certificate propagation complete hone tak kuch networks par HTTPS warning aa sakti hai. `.web.app` URLs deployment/testing ke liye available hain.

## 4. SEO checklist (already built-in)

Done for you: unique titles/descriptions, canonicals, hreflang en/ur, OpenGraph + Twitter, JSON-LD (Organization, LocalBusiness, 21× build Service + 2× recovery Service with PKR offers, OfferCatalog, FAQPage, BreadcrumbList, Article), sitemap.xml, robots.txt, alt tags, responsive WebP images, PWA manifest, 404/offline, gzip + cache headers. `recovery.html` has its own FAQPage and breadcrumb schema.

Aapka 5-minute ka kaam after launch: Google **Search Console** + **Business Profile (Lahore)** + og-cover check `https://wafasmart.tech/assets/img/og-cover.jpg`.

## 5. Emergency recovery (`/recovery.html`)

Low-price, separate recovery service — **not** part of the 21 build services, so the 3-demo/source-code/domain promises are not applied to it.

| Recovery service | Fixed rate | Delivery | Covers |
|---|---|---|---|
| **Hacked Website & PHP Recovery** | **PKR 7,000** | 1–3 days | WordPress, WooCommerce, Laravel, custom PHP, HTML/CMS |
| **Hacked WhatsApp Recovery** | **PKR 5,000** | 1–2 days | Account recovery assistance, 2FA, linked devices, Business profile |

- **Website/PHP includes:** malware & PHP backdoor cleanup, spam redirect removal, Google Safe Browsing/blacklist removal help, cPanel/admin access recovery, plugin/PHP patching, firewall + 2FA hardening, clean backup and a 14-day re-infection check.
- **WhatsApp includes:** guidance through WhatsApp’s **official** recovery flow, SIM/OTP verification guidance, 2FA/PIN setup, linked-device cleanup, Business profile restore help and a staff scam-protection checklist.
- **Safety:** proof of ownership is required for websites; WhatsApp work is only for the owner/authorised representative. We never ask for an OTP, password or 2FA code, and we never use fake recovery tools.
- **Payment:** free inspection first → confirm scope → 50% advance → 50% on handover. If recovery is not possible, we say so before charging.
- **Links:** `/recovery.html#website-php` and `/recovery.html#whatsapp`. Cards also appear on the home, services, pricing and contact pages. Recovery CTAs go straight to WhatsApp/contact — they intentionally bypass the build quote wizard.

## 6. Admin panel (`/admin.html`)

- Default password: **`wafa@2026`** → pehla login ke baad **badlein** (Guide tab)
- **Leads inbox:** contact form + quote wizard ki entries (browser-local storage) — WhatsApp reply, mark done, CSV export
- **Content/Pricing editor:** hero text, WhatsApp number, address, package & service prices — save karte hi *is browser* me live (runtime overrides). Permanent change = `build/src/data/site.js` me update + rebuild (admin Export JSON dekh kar values copy karein). Recovery rates `site.js → recovery[]` me hain aur `content.json` me export hoti hain.
- Panel client-side hai → koi server/DB nahi, data leak ka koi surface nahi

## 7. WhatsApp order flow

Har **Order Now / Get Quote / WhatsApp** button `wa.me/923246627054` par service + package + page ke saath pre-filled message kholta hai. Quote wizard 4 step hai (service → demo style → contact → confirm). **Recovery buttons alag hain** — wo seedha WhatsApp/contact kholte hain aur build quote wizard nahi dikhate. Number change: `site.js → contact.whatsapp = "923XXXXXXXXX"` + rebuild, ya admin se live override.

## 8. Design system cheatsheet

**Final palette:** deep navy `--bg #050d20` · gold `--gold #f4c430` · emerald `--green #25d366` · warm orange `--orange #ff8a00` · sky `--sky #bfe6ff` · ink `--ink #0b1b33`.
**Signature UI:** 3D hero panel (`.hero-panel`) + rotating mobile product cube (`.hero-cube`), green/gold/yellow service cards, alternating cream/light/sky/gold/orange sections, sky-blue footer with gold top border. 3D tilt: `.svc-card[data-tilt]`; gradient text: `.grad-txt`; reveal: `.rv`; Urdu: `data-ur="..."` (i18n.js swaps + `body[dir="rtl"]`). Reduced-motion supported. Icons are inline SVG (no emoji dependency); phone numbers/cube caption use bidi isolation.

## 9. Notes / upgrade path

- `info@wafasmart.tech` email placeholder hai — apna email site par chahiye to `site.js` me edit karein
- Images: AI-generated 3D renders (raw PNG) → **responsive WebP only** (480/880 cards, 800/1280/1600 hero). No heavy PNG fallbacks; OG cover is optimised JPEG (~155 KB).
- Bara upgrade chahiye (real DB, email API, user accounts): same structure par Node/PHP backend add ho sakta hai — `data/content.json` already ready-made feed hai

*Built as a static-first, Lighthouse-friendly site: zero external JS/CSS dependencies — 100% offline-safe inside the zip.*
