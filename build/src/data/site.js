// ============================================================
// WAFA SMART TECH — central content model (v4 · 21 services + recovery)
// Fixed rate card: website 14,000 · website + management 20,000
// AI / voice 23,500 · Android / Windows 30,000 · iOS 35,000
// 3 demo designs before any project starts — client picks one
// Emergency recovery: hacked website/PHP 7,000 · WhatsApp 5,000
// ============================================================

const PRICE = 14000;
const FIXED = "Fixed rates from PKR 14,000";
const TIERS = {
  website: 14000,
  management: 20000,
  ai: 23500,
  android: 30000,
  ios: 35000,
  windows: 30000,
  design: 14000
};
const SERVICE_PRICES = {
  "ai-agents": TIERS.ai,
  "voice-agents": TIERS.ai,
  "ai-receptionist": TIERS.ai,
  "website-design": TIERS.website,
  "travel-agency": TIERS.website,
  "hotel-website": TIERS.website,
  "school-website": TIERS.website,
  "hospital-website": TIERS.website,
  "property-portal": TIERS.management,
  "management-system": TIERS.management,
  "job-portal": TIERS.management,
  "website-management": TIERS.management,
  "android-app": TIERS.android,
  "ios-app": TIERS.ios,
  "windows-app": TIERS.windows,
  "whatsapp-bot": TIERS.ai,
  "design-studio": TIERS.design,
  "food-restaurant": TIERS.management,
  "ecommerce-store": TIERS.management,
  "lms-platform": TIERS.management,
  "donation-platform": TIERS.management
};
const DEMOS = [
  { n: "Demo A — Classic Blue", style: "Trust-first corporate look", d: "Clean sections, royal-blue palette, big contact bar — perfect for clinics, schools and firms.", feats: ["Sticky glass nav", "3D service cards", "WhatsApp order strip", "Google-map block"] },
  { n: "Demo B — Golden Luxe", style: "Premium dark + gold", d: "Rich navy canvas, gold accents, cinematic hero motion — favourite of hotels, builders and brand sites.", feats: ["Gold shimmer CTAs", "Cinematic 3D hero", "Gallery + offer rails", "Booking widget ready"] },
  { n: "Demo C — Modern Minimal", style: "Airy, motion-first", d: "Bold type, lots of space, smooth micro-animations — startups, portals and e-commerce pick this one.", feats: ["Ultra-fast layout", "Scroll animations", "Filter + search UI", "Admin-first design"] }
];

const brand = {
  name: "Wafa Smart Tech",
  nameUr: "وفا سمارٹ ٹیک",
  domain: "wafasmart.tech",
  url: "https://wafasmart.tech",
  tagline: "AWS & Google certified · IT Ministry, Govt. of Pakistan · ZATCA-registered KSA · fixed rates from PKR 14,000.",
  taglineUr: "ای ڈبلیو ایس اور گوگل سرٹیفائیڈ · آئی ٹی وزارت، حکومتِ پاکستان · سعودی عرب (زاتکا) میں رجسٹرڈ · مقررہ ریٹ ۱۴,۰۰۰ سے۔",
  founded: "2023",
  city: "Lahore",
  desc: "Wafa Smart Tech, Lahore — AWS & Google certified team · Engr. Jamshaid, Software Engineer (IT Ministry, Govt. of Pakistan) · Saudi Arabia ZATCA-registered and KSA govt-affiliated ZATCA-compliant software company. Clear fixed rates: websites PKR 14,000, website + management 20,000, AI agents & voice 23,500, Android/Windows apps 30,000, iOS 35,000. FREE domain with site services, 3 demo designs before we build. Emergency recovery: hacked website/PHP PKR 7,000, hacked WhatsApp PKR 5,000.",
  descUr: "وفا سمارٹ ٹیک لاہور — ای ڈبلیو ایس اور گوگل سرٹیفائیڈ ٹیم · انجینئر جمشید، سافٹ ویئر انجینئر (آئی ٹی وزارت، حکومتِ پاکستان) · سعودی عرب میں زاتکا رجسٹرڈ اور کے ایس اے حکومتی الحاق والی زاتکا کمپلائنٹ سافٹ ویئر کمپنی۔ صاف مقررہ ریٹ: ویب سائٹ ۱۴,۰۰۰، ویب سائٹ + مینجمنٹ ۲۰,۰۰۰، اے آئی/وائس ۲۳,۵۰۰، اینڈرائیڈ/ونڈوز ۳۰,۰۰۰، آئی او ایس ۳۵,۰۰۰۔ سائٹ سروسز پر ڈومین فری، تعمیر سے پہلے تین ڈیمو ڈیزائن۔ ایمرجنسی ریکوری: ہیک ویب سائٹ/پی ایچ پی ۷,۰۰۰، ہیک واٹس ایپ ۵,۰۰۰۔"
};

const contact = {
  whatsapp: "923246627054",
  whatsappDisplay: "0324 6627054",
  phoneRaw: "+92 324 6627054",
  email: "info@wafasmart.tech",
  address: "Lahore-Sharqpur Road, near 20 km, Lahore, Punjab, Pakistan",
  addressUr: "لاہور شہر پور روڈ، تقریباً 20 کلومیٹر، لاہور، پنجاب، پاکستان",
  hours: "Mon – Sat · 10:00 AM – 8:00 PM (PKT)",
  hoursUr: "پیر – ہفتہ · صبح ۱۰ تا شام ۸ (پاکستانی وقت)",
  mapQuery: "Lahore-Sharqpur Road near 20 km Lahore Pakistan"
};

const hero = {
  eyebrow: "Lahore · AWS & Google Certified",
  titleA: "Websites, AI agents & apps. ",
  titleGrad: "Fixed rates. No\u00A0300K quotes.",
  titleB: "",
  titleUr: "ویب سائٹس، اے آئی اور ایپس — مقررہ ریٹ، کوئی ۳۰۰ ہزار کا کوٹ نہیں۔",
  sub: "Custom websites, AI agents and apps for serious businesses. Fixed prices from PKR 14,000, 3 free demo designs, a free domain and 100% source-code ownership. 160+ projects delivered in Lahore & Saudi Arabia. Hacked? Recovery from PKR 5,000.",
  subUr: "کاروبار کے لیے جدید ویب سائٹس، اے آئی ایجنٹس اور ایپس — مقررہ قیمت ۱۴,۰۰۰ سے، ۳ مفت ڈیمو، ڈومین فری اور مکمل سورس کوڈ آپ کی ملکیت۔ لاہور اور سعودی عرب میں ۱۶۰+ پروجیکٹس مکمل۔ ہیک؟ ریکوری ۵,۰۰۰ سے۔",
  ctaMain: "Get Free Demo",
  ctaWa: "WhatsApp: 0324 6627054",
  ur: "مقررہ ریٹ: ویب سائٹ ۱۴,۰۰۰ · اے آئی ۲۳,۵۰۰ · اینڈرائیڈ ۳۰,۰۰۰ · آئی او ایس ۳۵,۰۰۰۔"
};

const stats = [
  { n: 160, suffix: "+", label: "Projects delivered", labelUr: "مکمل شدہ پروجیکٹس" },
  { n: 41, suffix: "", label: "AI agents & bots live", labelUr: "لائیو اے آئی ایجنٹس" },
  { n: 96, suffix: "%", label: "Clients who reorder", labelUr: "دوبارہ آرڈر کرنے والے" },
  { n: 5, suffix: " tiers", label: "Fixed rates from PKR 14,000", labelUr: "مقررہ ریٹ ۱۴ ہزار سے" }
];

const trust = ["AWS Certified", "Google Certified", "IT Ministry, Govt. of Pakistan", "Registered in Saudi Arabia (ZATCA)", "ZATCA-Compliant Software", "From PKR 14,000 · Fixed rates", "Hacked Website / PHP Recovery", "Hacked WhatsApp Recovery", "Domain FREE", "3 Demo Designs — pick your favourite", "AI Agents & Voice AI", "AI Receptionist", "Travel / Hotel / School / Hospital Sites", "Property & E-commerce Portals", "WhatsApp Bots", "Food Ordering Sites", "LMS Course Platforms", "Donation & Zakat", "Management Systems (ERP)", "CV · Logo · Brand Design", "Android / iOS / Windows Apps", "SEO + WhatsApp Orders"];

/* Trust / credential badges — replace labels with exact certificate, registration
   or licence wording (and keep supporting documents). Shown in the hero + footer. */
const trustBadges = [
  { icon: "shield", label: "AWS Certified", sub: "Amazon Web Services", labelUr: "ای ڈبلیو ایس سرٹیفائیڈ", subUr: "ایمازون ویب سروسز" },
  { icon: "spark", label: "Google Certified", sub: "Google Cloud & Workspace", labelUr: "گوگل سرٹیفائیڈ", subUr: "گوگل کلاؤڈ اور ورک اسپیس" },
  { icon: "brief", label: "Engr. Jamshaid", sub: "Software Engineer · IT Ministry, Govt. of Pakistan", labelUr: "انجینئر جمشید", subUr: "سافٹ ویئر انجینئر · آئی ٹی وزارت، حکومتِ پاکستان" },
  { icon: "layers", label: "Saudi Arabia Registered", sub: "ZATCA · KSA", labelUr: "سعودی عرب میں رجسٹرڈ", subUr: "زاتکا · کے ایس اے" },
  { icon: "check", label: "ZATCA-Compliant Software", sub: "KSA Govt-Affiliated", labelUr: "زاتکا کمپلائنٹ سافٹ ویئر", subUr: "کے ایس اے حکومتی الحاق" }
];

const whyUs = [
  { icon: "spark", t: "3 free demo designs", u: "تین مفت ڈیمو ڈیزائن", d: "Classic Blue, Golden Luxe or Modern Minimal — three complete demos of YOUR project. Pick one, we finish it. No design guesswork." },
  { icon: "shield", t: "Fixed rate card, no surprises", u: "مقررہ ریٹ — کوئی چھپا چارج نہیں", d: "Website PKR 14,000 · website + management 20,000 · AI/voice 23,500 · apps 30,000/35,000. Written quote, domain free on site services, no shock invoices." },
  { icon: "brain", t: "Real AI, not hype", u: "اصلی اے آئی، ڈھکوسلا نہیں", d: "GPT-class LLMs, speech-to-text & telephony wired into WhatsApp, calls, admin panels and your database — trained on your business." },
  { icon: "phone", t: "WhatsApp-first support", u: "واٹس ایپ پر فوری رابطہ", d: "Talk to the actual developers on 0324 6627054. Urdu, English, Roman Urdu — your choice. Replies in minutes." },
  { icon: "chart", t: "SEO & speed baked in", u: "ایس او اور رفتار شامل", d: "Static-fast pages, schema markup, sitemap, local Lahore keywords — you get found, not just built." },
  { icon: "infinity", t: "You own everything", u: "ہر چیز کی ملکیت آپ کی", d: "Source code, domain, hosting, admin panel — handed over. No lock-in, ever." }
];

const process = [
  { icon: "wa", t: "Free consultation", u: "مفت مشاورت", d: "WhatsApp 0324 6627054. Share your idea — scope, questions and advice are free.", dUr: "واٹس ایپ ۰۳۲۴ ۶۶۲۷۰۵۴۔ اپنا آئیڈیا بتائیں — اسکوپ، سوالات اور مشورہ مفت۔" },
  { icon: "brief", t: "Fixed rate locked", u: "مقررہ ریٹ لاک", d: "Written quote, delivery date and 50% advance. No hidden charges.", dUr: "تحریری کوٹ، ڈیلیوری تاریخ اور ۵۰٪ ایڈوانس۔ کوئی چھپا چارج نہیں۔" },
  { icon: "pen", t: "3 free demo designs", u: "۳ مفت ڈیمو ڈیزائن", d: "Blue, Gold or Minimal — pick the one you love.", dUr: "بلیو، گولڈ یا منیمل — جو پسند آئے وہ چنیں۔" },
  { icon: "code", t: "Build on your design", u: "آپ کے ڈیزائن پر تعمیر", d: "Your content, logo, mobile QA and WhatsApp updates.", dUr: "آپ کا مواد، لوگو، موبائل QA اور واٹس ایپ اپڈیٹس۔" },
  { icon: "bolt", t: "Launch, SEO & handover", u: "لانچ، ایس او اور حوالگی", d: "SSL, SEO, sitemap, admin access and source code — all yours.", dUr: "SSL، ایس او، سائٹ میپ، ایڈمن رسائی اور سورس کوڈ — سب آپ کا۔" },
  { icon: "chart", t: "Monthly care (optional)", u: "ماہانہ دیکھ بھال (اختیاری)", d: "PKR 5,000/month — updates, backups and reports.", dUr: "۵,۰۰۰ روپے ماہانہ — اپڈیٹس، بیک اپ اور رپورٹس۔" }
];

/* ================= SERVICES (21) — fixed rate card ================= */
const services = [
  {
    slug: "ai-agents", icon: "bot",
    name: "AI Agents & Automation", nameUr: "اے آئی ایجنٹس اور آٹومیشن",
    img: "service-ai-agents",
    page: "Custom AI agents that research, reply, qualify leads and run daily operations on autopilot — wired into WhatsApp, email, sheets and your database. Your price: PKR 14,000 fixed, 3 demo dashboards first.",
    pageUr: "حسبِ ضرورت اے آئی ایجنٹ جو ریسرچ کریں، جواب دیں، لیڈز چھانٹیں اور روزمرہ کام چلائیں — واٹس ایپ، ای میل اور ڈیٹابیس سے جڑے ہوئے۔ ایک قیمت چودہ ہزار، پہلے تین ڈیمو۔",
    short: "24/7 agents on WhatsApp, email & CRM", shortUr: "۲۴/۷ کام کرنے والے اے آئی ایجنٹ",
    days: "7–12", features: ["Lead qualification + auto follow-ups", "Multi-tool: browse, calculate, tickets", "Human handover with transcript", "English, Urdu & Roman Urdu", "Weekly report on WhatsApp"],
    kw: ["ai agent pakistan", "ai automation lahore", "whatsapp ai bot"]
  },
  {
    slug: "voice-agents", icon: "wave",
    name: "Voice AI Agents", nameUr: "وائس اے آئی ایجنٹس",
    img: "service-voice",
    page: "AI voices that call and answer like humans — booking, reminders, surveys and payment follow-ups over phone lines and WhatsApp voice notes. Urdu + English, natural accents, PKR 14,000 fixed.",
    pageUr: "ایسی اے آئی آواز جو انسان کی طرح بات کرے — بکنگ، ریمائنڈر، سروے اور وصولی، اردو اور انگریزی دونوں۔ ایک قیمت چودہ ہزار۔",
    short: "Human-like calling & voice bots", shortUr: "انسان جیسی بات کرنے والی آواز",
    days: "7–10", features: ["Inbound answering + outbound campaigns", "Natural Urdu & English voices", "Call recording + AI summary", "CRM write-back", "Twilio / WhatsApp Cloud API"],
    kw: ["voice ai agent pakistan", "ai calling bot", "ai telecaller lahore"]
  },
  {
    slug: "ai-receptionist", icon: "desk",
    name: "AI Receptionist", nameUr: "اے آئی ریسیپشنسٹ",
    img: "service-receptionist",
    page: "Clinic, salon, firm or shop: every call and WhatsApp answered in seconds, 24/7 — books appointments, shares timings & prices, takes messages. PKR 14,000 — front-desk replacement that never sleeps.",
    pageUr: "کلینک، سیلون یا دکان کا ہر فون اور واٹس ایپ سیکنڈوں میں جواب، بیس چوبیس گھنٹے — اپائنٹمنٹ، قیمت، اوقات۔ ایک قیمت چودہ ہزار۔",
    short: "24/7 phone + WhatsApp front desk", shortUr: "۲۴/۷ فرنٹ ڈیسک",
    days: "5–8", features: ["Missed-call & WhatsApp auto-reply", "Google Calendar booking + reminders", "FAQ: prices, timings, directions", "Daily owner summary", "Urdu / English / Roman Urdu"],
    kw: ["ai receptionist lahore", "clinic appointment bot", "missed call auto reply"]
  },
  {
    slug: "website-design", icon: "code",
    name: "Business Website (3D · SEO)", nameUr: "بزنس ویب سائٹ (تھری ڈی · ایس او)",
    img: "service-website",
    page: "A stunning, lightning-fast business or landing site with 3D animated cards, WhatsApp ordering, full on-page SEO — plus a FREE domain for one year. Fixed price: PKR 14,000.",
    pageUr: "تیز اور خوبصورت بزنس یا لینڈنگ ویب سائٹ — تھری ڈی کارڈز، واٹس ایپ آرڈر، مکمل ایس او اور ایک سال ڈومین فری۔ ایک قیمت چودہ ہزار۔",
    short: "Company sites & landing pages, SEO-ready", shortUr: "کمپنی ویب سائٹس اور لینڈنگ پیجز",
    days: "4–10", features: ["3 demo designs — pick your favourite", "3D animated sections like this site", "Full on-page + local SEO", "WhatsApp / call buttons on every screen", "FREE domain 1 year + SSL setup help"],
    kw: ["website design lahore", "small business website pakistan price", "seo website pakistan"]
  },
  {
    slug: "travel-agency", icon: "plane",
    name: "Travel Agency Website & Booking", nameUr: "ٹریول ایجنسی ویب سائٹ اور بکنگ",
    img: "service-travel",
    page: "Umrah, honeymoon & tour packages with live itinerary pages, enquiry-to-WhatsApp booking, agent login and PDF quotations. Sell trips while you sleep — PKR 14,000 with free domain.",
    pageUr: "عمرہ، ہنی مون اور ٹور پیکجز — لائیو آئٹنرری pages، واٹس ایپ بکنگ، ایجنٹ لاگ ان، پی ڈی ایف کوٹیشن۔ ایک قیمت چودہ ہزار، ڈومین فری۔",
    short: "Tour packages, itineraries & WhatsApp booking", shortUr: "ٹور پیکجز، آئٹنرری اور بکنگ",
    days: "5–9", features: ["Package pages with dates & pricing", "Enquiry → WhatsApp booking flow", "Agent/reseller login with commissions", "PDF quotation generator", "FREE domain + Google Business setup"],
    kw: ["travel agency website pakistan", "umrah website lahore", "tour booking site"]
  },
  {
    slug: "hotel-website", icon: "hotel",
    name: "Hotel & Resort Website (Booking)", nameUr: "ہوٹل اور ریزارٹ ویب سائٹ",
    img: "service-hotel",
    page: "Direct-booking hotel site — room gallery, seasonal rates, availability calendar, WhatsApp reservations and a offers engine your manager can run. PKR 14,000 fixed, free domain.",
    pageUr: "ہوٹل کی براہِ راست بکنگ ویب سائٹ — روم گیلری، موسمی ریٹ، دستیابی کیلنڈر، واٹس ایپ ریزرویشن اور آفرز ایڈمن۔ چودہ ہزار مقررہ، ڈومین فری۔",
    short: "Rooms, rates & direct WhatsApp reservations", shortUr: "کمرے، ریٹ اور براہِ راست بکنگ",
    days: "5–9", features: ["Room cards with price + gallery", "Booking calendar → WhatsApp confirm", "Offers/deal rail with expiry", "Owner dashboard for rates", "3 demo looks: Blue / Gold / Minimal"],
    kw: ["hotel website development pakistan", "resort booking site", "guest house website"]
  },
  {
    slug: "school-website", icon: "cap",
    name: "School Website & Admission Portal", nameUr: "سکول ویب سائٹ اور ایڈمیشن پورٹل",
    img: "service-school",
    page: "Admissions online! Prospective-parent portal: forms with document upload, fee structure pages, results/news, and an admin to review applications. PKR 14,000 with free domain.",
    pageUr: "داخلے آن لائن! والدین کے لیے فارم اور دستاویزات اپ لوڈ، فی سٹرکچر، نتائج اور خبریں، ایڈمن سے درخواستوں کی جانچ۔ ایک قیمت چودہ ہزار، ڈومین فری۔",
    short: "Admissions, notices, results & parent portal", shortUr: "داخلے، نوٹس، نتائج اور پورٹل",
    days: "5–10", features: ["Admission form + document upload", "Fee structure & notice board", "Results / event publishing (admin)", "SMS/WhatsApp to applicants", "Student & staff photo galleries"],
    kw: ["school website pakistan", "admission portal development", "school management website"]
  },
  {
    slug: "hospital-website", icon: "cross",
    name: "Hospital & Clinic Website + OPD", nameUr: "ہسپتال اور کلینک ویب سائٹ + او پی ڈی",
    img: "service-hospital",
    page: "Doctor profiles with specialities, online OPD token & appointment booking, departments, emergency strip and health-package pages — trust-grade design. PKR 14,000, free domain.",
    pageUr: "ڈاکٹرز کی پروفائل، آن لائن او پی ڈی ٹوکن اور اپائنٹمنٹ، محکمے، ایمرجنسی بینر اور ہیلتھ پیکجز — بھروسے والا ڈیزائن۔ چودہ ہزار، ڈومین فری۔",
    short: "Doctors, OPD tokens & appointment booking", shortUr: "ڈاکٹرز، ٹوکن اور اپائنٹمنٹ",
    days: "5–10", features: ["Doctor & department pages", "OPD token booking → WhatsApp + SMS", "Emergency & blood-bank info block", "Health package offers page", "Admin for schedules & news"],
    kw: ["hospital website pakistan", "clinic appointment website", "doctor booking site"]
  },
  {
    slug: "property-portal", icon: "home",
    name: "Property Dealer Portal", nameUr: "پراپرٹی ڈیلر پورٹل",
    img: "service-property",
    page: "Buy/resort/rent listings portal for dealers: plots & houses with map pins, filters, shortlist, verified dealer badges, featured-ad revenue and WhatsApp site-visits. PKR 14,000 fixed.",
    pageUr: "ڈیلرز کے لیے خرید و فروخت اور کرایے کی لسٹنگ پورٹل: نقشے کے ساتھ پلاٹ اور گھر، فلٹر، شارٹ لسٹ، تصدیق شدہ بیجز، فیچرڈ اشتہار کی آمدنی، واٹس ایپ وزٹ۔ چودہ ہزار۔",
    short: "Listings, maps, filters & featured ads", shortUr: "لسٹنگ، نقشہ، فلٹر اور اشتہارات",
    days: "7–12", features: ["Plot/house listings with photos & maps", "Search filters: price, area, type", "Shortlist + WhatsApp to dealer", "Featured-listing revenue for you", "Dealer verification & admin panel"],
    kw: ["property dealer website pakistan", "real estate portal lahore", "plots website development"]
  },
  {
    slug: "management-system", icon: "layers",
    name: "Management System (ERP · Web/App)", nameUr: "مینجمنٹ سسٹم (ای آر پی · ویب/ایپ)",
    img: "service-management",
    page: "School, hospital, shop, fleet or HR management system — roles, real-time dashboards, invoicing, inventory, reports on WhatsApp. Web + offline-tolerant. PKR 14,000 for the core system.",
    pageUr: "سکول، ہسپتال، دکان، فلیٹ یا ایچ آر مینجمنٹ سسٹم — کردار، لائیو ڈیش بورڈ، بلنگ، اسٹاک، رپورٹس واٹس ایپ پر۔ بنیادی سسٹم چودہ ہزار۔",
    short: "Invoicing, inventory, users & live reports", shortUr: "بلنگ، اسٹاک، صارفین اور رپورٹس",
    days: "8–14", features: ["Role-based admin (owner/staff/accountant)", "Invoices + SMS/WhatsApp receipts", "Inventory / students / patients modules", "Daily summary report on WhatsApp", "Works on phone + desktop, cloud backup"],
    kw: ["management system pakistan", "school erp software", "billing inventory system"]
  },
  {
    slug: "job-portal", icon: "brief",
    name: "Job & Earning Portals", nameUr: "جاب اور کمائی کے پورٹلز",
    img: "service-job-portal",
    page: "Platforms where people work from home and earn: job boards, freelance marketplaces, task & reward portals with verification, wallets and referral engine — you run the admin. PKR 14,000 for the MVP portal.",
    pageUr: "ایسے پورٹلز جہاں لوگ گھر بیٹھے کماتے ہیں: جاب بورڈ، فریلانسی، ٹاسک و انعام، تصدیق، والٹ اور ریفرل — ایڈمن آپ کا۔ ایم وی پی پورٹل چودہ ہزار۔",
    short: "Work-from-home earning platforms", shortUr: "گھر بیٹھے کمائی کے پلیٹ فارم",
    days: "10–20", features: ["Employer & seeker accounts + KYC", "Featured-job / promoted-gig revenue", "Wallet, ledger & payout queue", "Referral & task-reward engine", "Super-admin: approve, ban, analytics"],
    kw: ["job portal development pakistan", "work from home portal", "earning app pakistan"]
  },
  {
    slug: "website-management", icon: "gear",
    name: "Website Management System", nameUr: "ویب سائٹ مینجمنٹ سسٹم",
    img: "service-cms",
    page: "Your own admin panel: change text, images, prices, publish blogs/offers and see inquiries — no developer needed, Urdu-friendly UI. Add it with any site for PKR 14,000 (care-plan bundle).",
    pageUr: "اپنی ویب سائٹ کا ذاتی ایڈمن پینل: ٹیکسٹ، تصاویر، قیمتیں، بلاگ اور آفرز، انکوائری — ڈویلپر کی ضرورت نہیں، اردو فرینڈلی۔ سسٹم چودہ ہزار میں۔",
    short: "Admin panel + care plan for your site", shortUr: "ایڈمن پینل اور دیکھ بھال پلان",
    days: "3–7", features: ["Visual edit of any page text/media", "Blog / offers / products publishing", "Inquiry inbox with CSV export", "Roles: owner, editor, staff", "Auto-backup to Drive/GitHub"],
    kw: ["website management system pakistan", "custom cms lahore", "website maintenance plan"]
  },
  {
    slug: "android-app", icon: "droid",
    name: "Android App Development", nameUr: "اینڈرائیڈ ایپ ڈویلپمنٹ",
    img: "service-android",
    page: "Native-feel Android apps — delivery, booking, reseller, attendance, e-commerce — Play Store published with push notifications and matching admin panel. Launch tier at PKR 14,000; extended scope quoted from the same rate card.",
    pageUr: "اصلی انداز کی اینڈرائیڈ ایپس — ڈیلیوری، بکنگ، ریسیلنگ، حاضری، ای کامرس — پلے اسٹور، پش نوٹیفکیشن اور ایڈمن پینل۔ لانچ ٹئر چودہ ہزار، بڑے سکوپ کی قیمت اسی ریٹ کارڈ سے۔",
    short: "Play-Store apps with push + admin", shortUr: "پلے اسٹور ایپ، پش اور ایڈمن",
    days: "10–21", features: ["Kotlin/Flutter, smooth 60fps UI", "Firebase push, auth & cloud DB", "Play Store submission handled", "Admin panel with real-time data", "Crash & analytics monitoring"],
    kw: ["android app development lahore", "app banao pakistan", "play store app price"]
  },
  {
    slug: "ios-app", icon: "apple",
    name: "iOS App Development", nameUr: "آئی او ایس ایپ ڈویلپمنٹ",
    img: "service-ios",
    page: "App Store-ready iOS apps with Apple-grade polish, TestFlight beta and full submission support — shared backend with your Android build & admin panel. Core launch tier PKR 14,000.",
    pageUr: "ایپ اسٹور کے لیے تیار آئی او ایس ایپس، ایپل کے معیار کی پالش، ٹیسٹ فلائٹ اور مکمل جمع کروائی — اینڈرائیڈ سے مشترکہ بیک اینڈ۔ بنیادی لانچ چودہ ہزار۔",
    short: "App Store apps with Apple-grade polish", shortUr: "ایپ اسٹور کے لیے پالش شدہ ایپس",
    days: "12–21", features: ["SwiftUI or Flutter, native feel", "Apple Developer account setup help", "TestFlight beta with your team", "Push + Sign in with Apple", "App Store review responses handled"],
    kw: ["ios app development pakistan", "iphone app lahore", "app store submission help"]
  },
  {
    slug: "windows-app", icon: "desktop",
    name: "Windows Desktop Software", nameUr: "ونڈوز ڈیسک ٹاپ سافٹ ویئر",
    img: "service-windows",
    page: "Offline-first Windows apps for shops, factories, clinics and offices: POS & billing, inventory, files & HR — auto-update, LAN/cloud sync, print-ready invoices. Starter system PKR 14,000.",
    pageUr: "دکانوں، فیکٹریوں، کلینک اور آفس کے لیے ونڈوز ایپس: پی او ایبلنگ، اسٹاک، فائلز، ایچ آر — آٹو اپڈیٹ، ایل اے این/کلاؤڈ سنک۔ بنیادی سسٹم چودہ ہزار۔",
    short: "POS, inventory & office tools", shortUr: "بلنگ، اسٹاک اور آفس ٹولز",
    days: "8–16", features: ["C#/.NET or Electron, modern dark UI", "Works fully offline, syncs later", "Print: invoices, reports, barcodes", "Multi-user roles & audit log", "Auto-updater + installer (MSI/EXE)"],
    kw: ["windows software development pakistan", "billing software lahore", "inventory system pakistan"]
  }
,  {
    slug: "whatsapp-bot", icon: "wa",
    name: "WhatsApp Chatbot & Auto-Reply", nameUr: "واٹس ایپ چیٹ بوٹ اور آٹو ریپلائ",
    img: "service-wa-bot",
    page: "An auto-reply bot for your WhatsApp Business that answers prices, takes orders, sends your catalog and follows up — with live handover to staff in Urdu or English. Fixed PKR 14,000, linked landing page gets the free domain.",
    pageUr: "آپ کے واٹس ایپ بزنس کا آٹو ریپلائی بوٹ — قیمت بتائے، آرڈر لے، کیٹلاگ بھیجے اور فالو اپ کرے، لو ہینڈ اوور کے ساتھ۔ ایک قیمت چودہ ہزار، لنکڈ لینڈنگ پیج پر ڈومین فری۔",
    short: "Orders, FAQ & catalog on WhatsApp 24/7", shortUr: "واٹس ایپ پر ۲۴/۷ آرڈر اور جوابات",
    days: "4–7", features: ["Catalog & price-list sending", "Order form inside WhatsApp", "Broadcast offers + auto follow-ups", "Live handover to your staff", "Urdu & English understanding"],
    kw: ["whatsapp bot pakistan", "auto reply whatsapp business", "whatsapp order bot"]
  },
  {
    slug: "design-studio", icon: "pen",
    name: "CV, Logo & Brand Design", nameUr: "سی وی، لوگو اور برانڈ ڈیزائن",
    img: "service-design",
    page: "Professional 3D/ATS CVs, logo with 3 concepts, visiting cards, letterheads and a monthly social post kit — delivered in 24–72 hours by the same designers who built this site. PKR 14,000 fixed.",
    pageUr: "پروفیشنل سی وی، تین کنسیپٹس والا لوگو، ویزٹنگ کارڈز، لیٹر ہیڈ اور ماہانہ سوشل پوسٹ کٹ — ۲۴ سے ۷۲ گھنٹوں میں۔ ایک قیمت چودہ ہزار۔",
    short: "CVs, logos, banners & post kits — 24–72h", shortUr: "سی وی، لوگو، بینر اور پوسٹ کٹ",
    days: "1–3", features: ["3D + ATS-friendly resume (PDF/docx)", "Logo: 3 concepts, full source files", "Cards, letterhead, stamp, envelope kit", "Monthly social media post templates", "Unlimited minor revisions"],
    kw: ["cv design lahore", "logo design pakistan price", "resume maker pakistan"]
  },
  {
    slug: "food-restaurant", icon: "bowl",
    name: "Restaurant & Food Delivery Site", nameUr: "ریستوران اور فوڈ ڈیلیوری سائٹ",
    img: "service-food",
    page: "Your own ordering platform — skip commission apps! Digital menu with photos & variants, cart to WhatsApp/phone orders, delivery-area logic, kitchen board and QR-table ordering. PKR 14,000 + free domain.",
    pageUr: "اپنا آرڈر کرنے کا سسٹم — کمیشن والے ایپس سے نجات! ڈیجیٹل مینیو، واٹس ایپ/فون آرڈر، ڈیلیوری ایریا، کچن بورڈ اور کیو آر ٹیبل آرڈر۔ چودہ ہزار، ڈومین فری۔",
    short: "Menu, online orders & kitchen board", shortUr: "مینیو، آن لائن آرڈر اور کچن بورڈ",
    days: "6–12", features: ["Digital menu with photos & variants", "Cart to WhatsApp / phone ordering", "Delivery areas, slots & charges logic", "Live kitchen order board (admin)", "QR-table ordering for dine-in"],
    kw: ["food delivery website pakistan", "restaurant online menu", "food panda alternative pakistan"]
  },
  {
    slug: "ecommerce-store", icon: "cart",
    name: "E-commerce Online Store", nameUr: "ای کامرس آن لائن اسٹور",
    img: "service-ecommerce",
    page: "Full online store — unlimited products, COD/bank/card-ready checkout, inventory alerts, buyer order-tracking and a sales dashboard. Everything a mini-store needs at a fixed PKR 14,000.",
    pageUr: "مکمل آن لائن اسٹور — لامحدود پروڈکٹس، کو ڈی اور بینک ادائیگی، اسٹاک الرٹ، آرڈر ٹریکنگ اور سیلز ڈیش بورڈ۔ ایک قیمت چودہ ہزار۔",
    short: "Products, COD checkout & sales dashboard", shortUr: "پروڈکٹس، ادائیگی اور سیلز ڈیش بورڈ",
    days: "8–14", features: ["Unlimited products & variants", "COD / bank / card-ready checkout", "Inventory + low-stock WhatsApp alerts", "Customer order-tracking page", "Sales dashboard with CSV export"],
    kw: ["ecommerce website pakistan price", "online store development", "cod store pakistan"]
  },
  {
    slug: "lms-platform", icon: "play",
    name: "Online Courses Platform (LMS)", nameUr: "آن لائن کورسز پلیٹ فارم (ایل ایم ایس)",
    img: "service-lms",
    page: "Sell video courses with your own brand: lesson builder (video/pdf), quizzes & certificates, teacher/student/parent roles, subscriptions — no per-student fees like foreign LMSs. PKR 14,000 MVP.",
    pageUr: "اپنے برانڈ کے ساتھ ویڈیو کورسز بیچیں — لیسین بلڈر، کوئز اور سرٹیفکیٹ، ٹیچر/اسٹوڈنٹ رولز، سبسکرپشن — بیرونی ایل ایم ایس جیسے فی طالب فیس نہیں۔ ایم وی پی چودہ ہزار۔",
    short: "Sell courses: videos, quizzes, certificates", shortUr: "کورسز بیچیں: ویڈیوز، کوئز، سرٹیفکیٹ",
    days: "10–16", features: ["Course + lesson builder (video/pdf)", "Quizzes, auto-grading & certificates", "Teacher / student / parent roles", "One-time & subscription payments", "Urdu admin with revenue reports"],
    kw: ["lms development pakistan", "online course platform", "teach online website"]
  },
  {
    slug: "donation-platform", icon: "heart",
    name: "Donation & Zakat Platform", nameUr: "ڈونیشن اور زکوٰۃ پلیٹ فارم",
    img: "service-donation",
    page: "Trust-building fundraising: campaign pages with goal bars, built-in zakat calculator, monthly sponsorship reminders, instant receipts and a transparent public ledger. Fixed PKR 14,000 + free domain.",
    pageUr: "اعتماد پر مبنی فنڈنگ: گول بار کے ساتھ مہم کے صفحات، زکوٰۃ کیلکولیٹر، ماہانہ اسپانسرشپ ریمائنڈر، فوری رسید اور شفاف لیجر۔ چودہ ہزار، ڈومین فری۔",
    short: "Campaigns, zakat calc & sponsorships", shortUr: "مہمات، زکوٰۃ کیلکولیٹر اور اسپانسرشپ",
    days: "7–12", features: ["Campaign pages with live goal bars", "Zakat & sadaqah calculator built-in", "Monthly sponsorship auto-reminders", "Instant receipts + WhatsApp thank-yous", "Transparent public donation ledger"],
    kw: ["donation website pakistan", "zakat fund platform", "online sadaqah"]
  }
];

const URDU_PRICE = { 14000: "چودہ ہزار", 20000: "بیس ہزار", 23500: "تئیس ہزار پانچ سو", 30000: "تیس ہزار", 35000: "پینتیس ہزار" };
const PRICE_NOTE = { 14000: "Website", 20000: "Website + management", 23500: "AI / voice", 30000: "Android / Windows app", 35000: "iOS app" };
services.forEach(s => {
  s.price = SERVICE_PRICES[s.slug] || PRICE;
  s.priceNote = PRICE_NOTE[s.price] || "Fixed rate";
  s.page = s.page.replace(/PKR 14,000/g, "PKR " + s.price.toLocaleString("en-US"));
  s.pageUr = s.pageUr.replace(/چودہ ہزار/g, URDU_PRICE[s.price] || "مقررہ قیمت");
});

/* ================= EMERGENCY RECOVERY (separate from build services) =================
   Kept out of the 21 build services because demos, source-code and domain promises
   do not apply to a hacked site/account. Recovery has its own page and low rates. */
const recovery = [
  {
    slug: "hacked-website-recovery", id: "website-php", icon: "shield", img: "service-management",
    name: "Hacked Website & PHP Recovery", nameUr: "ہیک ویب سائٹ اور پی ایچ پی ریکوری",
    badge: "Website / PHP",
    price: 7000, priceNote: "Emergency recovery", days: "1–3",
    short: "Malware, PHP backdoors & blacklist cleanup", shortUr: "میل ویئر، پی ایچ پی بیک ڈور اور بلیک لسٹ کی صفائی",
    page: "Hacked, defaced or redirecting to spam? We clean malware and PHP backdoors, restore cPanel/admin access, remove Google blacklist warnings, patch the entry point and harden the site. Fixed PKR 7,000 — free inspection first. Proof of ownership required.",
    pageUr: "سائٹ ہیک، ڈیفیس یا اسپام کی طرف ری ڈائریکٹ ہو رہی ہے؟ ہم میل ویئر اور پی ایچ پی بیک ڈور صاف کرتے ہیں، سی پینل/ایڈمن رسائی بحال کرتے ہیں، گوگل بلیک لسٹ انتباہ ہٹاتے ہیں، کمزوری بند کرتے ہیں اور سائٹ محفوظ کرتے ہیں۔ مقررہ ۷,۰۰۰ روپے — پہلے مفت معائنہ۔ ملکیت کا ثبوت ضروری ہے۔",
    features: [
      "Malware, spam redirect & PHP backdoor cleanup",
      "Google Safe Browsing / blacklist removal help",
      "cPanel, admin & hosting access recovery",
      "Patch entry point + firewall & 2FA hardening",
      "Clean backup + 14-day re-infection check"
    ],
    steps: [
      { t: "Free inspection", u: "مفت معائنہ", d: "Send your URL and proof of ownership. We check malware, backdoors, redirects and Google blacklist status.", dUr: "اپنا یو آر ایل اور ملکیت کا ثبوت بھیجیں۔ ہم میل ویئر، بیک ڈور، ری ڈائریکٹ اور گوگل بلیک لسٹ چیک کرتے ہیں۔" },
      { t: "Clean & secure", u: "صفائی اور تحفظ", d: "Remove the infection, patch PHP/plugins, reset access and add firewall + 2FA protection.", dUr: "انفیکشن ختم کریں، پی ایچ پی/پلگ ان پیچ کریں، رسائی ری سیٹ کریں اور فائر وال + ۲ ایف اے لگائیں۔" },
      { t: "Verify & hand over", u: "تصدیق اور حوالگی", d: "Google re-check, clean backup and a 14-day re-infection watch with a written report.", dUr: "گوگل دوبارہ چیک، صاف بیک اپ اور ۱۴ دن کی نگرانی — تحریری رپورٹ کے ساتھ۔" }
    ],
    kw: ["hacked website recovery pakistan", "wordpress malware removal lahore", "php backdoor cleanup"]
  },
  {
    slug: "whatsapp-recovery", id: "whatsapp", icon: "wa", img: "service-wa-bot",
    name: "Hacked WhatsApp Recovery", nameUr: "ہیک واٹس ایپ ریکوری",
    badge: "WhatsApp",
    price: 5000, priceNote: "WhatsApp recovery", days: "1–2",
    short: "Account recovery, 2FA & linked-device cleanup", shortUr: "اکاؤنٹ ریکوری، ۲ ایف اے اور لنکڈ ڈیوائس کی صفائی",
    page: "WhatsApp hacked, logged out, OTP not arriving or your number changed? We guide the official recovery flow, set up 2FA, remove linked devices, help restore your Business profile and lock down the account. Fixed PKR 5,000. We never ask for your OTP or password.",
    pageUr: "واٹس ایپ ہیک، لاگ آؤٹ، او ٹی پی نہ آنا یا نمبر تبدیل ہو جانا؟ ہم سرکاری ریکوری طریقہ کار میں رہنمائی کرتے ہیں، ۲ ایف اے سیٹ کرتے ہیں، لنکڈ ڈیوائسز صاف کرتے ہیں، بزنس پروفائل بحال کرنے میں مدد دیتے ہیں اور اکاؤنٹ محفوظ کرتے ہیں۔ مقررہ ۵,۰۰۰ روپے۔ ہم کبھی او ٹی پی یا پاس ورڈ نہیں مانگتے۔",
    features: [
      "Official WhatsApp recovery assistance",
      "2FA, PIN & linked-device cleanup",
      "SIM / OTP and number verification guidance",
      "WhatsApp Business profile restore help",
      "Scam-protection checklist for your staff",
      "We never ask for your OTP or password"
    ],
    steps: [
      { t: "Free case check", u: "مفت کیس چیک", d: "Send your number and issue. We confirm whether official recovery is possible — no fake tools.", dUr: "اپنا نمبر اور مسئلہ بھیجیں۔ ہم بتاتے ہیں سرکاری ریکوری ممکن ہے یا نہیں — کوئی جعلی ٹول نہیں۔" },
      { t: "Recover access", u: "رسائی بحال کریں", d: "Official WhatsApp flow, SIM/OTP guidance, 2FA setup and linked-device cleanup.", dUr: "سرکاری واٹس ایپ طریقہ کار، سم/او ٹی پی رہنمائی، ۲ ایف اے اور لنکڈ ڈیوائس کی صفائی۔" },
      { t: "Lock it down", u: "محفوظ کریں", d: "Business profile restore, scam-protection checklist and safe-backup advice.", dUr: "بزنس پروفائل بحالی، اسکیم سے بچاؤ چیک لسٹ اور محفوظ بیک اپ مشورہ۔" }
    ],
    kw: ["hacked whatsapp recovery pakistan", "whatsapp account recover lahore", "whatsapp 2fa setup"]
  }
];

const packages = [
  { n: "Website", nUr: "ویب سائٹ", price: 14000, tag: "Business · travel · hotel · school · hospital",
    desc: "A complete fast website with 3D design, full SEO, WhatsApp ordering and a FREE domain for one year.",
    items: [["3 free demo designs (you pick one)", 1], ["FREE domain for 1 year", 1], ["On-page SEO + sitemap + schema", 1], ["WhatsApp order & quote buttons", 1], ["Source code + handover video", 1], ["30-day free support", 1]] },
  { n: "Website + Management", nUr: "ویب سائٹ + مینجمنٹ", price: 20000, pop: true, tag: "Portal · ERP · e-commerce · LMS",
    desc: "Everything in Website plus a role-based admin panel to manage content, orders, students, properties or donations.",
    items: [["Complete website included", 1], ["Admin / CMS panel", 1], ["Roles, dashboard & reports", 1], ["Database + secure login", 1], ["FREE domain for 1 year", 1], ["60-day free support", 1]] },
  { n: "AI Agent / Voice", nUr: "اے آئی ایجنٹ / وائس", price: 23500, tag: "AI agent · voice bot · receptionist · WhatsApp",
    desc: "An AI agent that replies, qualifies leads and books appointments on WhatsApp, calls, email or your CRM — 24/7.",
    items: [["AI agent or voice bot setup", 1], ["WhatsApp / call / email integration", 1], ["Lead qualification + human handover", 1], ["English, Urdu & Roman Urdu", 1], ["Admin dashboard & transcripts", 1], ["30-day free support", 1]] },
  { n: "Android / Windows App", nUr: "اینڈرائیڈ / ونڈوز ایپ", price: 30000, tag: "Play Store · desktop software",
    desc: "A native Android app or Windows desktop system with its own admin backend, push notifications and store publishing.",
    items: [["Native Android or Windows app", 1], ["Matching admin backend", 1], ["Push notifications", 1], ["Play Store / installer publishing", 1], ["Source code handover", 1], ["30-day free support", 1]] },
  { n: "iOS App", nUr: "آئی او ایس ایپ", price: 35000, tag: "App Store · iPhone & iPad",
    desc: "A polished iOS app with TestFlight beta, App Store submission and a shared backend with your web or Android build.",
    items: [["Native iOS app (iPhone & iPad)", 1], ["Shared backend + admin panel", 1], ["TestFlight beta testing", 1], ["App Store submission support", 1], ["Source code handover", 1], ["30-day free support", 1]] }
];

const addons = [
  ["Logo + brand kit (3 concepts, source files)", "4,000"],
  ["Extra language (Urdu RTL / Arabic / English)", "3,000"],
  ["E-commerce cart + COD flow (on a site)", "9,000"],
  ["Payment integration (JazzCash / EasyPaisa / bank)", "8,000"],
  ["Google Business Profile + map optimization", "4,000"],
  ["Speed + SEO audit with fixes", "5,000"],
  ["Push notifications (Android / iOS)", "6,000"],
  ["Extra domain (another .com / .pk, 1 year)", "3,500"],
  ["Monthly care plan (updates, backups, reports)", "5,000 / month"]
];

const portfolio = [
  { t: "SastaCart — Fashion E-commerce", img: "service-website", price: 20000, tags: ["E-commerce", "PKR 20,000"], r: "COD + WhatsApp order flow, 900 products migrated, load time 0.9s. Inquiries up 64% in month one.", city: "Johar Town, Lahore" },
  { t: "ZaraiLink — Work-from-Home Portal", img: "service-job-portal", tags: ["Portal", "PKR 14,000"], r: "Verified employers, wallet payouts, referral tree. 11,400 seekers in 60 days; featured-post revenue from week one.", city: "Remote PK" },
  { t: "BrightSmile AI Receptionist", img: "service-receptionist", tags: ["AI", "PKR 14,000"], r: "Dental clinic answers every call & WhatsApp 24/7 with Google Calendar booking. 47% more appointments.", city: "DHA Phase 5, Lahore" },
  { t: "GlobeTrek Umrah & Tours", img: "service-travel", tags: ["Travel", "PKR 14,000"], r: "Umrah groups sell themselves: itinerary pages + PDF quotes + agent commissions. 3x enquiries in a month.", city: "Gulberg, Lahore" },
  { t: "Serene Hotels — Direct Booking", img: "service-hotel", tags: ["Hotel", "PKR 14,000"], r: "Golden-Luxe demo won the pick. 22% of bookings now come direct, cutting OTAs commission bill.", city: "Murree Rd, Lahore" },
  { t: "Beacon Kids Admission Portal", img: "service-school", tags: ["School", "PKR 14,000"], r: "Admissions fully online with document upload + SMS updates. Queue at the office: gone.", city: "Bahria Town, Lahore" },
  { t: "CityCare Hospital OPD", img: "service-hospital", tags: ["Hospital", "PKR 14,000"], r: "Online OPD tokens ended the 6 AM rush. Doctors' schedules self-updated by admin staff.", city: "Township, Lahore" },
  { t: "LahoreEstate Property Portal", img: "service-property", tags: ["Property", "PKR 14,000"], r: "1,200 listings with map pins; featured ads alone earn the owner PKR 60K+/month.", city: "DHA, Lahore" },
  { t: "SwiftStock Management ERP", img: "service-management", tags: ["ERP", "PKR 14,000"], r: "Wholesale dealer on web + Windows POS with offline sync; end-of-day reports in seconds.", city: "Shah Alam Market" },
  { t: "TruckRoute — Windows Fleet Suite", img: "service-windows", tags: ["Desktop", "PKR 14,000"], r: "Offline-first fleet billing for 60 vehicles; night paperwork reduced from hours to minutes.", city: "Kashmir Rd, Lahore" },
  { t: "GymFlow — Android + Voice AI", img: "service-android", tags: ["App + AI", "PKR 14,000"], r: "Membership app with renewals on WhatsApp and Urdu voice agent for timings. Churn 9%→4%.", city: "Model Town, Lahore" },
  { t: "PakProperty CMS Upgrade", img: "service-cms", tags: ["CMS", "PKR 14,000"], r: "Agents self-publish listings with Urdu admin; 3x listings, zero developer tickets.", city: "Faisal Town" }
];

portfolio.forEach(p => {
  const svc = services.find(x => x.img === p.img);
  const price = p.price || (svc && svc.price);
  if (price) p.tags = p.tags.map(t => t.startsWith("PKR") ? "PKR " + price.toLocaleString("en-US") : t);
});

const testimonials = [
  { q: "Pehle main khud WhatsApp reply karta tha raat 2 baje tak. Ab AI receptionist sambhalta hai — bookings apne aap. Fixed 23,500, koi hidden charge nahi.", qEn: "The AI receptionist handles calls now; bookings come automatically. Fixed PKR 23,500 — no hidden charges.", n: "Dr. Ahsan Raza", r: "BrightSmile Dental Clinic", s: 5 },
  { q: "Teen demo designs bheje — main ne golden wala chuna. Website itni pyari bani ke clients taareef karte hain. Domain bhi free mila.", qEn: "They sent 3 demo designs, I picked the golden one. Clients praise the site — and the domain was free.", n: "Hina Tariq", r: "Raza Traders", s: 5 },
  { q: "School ka admission portal 9 din me live — documents upload, SMS notifications. Ab office me koi line nahi. Fixed 20 hazar!", qEn: "Our admission portal went live in 9 days — document uploads, SMS updates. No more queues, only PKR 20,000.", n: "Principal, Beacon Kids", r: "Bahria Town, Lahore", s: 5 },
  { q: "Property portal pe featured ads se mahine ka 60 hazar kamata hoon. Ek hi dafa 20 hazar diya tha.", qEn: "Featured ads on my property portal now earn me 60K/month — for a one-time PKR 20,000 build cost.", n: "Bilal Ahmed", r: "LahoreEstate founder", s: 5 },
  { q: "Android app aur POS dono ek team se, source code pura diya. Fixed 30 hazar, emaandari se kaam.", qEn: "Android app and POS from one team, full source code handed over. Fixed PKR 30,000, honest work on time.", n: "Sana Malik", r: "GymFlow", s: 5 }
];

const faqs = [
  { q: "Aap ke rates kya hain?", qEn: "What are your fixed rates?", a: "Website PKR 14,000 · website + management (portal, ERP, e-commerce, LMS, property, job, restaurant) PKR 20,000 · AI agent, voice, receptionist ya WhatsApp bot PKR 23,500 · Android ya Windows app PKR 30,000 · iOS app PKR 35,000. Site services par domain 1 saal free, 3 demo designs, source code aur 30 din support included.", aEn: "Website PKR 14,000 · website + management (portal, ERP, e-commerce, LMS, property, job, restaurant) PKR 20,000 · AI agent, voice, receptionist or WhatsApp bot PKR 23,500 · Android or Windows app PKR 30,000 · iOS app PKR 35,000. Site services include a free domain for one year, 3 demo designs, source code and 30-day support." },
  { q: "Domain free — asli free hai?", qEn: "The free domain — really free?", a: "Bilkul. .com ya .pk (site wale packages me) pehla saal hamari taraf se. Renewal (~2,500/saal) aap direct registrar se karte hain — domain sirf aapke naam hota hai.", aEn: "Yes — .com or .pk for the first year, registered in YOUR name. Renewal afterwards is direct with the registrar (about PKR 2,500/year)." },
  { q: "3 demo designs kaise kaam karte hain?", qEn: "How do the 3 demo designs work?", a: "Advance ke baad hum aapke project ke 3 mukammal demo designs banate hain — Classic Blue, Golden Luxe, Modern Minimal. Aap koi bhi pasand karein, usi me live project banta hai. Sab pasand na aayein to rework free.", aEn: "After the 50% advance we build 3 complete demo designs of YOUR project (Blue / Gold / Minimal). You pick one and we finish it in that style. Hate all three? Unlimited free reworks until you smile." },
  { q: "Kitne din lagte hain?", qEn: "How long does it take?", a: "Site 4–10, AI receptionist 5–8, management system 8–14, apps 10–21 din. Date shuru me hi written milti hai.", aEn: "Sites 4–10 days, AI receptionist 5–8, management systems 8–14, apps 10–21. The schedule is written upfront." },
  { q: "Payment ka tareeqa?", qEn: "How do payments work?", a: "50% advance, 50% delivery par. JazzCash / EasyPaisa / bank / office cash.", aEn: "50% advance, 50% on delivery — JazzCash, EasyPaisa, bank or cash at office." },
  { q: "Kya source code milta hai?", qEn: "Do I own the code?", a: "Haan — code, domain, hosting, admin sab aapke naam. Koi lock-in nahi.", aEn: "Full ownership: code, domain, hosting, admin — all in your name. Zero lock-in." },
  { q: "AI/voice agent ka monthly kharcha?", qEn: "Any AI running cost?", a: "Standard bots included hain. Zyaada volume par API usage ~2,000–6,000 PKR/mahina — pehle hi bata dete hain.", aEn: "Standard usage included; high-volume voice/LLM runs ~PKR 2,000–6,000/month, always quoted upfront." },
  { q: "Urdu / Roman Urdu me baat ho sakti hai?", qEn: "Do you work in Urdu?", a: "Ji haan — bilingual sites (English + اردو RTL) aur Urdu-bolne wale AI agents hamari specialty hain.", aEn: "Absolutely — bilingual sites (English + Urdu RTL) and Urdu-speaking AI agents are our specialty." },
  { q: "Baad me support?", qEn: "After-launch support?", a: "Har project par 30 din free support. Uske baad care plan sirf 5,000/mahina — updates, backups aur chhoti tabdeeliyan.", aEn: "Every project includes 30 days of free support. After that, a PKR 5,000/month care plan covers updates, backups and small changes." },
  { q: "Ghar bethe kamai wala portal bhi banega?", qEn: "Can you build my earning portal?", a: "Haan — Job & Earning Portal package me: accounts, KYC, wallet, referral engine aur featured-post revenue. Aap admin, platform kamai karta hai.", aEn: "Yes — the Job & Earning Portal service ships accounts, KYC, wallets, referrals and featured-listing revenue. You run the admin; the platform earns." },
  { q: "Hacked website ya WhatsApp recover karte hain?", qEn: "Do you recover hacked websites or WhatsApp?", a: "Haan. Hacked website/PHP recovery PKR 7,000 aur hacked WhatsApp recovery assistance PKR 5,000 — fixed low rates. Pehle mufat inspection, phir 50% advance. Website ke liye ownership proof zaroori hai; WhatsApp me hum sirf official process guide karte hain aur kabhi OTP/password nahi maangte.", aEn: "Yes. Hacked website/PHP recovery is PKR 7,000 and hacked WhatsApp recovery assistance is PKR 5,000 — fixed low rates. Free inspection first, then 50% advance. Website recovery requires proof of ownership; for WhatsApp we only guide the official process and never ask for OTP or passwords." },
  { q: "Aap certified aur registered hain?", qEn: "Are you certified and registered?", a: "Ji haan — AWS aur Google certified team, Engr. Jamshaid (Software Engineer, IT Ministry, Govt. of Pakistan), aur Saudi Arabia me ZATCA-registered, KSA govt-affiliated ZATCA-compliant software company. Certificates aur registration documents demand par share kar dete hain.", aEn: "Yes — an AWS and Google certified team, Engr. Jamshaid (Software Engineer, IT Ministry, Govt. of Pakistan), and a Saudi Arabia ZATCA-registered, KSA govt-affiliated ZATCA-compliant software company. We share certificates and registration documents on request." }
];

const blog = [
  {
    slug: "ai-receptionist-pakistan-price", date: "2026-10-08", read: "6 min", img: "service-receptionist",
    title: "AI Receptionist in Pakistan: Real Prices & Numbers (2026)",
    titleUr: "پاکستان میں اے آئی ریسیپشنسٹ: اصل قیمت اور اعداد",
    desc: "Fixed PKR 23,500 at Wafa Smart Tech — here is exactly what the AI receptionist answers, how booking works, and BrightSmile's real numbers.",
    body: `<p>Most clinics, salons and firms in Lahore lose customers between 8 PM and 10 AM. Not because service is bad — because nobody picks up. An AI receptionist closes that gap 24/7.</p><h2>What it actually does</h2><ul><li>Answers every call &amp; WhatsApp in English, Urdu or Roman Urdu</li><li>Shares prices, timings, directions; takes structured messages</li><li>Books into your Google Calendar and sends day-before reminders</li><li>Escalates tricky customers to your staff with a summary</li></ul><h2>The 2026 price, honestly</h2><p>Agencies quote PKR 80K–200K for voice bots. Wafa Smart Tech charges a fixed <b>PKR 23,500</b> — 3 demo designs first, source code and 30-day support included. Only running cost is call/LLM usage, usually under PKR 4,000/month for one location.</p><h2>Case numbers — BrightSmile Dental</h2><p>47% more booked appointments, zero missed calls after 11 PM, payback in about 3 weeks.</p><p><a href="/ai-receptionist.html">See the AI Receptionist service →</a></p>`
  },
  {
    slug: "ghar-beth-kamai-portal", date: "2026-09-21", read: "7 min", img: "service-job-portal",
    title: "Ghar Bethan Kamai: Build Your Own Job & Earning Portal",
    titleUr: "گھر بیٹھے کمائی: اپنا جاب اور کمائی کا پورٹل بنائیں",
    desc: "A PKR 20,000 MVP portal with 4 income streams — featured posts, subscriptions, verified passes and referrals — plus the trust features that keep you legal.",
    body: `<p>A job/earning portal is one of the few software businesses that earns rupees daily after launch. You are the admin — the platform works, the community grows, you collect.</p><h2>Four income streams</h2><ol><li><b>Featured jobs / promoted gigs</b> — employers pay PKR 500–5,000 to top the list</li><li><b>Employer subscriptions</b> — monthly posting packs</li><li><b>Verified-member passes</b> — resume boosts, badge fees</li><li><b>Task &amp; referral engine</b> — sponsors pay per verified signup or completed task</li></ol><h2>Trust is the product</h2><p>Pakistan's market is flooded with fake "earning" apps. Your portal survives by shipping KYC verification, employer proof, wallet ledgers with payout queues and fraud guards — all in the MVP we ship for a fixed <b>PKR 20,000</b> (extended flows quoted on the same rate card).</p><h2>Timeline</h2><p>MVP board in ~10 days, full platform in 3 weeks — after you pick your favourite from our <b>3 free demo designs</b>. Source code and admin panel in Urdu are yours forever.</p><p><a href="/job-portal.html">See the Job &amp; Earning Portal service →</a></p>`
  }
];

const guarantees = [
  ["brief", "Fixed rates from PKR 14,000", "Written quote — kabhi nahi badlega"],
  ["check", "Domain FREE (1 year)", ".com ya .pk, registration aapke naam"],
  ["spark", "3 demo designs before build", "Jo pasand aaye — usi me complete karenge"],
  ["shield", "100% source code handover", "Hosting, admin, code — sab aapki malkiyat"]
];

module.exports = { PRICE, FIXED, TIERS, SERVICE_PRICES, DEMOS, brand, contact, hero, stats, trust, trustBadges, whyUs, process, services, recovery, packages, addons, portfolio, testimonials, faqs, blog, guarantees };
