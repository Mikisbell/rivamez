// app/blog/page.js
import Navbar from '@/components/NavbarNew';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogVisual from '@/components/BlogVisual';
import { getAllPosts, getFeaturedPost, getAllCategories } from '@/lib/sanity';

// Revalidar cada 60 segundos (ISR)
export const revalidate = 60;

export const metadata = {
  title: 'Blog - RIVAMEZ',
  description: 'Noticias, proyectos y consejos de construcción e inmobiliaria',
};

export default async function BlogPage() {
  // Fetch data en el servidor (mucho más rápido)
  const [posts, featuredPost, categories] = await Promise.all([
    getAllPosts().catch(() => []),
    getFeaturedPost().catch(() => null),
    getAllCategories().catch(() => []),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <BlogVisual 
          initialPosts={posts}
          initialFeaturedPost={featuredPost}
          initialCategories={categories}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
