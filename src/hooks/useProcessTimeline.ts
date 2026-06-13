"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Drives the vertical progress line in the process timeline: it fills from
 * 0 → 100% as the section scrolls through the viewport, and the step dots
 * light up as the line reaches them. Steps also rise into view in sequence.
 */
export function useProcessTimeline<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
      const line = ref.current?.querySelector<HTMLElement>("[data-progress]");

      if (reduce) {
        gsap.set(steps, { opacity: 1, y: 0 });
        if (line) gsap.set(line, { scaleY: 1 });
        return;
      }

      gsap.fromTo(
        steps,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        },
      );

      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 60%",
              end: "bottom 75%",
              scrub: 0.8,
            },
          },
        );
      }
    },
    { scope: ref },
  );

  return ref;
}
