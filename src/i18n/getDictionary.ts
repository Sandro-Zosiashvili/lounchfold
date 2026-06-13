import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { ka } from "./dictionaries/ka";
import { en } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { ka, en };

/**
 * Returns the dictionary for a given locale.
 * Synchronous because dictionaries are bundled — no async fetch needed.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
