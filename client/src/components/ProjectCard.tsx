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
      whileHover={{ scale: 1.02 }}
      className="project-card rounded-xl p-8 group cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-semibold group-hover:text-accent-blue transition-colors">
          {title}
        </h3>
        <span className={`status-badge ${getStatusClass(status)}`}>
          {status}
        </span>
      </div>
      
      <p className="text-silver-gray mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center text-accent-blue group-hover:text-white transition-colors">
        <span className="mr-2">Learn More</span>
        <motion.svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ x: 2 }}
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
    </motion.div>
  );
}
