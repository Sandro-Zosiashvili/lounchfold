"use client";

import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import type { Dictionary } from "@/i18n/types";
import styles from "./Problem.module.scss";

interface ProblemProps {
  dict: Dictionary;
}

export function Problem({ dict }: ProblemProps) {
  const ref = useRevealOnScroll<HTMLElement>();
  const t = dict.problem;

  return (
    <section className={styles.problem} ref={ref}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          align="center"
        />

        <div className={styles.split}>
          {/* Social-only — the "before" */}
          <div className={`${styles.card} ${styles.before}`} data-reveal>
            <span className={styles.tag}>{t.socialLabel}</span>
            <ul className={styles.list}>
              {t.socialPoints.map((point) => (
                <li key={point} className={styles.item}>
                  <span className={`${styles.icon} ${styles.iconBad}`} aria-hidden="true">
                    ✕
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.arrow} aria-hidden="true" data-reveal>
            <span>→</span>
          </div>

          {/* Own website — the "after" */}
          <div className={`${styles.card} ${styles.after}`} data-reveal>
            <span className={`${styles.tag} ${styles.tagGood}`}>
              {t.websiteLabel}
            </span>
            <ul className={styles.list}>
              {t.websitePoints.map((point) => (
                <li key={point} className={styles.item}>
                  <span className={`${styles.icon} ${styles.iconGood}`} aria-hidden="true">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
