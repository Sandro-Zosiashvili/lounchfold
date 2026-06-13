"use client";

import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import type { Dictionary } from "@/i18n/types";
import styles from "./Services.module.scss";

interface ServicesProps {
  dict: Dictionary;
}

export function Services({ dict }: ServicesProps) {
  const ref = useRevealOnScroll<HTMLElement>();
  const t = dict.services;

  return (
    <section className={styles.services} id="services" ref={ref}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className={styles.grid}>
          {t.items.map((item, i) => (
            <article key={item.title} className={styles.card} data-reveal>
              <span className={styles.index}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
              <span className={styles.shine} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
