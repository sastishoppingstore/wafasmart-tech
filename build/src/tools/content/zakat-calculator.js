"use strict";
const H = require("./_helpers.js");
module.exports = {
  name: "Zakat Calculator",
  short: "Add cash, savings, gold, silver, business stock and receivables, subtract liabilities, and check the 2.5% zakat against the gold and silver nisab thresholds.",
  title: "Zakat Calculator — Gold, Silver & Nisab | Wafa Smart",
  desc: "Free zakat calculator: total your wealth, compare with gold and silver nisab, and get 2.5% zakat. Metal rates load from a config file you can override.",
  h1: "Zakat Calculator — wealth, nisab and 2.5% due",
  kw: ["zakat calculator", "zakat on gold and silver", "nisab calculator", "2.5 percent zakat", "zakat on savings and business", "silver nisab grams"],
  intro: [
    "Zakat becomes obligatory once your saved wealth — cash, bank balances, trade goods, gold and silver, and money owed to you, minus what you owe — stays above a minimum threshold called the nisab for a full lunar year. This calculator walks through exactly that: you list each asset, subtract liabilities, and it totals the zakat base, then applies the standard 2.5% rate to whatever clears the threshold. Nothing is transmitted; the maths is all in your browser.",
    "Gold and silver need a price per gram to be worth anything in the nisab test, and those rates move daily. Rather than bake in a number that quietly goes stale, the page loads current indicative rates from a small configuration file the moment it opens, prints the date those rates were last updated, and lets you type over any of them so you can match today's market or a specific jeweller's quote. If the fetch ever fails, it falls back to safe built-in defaults and tells you so.",
    "The nisab itself has two recognised measures: 87.48 grams of gold or 612.36 grams of silver. Many scholars use the lower silver threshold because it is more generous to recipients, so both are computed and shown, with your wealth compared against each. Once you see which nisab you clear and the resulting 2.5% figure, zakat becomes a concrete rupee amount rather than an estimate you hope is right."
  ],
  steps: [
    "Review the loaded gold and silver rates (or type today's rates to override them) and choose 24K or 22K for your gold.",
    "Enter cash in hand, bank savings, business inventory value and receivables you expect to collect.",
    "Enter the grams of gold and of silver you own.",
    "Subtract liabilities such as debts you must repay soon.",
    "Press Calculate to see your nisab comparison and the 2.5% zakat due."
  ],
  ur: "Apna naqad, bank bachat, karobar ka maal, udhaar, sona (grams) aur chandi (grams) likhein, zimmedariyan (liabilities) minus karein. Sone/chandi ka rate zaroorat par khud badal lein. 'Calculate' dabane par nisab ka muwazna aur 2.5% zakat nazar aayega.",
  features: [
    "Itemised wealth build-up: cash, savings, stock, gold, silver, receivables",
    "Liabilities subtracted before the zakat base is measured",
    "Gold priced per gram by 24K or 22K, silver per gram, all overridable",
    "Both gold (87.48 g) and silver (612.36 g) nisab compared",
    "Standard 2.5% zakat applied only once the threshold is cleared",
    "Rates and currency load from a config file with a visible last-updated date"
  ],
  tips: [
    "Update the metal rates on the day you actually pay, not when you first opened the page.",
    "Use the silver nisab if you follow scholars who prefer the lower, more inclusive threshold.",
    "Count gold by weight at your karat rate; jewellery for wearing has separate fiqh opinions.",
    "Receivables are usually zakat-liable only when reasonably collectable — exclude doubtful debts.",
    "This is an aid to your own calculation; confirm anything unusual with a knowledgeable scholar."
  ],
  faqs: [
    { q: "How is the nisab decided here?", a: "Nisab equals the value of 87.48 grams of gold or 612.36 grams of silver. The tool values both at the rates you set and compares your net wealth against each, showing the lower silver-based threshold as the common reference." },
    { q: "Why can I change the gold and silver rates?", a: "Metal prices change constantly and differ by market, so the loaded defaults are indicative only — verify current rates before paying zakat. You can override them with the live rate from a jeweller or your currency's market quote." },
    H.faqFree("Zakat Calculator"),
    { q: "What does the 2.5% apply to?", a: "Only the net zakat base — total zakatable assets minus liabilities — and only if that base meets or exceeds the nisab. Below nisab, zakat is not due." },
    H.faqPrivacy("Zakat Calculator", "asset and liability figures"),
    H.faqMobile("Zakat Calculator", "The twelve fields stack into one column on a phone.")
  ],
  related: [["pakistan-salary-tax-calculator", "Salary tax"], ["uae-vat-calculator", "VAT maths"], ["discount-calculator", "Percentages & money"], ["percentage-calculator", "Percentage calculator"]],
  ui: `<section class="t-card opts" aria-label="Zakat calculator inputs">
  <div class="fld"><label for="cur">Currency</label><input type="text" id="cur" value="PKR" maxlength="3" autocomplete="off" spellcheck="false"></div>
  <div class="fld"><label for="karat">Gold karat</label><select id="karat"><option value="24" selected>24K</option><option value="22">22K</option></select></div>
  <div class="fld"><label for="g24">Gold 24K rate / gram</label><input type="number" id="g24" inputmode="decimal" min="0" step="any"></div>
  <div class="fld"><label for="g22">Gold 22K rate / gram</label><input type="number" id="g22" inputmode="decimal" min="0" step="any"></div>
  <div class="fld"><label for="srate">Silver rate / gram</label><input type="number" id="srate" inputmode="decimal" min="0" step="any"></div>
  <div class="fld"><label for="cash">Cash in hand</label><input type="number" id="cash" inputmode="decimal" min="0" step="any" value="0"></div>
  <div class="fld"><label for="bank">Bank savings</label><input type="number" id="bank" inputmode="decimal" min="0" step="any" value="0"></div>
  <div class="fld"><label for="stock">Business inventory</label><input type="number" id="stock" inputmode="decimal" min="0" step="any" value="0"></div>
  <div class="fld"><label for="recv">Receivables</label><input type="number" id="recv" inputmode="decimal" min="0" step="any" value="0"></div>
  <div class="fld"><label for="goldg">Gold (grams)</label><input type="number" id="goldg" inputmode="decimal" min="0" step="any" value="0"></div>
  <div class="fld"><label for="silverg">Silver (grams)</label><input type="number" id="silverg" inputmode="decimal" min="0" step="any" value="0"></div>
  <div class="fld"><label for="debt">Liabilities (owed)</label><input type="number" id="debt" inputmode="decimal" min="0" step="any" value="0"></div>
  <div class="acts"><button id="go" class="btn" type="button">Calculate</button><button id="rst" class="btn btn-ghost" type="button">Reset</button></div>
  <p id="status" role="status" aria-live="polite" class="hint"></p>
  <p id="err" class="err" role="alert" hidden></p>
  <div id="out"></div>
  <span class="disc">Zakat rates and thresholds are indicative — verify current gold/silver rates with your local market or scholar before paying.</span>
</section>`
};
