import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-gray-800/50 rounded-lg p-1 border border-gray-700">
      <motion.button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
          language === 'en' 
            ? 'bg-accent-gold text-primary-black shadow-sm' 
            : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        English
      </motion.button>
      <motion.button
        onClick={() => setLanguage('ja')}
        className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
          language === 'ja' 
            ? 'bg-accent-gold text-primary-black shadow-sm' 
            : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        日本語
      </motion.button>
    </div>
  );
}