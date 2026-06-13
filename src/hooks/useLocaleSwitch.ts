"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * Returns a function that swaps the locale segment of the current URL,
 * persists the choice in a cookie, and navigates there — keeping the
 * user on the same section of the page.
 */
export function useLocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (next: Locale) => {
      const segments = pathname.split("/");
      // segments[0] is "" (leading slash); segments[1] is the locale.
      if ((locales as readonly string[]).includes(segments[1] ?? "")) {
        segments[1] = next;
      } else {
        segments.splice(1, 0, next);
      }
      const target = segments.join("/") || `/${next}`;

      document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${
        60 * 60 * 24 * 365
      }`;
      router.push(target);
    },
    [pathname, router],
  );
}
