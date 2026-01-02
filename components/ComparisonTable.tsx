
import React from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ComparisonTable: React.FC = () => {
  const features = [
    { name: "Coach Qualification", ptd: "Sports Science Degree / REPs L4", other: "Weekend Online Cert (L2/L3)" },
    { name: "Convenience", ptd: "We Come To You (Home/Office)", other: "You Travel To Gym" },
    { name: "Nutrition Strategy", ptd: "Macro-Based Lifestyle Audit", other: "Generic PDF Meal Plan" },
    { name: "Progress Tracking", ptd: "Clinical Biometrics & Data", other: "Mirror Selfies & Guesswork" },
    { name: "Session Flexibility", ptd: "Sessions Never Expire", other: "Use It Or Lose It" },
    { name: "Risk Profile", ptd: "3-Session Money-Back Guarantee", other: "Locked In Contract" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
      <div className="grid grid-cols-3 bg-ptd-dark text-white p-6 md:p-8 items-center">
        <div className="col-span-1">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">The Choice</span>
        </div>
        <div className="col-span-1 text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Freelance PT</div>
          <div className="text-xl md:text-2xl font-black text-gray-500 line-through decoration-ptd-red decoration-4">Standard</div>
        </div>
        <div className="col-span-1 text-center relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-ptd-gold text-ptd-dark text-[9px] font-black uppercase px-3 py-1 rounded-b-lg shadow-lg tracking-widest whitespace-nowrap">
            Elite Standard
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-ptd-gold mb-2">PTD Fitness</div>
          <div className="text-xl md:text-2xl font-black text-white">Superhuman</div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-3 p-6 md:p-8 items-center hover:bg-gray-50 transition-colors"
          >
            <div className="col-span-1">
              <h4 className="font-bold text-xs md:text-sm uppercase tracking-wider text-ptd-dark">{feature.name}</h4>
            </div>
            
            <div className="col-span-1 flex flex-col items-center justify-center text-center opacity-40 grayscale">
              <span className="text-xs md:text-sm font-medium text-gray-500 mb-2">{feature.other}</span>
              <XCircle size={20} className="text-ptd-red" />
            </div>

            <div className="col-span-1 flex flex-col items-center justify-center text-center bg-ptd-green/5 -my-8 py-8 rounded-xl border border-ptd-green/10">
              <span className="text-xs md:text-sm font-black text-ptd-dark mb-2">{feature.ptd}</span>
              <CheckCircle2 size={24} className="text-ptd-green" fill="#F0F8F0" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-4 text-center">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <HelpCircle size={12} /> Independent Market Comparison 2025
        </p>
      </div>
    </div>
  );
};

export default ComparisonTable;
