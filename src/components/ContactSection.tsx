'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimationWithDelay } from '@/hooks/useScrollAnimation';

export default function ContactSection() {
  const { t } = useLanguage();

  const { ref: titleRef, shouldAnimate: titleAnimate } = useScrollAnimationWithDelay(0);
  const { ref: subtitleRef, shouldAnimate: subtitleAnimate } = useScrollAnimationWithDelay(100);
  const { ref: ctaRef, shouldAnimate: ctaAnimate } = useScrollAnimationWithDelay(200);

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>

            {/* Title */}
            <h2
              // @ts-expect-error scroll hook returns generic HTMLElement ref
              ref={titleRef}
              className={`hero-title mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white transition-all duration-600 ${
                titleAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              {t('contact.title')}
            </h2>

            {/* Subtitle */}
            <div
              // @ts-expect-error scroll hook returns generic HTMLElement ref
              ref={subtitleRef}
              className={`description mt-12 text-gray-400 transition-all duration-600 leading-relaxed ${
                subtitleAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="mb-3">{t('contact.subtitle.part1')}</p>
              <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('contact.subtitle.part2') }}></p>
            </div>

          </div>

          {/* CTA Section */}
          <div
            // @ts-expect-error scroll hook returns generic HTMLElement ref
            ref={ctaRef}
            className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black transition-all duration-600 ${
              ctaAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-4">{t('contact.cta.title')}</h3>
            <p className="text-gray-400 mb-6">{t('contact.cta.description')}</p>

            <div className="space-y-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6yXO9j6Y5o8FNNvO25amJj7rv8iVlo-wr_8J6iU3Q4apzPw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
                {t('contact.cta.googleForm')}
              </a>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-black text-gray-400">{t('contact.cta.or')}</span>
                </div>
              </div>

              <a
                href="mailto:info@venator-capital.net"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all hover:scale-[1.02]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-10 5L2 7"></path>
                </svg>
                {t('contact.cta.email')}
              </a>
            </div>

            <p className="mt-6 text-xs text-gray-500 text-center">
              {t('contact.cta.hint')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}