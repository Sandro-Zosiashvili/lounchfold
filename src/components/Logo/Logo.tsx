import Link from "next/link";
import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";
import styles from "./Logo.module.scss";

interface LogoProps {
  locale: Locale;
  /** Compact variant shows only the fold mark + short name. */
  compact?: boolean;
}

/**
 * Brand wordmark. The little "fold" glyph is the brand signature —
 * a flat plane folding into a corner, echoing "social feed → real store".
 * The name itself always comes from the central site config.
 */
export function Logo({ locale, compact = false }: LogoProps) {
  return (
    <Link href={`/${locale}`} className={styles.logo} aria-label={site.name}>
      <span className={styles.mark} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M4 20V6a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
            className={styles.markBase}
          />
          <path d="M15 4v5h5" className={styles.markFold} />
        </svg>
      </span>
      <span className={styles.word}>
        {compact ? site.shortName : site.name}
      </span>
    </Link>
  );
}
