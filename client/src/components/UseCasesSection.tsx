import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Factory, MessageSquare, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function UseCasesSection() {
  const { t } = useLanguage();
  
  const useCases = [
    {
      titleKey: "useCases.retail.title",
      descriptionKey: "useCases.retail.description",
      technology: "TensorFlow + BigQuery + Looker",
      icon: ShoppingCart,
    },
    {
      titleKey: "useCases.manufacturing.title",
      descriptionKey: "useCases.manufacturing.description",
      technology: "OpenCV + EdgeTPU + Cloud Vision",
      icon: Factory,
    },
    {
      titleKey: "useCases.support.title",
      descriptionKey: "useCases.support.description",
      technology: "BERT + Elasticsearch + Slack API",
      icon: MessageSquare,
    },
    {
      titleKey: "useCases.energy.title",
      descriptionKey: "useCases.energy.description",
      technology: "Prophet + InfluxDB + Grafana",
      icon: Zap,
    },
    {
      titleKey: "useCases.finance.title",
      descriptionKey: "useCases.finance.description",
      technology: "MLflow + Kubernetes + PostgreSQL",
      icon: TrendingUp,
    },
  ];

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

  return (
    <section id="use-cases" className="py-24 md:py-32 section-alternate">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            {t('useCases.title')}
          </h2>
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-300 max-w-3xl mx-auto">
            {t('useCases.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 justify-items-center"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.titleKey}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-deep-charcoal rounded-2xl p-6 cursor-pointer relative overflow-hidden group border border-gray-800 w-full max-w-xs"
              onClick={() => {
                if (useCase.titleKey === "useCases.support.title") {
                  window.location.href = "/ai-workflows";
                }
              }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-6 flex justify-start">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                    {React.createElement(useCase.icon, { className: "w-6 h-6 text-accent-gold" })}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {t(useCase.titleKey)}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  {t(useCase.descriptionKey)}
                </p>
                <div className="inline-block px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-xs font-medium">
                  {useCase.technology}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}