import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
}

const defaultMeta = {
  title: 'Metales Del Sureste Andaluz | Carpintería Metálica en Andalucía',
  description: 'Expertos en carpintería metálica, estructuras de aluminio, cerrajería, forja artística y automatización de puertas. Más de 20 años de experiencia en Andalucía.',
  ogImage: '/og-image.jpg',
  url: 'https://metalesdelsureste.com',
}

export const SEOHead = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  canonical = defaultMeta.url,
  ogImage = defaultMeta.ogImage,
}: SEOHeadProps) => {
  const fullTitle = title.length > 60 ? title.slice(0, 57) + '...' : title
  const fullDescription = description.length > 160 ? description.slice(0, 157) + '...' : description

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': canonical,
    name: 'Metales Del Sureste Andaluz',
    description: fullDescription,
    url: canonical,
    telephone: '+34600000000',
    email: 'info@metalesdelsureste.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Polígono Industrial',
      addressLocality: 'Almería',
      addressRegion: 'Andalucía',
      postalCode: '04001',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.8340,
      longitude: -2.4637,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/metalesdelsureste',
      'https://www.instagram.com/metalesdelsureste',
      'https://www.linkedin.com/company/metalesdelsureste',
    ],
    priceRange: '€€',
    image: ogImage,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.8340,
        longitude: -2.4637,
      },
      geoRadius: '100000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Carpintería Metálica',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Estructuras Metálicas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carpintería de Aluminio',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cerrajería',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Forja Artística',
          },
        },
      ],
    },
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Metales Del Sureste Andaluz" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Metales Del Sureste Andaluz" />
      <meta name="geo.region" content="ES-AL" />
      <meta name="geo.placename" content="Almería" />
      <meta name="language" content="Spanish" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
