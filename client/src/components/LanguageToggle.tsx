import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en' 
            ? 'bg-accent-gold text-primary-black' 
            : 'bg-transparent text-gray-300 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => setLanguage('ja')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'ja' 
            ? 'bg-accent-gold text-primary-black' 
            : 'bg-transparent text-gray-300 hover:text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        JP
      </motion.button>
    </div>
  );
}