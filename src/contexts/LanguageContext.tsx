'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '@/locales/en.json';
import jaTranslations from '@/locales/ja.json';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: enTranslations,
  ja: jaTranslations,
};

// Helper function to safely get nested object values
function getNestedValue(obj: any, path: string): any {
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      console.warn(`Translation key not found: ${path} at ${key}`);
      return path; // Return the key if not found
    }
  }
  
  return current;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Check localStorage first (simpler and more reliable)
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ja')) {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    } else {
      // Always default to English
      const defaultLang: Language = 'en';
      setLanguage(defaultLang);
      localStorage.setItem('language', defaultLang);
      document.documentElement.lang = defaultLang;
    }
    
    // Mark as hydrated after all language logic
    setIsHydrated(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window === 'undefined') return;
    
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Trigger a re-render
    window.dispatchEvent(new Event('languagechange'));
  };

  const t = (key: string): any => {
    const translationData = translations[language];
    const value = getNestedValue(translationData, key);
    
    // In development, warn about missing translations
    if (process.env.NODE_ENV === 'development' && value === key) {
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
    }
    
    // Debug logging only for missing translations
    if (process.env.NODE_ENV === 'development' && value === key) {
      console.log(`Debug - Translation key: ${key}, value:`, value, `type:`, typeof value);
    }
    
    return value;
  };

  // Prevent hydration issues by returning consistent content during SSR
  if (!isHydrated) {
    const serverT = (key: string): any => {
      const translationData = translations['en']; // Default to English on server
      return getNestedValue(translationData, key);
    };
    
    return (
      <LanguageContext.Provider value={{ language: 'en', setLanguage: () => {}, t: serverT }}>
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