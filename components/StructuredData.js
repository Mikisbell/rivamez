// Schema.org JSON-LD Structured Data

export const structuredData = {
  // Organization (Global)
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RIVAMEZ',
    alternateName: 'Grupo Rivamez',
    url: 'https://rivamez.com',
    logo: 'https://rivamez.com/images/logo.png',
    description: 'Empresa líder en construcción residencial, comercial e industrial en Huancayo con más de 15 años de experiencia',
    foundingDate: '2009',
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
    '@type': 'LocalBusiness',
    '@id': 'https://rivamez.com/#business',
    name: 'RIVAMEZ - Constructora e Inmobiliaria',
    image: 'https://rivamez.com/images/logo.png',
    description: 'Constructora líder en Huancayo con más de 15 años de experiencia en proyectos residenciales, comerciales e industriales',
    url: 'https://rivamez.com',
    telephone: '+51943818788',
    priceRange: '$$',
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
