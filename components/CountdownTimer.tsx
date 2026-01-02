
import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="flex items-center gap-2 text-ptd-red font-black uppercase tracking-widest text-xs mb-4 animate-pulse">
        <AlertTriangle size={14} /> Intake Closes In:
      </div>
      <div className="flex gap-4 md:gap-8 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black text-ptd-dark tabular-nums leading-none">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              {item.label}
            </span>
            {i < 3 && <div className="hidden md:block absolute text-2xl font-black text-gray-200 -mr-8">:</div>} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
