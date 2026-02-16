import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { servicesData } from '@/data/servicesData'
import { useLanguage } from '@/hooks/useLanguage'
import { useTranslation } from 'react-i18next'

export const Services = () => {
  const { localizedPath } = useLanguage()
  const { t } = useTranslation()
  return (
    <section id="servicios" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="tag-premium inline-block mb-6">
            {t('services.tag')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
            {t('services.title')}{' '}
            <span className="text-gradient-gold">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
          <div className="ornament-line mx-auto mt-10" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group"
              >
                <Link to={localizedPath(`/servicio/${service.slug}`)} className="block h-full">
                  <div className="card-premium h-full rounded-2xl p-8 relative overflow-hidden">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>

                      <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-gradient-gold transition-all duration-300">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>

                      <div className="flex items-center gap-2 text-primary text-sm font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span>{t('services.viewDetails')}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
