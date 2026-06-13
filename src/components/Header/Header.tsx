"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { useLocale } from "@/hooks/useLocale";
import type { Dictionary } from "@/i18n/types";
import styles from "./Header.module.scss";

interface HeaderProps {
  dict: Dictionary;
}

export function Header({ dict }: HeaderProps) {
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#services", label: dict.nav.services },
    { href: "#why", label: dict.nav.why },
    { href: "#process", label: dict.nav.process },
    { href: "#features", label: dict.nav.features },
    { href: "#work", label: dict.nav.work },
  ];

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <div className={styles.inner}>
        <Logo locale={locale} />

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher dict={dict} />
          <a href="#contact" className={styles.cta}>
            {dict.nav.cta}
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            data-open={open}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={styles.mobile} data-open={open}>
        <nav className={styles.mobileNav} aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            {dict.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
