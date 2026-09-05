"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { stats } from "@/lib/data";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const nums = Array.from(root.querySelectorAll<HTMLElement>(".stat-num"));

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.value ?? 0);
      if (el.dataset.counted) return;
      el.dataset.counted = "1";

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = String(target);
        return;
      }

      const obj = { n: 0 };
      gsap.to(obj, {
        n: target,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = String(Math.round(obj.n));
        },
      });
    };

    if (typeof IntersectionObserver === "undefined") {
      nums.forEach(countUp);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            countUp(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    nums.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
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
