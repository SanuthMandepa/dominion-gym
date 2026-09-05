"use client";

import { useRef } from "react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 24 : 400;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="section-pad overflow-hidden bg-onyx">
      <div className="container-x">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Proof over promises</p>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
              MEMBER <span className="text-gold">STORIES</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center border border-walnut text-gold transition-colors hover:bg-gold hover:text-onyx"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center border border-walnut text-gold transition-colors hover:bg-gold hover:text-onyx"
            >
              →
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[clamp(1.25rem,4vw,3rem)] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="panel corner-tag flex w-[85vw] max-w-110 shrink-0 snap-center flex-col justify-between p-8 md:p-10"
          >
            <div>
              <span className="font-display text-6xl leading-none text-gold" aria-hidden>
                “
              </span>
              <p className="mt-2 leading-relaxed text-cream">{t.text}</p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
              <p className="font-display text-lg">{t.name}</p>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-gold">{t.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
