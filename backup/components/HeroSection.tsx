'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Beams from '@/components/backgrounds/Beams';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/blueprint';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure language context is properly initialized
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToCapabilities = () => {
    const element = document.getElementById('capabilities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isLoaded) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={1.5}
            beamHeight={25}
            beamNumber={32}
            lightColor="#ffffff"
            speed={8.7}
            noiseIntensity={1.4}
            scale={0.25}
            rotation={30}
          />
        </div>
        <div className="relative z-10 text-center">
          <div className="animate-pulse">
            <div className="h-20 bg-white/10 rounded-lg mb-6 w-96 mx-auto"></div>
            <div className="h-8 bg-white/10 rounded-lg mb-8 w-80 mx-auto"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-12 bg-white/10 rounded-lg w-48"></div>
              <div className="h-12 bg-white/10 rounded-lg w-48"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Beams Background */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={1.5}
          beamHeight={25}
          beamNumber={32}
          lightColor="#ffffff"
          speed={8.7}
          noiseIntensity={1.4}
          scale={0.25}
          rotation={30}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {t('hero.title')}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={handleScrollToCapabilities}
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            {t('hero.exploreButton')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            onClick={handleScrollToContact}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.contactButton')}
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white cursor-pointer"
            onClick={handleScrollToCapabilities}
          >
            <ChevronDown className="h-8 w-8 mx-auto mb-2" />
            <span className="text-sm text-gray-300">{t('hero.scrollText')}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-20 right-10 z-10 hidden lg:block"
      >
        <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-32 left-10 z-10 hidden lg:block"
      >
        <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-pulse" />
      </motion.div>
    </section>
  );
}