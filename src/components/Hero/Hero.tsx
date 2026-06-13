"use client";

import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import type { Dictionary } from "@/i18n/types";
import styles from "./Hero.module.scss";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  const { sectionRef, panelRef, glowRef } = useHeroAnimation();
  const t = dict.hero;

  const stats = [
    { label: t.stats.delivery, value: t.stats.deliveryValue },
    { label: t.stats.stores, value: t.stats.storesValue },
    { label: t.stats.trust, value: t.stats.trustValue },
  ];

  return (
    <section className={styles.hero} id="top" ref={sectionRef}>
      <div className={styles.glow} ref={glowRef} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow} data-hero>
            <span className={styles.pulse} aria-hidden="true" />
            {t.eyebrow}
          </span>

          <h1 className={styles.title}>
            <span className={styles.line} data-hero>
              {t.titleLine1}
            </span>
            <span className={`${styles.line} ${styles.accent}`} data-hero>
              {t.titleLine2}
            </span>
          </h1>

          <p className={styles.subtitle} data-hero>
            {t.subtitle}
          </p>

          <div className={styles.ctas} data-hero>
            <a href="#contact" className={styles.primary}>
              {t.primaryCta}
            </a>
            <a href="#process" className={styles.secondary}>
              {t.secondaryCta}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <dl className={styles.stats} data-hero>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statValue}>{stat.value}</dt>
                <dd className={styles.statLabel}>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* The signature: a flat social card that folds into a storefront. */}
        <div className={styles.stage}>
          <div className={styles.panel} ref={panelRef}>
            <div className={styles.browser}>
              <div className={styles.browserBar} aria-hidden="true">
                <span />
                <span />
                <span />
                <div className={styles.url}>shop.yourbrand.com</div>
              </div>
              <div className={styles.browserBody}>
                <div className={styles.shopHeader}>
                  <div className={styles.shopLogo} />
                  <div className={styles.shopNav}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className={styles.products}>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className={styles.product}>
                      <div className={styles.thumb} data-i={i} />
                      <div className={styles.price} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.panelGlow} aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
