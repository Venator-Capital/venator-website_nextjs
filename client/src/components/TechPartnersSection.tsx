import { motion } from "framer-motion";

export default function TechPartnersSection() {
  // Core technology stack - frameworks and languages we use directly
  const coreTechStack = [
    {
      href: 'https://www.tensorflow.org/',
      src: '/logos/brand_logo_svg/tensorflow-svgrepo-com.svg',
      alt: 'TensorFlow',
      ariaLabel: 'Built with TensorFlow',
    },
    {
      href: 'https://pytorch.org/',
      src: '/logos/brand_logo_svg/pytorch-svgrepo-com.svg',
      alt: 'PyTorch',
      ariaLabel: 'Built with PyTorch',
    },
    {
      href: 'https://www.docker.com/',
      src: '/logos/brand_logo_svg/docker-svgrepo-com.svg',
      alt: 'Docker',
      ariaLabel: 'Containerized with Docker',
    },
    {
      href: 'https://kubernetes.io/',
      src: '/logos/brand_logo_svg/kubernetes-svgrepo-com.svg',
      alt: 'Kubernetes',
      ariaLabel: 'Orchestrated with Kubernetes',
    },
    {
      href: 'https://github.com/',
      src: '/logos/brand_logo_svg/github-svgrepo-com.svg',
      alt: 'GitHub',
      ariaLabel: 'Source Code on GitHub',
    },
    {
      href: 'https://www.figma.com/',
      src: '/logos/brand_logo_svg/figma-svgrepo-com.svg',
      alt: 'Figma',
      ariaLabel: 'Designed in Figma',
    },
  ];

  // Technology partners - external services and platforms we integrate with
  const partners = [
    {
      href: 'https://openai.com/',
      src: '/logos/brand_logo_svg/openai-svgrepo-com.svg',
      alt: 'OpenAI',
      ariaLabel: 'Powered by OpenAI',
    },
    {
      href: 'https://www.anthropic.com/',
      src: '/logos/brand_logo_svg/anthropic_Logo.svg',
      alt: 'Anthropic',
      ariaLabel: 'Powered by Anthropic',
    },
    {
      href: 'https://huggingface.co/',
      src: '/logos/brand_logo_svg/huggingfacelogo.svg',
      alt: 'Hugging Face',
      ariaLabel: 'Powered by Hugging Face',
    },
    {
      href: 'https://aws.amazon.com/',
      src: '/logos/brand_logo_svg/aws-svgrepo-com.svg',
      alt: 'AWS',
      ariaLabel: 'Hosted on AWS',
    },
    {
      href: 'https://cloud.google.com/',
      src: '/logos/brand_logo_svg/google-cloud-svgrepo-com.svg',
      alt: 'Google Cloud',
      ariaLabel: 'Hosted on Google Cloud',
    },
    {
      href: 'https://azure.microsoft.com/',
      src: '/logos/brand_logo_svg/azure-icon-svgrepo-com.svg',
      alt: 'Azure',
      ariaLabel: 'Hosted on Microsoft Azure',
    },
    {
      href: 'https://supabase.com/',
      src: '/logos/brand_logo_svg/supabase-logo-icon.svg',
      alt: 'Supabase',
      ariaLabel: 'Powered by Supabase',
    },
    {
      href: 'https://vercel.com/',
      src: '/logos/brand_logo_svg/vercel-svgrepo-com.svg',
      alt: 'Vercel',
      ariaLabel: 'Deployed on Vercel',
    },
    {
      href: 'https://www.notion.so/',
      src: '/logos/brand_logo_svg/notion.svg',
      alt: 'Notion',
      ariaLabel: 'Collaborate with Notion',
    },
    {
      href: 'https://slack.com/',
      src: '/logos/brand_logo_svg/slack.svg',
      alt: 'Slack',
      ariaLabel: 'Communicate via Slack',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="tech-partners" className="py-24 section-primary">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            Technology <span className="text-accent-gold">Ecosystem</span>
          </h2>
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Our Core Tech Stack & Industry Partners
          </p>
        </motion.div>

        {/* Core Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-medium mb-8 text-white">Core Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {coreTechStack.map(({ href, src, alt, ariaLabel }) => (
              <motion.a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group block bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-200"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="h-12 md:h-14 w-auto object-contain mx-auto opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Technology Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-medium mb-8 text-white">Technology Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {partners.map(({ href, src, alt, ariaLabel }) => (
              <motion.a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group block bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-200"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="h-12 md:h-14 w-auto object-contain mx-auto opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}