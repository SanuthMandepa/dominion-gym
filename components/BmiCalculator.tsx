"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";

type Unit = "metric" | "imperial";

const categories = [
  { max: 18.5, label: "Underweight", color: "#7db8dc", program: "Muscle Building", slug: "muscle-building", advice: "You have room to grow. A structured hypertrophy program plus a calorie surplus will add lean, healthy mass." },
  { max: 25, label: "Healthy", color: "#8fce6c", program: "Strength Training", slug: "strength-training", advice: "Great base to build from. Strength or functional training will take your fitness to the next level." },
  { max: 30, label: "Overweight", color: "#dc993d", program: "Fat Loss & Conditioning", slug: "fat-loss", advice: "The Fat Loss program pairs conditioning circuits with strength work so you drop fat without losing muscle." },
  { max: Infinity, label: "Obese", color: "#dc5b3d", program: "Fat Loss + Personal Training", slug: "personal-training", advice: "Start with guided 1-on-1 coaching. A custom, joint-friendly plan gets results safely — and we'll be with you every step." },
];

const GAUGE_MIN = 14;
const GAUGE_MAX = 40;

export default function BmiCalculator() {
  const [unit, setUnit] = useState<Unit>("metric");
  const [heightCm, setHeightCm] = useState(170);
  const [weightKg, setWeightKg] = useState(70);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(7);
  const [pounds, setPounds] = useState(154);

  const { bmi, category } = useMemo(() => {
    const h = unit === "metric" ? heightCm : (feet * 12 + inches) * 2.54;
    const w = unit === "metric" ? weightKg : pounds * 0.453592;
    if (h <= 0 || w <= 0) return { bmi: 0, category: categories[1] };
    const value = w / Math.pow(h / 100, 2);
    const cat = categories.find((c) => value < c.max) ?? categories[categories.length - 1];
    return { bmi: Math.round(value * 10) / 10, category: cat };
  }, [unit, heightCm, weightKg, feet, inches, pounds]);

  // Needle angle: map BMI range onto the 180° arc
  const clamped = Math.min(Math.max(bmi, GAUGE_MIN), GAUGE_MAX);
  const angle = ((clamped - GAUGE_MIN) / (GAUGE_MAX - GAUGE_MIN)) * 180 - 90;

  const inputCls =
    "w-full bg-onyx border border-walnut/60 px-4 py-3 text-cream text-lg focus:border-gold focus:outline-none transition-colors";
  const labelCls = "block mb-2 text-[0.7rem] uppercase tracking-[0.25em] text-beige";

  return (
    <section id="bmi" className="section-pad relative overflow-hidden bg-coffee">
      <div
        aria-hidden
        className="absolute -right-40 top-0 h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(220,153,61,0.08)_0%,transparent_60%)]"
      />
      <div className="container-x relative">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-3">Know your starting point</p>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
            BMI <span className="text-gold">CALCULATOR</span>
          </h2>
          <p className="mt-5 text-beige">
            Your Body Mass Index is a quick snapshot of where you are today. Enter your numbers and
            we&apos;ll recommend the Dominion program built for your goal.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Inputs */}
          <Reveal className="panel p-8 md:p-10">
            {/* Unit toggle */}
            <div className="mb-8 inline-flex border border-walnut/60" role="group" aria-label="Unit system">
              {(["metric", "imperial"] as Unit[]).map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  aria-pressed={unit === u}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                    unit === u ? "bg-gold text-onyx" : "text-beige hover:text-gold"
                  }`}
                >
                  {u === "metric" ? "CM / KG" : "FT / LBS"}
                </button>
              ))}
            </div>

            {unit === "metric" ? (
              <div className="space-y-6">
                <div>
                  <label htmlFor="bmi-height" className={labelCls}>
                    Height — {heightCm} cm
                  </label>
                  <input
                    id="bmi-height"
                    type="range"
                    min={120}
                    max={220}
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full accent-gold"
                  />
                </div>
                <div>
                  <label htmlFor="bmi-weight" className={labelCls}>
                    Weight — {weightKg} kg
                  </label>
                  <input
                    id="bmi-weight"
                    type="range"
                    min={30}
                    max={180}
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full accent-gold"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="bmi-feet" className={labelCls}>
                    Feet
                  </label>
                  <input
                    id="bmi-feet"
                    type="number"
                    min={3}
                    max={7}
                    value={feet}
                    onChange={(e) => setFeet(Number(e.target.value))}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="bmi-inches" className={labelCls}>
                    Inches
                  </label>
                  <input
                    id="bmi-inches"
                    type="number"
                    min={0}
                    max={11}
                    value={inches}
                    onChange={(e) => setInches(Number(e.target.value))}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="bmi-pounds" className={labelCls}>
                    Pounds
                  </label>
                  <input
                    id="bmi-pounds"
                    type="number"
                    min={60}
                    max={400}
                    value={pounds}
                    onChange={(e) => setPounds(Number(e.target.value))}
                    className={inputCls}
                  />
                </div>
              </div>
            )}

            {/* Category scale */}
            <div className="mt-10">
              <div className="flex h-2.5 overflow-hidden rounded-full">
                {categories.map((c, i) => (
                  <div
                    key={c.label}
                    className="transition-opacity duration-300"
                    style={{
                      background: c.color,
                      opacity: category.label === c.label ? 1 : 0.25,
                      width: ["18%", "30%", "26%", "26%"][i],
                    }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[0.6rem] uppercase tracking-wider text-beige/70">
                <span>14</span>
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
                <span>40+</span>
              </div>
            </div>
          </Reveal>

          {/* Result */}
          <Reveal delay={0.15} className="panel flex flex-col items-center justify-center p-8 text-center md:p-10">
            {/* Gauge */}
            <div className="relative w-full max-w-[300px]">
              <svg viewBox="0 0 200 110" className="w-full" aria-hidden>
                <path
                  d="M 15 100 A 85 85 0 0 1 185 100"
                  fill="none"
                  stroke="rgba(252,252,252,0.08)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <path
                  d="M 15 100 A 85 85 0 0 1 185 100"
                  fill="none"
                  stroke={category.color}
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={`${((clamped - GAUGE_MIN) / (GAUGE_MAX - GAUGE_MIN)) * 267} 267`}
                  style={{ transition: "stroke-dasharray 0.5s cubic-bezier(0.22,1,0.36,1), stroke 0.5s ease" }}
                />
                <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: "100px 100px", transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)" }}>
                  <line x1="100" y1="100" x2="100" y2="32" stroke="#fcfcfc" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="100" cy="100" r="7" fill="#dc993d" />
                </g>
              </svg>
              <div className="absolute inset-x-0 bottom-0 translate-y-2">
                <p className="font-display text-6xl" style={{ color: category.color }} aria-live="polite">
                  {bmi.toFixed(1)}
                </p>
              </div>
            </div>

            <p
              className="font-display mt-8 text-2xl uppercase tracking-wide"
              style={{ color: category.color }}
            >
              {category.label}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-beige">{category.advice}</p>

            <Link href={`/programs#${category.slug}`} className="btn btn-gold mt-8">
              Start: {category.program}
            </Link>
            <p className="mt-6 text-[0.65rem] text-beige/50">
              BMI is a general guide, not a medical diagnosis. Book a free assessment for a full picture.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
