import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, Shield } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'cookie-consent'

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto">
            <div className="card-premium rounded-2xl p-6 md:p-8 md:flex md:items-center md:justify-between gap-8 shadow-elevated relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

              <div className="flex items-start gap-5 mb-6 md:mb-0 relative z-10">
                <div className="icon-container w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
                    Utilizamos Cookies
                    <Shield className="w-4 h-4 text-primary" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    Usamos cookies para mejorar tu experiencia de navegación, mostrar anuncios
                    personalizados y analizar el tráfico. Al hacer clic en "Aceptar", consientes
                    el uso de todas las cookies.{' '}
                    <a href="#" className="text-primary hover:underline font-medium">
                      Política de Cookies
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0 relative z-10">
                <button
                  onClick={handleReject}
                  className="btn-outline-premium px-6 py-3 text-sm"
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAccept}
                  className="btn-premium px-6 py-3 text-sm"
                >
                  Aceptar
                </button>
              </div>
              <button
                onClick={handleReject}
                className="absolute top-4 right-4 md:hidden text-muted-foreground hover:text-foreground transition-colors p-2"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
