import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO.blog();

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
