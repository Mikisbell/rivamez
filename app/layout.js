import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from '@/components/NavbarNew';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';
import GlobalSearch from '@/components/GlobalSearch';
// import { ThemeProvider } from '@/components/ThemeProvider';
// import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: "Grupo Rivamez - Constructora & Inmobiliaria",
  description: "Empresa líder en construcción residencial, comercial y remodelación. Más de 15 años de experiencia transformando proyectos en realidad con calidad y compromiso.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  metadataBase: new URL('https://rivamez.vercel.app'),
  openGraph: {
    title: "Grupo Rivamez - Constructora & Inmobiliaria",
    description: "Empresa líder en construcción residencial, comercial y remodelación",
    url: 'https://rivamez.vercel.app',
    siteName: 'RIVAMEZ',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06B6D4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RIVAMEZ" />
      </head>
      <body className={inter.className}>
        <ServiceWorkerRegister />
        <Navbar />
        <GlobalSearch />
        {/* <ThemeToggle /> */}
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
