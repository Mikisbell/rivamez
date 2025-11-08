// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Permitir iframe de Sanity para el Studio
  if (request.nextUrl.pathname.startsWith('/studio')) {
    response.headers.set('X-Frame-Options', 'ALLOW-FROM https://sanity.io');
    response.headers.delete('X-Frame-Options'); // Permitir todos los iframes para Studio
  } else {
    // Headers de seguridad para el resto del sitio
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  }
  
  // Headers comunes
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
