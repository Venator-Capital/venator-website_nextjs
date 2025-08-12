'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            {/* Brand */}
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-teal-500 to-cyan-400"></div>
              <span className="text-lg font-medium" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
                Venator Capital
              </span>
            </a>
            
            {/* Description */}
            <p className="mt-3 text-sm text-gray-400 max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="mt-4 flex items-center gap-3">
              <a href="mailto:hello@venator.capital" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                {t('footer.contact')}
              </a>
              <span className="text-gray-700">•</span>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {t('footer.location')}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-medium text-gray-300">{t('footer.navigate')}</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-teal-300">{t('nav.about')}</a></li>
              <li><a href="#services" className="hover:text-teal-300">{t('nav.services')}</a></li>
              <li><a href="#work" className="hover:text-teal-300">{t('nav.work')}</a></li>
              <li><a href="#contact" className="hover:text-teal-300">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-medium text-gray-300">{t('footer.legal')}</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-teal-300">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-teal-300">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-teal-300">{t('footer.social.twitter')}</a>
            <a href="#" className="hover:text-teal-300">{t('footer.social.dribbble')}</a>
            <a href="#" className="hover:text-teal-300">{t('footer.social.github')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}