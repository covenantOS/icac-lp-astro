// All landing-page content in one place. Single-page LP for ICAC's PPC campaign.
// Source: icareaircare.com + the existing GHL LP at contact.icareaircare.com.

import type { Service, Step, Feature, Review, Faq, GalleryItem } from "~/data/types";

export const icac = {
  name: "I Care Air Care",
  tagline: "Heating & Cooling",
  phone: "(813) 395-2324",
  phoneHref: "tel:+18133952324",
  email: "info@icareaircare.com",
  city: "Wesley Chapel",
  state: "FL",
  serviceArea: "Wesley Chapel & Tampa Bay",
  hours: "Mon–Sat, 7:00am – 7:00pm · Sunday by appointment",
  responseTime: "Average callback under 60 seconds",
  yearsInBusiness: "15+",
  customersServed: "5,000+",
  googleRating: "4.9",
  googleReviewCount: "690+",
  owner: {
    name: "Tim Hawk",
    title: "Owner & Founder",
    photo: "/images/team/tim-hawk.webp",
  },
  team: {
    photo: "/images/team/icac-team.webp",
    caption: "The I Care Air Care team — licensed, insured, background-checked.",
  },
  cities: [
    "Wesley Chapel",
    "Tampa",
    "Lutz",
    "Land O' Lakes",
    "New Tampa",
    "Trinity",
    "Odessa",
    "Carrollwood",
    "Westchase",
    "Brandon",
    "Riverview",
    "Zephyrhills",
    "Dade City",
    "San Antonio",
  ],
  zips: [
    "33543", "33544", "33545", "33559",
    "33558", "33548", "33549", "33647",
    "33556", "33625", "33626", "33618",
    "33637", "33617", "33572", "33578",
    "33579", "33510", "33511", "33527",
    "33540", "33541", "33542", "33576",
    "33523", "33525", "34638", "34639",
  ],
  trustBar: [
    { label: "4.9 Google Reviews", sublabel: "690+ verified reviews", icon: "google" as const },
    { label: "Licensed & Insured", sublabel: "Florida HVAC licensed", icon: "shield" as const },
    { label: "Same-Day Service", sublabel: "Most repairs same day", icon: "bolt" as const },
    { label: "Background Checked", sublabel: "Every technician", icon: "badge" as const },
    { label: "Locally Owned", sublabel: "Serving Tampa Bay 15+ yrs", icon: "home" as const },
  ],
  socialProof: {
    rating: "4.9",
    ratingLabel: "Google Rating",
    reviews: "690+",
    reviewsLabel: "Google Reviews",
    years: "15+",
    yearsLabel: "Years In Business",
  },
  footer: {
    copyrightYear: new Date().getFullYear(),
    serviceNote: "Wesley Chapel's most trusted heating & cooling team.",
    location: "Main Location: Wesley Chapel, FL",
    licenseNote: "Florida State Certified HVAC Contractor",
  },
} as const;

// ---------- HERO ----------

export const hero = {
  eyebrow: "Wesley Chapel's Most Trusted AC Team",
  headline: "Wesley Chapel's Most Trusted AC Team",
  subheadline: "Same-day AC repair, installation, and maintenance from a licensed team your neighbors have trusted for 15+ years.",
  descriptors: ["4.9★ on Google", "690+ Reviews", "Same-Day Service", "Licensed & Insured"],
  image: "/images/shared/hero-bg.webp",
  spotlightReview: {
    name: "Dave Barry",
    initials: "DB",
    location: "Wesley Chapel",
    text: "I have been a customer of I Care Air Care for 20+ years. Service and support are always impeccable.",
  },
  trustChips: [
    "Google Guaranteed",
    "Licensed & Insured",
    "Background Checked",
    "Satisfaction Guaranteed",
    "Same-Day Service",
  ],
};

// ---------- SERVICES ----------
// The user wants real estate for each service so customers feel ICAC can do
// the job. Top services are featured; the secondary set fills out coverage.

export const services: Service[] = [
  {
    slug: "ac-repair",
    icon: "wrench",
    title: "AC Repair",
    shortLabel: "AC Repair",
    blurb: "Cool home back fast — most repairs done same-day.",
    description:
      "AC blowing warm? Strange noises? System short-cycling? Our technicians diagnose the real cause — not just the symptom — and fix it on the first visit whenever possible. Trucks are stocked with the parts that fail most often in Florida heat.",
    bullets: [
      "No-cool / warm-air diagnostics",
      "Refrigerant leak detection & recharge",
      "Capacitor, contactor & motor replacement",
      "Frozen coil & drainage repair",
      "Thermostat & control board issues",
    ],
    image: "/images/services/ac-repair.webp",
    signals: ["Same-Day Service", "Upfront Pricing"],
  },
  {
    slug: "ac-installation",
    icon: "snowflake",
    title: "AC Installation & Replacement",
    shortLabel: "New AC",
    blurb: "Right-sized, properly installed, financing available.",
    description:
      "A new AC is only as good as the install. We perform a full Manual J load calculation, check ductwork, and install your new system to the manufacturer's spec — so you get the efficiency, comfort, and warranty coverage you paid for.",
    bullets: [
      "Free in-home estimate & load calculation",
      "Top brands: Carrier, Trane, Lennox, Rheem",
      "Heat pump & high-efficiency systems",
      "Full warranty registration & paperwork",
      "Synchrony financing available",
    ],
    image: "/images/services/ac-installation.webp",
    signals: ["Free Estimates", "Financing Available"],
  },
  {
    slug: "ac-maintenance",
    icon: "tools",
    title: "AC Maintenance & Tune-Ups",
    shortLabel: "Tune-Up",
    blurb: "Catch problems early. Lower bills. Longer system life.",
    description:
      "Most AC failures are preventable. Our maintenance plans keep your system efficient and warranty-compliant — coil cleaning, refrigerant checks, electrical inspection, and a written report on every visit.",
    bullets: [
      "Multi-point system inspection",
      "Coil & condensate line cleaning",
      "Refrigerant level & pressure check",
      "Electrical & safety control test",
      "Filter change & airflow check",
    ],
    image: "/images/services/ac-maintenance.webp",
    signals: ["Written Report", "Membership Plans"],
  },
  {
    slug: "heating",
    icon: "flame",
    title: "Heating & Furnace Repair",
    shortLabel: "Heating",
    blurb: "When that one cold week hits — we're already on the road.",
    description:
      "Florida winters are short but real. Heat pumps, gas furnaces, electric strips — we service them all. We respond fast on cold nights and stock the parts that strand homeowners most often.",
    bullets: [
      "Heat-pump diagnostics & repair",
      "Gas furnace inspection & repair",
      "Electric heat strip troubleshooting",
      "No-heat emergency response",
      "Annual heating tune-ups",
    ],
    image: "/images/services/heating.webp",
    signals: ["Emergency Service", "All Brands"],
  },
  {
    slug: "air-duct-cleaning",
    icon: "wind",
    title: "Air Duct Cleaning",
    shortLabel: "Duct Cleaning",
    blurb: "Better airflow, cleaner air, fewer allergens.",
    description:
      "Dirty ducts hurt your AC's efficiency and your family's air quality. We use professional rotary brush + negative-pressure vacuum equipment — not a shop-vac in a uniform. Before/after photos on every job.",
    bullets: [
      "Full supply & return duct cleaning",
      "Coil & blower wheel cleaning",
      "Sanitizer / antimicrobial treatment",
      "Vent register cleaning",
      "Before & after photos",
    ],
    image: "/images/services/air-duct-cleaning.webp",
    signals: ["Before/After Photos"],
  },
  {
    slug: "ductless-mini-split",
    icon: "leaf",
    title: "Ductless Mini-Splits",
    shortLabel: "Mini-Split",
    blurb: "Targeted comfort for additions, garages, and bonus rooms.",
    description:
      "Adding on? Converting a garage? Got one room that's always hot? A ductless mini-split is the cleanest, most efficient way to condition spaces your central system can't reach. We design, install, and service them.",
    bullets: [
      "Single-zone & multi-zone systems",
      "Garage, bonus-room & addition installs",
      "Mitsubishi, Daikin, Fujitsu",
      "Indoor unit repair & cleaning",
      "Refrigerant line set installation",
    ],
    image: "/images/services/mini-split.webp",
  },
  {
    slug: "indoor-air-quality",
    icon: "sparkle",
    title: "Indoor Air Quality",
    shortLabel: "Air Quality",
    blurb: "UV lights, filtration, and humidity control that actually work.",
    description:
      "Florida humidity + sealed homes = poor indoor air. We install proven IAQ solutions — UV-C germicidal lights, MERV-rated filtration, and whole-home dehumidifiers — sized for your system, not upsold.",
    bullets: [
      "UV-C germicidal lights",
      "MERV 11–16 filter upgrades",
      "Whole-home dehumidifiers",
      "Humidity & mold control",
      "Allergen reduction systems",
    ],
    image: "/images/services/indoor-air-quality.webp",
  },
  {
    slug: "commercial",
    icon: "home",
    title: "Light Commercial HVAC",
    shortLabel: "Commercial",
    blurb: "Offices, retail, restaurants — keep your business cool.",
    description:
      "We service light commercial systems for small offices, retail, restaurants, and tenant build-outs across Tampa Bay. Service agreements, emergency response, and rooftop unit work.",
    bullets: [
      "Rooftop unit (RTU) service",
      "Multi-zone commercial systems",
      "Preventive maintenance agreements",
      "After-hours emergency response",
      "Tenant build-out HVAC",
    ],
    image: "/images/services/commercial.webp",
  },
];

// ---------- ABOUT ----------

export const about = {
  eyebrow: "About I Care Air Care",
  headline: "Locally Owned. Family Run. Built On Repeat Customers.",
  body: [
    "I Care Air Care is a family-owned heating and cooling company based right here in Wesley Chapel. For 15+ years, we've built our business one home at a time — and most of our work today comes from referrals and customers we served years ago.",
    "Owner Tim Hawk leads a team of licensed, insured, and background-checked technicians who treat your home like ours. No high-pressure sales, no surprise charges — just honest diagnostics, upfront pricing, and the kind of work you'd want done at your own house.",
  ],
  highlights: [
    { icon: "shield" as const, label: "Florida Licensed & Insured" },
    { icon: "badge" as const, label: "Every Tech Background-Checked" },
    { icon: "thumb" as const, label: "Satisfaction Guaranteed" },
    { icon: "dollar" as const, label: "Synchrony Financing Available" },
  ],
};

// ---------- HOW IT WORKS ----------

export const howItWorks = {
  headline: "How It Works",
  steps: [
    {
      number: "01",
      title: "Call or Book Online",
      description: "Reach a real person — average callback under 60 seconds. We'll book a same-day window when one's available.",
    },
    {
      number: "02",
      title: "Diagnose & Quote Upfront",
      description: "Licensed tech arrives, diagnoses the real issue, and gives you a written, upfront price before any work begins.",
    },
    {
      number: "03",
      title: "Fix It Right",
      description: "Most repairs done on the first visit. We test the system, walk you through what we did, and back it up.",
    },
  ] as Step[],
};

// ---------- WHY US ----------

export const whyUs = {
  headline: "Why Wesley Chapel Calls I Care Air Care",
  features: [
    {
      icon: "home" as const,
      title: "Local & Family Owned",
      description: "15+ years serving Wesley Chapel and the Tampa Bay area. Your neighbors are our customers.",
    },
    {
      icon: "bolt" as const,
      title: "Same-Day Service",
      description: "Average callback in under 60 seconds. Most repairs completed on the first visit, same day.",
    },
    {
      icon: "shield" as const,
      title: "Honest, Upfront Pricing",
      description: "Written quote before we touch a wrench. No surprise charges, no high-pressure sales tactics.",
    },
    {
      icon: "team" as const,
      title: "Background-Checked Techs",
      description: "Every technician is licensed, insured, drug-tested, and background-checked. We treat your home like ours.",
    },
    {
      icon: "thumb" as const,
      title: "Satisfaction Guaranteed",
      description: "If it's not right, we make it right. That's how we've built 690+ five-star reviews on Google.",
    },
    {
      icon: "dollar" as const,
      title: "Financing Available",
      description: "Synchrony financing on installs and major repairs. Affordable monthly payments — apply in minutes.",
    },
  ] as Feature[],
};

// ---------- REVIEWS ----------
// Pulled directly from ICAC's Google Business Profile (4.9 / 690+).

export const reviews = {
  eyebrow: "What Your Neighbors Say",
  headline: "Real Reviews From Real Wesley Chapel Homeowners",
  intro: "4.9 stars across 690+ verified Google reviews.",
  items: [
    {
      name: "Dave Barry",
      initials: "DB",
      recency: "2 weeks ago",
      text: "I have been a customer of I Care Air Care for 20+ years. Service and support are always impeccable.",
    },
    {
      name: "Jim Hammond",
      initials: "JH",
      recency: "a month ago",
      text: "We have been using I Care for 8 years now and they never cease to amaze me with personalized service.",
    },
    {
      name: "Tom Adams",
      initials: "TA",
      recency: "3 weeks ago",
      text: "I highly recommend I Care Air Care. I used them for the first time yesterday, and I was impressed with all aspects of the service.",
    },
    {
      name: "Jennifer R.",
      initials: "JR",
      recency: "2 months ago",
      text: "The absolute best AC company I've ever worked with! Professional, honest, and reliable.",
    },
    {
      name: "Keri A.",
      initials: "KA",
      recency: "a week ago",
      text: "This company is still the best in the area. We've used them to do a full replacement of our AC and couldn't be happier.",
    },
    {
      name: "Bob Rogan",
      initials: "BR",
      recency: "3 months ago",
      text: "We woke up on a Sunday morning to no heat and 21° outside. I put a message on their chat and they had someone out fast.",
    },
    {
      name: "Linda Brocato",
      initials: "LB",
      recency: "a month ago",
      text: "The owner Tim Hawk is a man of integrity. I Care Air Care is an excellent choice for all air care needs.",
    },
    {
      name: "Jesse P.",
      initials: "JP",
      recency: "2 weeks ago",
      text: "Kleber serviced my main home, did an awesome job and kept me informed throughout. Highly recommend.",
    },
    {
      name: "Nate Brewer",
      initials: "NB",
      recency: "3 weeks ago",
      text: "Tim and his crew are the best. Ta Tran serviced my rental house and was excellent. Super detailed and professional.",
    },
    {
      name: "LJ Johnson",
      initials: "LJ",
      recency: "a month ago",
      text: "On a Saturday, I didn't expect a call back. Not only did I hear back in about an hour, they had it fixed the same day.",
    },
    {
      name: "Joey Farrell",
      initials: "JF",
      recency: "2 months ago",
      text: "Kleber was very knowledgeable and showed great service! Very pleased. Definitely going to use them again!",
    },
    {
      name: "Lodi Lipien",
      initials: "LL",
      recency: "a week ago",
      text: "I'm very loyal to this company and have used their services for over 5 years. Responsive, reliable, and professional.",
    },
    {
      name: "Sharon Ball",
      initials: "SB",
      recency: "3 weeks ago",
      text: "Technician was very courteous and knowledgeable. Problem was fixed very quickly. Will recommend highly.",
    },
    {
      name: "Daniel Montalvo",
      initials: "DM",
      recency: "a month ago",
      text: "Kleber is very professional and detailed step by step. He made suggestions in a sincere way, not pushy.",
    },
    {
      name: "Ric Caldwell",
      initials: "RC",
      recency: "2 weeks ago",
      text: "Super glad Kleber is back with I Care. He's a great technician! This company consistently delivers.",
    },
  ] as Review[],
};

// ---------- SERVICE AREAS ----------

export const serviceAreas = {
  eyebrow: "Our Service Area",
  headline: "Serving Wesley Chapel & The Greater Tampa Bay Area",
  body: "Based in Wesley Chapel, our team covers all of Pasco and Hillsborough counties — from New Tampa and Lutz out to Land O' Lakes, Zephyrhills, Trinity, and the Tampa metro. If you're not sure we serve your area, just call — we probably do.",
  mapImage: "/images/shared/service-area-map.webp",
};

// ---------- GALLERY / WORK ----------

export const gallery = {
  eyebrow: "Our Work",
  headline: "AC Service You Can See",
  items: [
    {
      image: "/images/gallery/install-condenser.webp",
      title: "AC Installation",
      description: "New outdoor condenser install, level pad and clean line set.",
    },
    {
      image: "/images/gallery/maintenance-tech.webp",
      title: "AC Maintenance",
      description: "Coil cleaning and full multi-point system inspection.",
    },
    {
      image: "/images/gallery/duct-cleaning.webp",
      title: "Air Duct Cleaning",
      description: "Rotary-brush + negative-pressure vacuum cleaning.",
    },
    {
      image: "/images/gallery/repair-tech.webp",
      title: "AC Repair",
      description: "On-site refrigerant pressure testing and leak detection.",
    },
    {
      image: "/images/gallery/mini-split.webp",
      title: "Ductless Mini-Split",
      description: "Wall-mounted indoor unit install in a converted garage.",
    },
    {
      image: "/images/gallery/team.webp",
      title: "The I Care Air Care Team",
      description: "Licensed, insured, and background-checked technicians.",
    },
  ] as GalleryItem[],
};

// ---------- INFO CARD ----------

export const infoCard = {
  headline: "Built For Florida Heat & Humidity",
  body: "Tampa Bay AC systems run 9 months a year and live with brutal humidity. We build, install, and maintain systems for that reality — not the brochure. Heat-pump expertise, humidity-aware sizing, and the kind of preventive work that keeps your warranty intact.",
  image: "/images/shared/hero-bg.webp",
};

// ---------- FAQ ----------

export const faqs = {
  eyebrow: "Have Any Questions?",
  headline: "Common AC & HVAC Questions",
  intro: "The questions Wesley Chapel homeowners ask us most:",
  items: [
    {
      question: "Do you offer same-day service?",
      answer:
        "Yes — we run same-day calls every business day, and many evenings and weekends. Average callback is under 60 seconds. Call us and we'll tell you the next available window in real time.",
    },
    {
      question: "How much does an AC repair cost?",
      answer:
        "It depends on what's actually wrong. A capacitor swap is very different from a compressor failure. We charge a flat diagnostic fee, then give you a written, upfront price before any repair work begins — so you decide before any meter starts running.",
    },
    {
      question: "When should I replace my AC vs. repair it?",
      answer:
        "Rule of thumb: if the system is 12+ years old and the repair is over $1,500, replacement usually pays back faster in efficiency savings — especially in Florida. We'll quote both honestly and let you choose. No high-pressure sales.",
    },
    {
      question: "Do you offer financing on new AC systems?",
      answer:
        "Yes — we partner with Synchrony for affordable monthly payments on installations and major repairs. Approval takes minutes, and we walk you through it with the install quote.",
    },
    {
      question: "Are your technicians licensed and background-checked?",
      answer:
        "Every technician at I Care Air Care is licensed, insured, drug-tested, and background-checked. We pay for it all, every year. You can verify our Florida HVAC license on the state DBPR site.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve all of Wesley Chapel and the greater Tampa Bay area — including New Tampa, Lutz, Land O' Lakes, Trinity, Odessa, Carrollwood, Zephyrhills, Brandon, and Riverview. If your ZIP isn't on our list, call us — we probably still cover it.",
    },
    {
      question: "Do you service all brands of AC?",
      answer:
        "Yes. We service every major brand — Carrier, Trane, Lennox, Rheem, Goodman, American Standard, Bryant, York, Mitsubishi, Daikin, and more. Maintenance work doesn't void your factory warranty.",
    },
    {
      question: "What does an AC tune-up include?",
      answer:
        "A full multi-point inspection: coil cleaning, refrigerant pressure check, electrical and safety control test, condensate line clear, filter check, and a written report. It's how you keep your warranty valid and catch failures before they strand you.",
    },
  ] as Faq[],
};

// ---------- FINAL CTA ----------

export const finalCta = {
  eyebrow: "Serving Wesley Chapel & Tampa Bay",
  headline: "Ready For Cool Comfort You Can Count On?",
  body: "Same-day service. Upfront pricing. 690+ five-star Google reviews. Call now or request a callback — we usually answer within 60 seconds.",
};
