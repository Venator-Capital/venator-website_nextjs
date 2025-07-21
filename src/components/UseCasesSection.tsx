'use client';

import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Workflow, TrendingUp, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UseCasesSection() {
  const router = useRouter();
  
  const useCases = [
    {
      title: "Custom AI System Design",
      description: "Design and develop custom AI systems tailored to solve enterprise-specific challenges from requirements to production deployment.",
      technology: "Python + TensorFlow + AWS SageMaker",
      icon: Brain,
    },
    {
      title: "AI Integration into Legacy Systems",
      description: "Seamlessly integrate AI models into existing on-premise and cloud systems to enhance business processes.",
      technology: "Docker + AWS EKS + Oracle DB",
      icon: Database,
    },
    {
      title: "AI-Driven Automated Workflows",
      description: "Build intelligent automation workflows using n8n and Zapier with AI inference to streamline business operations.",
      technology: "n8n + Google Cloud Functions + Python",
      icon: Workflow,
    },
    {
      title: "Predictive Analytics & Forecasting",
      description: "Implement time-series forecasting models for demand prediction and failure detection to support strategic decisions.",
      technology: "LSTM + Grafana + Prometheus",
      icon: TrendingUp,
    },
    {
      title: "MLOps & Model Deployment",
      description: "Build robust MLOps pipelines for continuous model deployment, monitoring, and lifecycle management.",
      technology: "GitHub Actions + Kubernetes + Argo CD",
      icon: Settings,
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
            Real-world applications demonstrating how our AI solutions solve complex business challenges
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 justify-items-center"
        >
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-deep-charcoal rounded-2xl p-6 cursor-pointer relative overflow-hidden group border border-gray-800 w-full max-w-xs"
              onClick={() => handleCardClick(useCase)}
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
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  {useCase.description}
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