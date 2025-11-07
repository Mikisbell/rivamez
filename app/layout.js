import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Grupo Rivamez - Constructora & Inmobiliaria",
  description: "Empresa líder en construcción residencial, comercial y remodelación. Más de 15 años de experiencia transformando proyectos en realidad con calidad y compromiso.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
