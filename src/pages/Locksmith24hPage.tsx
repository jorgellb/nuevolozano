import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Locksmith24hTemplate } from '@/components/Locksmith24hTemplate'
import { getLocksmith24hBySlug } from '@/data/locksmith24hData'

const Locksmith24hPage = () => {
  const { townSlug } = useParams<{ townSlug: string }>()
  const town = townSlug ? getLocksmith24hBySlug(townSlug) : undefined

  if (!town) {
    return <Navigate to="/404" replace />
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://metalesdelsureste.com/cerrajero-24h/${town.slug}`,
    name: `Cerrajero 24 Horas ${town.name} - Metales Del Sureste Andaluz`,
    description: town.metaDescription,
    url: `https://metalesdelsureste.com/cerrajero-24h/${town.slug}`,
    telephone: town.phoneNumber,
    address: {
      '@type': 'PostalAddress',
      addressLocality: town.name,
      addressRegion: town.province,
      addressCountry: 'ES'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    priceRange: '€€',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 37.1,
        longitude: -1.9
      },
      geoRadius: '30000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Cerrajería 24h',
      itemListElement: town.services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service
        }
      }))
    }
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{town.metaTitle}</title>
        <meta name="description" content={town.metaDescription} />
        <meta name="keywords" content={`cerrajero 24 horas ${town.name}, cerrajero urgente ${town.name}, apertura puertas ${town.name}, cerrajería ${town.name}, cerrajero ${town.province}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={town.metaTitle} />
        <meta property="og:description" content={town.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://metalesdelsureste.com/cerrajero-24h/${town.slug}`} />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={town.metaTitle} />
        <meta name="twitter:description" content={town.metaDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`https://metalesdelsureste.com/cerrajero-24h/${town.slug}`} />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="ES-AL" />
        <meta name="geo.placename" content={town.name} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Locksmith24hTemplate town={town} />
    </HelmetProvider>
  )
}

export default Locksmith24hPage
