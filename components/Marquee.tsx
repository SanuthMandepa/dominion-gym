"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  items: string[];
  /** Base seconds for one loop; lower is faster */
  speed?: number;
  /** Outlined ghost text instead of solid */
  outline?: boolean;
  className?: string;
};

/**
 * Infinite horizontal text marquee whose speed and direction react
 * to scroll velocity: scroll fast and it races, scroll up and it reverses.
 */
export default function Marquee({ items, speed = 22, outline = false, className = "" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const loop = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: speed,
      ease: "none",
    });

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const velocity = self.getVelocity() / 900;
        const boost = gsap.utils.clamp(-4, 4, velocity);
        gsap.to(loop, {
          timeScale: self.direction === -1 ? -1 - Math.abs(boost) : 1 + Math.abs(boost),
          duration: 0.4,
          overwrite: true,
        });
      },
    });

    return () => {
      st.kill();
      loop.kill();
    };
  }, [speed]);

  const row = items.map((item, i) => (
    <span key={i} className="flex items-center shrink-0">
      <span
        className={`font-display leading-none whitespace-nowrap text-[clamp(3.5rem,9vw,8rem)] ${
          outline ? "text-stroke-faint" : "text-cream"
        }`}
      >
        {item}
      </span>
      <span aria-hidden className="mx-8 text-gold text-[clamp(1.5rem,3vw,2.5rem)]">
        ◆
      </span>
    </span>
  ));

  return (
    <div className={`overflow-hidden py-6 select-none ${className}`} aria-hidden="true">
      <div ref={trackRef} className="marquee-track">
        <div className="flex shrink-0">{row}</div>
        <div className="flex shrink-0">{row}</div>
      </div>
    </div>
  );
}
