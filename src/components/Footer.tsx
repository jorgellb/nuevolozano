import { Phone, Mail, MapPin, ArrowUp, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { townsData } from '@/data/townsData'
import { locksmith24hData } from '@/data/locksmith24hData'

const footerLinks = {
  servicios: [
    { label: 'Estructuras Metálicas', href: '/servicio/estructuras-metalicas' },
    { label: 'Carpintería de Aluminio', href: '/servicio/carpinteria-aluminio' },
    { label: 'Cerrajería', href: '/servicio/cerrajeria' },
    { label: 'Automatización de Puertas', href: '/servicio/automatizacion' },
    { label: 'Forja Artística', href: '/servicio/forja-artistica' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#nosotros' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Política de Privacidad', href: '/politica-privacidad' },
    { label: 'Aviso Legal', href: '/aviso-legal' },
  ],
}



export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  const [selectedTown, setSelectedTown] = useState('')
  const [selectedLocksmithTown, setSelectedLocksmithTown] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value
    setSelectedTown(slug)
    if (slug) {
      navigate(`/servicios/${slug}`)
    }
  }

  const handleLocksmithTownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value
    setSelectedLocksmithTown(slug)
    if (slug) {
      navigate(`/cerrajero-24h/${slug}`)
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
            <Link to="/" className="flex items-center gap-4 mb-8 group">
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
              Especialistas en carpintería metálica con más de 20 años de experiencia.
              Calidad, profesionalismo y compromiso en cada proyecto.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              Servicios
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
              Empresa
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
              Zonas de Servicio
            </h4>
            <div className="relative">
              <select
                value={selectedTown}
                onChange={handleTownChange}
                className="w-full h-12 px-4 pr-10 rounded-xl border border-border/50 bg-background text-foreground text-sm appearance-none cursor-pointer hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="">Selecciona tu pueblo</option>
                {townsData.map((town) => (
                  <option key={town.slug} value={town.slug}>
                    {town.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Carpintería metálica por zona
            </p>
          </div>

          {/* Cerrajero 24h - Dropdown */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              Cerrajero 24h
            </h4>
            <div className="relative">
              <select
                value={selectedLocksmithTown}
                onChange={handleLocksmithTownChange}
                className="w-full h-12 px-4 pr-10 rounded-xl border border-border/50 bg-background text-foreground text-sm appearance-none cursor-pointer hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="">Selecciona tu pueblo</option>
                {locksmith24hData.map((town) => (
                  <option key={town.slug} value={town.slug}>
                    {town.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Urgencias 24h en tu zona
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              Contacto
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
            © {currentYear} Metales Del Sureste Andaluz. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-muted-foreground text-sm">
              Diseñado con <span className="text-primary">❤</span> en <a href="https://platanitorico.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Platanito Rico</a>
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              className="icon-container w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
