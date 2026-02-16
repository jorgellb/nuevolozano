import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Locksmith24hTemplate } from '@/components/Locksmith24hTemplate'
import { getLocksmith24hBySlug } from '@/data/locksmith24hData'
import { SEOHead } from '@/components/SEOHead'
import { useLanguage } from '@/hooks/useLanguage'

const Locksmith24hPage = () => {
  const { townSlug } = useParams<{ townSlug: string }>()
  const { currentLang } = useLanguage()
  const town = townSlug ? getLocksmith24hBySlug(townSlug) : undefined

  if (!town) {
    return <Navigate to={`/${currentLang}`} replace />
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://metalesdelsureste.com/${currentLang}/cerrajero-24h/${town.slug}`,
    name: `Cerrajero 24 Horas ${town.name} - Metales Del Sureste Andaluz`,
    description: town.metaDescription,
    url: `https://metalesdelsureste.com/${currentLang}/cerrajero-24h/${town.slug}`,
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
    priceRange: '$$',
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
      <SEOHead
        title={town.metaTitle}
        description={town.metaDescription}
      />
      <Helmet>
        <meta name="keywords" content={`cerrajero 24 horas ${town.name}, cerrajero urgente ${town.name}, apertura puertas ${town.name}, cerrajería ${town.name}, cerrajero ${town.province}`} />
        <meta name="geo.placename" content={town.name} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Locksmith24hTemplate town={town} />
    </HelmetProvider>
  )
}

export default Locksmith24hPage
