import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  status: "In Progress" | "Operational" | "MVP Phase" | "Concept";
  description: string;
  delay?: number;
}

export default function ProjectCard({ title, status, description, delay = 0 }: ProjectCardProps) {
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
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-2xl font-bold group-hover:text-accent-blue transition-colors duration-300">
            {title}
          </h3>
          <span className={`status-badge ${getStatusClass(status)}`}>
            {status}
          </span>
        </div>
        
        <p className="text-white/70 mb-8 leading-relaxed text-lg">
          {description}
        </p>
        
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
