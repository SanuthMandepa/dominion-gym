import Link from "next/link";
import Reveal from "@/components/Reveal";
import { coach } from "@/lib/data";

export default function CoachSection() {
  return (
    <section className="section-pad bg-onyx">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Portrait placeholder — replace with a real photo of the coach */}
        <Reveal className="photo-ph relative aspect-[4/5] max-h-[640px] w-full">
          <div className="absolute inset-0 flex items-end p-8">
            <p className="font-display text-stroke-faint text-[clamp(4rem,8vw,7rem)] leading-[0.9]">
              HEAD
              <br />
              COACH
            </p>
          </div>
          <div className="absolute right-0 top-0 h-24 w-24 border-r-2 border-t-2 border-gold" aria-hidden />
          <div className="absolute bottom-0 left-0 h-24 w-24 border-b-2 border-l-2 border-gold" aria-hidden />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-3">About the coach</p>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
              {coach.name.toUpperCase()}
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gold">{coach.role}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="mt-8 border-l-2 border-gold pl-6">
              <p className="font-display text-2xl leading-snug text-cream md:text-3xl">
                “{coach.quote}”
              </p>
            </blockquote>
            <p className="mt-6 leading-relaxed text-beige">{coach.bio}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {coach.certs.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-cream">
                  <span className="text-gold" aria-hidden>
                    ◆
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-gold mt-10">
              Train With Me
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
