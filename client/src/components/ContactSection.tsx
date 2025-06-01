import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const handleEmailClick = () => {
    window.location.href = "mailto:info@venator-capital.net";
  };

  const handleContactFormClick = () => {
    window.open("https://forms.gle/iBogvoWnzHyXYQ2X8", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 md:py-32 section-primary">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-12 leading-snug"
        >
          Get in <span className="text-accent-gold">Touch</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg font-normal leading-relaxed text-gray-300 mb-16"
        >
          We're currently exploring new <span className="text-accent-blue font-semibold">partnerships, collaborators, and joint ventures</span>.
          <br />
          Feel free to reach out — our operations are always in motion.
        </motion.p>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            onClick={handleEmailClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-white/20"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send Email
          </motion.button>
          
          <motion.button
            onClick={handleContactFormClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-accent-gold text-accent-gold rounded-full font-semibold text-lg hover:bg-accent-gold hover:text-black transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-accent-gold/20"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            Open Contact Form
          </motion.button>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-silver-gray">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Tokyo, Japan</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>JST Business Hours</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Global Operations</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
