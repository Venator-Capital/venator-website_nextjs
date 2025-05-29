import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const projects = [
    {
      title: "ClipWise",
      status: "In Progress" as const,
      description: "An AI-powered web tool for extracting, summarizing, and titling key moments from long-form YouTube videos — optimized for creators and editors.",
    },
    {
      title: "AutoPilot",
      status: "Operational" as const,
      description: "A lightweight automation workflow builder for professionals using AI tools like ChatGPT, Notion, and Zapier — engineered for remote teams.",
    },
    {
      title: "DropTop",
      status: "MVP Phase" as const,
      description: "A cross-border product uploader for Shopify sellers. Designed to cut listing time by 80% with localizable automation logic.",
    },
    {
      title: "PassFlow",
      status: "Concept" as const,
      description: "A visa-optimization planner that uses entry/exit logic, passport privilege, and travel sequences to legally bypass travel restrictions.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-primary-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-silver-gray">
            Current ventures across AI, automation, and cross-border commerce
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
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
