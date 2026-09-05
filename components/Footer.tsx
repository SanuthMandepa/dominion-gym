import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-coffee hairline-t">
      {/* Giant XXL wordmark */}
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <p className="font-display text-stroke-faint whitespace-nowrap text-center text-[clamp(5rem,17.5vw,17rem)] leading-[0.85] -mb-[0.12em] translate-y-[0.06em]">
          DOMINION
        </p>
      </div>

      <div className="container-x relative border-t border-white/5 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + socials */}
          <div>
            <p className="font-display text-3xl">
              DOMINION<span className="text-gold">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-beige">
              {site.tagline}. Strength, discipline and transformation, built daily in Sri Lanka since{" "}
              {site.founded}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dominion Fitness on Facebook"
                className="flex h-11 w-11 items-center justify-center border border-walnut text-gold transition-colors hover:bg-gold hover:text-onyx"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Dominion Fitness on WhatsApp"
                className="flex h-11 w-11 items-center justify-center border border-walnut text-gold transition-colors hover:bg-gold hover:text-onyx"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2a10 10 0 0 0-8.66 14.99L2 22l5.16-1.35A10 10 0 1 0 12 2Zm0 18.15a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.98-.2-.31A8.14 8.14 0 1 1 12 20.15Zm4.46-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06a6.65 6.65 0 0 1-3.31-2.9c-.25-.43.25-.4.71-1.33.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.35 1 2.51c.12.16 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="eyebrow mb-5">Explore</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Programs", "/programs"],
                ["Class Schedule", "/schedule"],
                ["BMI Calculator", "/#bmi"],
                ["Contact & Join", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-beige transition-colors hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hours */}
          <div>
            <h3 className="eyebrow mb-5">Opening Hours</h3>
            <ul className="space-y-4 text-sm">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <p className="font-semibold text-cream">{h.days}</p>
                  <p className="text-beige">{h.time}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow mb-5">Get In Touch</h3>
            <ul className="space-y-4 text-sm text-beige">
              <li>{site.address}</li>
              <li>
                <a href={`tel:${site.phoneIntl}`} className="transition-colors hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                  {site.email}
                </a>
              </li>
            </ul>
            <Link href="/contact" className="btn btn-ghost mt-6 text-sm !py-3 !px-6">
              Start Today
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-beige/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-display tracking-widest text-gold/70">STRENGTH • DISCIPLINE • RESULTS</p>
        </div>
      </div>
    </footer>
  );
}
