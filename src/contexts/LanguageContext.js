'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { translations } from '../lib/translations';

const LanguageContext = createContext();

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'it', name: 'Italiano' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' }
];

export function LanguageProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract current language from URL path
  const getLocaleFromPath = () => {
    const segments = pathname.split('/');
    const locale = segments[1];
    return ['en', 'it', 'es'].includes(locale) ? locale : 'en';
  };

  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Initialize language from URL on mount
  useEffect(() => {
    const localeFromPath = getLocaleFromPath();
    setCurrentLanguage(localeFromPath);
  }, [pathname, getLocaleFromPath]);

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setCurrentLanguage(langCode);

      // Navigate to the new locale URL
      const segments = pathname.split('/');
      segments[1] = langCode; // Replace the locale segment
      const newPath = segments.join('/');

      router.push(newPath);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback to English if translation not found
    if (!value) {
      value = translations.en;
      for (const k of keys) {
        value = value?.[k];
      }
    }
    
    return value || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
