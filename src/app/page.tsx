'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import LoadingScreen from '@/components/LoadingScreen';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t: _t } = useLanguage();
  const [showLoading, setShowLoading] = useState(true);

  // Fail-safe: ensure loading screen disappears even if onComplete is missed
  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <ContactSection />
    </Layout>
  );
}