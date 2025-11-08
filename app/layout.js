import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from '@/components/NavbarNew';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';
import GlobalSearch from '@/components/GlobalSearch';
import ClientOnly from '@/components/ClientOnly';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager';
import StructuredData from '@/components/StructuredData';
import dynamic from 'next/dynamic';

const ExitIntentModal = dynamic(() => import('@/components/ExitIntentModal'), {
  ssr: false,
});

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

import { generateSEO, robots as seoRobots, viewport as seoViewport } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL('https://rivamez.vercel.app'),
  ...generateSEO.home(),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  robots: seoRobots,
  verification: {
    google: 'google-site-verification-code', // Agregar después de configurar Search Console
  },
};

export const viewport = seoViewport;

export default function RootLayout({ children }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06B6D4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RIVAMEZ" />
        
        {/* Google Tag Manager */}
        {GTM_ID && <GoogleTagManager GTM_ID={GTM_ID} />}
      </head>
      <body className={inter.className}>
        {/* GTM NoScript fallback */}
        {GTM_ID && <GoogleTagManagerNoScript GTM_ID={GTM_ID} />}
        
        {/* Google Analytics 4 */}
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        
        {/* Schema.org Structured Data */}
        <StructuredData type="organization" />
        <StructuredData type="localBusiness" />
        <StructuredData type="website" />
        
        <ThemeProvider>
          <ServiceWorkerRegister />
          <Navbar />
          <GlobalSearch />
          <ClientOnly>
            <ThemeToggle />
          </ClientOnly>
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
          <WhatsAppButton />
          <ClientOnly>
            <ExitIntentModal />
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
