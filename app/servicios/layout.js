import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO.servicios();

export default function ServiciosLayout({ children }) {
  return <>{children}</>;
}
