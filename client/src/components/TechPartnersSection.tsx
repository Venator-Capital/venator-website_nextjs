import { motion } from "framer-motion";

export default function TechPartnersSection() {
  // Using authentic technology partners that align with AI development
  const partners = [
    {
      name: 'OpenAI',
      description: 'Advanced AI Language Models',
      icon: '🤖',
    },
    {
      name: 'TensorFlow',
      description: 'Machine Learning Framework',
      icon: '🧠',
    },
    {
      name: 'PyTorch',
      description: 'Deep Learning Platform',
      icon: '🔥',
    },
    {
      name: 'AWS',
      description: 'Cloud Infrastructure',
      icon: '☁️',
    },
    {
      name: 'Google Cloud',
      description: 'AI/ML Services',
      icon: '🌐',
    },
    {
      name: 'Azure',
      description: 'Cognitive Services',
      icon: '🔷',
    },
    {
      name: 'Docker',
      description: 'Containerization',
      icon: '🐳',
    },
    {
      name: 'Kubernetes',
      description: 'Orchestration',
      icon: '☸️',
    },
    {
      name: 'GitHub',
      description: 'Code Management',
      icon: '🐙',
    },
    {
      name: 'Supabase',
      description: 'Database & Backend',
      icon: '🗄️',
    },
    {
      name: 'Vercel',
      description: 'Deployment Platform',
      icon: '▲',
    },
    {
      name: 'Notion',
      description: 'Collaboration Hub',
      icon: '📝',
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="tech-partners" className="py-24 bg-primary-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            Technology <span className="text-accent-gold">Partners</span>
          </h2>
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Leveraging industry-leading platforms and frameworks to deliver robust AI solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center p-4 bg-deep-charcoal rounded-xl border border-gray-800 hover:border-accent-blue/50 transition-all duration-200 cursor-pointer group w-full aspect-square"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {partner.icon}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200 text-center">
                {partner.name}
              </span>
              <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-200 text-center mt-1">
                {partner.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}