// Schema.org JSON-LD Structured Data
import { localSEO } from '@/lib/seo-local';

export const structuredData = {
  // Organization (Global)
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RIVAMEZ - Constructora e Inmobiliaria Huancayo',
    alternateName: ['Grupo RIVAMEZ', 'Constructora RIVAMEZ Huancayo', 'RIVAMEZ Junín'],
    url: 'https://rivamez.com',
    logo: 'https://rivamez.com/images/logo.png',
    description: 'Constructora e inmobiliaria #1 en Huancayo y Junín con más de 15 años de experiencia. Especialistas en construcción residencial, comercial e industrial con certificación ISO 9001.',
    foundingDate: '2009',
    slogan: 'Construyendo sueños en Junín desde 2009',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Huancavelica 123',
      addressLocality: 'Huancayo',
      addressRegion: 'Junín',
      postalCode: '12001',
      addressCountry: 'PE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+51-943-818-788',
      contactType: 'customer service',
      areaServed: ['PE', 'Junín', 'Huancayo'],
      availableLanguage: ['Spanish'],
    },
    sameAs: [
      'https://facebook.com/rivamez',
      'https://instagram.com/rivamez',
      'https://linkedin.com/company/rivamez',
    ],
  },

  // LocalBusiness (Para SEO local)
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GeneralContractor', 'RealEstateAgent'],
    '@id': 'https://rivamez.com/#business',
    name: 'RIVAMEZ - Constructora e Inmobiliaria #1 en Huancayo y Junín',
    alternateName: 'Constructora RIVAMEZ Huancayo',
    image: ['https://rivamez.com/images/logo.png', 'https://rivamez.com/images/oficina-huancayo.jpg'],
    description: 'Constructora líder en Huancayo y toda la región Junín con más de 15 años de experiencia. Construcción de casas, departamentos, locales comerciales e industriales. Certificación ISO 9001. +127 proyectos completados.',
    url: 'https://rivamez.com',
    telephone: '+51943818788',
    email: 'info@rivamez.com',
    priceRange: 'S/. 1,200 - S/. 2,500 por m²',
    paymentAccepted: ['Cash', 'Credit Card', 'Financiamiento directo', 'Mi Vivienda', 'Techo Propio'],
    currenciesAccepted: 'PEN, USD',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Huancavelica 123',
      addressLocality: 'Huancayo',
      addressRegion: 'Junín',
      postalCode: '12001',
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.0653,
      longitude: -75.2049,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
  },

  // Website (Sitelinks Search Box)
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RIVAMEZ',
    url: 'https://rivamez.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://rivamez.com/buscar?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },

  // Service (Servicios de construcción)
  service: (serviceName, description, category) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'Organization',
      name: 'RIVAMEZ',
    },
    areaServed: {
      '@type': 'City',
      name: 'Huancayo',
      containedIn: {
        '@type': 'State',
        name: 'Junín',
      },
    },
    description: description,
    category: category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  }),

  // Breadcrumb
  breadcrumb: (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `https://rivamez.com${item.url}`,
        name: item.name,
      },
    })),
  }),

  // Article (Blog posts)
  article: (post) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || post.description,
    image: post.coverImage || 'https://rivamez.com/images/og-default.jpg',
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'RIVAMEZ Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RIVAMEZ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rivamez.com/images/logo.png',
      },
    },
  }),

  // FAQ
  faq: (questions) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }),
};

export default function StructuredData({ data, type = 'custom' }) {
  let jsonLd;

  switch (type) {
    case 'organization':
      jsonLd = structuredData.organization;
      break;
    case 'localBusiness':
      jsonLd = structuredData.localBusiness;
      break;
    case 'website':
      jsonLd = structuredData.website;
      break;
    case 'custom':
      jsonLd = data;
      break;
    default:
      jsonLd = data;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
