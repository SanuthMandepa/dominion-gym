/**
 * ─── DOMINION FITNESS: SITE CONTENT ──────────────────────────────
 * Every piece of text, price and contact detail lives here.
 * Items marked [PLACEHOLDER] should be replaced with real details.
 */

export const site = {
  name: "Dominion Fitness",
  tagline: "Rule Your Body",
  url: "https://dominionfitness.lk", // [PLACEHOLDER] real domain
  phone: "076 592 6206",
  phoneIntl: "+94765926206", // used for tel: links and schema.org
  whatsapp: "94765926206", // digits only, country code first
  email: "hello@dominionfitness.lk", // [PLACEHOLDER]
  address: "Dodangoda, Kalutara, Sri Lanka",
  plusCode: "H256+8WW Kalutara",
  geo: { lat: 6.5583083, lng: 80.0124326 },
  /** Opens Google Maps directions to the gym. */
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=6.5583083,80.0124326",
  /** Keyless Google Maps iframe source for the contact page. */
  mapEmbedUrl: "https://maps.google.com/maps?q=6.5583083,80.0124326&z=16&output=embed",
  facebook: "https://www.facebook.com/profile.php?id=61582455574791",
  founded: "2025",
  hours: [
    { days: "Monday – Friday", time: "5:00 AM – 10:00 PM" },
    { days: "Saturday", time: "6:00 AM – 9:00 PM" },
    { days: "Sunday & Poya", time: "7:00 AM – 1:00 PM" },
  ],
};

export const stats = [
  { value: 150, suffix: "+", label: "Active Members" },
  { value: 12, suffix: "+", label: "Training Programs" },
  { value: 7, suffix: "", label: "Days Open a Week" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export type Program = {
  slug: string;
  num: string;
  title: string;
  blurb: string;
  detail: string;
  tags: string[];
};

export const programs: Program[] = [
  {
    slug: "strength-training",
    num: "01",
    title: "Strength Training",
    blurb: "Build raw power with progressive barbell and free-weight work.",
    detail:
      "Structured strength cycles built around the big lifts: squat, bench, deadlift and press. Every session is programmed with progressive overload so you get measurably stronger week after week.",
    tags: ["Barbell", "Progressive Overload", "All Levels"],
  },
  {
    slug: "muscle-building",
    num: "02",
    title: "Muscle Building",
    blurb: "Hypertrophy-focused splits designed to add lean size.",
    detail:
      "Classic bodybuilding methodology: volume, intensity and time under tension. We pair your split with nutrition guidance so the size you add is lean muscle, not guesswork.",
    tags: ["Hypertrophy", "Nutrition", "Intermediate"],
  },
  {
    slug: "fat-loss",
    num: "03",
    title: "Fat Loss & Conditioning",
    blurb: "Torch fat with metcons, circuits and smart cardio.",
    detail:
      "High-energy conditioning circuits combined with strength work to keep muscle while you cut. Trackable weekly targets keep you accountable from day one to your transformation photo.",
    tags: ["HIIT", "Circuits", "Transformation"],
  },
  {
    slug: "functional-fitness",
    num: "04",
    title: "Functional Fitness",
    blurb: "Move better everywhere: mobility, core and athletic work.",
    detail:
      "Kettlebells, sleds, odd objects and bodyweight flows that build a body that performs outside the gym: stronger joints, better posture, real-world athleticism.",
    tags: ["Mobility", "Core", "Athletic"],
  },
  {
    slug: "personal-training",
    num: "05",
    title: "Personal Training",
    blurb: "1-on-1 coaching with a plan built around your body.",
    detail:
      "Private sessions with our head coach. Your assessment, your goals, your program, with form coaching on every rep and a direct line to your trainer between sessions.",
    tags: ["1-on-1", "Custom Plan", "Fast Results"],
  },
  {
    slug: "beginner-foundations",
    num: "06",
    title: "Beginner Foundations",
    blurb: "New to the gym? Learn the fundamentals with zero intimidation.",
    detail:
      "A guided 4-week on-ramp covering technique, machine familiarity and habit building. Graduate confident enough to train any program on the floor.",
    tags: ["Beginner", "4-Week On-Ramp", "Guided"],
  },
];

export const coach = {
  name: "P.B. Vithana", // from the Dominion Fitness Facebook page
  role: "Head Coach & Founder",
  bio: "Coach Vithana built Dominion Fitness on one belief: anyone can walk into a gym, but a transformation takes discipline. His own 3-month transformation is the proof. Self-confidence, determination and dedication, applied daily. He now brings that same standard to every member on the floor.",
  quote: "Gym is one day. Transformation is discipline.",
  certs: [
    "Certified Fitness Instructor", // [PLACEHOLDER] real certifications
    "Strength & Conditioning Coach",
    "Sports Nutrition Advisor",
  ],
};

export const facilities = [
  { title: "Free Weights Zone", desc: "Dumbbells, barbells and platforms" },
  { title: "Machine Circuit", desc: "Full pin-loaded and plate-loaded line" },
  { title: "Cardio Deck", desc: "Treadmills, bikes and rowers" },
  { title: "Functional Area", desc: "Kettlebells, sleds and turf" },
  { title: "Stretch & Mobility", desc: "Dedicated recovery corner" },
  { title: "Locker Rooms", desc: "Secure lockers and changing rooms" },
];

export const pricing = [
  {
    name: "Day Pass",
    price: "1,000",
    period: "per day",
    featured: false,
    features: ["Full gym access for one day", "All equipment zones", "Locker access", "No commitment"],
  },
  {
    name: "Monthly",
    price: "5,000",
    period: "per month",
    featured: true,
    features: [
      "Unlimited gym access",
      "Free fitness assessment",
      "Group class access",
      "Progress tracking",
      "WhatsApp coach support",
    ],
  },
  {
    name: "Annual",
    price: "48,000",
    period: "per year",
    featured: false,
    features: [
      "Everything in Monthly",
      "2 months free",
      "Priority PT booking",
      "Guest passes",
    ],
  },
]; // [PLACEHOLDER] prices in LKR, update with real rates

export const testimonials = [
  {
    name: "Heshara W.",
    text: "Three months in and people I haven't seen since last year don't recognise me. The coaching here is on a different level. Every session has a purpose.",
    tag: "3-Month Transformation",
  },
  {
    name: "Kasun P.",
    text: "I was intimidated by gyms my whole life. The Beginner Foundations program changed that in a month. Now the barbell feels like home.",
    tag: "Beginner Foundations",
  },
  {
    name: "Dilini F.",
    text: "Lost 8kg without losing strength. The fat loss program is hard, honest work, but the weekly targets kept me accountable every single day.",
    tag: "Fat Loss Program",
  },
  {
    name: "Ramesh S.",
    text: "Best equipment in the area and a coach who actually watches your form. This place holds you to a standard. That's why it works.",
    tag: "Strength Training",
  },
]; // [PLACEHOLDER] replace with real member reviews

export const faqs = [
  {
    q: "I'm a complete beginner. Can I join?",
    a: "Absolutely. Beginners are who we built the Foundations program for. Your first session includes a free assessment, and a coach walks you through everything before you touch a weight.",
  },
  {
    q: "What are the membership options?",
    a: "Day passes, monthly and annual memberships. Monthly is our most popular plan and includes group classes and a free fitness assessment. Personal training is booked separately.",
  },
  {
    q: "Do you provide workout and nutrition plans?",
    a: "Yes. Every membership includes a structured program matched to your goal, and personal training clients get a fully custom plan with nutrition guidance.",
  },
  {
    q: "What are your opening hours?",
    a: "Weekdays 5:00 AM – 10:00 PM, Saturdays 6:00 AM – 9:00 PM, and Sundays and Poya days 7:00 AM – 1:00 PM.",
  },
  {
    q: "Is there parking available?",
    a: "Yes, free parking is available for members right outside the gym.", // [PLACEHOLDER]
  },
  {
    q: "Can I freeze or transfer my membership?",
    a: "Monthly and annual memberships can be frozen for up to 30 days a year. Just message us on WhatsApp and we'll sort it out.",
  },
];

export type TimeSlot = { time: string; classes: (string | null)[] };

export const timetableDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// [PLACEHOLDER] class schedule; null means open gym
export const timetable: TimeSlot[] = [
  { time: "6:00 AM", classes: ["Strength", "HIIT", "Strength", "HIIT", "Strength", "Bootcamp", null] },
  { time: "8:00 AM", classes: [null, "Functional", null, "Functional", null, "Open Gym", "Open Gym"] },
  { time: "12:00 PM", classes: ["Express 45", null, "Express 45", null, "Express 45", null, null] },
  { time: "5:00 PM", classes: ["Muscle Build", "Fat Loss", "Muscle Build", "Fat Loss", "Muscle Build", "Strength", null] },
  { time: "7:00 PM", classes: ["Fat Loss", "Strength", "Fat Loss", "Strength", "Functional", null, null] },
];
