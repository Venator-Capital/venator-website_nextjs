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

  const companyData = [
    ['Company Name', 'Venator Capital LLC'],
    ['Headquarters', '66 Bentencho, Shinjuku-ku, Tokyo, Japan'],
    ['Capital', '¥1,000,000'],
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-primary-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold mb-12 leading-snug"
          >
            About <span className="text-accent-gold">Venator Capital</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[320px] table-auto border-collapse border border-gray-700 mb-8">
                <tbody>
                  {companyData.map(([label, value]) => (
                    <tr key={label} className="border border-gray-700">
                      <th className="px-4 md:px-6 py-4 text-left font-medium bg-deep-charcoal text-white border-r border-gray-700">
                        {label}
                      </th>
                      <td className="px-4 md:px-6 py-4 bg-primary-black text-gray-300">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="text-left"
          >
            <p className="text-xl text-white/90 mb-6">
              Venator Capital LLC is an AI-focused strategic startup specializing in:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg text-white/80 mb-8">
              <li>AI & Machine Learning application development</li>
              <li>Data Analytics & Automation</li>
              <li>Digital Media & Web Platform solutions</li>
              <li>Enterprise AI Integration & Consulting</li>
            </ul>
            <p className="text-xl text-white/90">
              Our lean and global approach transforms advanced technologies into operational excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}