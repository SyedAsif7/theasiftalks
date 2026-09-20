import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import asifTalksBadge from '../assets/asif-talks-badge.jpg';
import dcodeLogo from '../assets/dcode-logo.png';
import ssiemsLogo from '../assets/ssiems-logo.png';
import vertexLogo from '../assets/vertex-logo.jpg';
import asifPortrait from '../assets/asif-portrait.jpg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const institutionalRoles = [
  {
    title: 'SHRI SHIVAJI INSTITUTE OF ENGINEERING & MANAGEMENT STUDIES',
    shortName: 'SSIEMS, Parbhani',
    logo: ssiemsLogo,
    badge: 'ACADEMIC INSTITUTION',
    roleTag: 'ENGINEERING UNDERGRADUATE',
    accent: '#D4AF37',
    description:
      'Pursuing Computer Science and Engineering at SSIEMS Parbhani, Maharashtra. The institute provides academic backing and institutional co-production support for the show.',
    highlights: ['B.Tech in Computer Science & Eng', 'Parbhani, Maharashtra', 'Motto: तमसो मा ज्योतिर्गमय'],
  },
  {
    title: 'DCODE DEVELOPERS CLUB (DDSC)',
    shortName: 'DDSC at SSIEMS',
    logo: dcodeLogo,
    badge: 'LEADERSHIP ROLE',
    roleTag: 'PRESIDENT',
    accent: '#00d2ff',
    description:
      'Serving as the President of the DCode Developers Club at SSIEMS, leading collegiate student developers, hackathons, open-source code initiatives, and media workflows.',
    highlights: ['Club President & Leader', '100% Student-Run Media & Code', 'Technical & Production Backbone'],
  },
  {
    title: 'VERTEX INSTITUTE OF TECHNOLOGY',
    shortName: 'Vertex Institute',
    logo: vertexLogo,
    badge: 'LEADERSHIP ROLE',
    roleTag: 'CAMPUS AMBASSADOR',
    accent: '#38bdf8',
    description:
      'Selected as the official Campus Ambassador for Vertex Institute of Technology, driving tech literacy, specialized mentorship, and student community alignment.',
    highlights: ['Selected Campus Ambassador', 'Student Community Outreach', 'Tech & Industry Mentorship'],
  },
  {
    title: 'THE ASIF TALKS',
    shortName: '@theasiftalks',
    logo: asifTalksBadge,
    badge: 'CONTENT CREATION',
    roleTag: 'CREATOR & PODCAST HOST',
    accent: '#00d2ff',
    description:
      'Hosting a youth-centric dialogue and educational podcast in collaboration with his institute, bringing District Collectors, Mayors, and innovators into raw conversations.',
    highlights: ['Host & Executive Producer', 'Unfiltered Civil & Tech Dialogues', 'Produced with DDSC & SSIEMS'],
  },
];

const targetAudiences = [
  {
    role: 'ENGINEERING & TECH STUDENTS',
    focus: 'Tech Ecosystems & System Design',
    detail:
      'Deconstructing real industry demands, placement realities, and technical leadership beyond standard classroom curriculum.',
  },
  {
    role: 'CIVIL SERVICE ASPIRANTS (UPSC / MPSC)',
    focus: 'Administrative Reality vs Syllabus',
    detail:
      'Providing an insider view into managing an entire district, handling political scrutiny, and life beyond clearing the exam.',
  },
  {
    role: 'GRASSROOTS BUILDERS & CITIZENS',
    focus: 'Civic Accountability & Local Governance',
    detail:
      'Empowering ordinary citizens and student founders to understand municipal budgets, infrastructure decisions, and governance.',
  },
];

export const AboutTalksSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#00d2ff] selection:text-black py-16 sm:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/6 left-1/4 w-[38rem] h-[38rem] bg-[#00d2ff]/5 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-1/5 right-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* ================= 1. EYEBROW & SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#00d2ff]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            01 / PLATFORM MANIFESTO
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#00d2ff] via-[#00d2ff]/30 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase block mb-2">
            WHAT IS THE ASIF TALKS?
          </span>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.92] sm:leading-[0.88] select-none break-words"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">
              BRIDGING THE GAP BETWEEN
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#38bdf8] to-[#D4AF37]">
              AMBITION AND ADMINISTRATION.
            </span>
          </h2>
        </motion.div>

        {/* ================= 2. CORE MANIFESTO & HOST SHOWCASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Detailed Narrative (7 Cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-300 font-light leading-[1.9]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <motion.p variants={fadeUpVariants} className="text-base sm:text-lg text-white font-normal leading-relaxed">
              <strong className="text-[#00d2ff] font-semibold">The Asif Talks</strong> is a youth-centric educational dialogue and podcast platform produced in collaboration with the <span className="text-white underline decoration-[#00d2ff]/60 underline-offset-4 font-medium">DCode Developers Club (DDSC)</span> and <span className="text-white underline decoration-[#D4AF37]/60 underline-offset-4 font-medium">Shri Shivaji Institute of Engineering and Management Studies (SSIEMS)</span>, Parbhani.
            </motion.p>

            <motion.p variants={fadeUpVariants} className="text-zinc-400">
              The initiative moves decisively beyond scripted, ceremonial interviews to interrogate the actual machinery of leadership. We ask the difficult, grounded questions that students, aspirants, and young innovators genuinely care about—deconstructing civil administration, municipal governance, tech ecosystems, and high-stakes executive decision-making.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="p-6 rounded-xl border border-zinc-800 bg-[#060a12]/80 border-l-4 border-l-[#00d2ff] space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                // LEADERSHIP &amp; CONTENT CREATION PHILOSOPHY:
              </h4>
              <p className="text-xs sm:text-[13.5px] text-zinc-300 leading-relaxed">
                Combining technical research with active campus governance, host Syed Asif serves as the <span className="text-[#00d2ff] font-medium">President of the DCode Developers Club (DDSC)</span> at SSIEMS and was selected as a <span className="text-[#D4AF37] font-medium">Campus Ambassador for Vertex Institute of Technology</span>. Through <em>The Asif Talks</em> (<span className="text-cyan-300 font-mono">@theasiftalks</span>), he proves that student creators can independently produce institutional-grade media that connects campus ambition directly with executive power.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="pt-2 flex flex-wrap gap-2.5">
              <span className="px-3 py-1 rounded-sm border border-[#00d2ff]/40 bg-[#00d2ff]/10 text-[#00d2ff] text-[11px] font-mono tracking-wider uppercase">
                #SSIEMSParbhani
              </span>
              <span className="px-3 py-1 rounded-sm border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] text-[11px] font-mono tracking-wider uppercase">
                #PresidentDDSC
              </span>
              <span className="px-3 py-1 rounded-sm border border-zinc-700 bg-zinc-900/80 text-zinc-300 text-[11px] font-mono tracking-wider uppercase">
                #CampusAmbassadorVertex
              </span>
              <span className="px-3 py-1 rounded-sm border border-cyan-500/40 bg-cyan-950/40 text-cyan-200 text-[11px] font-mono tracking-wider uppercase">
                #TheAsifTalks
              </span>
            </motion.div>
          </motion.div>

          {/* Host & Institutional Anchor Spotlight Card (5 Cols) */}
          <motion.div
            id="institution"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative p-4 sm:p-8 rounded-2xl border border-zinc-800 bg-[#070b13] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Cyan Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00d2ff] via-[#D4AF37] to-transparent" />

            <div className="flex items-center space-x-3.5 sm:space-x-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#00d2ff]/60 shadow-[0_0_20px_rgba(0,210,255,0.3)] shrink-0">
                <img src={asifPortrait} alt="Syed Asif" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <span className="text-[9px] sm:text-[9.5px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#00d2ff] uppercase block">
                  HOST &amp; STUDENT LEADER
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  SYED ASIF
                </h3>
                <span className="text-xs font-mono text-[#D4AF37]">
                  @theasiftalks
                </span>
              </div>
            </div>

            {/* Official Logos Bar */}
            <div className="p-3 sm:p-4 rounded-xl bg-black/70 border border-zinc-800 mb-6 flex items-center justify-around gap-1.5 sm:gap-2">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#00d2ff]/60 flex items-center justify-center bg-black">
                  <img src={asifTalksBadge} alt="The Asif Talks" className="h-full w-full object-cover" />
                </div>
                <span className="text-[8px] font-mono text-[#00d2ff] mt-1 uppercase">ASIF TALKS</span>
              </div>
              <div className="h-8 w-[1px] bg-zinc-800" />
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-black/50">
                  <img src={dcodeLogo} alt="DDSC" className="h-full w-full object-contain drop-shadow" />
                </div>
                <span className="text-[8px] font-mono text-[#00d2ff] mt-1 uppercase">DDSC</span>
              </div>
              <div className="h-8 w-[1px] bg-zinc-800" />
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-black/50">
                  <img src={ssiemsLogo} alt="SSIEMS" className="h-full w-full object-contain drop-shadow" />
                </div>
                <span className="text-[8px] font-mono text-zinc-400 mt-1 uppercase">SSIEMS</span>
              </div>
              <div className="h-8 w-[1px] bg-zinc-800" />
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white p-1">
                  <img src={vertexLogo} alt="Vertex" className="h-full w-full object-contain" />
                </div>
                <span className="text-[8px] font-mono text-zinc-400 mt-1 uppercase">VERTEX</span>
              </div>
            </div>

            {/* Spec Matrix */}
            <div className="space-y-3 pt-2 text-xs font-mono">
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-500">ACADEMICS</span>
                <span className="text-white font-medium">CSE @ SSIEMS Parbhani</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-500">DDSC LEADERSHIP</span>
                <span className="text-[#00d2ff] font-medium">Club President</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-500">AMBASSADOR</span>
                <span className="text-[#D4AF37] font-medium">Vertex Institute of Tech</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-500">PODCAST SHOW</span>
                <span className="text-white font-medium">Asif Talks (@theasiftalks)</span>
              </div>
            </div>

            {/* Official Social Handles Bar */}
            <div className="mt-5 pt-4 border-t border-zinc-800/80 grid grid-cols-3 gap-2">
              <a
                href="https://www.youtube.com/@TheAsifTalks"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2.5 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-red-400 hover:border-red-500/50 transition-all text-xs flex items-center justify-center space-x-1.5"
                title="YouTube @TheAsifTalks"
              >
                <span>▶</span>
                <span>YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/theasiftalks"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2.5 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-pink-400 hover:border-pink-500/50 transition-all text-xs flex items-center justify-center space-x-1.5"
                title="Instagram @theasiftalks"
              >
                <span>📷</span>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/the-syed-asif"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2.5 rounded bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-[#00d2ff] hover:border-[#00d2ff]/50 transition-all text-xs flex items-center justify-center space-x-1.5"
                title="LinkedIn the-syed-asif"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* ================= 3. INSTITUTIONAL & LEADERSHIP ECOSYSTEM GRID ================= */}
        <div className="mb-24 pt-4">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-800">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#00d2ff] uppercase block mb-1">
                // COLLABORATIVE PILLARS &amp; LEADERSHIP
              </span>
              <h3
                className="text-3xl sm:text-4xl text-white uppercase tracking-wider"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                INSTITUTIONAL ECOSYSTEM
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              ROLES &amp; INSTITUTIONAL PARTNERS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutionalRoles.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="relative p-6 rounded-xl border border-zinc-800 bg-[#080d16] flex flex-col justify-between group hover:border-[#00d2ff]/60 transition-all duration-300"
              >
                {/* Top Glowing Color Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: item.accent }} />

                <div>
                  {/* Top Badge & Logo */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded bg-black/60 border uppercase"
                      style={{ borderColor: `${item.accent}40`, color: item.accent }}
                    >
                      {item.badge}
                    </span>
                    <div className={`w-12 h-12 rounded-xl p-1.5 border border-zinc-700/80 flex items-center justify-center overflow-hidden shadow-lg ${item.title.includes('VERTEX') ? 'bg-white' : 'bg-black/90'}`}>
                      <img
                        src={item.logo}
                        alt={item.shortName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Title & Short Name */}
                  <h4
                    className="text-lg font-bold text-white uppercase mb-1 leading-snug group-hover:text-[#00d2ff] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.shortName}
                  </h4>
                  <div className="text-[10px] font-mono text-[#D4AF37] mb-3">
                    {item.roleTag}
                  </div>

                  {/* Description */}
                  <p
                    className="text-xs text-zinc-400 font-light leading-relaxed mb-4"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-3 border-t border-zinc-800/80 space-y-1">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="text-[10px] font-mono text-zinc-300 flex items-center space-x-1.5">
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: item.accent }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= 5. WHO WE SERVE: THE AUDIENCE IMPACT MATRIX ================= */}
        <div id="cohorts" className="pt-4">
          <div className="p-8 sm:p-12 rounded-2xl border border-zinc-800 bg-[#060a12] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-[2px] bg-[#00d2ff]" />

            <div className="mb-8">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#00d2ff] uppercase block mb-1">
                // TARGET COHORTS &amp; AUDIENCE
              </span>
              <h3
                className="text-3xl sm:text-4xl text-white uppercase tracking-wider"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                WHO THE ASIF TALKS IS BUILT FOR
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
                Curating dialogues specifically engineered to answer the high-stakes career questions of tomorrow&apos;s changemakers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {targetAudiences.map((aud) => (
                <div
                  key={aud.role}
                  className="p-6 rounded-xl border border-zinc-800/90 bg-[#04070e] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">
                      {aud.focus}
                    </span>
                    <h4
                      className="text-xl text-white uppercase mb-3"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {aud.role}
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {aud.detail}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-900 text-[9.5px] font-mono text-[#00d2ff]">
                    DIRECT COHORT IMPACT ✓
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTalksSection;
