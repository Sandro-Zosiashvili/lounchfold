import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

/**
 * Routes every request under a locale prefix (/ka, /en).
 *
 * - If the path already has a supported locale, it passes through.
 * - Otherwise we pick the best locale: a saved cookie first, then the
 *   browser's Accept-Language header, then the default (Georgian).
 */

const LOCALE_COOKIE = "NEXT_LOCALE";

function resolveLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    return cookieLocale;
  }

  const accept = request.headers.get("accept-language");
  if (accept) {
    const preferred = accept
      .split(",")
      .map((part) => part.split(";")[0]?.trim().slice(0, 2).toLowerCase())
      .find((code) => code && (locales as readonly string[]).includes(code));
    if (preferred) return preferred;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return NextResponse.next();

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}

export const config = {
  // Run on everything except Next internals, the API and static assets.
  matcher: ["/((?!_next|api|assets|favicon.ico|robots.txt|sitemap.xml).*)"],
};
