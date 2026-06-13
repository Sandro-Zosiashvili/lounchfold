"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hero motion, kept out of the component for cleanliness.
 *
 * 1. On load: the headline lines and supporting elements rise in sequence.
 * 2. On scroll: the "fold" panel rotates in 3D (scrubbed to scroll position)
 *    so the flat social card visibly folds into a dimensional storefront —
 *    the brand's core metaphor. Parallax adds depth to the glow.
 *
 * Returns refs to attach to the section, the fold panel and the glow.
 */
export function useHeroAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const loadTargets = gsap.utils.toArray<HTMLElement>("[data-hero]");

      if (reduce) {
        gsap.set(loadTargets, { opacity: 1, y: 0 });
        return;
      }

      // 1 — entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        loadTargets,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
      );
      if (panelRef.current) {
        tl.fromTo(
          panelRef.current,
          { opacity: 0, rotateX: 24, y: 40 },
          { opacity: 1, rotateX: 12, y: 0, duration: 1.2 },
          "-=0.7",
        );
      }

      // 2 — scroll-scrubbed fold
      if (panelRef.current && sectionRef.current) {
        gsap.to(panelRef.current, {
          rotateX: -6,
          rotateY: -14,
          y: -30,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // parallax glow
      if (glowRef.current && sectionRef.current) {
        gsap.to(glowRef.current, {
          yPercent: 30,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return { sectionRef, panelRef, glowRef };
}
