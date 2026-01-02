
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isSoftGreen?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, isSoftGreen }) => {
  return (
    <section 
      id={id}
      className={`py-16 md:py-24 px-6 ${isSoftGreen ? 'bg-ptd-softGreen' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
