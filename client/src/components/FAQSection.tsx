import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of AI solutions do you specialize in?",
      answer: "We focus on machine learning applications, data analytics platforms, automation frameworks, and enterprise AI integration. Our expertise spans natural language processing, computer vision, predictive analytics, and intelligent document processing."
    },
    {
      question: "How long does it typically take to develop a custom AI solution?",
      answer: "Project timelines vary based on complexity and scope. Simple automation solutions can be delivered in 4-6 weeks, while comprehensive AI platforms may take 3-6 months. We work closely with clients to establish realistic timelines during the initial consultation phase."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including system monitoring, performance optimization, model retraining, and feature updates. Our support ensures your AI solutions continue to deliver value as your business evolves."
    },
    {
      question: "Can you integrate AI solutions with existing business systems?",
      answer: "Absolutely. We specialize in seamless integration with existing enterprise systems, databases, and workflows. Our solutions are designed to enhance your current operations without disrupting established processes."
    },
    {
      question: "What industries do you serve?",
      answer: "We work across various industries including finance, healthcare, retail, manufacturing, and professional services. Our AI solutions are adaptable to different business contexts and regulatory requirements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-primary-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            Frequently Asked <span className="text-accent-gold">Questions</span>
          </h2>
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our AI solutions and services
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-deep-charcoal rounded-xl border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-accent-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}