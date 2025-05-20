
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  color?: 'blue' | 'purple' | 'green';
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  features,
  techStack,
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

  return (
    <div
      className={cn(
        'glass-card rounded-lg p-6 transition-all duration-300',
        neonBorder[color],
        isHovered && 'transform -translate-y-2',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className={cn('text-xl font-bold mb-3', glowText[color])}>{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-white mb-2">Features</h4>
        <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div className="pt-3 border-t border-gray-700">
        <h4 className="font-semibold text-white mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={cn(
                'px-2 py-1 text-xs rounded-full',
                `bg-${color === 'blue' ? 'neon-blue' : color === 'purple' ? 'neon-purple' : 'neon-green'}/10 text-${color === 'blue' ? 'neon-blue' : color === 'purple' ? 'neon-purple' : 'neon-green'}`
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
