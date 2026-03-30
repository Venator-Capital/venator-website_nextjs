'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div 
      className="flex items-center space-x-2 bg-zinc-900/50 rounded-lg p-1 border border-white/10 backdrop-blur-sm"
      role="group"
      aria-label="Language selection"
    >
      <div className="hidden sm:flex items-center mr-1 text-gray-400 text-sm">
        <Globe className="w-4 h-4 mr-1" />
        <span className="sr-only">Language:</span>
      </div>
      
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={language === 'en' ? '' : 'text-gray-400 hover:text-white'}
      >
        {t('language.en')}
      </Button>
      
      <Button
        variant={language === 'ja' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ja')}
        className={language === 'ja' ? '' : 'text-gray-400 hover:text-white'}
      >
        {t('language.ja')}
      </Button>
    </div>
  );
}