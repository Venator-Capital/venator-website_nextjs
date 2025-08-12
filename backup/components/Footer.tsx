'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  IconHome,
  IconSettings,
  IconBriefcase,
  IconCpu,
  IconHelpCircle,
  IconInfoCircle,
  IconMail,
  IconFileText,
  IconScale,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";

export default function Footer() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const dockItems = [
    {
      title: t('nav.home'),
      icon: <IconHome className="h-5 w-5" />,
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
    {
      title: t('nav.capabilities'),
      icon: <IconSettings className="h-5 w-5" />,
      onClick: () => scrollToSection('capabilities'),
    },
    {
      title: t('nav.useCases'),
      icon: <IconBriefcase className="h-5 w-5" />,
      onClick: () => scrollToSection('use-cases'),
    },
    {
      title: t('nav.technology'),
      icon: <IconCpu className="h-5 w-5" />,
      onClick: () => scrollToSection('tech-partners'),
    },
    {
      title: t('nav.faq'),
      icon: <IconHelpCircle className="h-5 w-5" />,
      onClick: () => scrollToSection('faq'),
    },
    {
      title: t('nav.about'),
      icon: <IconInfoCircle className="h-5 w-5" />,
      onClick: () => scrollToSection('about'),
    },
    {
      title: t('nav.contact'),
      icon: <IconMail className="h-5 w-5" />,
      onClick: () => scrollToSection('contact'),
    },
    {
      title: t('nav.privacyPolicy'),
      icon: <IconFileText className="h-5 w-5" />,
      href: "/privacy",
    },
    {
      title: t('nav.termsOfService'),
      icon: <IconScale className="h-5 w-5" />,
      href: "/terms",
    },
    {
      title: t('nav.enterpriseContact'),
      icon: <IconBuildingSkyscraper className="h-5 w-5" />,
      href: "https://forms.gle/iBogvoWnzHyXYQ2X8",
    },
  ];

  return (
    <footer className="bg-primary-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* Dock Navigation */}
          <nav 
            aria-label="Main Navigation" 
            className="backdrop-blur-md border border-neutral-700/50 rounded-full p-3 shadow-2xl"
            style={{
              background: 'linear-gradient(to top, #0f0f0f, #1a1a1a)',
              boxShadow: '0 0 20px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide max-w-[90vw] md:max-w-none">
              {dockItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-yellow-400/20 ring-1 ring-white/10 border border-white/5 transform-gpu origin-center hover:scale-[1.15] hover:bg-white/10 transition-all duration-200 ease-in-out"
                      aria-label={item.title}
                      title={item.title}
                    >
                      <div className="text-white/80 group-hover:text-yellow-400 transition-colors duration-200">
                        {item.icon}
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-950/95 backdrop-blur-md text-white text-xs px-2 py-1 rounded-lg shadow-xl ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        {item.title}
                      </div>
                    </a>
                  ) : (
                    <button
                      onClick={item.onClick}
                      className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-yellow-400/20 ring-1 ring-white/10 border border-white/5 transform-gpu origin-center hover:scale-[1.15] hover:bg-white/10 transition-all duration-200 ease-in-out"
                      aria-label={item.title}
                      title={item.title}
                    >
                      <div className="text-white/80 group-hover:text-yellow-400 transition-colors duration-200">
                        {item.icon}
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-950/95 backdrop-blur-md text-white text-xs px-2 py-1 rounded-lg shadow-xl ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        {item.title}
                      </div>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}