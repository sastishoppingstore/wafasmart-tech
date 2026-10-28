"use strict";
const H = require("./_helpers.js");
module.exports = {
  name: "Age Calculator",
  short: "Get an exact age in years, months and days from a date of birth, plus total days, weeks and months, next-birthday countdown and the weekday you were born.",
  title: "Age Calculator — Years, Months & Days Free | Wafa Smart",
  desc: "Free age calculator: exact years, months and days from a birth date, total days/weeks/months, next-birthday countdown and weekday born. Handles leap years.",
  h1: "Age Calculator — exact age in years, months and days",
  kw: ["age calculator", "calculate age from date of birth", "how old am i", "age in days calculator", "next birthday countdown", "date difference calculator"],
  intro: [
    "Most people know their age only as a rounded year, but forms, visas, school admissions and astrologers often want the precise span: years, months and days as on today. This tool takes a date of birth and, if you like, a second 'age at' date, then returns the full breakdown. It does the fiddly calendar maths — unequal month lengths, leap days, year boundaries — so you never have to count on your fingers and get it wrong by a day.",
    "Below the headline age the page adds the same interval expressed in total days, whole weeks and total months, which is what you actually need for paperwork that asks for 'age in days' or for planning around a deadline. There is also a live countdown to the next birthday and the day of the week the person was born on, useful for anniversaries, birth charts and matching a date to an old memory.",
    "Correctness matters more than it sounds. A naive script gives a one-year-old born on 29 February the wrong age in a non-leap year, or reports a negative day count when the target day is earlier in the month than the birth day. This calculator borrows days from the previous month the proper way and rolls February 29 forward sensibly, and it treats a birth date of today as zero, not a negative number."
  ],
  steps: [
    "Pick the date of birth from the calendar field.",
    "Optional: choose an 'age at' date — leave it empty to measure age as of today.",
    "Press Calculate to see years, months and days for that date.",
    "Read the extra lines for total days, weeks, months, the weekday born and the birthday countdown.",
    "Use Reset to clear the fields for the next person."
  ],
  ur: "Apni paidaish ki tareekh likhein (chahein to 'age at' date bhi dein) aur 'Calculate' dabayein. Bara saal, mahinay aur din ke saath kul din, hafte, aglay salgirah tak ke din aur jis din aap paida huye — sab nazar aa jayega. Sab browser me, koi upload nahi.",
  features: [
    "Exact age in years, months and days with correct month-length borrowing",
    "Optional 'age at' date to measure age on any past or future day",
    "Total days, whole weeks and total months shown together",
    "Live countdown to the next birthday",
    "Weekday you were born on (Monday–Sunday)",
    "Leap-year safe, including 29 February birthdays and same-day birth"
  ],
  tips: [
    "Leave the 'age at' field empty for an age as of today; fill it for a fixed deadline.",
    "For a baby's first-year records, use the total-days line — months alone hide day-level gaps.",
    "If the countdown says 366 days, the coming year includes a leap day.",
    "Set the 'age at' date slightly ahead to see how many days until someone reaches a legal age.",
    "Enter dates as they appear on the official document to avoid one-day mismatches across regions."
  ],
  faqs: [
    { q: "Is the age based on today or a date I choose?", a: "Either. If you leave the optional 'age at' field blank, it measures age as of today's date. Type or pick a specific date to measure age on that day instead." },
    { q: "How are leap years and February 29 handled?", a: "Day arithmetic uses UTC calendar dates, so month lengths and the extra leap day are counted correctly. Someone born on 29 February gets a birthday on 28 February in non-leap years." },
    { q: "What if I enter today as the birth date?", a: "The age shows 0 years, 0 months, 0 days, the total-day line reads zero, and the next-birthday countdown points to the same date next year." },
    H.faqFree("Age Calculator"),
    { q: "Why do two websites differ by one day?", a: "Timezones and whether the script counts inclusively. This one uses calendar dates (not clock times) so the difference is exact regardless of your device's timezone." },
    H.faqMobile("Age Calculator")
  ],
  related: [["percentage-calculator", "Percentage calculator"], ["discount-calculator", "Discount calculator"], ["bmi-calculator", "BMI calculator"], ["water-intake-calculator", "Water intake"]],
  ui: `<section class="t-card opts" aria-label="Age calculator inputs">
  <div class="fld"><label for="dob">Date of birth</label><input type="date" id="dob"></div>
  <div class="fld"><label for="asof">Age at date (optional — default today)</label><input type="date" id="asof"></div>
  <div class="acts"><button id="go" class="btn" type="button">Calculate</button><button id="rst" class="btn btn-ghost" type="button">Reset</button></div>
  <p id="status" role="status" aria-live="polite" class="hint"></p>
  <p id="err" class="err" role="alert" hidden></p>
  <div id="out"></div>
</section>`
};
