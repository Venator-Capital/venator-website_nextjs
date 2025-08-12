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
  const { ref: statsRef, shouldAnimate: statsAnimate } = useScrollAnimationWithDelay<HTMLDivElement>(400);
  const { ref: partnersRef, shouldAnimate: partnersAnimate } = useScrollAnimationWithDelay<HTMLDivElement>(500);

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28 pb-16">
      {/* CSS-based animated background (temporary replacement for 3D) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-teal-900/20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-teal-500/10 animate-pulse"></div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
              className={`mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight font-medium tracking-tight transition-all duration-600 ${
                titleAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p 
              ref={subtitleRef}
              className={`mt-6 text-lg text-gray-300 max-w-xl transition-all duration-600 ${
                subtitleAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t('hero.subtitle')}
            </p>

            {/* Buttons */}
            <div 
              ref={buttonsRef}
              className={`mt-8 flex flex-col sm:flex-row gap-3 transition-all duration-600 ${
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

            {/* Stats */}
            <div 
              ref={statsRef}
              className={`mt-8 flex items-center gap-6 transition-all duration-600 ${
                statsAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=320&q=80" alt="Avatar" className="w-9 h-9 rounded-full border-2 border-black object-cover" />
                <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bcaefeee-31cd-4c69-9a33-39ee0ad78c30_320w.jpg" alt="Avatar" className="w-9 h-9 rounded-full border-2 border-black object-cover" />
                <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/468105fe-8942-4e2b-a1a3-7023da9fd488_320w.jpg" alt="Avatar" className="w-9 h-9 rounded-full border-2 border-black object-cover" />
                <div className="w-9 h-9 rounded-full border-2 border-black bg-teal-400 flex items-center justify-center text-black text-xs font-medium">50+</div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-100">Trusted by 50+ companies</p>
                <p className="text-sm text-gray-400">From startups to enterprises</p>
              </div>
            </div>
          </div>

          {/* Right side - Image/Stats */}
          <div className="relative">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900/40 transition-all duration-600 ${
                titleAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
            >
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff6e51d4-782c-4d82-bd46-0c123b22c9e4_1600w.jpg" alt="Design workspace" className="w-full h-[460px] object-cover" />
              
              {/* Stat Badges */}
              <div className="absolute top-4 right-4 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-black/80 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex bg-gray-800 rounded-full items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-200">
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Conversion Rate</p>
                    <p className="text-lg font-semibold text-white">+147%</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-black/80 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex bg-gray-800 rounded-full items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Engagement</p>
                    <p className="text-lg font-semibold text-white">+89%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div
          ref={partnersRef}
          className={`mt-12 border-t border-white/10 pt-8 transition-all duration-600 ${
            partnersAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-center text-sm text-gray-400 mb-6">Trusted by leading brands</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {[
              { name: 'Nexus Labs', icon: 'zap' },
              { name: 'Velocity', icon: 'rocket' },
              { name: 'Fortress', icon: 'shield' },
              { name: 'Orbit', icon: 'globe' },
              { name: 'Prism', icon: 'diamond' }
            ].map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center justify-center gap-2 text-gray-400 hover:text-teal-300 transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  {partner.icon === 'zap' && <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1 .86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>}
                  {partner.icon === 'rocket' && (
                    <>
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </>
                  )}
                  {partner.icon === 'shield' && <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>}
                  {partner.icon === 'globe' && (
                    <>
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </>
                  )}
                  {partner.icon === 'diamond' && <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>}
                </svg>
                <span className="text-sm">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}