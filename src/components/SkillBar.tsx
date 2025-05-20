
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  color?: 'blue' | 'purple' | 'green';
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  level, 
  color = 'blue',
  className 
}) => {
  const neonColors = {
    blue: 'bg-neon-blue/20 border-neon-blue',
    purple: 'bg-neon-purple/20 border-neon-purple',
    green: 'bg-neon-green/20 border-neon-green'
  };
  
  const barColors = {
    blue: 'bg-neon-blue',
    purple: 'bg-neon-purple',
    green: 'bg-neon-green'
  };
  
  const textColors = {
    blue: 'text-glow-blue',
    purple: 'text-glow-purple',
    green: 'text-glow-green'
  };

  return (
    <div className={cn("mb-6", className)}>
      <div className="flex justify-between mb-2">
        <h3 className="font-medium text-gray-200">{name}</h3>
        <span className={cn("font-semibold", textColors[color])}>
          {level}%
        </span>
      </div>
      <div className={cn(
        "h-2.5 rounded-full overflow-hidden border", 
        neonColors[color]
      )}>
        <div 
          className={cn("h-full rounded-full", barColors[color])}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
