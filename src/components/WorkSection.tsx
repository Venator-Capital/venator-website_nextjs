'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimationWithDelay } from '@/hooks/useScrollAnimation';

export interface UseCase {
  id: number;
  title: string;
  description: string;
  tags: string[];
  metrics: string;
  metricLabel: string;
  icon?: string;
  status?: string;
  timeline?: string;
}

export default function WorkSection() {
  const { t } = useLanguage();
  
  const { ref: badgeRef, shouldAnimate: badgeAnimate } = useScrollAnimationWithDelay(0);
  const { ref: titleRef, shouldAnimate: titleAnimate } = useScrollAnimationWithDelay(100);
  const { ref: ctaRef, shouldAnimate: ctaAnimate } = useScrollAnimationWithDelay(100);
  const { ref: projectsRef, shouldAnimate: projectsAnimate } = useScrollAnimationWithDelay(100);

  const useCases: UseCase[] = [
    {
      id: 1,
      title: 'AI/ML Development',
      description: 'Custom AI system design for solving enterprise-specific challenges from requirements to production deployment.',
      tags: ['TensorFlow', 'AWS SageMaker'],
      metrics: '85%',
      metricLabel: 'Implementation',
      status: 'Operational',
      timeline: '3-6 months'
    },
    {
      id: 2,
      title: 'System Integration',
      description: 'Seamless integration of AI models into existing on-premise and cloud systems to enhance business processes.',
      tags: ['Docker', 'Kubernetes'],
      metrics: '78%',
      metricLabel: 'Implementation', 
      status: 'Operational',
      timeline: '2-4 months'
    },
    {
      id: 3,
      title: 'Process Automation',
      description: 'Build intelligent automation workflows with AI inference using n8n and Zapier to streamline operations.',
      tags: ['n8n', 'Google Cloud'],
      metrics: '65%',
      metricLabel: 'Implementation',
      status: 'In Progress',
      timeline: '1-3 months'
    },
    {
      id: 4,
      title: 'Predictive Analytics',
      description: 'Time-series forecasting models for demand prediction and failure detection to support strategic decision-making.',
      tags: ['LSTM', 'Grafana'],
      metrics: '82%',
      metricLabel: 'Implementation',
      status: 'Operational',
      timeline: '2-5 months'
    },
    {
      id: 5,
      title: 'MLOps & Model Deployment',
      description: 'Robust MLOps pipelines for continuous model deployment, monitoring, and lifecycle management.',
      tags: ['CI/CD', 'Kubernetes'],
      metrics: '91%',
      metricLabel: 'Implementation',
      status: 'MVP',
      timeline: '4-8 months'
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-950">
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
              {t('work.badge')}
            </p>

            {/* Title */}
            <h2 
              ref={titleRef}
              className={`mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white transition-all duration-600 ${
                titleAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              {t('work.title')}
            </h2>
          </div>

          {/* CTA */}
          <a 
            ref={ctaRef}
            href="#contact" 
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02] ${
              ctaAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t('work.cta')}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
              <path d="m21 3 1 11h-2"></path>
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
              <path d="M3 4h8"></path>
            </svg>
          </a>
        </div>

        {/* Use Cases Grid */}
        <div 
          ref={projectsRef}
          className={`mt-10 grid lg:grid-cols-3 gap-6 transition-all duration-600 ${
            projectsAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {useCases.map((useCase, index) => (
            <article
              key={useCase.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black"
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: projectsAnimate ? 1 : 0,
                transform: projectsAnimate ? 'translateY(0px)' : 'translateY(16px)'
              }}
            >
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {useCase.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{useCase.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span className="text-gray-200 font-medium">{useCase.metrics}</span> {useCase.metricLabel}
                  </div>
                  <a href="#contact" className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
