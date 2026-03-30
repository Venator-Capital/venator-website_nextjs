'use client';

import React from "react";
import { motion } from "framer-motion";
import { Brain, BarChart3, Globe, Building2, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, Tag, ProgressBar, Button } from "@/components/blueprint";

export default function CapabilitiesSection() {
  const { t } = useLanguage();

  const capabilities = [
    {
      title: t('capabilities.cards.aiMl.title'),
      description: t('capabilities.cards.aiMl.description'),
      icon: Brain,
      category: "AI/ML",
      metrics: [
        { label: "Accuracy", value: 0.95, intent: "primary" as const },
        { label: "Speed", value: 0.88, intent: "success" as const },
        { label: "Reliability", value: 0.92, intent: "primary" as const }
      ],
      tags: ["Machine Learning", "Deep Learning", "Neural Networks"]
    },
    {
      title: t('capabilities.cards.dataAnalytics.title'),
      description: t('capabilities.cards.dataAnalytics.description'),
      icon: BarChart3,
      category: "Analytics",
      metrics: [
        { label: "Processing Speed", value: 0.91, intent: "success" as const },
        { label: "Data Accuracy", value: 0.96, intent: "primary" as const },
        { label: "Automation", value: 0.89, intent: "warning" as const }
      ],
      tags: ["Business Intelligence", "Predictive Analytics", "Automation"]
    },
    {
      title: t('capabilities.cards.digitalMedia.title'),
      description: t('capabilities.cards.digitalMedia.description'),
      icon: Globe,
      category: "Digital Platform",
      metrics: [
        { label: "Scalability", value: 0.94, intent: "primary" as const },
        { label: "Performance", value: 0.87, intent: "success" as const },
        { label: "User Experience", value: 0.93, intent: "primary" as const }
      ],
      tags: ["Web Platform", "Content Management", "Media Processing"]
    },
    {
      title: t('capabilities.cards.enterprise.title'),
      description: t('capabilities.cards.enterprise.description'),
      icon: Building2,
      category: "Enterprise",
      metrics: [
        { label: "Security", value: 0.98, intent: "success" as const },
        { label: "Compliance", value: 0.95, intent: "primary" as const },
        { label: "Integration", value: 0.90, intent: "primary" as const }
      ],
      tags: ["System Integration", "Compliance", "Strategic Consulting"]
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
    <section id="capabilities" role="main" className="py-24 md:py-32 section-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            Core <span className="text-accent-gold">Capabilities</span>
          </h2>
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-300 max-w-3xl mx-auto">
            {t('capabilities.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.title}
              variants={itemVariants}
            >
              <Card 
                elevation={2} 
                interactive={true}
                className="h-full group hover:shadow-accent-gold/10 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Header with icon and category */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors">
                        {React.createElement(capability.icon, { 
                          className: "w-6 h-6 text-accent-gold" 
                        })}
                      </div>
                      <div>
                        <Tag intent="primary" minimal={true} className="mb-2">
                          {capability.category}
                        </Tag>
                        <h3 className="text-xl font-bold text-white group-hover:text-accent-gold transition-colors">
                          {capability.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Quality Metrics */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Quality Metrics
                    </h4>
                    <div className="space-y-3">
                      {capability.metrics.map((metric) => (
                        <div key={metric.label} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{metric.label}</span>
                            <span className="text-accent-gold font-semibold">
                              {Math.round(metric.value * 100)}%
                            </span>
                          </div>
                          <ProgressBar 
                            value={metric.value}
                            intent={metric.intent}
                            size="small"
                            animate={true}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {capability.tags.map((tag) => (
                        <Tag 
                          key={tag}
                          intent="none" 
                          minimal={true}
                          className="text-xs"
                        >
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-white/10">
                    <Button
                      variant="outline"
                      className="w-full justify-center group-hover:bg-accent-gold/10"
                      onClick={() => {
                        // Scroll to contact section or open modal
                        document.getElementById('contact')?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card elevation={1} className="bg-gradient-to-r from-zinc-900 to-zinc-800 border-accent-gold/20">
            <div className="py-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-accent-gold" />
                <h3 className="text-xl font-semibold text-white">
                  Enterprise-Ready AI Solutions
                </h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Ready to transform your business with AI? Our enterprise-grade solutions 
                deliver measurable results with industry-leading security and compliance.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Start Your AI Journey
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}