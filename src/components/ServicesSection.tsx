'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimationWithDelay } from '@/hooks/useScrollAnimation';
import ServiceCard from './ServiceCard';
import { Compass, PenTool, Code2, BarChart3 } from 'lucide-react';

export default function ServicesSection() {
  const { t } = useLanguage();
  
  const { ref: badgeRef, shouldAnimate: badgeAnimate } = useScrollAnimationWithDelay<HTMLParagraphElement>(0);
  const { ref: titleRef, shouldAnimate: titleAnimate } = useScrollAnimationWithDelay<HTMLHeadingElement>(100);
  const { ref: ctaRef, shouldAnimate: ctaAnimate } = useScrollAnimationWithDelay<HTMLAnchorElement>(100);
  const { ref: cardsRef, shouldAnimate: cardsAnimate } = useScrollAnimationWithDelay<HTMLDivElement>(100);

  const services = [
    {
      key: 'strategy',
      icon: Compass,
      color: 'teal' as const,
      delay: 100
    },
    {
      key: 'design',
      icon: PenTool,
      color: 'cyan' as const,
      delay: 150
    },
    {
      key: 'engineering',
      icon: Code2,
      color: 'emerald' as const,
      delay: 200
    },
    {
      key: 'analytics',
      icon: BarChart3,
      color: 'fuchsia' as const,
      delay: 250
    }
  ];

  return (
    <section id="services" className="py-20 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(45,212,191,0.08),transparent_70%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            {/* Badge */}
            <p 
              ref={badgeRef}
              className={`text-sm font-medium uppercase tracking-wider text-teal-300/90 transition-all duration-600 ${
                badgeAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t('services.badge')}
            </p>

            {/* Title */}
            <h2 
              ref={titleRef}
              className={`mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white transition-all duration-600 ${
                titleAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              {t('services.title')}
            </h2>
          </div>

          {/* CTA */}
          <a 
            ref={ctaRef}
            href="#contact" 
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-gray-100 hover:bg-white/15 border border-white/10 transition-all hover:scale-[1.02] ${
              ctaAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t('services.cta')}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

        {/* Services Grid */}
        <div 
          ref={cardsRef}
          className={`mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-600 ${
            cardsAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {services.map((service) => {
            const features = t(`services.items.${service.key}.features`);
            const safeFeatures = Array.isArray(features) ? features : ["Feature 1", "Feature 2"];
            
            return (
              <ServiceCard
                key={service.key}
                title={t(`services.items.${service.key}.title`)}
                description={t(`services.items.${service.key}.description`)}
                features={safeFeatures}
                icon={service.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
