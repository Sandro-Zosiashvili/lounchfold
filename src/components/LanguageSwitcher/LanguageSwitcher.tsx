"use client";

import { localeLabels, locales } from "@/i18n/config";
import { useLocale } from "@/hooks/useLocale";
import { useLocaleSwitch } from "@/hooks/useLocaleSwitch";
import type { Dictionary } from "@/i18n/types";
import styles from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  dict: Dictionary;
}

/** Compact segmented toggle between Georgian and English. */
export function LanguageSwitcher({ dict }: LanguageSwitcherProps) {
  const active = useLocale();
  const switchTo = useLocaleSwitch();

  return (
    <div
      className={styles.switcher}
      role="group"
      aria-label={dict.language.label}
    >
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          className={styles.option}
          data-active={locale === active}
          aria-pressed={locale === active}
          onClick={() => locale !== active && switchTo(locale)}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
}
