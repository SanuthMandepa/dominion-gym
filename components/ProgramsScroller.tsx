"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { programs } from "@/lib/data";
import Reveal from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

/**
 * Sticky horizontal scroller: vertical scroll drives the program cards
 * horizontally on desktop (CSS sticky, so React's DOM is never mutated).
 * On mobile it falls back to a native swipe carousel.
 */
export default function ProgramsScroller() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      // The track is `w-max` on desktop, so its own width is the full row of
      // cards. (scrollWidth would be useless here; overflow-x is visible.)
      const distance = () => Math.max(0, track.offsetWidth - window.innerWidth);
      const setHeight = () => {
        section.style.height = `${window.innerHeight + distance()}px`;
      };
      setHeight();

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
          onRefreshInit: setHeight,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        section.style.height = "";
        gsap.set(track, { clearProps: "x" });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="programs" className="bg-onyx">
      <div className="sticky top-0 flex min-h-svh flex-col justify-center overflow-hidden py-16">
        <Reveal className="container-x mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">What we train</p>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
              OUR <span className="text-gold">PROGRAMS</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-beige md:block">
            Keep scrolling. The floor moves with you. Six paths, one standard.
          </p>
        </Reveal>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[clamp(1.25rem,4vw,3rem)] pb-4 md:w-max md:snap-none md:overflow-x-visible md:pb-0"
        >
          {programs.map((p) => (
            <article
              key={p.slug}
              className="panel corner-tag group relative flex min-h-115 w-[82vw] max-w-105 shrink-0 snap-center flex-col justify-between p-8 md:w-105 md:p-10"
            >
              <div>
                <span className="font-display text-stroke-faint text-[clamp(3.5rem,9vw,4.5rem)]">{p.num}</span>
                <h3 className="font-display mt-6 text-[clamp(1.75rem,4vw,2.25rem)] leading-tight transition-colors group-hover:text-gold">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-beige">{p.blurb}</p>
              </div>
              <div>
                <ul className="mb-8 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-walnut/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-beige"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/programs#${p.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-gold"
                >
                  View Program
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </Link>
              </div>
            </article>
          ))}

          {/* End card */}
          <article className="flex w-[82vw] max-w-105 shrink-0 snap-center flex-col items-start justify-center bg-gold p-10 text-onyx md:w-105">
            <h3 className="font-display text-[clamp(1.75rem,4vw,2.25rem)] leading-tight">NOT SURE WHERE TO START?</h3>
            <p className="mt-4 text-sm font-medium leading-relaxed">
              Take the free BMI check below or message us and we&apos;ll match you to the right program.
            </p>
            <Link
              href="/#bmi"
              className="mt-8 border-2 border-onyx px-6 py-3 font-display uppercase tracking-wider transition-colors hover:bg-onyx hover:text-gold"
            >
              Check My BMI
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
