// Copy for /care-plan, the landing page for the Care Plan re-touch emails
// (Nov to Dec 2026). Prices and plan benefits match Tim's Care Plan flyer and
// email 1. Change the offer here, not in the page.

export const offer = {
  price: "$59",
  regular: "$169",
  endsLabel: "Offer ends Dec 15",
  finePrint:
    "The $59 tune-up is in addition to the Care Plan membership price. Weekend diagnostic fee may apply.",
};

export const bookUrl =
  "https://icareaircare.com/book/?utm_source=care-plan-lp&utm_medium=landing-page&utm_campaign=retouch-2026";

export const perks = [
  { stat: "2", title: "Visits a year", text: "Spring and fall tune-ups, on the calendar." },
  { stat: "1st", title: "Front of the line", text: "Priority service when you need us." },
  { stat: "15%", title: "Off repairs", text: "On parts and labor, every time." },
];

export type Plan = {
  id: "bronze" | "silver" | "gold";
  name: string;
  color: string;
  price: string;
  per: string;
  perNote?: string;
  badge?: string;
  items: string[];
};

export const plans: Plan[] = [
  {
    id: "bronze",
    name: "Bronze",
    color: "var(--color-cp-bronze)",
    price: "$169",
    per: "per year",
    items: [
      "2 visits a year, spring and fall",
      "15% off parts and labor",
      "5% off a new system",
      "Priority service in 48 to 72 hours",
      "Drain cleaning at every tune-up",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    color: "var(--color-cp-silver)",
    price: "$259",
    per: "per year",
    items: [
      "Everything in Bronze",
      "Worry-free drain line cleaning during your plan",
      "Priority service in 24 to 48 hours",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    color: "var(--color-cp-gold)",
    price: "$529",
    per: "for 3 years",
    perNote: "$176.33 a year",
    badge: "Best value",
    items: ["Everything in Silver", "Three years of coverage", "Priority service in 24 to 48 hours"],
  },
];

export const steps = [
  { title: "Pick a plan", text: "Bronze, Silver or Gold. Send the form or give us a call." },
  { title: "We book your tune-up", text: "We call you back and set a time that works for you." },
  { title: "Your tune-up is $59", text: "Instead of the regular $169." },
];

export const reviews = [
  {
    name: "Dave Barry",
    text: "I have been a customer of I Care Air Care for 20+ years. Service and support are always impeccable.",
  },
  {
    name: "Jim Hammond",
    text: "We have been using I Care for 8 years now and they never cease to amaze me with personalized service.",
  },
  {
    name: "Keri A.",
    text: "This company is still the best in the area. We've used them to do a full replacement of our AC and couldn't be happier.",
  },
];

export const faqs = [
  {
    q: "How does the $59 tune-up work?",
    a: "Join any Care Plan and your tune-up today is $59 instead of the regular $169. The $59 is in addition to the plan price.",
  },
  {
    q: "What is the difference between the plans?",
    a: "All three include two visits a year, 15% off parts and labor, and drain cleaning. Silver and Gold add drain line cleaning during your plan and faster priority service (24 to 48 hours). Gold covers three years for $529, which works out to $176.33 a year.",
  },
  {
    q: "I had a plan before. Can I join again?",
    a: "Yes. Pick a plan, send the form or call us, and we will get you back on the schedule.",
  },
  {
    q: "Are there any other fees?",
    a: "A weekend diagnostic fee may apply. Call us with any questions about your visit.",
  },
];
