import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  icon: string; // image filename like 'Java.png'
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  icon,
  className
}) => {
  return (
    <div className={cn("mb-6 flex items-center space-x-4", className)}>
      <img
        src={`/skills/${icon}`}
        alt={name}
        className="w-10 h-10 object-contain"
      />
      <span className="text-gray-200 font-medium">{name}</span>
    </div>
  );
};

export default SkillBar;
