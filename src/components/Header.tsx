import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, Clock, Siren } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-glass-heavy border-b border-border/30 shadow-elevated'
        : 'bg-transparent'
        }`}
    >
      {/* Top bar */}
      <div className={`hidden lg:block border-b border-border/20 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-8 text-muted-foreground">
            <a href="tel:+34653940750" className="flex items-center gap-2 hover:text-primary transition-colors duration-300 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-medium">+34 653 94 07 50</span>
            </a>
            <a href="mailto:info@metalesdelsureste.com" className="flex items-center gap-2 hover:text-primary transition-colors duration-300 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-medium">info@metalesdelsureste.com</span>
            </a>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
            <Link to="/cerrajero-24h" className="flex items-center gap-2 group">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </div>
              <span className="font-bold text-red-600 group-hover:text-red-700 transition-colors uppercase tracking-wide text-[10px] sm:text-xs">Cerrajero 24h</span>
            </Link>

            <Link to="/carpinteria-metalica-zona" className="flex items-center gap-2 group">
              <div className="relative flex h-2.5 w-2.5">
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </div>
              <span className="font-bold text-primary group-hover:text-yellow-600 transition-colors uppercase tracking-wide text-[10px] sm:text-xs">Carpintería Metálica</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>Lun - Vie: 9:00 - 20:00</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`container mx-auto px-6 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-5'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold group-hover:shadow-gold-intense transition-all duration-300">
                <span className="text-primary-foreground font-bold text-2xl font-display">M</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-gold rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground leading-tight tracking-tight">
                Metales Del Sureste
              </h1>
              <p className="text-sm text-primary font-semibold tracking-[0.2em] uppercase">Andaluz</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative text-foreground/80 hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wider group ${isActive ? 'text-foreground' : ''}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-gold transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              )
            })}
            <Link to="/contacto" className="btn-premium ml-4">
              Pedir Presupuesto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-muted/50 text-foreground hover:text-primary hover:bg-muted transition-all duration-300"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-glass-heavy border-t border-border/30"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href
                return (
                  <motion.div key={link.href}>
                    <Link
                      to={link.href}
                      className={`block text-lg text-foreground hover:text-primary transition-colors font-medium py-4 px-4 rounded-xl hover:bg-muted/50 border-b border-border/30 ${isActive ? 'text-primary bg-muted/30' : ''}`}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contacto" className="btn-premium mt-6 w-full text-center block">
                  Pedir Presupuesto
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 pt-6 border-t border-border/30 space-y-4"
              >
                <a href="tel:+34653940750" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">+34 653 94 07 50</span>
                </a>
                <a href="mailto:info@metalesdelsureste.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">info@metalesdelsureste.com</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
