import { motion } from "framer-motion";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      title: 'AI & Machine Learning Solutions',
      description: 'Design, develop, and deploy custom AI/ML applications tailored to your business needs.',
      icon: '🤖',
    },
    {
      title: 'Data Analytics & Automation',
      description: 'Collect, analyze, and automate data workflows using advanced analytics and AI-driven processes.',
      icon: '📊',
    },
    {
      title: 'Digital Media & Web Platforms',
      description: 'Create and manage scalable web and media platforms enhanced with AI functionalities.',
      icon: '💻',
    },
    {
      title: 'Enterprise AI Integration & Consulting',
      description: 'Architect and implement enterprise-grade AI systems, and provide strategic consulting.',
      icon: '🏗️',
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
    <section id="capabilities" role="main" className="py-24 md:py-32 bg-deep-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Core <span className="text-accent-gold">Capabilities</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Four AI-focused domains that drive our <span className="text-accent-blue">technological excellence</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="project-card rounded-2xl p-8 cursor-pointer relative overflow-hidden group"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-6">{capability.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {capability.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}