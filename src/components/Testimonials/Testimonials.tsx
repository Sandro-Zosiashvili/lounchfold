"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import type { Dictionary } from "@/i18n/types";
import styles from "./Testimonials.module.scss";

interface TestimonialsProps {
  dict: Dictionary;
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Testimonials({ dict }: TestimonialsProps) {
  const t = dict.testimonials;

  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="center" />

        <div className={styles.grid}>
          {t.items.map((entry, i) => (
            <motion.figure
              key={entry.author}
              className={styles.card}
              custom={i}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className={styles.quote}>{entry.quote}</blockquote>
              <figcaption className={styles.caption}>
                <span className={styles.avatar} aria-hidden="true">
                  {entry.author.charAt(0)}
                </span>
                <span>
                  <span className={styles.author}>{entry.author}</span>
                  <span className={styles.role}>{entry.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
