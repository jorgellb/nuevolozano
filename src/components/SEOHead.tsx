import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
}

const BASE_URL = 'https://metalesdelsureste.com'

const defaultMeta = {
  title: 'Metales Del Sureste Andaluz | Carpintería Metálica en Andalucía',
  description: 'Expertos en carpintería metálica, estructuras de aluminio, cerrajería, forja artística y automatización de puertas. Más de 20 años de experiencia en Andalucía.',
  ogImage: '/og-image.jpg',
}

export const SEOHead = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  canonical,
  ogImage = defaultMeta.ogImage,
}: SEOHeadProps) => {
  const { currentLang } = useLanguage()
  const location = useLocation()

  const fullTitle = title.length > 60 ? title.slice(0, 57) + '...' : title
  const fullDescription = description.length > 160 ? description.slice(0, 157) + '...' : description

  // Build canonical URL from current path
  const canonicalUrl = canonical || `${BASE_URL}${location.pathname}`

  // Build alternate URLs for hreflang
  const pathWithoutLang = location.pathname.replace(/^\/(es|en)/, '') || '/'
  const isRoot = pathWithoutLang === '/'
  const esUrl = `${BASE_URL}/es${isRoot ? '' : pathWithoutLang}`
  const enUrl = `${BASE_URL}/en${isRoot ? '' : pathWithoutLang}`
  // x-default should point to the route that handles language detection/redirection
  const xDefaultUrl = `${BASE_URL}${isRoot ? '' : pathWithoutLang}`

  const ogLocale = currentLang === 'es' ? 'es_ES' : 'en_US'
  const ogLocaleAlternate = currentLang === 'es' ? 'en_US' : 'es_ES'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/${currentLang}`,
    name: 'Metales Del Sureste Andaluz',
    description: fullDescription,
    url: canonicalUrl,
    telephone: '+34653940750',
    email: 'info@metalesdelsureste.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C/ Paraje La Ventica, 8',
      addressLocality: 'Huércal-Overa',
      addressRegion: 'Almería',
      postalCode: '04600',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.3892,
      longitude: -1.9415,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/metalesdelsureste',
      'https://www.instagram.com/metalesdelsureste',
      'https://www.linkedin.com/company/metalesdelsureste',
    ],
    priceRange: '€€',
    image: ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 37.3892,
        longitude: -1.9415,
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
            name: 'Automatización',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Forja Artística',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobiliario Urbano',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manipulado de Vidrio',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Metalistería',
          },
        },
      ],
    },
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={currentLang} />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Tags for SEO */}
      <link rel="alternate" hrefLang="es" href={esUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={xDefaultUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlternate} />
      <meta property="og:site_name" content="Metales Del Sureste Andaluz" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Metales Del Sureste Andaluz" />
      <meta name="geo.region" content="ES-AL" />
      <meta name="geo.placename" content="Huércal-Overa, Almería" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
