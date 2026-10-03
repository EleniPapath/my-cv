import { useEffect, useState } from 'react'
import LanguageContext from './LanguageContext.js'
import { translations } from './translations.js'

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() =>
    localStorage.getItem('site-language') === 'en' ? 'en' : 'el',
  )

  useEffect(() => {
    document.documentElement.lang = language
    document.title = translations[language].common.siteTitle
    localStorage.setItem('site-language', language)
  }, [language])

  const value = {
    language,
    setLanguage,
    t: (key) => key.split('.').reduce((result, part) => result?.[part], translations[language]),
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
