// SEO Metadata Generator para todas las páginas
import { localSEO } from './seo-local';

const SITE_NAME = 'RIVAMEZ';
const SITE_URL = 'https://rivamez.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export const generateSEO = {
  home: () => ({
    title: 'Constructora Certificada en Huancayo y Junín | Empresa Formal desde 2015 | RIVAMEZ',
    description: 'Constructora formal en Huancayo y Junín, empresa constituida en 2015. ✅ Ingeniería, arquitectura y gestión de proyectos. ✅ ISO 9001, 14001, 45001 y 37001 vigentes y verificables en línea. ✅ Licencias, conformidad de obra y saneamiento. 📞 Cotización gratis en 24h ☎️ +51 995 060 806',
    keywords: localSEO.keywords.primary.join(', ') + ', ' + localSEO.keywords.secondary.join(', '),
    openGraph: {
      title: 'RIVAMEZ - Constructora e Inmobiliaria en Huancayo',
      description: 'Equipo con más de 15 años de experiencia construyendo proyectos de calidad en Huancayo y Junín',
      url: SITE_URL,
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
      locale: 'es_PE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'RIVAMEZ - Constructora e Inmobiliaria',
      description: 'Construcción de calidad en Huancayo, equipo con +15 años de experiencia',
      images: [DEFAULT_OG_IMAGE],
    },
    alternates: {
      canonical: SITE_URL,
    },
  }),

  nosotros: () => ({
    title: 'Sobre RIVAMEZ - Empresa Constructora Formal en Huancayo desde 2015',
    description: 'Conoce nuestra historia, valores, equipo y certificaciones ISO 9001, 14001, 45001 y 37001. Empresa constructora en Huancayo constituida en 2015, con más de 50 proyectos desarrollados.',
    keywords: 'sobre rivamez, empresa constructora, historia rivamez, certificaciones iso, constructora huancayo, equipo construcción',
    openGraph: {
      title: 'Sobre RIVAMEZ - Nuestra Historia y Valores',
      description: 'Equipo con más de 15 años de experiencia en la construcción en Huancayo',
      url: `${SITE_URL}/nosotros`,
      images: [{ url: `${SITE_URL}/images/og-nosotros.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sobre RIVAMEZ - Empresa Constructora',
      description: 'Equipo con +15 años de experiencia en construcción',
    },
    alternates: {
      canonical: `${SITE_URL}/nosotros`,
    },
  }),

  servicios: () => ({
    title: 'Servicios: Ingeniería, Arquitectura y Gestión de Proyectos | RIVAMEZ',
    description: 'Arquitectura, ingeniería, construcción y gestión de proyectos en Huancayo. Licencia de edificación, conformidad de obra y declaratoria de fábrica, saneamiento físico legal, subdivisión e independización.',
    keywords: 'servicios construcción, licencia de edificación huancayo, conformidad de obra, declaratoria de fábrica, saneamiento físico legal, independización de departamentos, arquitectura huancayo, ingeniería civil, gestión de proyectos',
    openGraph: {
      title: 'Servicios de Construcción Integral - RIVAMEZ',
      description: 'Tecnología BIM, IA y construcción modular para proyectos de alta calidad',
      url: `${SITE_URL}/servicios`,
      images: [{ url: `${SITE_URL}/images/og-servicios.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Servicios de Construcción - RIVAMEZ',
      description: 'BIM, IA, Modular y más tecnologías de vanguardia',
    },
    alternates: {
      canonical: `${SITE_URL}/servicios`,
    },
  }),

  proyectos: () => ({
    title: 'Portafolio de Proyectos - Más de 50 Obras Desarrolladas | RIVAMEZ',
    description: 'Explora nuestros proyectos destacados: torres residenciales, centros comerciales, condominios y obras industriales en Huancayo y Junín. Casos de éxito con fotos y testimonios.',
    keywords: 'proyectos construcción huancayo, obras completadas, portafolio construcción, torres huancayo, centros comerciales, proyectos rivamez',
    openGraph: {
      title: 'Portafolio de Proyectos - RIVAMEZ',
      description: 'Más de 50 proyectos desarrollados en Huancayo y Junín',
      url: `${SITE_URL}/proyectos`,
      images: [{ url: `${SITE_URL}/images/og-proyectos.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Proyectos RIVAMEZ',
      description: 'Más de 50 obras desarrolladas con respaldo certificado',
    },
    alternates: {
      canonical: `${SITE_URL}/proyectos`,
    },
  }),

  blog: () => ({
    title: 'Blog de Construcción - Noticias y Tendencias | RIVAMEZ',
    description: 'Últimas noticias, tendencias y consejos sobre construcción, arquitectura moderna, sostenibilidad y tecnología BIM. Blog actualizado por expertos en construcción.',
    keywords: 'blog construcción, noticias construcción, tendencias arquitectura, consejos construcción, bim blog, sostenibilidad construcción',
    openGraph: {
      title: 'Blog de Construcción y Arquitectura - RIVAMEZ',
      description: 'Noticias, tendencias y consejos de expertos',
      url: `${SITE_URL}/blog`,
      images: [{ url: `${SITE_URL}/images/og-blog.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog RIVAMEZ',
      description: 'Noticias y tendencias en construcción',
    },
    alternates: {
      canonical: `${SITE_URL}/blog`,
    },
  }),

  contacto: () => ({
    title: 'Contacto - Solicita tu Cotización Gratis | RIVAMEZ Huancayo',
    description: 'Contáctanos para cotizar tu proyecto de construcción en Huancayo. WhatsApp: +51 995 060 806 | Email: info@rivamez.com. Respuesta en menos de 24 horas.',
    keywords: 'contacto rivamez, cotización construcción, presupuesto construcción huancayo, contacto constructora, solicitar cotización',
    openGraph: {
      title: 'Contacta con RIVAMEZ - Cotización Gratis',
      description: 'Solicita tu cotización sin compromiso. Respuesta en 24h',
      url: `${SITE_URL}/contacto`,
      images: [{ url: `${SITE_URL}/images/og-contacto.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contacto RIVAMEZ',
      description: 'Cotización gratis en 24 horas',
    },
    alternates: {
      canonical: `${SITE_URL}/contacto`,
    },
  }),

  // Generator para blog posts dinámicos
  blogPost: (post) => ({
    title: `${post.title} | Blog RIVAMEZ`,
    description: post.excerpt || post.description,
    keywords: post.keywords || 'construcción, arquitectura, blog rivamez',
    openGraph: {
      title: post.title,
      description: post.excerpt || post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: post.coverImage || DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'RIVAMEZ Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.description,
      images: [post.coverImage || DEFAULT_OG_IMAGE],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  }),
};

// Additional metadata helpers
export const robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export const viewport = {
  themeColor: '#113572',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};
