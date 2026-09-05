"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Native scrolls (browser scroll restoration, programmatic jumps, keyboard
    // paging) bypass Lenis, so keep ScrollTrigger in sync with them too;
    // otherwise reveal animations never fire and content stays invisible.
    const update = () => ScrollTrigger.update();
    window.addEventListener("scroll", update, { passive: true });

    // Re-measure once fonts have swapped in and layout has settled.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    const raf1 = requestAnimationFrame(refresh);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      return () => {
        window.removeEventListener("scroll", update);
        cancelAnimationFrame(raf1);
      };
    }

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(raf1);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
