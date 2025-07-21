'use client';

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

  const companyInfo = [
    { label: "Company Name", value: "Venator Capital LLC" },
    { label: "Head Office", value: "66 Bentencho, Shinjuku-ku, Tokyo, Japan" },
    { label: "Capital", value: "¥1,000,000" },
    { label: "Clients Served", value: "100+ (Corporate & Individual)" },
    { label: "Core Focus", value: "AI & Automation Solutions" }
  ];

  const coreValues = [
    {
      title: "Client-First Approach",
      description: "Every engagement is tailored to your unique goals—no 'one-size-fits-all' solutions."
    },
    {
      title: "End-to-End Expertise", 
      description: "From initial scoping to long-term support, we handle the full AI value chain so you can focus on your business."
    },
    {
      title: "Transparency & Collaboration",
      description: "We maintain clear communication at every step, providing regular updates, documentation, and hands-on training for in-house teams."
    },
    {
      title: "Quality & Integrity",
      description: "We're committed to delivering results that meet rigorous accuracy, security, and compliance standards—no shortcuts."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 section-alternate">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold mb-16 text-center leading-snug"
          >
            About <span className="text-accent-gold">Venator Capital</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Information Table */}
            <motion.div
              variants={itemVariants}
              className="bg-deep-charcoal rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Company Overview</h3>
              <div className="space-y-4">
                {companyInfo.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-700 last:border-b-0">
                    <span className="font-medium text-gray-300 mb-1 sm:mb-0">{item.label}:</span>
                    <span className="text-white sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              variants={itemVariants}
              className="bg-deep-charcoal rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Founded with a clear mission to empower businesses through cutting-edge AI and automation, 
                Venator Capital LLC has rapidly established itself as a trusted partner for organizations 
                seeking to transform their operations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Although still a young company, our team has cultivated deep expertise across the entire 
                AI lifecycle—from strategic consulting and system design to development, deployment, and ongoing maintenance.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-deep-charcoal rounded-xl p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold text-accent-gold mb-3">{value.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services Overview */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-accent-blue/10 to-accent-gold/10 rounded-2xl p-8 border border-gray-800"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Over the past year, we have worked with more than 100 clients—both corporate and individual, 
              domestic and overseas—providing tailored AI consulting, custom system design, and hands-on support. 
              Our engagements span a wide range of industries: from large enterprises looking to integrate 
              machine-learning models into legacy systems, to small teams seeking to replace manual workflows 
              with intelligent automation.
            </p>
            <p className="text-lg text-accent-gold font-medium">
              Venator Capital LLC is dedicated to becoming your long-term AI partner.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}