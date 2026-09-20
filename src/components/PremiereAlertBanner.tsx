import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PremiereAlertBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('asif_talks_premiere_dismissed');
    if (!isDismissed) {
      // Delay entrance by 2 seconds so it feels organic and high-end
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('asif_talks_premiere_dismissed', 'true');
  };

  const whatsappUrl =
    'https://wa.me/918788740090?text=' +
    encodeURIComponent('Hi Asif, please send me the direct VIP link when Episode 2 (Mayor of Parbhani) premieres!');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 z-40 w-auto sm:w-full max-w-sm sm:max-w-md rounded-2xl border border-[#00d2ff]/40 bg-[#070b14]/95 backdrop-blur-xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(0,210,255,0.15)]"
        >
          {/* Top Header Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                PREMIERE PIPELINE // EPISODE 02
              </span>
            </div>

            <button
              onClick={handleDismiss}
              aria-label="Dismiss alert"
              className="w-6 h-6 rounded-full border border-zinc-700 bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center text-xs transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Main Copy */}
          <div className="mb-4">
            <h4
              className="text-lg sm:text-xl font-normal text-white uppercase leading-snug"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              DON&apos;T MISS EPISODE 02 PREMIERE
            </h4>
            <p
              className="text-xs text-zinc-300 font-light leading-relaxed mt-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              The sit-down with the <strong className="text-white font-medium">Honorable Mayor of Parbhani</strong> on municipal governance and city roadmaps is entering final cut. Get the direct 4K VIP link on WhatsApp!
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center space-x-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-mono text-xs font-bold tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all hover:scale-[1.02]"
            >
              <span>📲</span>
              <span>GET WHATSAPP ALERT</span>
              <span>➔</span>
            </a>

            <button
              onClick={handleDismiss}
              className="px-3 py-2.5 rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
            >
              Later
            </button>
          </div>

          {/* Live Micro Indicator */}
          <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[9.5px] font-mono text-zinc-500">
            <span>Direct to: +91 8788740090</span>
            <span className="text-[#00d2ff]">Free Broadcast Alerts</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PremiereAlertBanner;
