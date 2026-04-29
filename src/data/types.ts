// Single landing-page content shape. One LP, multiple services emphasized.

export type IconName =
  | "snowflake" | "flame" | "wrench" | "wind" | "leaf" | "droplet"
  | "tools" | "home" | "shield" | "bolt" | "dollar" | "sparkle"
  | "google" | "check" | "phone" | "star" | "info" | "chevron-down"
  | "menu" | "x" | "team" | "broom" | "hammer" | "calendar" | "clock"
  | "thumb" | "badge";

export type Service = {
  slug: string;
  icon: IconName;
  title: string;          // short title
  shortLabel: string;     // chip / pill label
  blurb: string;          // 1-line tease
  description: string;    // 2-3 sentences for the card body
  bullets: string[];      // what we do (3-5 bullets)
  image: string;
  signals?: string[];     // optional micro-trust signals (e.g. "24/7 emergency")
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

export type Review = {
  name: string;
  initials: string;
  recency: string;
  text: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  image: string;
  title: string;
  description: string;
};
