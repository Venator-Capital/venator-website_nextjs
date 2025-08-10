'use client';

import { motion } from "framer-motion";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center hero-gradient animated-background">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent-blue/20 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            boxShadow: '0 0 60px rgba(59, 130, 246, 0.2)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-accent-gold/20 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)',
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.15)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-8 sm:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="card-enhanced border-gray-800/50 bg-deep-charcoal/90 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-10 w-10 text-accent-gold" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                404
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl font-semibold mb-4 text-accent-gold"
              >
                {t('404.title')}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed"
              >
                {t('404.description')}
                <br />
                {t('404.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/">
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gold text-primary-black font-bold rounded-lg hover:bg-[#e6c600] hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-deep-charcoal"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Home className="w-4 h-4" />
                    {t('404.returnHome')}
                  </motion.button>
                </Link>
                <motion.button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-gold text-accent-gold font-bold rounded-lg hover:bg-accent-gold hover:text-primary-black hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-deep-charcoal"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t('404.goBack')}
                </motion.button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}