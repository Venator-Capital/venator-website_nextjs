'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimationWithDelay } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { t } = useLanguage();
  
  const { ref: badgeRef, shouldAnimate: badgeAnimate } = useScrollAnimationWithDelay(0);
  const { ref: titleRef, shouldAnimate: titleAnimate } = useScrollAnimationWithDelay(100);
  const { ref: subtitleRef, shouldAnimate: subtitleAnimate } = useScrollAnimationWithDelay(200);
  const { ref: statsRef, shouldAnimate: statsAnimate } = useScrollAnimationWithDelay(300);
  const { ref: ctaRef, shouldAnimate: ctaAnimate } = useScrollAnimationWithDelay(350);
  const { ref: imagesRef, shouldAnimate: imagesAnimate } = useScrollAnimationWithDelay(50);

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <p 
              ref={badgeRef}
              className={`text-sm font-medium uppercase tracking-wider text-teal-300/90 transition-all duration-600 ${
                badgeAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t('about.badge')}
            </p>

            {/* Title */}
            <h2 
              ref={titleRef}
              className={`mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white transition-all duration-600 ${
                titleAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              {t('about.title')}
            </h2>

            {/* Subtitle */}
            <p 
              ref={subtitleRef}
              className={`mt-6 text-gray-400 text-lg transition-all duration-600 ${
                subtitleAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t('about.subtitle')}
            </p>

            {/* Stats */}
            <div 
              ref={statsRef}
              className={`mt-6 grid sm:grid-cols-2 gap-4 transition-all duration-600 ${
                statsAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="p-5 rounded-xl border border-white/10 bg-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-medium text-white">{t('about.stats.projects')}</p>
                    <p className="text-sm text-gray-400">{t('about.stats.projectsLabel')}</p>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl border border-white/10 bg-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-medium text-white">{t('about.stats.satisfaction')}</p>
                    <p className="text-sm text-gray-400">{t('about.stats.satisfactionLabel')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div 
              ref={ctaRef}
              className={`mt-6 transition-all duration-600 ${
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
            ref={imagesRef}
            className={`grid grid-cols-2 gap-4 transition-all duration-600 ${
              imagesAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-white/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-white">Team</p>
              </div>
            </div>
            <div className="w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-cyan-900/20 to-emerald-900/20 border border-white/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-white">Workspace</p>
              </div>
            </div>
            <div className="w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-emerald-900/20 to-fuchsia-900/20 border border-white/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-emerald-400 to-fuchsia-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-white">Concepts</p>
              </div>
            </div>
            <div className="w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-fuchsia-900/20 to-teal-900/20 border border-white/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-fuchsia-400 to-teal-400 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
                <p className="text-lg font-medium text-white">Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}