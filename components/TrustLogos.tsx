
import React from 'react';
import { Award, Globe, Shield, TrendingUp } from 'lucide-react';

const TrustLogos: React.FC = () => {
  const authorities = [
    { icon: <Award size={24} />, name: "REPs UAE", label: "Level 4 Certified" },
    { icon: <Shield size={24} />, name: "Dubai Sports Council", label: "Registered Facility" },
    { icon: <TrendingUp size={24} />, name: "Men's Health", label: "Featured Approach" },
    { icon: <Globe size={24} />, name: "TimeOut Dubai", label: "Editor's Choice" }
  ];

  return (
    <div className="w-full bg-white py-12 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-10">
          The Standard For Dubai's Elite
        </p>
        
        {/* Location Ticker Effect */}
        <div className="relative overflow-hidden mb-12 py-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex justify-center gap-12 md:gap-24 opacity-40">
             {["PALM JUMEIRAH", "EMIRATES HILLS", "DIFC", "ARABIAN RANCHES", "DUBAI MARINA", "JUMEIRAH"].map((loc, i) => (
                <span key={i} className="text-xl md:text-3xl font-black text-ptd-dark tracking-tighter whitespace-nowrap">{loc}</span>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {authorities.map((auth, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-ptd-gold/30 hover:bg-ptd-gold/5 transition-all duration-300 group cursor-default">
              <div className="text-gray-300 group-hover:text-ptd-gold transition-colors mb-3">
                {auth.icon}
              </div>
              <span className="text-sm font-black text-ptd-dark leading-tight mb-1">{auth.name}</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-ptd-dark transition-colors">{auth.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustLogos;
