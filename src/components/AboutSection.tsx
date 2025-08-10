'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const companyInfo = [
    { label: t('about.companyOverview.companyName'), value: t('about.companyOverview.companyNameValue') },
    { label: t('about.companyOverview.headOffice'), value: t('about.companyOverview.headOfficeValue') },
    { label: t('about.companyOverview.capital'), value: t('about.companyOverview.capitalValue') },
    { label: t('about.companyOverview.clientsServed'), value: t('about.companyOverview.clientsServedValue') },
    { label: t('about.companyOverview.coreFocus'), value: t('about.companyOverview.coreFocusValue') }
  ];

  const coreValues = [
    {
      title: t('about.coreValues.clientFirst.title'),
      description: t('about.coreValues.clientFirst.description')
    },
    {
      title: t('about.coreValues.endToEnd.title'),
      description: t('about.coreValues.endToEnd.description')
    },
    {
      title: t('about.coreValues.transparency.title'),
      description: t('about.coreValues.transparency.description')
    },
    {
      title: t('about.coreValues.quality.title'),
      description: t('about.coreValues.quality.description')
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 section-alternate">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold mb-16 text-center leading-snug"
          >
            {t('about.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Information Table */}
            <motion.div
              variants={itemVariants}
              className="bg-deep-charcoal rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('about.companyOverview.title')}</h3>
              <div className="space-y-4">
                {companyInfo.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-700 last:border-b-0">
                    <span className="font-medium text-gray-300 mb-1 sm:mb-0">{item.label}:</span>
                    <span className="text-white sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              variants={itemVariants}
              className="bg-deep-charcoal rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('about.mission.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('about.mission.description1')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('about.mission.description2')}
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('about.coreValues.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-deep-charcoal rounded-xl p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold text-accent-gold mb-3">{value.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services Overview */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-accent-blue/10 to-accent-gold/10 rounded-2xl p-8 border border-gray-800"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {t('about.servicesOverview.description1')}
            </p>
            <p className="text-lg text-accent-gold font-medium">
              {t('about.servicesOverview.description2')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}