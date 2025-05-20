
import React from 'react';
import { cn } from '@/lib/utils';

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  details: string | string[];
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue/70 via-neon-purple/70 to-neon-green/70 transform md:-translate-x-1/2" />
      
      {items.map((item, index) => (
        <div 
          key={index}
          className={cn(
            "relative mb-12 last:mb-0",
            "md:w-1/2 md:clear-right",
            index % 2 === 0 ? "md:float-left md:pr-10" : "md:float-right md:pl-10 md:clear-left"
          )}
        >
          {/* Timeline dot */}
          <div 
            className={cn(
              "absolute top-0 w-4 h-4 rounded-full transform -translate-y-1/2 border-2 animate-pulse",
              "left-[-8px] md:left-auto",
              index % 2 === 0 ? "md:right-[-8px]" : "md:left-[-8px]",
              index % 3 === 0 ? "border-neon-blue bg-neon-blue/20" :
              index % 3 === 1 ? "border-neon-purple bg-neon-purple/20" :
              "border-neon-green bg-neon-green/20"
            )}
          />
          
          {/* Content */}
          <div 
            className={cn(
              "glass-card p-6 rounded-lg ml-6 md:ml-0",
              "transform transition-all duration-500 hover:-translate-y-1",
              index % 3 === 0 ? "neon-border-blue" :
              index % 3 === 1 ? "neon-border-purple" :
              "neon-border-green"
            )}
          >
            <h3 className="text-xl font-bold mb-1">
              {item.title}
            </h3>
            <h4 className={cn(
              "text-lg font-medium mb-2",
              index % 3 === 0 ? "text-glow-blue" :
              index % 3 === 1 ? "text-glow-purple" :
              "text-glow-green"
            )}>
              {item.organization}
            </h4>
            <p className="text-gray-400 text-sm mb-3">{item.period}</p>
            
            {/* Details can be string or list */}
            {typeof item.details === 'string' ? (
              <p className="text-gray-300">{item.details}</p>
            ) : (
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
