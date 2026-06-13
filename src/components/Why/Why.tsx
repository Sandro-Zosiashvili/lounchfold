"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import type { Dictionary } from "@/i18n/types";
import styles from "./Why.module.scss";

interface WhyProps {
  dict: Dictionary;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Why({ dict }: WhyProps) {
  const t = dict.why;

  return (
    <section className={styles.why} id="why">
      <div className={styles.inner}>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t.points.map((point, i) => (
            <motion.article
              key={point.title}
              className={styles.card}
              variants={item}
            >
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.cardTitle}>{point.title}</h3>
              <p className={styles.cardText}>{point.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
