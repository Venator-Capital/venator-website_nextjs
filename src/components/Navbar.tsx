'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const closeMobile = () => setIsMobileOpen(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.getElementById('site-header')?.offsetHeight || 0;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    closeMobile();
  };

  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="h-full flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-teal-500 to-cyan-400"></div>
            <span className="text-lg font-medium tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
              Venator Capital
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300">
              {t('nav.home')}
            </a>
            <a href="#about" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300">
              {t('nav.about')}
            </a>
            <a href="#services" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300">
              {t('nav.services')}
            </a>
            <a href="#work" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300">
              {t('nav.work')}
            </a>
            <a href="#contact" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300">
              {t('nav.contact')}
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500">
              {t('nav.cta')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <button 
              onClick={toggleMobile}
              className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-panel"
            >
              {isMobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 12h16"></path>
                  <path d="M4 18h16"></path>
                  <path d="M4 6h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Panel */}
      <div 
        id="mobile-panel" 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobile}></div>
        <div className={`absolute inset-x-0 top-0 bg-gray-950/95 border-b border-gray-900 px-4 sm:px-6 pt-20 pb-8 transition-all duration-300 ${
          isMobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-4">
              {[
                { href: '#home', label: t('nav.home') },
                { href: '#about', label: t('nav.about') },
                { href: '#services', label: t('nav.services') },
                { href: '#work', label: t('nav.work') },
                { href: '#contact', label: t('nav.contact') }
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors text-left w-full"
                >
                  <span className="text-base font-medium text-gray-100">{item.label}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </button>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]">
                {t('nav.cta')}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}