import type { Metadata } from "next";
import Link from "next/link";
import Timetable from "@/components/Timetable";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Class Schedule & Opening Hours",
  description:
    "Weekly class timetable at Dominion Fitness — strength, HIIT, fat loss, functional fitness and more. Open 7 days a week in Sri Lanka.",
};

export default function SchedulePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[76px]">
        <div
          aria-hidden
          className="absolute left-0 top-0 h-[40vmax] w-[40vmax] rounded-full bg-[radial-gradient(circle,rgba(220,153,61,0.1)_0%,transparent_60%)]"
        />
        <div className="container-x section-pad relative">
          <Reveal>
            <p className="eyebrow mb-4">Schedule</p>
            <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9]">
              PLAN YOUR <span className="text-gold">WEEK</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-beige">
              Outside class times the floor is always yours — open gym runs all day, every day. Class
              spots are first come, first served; members can reserve via WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad hairline-t bg-coffee">
        <div className="container-x">
          <Timetable />

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {site.hours.map((h, i) => (
              <Reveal key={h.days} delay={i * 0.1} className="panel p-8 text-center">
                <p className="eyebrow mb-3">{h.days}</p>
                <p className="font-display text-2xl text-cream">{h.time}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link href="/contact" className="btn btn-gold">
              Book Your First Session
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
