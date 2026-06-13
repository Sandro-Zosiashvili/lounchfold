import type { Locale } from "./config";
import { ka } from "./dictionaries/ka";
import { en } from "./dictionaries/en";
import {Dictionary} from "@/i18n/types";

const dictionaries: Record<Locale, Dictionary> = { ka, en };

/**
 * Returns the dictionary for a given locale.
 * Synchronous because dictionaries are bundled — no async fetch needed.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
