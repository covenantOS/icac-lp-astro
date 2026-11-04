// Content for the Spectrum PPC landing page (src/pages/index.astro).
// Every fact here is checked against icareaircare.com (src/lib/site.ts in
// covenantOS/icareaircare-astro) as of 2026-11-04. Do not add offers, prices,
// "free estimate" or "Google Guaranteed" claims without Daniel's OK.

import type { IconName } from "~/data/types";

export const biz = {
  name: "I Care Air Care",
  phone: "(813) 395-2324",
  phoneHref: "tel:+18133952324",
  license: "CAC1816515",
  street: "27022 Foamflower Blvd",
  cityLine: "Wesley Chapel, FL 33544",
  hours: "Office Mon to Fri 8am to 6pm, Sat 10am to 4pm. Call for urgent no-cool help.",
  rating: "4.9",
  reviews: "700+",
  years: "16+",
  homes: "4,000+",
  since: "2010",
  owner: "Tim Hawk",
  googleUrl: "https://maps.app.goo.gl/2iCjuu1yf3GAbvSS8",
  bbbUrl: "https://www.bbb.org/us/fl/wesley-chapel/profile/air-conditioning-contractor/i-care-air-care-llc-0653-90109276",
  siteUrl: "https://www.icareaircare.com/",
  privacyUrl: "https://www.icareaircare.com/privacy-policy/",
};

export const img = {
  logo: "/images/real/logo-w240.webp",
  team: "/images/real/team-vans-full.webp",
  van: "/images/real/van-install.webp",
  gauges: "/images/real/tech-gauges.webp",
  condenser: "/images/real/tech-condenser-full.webp",
  office: "/images/real/office-phone.webp",
  tim: "/images/real/tim-hawk-full.webp",
  rheem: "/images/real/rheem-logo.webp",
  synchrony: "/images/real/synchrony.webp",
};

export const heroTicks = [
  "Licensed & insured",
  "1-year repair warranty",
  "Same-day diagnosis when available",
];

export const trustItems: { title: string; sub: string; icon: IconName }[] = [
  { title: "4.9 on Google", sub: "700+ reviews", icon: "google" },
  { title: "FL CAC1816515", sub: "State certified", icon: "shield" },
  { title: "Family-run since 2010", sub: "Wesley Chapel based", icon: "home" },
  { title: "1-year repair warranty", sub: "Parts and labor", icon: "badge" },
  { title: "Rheem Pro Partner", sub: "Factory-trained", icon: "star" },
];

export const photoServices = [
  {
    title: "AC Repair",
    blurb: "AC blowing warm, short-cycling or making noise? We find the real cause and fix it, usually on the first visit.",
    bullets: ["Warm-air and no-cool diagnosis", "Capacitors, contactors, motors", "Refrigerant leaks and frozen coils", "Drain line and float switch clogs"],
    image: img.gauges,
    alt: "I Care Air Care technician checking refrigerant pressure on an outdoor AC unit",
  },
  {
    title: "AC Maintenance & Tune-Ups",
    blurb: "Most breakdowns start as small problems. A tune-up catches them before the hottest week of the year.",
    bullets: ["Coil and drain line cleaning", "Refrigerant and electrical checks", "Filter and airflow check", "Keeps manufacturer warranty valid"],
    image: img.condenser,
    alt: "I Care Air Care technician servicing a condenser beside a Wesley Chapel home",
  },
  {
    title: "AC Installation & Replacement",
    blurb: "When repair stops making sense, we size the new system for your home and Florida humidity. Financing available.",
    bullets: ["Manual J sized systems", "High-efficiency heat pumps", "Warranty registration done for you", "Financing on new systems"],
    image: img.van,
    alt: "I Care Air Care van with a new AC system ready to install",
  },
];

export const moreServices: { title: string; blurb: string; icon: IconName }[] = [
  { title: "Emergency AC Repair", blurb: "Priority scheduling for no-cool calls, so your family is not stuck in a hot house.", icon: "bolt" },
  { title: "Heating & Heat Pumps", blurb: "Heat pump, heat strip and furnace repair for the cold snaps Tampa Bay does get.", icon: "flame" },
  { title: "Air Duct Cleaning", blurb: "Cleaner air and better airflow through the whole house.", icon: "wind" },
  { title: "Indoor Air Quality", blurb: "Filtration, UV and humidity control for Florida homes.", icon: "sparkle" },
  { title: "Thermostats", blurb: "Smart and programmable thermostats, installed and set up.", icon: "clock" },
  { title: "Refrigeration", blurb: "Repair for walk-ins, coolers and light commercial units.", icon: "snowflake" },
];

export const steps = [
  { n: "1", title: "Call or request a callback", body: "You reach our Wesley Chapel office, not an out-of-state call center. We book the earliest open time." },
  { n: "2", title: "Written quote before any work", body: "A licensed tech finds the problem and gives you a flat-rate price in writing. The diagnostic is credited if you go ahead." },
  { n: "3", title: "Fixed and backed for a year", body: "We test the system with you and back the repair with a 1-year parts-and-labor warranty." },
];

export const reasons = [
  { title: "Trucks dispatch from Foamflower Blvd", body: "Our vans leave Wesley Chapel every morning, minutes from Seven Oaks, Meadow Pointe, Wiregrass, Epperson and Mirada." },
  { title: "No commission sales reps", body: "The same local team works every job. No franchise rotations, no out-of-state subs, no pressure to replace what can be repaired." },
  { title: "Flat-rate quotes in writing", body: "Every repair is priced before we touch a screw, and every repair carries a 1-year parts-and-labor warranty." },
];

// Real Google reviews, as shown on icareaircare.com.
export const reviews = [
  { name: "Bob Aloisio", text: "The first time we used them was many years ago on an emergency call on a Sunday after we returned from vacation to a home with no AC. They were great then and still great today." },
  { name: "Ronda Allen", text: "They're never pushy, always willing to make it work. If they say they're going to be here, they're here." },
  { name: "Doug Comet", text: "Excellent service with complete honesty. Very professional every time." },
  { name: "Brian Cutting", text: "Been a customer for over 15 years and will continue to use I Care Air Care. Great service and excellent knowledge of my AC. The best." },
  { name: "Fanny Schoettlin", text: "Very thorough, clean, and professional. Shared pics of what he found. Warned me of future problems. These guys are great." },
  { name: "Jennifer W", text: "Tran does a great job maintaining my HVAC and leaves the garage looking better than when he came. He is always polite and never pushy." },
];

export const areas = [
  "Wesley Chapel", "New Tampa", "Land O' Lakes", "Lutz", "Zephyrhills", "Odessa",
  "Pasco County", "Hillsborough County", "Polk County",
];

export const neighborhoods = ["Seven Oaks", "Meadow Pointe", "Wiregrass", "Epperson", "Mirada"];

export const faqs = [
  { q: "How fast can you get here?", a: "Call and we book the earliest open time. No-cool calls get priority scheduling, and same-day diagnosis is often available. Homes closest to our Wesley Chapel shop usually get the earliest slots." },
  { q: "Will I know the price before you start?", a: "Yes. The technician finds the problem and gives you a flat-rate price in writing before any work begins. If you go ahead with the repair, the diagnostic visit is credited toward it." },
  { q: "Is the repair guaranteed?", a: "Every repair carries a 1-year parts-and-labor warranty from us, on top of any manufacturer coverage." },
  { q: "Do you work on my brand?", a: "Yes. We service every major brand, including Carrier, Trane, Lennox, Rheem, Goodman, American Standard, Bryant and Mitsubishi Electric. We are a factory-authorized Rheem Pro Partner." },
  { q: "Do you offer financing on a new system?", a: "Yes, financing is available on new and replacement systems. Ask when you call and we will walk you through it." },
  { q: "Are you licensed and insured?", a: "Yes. I Care Air Care is a Florida state certified HVAC contractor, license CAC1816515, bonded and insured. Our techs are EPA 608 certified." },
  { q: "Which areas do you serve?", a: "We are based in Wesley Chapel and cover Pasco, Hillsborough and Polk counties, including New Tampa, Land O' Lakes, Lutz, Zephyrhills and Odessa. Not sure? Call and ask." },
];
