import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationDictionary, TRANSLATIONS } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  isTR: boolean;
  isEN: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('preferred_language');
      if (saved === 'en' || saved === 'tr') {
        return saved;
      }
    } catch {
      // Ignore localStorage access errors
    }
    return 'tr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('preferred_language', lang);
    } catch {
      // Ignore
    }
  };

  useEffect(() => {
    try {
      document.documentElement.lang = language;
      if (language === 'en') {
        document.title = 'Uretici Tedarik | Engineering Plastics, CNC Machining & Metal Alloys';
      } else {
        document.title = 'Üretici Tedarik | Mühendislik Plastikleri & Metal İmalatı';
      }
    } catch {
      // Ignore
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: TRANSLATIONS[language] || TRANSLATIONS.tr,
    isTR: language === 'tr',
    isEN: language === 'en',
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback if rendered outside provider
    return {
      language: 'tr',
      setLanguage: () => {},
      t: TRANSLATIONS.tr,
      isTR: true,
      isEN: false,
    };
  }
  return context;
}
