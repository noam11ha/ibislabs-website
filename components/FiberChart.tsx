"use client";

import { useEffect, useRef } from "react";

/* Real, published figures only. Change the numbers and the sources together.
   Intake: USDA ARS, What We Eat in America, NHANES 2017–March 2020 Prepandemic, Table 1
   (mean dietary fiber from food and beverages, males, by age group).
   Recommended: Institute of Medicine (2005) Adequate Intake for total fiber,
   38 g/day for men 19–50 and 30 g/day for men 51 and over. */
const groups = [
  { age: "20–29", g: 16.3 },
  { age: "30–39", g: 19.3 },
  { age: "40–49", g: 18.2 },
  { age: "50–59", g: 19.1 },
  { age: "60–69", g: 17.7 },
  { age: "70+", g: 18.2 },
];

const X0 = 80, X1 = 620, Y0 = 360, YMAX = 40, H = 300;
const y = (g: number) => Y0 - (g / YMAX) * H;
const slot = (X1 - X0) / groups.length;
const BAR = 38;
const rec = (i: number) => (i < 3 ? 38 : 30); // 50–59 group drawn at the 51+ amount

export default function FiberChart() {
  const ref = useRef<HTMLElement>(null);

  // Visible by default (no JavaScript, reduced motion). With motion allowed and the chart
  // below the fold, bars grow and the recommended line draws once the chart scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.8) return;
    el.classList.add("armed");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.remove("armed");
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const stepPath = `M ${X0} ${y(38)} H ${X0 + slot * 3} V ${y(30)} H ${X1}`;

  return (
    <figure className="chart" ref={ref}>
      <svg viewBox="0 0 660 420" role="img" aria-labelledby="chartTitle chartDesc">
        <title id="chartTitle">Daily fiber intake of U.S. men by age, compared with the recommended amount</title>
        <desc id="chartDesc">
          Average intake is between 16.3 and 19.3 grams a day in every age group from 20 to 70 and over.
          The recommended amount is 38 grams for men up to 50 and 30 grams for men 51 and over.
        </desc>
        <defs>
          <pattern id="gapHatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="7" height="7" fill="rgba(201,67,54,.10)" />
            <line x1="0" y1="0" x2="0" y2="7" stroke="rgba(221,84,70,.55)" strokeWidth="2" />
          </pattern>
        </defs>

        <g className="grid">
          {[0, 10, 20, 30, 40].map((g) => (
            <line key={g} x1={X0} x2={X1} y1={y(g)} y2={y(g)} />
          ))}
        </g>
        {[0, 10, 20, 30, 40].map((g) => (
          <text key={g} className="tick" x={X0 - 14} y={y(g) + 5} textAnchor="end">{g}</text>
        ))}

        {groups.map((d, i) => {
          const cx = X0 + slot * i + slot / 2;
          return (
            <g key={d.age}>
              <rect className="gap" x={cx - BAR / 2} y={y(rec(i))} width={BAR} height={y(d.g) - y(rec(i))} />
              <rect className="bar" x={cx - BAR / 2} y={y(d.g)} width={BAR} height={Y0 - y(d.g)} rx="2" />
              <text className="val" x={cx} y={y(d.g) - 10}>{d.g}</text>
              <text className="tick" x={cx} y={Y0 + 30} textAnchor="middle">{d.age}</text>
            </g>
          );
        })}

        <path className="rec" d={stepPath} />
        <text className="rec-label" x={X0 + 8} y={y(38) - 12}>38 g recommended, men 19–50</text>
        <text className="rec-label" x={X0 + slot * 3 + 8} y={y(30) - 12}>30 g, men 51+</text>

        <line className="axis" x1={X0} x2={X0} y1={Y0 - H - 10} y2={Y0} />
        <line className="axis" x1={X0} x2={X1} y1={Y0} y2={Y0} />
        <text className="axis-title" transform={`translate(18 ${Y0 - H / 2}) rotate(-90)`} textAnchor="middle">GRAMS PER DAY</text>
        <text className="axis-title" x={(X0 + X1) / 2} y={Y0 + 62} textAnchor="middle">AGE</text>
      </svg>
      <div className="legend" aria-hidden="true">
        <span><i className="k-bar" />Average intake, U.S. men</span>
        <span><i className="k-rec" />Recommended amount</span>
        <span><i className="k-gap" />The gap</span>
      </div>
      <figcaption className="sources">
        <sup>1</sup> USDA Agricultural Research Service,{" "}
        <a href="https://www.ars.usda.gov/ARSUserFiles/80400530/pdf/1720/Table_1_NIN_MaleFemale_1720.pdf" target="_blank" rel="noopener noreferrer">What We Eat in America, NHANES 2017 to March 2020, Table 1</a>.
        Mean intake from food and beverages, one-day recall, supplements not included.{" "}
        <sup>2</sup> Institute of Medicine,{" "}
        <a href="https://www.nationalacademies.org/read/10490/chapter/9" target="_blank" rel="noopener noreferrer">Dietary Reference Intakes (2005)</a>,
        Adequate Intake for total fiber. The 50–59 group is drawn at the 51+ amount.
        National diet data, not a study of Adjust.
      </figcaption>
    </figure>
  );
}
