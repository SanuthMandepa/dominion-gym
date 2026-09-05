import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { programs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Training Programs: Strength, Muscle, Fat Loss & More",
  description:
    "Six structured training programs at Dominion Fitness: strength training, muscle building, fat loss & conditioning, functional fitness, personal training and beginner foundations.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[76px]">
        <div
          aria-hidden
          className="absolute right-0 top-0 h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(220,153,61,0.1)_0%,transparent_60%)]"
        />
        <div className="container-x section-pad relative">
          <Reveal>
            <p className="eyebrow mb-4">Programs</p>
            <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9]">
              SIX PATHS. <span className="text-gold">ONE STANDARD.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-beige">
              Every program is structured, coached and tracked. Pick the one that matches your goal,
              or take the free assessment and we&apos;ll pick it with you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Program detail rows */}
      <section className="bg-coffee">
        {programs.map((p, i) => (
          <div key={p.slug} id={p.slug} className="hairline-t scroll-mt-24">
            <div
              className={`container-x grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="photo-ph relative aspect-[16/10]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-stroke-faint text-[clamp(6rem,12vw,10rem)]">{p.num}</span>
                </div>
                <div
                  className={`absolute h-20 w-20 border-gold ${
                    i % 2 === 1 ? "bottom-0 right-0 border-b-2 border-r-2" : "left-0 top-0 border-l-2 border-t-2"
                  }`}
                  aria-hidden
                />
              </Reveal>

              <Reveal delay={0.1}>
                <p className="eyebrow mb-3">Program {p.num}</p>
                <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none">{p.title.toUpperCase()}</h2>
                <p className="mt-5 leading-relaxed text-beige">{p.detail}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-walnut/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-beige"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn btn-gold text-sm !py-3 !px-6">
                    Join This Program
                  </Link>
                  <Link href="/schedule" className="btn btn-ghost text-sm !py-3 !px-6">
                    See Schedule
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      <CtaBanner />
    </>
  );
}
