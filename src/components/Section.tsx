
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  neonColor?: 'blue' | 'purple' | 'green';
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  className,
  titleClassName,
  neonColor = 'blue',
  children,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const neonClasses = {
    blue: 'text-glow-blue',
    purple: 'text-glow-purple',
    green: 'text-glow-green',
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn("section-padding scroll-mt-20", className)}
    >
      <div className="container mx-auto px-4">
        <header className={cn(
          "mb-12 opacity-0 transition-opacity duration-700",
          isVisible && "opacity-100"
        )}>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-2", 
            neonClasses[neonColor],
            titleClassName
          )}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-300">{subtitle}</p>
          )}
        </header>
        
        <div className={cn(
          "opacity-0 transition-all duration-700 delay-300",
          isVisible && "opacity-100"
        )}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
