
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, ArrowRight, CheckCircle, Share2, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import confetti from 'canvas-confetti';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#2E7D32', '#D4AF37', '#1A1A1A']
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ptd-dark flex flex-col items-center justify-center p-6 selection:bg-ptd-green">
      <div className="absolute inset-0 glow-gradient opacity-30"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden relative z-10"
      >
        <div className="bg-ptd-green p-16 text-center text-white relative">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12 }}
            className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <CheckCircle className="text-ptd-green" size={48} strokeWidth={3} />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">You're In.</h1>
          <p className="text-xl font-medium opacity-90 tracking-tight">The Momentum Starts Right Now.</p>
        </div>

        <div className="p-10 md:p-16 space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-black flex items-center gap-4 tracking-tight">
              <span className="w-10 h-10 rounded-2xl bg-ptd-softGreen text-ptd-green flex items-center justify-center font-black">1</span>
              Immediate Action
            </h2>
            <p className="text-ptd-textGray font-medium leading-relaxed text-lg">
              Join the private Onboarding WhatsApp Bridge. Our team is waiting to greet you and verify your biometrics.
            </p>
            <button className="w-full bg-[#25D366] hover:bg-[#20bd5c] text-white font-black py-6 rounded-2xl flex items-center justify-center gap-4 shadow-xl shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-95 text-xl">
              <MessageCircle fill="white" /> Enter WhatsApp Bridge
            </button>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black flex items-center gap-4 tracking-tight">
              <span className="w-10 h-10 rounded-2xl bg-ptd-softGreen text-ptd-green flex items-center justify-center font-black">2</span>
              Lock Your Assessment
            </h2>
            <p className="text-ptd-textGray font-medium leading-relaxed text-lg">
              Select your preferred window for your phase-1 assessment. We will come to you.
            </p>
            <button className="w-full bg-ptd-dark hover:bg-black text-white font-black py-6 rounded-2xl flex items-center justify-center gap-4 shadow-2xl transition-all hover:scale-[1.02] active:scale-95 text-xl">
              <Calendar /> Schedule Assessment
            </button>
          </div>

          <div className="bg-ptd-softGreen p-8 rounded-[2rem] border border-ptd-green/10">
            <h3 className="text-xl font-black mb-6 flex items-center gap-3 tracking-tight">
              <TrendingUp size={24} className="text-ptd-green" />
              The Next 7 Days:
            </h3>
            <ul className="space-y-4 text-ptd-textGray font-bold uppercase tracking-widest text-[10px]">
              <li className="flex gap-4 items-center">
                <ArrowRight size={16} className="text-ptd-green shrink-0" />
                <span>Onboarding call with Head of Performance</span>
              </li>
              <li className="flex gap-4 items-center">
                <ArrowRight size={16} className="text-ptd-green shrink-0" />
                <span>Custom Metabolic Blueprint Delivery</span>
              </li>
              <li className="flex gap-4 items-center">
                <ArrowRight size={16} className="text-ptd-green shrink-0" />
                <span>Phase 01 Session: Physiological Foundation</span>
              </li>
            </ul>
          </div>

          <div className="pt-10 border-t border-gray-100 text-center">
            <p className="text-sm font-black text-ptd-textGray mb-6 uppercase tracking-[0.2em]">New Year Referral Incentive</p>
            <button className="inline-flex items-center gap-3 text-ptd-green font-black hover:underline text-lg hover:scale-105 transition-transform">
              <Share2 size={24} /> Bring a partner & you both get 2 free sessions
            </button>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-12 text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-3">
        <ShieldCheck size={16} className="text-ptd-gold" />
        Order Secured & Logged
      </div>
    </div>
  );
};

export default ThankYouPage;
