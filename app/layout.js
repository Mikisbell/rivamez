import "./globals.css";
import { Inter } from 'next/font/google';

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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
