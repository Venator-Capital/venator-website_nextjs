'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimationWithDelay } from '@/hooks/useScrollAnimation';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
    nda: false
  });
  
  const { ref: badgeRef, shouldAnimate: badgeAnimate } = useScrollAnimationWithDelay<HTMLParagraphElement>(0);
  const { ref: titleRef, shouldAnimate: titleAnimate } = useScrollAnimationWithDelay<HTMLHeadingElement>(100);
  const { ref: subtitleRef, shouldAnimate: subtitleAnimate } = useScrollAnimationWithDelay<HTMLParagraphElement>(200);
  const { ref: infoRef, shouldAnimate: infoAnimate } = useScrollAnimationWithDelay<HTMLDivElement>(300);
  const { ref: formRef, shouldAnimate: formAnimate } = useScrollAnimationWithDelay<HTMLFormElement>(400);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            {/* Badge */}
            <p 
              ref={badgeRef}
              className={`text-sm font-medium uppercase tracking-wider text-teal-300/90 transition-all duration-600 ${
                badgeAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t('contact.badge')}
            </p>

            {/* Title */}
            <h2 
              ref={titleRef}
              className={`mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white transition-all duration-600 ${
                titleAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              {t('contact.title')}
            </h2>

            {/* Subtitle */}
            <p 
              ref={subtitleRef}
              className={`mt-4 text-gray-400 transition-all duration-600 ${
                subtitleAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t('contact.subtitle')}
            </p>

            {/* Info Cards */}
            <div 
              ref={infoRef}
              className={`mt-8 grid sm:grid-cols-2 gap-4 transition-all duration-600 ${
                infoAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="p-5 rounded-xl border border-white/10 bg-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                      <path d="M12 6v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">{t('contact.info.kickoff')}</p>
                    <p className="text-sm text-gray-400">{t('contact.info.kickoffValue')}</p>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl border border-white/10 bg-black/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">{t('contact.info.nda')}</p>
                    <p className="text-sm text-gray-400">{t('contact.info.ndaValue')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className={`p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black transition-all duration-600 ${
              formAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-1">
                  {t('contact.form.name')}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Alex Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="alex@company.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="budget" className="block text-sm text-gray-300 mb-1">
                {t('contact.form.budget')}
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">{t('contact.form.budgetOptions.placeholder')}</option>
                <option value="$10k – $25k">{t('contact.form.budgetOptions.option1')}</option>
                <option value="$25k – $50k">{t('contact.form.budgetOptions.option2')}</option>
                <option value="$50k – $100k">{t('contact.form.budgetOptions.option3')}</option>
                <option value="$100k+">{t('contact.form.budgetOptions.option4')}</option>
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="block text-sm text-gray-300 mb-1">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <input
                  id="nda"
                  name="nda"
                  type="checkbox"
                  checked={formData.nda}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-white/20 bg-black/60 text-teal-500 focus:ring-teal-500"
                />
                <label htmlFor="nda" className="text-sm text-gray-400">
                  {t('contact.form.ndaCheckbox')}
                </label>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium bg-teal-400 text-black hover:bg-teal-300 transition-all hover:scale-[1.02]"
              >
                {t('contact.form.submit')}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
              </button>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              {t('contact.form.hint')}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}