import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Join — Start Your Transformation",
  description:
    "Join Dominion Fitness today. Visit us in Sri Lanka, call, or message us on WhatsApp — your first fitness assessment is free.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[76px]">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-[40vmax] w-[40vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,153,61,0.12)_0%,transparent_60%)]"
        />
        <div className="container-x section-pad relative">
          <Reveal>
            <p className="eyebrow mb-4">Contact & join</p>
            <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9]">
              START <span className="text-gold">TODAY</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-beige">
              Walk in, call, or message us — your first visit includes a free fitness assessment and a
              tour of the floor. No pressure, no sales script.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad hairline-t bg-coffee">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Info */}
          <div className="space-y-5">
            <Reveal className="panel p-8">
              <p className="eyebrow mb-3">Visit us</p>
              <p className="font-display text-2xl leading-snug">{site.address}</p>
              {/* Map placeholder — drop a Google Maps embed <iframe> here */}
              <div className="photo-ph mt-6 flex aspect-[16/8] items-center justify-center">
                <p className="text-xs uppercase tracking-[0.25em] text-beige/60">Map embed goes here</p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.1} className="panel p-8">
                <p className="eyebrow mb-3">Call us</p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="font-display text-xl transition-colors hover:text-gold"
                >
                  {site.phone}
                </a>
              </Reveal>
              <Reveal delay={0.15} className="panel p-8">
                <p className="eyebrow mb-3">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-display break-all text-xl transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="panel p-8">
              <p className="eyebrow mb-4">Opening hours</p>
              <ul className="space-y-3 text-sm">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex items-center justify-between gap-4">
                    <span className="text-cream">{h.days}</span>
                    <span className="text-beige">{h.time}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Marquee items={["NO EXCUSES", "START TODAY", "DOMINION FITNESS"]} outline speed={26} className="hairline-t" />
    </>
  );
}
