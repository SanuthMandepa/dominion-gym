import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pricing } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-coffee">
      <div className="container-x">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow mb-3">Membership</p>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
            CLAIM YOUR <span className="text-gold">THRONE</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-beige">
            Simple plans, no hidden fees. Every membership starts with a free fitness assessment.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.12}
              className={`relative flex flex-col p-9 ${
                p.featured
                  ? "border-2 border-gold bg-onyx lg:-translate-y-4 lg:scale-[1.02]"
                  : "panel"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-onyx">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-sm text-beige">LKR</span>
                <span className={`font-display text-6xl ${p.featured ? "text-gold" : "text-cream"}`}>
                  {p.price}
                </span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-beige">{p.period}</p>

              <ul className="mt-8 flex-1 space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-beige">
                    <span className="mt-0.5 text-gold" aria-hidden>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={`mt-10 ${p.featured ? "btn btn-gold" : "btn btn-ghost"}`}>
                Get Started
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
