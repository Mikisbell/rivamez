// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // NO aplicar X-Frame-Options al Studio (permitir iframe)
  if (!request.nextUrl.pathname.startsWith('/studio')) {
    // Headers de seguridad solo para el resto del sitio
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  }
  
  // Headers comunes para todas las páginas
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|studio/_next).*)',
  ],
};
