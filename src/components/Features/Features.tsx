"use client";

import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import type { Dictionary } from "@/i18n/types";
import styles from "./Features.module.scss";

interface FeaturesProps {
  dict: Dictionary;
}

/** Minimal inline icons keyed by feature index — no external icon deps. */
const ICONS = [
  // product management
  <path key="i" d="M3 7l9-4 9 4-9 4-9-4Zm0 5l9 4 9-4M3 17l9 4 9-4" />,
  // smart filters
  <path key="i" d="M3 5h18M6 12h12M10 19h4" />,
  // stock control
  <path key="i" d="M4 7h16v13H4zM4 7l2-3h12l2 3M9 12h6" />,
  // mobile first
  <path key="i" d="M7 3h10v18H7zM11 18h2" />,
  // order management
  <path key="i" d="M5 4h14l-1 16H6L5 4Zm3 0a4 4 0 0 1 8 0" />,
  // bilingual
  <path key="i" d="M4 6h7M7 4v2c0 4-1.5 7-4 9M5 11c1.5 2 3 3 5 3M13 20l4-9 4 9M14.5 17h5" />,
];

export function Features({ dict }: FeaturesProps) {
  const ref = useRevealOnScroll<HTMLElement>();
  const t = dict.features;

  return (
    <section className={styles.features} id="features" ref={ref}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className={styles.grid}>
          {t.items.map((item, i) => (
            <article key={item.title} className={styles.card} data-reveal>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  {ICONS[i % ICONS.length]}
                </svg>
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
