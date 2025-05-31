import { motion } from "framer-motion";

export default function UseCasesSection() {
  const useCases = [
    {
      title: "Automated Customer Support",
      description: "AI-powered chatbots and virtual assistants that provide 24/7 customer service with natural language understanding.",
      technology: "GPT-4-based Chatbot",
      icon: "🤖",
    },
    {
      title: "Predictive Analytics Platform",
      description: "Machine learning models that forecast business trends, customer behavior, and market opportunities.",
      technology: "TensorFlow & PyTorch",
      icon: "📈",
    },
    {
      title: "Document Processing Automation",
      description: "Intelligent document analysis and data extraction for streamlined business workflows.",
      technology: "Computer Vision & NLP",
      icon: "📄",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-2xl md:text-3xl font-medium mb-4 text-white">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="inline-block px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium">
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