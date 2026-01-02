
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Sparkles, ArrowRight, Gift } from 'lucide-react';
import { PricingOption } from '../types';
import { DEMO_MODE, trackEvent } from '../constants';
import { useNavigate } from 'react-router-dom';

interface PricingCardProps {
  option: PricingOption;
}

const PricingCard: React.FC<PricingCardProps> = ({ option }) => {
  const [isInstallment, setIsInstallment] = useState(false);
  const navigate = useNavigate();

  const handlePurchase = () => {
    const paymentType = isInstallment ? 'installment' : 'full';
    const link = isInstallment ? option.installmentStripeLink : option.fullStripeLink;
    
    trackEvent("pricing_card", option.id, paymentType);

    if (DEMO_MODE) {
      navigate(`/thank-you?package=${option.id}&pay=${paymentType}`);
    } else if (link) {
      window.open(link, '_blank');
    }
  };

  const currentExPrice = isInstallment && option.exVatInstallment ? option.exVatInstallment : option.exVatFull;
  const currentIncPrice = isInstallment && option.incVatInstallment ? option.incVatInstallment : option.incVatFull;
  
  // Psychological Anchoring: Calculate a "Total Value" to show the massive discount
  // Assuming Bonuses are worth ~3500 AED + Session Rate of ~500 AED/session
  const perceivedValue = (option.sessions * 550) + 3500; 

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`relative p-8 md:p-10 rounded-[3rem] bg-white border-2 flex flex-col h-full transition-all duration-500 ${option.mostPopular ? 'border-ptd-gold shadow-[0_30px_60px_rgba(212,175,55,0.2)] z-10 scale-105 md:scale-105' : 'border-gray-100 shadow-xl opacity-90 hover:opacity-100'}`}
    >
      {option.mostPopular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-ptd-gold to-ptd-goldAccent text-ptd-dark text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.25em] shadow-xl flex items-center gap-2 whitespace-nowrap">
          <Sparkles size={12} /> Best Value
        </div>
      )}

      <div className="mb-6 text-center border-b border-gray-100 pb-6">
        <h3 className="text-3xl font-black mb-2 tracking-tighter text-ptd-dark">{option.name}</h3>
        <p className="text-ptd-textGray text-xs font-bold uppercase tracking-widest">{option.sessions} Elite Sessions</p>
      </div>

      {/* PRICE ANCHORING */}
      <div className="text-center mb-2">
         <span className="text-gray-400 line-through text-sm font-bold decoration-ptd-red decoration-2">
           Total Value: {perceivedValue.toLocaleString()} AED
         </span>
      </div>

      <div className="mb-8 p-6 bg-ptd-lightGray rounded-[2rem] border border-gray-100 flex flex-col items-center relative overflow-hidden">
        {isInstallment && (
           <div className="absolute top-0 right-0 bg-ptd-green text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
             Flexible Pay
           </div>
        )}
        
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-5xl font-black text-ptd-dark tabular-nums tracking-tighter">{currentExPrice.toLocaleString()}</span>
          <span className="text-sm font-black text-ptd-textGray uppercase">AED</span>
        </div>
        <p className="text-ptd-textGray text-[9px] font-black uppercase tracking-[0.3em] mb-2">Excluding VAT</p>
        
        <div className="w-full pt-3 border-t border-gray-200 text-center">
          <p className="text-ptd-dark font-black text-xs uppercase tracking-widest">
            {currentIncPrice.toLocaleString()} AED Inc VAT
          </p>
          {isInstallment ? (
             <div className="mt-2 text-ptd-green text-[10px] font-black uppercase tracking-wider">
               Pay {option.installments}x Monthly
             </div>
          ) : (
            <div className="mt-2 text-ptd-green text-[10px] font-black uppercase tracking-wider">
               One-Time Payment
             </div>
          )}
        </div>
      </div>

      {option.installments && (
        <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
          <button 
            onClick={() => setIsInstallment(false)}
            className={`flex-1 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all duration-300 ${!isInstallment ? 'bg-white shadow-sm text-ptd-dark' : 'text-gray-400 hover:text-ptd-dark'}`}
          >
            Pay Full
          </button>
          <button 
            onClick={() => setIsInstallment(true)}
            className={`flex-1 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all duration-300 ${isInstallment ? 'bg-white shadow-sm text-ptd-dark' : 'text-gray-400 hover:text-ptd-dark'}`}
          >
            Split Pay
          </button>
        </div>
      )}

      {/* FEATURE STACK */}
      <ul className="space-y-4 mb-10 flex-grow">
        {[
          "Master's Degree Elite Coach",
          "Flex-Schedule Protection",
          "Priority January Onboarding"
        ].map((feat, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="bg-gray-100 p-1 rounded-full shrink-0 mt-0.5">
              <Check className="text-ptd-dark" size={10} strokeWidth={4} />
            </div>
            <span className="text-gray-600 font-bold text-xs tracking-tight leading-tight">{feat}</span>
          </li>
        ))}
        
        {/* BONUS SECTION HIGHLIGHT */}
        <div className="my-4 border-t border-dashed border-gray-200"></div>
        
        {[
          "Biometric Audit (Worth 2000 AED)",
          "Nutrition Protocol (Worth 1500 AED)",
          "Travel Blueprint (Priceless)"
        ].map((bonus, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="bg-ptd-softGreen p-1 rounded-full shrink-0 mt-0.5">
              <Gift className="text-ptd-green" size={10} strokeWidth={4} />
            </div>
            <span className="text-ptd-dark font-black text-xs tracking-tight leading-tight">{bonus}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={handlePurchase}
        className={`w-full font-black py-6 rounded-2xl transition-all shadow-xl uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group ${option.mostPopular ? 'bg-ptd-green text-white shadow-ptd-green/30' : 'bg-ptd-dark text-white'}`}
      >
        Select Package <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-4 flex justify-center">
        <div className="flex items-center gap-1.5 text-[8px] text-gray-400 font-bold uppercase tracking-widest">
          <ShieldCheck size={10} className="text-ptd-gold" />
          Secure Stripe Checkout
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
