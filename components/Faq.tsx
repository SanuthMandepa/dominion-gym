import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/data";

export default function Faq() {
  return (
    <section className="section-pad bg-coffee">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="eyebrow mb-3">Questions</p>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4rem)] leading-none">
            BEFORE YOU <span className="text-gold">ASK</span>
          </h2>
          <p className="mt-5 max-w-sm text-beige">
            Everything most people want to know before their first session. Anything else — message us
            on WhatsApp, we reply fast.
          </p>
        </Reveal>

        <div>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <details className="faq group border-b border-white/5">
                <summary className="flex items-center justify-between gap-6 py-6">
                  <span className="font-display text-lg text-cream transition-colors group-hover:text-gold md:text-xl">
                    {f.q}
                  </span>
                  <span className="faq-icon shrink-0 text-2xl text-gold" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-beige">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
