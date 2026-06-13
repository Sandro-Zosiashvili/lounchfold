import type { ReactNode } from "react";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

/** Shared section header: a mono eyebrow, a display title and lead text. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header className={styles.heading} data-align={align}>
      <span className={styles.eyebrow} data-reveal>
        <span className={styles.dot} aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className={styles.title} data-reveal>
        {title}
      </h2>
      {subtitle && (
        <p className={styles.subtitle} data-reveal>
          {subtitle}
        </p>
      )}
    </header>
  );
}
