import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate'
import { getServiceBySlug } from '@/data/servicesData'

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>()
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined

  if (!service) {
    return <Navigate to="/404" replace />
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${service.title} | Metales Del Sureste Andaluz`}</title>
        <meta name="description" content={service.shortDescription} />
        <meta property="og:title" content={`${service.title} | Metales Del Sureste Andaluz`} />
        <meta property="og:description" content={service.shortDescription} />
        <link rel="canonical" href={`https://metalesdelsureste.com/servicio/${service.slug}`} />
      </Helmet>
      <ServiceDetailTemplate service={service} />
    </HelmetProvider>
  )
}

export default ServiceDetailPage
