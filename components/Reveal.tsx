"use client";

import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger in seconds */
  delay?: number;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Fades + slides content up when it scrolls into view.
 *
 * Uses IntersectionObserver rather than ScrollTrigger so it fires no matter
 * how the page reached this position — smooth-scrolled, jumped via anchor, or
 * restored by the browser on reload.
 */
export default function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.setAttribute("data-revealed", "");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      data-reveal
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
