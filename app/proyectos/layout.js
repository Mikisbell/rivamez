import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO.proyectos();

export default function ProyectosLayout({ children }) {
  return <>{children}</>;
}
