'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '@/locales/en.json';
import jaTranslations from '@/locales/ja.json';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: enTranslations,
  ja: jaTranslations,
};

// Helper function to safely get nested object values
function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (!isClient) return;

    // Check localStorage first (simpler and more reliable)
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ja')) {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    } else {
      // Check browser language
      const browserLang = navigator.language.toLowerCase();
      const defaultLang = browserLang.startsWith('ja') ? 'ja' : 'en';
      setLanguage(defaultLang);
      localStorage.setItem('language', defaultLang);
      document.documentElement.lang = defaultLang;
    }
  }, [isClient]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window === 'undefined') return;
    
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Trigger a re-render
    window.dispatchEvent(new Event('languagechange'));
  };

  const t = (key: string): string => {
    const translationData = translations[language];
    const value = getNestedValue(translationData, key);
    
    // In development, warn about missing translations
    if (process.env.NODE_ENV === 'development' && value === key) {
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
    }
    
    return value;
  };

  // Prevent hydration issues by returning consistent content during SSR
  if (!isClient) {
    return (
      <LanguageContext.Provider value={{ language: 'en', setLanguage: () => {}, t: (key) => key }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}