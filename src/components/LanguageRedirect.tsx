import { Navigate, useLocation } from 'react-router-dom'
import { defaultLanguage, supportedLanguages } from '@/i18n'

export const LanguageRedirect = () => {
  const location = useLocation()
  
  // Detect browser language
  const browserLang = navigator.language?.split('-')[0] || defaultLanguage
  const targetLang = supportedLanguages.includes(browserLang as any) ? browserLang : defaultLanguage
  
  // If we're at root, redirect to /{lang}
  if (location.pathname === '/') {
    return <Navigate to={`/${targetLang}`} replace />
  }
  
  // For legacy routes without lang prefix, prepend the lang
  return <Navigate to={`/${targetLang}${location.pathname}`} replace />
}
