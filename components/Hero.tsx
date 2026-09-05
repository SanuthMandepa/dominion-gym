"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .fromTo(".hero-line", { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.12 }, 0.15)
        .fromTo(".hero-fade", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 }, 0.7);

      // Parallax drift as you scroll away
      gsap.to(".hero-title", {
        yPercent: 22,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-glow", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-[76px]">
      {/* Atmosphere */}
      <div
        aria-hidden
        className="hero-glow absolute left-1/2 top-1/4 h-[60vmax] w-[60vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,153,61,0.16)_0%,transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(252,252,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(252,252,252,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />

      <div className="container-x relative">
        <p className="hero-fade eyebrow mb-6">
          EST. {site.founded} / SRI LANKA <span className="text-beige/60">/ GYM & FITNESS CENTRE</span>
        </p>

        <h1 className="hero-title font-display leading-[0.88] text-[clamp(4rem,13vw,11.5rem)]">
          <span className="block overflow-hidden">
            <span className="hero-line block">RULE</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">
              YOUR <span className="text-stroke">BODY</span>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block text-gold">DOMINION.</span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="hero-fade max-w-md text-base leading-relaxed text-beige md:text-lg">
            Gym is one day. <span className="text-cream">Transformation is discipline.</span> Train with
            purpose at Sri Lanka&apos;s home of strength: programs, coaching and a floor built for results.
          </p>
          <div className="hero-fade flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-gold">
              Start Training
            </Link>
            <Link href="/programs" className="btn btn-ghost">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-beige/60">Scroll</span>
        <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
