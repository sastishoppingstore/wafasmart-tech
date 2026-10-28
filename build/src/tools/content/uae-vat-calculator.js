"use strict";
const H = require("./_helpers.js");
module.exports = {
  name: "UAE VAT Calculator",
  short: "Add or remove the 5% UAE VAT in AED, switch between net and VAT-inclusive amounts, and handle zero-rated or custom GCC rates with a clear receipt breakdown.",
  title: "UAE VAT Calculator — Add or Remove 5% (AED) | Wafa Smart",
  desc: "Free UAE VAT calculator in AED. Add or remove 5% VAT, extract tax from a gross price, and use 0%, 5% or a custom rate for other GCC countries.",
  h1: "UAE VAT Calculator — add or remove 5% VAT",
  kw: ["uae vat calculator", "5 percent vat uae", "vat inclusive to exclusive", "aed vat calculator", "reverse vat calculation", "gcc vat rate calculator"],
  intro: [
    "UAE VAT sits at a flat 5% on most goods and services, so the arithmetic is simple — but people still trip on direction. Given a net price you add 5% to reach what the customer pays; given a shelf price that already includes VAT you have to take it back out, which is not the same as subtracting 5%. This tool does both correctly and labels each line the way a tax invoice would, so you always know whether the number in front of you is net, tax or gross.",
    "Because shoppers quote VAT-inclusive totals and accountants work in exclusive amounts, the page keeps the two straight with a single mode switch. Pick whether your typed figure is a net amount or an already-inclusive one, and the calculator reverse-engineers the underlying value. The receipt-style breakdown shows Net, VAT and Gross as three tidy AED lines, exactly as you would print on a bill.",
    "The standard 5% rate and AED currency load from a small config file, with the effective date and last-updated date shown on the page. Quick buttons cover the common cases — 0% for export and zero-rated supplies, 5% for standard, and a custom box for the varied rates other GCC states use — so the same tool doubles as a light multi-country VAT helper."
  ],
  steps: [
    "Type the amount you have and pick whether it is net or already VAT-inclusive.",
    "Choose a rate: 0% (zero-rated), 5% (UAE standard) or enter a custom rate.",
    "Confirm the currency (AED by default) shown at the top.",
    "Press Calculate to see the Net, VAT and Gross lines in a receipt layout.",
    "Reset to clear the amount when moving to the next invoice."
  ],
  ur: "Raqam likhein aur batayein ke woh net hai ya VAT-shamil; phir rate chunein (0%, 5% ya custom). 'Calculate' dabane par Net, VAT aur Gross ki AED lines receipt jaisi ban jayengi. Rate aur currency (AED) config file se aati hai aur aap badal sakte hain.",
  features: [
    "Add VAT (net → gross) and remove VAT (gross → net) directions",
    "Correct reverse-VAT maths so subtracting 5% is not mistaken for it",
    "Quick 0% / 5% rates plus a custom rate for other GCC countries",
    "AED receipt-style Net / VAT / Gross breakdown",
    "Rate, currency and effective date loaded from a config file",
    "Recomputes live as you change the amount or rate"
  ],
  tips: [
    "A 'price including VAT' invoice is the inclusive case — pick remove, not add.",
    "0% is for zero-rated/export supplies, not for exempt items which sit outside the VAT system.",
    "Saudi Arabia and other GCC states differ from 5%; switch to the custom rate for those.",
    "Round to fils only on the final line, keeping the calculator unrounded internally.",
    "This handles a single line item — total many lines per-rate for a full return."
  ],
  faqs: [
    { q: "How do I remove VAT from a VAT-inclusive price?", a: "Divide the gross by (100 + rate) then multiply by the rate: on 5% that is gross × 5 ÷ 105. Taking a flat 5% off the gross is a different (and wrong) number — the calculator uses the correct formula." },
    { q: "Is the UAE VAT rate always 5%?", a: "5% is the standard rate in force; a 0% rate applies to qualifying exports and zero-rated goods, and some supplies are exempt altogether. Those are not a VAT rate, so they are not the same as 0%." },
    { q: "Can I use it for other GCC countries?", a: "Yes — click custom and type that country's rate. Oman, Bahrain, Saudi Arabia and others have used different rates, so verify the applicable one before relying on the result." },
    H.faqFree("UAE VAT Calculator"),
    H.faqPrivacy("UAE VAT Calculator", "invoice amounts"),
    H.faqMobile("UAE VAT Calculator", "The three-line receipt fits a phone screen without scrolling.")
  ],
  related: [["pakistan-salary-tax-calculator", "Salary tax"], ["discount-calculator", "Discount & price"], ["zakat-calculator", "Zakat on wealth"], ["percentage-calculator", "Percentage maths"]],
  ui: `<section class="t-card opts" aria-label="UAE VAT calculator inputs">
  <div class="segs" role="group" aria-label="VAT rate">
    <button type="button" class="seg" data-rate="0" aria-pressed="false">0% zero-rated</button>
    <button type="button" class="seg" data-rate="5" aria-pressed="true">5% standard</button>
    <button type="button" class="seg" data-rate="custom" aria-pressed="false">Custom</button>
  </div>
  <div class="fld"><label for="amount">Amount</label><input type="number" id="amount" inputmode="decimal" min="0" step="any" placeholder="e.g. 1000"></div>
  <div class="fld"><label for="rate">VAT rate (%)</label><input type="number" id="rate" inputmode="decimal" min="0" max="100" step="any" value="5"></div>
  <div class="fld"><label for="dir">Direction</label><select id="dir"><option value="add" selected>Add VAT (amount is net)</option><option value="remove">Remove VAT (amount is inclusive)</option></select></div>
  <div class="fld"><label for="cur">Currency</label><input type="text" id="cur" value="AED" maxlength="3" autocomplete="off" spellcheck="false"></div>
  <div class="acts"><button id="go" class="btn" type="button">Calculate</button><button id="rst" class="btn btn-ghost" type="button">Reset</button></div>
  <p id="status" role="status" aria-live="polite" class="hint"></p>
  <p id="err" class="err" role="alert" hidden></p>
  <div id="out"></div>
  <span class="disc">Indicative VAT helper only — confirm the current FTA rate and your supplies' treatment before filing.</span>
</section>`
};
