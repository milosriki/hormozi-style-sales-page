
import React, { useRef, useState, useEffect } from 'react';
import { VolumeX, Volume2, Play } from 'lucide-react';
import { ASSETS } from '../constants';

const VideoPlaceholder: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // If ASSETS.HERO_VIDEO_URL is empty, we fall back to the image placeholder behavior
  const hasVideo = !!ASSETS.HERO_VIDEO_URL;

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0; // Restart for impact
      videoRef.current.play().catch(e => console.log("Play error", e));
      setIsMuted(false);
      setHasInteracted(true);
    }
  };

  return (
    <div 
      className="relative group cursor-pointer aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-white/10"
      onClick={handleUnmute}
    >
      {hasVideo ? (
        <video 
          ref={videoRef}
          src={ASSETS.HERO_VIDEO_URL}
          poster={ASSETS.HERO_VIDEO_POSTER}
          className="w-full h-full object-cover"
          playsInline
          autoPlay
          muted
          loop
        />
      ) : (
        <img 
          src={ASSETS.HERO_VIDEO_POSTER} 
          alt="Training Montage" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500"
        />
      )}
      
      {/* Overlay: Only show if muted or no video */}
      {(!hasInteracted || !hasVideo) && (
        <>
          <div className="absolute inset-0 bg-ptd-dark/40 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/60 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center border border-white/10 hover:scale-105 transition-transform duration-300">
              <VolumeX className="text-white mb-3" size={40} strokeWidth={1.5} />
              <p className="text-white font-black text-lg md:text-xl uppercase tracking-wide text-center leading-tight">
                Your Video Is Playing <br/>
                <span className="text-ptd-green">Click To Unmute</span>
              </p>
            </div>
          </div>
        </>
      )}

      {/* Live Indicator */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 pointer-events-none">
         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
         <span className="text-white text-[10px] font-bold uppercase tracking-widest">
           {hasVideo ? "Live Preview" : "Waiting for Video"}
         </span>
      </div>

      {/* Unmuted Controls Hint */}
      {hasInteracted && !isMuted && (
        <div className="absolute bottom-4 left-4 pointer-events-none">
          <Volume2 className="text-white/50" size={24} />
        </div>
      )}
    </div>
  );
};

export default VideoPlaceholder;
