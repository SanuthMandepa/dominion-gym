"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const target = Number(el.dataset.value ?? 0);
        const obj = { n: 0 };
        gsap.to(obj, {
          n: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.n));
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-px bg-white/5 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-onyx px-6 py-10 text-center">
          <p className="font-display text-5xl text-gold md:text-6xl">
            <span className="stat-num" data-value={s.value}>
              0
            </span>
            {s.suffix}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-beige">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
