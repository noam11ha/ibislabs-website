"use client";

import { useEffect, useRef } from "react";

// Real, published figures only. Change the numbers and the sources together.
// Intake: USDA ARS, What We Eat in America, NHANES 2017–March 2020 Prepandemic, Table 1 (food and beverages, day 1).
// Recommendation: Institute of Medicine, Dietary Reference Intakes (2005), Adequate Intake for total fiber.
const MAX = 40;
const rows = [
  { label: "What U.S. men eat, on average (age 20+)", value: 18.1, accent: true },
  { label: "Recommended for men 51 and over", value: 30, accent: false },
  { label: "Recommended for men 19 to 50", value: 38, accent: false },
];

export default function FiberChart() {
  const ref = useRef<HTMLDivElement>(null);

  // Bars are full width by default (no JavaScript, reduced motion). With motion allowed,
  // they start at zero and grow once the chart scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;
    el.classList.add("armed");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.remove("armed");
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="chart" ref={ref}>
      <p className="chart-title">Daily fiber: intake compared with the recommended amount</p>
      <p className="chart-sub">Grams of dietary fiber per day, adult men, United States</p>
      <div className="chart-rows" role="list">
        {rows.map((row) => (
          <div className="chart-row" role="listitem" key={row.label}>
            <div className="chart-label">
              <span>{row.label}</span>
              <b>{row.value}<span>g</span></b>
            </div>
            <div className="chart-track" aria-hidden="true">
              <div className={row.accent ? "chart-bar accent" : "chart-bar"} style={{ width: `${(row.value / MAX) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="chart-axis" aria-hidden="true">
        <span>0 g</span><span>10</span><span>20</span><span>30</span><span>40 g</span>
      </div>
      <figcaption className="chart-source">
        Sources: intake from USDA Agricultural Research Service,{" "}
        <a href="https://www.ars.usda.gov/ARSUserFiles/80400530/pdf/1720/Table_1_NIN_MaleFemale_1720.pdf" target="_blank" rel="noopener noreferrer">What We Eat in America, NHANES 2017 to March 2020, Table 1</a>{" "}
        (mean intake from food and beverages, one-day recall, supplements not included). Recommended amounts are the Adequate Intake for total fiber from the Institute of Medicine,{" "}
        <a href="https://www.nationalacademies.org/read/10490/chapter/9" target="_blank" rel="noopener noreferrer">Dietary Reference Intakes (2005)</a>.
        This chart shows national diet data. It is not a study of Adjust and does not show that any product prevents or treats a disease.
      </figcaption>
    </figure>
  );
}
