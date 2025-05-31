import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Workflow, Zap, Brain, Settings, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function AIWorkflows() {
  const features = [
    {
      icon: Workflow,
      title: "Visual Workflow Builder",
      description: "Build complex workflows using drag-and-drop interface to visually design business processes"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Integrate machine learning models to automate decision-making processes"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process data in real-time with trigger-based automatic execution"
    },
    {
      icon: Settings,
      title: "API Connectivity",
      description: "Connect with 400+ services through APIs for seamless system integration"
    }
  ];

  const useCases = [
    "Web news article crawling → NLP classification → Slack notifications",
    "Customer inquiry emails → AI summarization & response generation → Auto-draft sending",
    "IoT sensor alerts → Image classification detection → PagerDuty calls",
    "Sales data collection → AI predictive analysis → Google Sheets updates → Sales team notifications"
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
              Build intelligent automation workflows using n8n and Zapier with AI inference to streamline business operations
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
                Watch how n8n enables powerful automation workflow construction
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
              Implementation Examples
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

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-accent-blue/10 to-accent-gold/10 rounded-2xl p-12 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Automate Your Workflows?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI-driven automation can transform your business operations. 
                Contact us to explore the possibilities.
              </p>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 bg-accent-gold text-primary-black font-bold rounded-lg hover:bg-[#e6c600] hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-black"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}