import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Workflow, TrendingUp, Settings } from "lucide-react";

export default function UseCasesSection() {
  const useCases = [
    {
      title: "Custom AI System Design",
      description: "企業固有の課題を解決する独自AIシステムを要件定義から本番稼働まで設計・開発します。",
      technology: "Python + TensorFlow + AWS SageMaker",
      icon: Brain,
      outcome: "在庫回転率 25% 向上、売上 12% 増加",
    },
    {
      title: "AI Integration into Legacy Systems",
      description: "既存のオンプレ・クラウドシステムにAIモデルを後付けし、業務プロセスを進化させます。",
      technology: "Docker + AWS EKS + Oracle DB",
      icon: Database,
      outcome: "不良検知率 96%（従来 70%）、アラート応答時間 2分未満",
    },
    {
      title: "AI-Driven Automated Workflows",
      description: "n8nやZapierと連携し、AI推論を組み込んだ自動化ワークフローで業務効率化を実現します。",
      technology: "n8n + Google Cloud Functions + Python",
      icon: Workflow,
      outcome: "配送コスト 18% 削減、レポート作成時間 5日 → 30分",
    },
    {
      title: "Predictive Analytics & Forecasting",
      description: "時系列予測モデルを使った需要予測・故障予知で、経営判断をサポートします。",
      technology: "LSTM + Grafana + Prometheus",
      icon: TrendingUp,
      outcome: "故障予測精度 94%、突発ダウンタイム 120h → 20h",
    },
    {
      title: "MLOps & Model Deployment",
      description: "モデルの継続運用を高速かつ安全に行うためのMLOpsパイプライン構築を支援します。",
      technology: "GitHub Actions + Kubernetes + Argo CD",
      icon: Settings,
      outcome: "デプロイ失敗率 0.1% → 0.01%、モデル更新頻度週2回化",
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-deep-charcoal rounded-2xl p-6 cursor-pointer relative overflow-hidden group border border-gray-800"
              onClick={() => {
                if (useCase.title === "AI-Driven Automated Workflows") {
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
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  {useCase.description}
                </p>
                <div className="mb-3">
                  <div className="inline-block px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-xs font-medium mb-2">
                    {useCase.technology}
                  </div>
                </div>
                <div className="text-xs text-accent-gold font-medium">
                  {useCase.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}