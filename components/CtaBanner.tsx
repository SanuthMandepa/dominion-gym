import Link from "next/link";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-onyx py-20">
      <Marquee items={["START TODAY", "NO EXCUSES", "RULE YOUR BODY"]} outline speed={26} />
      <Reveal className="container-x mt-8 flex flex-col items-center gap-8 text-center">
        <h2 className="font-display max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-tight">
          YOUR TRANSFORMATION STARTS WITH <span className="text-gold">ONE DECISION</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn btn-gold">
            Join Dominion Fitness
          </Link>
          <Link href="/schedule" className="btn btn-ghost">
            View Class Schedule
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
