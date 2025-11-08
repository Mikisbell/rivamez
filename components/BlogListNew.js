'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogListNew({ initialPosts = [], initialFeaturedPost = null, initialCategories = [] }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const posts = initialPosts.length > 0 ? initialPosts : [];
  const featuredPost = initialFeaturedPost || posts[0];
  const categories = initialCategories.length > 0 ? initialCategories : [
    { _id: 'all', title: 'Todas', slug: { current: 'all' }, icon: '📰', color: 'cyan' }
  ];

  // Filtrar posts por categoría y búsqueda
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || 
      post.categories?.some(cat => cat.slug.current === activeCategory);
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Función para obtener fecha relativa
  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Hoy';
    if (days === 1) return 'Ayer';
    if (days < 7) return `Hace ${days} días`;
    if (days < 30) return `Hace ${Math.floor(days / 7)} semanas`;
    return date.toLocaleDateString('es-PE', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getColorClasses = (color) => {
    const colors = {
      cyan: 'from-cyan-500 to-blue-600 text-cyan-600 bg-cyan-50',
      navy: 'from-blue-900 to-blue-700 text-blue-900 bg-blue-50',
      green: 'from-green-500 to-emerald-600 text-green-600 bg-green-50',
      purple: 'from-purple-500 to-indigo-600 text-purple-600 bg-purple-50',
      orange: 'from-orange-500 to-red-600 text-orange-600 bg-orange-50',
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-rivamez-navy via-blue-900 to-rivamez-cyan text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              RIVAMEZ <span className="text-cyan-300">Blog</span>
            </h1>
            <p className="text-xl text-cyan-100 max-w-2xl">
              Noticias, proyectos, innovación y mejores prácticas en construcción e inmobiliaria
            </p>
          </motion.div>

          {/* Buscador */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Buscar artículos, proyectos, consejos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-cyan-200 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Featured Post */}
            {featuredPost && activeCategory === 'all' && !searchQuery && (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <Link href={`/blog/${featuredPost.slug.current}`}>
                  <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* Imagen */}
                    <div className="relative h-96 overflow-hidden">
                      {featuredPost.mainImage ? (
                        <Image
                          src={urlFor(featuredPost.mainImage).width(1200).height(600).url()}
                          alt={featuredPost.title}
                          fill
                          priority
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-rivamez-navy to-rivamez-cyan flex items-center justify-center">
                          <span className="text-9xl">📰</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Badge Featured */}
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Destacado
                        </span>
                      </div>

                      {/* Metadata */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 mb-3">
                          {featuredPost.categories?.map((cat) => (
                            <span key={cat._id} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                              {cat.icon} {cat.title}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                          {featuredPost.title}
                        </h2>
                        <p className="text-lg text-gray-200 mb-4 line-clamp-2">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {getRelativeTime(featuredPost.publishedAt)}
                          </span>
                          {featuredPost.readTime && (
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {featuredPost.readTime} min
                            </span>
                          )}
                          {featuredPost.author && (
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              {featuredPost.author.name}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* Posts Grid */}
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {filteredPosts.filter(p => p._id !== featuredPost?._id).map((post, index) => (
                  <motion.article
                    key={post._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug.current}`}>
                      <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
                        {/* Imagen */}
                        <div className="relative sm:w-64 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                          {post.mainImage ? (
                            <Image
                              src={urlFor(post.mainImage).width(400).height(300).url()}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <span className="text-6xl">📄</span>
                            </div>
                          )}
                        </div>

                        {/* Contenido */}
                        <div className="p-6 flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            {post.categories?.slice(0, 2).map((cat) => {
                              const colorClass = getColorClasses(cat.color);
                              return (
                                <span
                                  key={cat._id}
                                  className={`px-3 py-1 ${colorClass.split(' ')[3]} text-xs font-semibold rounded-full`}
                                >
                                  {cat.icon} {cat.title}
                                </span>
                              );
                            })}
                          </div>

                          <h3 className="text-xl font-bold text-rivamez-navy mb-2 group-hover:text-rivamez-cyan transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {getRelativeTime(post.publishedAt)}
                            </span>
                            {post.readTime && (
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {post.readTime} min
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No se encontraron artículos</h3>
                  <p className="text-gray-500">Intenta con otra búsqueda o categoría</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            {/* Categorías */}
            <div className="bg-white rounded-2xl p-6 shadow-md mb-6 sticky top-6">
              <h3 className="text-lg font-bold text-rivamez-navy mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Categorías
              </h3>
              <div className="space-y-2">
                {[{ _id: 'all', title: 'Todas', slug: { current: 'all' }, icon: '📰' }, ...categories].map((cat) => (
                  <button
                    key={cat._id}
                    onClick={() => setActiveCategory(cat.slug.current)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                      activeCategory === cat.slug.current
                        ? 'bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white shadow-lg scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xl">{cat.icon}</span>
                      <span className="font-semibold">{cat.title}</span>
                      <span className="ml-auto text-sm opacity-75">
                        {cat.slug.current === 'all' 
                          ? posts.length 
                          : posts.filter(p => p.categories?.some(c => c.slug.current === cat.slug.current)).length}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-rivamez-navy via-blue-900 to-rivamez-cyan rounded-2xl p-8 text-white shadow-xl">
              <div className="text-4xl mb-4">📬</div>
              <h3 className="text-2xl font-bold mb-2">Suscríbete</h3>
              <p className="text-cyan-100 mb-6">
                Recibe las últimas noticias, proyectos y consejos directo en tu email
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-rivamez-navy rounded-xl font-semibold hover:bg-cyan-50 transition-colors shadow-lg"
                >
                  Suscribirme
                </button>
              </form>
              <p className="text-xs text-cyan-200 mt-4">
                📧 Sin spam. Solo contenido de valor.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
