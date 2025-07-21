'use client';

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  status: "In Progress" | "Operational" | "MVP Phase" | "Concept";
  description: string;
  metrics?: string;
  icon?: string;
  delay?: number;
}

export default function ProjectCard({ title, status, description, metrics, icon, delay = 0 }: ProjectCardProps) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "In Progress":
        return "status-in-progress";
      case "Operational":
        return "status-operational";
      case "MVP Phase":
        return "status-mvp";
      case "Concept":
        return "status-concept";
      default:
        return "status-concept";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      className="project-card rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Header with icon and status */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            {icon && (
              <div className="text-3xl">{icon}</div>
            )}
            <h3 className="text-2xl font-bold group-hover:text-accent-blue transition-colors duration-300">
              {title}
            </h3>
          </div>
          <span className={`status-badge ${getStatusClass(status)}`}>
            {status}
          </span>
        </div>
        
        <p className="text-white/70 mb-6 leading-relaxed text-lg">
          {description}
        </p>
        
        {/* Metrics display */}
        {metrics && (
          <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-white/90 font-semibold text-sm">{metrics}</span>
            </div>
          </div>
        )}
        
        <div className="flex items-center text-accent-blue group-hover:text-white transition-colors duration-300">
          <span className="mr-2 font-semibold">Learn More</span>
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}