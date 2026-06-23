import Link from "next/link";
import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";
import styles from "./Logo.module.scss";

interface LogoProps {
  locale: Locale;
  /** Compact variant shows only the W mark + short name. */
  compact?: boolean;
}

/**
 * Brand wordmark. The mark is the Webily "W" monogram set on the brand
 * gradient tile. The name itself always comes from the central site config.
 */
export function Logo({ locale, compact = false }: LogoProps) {
  return (
    <Link href={`/${locale}`} className={styles.logo} aria-label={site.name}>
      <span className={styles.mark} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M4.5 7 8.5 17.5 12 11.5 15.5 17.5 19.5 7"
            className={styles.markLetter}
          />
        </svg>
      </span>
      <span className={styles.word}>
        {compact ? site.shortName : site.name}
      </span>
    </Link>
  );
}
