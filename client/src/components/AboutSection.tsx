import { motion } from "framer-motion";

export default function AboutSection() {
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
    <section id="about" className="py-24 bg-deep-charcoal">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-12"
        >
          About <span className="text-accent-blue">Venator Capital</span>
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10"
        >
          Venator Capital LLC is a <span className="text-accent-gold font-semibold">Tokyo-based strategy-driven startup</span> operating at the intersection of real estate, automation, and borderless innovation.
        </motion.p>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/80 leading-relaxed"
        >
          Our approach is lean, experimental, and relentlessly global. We build tools, frameworks, and ventures that <span className="text-accent-blue font-semibold">turn overlooked niches into operational advantages</span>.
        </motion.p>

        {/* Domain Focus */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="p-6 project-card rounded-xl"
          >
            <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real Estate Innovation</h3>
            <p className="text-silver-gray">Licensed 宅建士-led strategic property ventures</p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="p-6 project-card rounded-xl"
          >
            <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered SaaS</h3>
            <p className="text-silver-gray">Automation workflows for remote teams</p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="p-6 project-card rounded-xl"
          >
            <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cross-Border Investments</h3>
            <p className="text-silver-gray">Strategic micro-M&A and partnerships</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
