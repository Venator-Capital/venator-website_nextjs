'use client';

import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Workflow, TrendingUp, Settings, ArrowRight, Code, CheckCircle, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, Tag, ProgressBar, Button } from "@/components/blueprint";

export default function UseCasesSection() {
  const router = useRouter();
  const { t } = useLanguage();
  
  const useCases = [
    {
      title: t('useCases.cards.customAI.title'),
      description: t('useCases.cards.customAI.description'),
      technology: t('useCases.cards.customAI.technology'),
      icon: Brain,
      category: "AI/ML Development",
      status: "Operational",
      complexity: 0.85,
      timeline: "3-6 months",
      tags: ["TensorFlow", "AWS SageMaker", "Python"]
    },
    {
      title: t('useCases.cards.integration.title'),
      description: t('useCases.cards.integration.description'),
      technology: t('useCases.cards.integration.technology'),
      icon: Database,
      category: "System Integration",
      status: "Operational",
      complexity: 0.78,
      timeline: "2-4 months",
      tags: ["Docker", "Kubernetes", "Oracle"]
    },
    {
      title: t('useCases.cards.automation.title'),
      description: t('useCases.cards.automation.description'),
      technology: t('useCases.cards.automation.technology'),
      icon: Workflow,
      category: "Process Automation",
      status: "In Progress",
      complexity: 0.65,
      timeline: "1-3 months",
      tags: ["n8n", "Google Cloud", "Zapier"]
    },
    {
      title: t('useCases.cards.predictive.title'),
      description: t('useCases.cards.predictive.description'),
      technology: t('useCases.cards.predictive.technology'),
      icon: TrendingUp,
      category: "Analytics",
      status: "Operational",
      complexity: 0.82,
      timeline: "2-5 months",
      tags: ["LSTM", "Grafana", "Time Series"]
    },
    {
      title: t('useCases.cards.mlops.title'),
      description: t('useCases.cards.mlops.description'),
      technology: t('useCases.cards.mlops.technology'),
      icon: Settings,
      category: "DevOps",
      status: "MVP",
      complexity: 0.91,
      timeline: "4-8 months",
      tags: ["CI/CD", "Kubernetes", "Monitoring"]
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

  const handleCardClick = (useCase: { title: string }) => {
    if (useCase.title === "AI-Driven Automated Workflows") {
      router.push("/ai-workflows");
    }
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
            Use <span className="text-accent-gold">Cases</span>
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
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.title}
              variants={itemVariants}
            >
              <Card 
                elevation={2} 
                interactive={true}
                className="h-full group hover:shadow-accent-gold/10 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Header with icon, category, and status */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors">
                        {React.createElement(useCase.icon, { 
                          className: "w-6 h-6 text-accent-gold" 
                        })}
                      </div>
                      <div>
                        <Tag intent="primary" minimal={true} className="mb-2">
                          {useCase.category}
                        </Tag>
                        <h3 className="text-xl font-bold text-white group-hover:text-accent-gold transition-colors">
                          {useCase.title}
                        </h3>
                      </div>
                    </div>
                    <Tag 
                      intent={useCase.status === "Operational" ? "success" : 
                             useCase.status === "In Progress" ? "warning" : "primary"}
                      className="text-xs"
                    >
                      {useCase.status}
                    </Tag>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Project Metrics */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Project Complexity
                    </h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Implementation</span>
                        <span className="text-accent-gold font-semibold">
                          {Math.round(useCase.complexity * 100)}%
                        </span>
                      </div>
                      <ProgressBar 
                        value={useCase.complexity}
                        intent="primary"
                        size="small"
                        animate={true}
                      />
                    </div>
                  </div>

                  {/* Timeline and Technology Stack */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Timeline
                      </h4>
                      <Tag intent="none" minimal={true} className="text-xs">
                        {useCase.timeline}
                      </Tag>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Stack
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {useCase.tags.slice(0, 2).map((tag) => (
                          <Tag 
                            key={tag}
                            intent="none" 
                            minimal={true}
                            className="text-xs"
                          >
                            {tag}
                          </Tag>
                        ))}
                        {useCase.tags.length > 2 && (
                          <Tag intent="none" minimal={true} className="text-xs">
                            +{useCase.tags.length - 2}
                          </Tag>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-white/10">
                    <Button
                      variant="outline"
                      className="w-full justify-center group-hover:bg-accent-gold/10"
                      onClick={() => handleCardClick(useCase)}
                    >
                      View Details
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
                <Brain className="w-5 h-5 text-accent-gold" />
                <h3 className="text-xl font-semibold text-white">
                  Ready to Implement Your Use Case?
                </h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Each use case represents a proven approach to solving real business challenges. 
                Let&apos;s discuss how we can adapt these solutions to your specific requirements.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}