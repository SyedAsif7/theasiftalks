import React from 'react';
import asifTalksBadge from '../assets/asif-talks-badge.jpg';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#03060a] text-[#E8DFD8] font-sans selection:bg-[#00d2ff] selection:text-black pt-20 pb-12 px-6 sm:px-12 lg:px-20 border-t border-zinc-900 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] bg-[#00d2ff]/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/80 items-start">
          
          {/* Brand & Show Description (5 Cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#00d2ff]/60 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                <img
                  src={asifTalksBadge}
                  alt="The Asif Talks Badge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span
                  className="text-lg font-bold tracking-[0.2em] uppercase text-white block"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  THE ASIF TALKS
                </span>
                <span className="text-[9.5px] font-mono tracking-widest text-[#00d2ff] uppercase">
                  @TheAsifTalks // OFFICIAL SHOW
                </span>
              </div>
            </div>

            <p
              className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Unfiltered dialogues with leaders, bureaucrats &amp; changemakers. Deconstructing civil administration, municipal governance, tech ecosystems, and high-stakes decision-making for youth in tier-2 and tier-3 cities.
            </p>

            <div className="flex items-center space-x-2 text-[10.5px] font-mono text-zinc-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Host:</span>
              <span className="text-white font-medium">Syed Asif (Syed Asif Syed Gaffar)</span>
            </div>
          </div>

          {/* Institutional Support (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] block">
              // INSTITUTIONAL SUPPORT &amp; PRODUCTION
            </span>
            <div className="flex items-center space-x-3 py-1">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#00d2ff]/60 bg-black">
                <img src="/asif-talks-badge.jpg" alt="The Asif Talks" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-zinc-800 bg-black/80 p-0.5">
                <img src="/dcode-logo.png" alt="DDSC" className="h-full w-full object-contain" />
              </div>
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-zinc-800 bg-black/80 p-0.5">
                <img src="/ssiems-logo.png" alt="SSIEMS" className="h-full w-full object-contain" />
              </div>
              <div className="w-12 h-10 rounded-lg overflow-hidden border border-zinc-800 bg-white p-1">
                <img src="/vertex-logo.jpg" alt="Vertex" className="h-full w-full object-contain" />
              </div>
            </div>
            <h4
              className="text-xl text-white font-normal uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              DCODE DEVELOPERS CLUB &amp; SSIEMS
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Produced in direct collaboration with the <strong className="text-zinc-200 font-medium">DCode Developers Club (DDSC)</strong> and <strong className="text-zinc-200 font-medium">Shri Shivaji Institute of Engineering and Management Studies (SSIEMS)</strong>, Parbhani, Maharashtra.
            </p>
            <div className="text-[10px] font-mono text-zinc-500">
              LOCATION: Parbhani 431401, Maharashtra, India
            </div>
          </div>

          {/* Official Channels (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#00d2ff] block">
              // OFFICIAL CHANNELS
            </span>
            <div className="flex flex-col space-y-2.5">
              <a
                href="https://www.youtube.com/@TheAsifTalks"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded border border-zinc-800 bg-[#070b13] hover:border-red-500/60 hover:bg-red-950/20 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-red-500">▶</span>
                  <span>YouTube Channel</span>
                </span>
                <span className="text-[10px] text-zinc-500 group-hover:text-red-400">@TheAsifTalks ↗</span>
              </a>

              <a
                href="https://www.instagram.com/theasiftalks"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded border border-zinc-800 bg-[#070b13] hover:border-pink-500/60 hover:bg-pink-950/20 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-pink-400">📷</span>
                  <span>Instagram</span>
                </span>
                <span className="text-[10px] text-zinc-500 group-hover:text-pink-400">@theasiftalks ↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/the-syed-asif"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded border border-zinc-800 bg-[#070b13] hover:border-[#00d2ff]/60 hover:bg-[#00d2ff]/10 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-[#00d2ff]">💼</span>
                  <span>LinkedIn</span>
                </span>
                <span className="text-[10px] text-zinc-500 group-hover:text-[#00d2ff]">the-syed-asif ↗</span>
              </a>

              <a
                href="https://wa.me/918788740090"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded border border-zinc-800 bg-[#070b13] hover:border-emerald-500/60 hover:bg-emerald-950/20 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-emerald-400">💬</span>
                  <span>WhatsApp Line</span>
                </span>
                <span className="text-[10px] text-zinc-500 group-hover:text-emerald-400">+91 8788740090 ↗</span>
              </a>

              <a
                href="mailto:theasiftalks@gmail.com"
                className="group flex items-center justify-between p-2.5 rounded border border-zinc-800 bg-[#070b13] hover:border-[#00d2ff]/60 hover:bg-[#00d2ff]/10 text-xs font-mono text-zinc-300 hover:text-white transition-all"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-[#00d2ff]">✉</span>
                  <span>Direct Mail</span>
                </span>
                <span className="text-[10px] text-zinc-500 group-hover:text-[#00d2ff]">theasiftalks@gmail.com ↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-zinc-500 gap-4">
          <div className="flex items-center space-x-3">
            <span>© {new Date().getFullYear()} THE ASIF TALKS.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-zinc-600">PRODUCTION: DCODE DEVELOPERS CLUB (DDSC)</span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1 rounded border border-zinc-800 hover:border-[#00d2ff] text-zinc-400 hover:text-white uppercase tracking-wider transition-colors"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
