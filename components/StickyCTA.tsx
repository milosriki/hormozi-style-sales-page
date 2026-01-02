
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { trackEvent } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after hero (roughly 600px)
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    trackEvent("sticky_cta");
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden bg-white border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
        >
          <div className="max-w-md mx-auto space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-ptd-textGray font-bold uppercase tracking-widest">
              <ShieldCheck size={12} className="text-ptd-gold" />
              Secure Checkout Active
            </div>
            <button 
              onClick={handleClick}
              className="w-full bg-ptd-green text-white font-extrabold py-4 rounded-xl shadow-lg active:scale-95 transition-transform"
            >
              Start My Transformation
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
