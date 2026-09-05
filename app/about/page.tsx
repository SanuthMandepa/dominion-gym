import type { Metadata } from "next";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import CoachSection from "@/components/CoachSection";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us: Our Story & Head Coach",
  description:
    "Dominion Fitness was founded in 2025 in Sri Lanka on one belief: transformation takes discipline. Meet our head coach and see the standard we train by.",
};

const values = [
  {
    title: "Discipline First",
    desc: "Motivation fades. Discipline is what walks you through the door on the days you don't feel like it, and those are the days that count.",
  },
  {
    title: "Coaching, Not Guessing",
    desc: "Every member trains on a program, not a random workout. Form is watched, progress is tracked, plans are adjusted.",
  },
  {
    title: "One Standard",
    desc: "Beginner or athlete, everyone gets the same respect and the same expectation: show up and do the work.",
  },
  {
    title: "Community That Pushes",
    desc: "The right room changes everything. Train beside people who want more, and you'll want more too.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pt-[76px]">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-[40vmax] w-[40vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,153,61,0.12)_0%,transparent_60%)]"
        />
        <div className="container-x section-pad relative">
          <Reveal>
            <p className="eyebrow mb-4">About us</p>
            <h1 className="font-display max-w-4xl text-[clamp(3rem,9vw,7.5rem)] leading-[0.9]">
              GYM IS ONE DAY. <span className="text-gold">TRANSFORMATION</span>{" "}
              <span className="text-stroke">IS DISCIPLINE.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-beige">
              {site.name} was founded in {site.founded} in Sri Lanka, not to be the biggest gym, but
              to be the most serious one. A place where the plan is real, the coaching is real, and
              the results speak in before-and-after photos.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={["EST. 2025", "SRI LANKA", "RULE YOUR BODY"]} outline speed={28} className="hairline-t" />

      {/* Values */}
      <section className="section-pad bg-coffee">
        <div className="container-x">
          <Reveal className="mb-12">
            <p className="eyebrow mb-3">What we stand for</p>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
              THE <span className="text-gold">STANDARD</span>
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.1} className="panel corner-tag p-9">
                <span className="font-display text-stroke-faint text-5xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-5 text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-beige">{v.desc}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <Stats />
          </div>
        </div>
      </section>

      <CoachSection />
      <Gallery />

      {/* Facebook strip */}
      <section className="section-pad bg-coffee">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <Reveal>
            <p className="eyebrow mb-3">Follow the journey</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              TRANSFORMATIONS, POSTED <span className="text-gold">WEEKLY</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-beige">
              Real member progress, training clips and gym updates. Follow us on Facebook.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Follow on Facebook
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
