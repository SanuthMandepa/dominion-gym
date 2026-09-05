"use client";

import { FormEvent, useState } from "react";
import { site, programs } from "@/lib/data";

/**
 * No-backend contact form: builds a prefilled WhatsApp message and opens it.
 * Swap for a real form service (Formspree, Resend, etc.) when ready.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(programs[0].title);
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi Dominion Fitness! I'm ${name || "interested in joining"}.\nGoal: ${goal}\n${message}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const fieldCls =
    "w-full bg-onyx border border-walnut/60 px-4 py-3.5 text-cream placeholder:text-beige/40 focus:border-gold focus:outline-none transition-colors";
  const labelCls = "block mb-2 text-[0.7rem] uppercase tracking-[0.25em] text-beige";

  return (
    <form onSubmit={onSubmit} className="panel space-y-6 p-8 md:p-10">
      <div>
        <label htmlFor="cf-name" className={labelCls}>
          Your Name
        </label>
        <input
          id="cf-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Kasun Perera"
          className={fieldCls}
        />
      </div>

      <div>
        <label htmlFor="cf-goal" className={labelCls}>
          Your Goal
        </label>
        <select id="cf-goal" value={goal} onChange={(e) => setGoal(e.target.value)} className={fieldCls}>
          {programs.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet, help me choose</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelCls}>
          Message (optional)
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us anything that helps: experience, injuries, preferred times..."
          className={fieldCls}
        />
      </div>

      <button type="submit" className="btn btn-gold w-full">
        Send via WhatsApp
      </button>
      <p className="text-center text-[0.65rem] text-beige/50">
        Opens WhatsApp with your message ready to send. No forms, no waiting.
      </p>
    </form>
  );
}
