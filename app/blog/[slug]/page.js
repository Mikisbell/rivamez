// app/blog/[slug]/page.js
import Navbar from '@/components/NavbarNew';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getPostBySlug, getAllPosts, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

// Revalidar cada 60 segundos
export const revalidate = 60;

// Generar metadata dinámica
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post no encontrado - RIVAMEZ',
    };
  }

  return {
    title: `${post.title} - RIVAMEZ Blog`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name],
    },
  };
}

// Generar rutas estáticas en build time
export async function generateStaticParams() {
  const posts = await getAllPosts().catch(() => []);
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Componentes personalizados para PortableText
const components = {
  types: {
    image: ({ value }) => (
      <div className="my-8 relative w-full h-96">
        <Image
          src={urlFor(value).width(1200).height(600).url()}
          alt={value.alt || 'Imagen del artículo'}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-rivamez-navy mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-rivamez-navy mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-rivamez-cyan pl-6 py-2 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-rivamez-cyan hover:underline font-semibold"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-bold text-rivamez-navy">{children}</strong>,
  },
};

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero del Post */}
        <article className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-rivamez-navy transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-rivamez-navy transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-rivamez-navy font-semibold">{post.title}</span>
          </nav>

          {/* Categorías */}
          <div className="flex gap-2 mb-4">
            {post.categories?.map((category) => (
              <Link
                key={category._id}
                href={`/blog?category=${category.slug.current}`}
                className="px-4 py-1 bg-rivamez-cyan/10 text-rivamez-cyan rounded-full text-sm font-semibold hover:bg-rivamez-cyan/20 transition-colors"
              >
                {category.icon} {category.title}
              </Link>
            ))}
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-rivamez-navy mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
            {/* Autor */}
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).width(100).height(100).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-rivamez-navy">{post.author.name}</p>
                  {post.author.role && (
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  )}
                </div>
              </div>
            )}

            {/* Fecha */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {new Date(post.publishedAt).toLocaleDateString('es-PE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            {/* Tiempo de lectura */}
            {post.readTime && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime} min de lectura</span>
              </div>
            )}
          </div>

          {/* Imagen principal */}
          {post.mainImage && (
            <div className="relative w-full h-96 md:h-[500px] mb-12 rounded-2xl overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1200).height(800).url()}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Contenido del post */}
          <div className="prose prose-lg max-w-none">
            {post.body ? (
              <PortableText value={post.body} components={components} />
            ) : (
              <p className="text-gray-600">Este artículo no tiene contenido aún.</p>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-500 mb-3">ETIQUETAS:</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Autor bio */}
          {post.author?.bio && (
            <div className="mt-12 p-8 bg-gradient-to-br from-rivamez-navy/5 to-rivamez-cyan/5 rounded-2xl">
              <div className="flex items-start gap-4">
                {post.author.image && (
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={urlFor(post.author.image).width(200).height(200).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">SOBRE EL AUTOR</p>
                  <h3 className="text-xl font-bold text-rivamez-navy mb-2">{post.author.name}</h3>
                  {post.author.role && (
                    <p className="text-sm text-rivamez-cyan font-semibold mb-3">{post.author.role}</p>
                  )}
                  <p className="text-gray-600 leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            </div>
          )}

          {/* Volver al blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rivamez-navy text-white rounded-full font-semibold hover:bg-rivamez-cyan transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
