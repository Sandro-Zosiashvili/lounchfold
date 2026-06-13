"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOptions {
  /** CSS selector for the children to stagger in. Defaults to [data-reveal]. */
  selector?: string;
  /** Distance (px) each element travels upward. */
  y?: number;
  /** Stagger between elements (seconds). */
  stagger?: number;
  /** Animation duration (seconds). */
  duration?: number;
  /** When the trigger should start, in ScrollTrigger syntax. */
  start?: string;
}

/**
 * Reveals child elements with a staggered fade-and-rise as the container
 * scrolls into view. Respects prefers-reduced-motion (handled by GSAP +
 * the global CSS), and cleans up automatically through useGSAP's scope.
 *
 * Usage:
 *   const ref = useRevealOnScroll<HTMLDivElement>();
 *   <div ref={ref}><div data-reveal>…</div></div>
 */
export function useRevealOnScroll<T extends HTMLElement>({
  selector = "[data-reveal]",
  y = 36,
  stagger = 0.12,
  duration = 0.9,
  start = "top 80%",
}: RevealOptions = {}) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      if (targets.length === 0) return;

      if (reduce) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
          },
        },
      );
    },
    { scope: ref },
  );

  return ref;
}
