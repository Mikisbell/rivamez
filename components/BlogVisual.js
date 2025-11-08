'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

// Datos simulados para demostración
const MOCK_DATA = {
  categories: [
    { _id: 'cat1', title: 'Proyectos', slug: { current: 'proyectos' }, icon: '🏗️', color: 'cyan' },
    { _id: 'cat2', title: 'Innovación', slug: { current: 'innovacion' }, icon: '💡', color: 'purple' },
    { _id: 'cat3', title: 'Sostenibilidad', slug: { current: 'sostenibilidad' }, icon: '🌱', color: 'green' },
    { _id: 'cat4', title: 'Empresa', slug: { current: 'empresa' }, icon: '🏢', color: 'navy' },
    { _id: 'cat5', title: 'Mercado', slug: { current: 'mercado' }, icon: '📈', color: 'orange' },
  ],
  posts: [
    {
      _id: '1',
      title: 'RIVAMEZ inaugura complejo residencial de 150 departamentos con tecnología smart home',
      excerpt: 'El nuevo proyecto marca un hito en la construcción sostenible en Huancayo con certificación LEED y sistemas de eficiencia energética de última generación.',
      slug: { current: 'inauguracion-complejo-residencial-smart' },
      publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      readTime: 5,
      mainImage: null,
      categories: [{ _id: 'cat1', title: 'Proyectos', slug: { current: 'proyectos' }, color: 'cyan', icon: '🏗️' }],
      author: { name: 'María González', role: 'Directora de Proyectos', image: null }
    },
    {
      _id: '2',
      title: 'Nueva tecnología BIM reduce tiempos de construcción en 30%',
      excerpt: 'Implementación de Building Information Modeling revoluciona la planificación y ejecución de proyectos inmobiliarios.',
      slug: { current: 'tecnologia-bim-construccion' },
      publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      readTime: 4,
      mainImage: null,
      categories: [{ _id: 'cat2', title: 'Innovación', slug: { current: 'innovacion' }, color: 'purple', icon: '💡' }],
      author: { name: 'Carlos Ramírez', role: 'Jefe de Innovación', image: null }
    },
    {
      _id: '3',
      title: 'Certificación ISO 14001 refuerza compromiso ambiental de RIVAMEZ',
      excerpt: 'Nueva certificación internacional posiciona a la empresa como líder en construcción sostenible en el sector.',
      slug: { current: 'certificacion-iso-14001-ambiental' },
      publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      readTime: 3,
      mainImage: null,
      categories: [{ _id: 'cat3', title: 'Sostenibilidad', slug: { current: 'sostenibilidad' }, color: 'green', icon: '🌱' }],
      author: { name: 'Ana Torres', role: 'Gerente de Calidad', image: null }
    },
    {
      _id: '4',
      title: 'Mercado inmobiliario en Huancayo crece 15% en el último trimestre',
      excerpt: 'Análisis del sector muestra tendencias positivas impulsadas por proyectos de vivienda accesible y mejoras en infraestructura.',
      slug: { current: 'mercado-inmobiliario-huancayo-crece' },
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      readTime: 6,
      mainImage: null,
      categories: [{ _id: 'cat5', title: 'Mercado', slug: { current: 'mercado' }, color: 'orange', icon: '📈' }],
      author: { name: 'Roberto Silva', role: 'Analista de Mercado', image: null }
    },
    {
      _id: '5',
      title: 'RIVAMEZ amplía equipo con 50 nuevos profesionales especializados',
      excerpt: 'Expansión fortalece capacidades en ingeniería civil, arquitectura y gestión de proyectos para afrontar creciente demanda.',
      slug: { current: 'ampliacion-equipo-profesionales' },
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      readTime: 4,
      mainImage: null,
      categories: [{ _id: 'cat4', title: 'Empresa', slug: { current: 'empresa' }, color: 'navy', icon: '🏢' }],
      author: { name: 'Patricia Mendoza', role: 'Directora de RRHH', image: null }
    },
    {
      _id: '6',
      title: 'Paneles solares en edificios reducen costos energéticos hasta 40%',
      excerpt: 'Instalación de sistemas fotovoltaicos en proyectos residenciales genera ahorros significativos para propietarios.',
      slug: { current: 'paneles-solares-ahorro-energetico' },
      publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      readTime: 5,
      mainImage: null,
      categories: [{ _id: 'cat3', title: 'Sostenibilidad', slug: { current: 'sostenibilidad' }, color: 'green', icon: '🌱' }],
      author: { name: 'Diego Paredes', role: 'Ingeniero Ambiental', image: null }
    },
    {
      _id: '7',
      title: 'Alianza estratégica con proveedores internacionales mejora calidad',
      excerpt: 'Acuerdos con empresas líderes en materiales de construcción garantizan estándares de clase mundial.',
      slug: { current: 'alianza-proveedores-internacionales' },
      publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      readTime: 4,
      mainImage: null,
      categories: [{ _id: 'cat4', title: 'Empresa', slug: { current: 'empresa' }, color: 'navy', icon: '🏢' }],
      author: { name: 'Luis Vega', role: 'Director de Compras', image: null }
    },
    {
      _id: '8',
      title: 'Realidad virtual transforma experiencia de preventa inmobiliaria',
      excerpt: 'Clientes pueden recorrer virtualmente departamentos antes de la construcción con tecnología VR inmersiva.',
      slug: { current: 'realidad-virtual-preventa' },
      publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      readTime: 3,
      mainImage: null,
      categories: [{ _id: 'cat2', title: 'Innovación', slug: { current: 'innovacion' }, color: 'purple', icon: '💡' }],
      author: { name: 'Sandra Flores', role: 'Gerente de Ventas', image: null }
    },
  ],
};

export default function BlogVisual({ initialPosts = [], initialFeaturedPost = null, initialCategories = [] }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Combinar posts reales con simulados para siempre tener contenido suficiente
  // Muestra tus posts reales primero, luego completa con simulados hasta tener 8
  const realPosts = initialPosts.length > 0 ? initialPosts : [];
  const neededMockPosts = Math.max(8 - realPosts.length, 0);
  const mockPosts = MOCK_DATA.posts.slice(0, neededMockPosts);
  
  const posts = [...realPosts, ...mockPosts];
  const featuredPost = initialFeaturedPost || posts[0];
  const categories = initialCategories.length > 0 ? initialCategories : MOCK_DATA.categories;
  
  // Top 3 posts para "Top Stories"
  const topPosts = posts.slice(0, 3);
  // Trending posts (últimos 5)
  const trendingPosts = posts.slice(0, 5);
  // Regular posts (resto)
  const regularPosts = posts.slice(3);

  // Filtrar posts
  const filteredPosts = regularPosts.filter(post => {
    return activeCategory === 'all' || 
      post.categories?.some(cat => cat.slug.current === activeCategory);
  });

  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (hours < 1) return 'Hace unos minutos';
    if (hours < 24) return `Hace ${hours}h`;
    if (days === 1) return 'Ayer';
    if (days < 7) return `Hace ${days} días`;
    return date.toLocaleDateString('es-PE', { month: 'short', day: 'numeric' });
  };

  const getCategoryGradient = (color) => {
    const gradients = {
      cyan: 'from-cyan-500 via-cyan-600 to-blue-700',
      navy: 'from-blue-900 via-blue-800 to-indigo-900',
      green: 'from-green-500 via-emerald-600 to-teal-700',
      purple: 'from-purple-600 via-purple-700 to-indigo-800',
      orange: 'from-orange-500 via-orange-600 to-red-600',
    };
    return gradients[color] || gradients.cyan;
  };

  const getCategoryColor = (color) => {
    const colors = {
      cyan: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700',
      navy: 'bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-950 hover:to-indigo-950',
      green: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
      purple: 'bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800',
      orange: 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700',
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Fondo con patrón arquitectónico */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(90deg, #1e3a8a 1px, transparent 1px),
            linear-gradient(0deg, #1e3a8a 1px, transparent 1px),
            linear-gradient(45deg, transparent 48%, #06b6d4 48%, #06b6d4 52%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, #06b6d4 48%, #06b6d4 52%, transparent 52%)
          `,
          backgroundSize: '80px 80px, 80px 80px, 40px 40px, 40px 40px',
          backgroundPosition: '0 0, 0 0, 0 0, 20px 20px'
        }}
      />
      
      {/* Top Bar - Categorías con gradiente */}
      <div className="relative border-b-2 border-rivamez-cyan/20 bg-white/95 backdrop-blur-md sticky top-20 z-30 shadow-lg mt-6">
        <div className="absolute inset-0 bg-gradient-to-r from-rivamez-navy/5 via-rivamez-cyan/5 to-rivamez-navy/5" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto py-5 scrollbar-hide">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 text-base font-bold whitespace-nowrap transition-all rounded-xl shadow-lg ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white shadow-xl shadow-rivamez-cyan/40'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border-2 border-gray-200 hover:shadow-xl'
              }`}
            >
              <span className="text-xl mr-2">📰</span>
              Todas las noticias
            </motion.button>
            {categories.map((cat) => (
              <motion.button
                key={cat._id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.slug.current)}
                className={`px-6 py-3 text-base font-bold whitespace-nowrap transition-all rounded-xl flex items-center gap-2 shadow-lg ${
                  activeCategory === cat.slug.current
                    ? `bg-gradient-to-r ${getCategoryGradient(cat.color)} text-white shadow-xl`
                    : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border-2 border-gray-200 hover:shadow-xl'
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                {cat.title}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-8">
        {/* Featured Post - Hero grande */}
        {featuredPost && activeCategory === 'all' && (
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12 pb-12 border-b border-gray-200"
          >
            <Link href={`/blog/${featuredPost.slug.current}`}>
              <div className="grid lg:grid-cols-2 gap-8 group">
                {/* Imagen */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded">
                  {featuredPost.mainImage ? (
                    <Image
                      src={urlFor(featuredPost.mainImage).width(1000).height(700).url()}
                      alt={featuredPost.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-9xl">🏗️</span>
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="flex flex-col justify-center">
                  {featuredPost.categories?.[0] && (
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 text-xs font-bold text-white uppercase tracking-wider rounded ${getCategoryColor(featuredPost.categories[0].color)}`}>
                        {featuredPost.categories[0].title}
                      </span>
                    </div>
                  )}
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-rivamez-cyan transition-colors">
                    {featuredPost.title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {featuredPost.author && (
                      <>
                        {featuredPost.author.image && (
                          <div className="relative w-10 h-10 rounded-full overflow-hidden">
                            <Image
                              src={urlFor(featuredPost.author.image).width(80).height(80).url()}
                              alt={featuredPost.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-900">{featuredPost.author.name}</p>
                          <p className="text-xs text-gray-500">{getRelativeTime(featuredPost.publishedAt)} · {featuredPost.readTime || 3} min de lectura</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Layout Principal */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Columna Principal */}
          <div className="lg:col-span-8">
            {/* Top Stories */}
            {activeCategory === 'all' && topPosts.length > 0 && (
              <section className="mb-12 pb-8 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-1 h-7 bg-rivamez-cyan rounded-full"></div>
                  Noticias Destacadas
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {topPosts.map((post, index) => (
                    <motion.article
                      key={post._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={`/blog/${post.slug.current}`}>
                        <div className="group">
                          <div className="relative h-48 mb-3 overflow-hidden rounded">
                            {post.mainImage ? (
                              <Image
                                src={urlFor(post.mainImage).width(500).height(350).url()}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <span className="text-5xl">📄</span>
                              </div>
                            )}
                          </div>
                          
                          {post.categories?.[0] && (
                            <span className={`inline-block px-2 py-1 text-xs font-bold text-white uppercase tracking-wide mb-2 rounded ${getCategoryColor(post.categories[0].color)}`}>
                              {post.categories[0].title}
                            </span>
                          )}
                          
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-rivamez-cyan transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-sm text-gray-500">
                            {getRelativeTime(post.publishedAt)} · {post.readTime || 3} min de lectura
                          </p>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </section>
            )}

            {/* Latest News Grid */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-7 bg-rivamez-cyan rounded-full"></div>
                Últimas Noticias
              </h2>
              
              <div className="space-y-8">
                <AnimatePresence mode="wait">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className="pb-8 border-b border-gray-200 last:border-0"
                    >
                      <Link href={`/blog/${post.slug.current}`}>
                        <div className="group flex gap-6">
                          {/* Imagen */}
                          <div className="relative w-72 h-48 flex-shrink-0 overflow-hidden rounded">
                            {post.mainImage ? (
                              <Image
                                src={urlFor(post.mainImage).width(400).height(300).url()}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <span className="text-6xl">📄</span>
                              </div>
                            )}
                          </div>

                          {/* Contenido */}
                          <div className="flex-1 flex flex-col">
                            {post.categories?.[0] && (
                              <span className={`inline-block w-fit px-2 py-1 text-xs font-bold text-white uppercase tracking-wide mb-2 rounded ${getCategoryColor(post.categories[0].color)}`}>
                                {post.categories[0].title}
                              </span>
                            )}
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-rivamez-cyan transition-colors">
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                              {post.author?.image && (
                                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                  <Image
                                    src={urlFor(post.author.image).width(64).height(64).url()}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              )}
                              <span className="font-medium text-gray-700">{post.author?.name || 'RIVAMEZ'}</span>
                              <span>·</span>
                              <span>{getRelativeTime(post.publishedAt)}</span>
                              <span>·</span>
                              <span>{post.readTime || 3} min de lectura</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </AnimatePresence>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">📭</div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">No hay artículos en esta categoría</h3>
                    <p className="text-gray-500">Prueba seleccionando otra categoría</p>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-40 space-y-8">
              {/* Trending Now */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  Tendencias
                </h3>
                
                <div className="space-y-4">
                  {trendingPosts.map((post, index) => (
                    <Link key={post._id} href={`/blog/${post.slug.current}`}>
                      <div className="group flex gap-3 items-start">
                        <span className="text-3xl font-bold text-gray-300 group-hover:text-rivamez-cyan transition-colors leading-none">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-rivamez-cyan transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {getRelativeTime(post.publishedAt)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-rivamez-navy to-blue-900 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Newsletter</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Suscríbete y recibe las últimas noticias del sector construcción
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-white text-rivamez-navy rounded font-semibold text-sm hover:bg-blue-50 transition-colors"
                  >
                    Suscribirse
                  </button>
                </form>
                <p className="text-xs text-blue-200 mt-3">
                  📧 Enviamos 1 email semanal. Sin spam.
                </p>
              </div>

              {/* Sobre RIVAMEZ */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Sobre RIVAMEZ</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Líderes en construcción e inmobiliaria en Huancayo. Más de 40 proyectos exitosos y certificaciones internacionales.
                </p>
                <Link href="/nosotros">
                  <button className="text-sm font-semibold text-rivamez-cyan hover:text-rivamez-navy transition-colors">
                    Conocer más →
                  </button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
