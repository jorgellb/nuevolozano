import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { getTownBySlug } from '@/data/townsData'
import { SEOHead } from '@/components/SEOHead'
import { useLanguage } from '@/hooks/useLanguage'

const ServicePage = () => {
  const { townSlug } = useParams<{ townSlug: string }>()
  const { currentLang } = useLanguage()
  const town = townSlug ? getTownBySlug(townSlug) : undefined

  if (!town) {
    return <Navigate to={`/${currentLang}`} replace />
  }

  return (
    <HelmetProvider>
      <SEOHead
        title={`Carpintería Metálica en ${town.name} | Metales Del Sureste Andaluz`}
        description={town.description}
      />
      <ServicePageTemplate town={town} />
    </HelmetProvider>
  )
}

export default ServicePage
