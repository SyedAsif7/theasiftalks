import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
  guest?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl = 'https://www.youtube.com/embed/soyBXEQlqSQ?autoplay=1',
  title = 'Episode 1: What They Hide About Being an IAS',
  guest = 'Shri Sanjaysinh Chavan (IAS), District Collector',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#0a0f18] border border-[#00d2ff]/40 rounded-xl overflow-hidden shadow-[0_0_60px_rgba(0,210,255,0.25)] z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#00d2ff]/20 bg-[#060a12]/90">
              <div className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff0033] animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#00d2ff] uppercase">
                  OFFICIAL STREAM // THE ASIF TALKS
                </span>
                <span className="text-zinc-500">•</span>
                <span className="text-xs text-zinc-300 font-medium hidden sm:inline">
                  {guest}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-[#00d2ff] hover:bg-[#00d2ff]/10 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 bg-[#060a12]/90 border-t border-[#00d2ff]/20 gap-3">
              <div>
                <h4
                  className="text-lg text-white font-normal uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {title}
                </h4>
                <p className="text-xs text-zinc-400 font-light">
                  Direct sit-down deconstructing the operational machinery of civil administration.
                </p>
              </div>
              <a
                href="https://youtu.be/soyBXEQlqSQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-[#00d2ff] hover:text-white transition-colors"
              >
                <span>OPEN IN YOUTUBE APP</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
