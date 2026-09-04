"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-onyx/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="font-display text-2xl tracking-wide">
          DOMINION<span className="text-gold">.</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-gold ${
                  pathname === l.href ? "text-gold" : "text-cream/80"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" className="btn btn-gold !py-3 !px-6 text-sm">
            Join Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`h-0.5 w-7 bg-gold transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-7 bg-gold transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-7 bg-gold transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[76px] z-40 bg-onyx transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="container-x flex flex-col gap-2 pt-10">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`border-b border-white/5 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Link
                href={l.href}
                className={`font-display block py-4 text-4xl ${
                  pathname === l.href ? "text-gold" : "text-cream"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-8">
            <Link href="/contact" className="btn btn-gold w-full">
              Join Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
