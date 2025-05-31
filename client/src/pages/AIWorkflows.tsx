import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Workflow, Zap, Brain, Settings, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function AIWorkflows() {
  const features = [
    {
      icon: Workflow,
      title: "Visual Workflow Builder",
      description: "ドラッグ&ドロップでワークフローを構築し、複雑な業務プロセスを視覚的に設計"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "機械学習モデルとの連携で、判断を必要とする処理を自動化"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "リアルタイムデータ処理とトリガーベースの自動実行"
    },
    {
      icon: Settings,
      title: "API Connectivity",
      description: "400以上のサービスとのAPI連携で既存システムとシームレスに統合"
    }
  ];

  const useCases = [
    "Web上のニュース記事をクロール → NLP分類 → Slack通知",
    "顧客問い合わせメール → AI要約・返信生成 → 自動ドラフト送信",
    "IoTセンサーアラート → 画像分類判定 → PagerDuty呼び出し",
    "売上データ収集 → AI予測分析 → Google Sheets更新 → 営業チームへ通知"
  ];

  return (
    <div className="min-h-screen bg-primary-black">
      {/* Header */}
      <div className="bg-deep-charcoal border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-gold/10 rounded-2xl mb-8">
              <Workflow className="w-10 h-10 text-accent-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              AI-Driven Automated <span className="text-accent-gold">Workflows</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              n8nやZapierと連携し、AI推論を組み込んだ自動化ワークフローで業務効率化を実現します
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-deep-charcoal rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                n8n Workflow Automation Demo
              </h2>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/X1sfhFFxmAY?autoplay=1&mute=1&loop=1&playlist=X1sfhFFxmAY"
                  title="n8n Workflow Automation Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-gray-400 text-sm mt-4 text-center">
                n8nを使った自動化ワークフローの構築例をご覧ください
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-deep-charcoal rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-accent-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              実装例
            </h2>
            <div className="bg-deep-charcoal rounded-xl p-8 border border-gray-800">
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              実績・成果
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-deep-charcoal rounded-xl p-6 border border-gray-800">
                <div className="text-3xl font-bold text-accent-gold mb-2">18%</div>
                <div className="text-white font-semibold mb-1">配送コスト削減</div>
                <div className="text-gray-400 text-sm">ルート最適化AIとの連携により実現</div>
              </div>
              <div className="bg-deep-charcoal rounded-xl p-6 border border-gray-800">
                <div className="text-3xl font-bold text-accent-gold mb-2">5日 → 30分</div>
                <div className="text-white font-semibold mb-1">レポート作成時間</div>
                <div className="text-gray-400 text-sm">手動作業の完全自動化を実現</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}