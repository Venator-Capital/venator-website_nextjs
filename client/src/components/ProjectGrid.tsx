import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const projects = [
    {
      title: "ClipWise",
      status: "In Progress" as const,
      description: "An AI-powered web tool for extracting, summarizing, and titling key moments from long-form YouTube videos — optimized for creators and editors.",
      metrics: "80% faster editing workflows",
      icon: "🎬",
    },
    {
      title: "AutoPilot",
      status: "Operational" as const,
      description: "A lightweight automation workflow builder for professionals using AI tools like ChatGPT, Notion, and Zapier — engineered for remote teams.",
      metrics: "500+ workflows automated",
      icon: "🤖",
    },
    {
      title: "DropTop",
      status: "MVP Phase" as const,
      description: "A cross-border product uploader for Shopify sellers. Designed to cut listing time by 80% with localizable automation logic.",
      metrics: "300+ Shopify listings automated",
      icon: "📦",
    },
    {
      title: "PassFlow",
      status: "Concept" as const,
      description: "A visa-optimization planner that uses entry/exit logic, passport privilege, and travel sequences to legally bypass travel restrictions.",
      metrics: "15+ countries optimized",
      icon: "🌏",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-primary-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="text-accent-gold">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Current ventures across <span className="text-accent-blue">AI, automation, and cross-border commerce</span>
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              status={project.status}
              description={project.description}
              metrics={project.metrics}
              icon={project.icon}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
