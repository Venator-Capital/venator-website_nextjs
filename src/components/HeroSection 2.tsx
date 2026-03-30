'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimationWithDelay } from '@/hooks/useScrollAnimation';

export default function HeroSection() {
  const { t } = useLanguage();
  
  const { ref: badgeRef, shouldAnimate: badgeAnimate } = useScrollAnimationWithDelay<HTMLParagraphElement>(0);
  const { ref: titleRef, shouldAnimate: titleAnimate } = useScrollAnimationWithDelay<HTMLHeadingElement>(100);
  const { ref: subtitleRef, shouldAnimate: subtitleAnimate } = useScrollAnimationWithDelay<HTMLParagraphElement>(200);
  const { ref: buttonsRef, shouldAnimate: buttonsAnimate } = useScrollAnimationWithDelay<HTMLDivElement>(300);

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div>
            {/* Badge */}
            <p 
              ref={badgeRef}
              className={`text-sm font-medium uppercase tracking-wider text-teal-300/90 transition-all duration-600 ${
                badgeAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t('hero.badge')}
            </p>

            {/* Title */}
            <h1 
              ref={titleRef}
              className={`mt-4 text-5xl sm:text-6xl lg:text-7xl leading-tight font-medium tracking-tight transition-all duration-600 ${
                titleAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p 
              ref={subtitleRef}
              className={`mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-600 ${
                subtitleAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t('hero.subtitle')}
            </p>

            {/* Buttons */}
            <div 
              ref={buttonsRef}
              className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-600 ${
                buttonsAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]"
              >
                {t('hero.exploreButton')}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium bg-white/10 text-gray-100 hover:bg-white/15 border border-white/10 transition-all hover:scale-[1.02]"
              >
                {t('hero.contactButton')}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}