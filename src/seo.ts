/**
 * Single source of truth for anything Google reads about us.
 *
 * SITE_URL must match the host that actually serves the site. pdelabs.com
 * 308-redirects to www.pdelabs.com, so www is the canonical host — every
 * canonical, sitemap entry and JSON-LD @id below has to use it or Search
 * Console reports the URLs as "Page with redirect" and drops them.
 */
export const SITE_URL = 'https://www.pdelabs.com';

export const CONTACT_EMAIL = 'info@pdelabs.com';
export const CONTACT_PHONE = '+59899002835';
/** WhatsApp is a different line from the Uruguayan phone above — do not merge them. */
export const WHATSAPP_NUMBER = '34607778304';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'pdelabs',
  legalName: 'Punta del Este Labs',
  alternateName: ['Punta del Este Labs', 'PDE Labs'],
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo-full.svg`,
  image: `${SITE_URL}/assets/logo-full.svg`,
  description:
    'AI engineering and software development studio based in Punta del Este, Uruguay. We build AI agents that make it to production — RAG systems, agentic loops and autonomous agents — plus the web, mobile, API and data engineering work that holds them up.',
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Punta del Este',
    addressRegion: 'Maldonado',
    addressCountry: 'UY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.9578543,
    longitude: -54.9371897,
  },
  areaServed: [
    { '@type': 'Country', name: 'Uruguay' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Spain' },
  ],
  knowsLanguage: ['en', 'es'],
  sameAs: [
    'https://www.linkedin.com/company/pdelabs',
    'https://www.instagram.com/puntadelestelabs/',
    'https://github.com/pdelabs/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software development services',
    itemListElement: [
      // Keep this list in sync with the cards rendered by the Services and AI
      // sections — Google cross-checks structured data against visible copy.
      'AI Agent Development',
      'Autonomous Agent Development',
      'RAG System Engineering',
      'LLM Application Development',
      'LLM Evaluation and Observability',
      'Custom Software Development',
      'Mobile App Development',
      'Software Integration and API Development',
      'Data Engineering Solutions',
      'Machine Learning and Data Science',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
};

/**
 * Per-case-study structured data. Typed loosely on purpose — importing the
 * CaseStudyData type here would drag JSX into a module the root layout loads.
 */
export function caseStudyJsonLd(data: {
    slug: string;
    name: string;
    metaTitle: string;
    metaDescription: string;
    images: string[];
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${SITE_URL}/work/${data.slug}#article`,
        headline: data.metaTitle,
        description: data.metaDescription,
        url: `${SITE_URL}/work/${data.slug}`,
        image: data.images.map((src) => `${SITE_URL}${src}`),
        about: { '@type': 'SoftwareApplication', name: data.name },
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en',
    };
}

/** Blog post structured data. Same loose typing as caseStudyJsonLd, same reason. */
export function articleJsonLd(a: {
    slug: string;
    headline: string;
    description: string;
    datePublished: string;
    image?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${SITE_URL}${a.slug}#article`,
        headline: a.headline,
        description: a.description,
        url: `${SITE_URL}${a.slug}`,
        datePublished: a.datePublished,
        ...(a.image ? { image: `${SITE_URL}${a.image}` } : {}),
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en',
    };
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'pdelabs — Punta del Este Labs',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
};
