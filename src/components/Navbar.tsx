'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [_isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
          <a href={pathname === '/' ? '#home' : '/'} className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md">
            <img 
              src="/hexagon-logo.png" 
              alt="" 
              className="h-8 w-8 object-contain" 
            />
            <span className="text-lg font-medium tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
              {t('nav.brand')}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href={pathname === '/' ? '#home' : '/#home'} className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300">
              {t('nav.home')}
            </a>
            <a href={pathname === '/' ? '#services' : '/#services'} className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300">
              {t('nav.services')}
            </a>
            <a href="/company" className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300">
              {t('footer.company')}
            </a>
            <a href={pathname === '/' ? '#contact' : '/#contact'} className="group text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors bg-gradient-to-r from-teal-400 to-teal-400 bg-left-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-[background-size] duration-300">
              {t('nav.contact')}
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center border border-white/10 rounded-lg bg-black/40 p-0.5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  language === 'en'
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ja')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  language === 'ja'
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                日本語
              </button>
            </div>

            <a href={pathname === '/' ? '#contact' : '/#contact'} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500">
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
                { href: pathname === '/' ? '#home' : '/#home', label: t('nav.home') },
                { href: pathname === '/' ? '#services' : '/#services', label: t('nav.services') },
                { href: '/company', label: t('footer.company') },
                { href: pathname === '/' ? '#contact' : '/#contact', label: t('nav.contact') }
              ].map((item) => (
                item.href.startsWith('/') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-900 border border-transparent hover:border-gray-800 transition-colors text-left w-full"
                  >
                    <span className="text-base font-medium text-gray-100">{item.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                ) : (
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
                )
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              {/* Mobile Language Toggle */}
              <div className="flex items-center border border-white/10 rounded-lg bg-black/40 p-0.5">
                <button
                  onClick={() => {
                    setLanguage('en');
                    closeMobile();
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    language === 'en'
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    setLanguage('ja');
                    closeMobile();
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    language === 'ja'
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  JP
                </button>
              </div>

              <a href={pathname === '/' ? '#contact' : '/#contact'} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]">
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