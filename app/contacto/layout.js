import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO.contacto();

export default function ContactoLayout({ children }) {
  return <>{children}</>;
}
