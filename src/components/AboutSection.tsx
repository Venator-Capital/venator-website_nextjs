'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimationWithDelay } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { t } = useLanguage();
  
  const { ref: badgeRef, shouldAnimate: badgeAnimate } = useScrollAnimationWithDelay(0);
  const { ref: titleRef, shouldAnimate: titleAnimate } = useScrollAnimationWithDelay(100);
  const { ref: subtitleRef, shouldAnimate: subtitleAnimate } = useScrollAnimationWithDelay(200);
  const { ref: ctaRef, shouldAnimate: ctaAnimate } = useScrollAnimationWithDelay(300);
  const { ref: imagesRef, shouldAnimate: imagesAnimate } = useScrollAnimationWithDelay(50);

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <p 
              // @ts-expect-error scroll hook returns generic HTMLElement ref
              ref={badgeRef}
              className={`text-sm font-medium uppercase tracking-wider text-teal-300/90 transition-all duration-600 ${
                badgeAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t('about.badge')}
            </p>

            {/* Title */}
                   <h2
                     // @ts-expect-error scroll hook returns generic HTMLElement ref
                     ref={titleRef}
                     className={`hero-title mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white transition-all duration-600 ${
                       titleAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                     }`}
                     style={{ 
                       fontFamily: 'Plus Jakarta Sans, Inter, sans-serif'
                     }}
                   >
                    {t('about.title')}
                  </h2>

                  {/* Subtitle */}
                  <p
                    // @ts-expect-error scroll hook returns generic HTMLElement ref
                    ref={subtitleRef}
                    className={`description mt-8 text-gray-400 text-lg leading-relaxed transition-all duration-600 ${
                      subtitleAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {t('about.subtitle')}
                  </p>

            {/* CTA */}
            <div 
              // @ts-expect-error scroll hook returns generic HTMLElement ref
              ref={ctaRef}
              className={`mt-12 transition-all duration-600 ${
                ctaAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a href="#services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02]">
                {t('about.cta')}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Image Grid */}
          <div 
            // @ts-expect-error scroll hook returns generic HTMLElement ref
            ref={imagesRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-600 ${
              imagesAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-white/10 rounded-xl flex items-center justify-center p-4 sm:p-6">
              <div className="text-center px-2">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M12 6V2H8"></path>
                    <path d="m8 18-4-4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"></path>
                    <path d="M12 12h.01"></path>
                    <path d="M16 16h.01"></path>
                    <path d="M8 16h.01"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-white mb-2">{t('about.features.rapidDeployment.title')}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{t('about.features.rapidDeployment.description')}</p>
              </div>
            </div>
            <div className="w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-cyan-900/20 to-emerald-900/20 border border-white/10 rounded-xl flex items-center justify-center p-4 sm:p-6">
              <div className="text-center px-2">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <p className="text-lg font-medium text-white mb-2">{t('about.features.fullStackAI.title')}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{t('about.features.fullStackAI.description')}</p>
              </div>
            </div>
            <div className="w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-emerald-900/20 to-fuchsia-900/20 border border-white/10 rounded-xl flex items-center justify-center p-4 sm:p-6">
              <div className="text-center px-2">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-emerald-400 to-fuchsia-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <p className="text-lg font-medium text-white mb-2">{t('about.features.customSolutions.title')}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{t('about.features.customSolutions.description')}</p>
              </div>
            </div>
            <div className="w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-fuchsia-900/20 to-teal-900/20 border border-white/10 rounded-xl flex items-center justify-center p-4 sm:p-6">
              <div className="text-center px-2">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-fuchsia-400 to-teal-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-white mb-2">{t('about.features.roiFocused.title')}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{t('about.features.roiFocused.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}