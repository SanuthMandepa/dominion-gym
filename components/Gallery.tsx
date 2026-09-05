import Reveal from "@/components/Reveal";
import { facilities } from "@/lib/data";

/** Facilities grid; the .photo-ph panels are placeholders for real gym photos. */
export default function Gallery() {
  return (
    <section className="section-pad bg-onyx">
      <div className="container-x">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">The floor</p>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
              OUR <span className="text-gold">FACILITIES</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-beige">
            Every zone you need for a complete transformation, under one roof.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 0.1}
              className={`photo-ph group relative overflow-hidden ${
                i === 0 || i === 3 ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3]"
              }`}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-500 group-hover:-translate-y-1">
                <span className="font-display text-stroke-faint mb-auto text-5xl opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-cream">{f.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-beige">{f.desc}</p>
              </div>
              <div className="absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-gold/40" aria-hidden />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
