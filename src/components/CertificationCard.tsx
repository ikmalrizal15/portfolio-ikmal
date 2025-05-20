
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  color?: 'blue' | 'purple' | 'green';
  className?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  description,
  color = 'blue',
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        'glass-card rounded-lg transition-all duration-300',
        neonBorder[color],
        className
      )}
    >
      <div 
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h3 className={cn('text-lg font-bold', glowText[color])}>{title}</h3>
          <p className="text-gray-400 text-sm">{issuer} • {date}</p>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-4 pt-0 border-t border-gray-700 mt-2 animate-fade-in">
          <p className="text-gray-300">{description}</p>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;
