import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if pathname already has a locale
  const pathnameHasLocale = pathname.startsWith('/es/') || pathname.startsWith('/en/');
  
  // If accessing root, redirect to /es
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/es', request.url));
  }
  
  // If pathname doesn't have locale and is not root, add default locale
  if (!pathnameHasLocale && pathname !== '/') {
    const locale = 'es'; // default locale
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

