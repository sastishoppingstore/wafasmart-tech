/* age-calculator — exact age, totals, weekday born, next-birthday countdown. All local, UTC-safe. */
(function () {
  "use strict";
  const T = window.WST_T; if (!T) return;
  const $ = T.$;
  const card = $(".t-card.opts"), out = $("#out");

  function parts(val) { // val = "YYYY-MM-DD"
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(val || "");
    if (!m) return null;
    const y = +m[1], mo = +m[2], d = +m[3];
    if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
    const dd = new Date(Date.UTC(y, mo - 1, d));
    if (dd.getUTCFullYear() !== y || dd.getUTCMonth() + 1 !== mo || dd.getUTCDate() !== d) return null; // rejects 2 Feb 30 etc
    return { y, m: mo, d, utc: dd.getTime() };
  }
  const dm = (y, M) => new Date(Date.UTC(y, M, 0)).getUTCDate(); // days in 1-indexed month M
  const DAY = 86400000;

  function calc() {
    T.setErr("");
    const b = parts($("#dob").value);
    if (!b) { out.replaceChildren(); T.status("Enter a valid date of birth."); return; }
    if (b.y < 1900) { T.setErr("Please enter a birth year from 1900 onwards."); out.replaceChildren(); return; }
    const aStr = $("#asof").value;
    let t = aStr ? parts(aStr) : null;
    if (aStr && !t) { T.setErr("The 'age at' date is not valid."); out.replaceChildren(); return; }
    if (!t) { const n = new Date(); t = { y: n.getFullYear(), m: n.getMonth() + 1, d: n.getDate() }; t.utc = Date.UTC(t.y, t.m - 1, t.d); }

    if (t.utc < b.utc) { T.setErr("Date of birth cannot be after the 'age at' date."); out.replaceChildren(); return; }

    let years = t.y - b.y, months = t.m - b.m, days = t.d - b.d;
    if (days < 0) { months--; days += dm(t.y, t.m - 1); }
    if (months < 0) { years--; months += 12; }
    if (years < 0) { T.setErr("That date of birth is in the future."); out.replaceChildren(); return; }

    const totalDays = Math.round((t.utc - b.utc) / DAY);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    let bd = Date.UTC(t.y, b.m - 1, Math.min(b.d, dm(t.y, b.m)));
    if (bd <= t.utc) bd = Date.UTC(t.y + 1, b.m - 1, Math.min(b.d, dm(t.y + 1, b.m)));
    const daysToBd = Math.round((bd - t.utc) / DAY);

    const wd = new Date(b.utc).toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" });

    const res = document.createElement("div");
    res.className = "res";
    res.innerHTML =
      '<div class="stat-row">' +
        '<div class="stat"><b>' + years + ' y</b><small>years</small></div>' +
        '<div class="stat"><b>' + months + ' m</b><small>months</small></div>' +
        '<div class="stat"><b>' + days + ' d</b><small>days</small></div>' +
      '</div>' +
      '<div class="res-line"><span>Total days</span><span>' + totalDays.toLocaleString() + '</span></div>' +
      '<div class="res-line"><span>Total weeks</span><span>' + totalWeeks.toLocaleString() + '</span></div>' +
      '<div class="res-line"><span>Total months</span><span>' + totalMonths.toLocaleString() + '</span></div>' +
      '<div class="res-line"><span>Day of the week born</span><span>' + wd + '</span></div>' +
      '<div class="res-line"><span>Next birthday in</span><span>' + daysToBd + ' day' + (daysToBd === 1 ? "" : "s") + '</span></div>';
    out.replaceChildren(res);
    T.status("Age: " + years + " years, " + months + " months, " + days + " days.");
  }

  function reset() { $("#dob").value = ""; $("#asof").value = ""; out.replaceChildren(); T.setErr(""); T.status(""); }

  card.addEventListener("input", calc);
  T.on($("#go"), "click", calc);
  T.on($("#rst"), "click", reset);
})();
