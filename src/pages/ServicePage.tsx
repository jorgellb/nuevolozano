import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { getTownBySlug } from '@/data/townsData'

const ServicePage = () => {
  const { townSlug } = useParams<{ townSlug: string }>()
  const town = townSlug ? getTownBySlug(townSlug) : undefined

  if (!town) {
    return <Navigate to="/404" replace />
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`Carpintería Metálica en ${town.name} | Metales Del Sureste Andaluz`}</title>
        <meta name="description" content={town.description} />
        <meta property="og:title" content={`Carpintería Metálica en ${town.name}`} />
        <meta property="og:description" content={town.description} />
        <link rel="canonical" href={`https://metalesdelsureste.com/servicios/${town.slug}`} />
      </Helmet>
      <ServicePageTemplate town={town} />
    </HelmetProvider>
  )
}

export default ServicePage
