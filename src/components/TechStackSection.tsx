'use client';

import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { useLanguage } from '@/contexts/LanguageContext';

// Venator Capital のテックスタック
const techStackSlugs = [
  // AI/ML Technologies
  "python",
  "pytorch",
  "tensorflow",
  "huggingface",
  "openai",

  // Cloud Platforms
  "amazonaws",
  "googlecloud",
  "microsoft",

  // Development & Frameworks
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "nodejs",
  "fastapi",

  // Databases & Storage
  "postgresql",
  "mongodb",
  "redis",
  "supabase",

  // DevOps & Infrastructure
  "docker",
  "kubernetes",
  "nginx",
  "vercel",
  "github",

  // Design & Collaboration
  "figma",
  "notion",
  "slack",

  // Additional Tools
  "stripe",
  "anthropic", // これはカスタムで追加が必要かもしれません
];

export default function TechStackSection() {
  const { t } = useLanguage();

  return (
    <section id="tech-stack" className="relative z-10 py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-teal-300/90">{t('techStack.badge')}</p>
            <h2
              className="section-title mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white break-keep leading-snug pb-0.5"
              style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}
            >
              {t('techStack.title')}
            </h2>
            <p className="description mt-6 text-gray-400 text-lg break-keep leading-relaxed">
              {t('techStack.subtitle')}
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl border border-white/10 bg-gray-900/40">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-teal-400">
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{t('techStack.frameworks.title')}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t('techStack.frameworks.description')}</p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-gray-900/40">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-purple-400">
                    <path d="M4 11a9 9 0 0 1 9 9"></path>
                    <path d="M4 4a16 16 0 0 1 16 16"></path>
                    <circle cx="5" cy="19" r="1"></circle>
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{t('techStack.cloud.title')}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t('techStack.cloud.description')}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <IconCloud iconSlugs={techStackSlugs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}