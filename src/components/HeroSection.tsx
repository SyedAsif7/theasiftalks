import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import asifTalksBadge from '../assets/asif-talks-badge.jpg';
import { VideoModal } from './VideoModal';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'EPISODES', href: '#episodes' },
  { name: 'ABOUT PLATFORM', href: '#about' },
  { name: 'INSTITUTION', href: '#institution' },
  { name: 'WHO WE SERVE', href: '#cohorts' },
  { name: 'COLLABORATE', href: '#collaborate' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enforce autoplay on mobile browsers (iOS Safari / Android Chrome)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Fallback gracefully if browser policy delays autoplay
      });
    }
  }, []);

  return (
    <>
      <section className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#00d2ff] selection:text-black cursor-default md:cursor-none">
        
        {/* ================= 1. MINIMAL CUSTOM CURSOR (DESKTOP) ================= */}
        {cursorPos.x >= 0 && (
          <motion.div
            className="hidden md:flex fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#00d2ff]/60 items-center justify-center backdrop-blur-[1px]"
            animate={{
              x: cursorPos.x - (isHovered ? 24 : 5),
              y: cursorPos.y - (isHovered ? 24 : 5),
              width: isHovered ? 48 : 10,
              height: isHovered ? 48 : 10,
              backgroundColor: isHovered ? 'rgba(0, 210, 255, 0.15)' : 'rgba(0, 210, 255, 0.95)',
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
          />
        )}

        {/* ================= 2. FIXED HERO.MP4 VIDEO LAYER ================= */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-center md:justify-end">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-frame.jpg"
            className="w-full h-full object-cover object-center md:w-auto md:h-screen md:max-w-none md:object-contain md:origin-right md:scale-[0.98] lg:scale-100 filter brightness-[0.88] md:brightness-100"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          {/* Seamless Soft Edge Blend (Mobile: Cinematic vignette, Desktop: Left soft edge blend) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/60 md:from-black md:via-black/85 md:to-transparent md:w-1/2 md:bg-gradient-to-r pointer-events-none" />

          {/* ================= 3. ANIMATED WATERMARK EMBLEM ================= */}
          <div className="hidden md:flex absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none items-center justify-center z-10">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-36 h-36 bg-black/85 rounded-full blur-xl" />

              <motion.div
                animate={{
                  y: [-3, 3, -3],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative flex items-center justify-center cursor-pointer pointer-events-auto"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border border-[#00d2ff]/60 shadow-[0_0_25px_rgba(0,210,255,0.4)]">
                  <img
                    src={asifTalksBadge}
                    alt="The Asif Talks Badge"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= 4. CONTENT LAYER ================= */}
        <div className="relative z-10 flex flex-col justify-between min-h-screen w-full px-4 sm:px-12 lg:px-16 pt-5 pb-8 pointer-events-none">
          
          {/* Header & Navigation Bar */}
          <header className="relative flex items-center justify-between w-full pointer-events-auto">
            {/* Brand Logo & Live Badge */}
            <a
              href="#"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center space-x-2.5 sm:space-x-3 group"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#00d2ff]/60 shadow-[0_0_12px_rgba(0,210,255,0.3)] transition-transform duration-300 group-hover:scale-105 shrink-0">
                <img
                  src={asifTalksBadge}
                  alt="The Asif Talks Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white group-hover:text-[#00d2ff] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  THE ASIF TALKS.
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <nav
              className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative group py-1 transition-colors duration-300 hover:text-[#00d2ff]"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#00d2ff] to-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Button */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="hidden sm:flex group items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#00d2ff]/50 hover:border-[#00d2ff] bg-[#00d2ff]/10 text-[#00d2ff] hover:text-white transition-all duration-300 backdrop-blur-sm ml-auto md:ml-0 rounded-sm shadow-[0_0_15px_rgba(0,210,255,0.2)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>WATCH EPISODE 1</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 px-3 rounded-lg border border-zinc-800 bg-zinc-950/90 text-zinc-200 hover:text-white text-sm"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </header>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 px-5 my-3 bg-black/95 backdrop-blur-xl border border-zinc-800 rounded-2xl flex flex-col space-y-3 pointer-events-auto z-40 shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-mono tracking-widest text-zinc-300 hover:text-[#00d2ff] py-1.5 border-b border-zinc-800/60"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsVideoModalOpen(true);
                }}
                className="w-full text-center py-2.5 bg-[#00d2ff] text-black text-xs font-mono font-bold uppercase tracking-wider rounded-lg shadow-[0_0_15px_rgba(0,210,255,0.4)] mt-1"
              >
                Watch Episode 1 ▶
              </button>
            </div>
          )}

          {/* Main Hero Row */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
            
            {/* LEFT: Balanced Headline, Mission & Actions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[42rem] pointer-events-auto z-20"
            >
              {/* Show Tagline Eyebrow */}
              <motion.div variants={fadeUpVariants} className="flex items-center space-x-2.5 mb-3">
                <span className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full border border-[#00d2ff]/40 bg-[#00d2ff]/10 text-[9.5px] font-mono tracking-[0.2em] text-[#00d2ff] uppercase backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping" />
                  <span>THE ASIF TALKS</span>
                </span>
              </motion.div>

              {/* Massive Condensed Headline */}
              <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
                <h1
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.6rem] xl:text-[7.4rem] tracking-tight uppercase leading-[0.88] sm:leading-[0.84] break-words"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {/* Line 1 */}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#94A3B8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                    THE UNTOLD
                  </span>

                  {/* Line 2 */}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#38bdf8] to-[#D4AF37] drop-shadow-[0_8px_25px_rgba(0,210,255,0.35)]">
                    REALITIES OF
                  </span>

                  {/* Line 3 */}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#D4AF37] to-[#8C6D4F] drop-shadow-[0_10px_30px_rgba(212,175,55,0.35)]">
                    LEADERSHIP.
                  </span>
                </h1>
              </motion.div>

              {/* 3-Line Description */}
              <motion.div
                variants={fadeUpVariants}
                className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#CBD5E1] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <p>
                  A premier student-led dialogue platform bringing District Collectors, Mayors, and innovators into raw, unscripted conversations on governance, technology, and real-world career paths.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUpVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 mb-7 w-full sm:w-auto"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {/* Primary CTA: Watch Episode 1 on YouTube */}
                <motion.button
                  onClick={() => setIsVideoModalOpen(true)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center justify-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#00d2ff] bg-[#00d2ff] hover:bg-[#38bdf8] text-black text-[11px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(0,210,255,0.35)] rounded-sm text-center"
                >
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span>WATCH EPISODE 1</span>
                  <span className="text-xs">▶</span>
                </motion.button>

                {/* Secondary CTA: Explore Episodes */}
                <motion.a
                  href="#episodes"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#00d2ff]/40 hover:border-[#00d2ff] bg-[#070b13]/80 hover:bg-[#00d2ff]/10 text-[#CBD5E1] hover:text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 rounded-sm text-center"
                >
                  <span>EXPLORE EPISODES</span>
                  <span className="text-xs">↓</span>
                </motion.a>
              </motion.div>

              {/* Live Impact Metrics */}
              <motion.div
                variants={fadeUpVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2.5 pt-5 border-t border-[#00d2ff]/20 max-w-lg w-full"
              >
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-light text-[#00d2ff] tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    1,000+
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.14em] uppercase text-zinc-400">
                    Debut Views
                  </span>
                </div>
                <div className="flex flex-col border-l border-zinc-800 pl-3 sm:pl-2.5">
                  <span className="text-2xl sm:text-3xl font-light text-[#00d2ff] tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    300+
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.14em] uppercase text-zinc-400">
                    Live Audience
                  </span>
                </div>
                <div className="flex flex-col sm:border-l border-zinc-800 sm:pl-2.5">
                  <span className="text-2xl sm:text-3xl font-light text-[#D4AF37] tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    2+
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.14em] uppercase text-zinc-400">
                    Leaders Hosted
                  </span>
                </div>
                <div className="flex flex-col border-l border-zinc-800 pl-3 sm:pl-2.5">
                  <span className="text-2xl sm:text-3xl font-light text-white tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    120+
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.14em] uppercase text-zinc-400">
                    Subscribers
                  </span>
                </div>
              </motion.div>

            </motion.div>

            {/* RIGHT: Floating Statement & Signature Card (Over the Hero Video) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex flex-col items-start pointer-events-auto pr-24 xl:pr-36 mr-4 z-20 select-none"
            >
              {/* 1. Quote Mark */}
              <span className="text-2xl text-[#00d2ff] leading-none font-serif mb-2">
                “
              </span>

              {/* 2. Compact Two-Line Statement */}
              <div 
                className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#E0D3C5] space-y-1 mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <p>UNFILTERED LEADERSHIP.</p>
                <p>REALITIES DECONSTRUCTED.</p>
              </div>

              {/* 3. Cyan & Gold Accent Line */}
              <div className="w-28 h-[1px] bg-gradient-to-r from-[#00d2ff] via-[#D4AF37] to-transparent shadow-[0_0_8px_rgba(0,210,255,0.4)] mb-2" />

              {/* 4. Host Signature Calligraphy / Title */}
              <div 
                className="text-[2.2rem] text-white font-normal leading-none -ml-0.5"
                style={{ 
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '0.04em',
                }}
              >
                Syed Asif
              </div>

              <div className="mt-2 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 border border-[#00d2ff]/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping" />
                <span className="text-[8.5px] font-mono tracking-widest text-[#00d2ff] uppercase">
                  HOST &amp; FOUNDER
                </span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Spacer */}
          <div className="h-2" />
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/soyBXEQlqSQ?autoplay=1"
        title="Episode 1: What They Hide About Being an IAS"
        guest="Shri Sanjaysinh Chavan (IAS), District Collector"
      />
    </>
  );
};

export default HeroSection;