/**
 * The shape every locale dictionary must satisfy.
 * Keeping a single typed shape guarantees `ka` and `en` never drift apart —
 * a missing key in either file becomes a compile-time error.
 */
export interface Dictionary {
  meta: {
    title: string;
    description: string;
    /** Comma-separated keywords for the <meta name="keywords"> tag. */
    keywords: string;
  };
  nav: {
    services: string;
    why: string;
    process: string;
    features: string;
    work: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: {
      delivery: string;
      deliveryValue: string;
      stores: string;
      storesValue: string;
      trust: string;
      trustValue: string;
    };
  };
  problem: {
    eyebrow: string;
    title: string;
    socialLabel: string;
    websiteLabel: string;
    socialPoints: string[];
    websitePoints: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    points: { title: string; description: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  work: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    items: { name: string; category: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; author: string; role: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      business: string;
      businessPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      required: string;
      invalidEmail: string;
    };
    directLabel: string;
  };
  footer: {
    tagline: string;
    rights: string;
    nav: string;
    social: string;
    contact: string;
    backToTop: string;
  };
  language: {
    label: string;
  };
}
