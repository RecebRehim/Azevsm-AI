import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin") || pathname.startsWith("/api") || pathname.startsWith("/studio") || pathname.startsWith("/_next") || pathname.includes(".")) {
    const headers = new Headers(request.headers);
    headers.set("x-locale", "en");
    return NextResponse.next({ request: { headers } });
  }
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment) {
    return NextResponse.redirect(new URL("/en", request.url));
  }
  if (!isLocale(segment)) {
    return NextResponse.redirect(new URL("/en", request.url));
  }
  const headers = new Headers(request.headers);
  headers.set("x-locale", segment);
  headers.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
