/* zakat-calculator — metal rates from config JSON (overridable), nisab test + 2.5%. Local. */
(function () {
  "use strict";
  const T = window.WST_T; if (!T) return;
  const $ = T.$;
  const card = $(".t-card.opts"), out = $("#out");
  const NISAB_GOLD = 87.48, NISAB_SILVER = 612.36, RATE = 0.025;
  const DEF = { currency: "PKR", g24: 31850, g22: 29195, silver: 1035, lastUpdated: "2026-10-28" };
  let meta = { lastUpdated: DEF.lastUpdated, fallback: false };

  function money(n) {
    n = Math.round(n * 100) / 100;
    const c = $("#cur").value.trim().toUpperCase();
    const safe = /^[A-Z]{3}$/.test(c) ? c : "";
    try { return new Intl.NumberFormat(undefined, { style: "currency", currency: safe || "XXX", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(n); }
    catch (e) { return n.toLocaleString(undefined, { maximumFractionDigits: 2 }) + (safe ? " " + safe : ""); }
  }
  const val = el => { const v = parseFloat(el.value); return isFinite(v) ? v : 0; };

  function noteEl(text) {
    const s = document.createElement("span");
    s.className = "hint";
    s.textContent = text;
    return s;
  }

  function calc() {
    T.setErr("");
    const g24 = parseFloat($("#g24").value), g22 = parseFloat($("#g22").value), sr = parseFloat($("#srate").value);
    if (!(g24 > 0) || !(sr >= 0)) { out.replaceChildren(noteEl("Enter the gold and silver rates (loaded from config).")); T.status(""); return; }
    const goldRate = $("#karat").value === "24" ? g24 : g22;
    const goldVal = val($("#goldg")) * goldRate, silverVal = val($("#silverg")) * sr;
    const cash = val($("#cash")), bank = val($("#bank")), stock = val($("#stock")), recv = val($("#recv")), debt = val($("#debt"));
    const assets = cash + bank + stock + recv + goldVal + silverVal;
    const net = assets - debt;
    const nisabG = NISAB_GOLD * goldRate, nisabS = NISAB_SILVER * sr, nisab = Math.min(nisabG, nisabS);
    const due = net >= nisab ? net * RATE : 0;

    const res = document.createElement("div");
    res.className = "res" + (due > 0 ? "" : " warn");
    res.innerHTML =
      '<div class="stat-row">' +
        '<div class="stat"><b>' + money(due) + '</b><small>zakat due (2.5%)</small></div>' +
        '<div class="stat"><b>' + money(net) + '</b><small>net zakat base</small></div>' +
        '<div class="stat"><b>' + money(nisab) + '</b><small>nisab threshold</small></div>' +
      '</div>' +
      '<div class="res-line"><span>Cash + bank</span><span>' + money(cash + bank) + '</span></div>' +
      '<div class="res-line"><span>Business inventory</span><span>' + money(stock) + '</span></div>' +
      '<div class="res-line"><span>Receivables</span><span>' + money(recv) + '</span></div>' +
      '<div class="res-line"><span>Gold (' + $("#karat").value + 'K)</span><span>' + money(goldVal) + '</span></div>' +
      '<div class="res-line"><span>Silver</span><span>' + money(silverVal) + '</span></div>' +
      '<div class="res-line"><span>Liabilities (deducted)</span><span>- ' + money(debt) + '</span></div>' +
      '<div class="res-line"><span>Nisab — gold (87.48 g)</span><span>' + money(nisabG) + '</span></div>' +
      '<div class="res-line"><span>Nisab — silver (612.36 g)</span><span>' + money(nisabS) + '</span></div>' +
      '<div class="res-line"><span>Above nisab?</span><span>' + (net >= nisab ? "Yes — zakat is due" : "No — zakat not due") + '</span></div>';
    const note = noteEl("Metal rates are indicative — verify current rates before paying. Last updated: " + meta.lastUpdated + (meta.fallback ? " (using built-in defaults — config could not load)" : "."));
    out.replaceChildren(res, note);
    T.status(due > 0 ? "Zakat due: " + money(due) : "Net wealth is below the nisab.");
  }

  function reset() {
    ["#cash", "#bank", "#stock", "#recv", "#goldg", "#silverg", "#debt"].forEach(s => $(s).value = "0");
    $("#karat").value = "24";
    calc();
  }

  // load rates from config, fall back to baked defaults
  fetch("/tools/assets/config/zakat.json", { cache: "force-cache" })
    .then(r => { if (!r.ok) throw new Error("bad"); return r.json(); })
    .then(cfg => {
      $("#cur").value = (cfg.currency || "PKR");
      $("#g24").value = cfg.goldPerGram["24K"];
      $("#g22").value = cfg.goldPerGram["22K"];
      $("#srate").value = cfg.silverPerGram;
      meta.lastUpdated = cfg.lastUpdated || DEF.lastUpdated;
      T.status("Rates loaded (updated " + meta.lastUpdated + "). Verify current rates, then Calculate.");
    })
    .catch(() => {
      meta.fallback = true;
      $("#cur").value = DEF.currency; $("#g24").value = DEF.g24; $("#g22").value = DEF.g22; $("#srate").value = DEF.silver;
      T.status("Could not load the rate file — using built-in defaults. Verify current rates, then Calculate.");
    });

  card.addEventListener("input", calc);
  T.on($("#go"), "click", calc);
  T.on($("#rst"), "click", reset);
})();
