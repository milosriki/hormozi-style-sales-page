
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  ShieldCheck,
  Plus,
  Minus,
  CheckCircle2
} from 'lucide-react';
import Section from '../components/Section';
import VideoPlaceholder from '../components/VideoPlaceholder';
import PricingCard from '../components/PricingCard';
import StickyCTA from '../components/StickyCTA';
import ComparisonTable from '../components/ComparisonTable';
import CountdownTimer from '../components/CountdownTimer';
import BonusStack from '../components/BonusStack';
import TrustLogos from '../components/TrustLogos';
import { INTAKE_CLOSE_DATE, PRICING_DATA, TESTIMONIALS, ASSETS } from '../constants';

const SalesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen font-sans text-ptd-dark bg-white">
      
      {/* 1. GREEN HEADER STRIP */}
      <div className="bg-ptd-green text-white py-4 text-center sticky top-0 z-50 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-center gap-2">
          <span className="bg-white text-ptd-green text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest animate-pulse">Last Chance</span>
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">
             New Year "Superhuman" Intake Closes {INTAKE_CLOSE_DATE}
          </p>
        </div>
      </div>

      {/* 2. HERO SECTION - HORMOZI STYLE */}
      <section className="pt-12 pb-16 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 text-ptd-red bg-ptd-red/5 px-4 py-2 rounded-full font-black uppercase tracking-widest text-[10px] mb-6">
            <span className="w-2 h-2 rounded-full bg-ptd-red animate-pulse"></span>
            Warning: This is not a "Gym Membership"
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase text-balance"
          >
            "The Only Fitness Protocol Engineered For <span className="text-ptd-green">Dubai's Executives</span>"
          </motion.h1>

          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            We don't ask you to drive to a gym. We bring a clinical, data-driven transformation system directly to your Home, Office, or Villa.
          </p>

          <div className="max-w-4xl mx-auto mb-12 relative z-10">
            <VideoPlaceholder />
          </div>

          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto bg-[#5800FF] hover:bg-[#4a00db] text-white font-black text-xl md:text-2xl px-12 py-6 rounded-xl shadow-[0_10px_0_rgb(60,0,180)] hover:shadow-[0_6px_0_rgb(60,0,180)] hover:translate-y-[4px] transition-all uppercase tracking-wide mb-8 flex items-center justify-center gap-4 mx-auto"
            >
              Check Availability & Pricing <ArrowRight strokeWidth={4} />
            </button>

            <CountdownTimer targetDate="2026-01-15T23:59:59" />
          </div>

        </div>
      </section>

      {/* 3. TRUST & AUTHORITY */}
      <TrustLogos />

      {/* 4. SOCIAL PROOF STRIP */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <p className="text-xl font-black uppercase tracking-tight">
            Voted #1 Personal Training Company in Dubai
          </p>
        </div>
      </div>
      
      {/* 4b. TRANSFORMATION GRID (Dynamic) */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            PTD Series Has Over <span className="text-ptd-green">12,000</span> Success Stories
          </h2>
          <div className="w-full h-48 md:h-64 overflow-hidden relative rounded-3xl mt-10 bg-gray-50">
             <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10"></div>
             {/* Simulating the scrolling banner using ASSETS */}
             <div className="flex gap-4 absolute left-0 top-0 h-full animate-float opacity-80 hover:opacity-100 transition-all duration-500">
                {ASSETS.TRANSFORMATIONS.map((src, i) => (
                   <img key={i} src={src} className="h-full w-auto object-cover rounded-xl shadow-sm border border-gray-100" alt="Transformation" />
                ))}
                {/* Duplicate for visual length */}
                {ASSETS.TRANSFORMATIONS.map((src, i) => (
                   <img key={`dup-${i}`} src={src} className="h-full w-auto object-cover rounded-xl shadow-sm border border-gray-100" alt="Transformation" />
                ))}
             </div>
          </div>
        </div>
      </Section>

      {/* 5. THE PROBLEM/SOLUTION */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
              Why Most Dubai Fitness Plans <span className="text-ptd-red underline decoration-4 underline-offset-4">Fail</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
               <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 opacity-70">
                 <h3 className="font-black text-xl mb-6 text-gray-400 uppercase tracking-widest">The "Standard" Way</h3>
                 <ul className="space-y-5">
                   <li className="flex gap-4 text-gray-500 font-medium leading-tight"><Minus className="text-ptd-red shrink-0"/> You waste 45 mins driving to a crowded gym in traffic.</li>
                   <li className="flex gap-4 text-gray-500 font-medium leading-tight"><Minus className="text-ptd-red shrink-0"/> Trainer puts you on a cookie-cutter generic plan from a PDF.</li>
                   <li className="flex gap-4 text-gray-500 font-medium leading-tight"><Minus className="text-ptd-red shrink-0"/> You travel for business, fall off, and quit within 3 weeks.</li>
                 </ul>
               </div>
               <div className="bg-ptd-softGreen p-10 rounded-[2.5rem] border border-ptd-green/20 relative shadow-2xl">
                 <div className="absolute -top-4 -right-4 bg-ptd-green text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">The Superhuman Way</div>
                 <h3 className="font-black text-xl mb-6 text-ptd-dark uppercase tracking-widest">The PTD Way</h3>
                 <ul className="space-y-5">
                   <li className="flex gap-4 text-ptd-dark font-bold leading-tight"><CheckCircle2 className="text-ptd-green shrink-0"/> We arrive at your door. You save 5+ hours a week.</li>
                   <li className="flex gap-4 text-ptd-dark font-bold leading-tight"><CheckCircle2 className="text-ptd-green shrink-0"/> Biometric Audit & Bloodwork Analysis dictates a scientific plan.</li>
                   <li className="flex gap-4 text-ptd-dark font-bold leading-tight"><CheckCircle2 className="text-ptd-green shrink-0"/> Hotel Room Protocols keep you lean while you travel.</li>
                 </ul>
               </div>
            </div>
        </div>
      </Section>

      {/* 6. BONUS STACK */}
      <Section isSoftGreen>
         <div className="max-w-4xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                We Don't Just Train You. <br/>
                <span className="text-ptd-green">We Manage Your Health.</span>
              </h2>
           </div>
           
           <BonusStack />

           <div className="mt-16 text-center">
             <p className="text-xl font-black text-ptd-dark mb-6 uppercase tracking-tight">
               These Bonuses are INCLUDED in all packages below:
             </p>
             <div className="h-12 w-0.5 bg-ptd-dark mx-auto"></div>
             <ArrowRight className="mx-auto text-ptd-dark -mt-3 rotate-90" />
           </div>
         </div>
      </Section>

      {/* 7. PRICING SECTION */}
      <Section id="pricing" className="bg-ptd-dark relative overflow-hidden">
        <div className="absolute inset-0 glow-gradient opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">Select Your Package</h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest">Limited Availability for January Intake</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-end">
            {PRICING_DATA.map((opt) => (
              <PricingCard key={opt.id} option={opt} />
            ))}
          </div>
        </div>
      </Section>

      {/* 8. COMPARISON TABLE */}
      <Section className="bg-white">
         <div className="text-center mb-12">
           <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Stop Hiring "Reps Counters"</h2>
           <p className="text-gray-500 font-medium">Get a Coach who understands physiology.</p>
         </div>
         <ComparisonTable />
      </Section>

      {/* 9. GUARANTEE */}
      <Section isSoftGreen>
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="shrink-0">
               <ShieldCheck size={120} className="text-ptd-green" strokeWidth={1} />
            </div>
            <div>
               <h3 className="text-3xl font-black uppercase tracking-tight mb-4">The PTD Promise</h3>
               <p className="text-lg font-medium text-gray-600 leading-relaxed">
                 We are so confident in our "Superhuman Protocol" that we offer a risk-free start. If you aren't convinced by the professionalism and quality of your coach in the first 3 sessions, we refund 100% of your unused package. No arguments.
               </p>
            </div>
         </div>
      </Section>

      {/* 10. FAQ */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Where does the training happen?", a: "We come to you. We train clients in Palm Jumeirah, Dubai Marina, Emirates Hills, Downtown, Jumeirah Golf Estates, and more. Your building gym, your home gym, or your office." },
              { q: "Do I need equipment?", a: "No. Our coaches arrive with a complete kit of functional tools (TRX, Kettlebells, Bands, Mats). If you have a gym, we utilize it to the max." },
              { q: "Are the coaches actually qualified?", a: "Yes. PTD is famous for this. We only hire coaches with Sports Science Degrees and valid REPs Level 4 certifications. No 'weekend warriors'." },
              { q: "What if I travel for business?", a: "Your sessions do not expire while you are an active client. Plus, we give you a travel plan to maintain results while you are away." },
              { q: "What is the refund policy?", a: "We offer a 'Risk-Free Start'. If you are not completely satisfied with the quality of service after your first 3 sessions, we will refund 100% of your unused sessions. No questions asked." },
              { q: "How are sessions scheduled?", a: "You get a dedicated WhatsApp channel with your coach. You can book sessions week-to-week or set a recurring slot that fits your lifestyle. We offer flexible cancellation up to 12 hours before." }
            ].map((faq, i) => (
              <div 
                key={i} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'bg-ptd-softGreen border-ptd-green shadow-lg ring-1 ring-ptd-green/20' : 'bg-gray-50 border-gray-100 hover:border-gray-200'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg transition-colors ${openFaq === i ? 'text-ptd-green' : 'text-ptd-dark'}`}>{faq.q}</span>
                  {openFaq === i ? <Minus size={20} className="text-ptd-green" /> : <Plus size={20} className="text-gray-400" />}
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 pt-0 text-ptd-dark font-medium leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 11. FINAL FOOTER SIGNATURE */}
      <div className="py-24 px-6 bg-white text-center">
         <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-8">
              "We built PTD because we saw busy people in Dubai sacrificing their health for their wealth. We realized you don't have to choose. You just need a system that respects your time."
            </p>
            <p className="font-black text-3xl font-serif italic text-ptd-dark mb-12">- The PTD Team</p>
            
            <div className="bg-ptd-dark text-white p-12 rounded-[2rem] shadow-2xl">
               <h3 className="text-3xl font-black uppercase mb-8">Start Your Transformation Today</h3>
               <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-[#5800FF] hover:bg-[#4a00db] text-white font-black text-xl py-6 rounded-xl uppercase tracking-wide transition-all"
               >
                 Click Here To View Packages
               </button>
               <p className="mt-6 text-xs text-gray-400 hover:underline cursor-pointer">
                 Terms & Conditions | Privacy Policy <br/>
                 Copyright 2026 Personal Trainers Dubai
               </p>
            </div>
         </div>
      </div>

      <StickyCTA />
    </div>
  );
};

export default SalesPage;
