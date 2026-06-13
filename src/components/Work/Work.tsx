"use client";

import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import type { Dictionary } from "@/i18n/types";
import styles from "./Work.module.scss";

interface WorkProps {
  dict: Dictionary;
}

export function Work({ dict }: WorkProps) {
  const ref = useRevealOnScroll<HTMLElement>();
  const t = dict.work;

  return (
    <section className={styles.work} id="work" ref={ref}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className={styles.grid}>
          {t.items.map((item, i) => (
            <article key={item.name} className={styles.card} data-reveal data-i={i}>
              <div className={styles.preview} aria-hidden="true">
                <div className={styles.mockBar}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.mockBody}>
                  <div className={styles.mockHero} />
                  <div className={styles.mockRow}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className={styles.meta}>
                <h3 className={styles.name}>{item.name}</h3>
                <span className={styles.category}>{item.category}</span>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.note}>{t.note}</p>
      </div>
    </section>
  );
}
