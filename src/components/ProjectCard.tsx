import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  githubLink: string;
  liveDemoLink: string;
  color?: 'blue' | 'purple' | 'green';
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  features,
  techStack,
  githubLink,
  liveDemoLink,
  color = 'blue',
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const neonBorder = {
    blue: 'neon-border-blue',
    purple: 'neon-border-purple',
    green: 'neon-border-green',
  };

  const glowText = {
    blue: 'text-glow-blue',
    purple: 'text-glow-purple',
    green: 'text-glow-green',
  };

  const AnimatedButton = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: React.ReactNode;
    label: string;
  }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-xl active:shadow-inner transition-all duration-200"
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );

  return (
    <div
      className={`rounded-xl border p-4 shadow-lg transition-transform duration-300 hover:scale-[1.02] ${neonBorder[color]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className={`text-xl font-bold mb-2 ${glowText[color]}`}>{title}</h3>
      <p className="text-gray-400 mb-3">{description}</p>

      <ul className="list-disc list-inside text-sm text-gray-300 mb-3">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-800 text-white px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <AnimatedButton
          href={liveDemoLink}
          icon={<FaExternalLinkAlt />}
          label="Live Demo"
        />
        <AnimatedButton
          href={githubLink}
          icon={<FaGithub />}
          label="GitHub"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
