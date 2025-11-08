import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO.nosotros();

export default function NosotrosLayout({ children }) {
  return <>{children}</>;
}
