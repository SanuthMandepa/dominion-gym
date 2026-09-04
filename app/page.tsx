import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import ProgramsScroller from "@/components/ProgramsScroller";
import CoachSection from "@/components/CoachSection";
import BmiCalculator from "@/components/BmiCalculator";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="hairline-t">
        <Marquee items={["STRENGTH", "DISCIPLINE", "RESULTS", "DOMINION FITNESS"]} speed={24} />
      </div>

      {/* About preview */}
      <section className="section-pad bg-coffee">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">Who we are</p>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
              BUILT ON <span className="text-gold">DISCIPLINE</span>
            </h2>
            <p className="mt-6 leading-relaxed text-beige">
              {site.name} opened its doors in {site.founded} with a simple standard: train with
              purpose, or don&apos;t train at all. We&apos;re not a social club with weights — we&apos;re a
              floor where transformations happen, backed by real coaching and programs that work.
            </p>
            <p className="mt-4 leading-relaxed text-beige">
              Whether it&apos;s your first day in a gym or your thousandth, you get the same thing here:
              a plan, a coach who watches your form, and a community that holds you to your word.
            </p>
            <Link href="/about" className="btn btn-ghost mt-8">
              Our Story
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="photo-ph relative aspect-[4/3]">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-display text-stroke text-[clamp(3rem,6vw,5rem)]">EST. {site.founded}</p>
            </div>
            <div className="absolute right-0 top-0 h-20 w-20 border-r-2 border-t-2 border-gold" aria-hidden />
            <div className="absolute bottom-0 left-0 h-20 w-20 border-b-2 border-l-2 border-gold" aria-hidden />
          </Reveal>
        </div>

        <div className="container-x mt-16">
          <Stats />
        </div>
      </section>

      <ProgramsScroller />
      <CoachSection />
      <BmiCalculator />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
