import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
  Noto_Sans_Georgian,
} from "next/font/google";

/** Display face — geometric, characterful, used for headings. */
export const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/** Body face — neutral, highly legible. */
export const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/** Utility / mono face — for eyebrows, labels and data. */
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/** Georgian face — covers ქართული across display and body. */
export const georgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-georgian",
  display: "swap",
});

/** All font variables combined, applied on <html>. */
export const fontVariables = `${display.variable} ${body.variable} ${mono.variable} ${georgian.variable}`;
