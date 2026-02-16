import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate'
import { getServiceBySlug } from '@/data/servicesData'
import { SEOHead } from '@/components/SEOHead'
import { useLanguage } from '@/hooks/useLanguage'

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>()
  const { currentLang } = useLanguage()
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined

  if (!service) {
    return <Navigate to={`/${currentLang}`} replace />
  }

  return (
    <HelmetProvider>
      <SEOHead
        title={`${service.title} | Metales Del Sureste Andaluz`}
        description={service.shortDescription}
      />
      <ServiceDetailTemplate service={service} />
    </HelmetProvider>
  )
}

export default ServiceDetailPage
