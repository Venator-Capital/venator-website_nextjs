import { motion } from "framer-motion";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      title: 'AI Automation',
      description: 'Design and implement intelligent workflows using ChatGPT, Notion, Zapier, and more.',
      icon: '🤖',
    },
    {
      title: 'Real Estate Advisory',
      description: 'Professional real estate strategy and brokerage services with licensed expertise.',
      icon: '🏢',
    },
    {
      title: 'Cross-border Strategy',
      description: 'Structuring micro-M&A and global investment frameworks for international expansion.',
      icon: '🌏',
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
            Three strategic pillars that drive our <span className="text-accent-blue">operational excellence</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              className="project-card rounded-2xl p-8 cursor-pointer relative overflow-hidden"
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