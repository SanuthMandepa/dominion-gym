import Reveal from "@/components/Reveal";
import { timetable, timetableDays } from "@/lib/data";

export default function Timetable() {
  return (
    <Reveal className="overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <caption className="sr-only">Weekly class timetable</caption>
        <thead>
          <tr>
            <th scope="col" className="border border-white/5 bg-coffee p-4 text-left">
              <span className="eyebrow !text-[0.65rem]">Time</span>
            </th>
            {timetableDays.map((d) => (
              <th scope="col" key={d} className="border border-white/5 bg-coffee p-4">
                <span className="font-display text-lg">{d}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetable.map((slot) => (
            <tr key={slot.time}>
              <th scope="row" className="border border-white/5 bg-coffee/60 p-4 text-left font-display text-gold">
                {slot.time}
              </th>
              {slot.classes.map((c, i) => (
                <td key={i} className="border border-white/5 p-4 text-center">
                  {c ? (
                    <span className="inline-block border border-walnut/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream transition-colors hover:border-gold hover:text-gold">
                      {c}
                    </span>
                  ) : (
                    <span className="text-xs text-beige/40">Open Gym</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
