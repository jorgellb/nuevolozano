import { Phone, Mail, MapPin, ArrowUp, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/hooks/useLanguage'
import { townsData } from '@/data/townsData'
import { locksmith24hData } from '@/data/locksmith24hData'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { localizedPath } = useLanguage()
  const [selectedTown, setSelectedTown] = useState('')
  const [selectedLocksmithTown, setSelectedLocksmithTown] = useState('')

  const footerLinks = {
    servicios: [
      { label: t('projects.categories.estructuras'), href: localizedPath('/servicio/estructuras-metalicas') },
      { label: t('projects.categories.aluminio'), href: localizedPath('/servicio/carpinteria-aluminio') },
      { label: t('projects.categories.cerrajeria'), href: localizedPath('/servicio/cerrajeria') },
      { label: t('projects.categories.automatizacion'), href: localizedPath('/servicio/automatizacion') },
      { label: t('projects.categories.forja'), href: localizedPath('/servicio/forja-artistica') },
    ],
    empresa: [
      { label: t('footer.aboutUs'), href: localizedPath('/nosotros') },
      { label: t('footer.projects'), href: localizedPath('/proyectos') },
      { label: t('footer.contact'), href: localizedPath('/contacto') },
      { label: t('footer.privacyPolicy'), href: localizedPath('/politica-privacidad') },
      { label: t('footer.legalNotice'), href: localizedPath('/aviso-legal') },
    ],
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value
    setSelectedTown(slug)
    if (slug) {
      navigate(localizedPath(`/servicios/${slug}`))
    }
  }

  const handleLocksmithTownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value
    setSelectedLocksmithTown(slug)
    if (slug) {
      navigate(localizedPath(`/cerrajero-24h/${slug}`))
    }
  }

  return (
    <footer className="relative bg-card border-t border-border/30 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute bottom-0 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to={localizedPath('/')} className="flex items-center gap-4 mb-8 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold">
                  <span className="text-primary-foreground font-bold text-2xl font-display">M</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  Metales Del Sureste
                </h3>
                <p className="text-sm text-primary font-semibold tracking-[0.15em] uppercase">Andaluz</p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              {t('footer.services')}
            </h4>
            <ul className="space-y-4">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              {t('footer.company')}
            </h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zonas de Servicio - Dropdown */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              {t('footer.serviceZones')}
            </h4>
            <div className="relative">
              <select
                value={selectedTown}
                onChange={handleTownChange}
                className="w-full h-12 px-4 pr-10 rounded-xl border border-border/50 bg-background text-foreground text-sm appearance-none cursor-pointer hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="">{t('footer.selectTown')}</option>
                {townsData.map((town) => (
                  <option key={town.slug} value={town.slug}>
                    {town.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {t('footer.metalworkByZone')}
            </p>
          </div>

          {/* Cerrajero 24h - Dropdown */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              {t('footer.locksmith24h')}
            </h4>
            <div className="relative">
              <select
                value={selectedLocksmithTown}
                onChange={handleLocksmithTownChange}
                className="w-full h-12 px-4 pr-10 rounded-xl border border-border/50 bg-background text-foreground text-sm appearance-none cursor-pointer hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="">{t('footer.selectTown')}</option>
                {locksmith24hData.map((town) => (
                  <option key={town.slug} value={town.slug}>
                    {town.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {t('footer.urgenciesInZone')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              {t('footer.contactTitle')}
            </h4>
            <div className="space-y-5">
              <a href="tel:+34653940750" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="icon-container w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">+34 653 94 07 50</span>
              </a>
              <a href="mailto:info@metalesdelsureste.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="icon-container w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">info@metalesdelsureste.com</span>
              </a>
              <div className="flex items-start gap-4 text-muted-foreground">
                <div className="icon-container w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">C/ Paraje La Ventica, 8<br />Huércal-Overa, Almería</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-10 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Metales Del Sureste Andaluz. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <p className="text-muted-foreground text-sm">
              {t('footer.designedWith')} <span className="text-primary">&#10084;</span> {t('footer.in')} <a href="https://platanitorico.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Platanito Rico</a>
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              className="icon-container w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
