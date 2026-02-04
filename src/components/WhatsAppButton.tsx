import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { forwardRef } from 'react'

const WHATSAPP_NUMBER = '34653940750'
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me gustaría solicitar información sobre sus servicios de carpintería metálica.')

const MotionLink = motion.create(
  forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>((props, ref) => (
    <a ref={ref} {...props} />
  ))
)

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  return (
    <MotionLink
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: 'spring', stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Outer pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" style={{ animationDuration: '2s' }} />

      {/* Inner glow */}
      <span className="absolute inset-0 rounded-full bg-green-500/20 blur-md scale-150" />

      {/* Button */}
      <motion.div
        className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(34,197,94,0.4)]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-8 h-8 text-white" fill="currentColor" />
      </motion.div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="card-premium text-foreground text-sm font-semibold px-5 py-3 rounded-xl shadow-elevated whitespace-nowrap">
          ¿Necesitas ayuda?
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-card rotate-45 border-r border-t border-border/50" />
        </div>
      </div>
    </MotionLink>
  )
}
