
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ASSETS } from '../constants';

const BonusStack: React.FC = () => {
  const bonuses = [
    {
      id: 1,
      title: "The 'Invisible' Nutrition Protocol",
      value: "1,500 AED",
      desc: "We don't give you a chicken and broccoli diet. We build a nutrition strategy that fits around business lunches, brunches, and family dinners. You eat the foods you love, we just adjust the math.",
      img: ASSETS.BONUS_NUTRITION
    },
    {
      id: 2,
      title: "Clinical Biometric Audit & Styku 3D Scan",
      value: "2,000 AED",
      desc: "Stop guessing. We use clinical-grade body composition analysis to see exactly how much visceral fat you have and exactly where your muscle imbalances are. Data dictates the program.",
      img: ASSETS.BONUS_SCAN
    },
    {
      id: 3,
      title: "The Jet-Lag & Travel Blueprint",
      value: "Priceless",
      desc: "Dubai residents travel. A lot. We provide you with 'Hotel Room Protocols' and specific strategies to mitigate jet lag so you don't blow 3 months of progress during a 1-week business trip.",
      img: ASSETS.BONUS_TRAVEL
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-2">Plus, We Include These Tools...</h3>
        <p className="text-ptd-textGray font-medium">(Standard with every "Superhuman" Transformation Package)</p>
      </div>

      {bonuses.map((bonus, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-video rounded-2xl overflow-hidden relative shadow-lg bg-gray-100">
              <img src={bonus.img} alt={bonus.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-ptd-red text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Bonus #{bonus.id}
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 text-left">
            <h4 className="text-2xl font-black text-ptd-dark mb-2">{bonus.title}</h4>
            <div className="inline-block bg-yellow-100 text-yellow-800 text-[10px] font-black px-2 py-1 rounded mb-4 uppercase tracking-wide">
              Value: {bonus.value}
            </div>
            <p className="text-ptd-textGray font-medium leading-relaxed mb-4">
              {bonus.desc}
            </p>
            <div className="flex items-center gap-2 text-ptd-green font-bold text-xs uppercase tracking-wide">
              <Check size={16} strokeWidth={3} /> Included Free
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BonusStack;
