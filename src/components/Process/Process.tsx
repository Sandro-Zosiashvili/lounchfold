"use client";

import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { useProcessTimeline } from "@/hooks/useProcessTimeline";
import type { Dictionary } from "@/i18n/types";
import styles from "./Process.module.scss";

interface ProcessProps {
  dict: Dictionary;
}

export function Process({ dict }: ProcessProps) {
  const ref = useProcessTimeline<HTMLElement>();
  const t = dict.process;

  return (
    <section className={styles.process} id="process" ref={ref}>
      <div className={styles.inner}>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <ol className={styles.timeline}>
          <span className={styles.track} aria-hidden="true">
            <span className={styles.progress} data-progress />
          </span>

          {t.steps.map((step, i) => (
            <li key={step.title} className={styles.step} data-step>
              <span className={styles.dot} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.body}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
