import { type NextRequest, NextResponse } from "next/server";
import { supportedLanguages, defaultLanguage } from "@/lib/i18n/config";

/**
 * Proxy for language detection and routing.
 * Redirects requests without a language prefix to the default language.
 */
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasLanguage = supportedLanguages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (!pathnameHasLanguage) {
    if (pathname.startsWith("/api") || pathname.includes(".")) {
      return NextResponse.next();
    }

    return NextResponse.redirect(
      new URL(`/${defaultLanguage}${pathname === "/" ? "" : pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
