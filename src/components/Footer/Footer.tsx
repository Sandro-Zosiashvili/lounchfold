"use client";

import { Logo } from "@/components/Logo/Logo";
import { useLocale } from "@/hooks/useLocale";
import { site, socialLinks } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import styles from "./Footer.module.scss";

interface FooterProps {
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  const locale = useLocale();
  const t = dict.footer;

  const navLinks = [
    { href: "#services", label: dict.nav.services },
    { href: "#why", label: dict.nav.why },
    { href: "#process", label: dict.nav.process },
    { href: "#features", label: dict.nav.features },
    { href: "#work", label: dict.nav.work },
    { href: "#contact", label: dict.nav.contact },
  ];

  const currentYear = new Date().getFullYear();
  const yearRange =
    currentYear > site.foundedYear
      ? `${site.foundedYear}–${currentYear}`
      : `${site.foundedYear}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo locale={locale} />
          <p className={styles.tagline}>{t.tagline}</p>
        </div>

        <nav className={styles.col} aria-label={t.nav}>
          <span className={styles.colTitle}>{t.nav}</span>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.col}>
          <span className={styles.colTitle}>{t.social}</span>
          {socialLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.col}>
          <span className={styles.colTitle}>{t.contact}</span>
          <a className={styles.link} href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
          <a
            className={styles.link}
            href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
          >
            {site.contact.phone}
          </a>
          <span className={styles.muted}>{site.contact.location}</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {yearRange} {site.name}. {t.rights}
        </span>
        <a href="#top" className={styles.top}>
          {t.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
