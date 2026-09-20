import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import collectorImg from '../assets/collector-sanjaysinh-chavan.jpg';
import mayorImg from '../assets/mayor-parbhani.png';
import badgeImg from '../assets/asif-talks-badge.jpg';
import venkateshaLogo from '../assets/venkatesha-logo.png';
import tulsiLogo from '../assets/tulsi-logo.png';
import { VideoModal } from './VideoModal';

export interface EpisodeSponsor {
  name: string;
  marathiName?: string;
  tagline?: string;
  location: string;
  badge: string;
  logo?: string;
}

export interface Episode {
  id: string;
  number: string;
  season: string;
  title: string;
  guestName: string;
  guestTitle: string;
  guestRole: string;
  image: string;
  status: 'available' | 'post-production' | 'coming-soon';
  statusLabel: string;
  statusColor: string;
  overview: string;
  detailedBrief: string;
  topics: string[];
  metrics: { label: string; value: string }[];
  sponsors?: EpisodeSponsor[];
  watchUrl?: string;
  hasVideo: boolean;
}

const episodesData: Episode[] = [
  {
    id: 'ep-01',
    number: 'EPISODE 01',
    season: 'SEASON 01',
    title: 'WHAT THEY HIDE ABOUT BEING AN IAS',
    guestName: 'Shri Sanjaysinh Chavan (IAS)',
    guestTitle: 'District Collector & Executive Magistrate',
    guestRole: 'Chief Administrative Officer of the District',
    image: collectorImg,
    status: 'available',
    statusLabel: 'STREAMING NOW',
    statusColor: '#00d2ff',
    overview:
      'A rare, direct sit-down with the chief administrative officer of the district. Moving past standard UPSC preparation advice, this dialogue reveals the operational reality of managing an entire district.',
    detailedBrief:
      'In this debut episode of The Asif Talks, host Syed Asif sits down with Shri Sanjaysinh Chavan (IAS), District Collector, in front of an electrified live audience of 300+ students and civil service aspirants. Moving decisively past standard coaching center tips and theoretical UPSC syllabi, the conversation deconstructs executive decision-making under intense political and public scrutiny, handling law & order emergencies, crisis mitigation, civil governance pressures, and candid truths that competitive exam aspirants must understand before entering public office.',
    topics: [
      'Administrative Reality vs Theoretical UPSC Syllabus',
      'Ground-Level District Crisis & Disaster Mitigation',
      'Youth Public Service Career Truths & Expectations',
      'Decision-Making Under Political & Media Scrutiny',
      'Work-Life Realities & Bureaucratic Resilience',
    ],
    metrics: [
      { label: 'GUEST TIER', value: 'District Collector (IAS)' },
      { label: 'LIVE AUDIENCE', value: '300+ Students Live' },
      { label: 'FORMAT', value: '4K Live Dialogue' },
      { label: 'METRIC', value: '1,000+ Debut Views' },
    ],
    sponsors: [
      {
        name: 'Venkatesha Pure Veg Restaurant',
        tagline: 'Pure Veg, Pure Taste',
        location: 'Opposite Gangasagar Lawns, Near Dental College, Pathari Road, Parbhani',
        badge: 'OFFICIAL SPONSOR',
        logo: venkateshaLogo,
      },
      {
        name: 'Tulsi (तुलसी)',
        marathiName: 'तुलसी फर्निचर व इलेक्ट्रॉनिक्स',
        location: 'Visawa Corner, Jintur Road, Parbhani',
        badge: 'OFFICIAL SPONSOR',
        logo: tulsiLogo,
      },
    ],
    watchUrl: 'https://youtu.be/soyBXEQlqSQ',
    hasVideo: true,
  },
  {
    id: 'ep-02',
    number: 'EPISODE 02',
    season: 'SEASON 01',
    title: 'THE REALITIES OF RUNNING A CITY',
    guestName: 'Honorable Mayor of Parbhani',
    guestTitle: 'First Citizen & Head of Municipal Corporation',
    guestRole: 'Municipal Governance & Urban Leadership',
    image: mayorImg,
    status: 'post-production',
    statusLabel: 'IN POST-PRODUCTION',
    statusColor: '#D4AF37',
    overview:
      'An inside look into municipal administration, urban planning, citizen accountability, and local political leadership, filmed before a live student audience of 300+ youth. The discussion confronts urban infrastructure challenges and budget allocation.',
    detailedBrief:
      'Episode 2 brings the Mayor of Parbhani onto the stage before a live student audience of 300+ collegiate innovators and youth. The discussion directly confronts the bottlenecks of urban infrastructure development, municipal corporation budgets, civic responsibility among youth, local political coordination, and what it truly takes to govern a growing tier-2 city in Maharashtra.',
    topics: [
      'Municipal Corporation Machinery & Governance',
      'Urban Infrastructure Challenges & Water Management',
      'Budget Allocation, Municipal Funds & Public Accountability',
      'Youth Civic Participation in Local Administration',
      'Grassroots Political Leadership & Citizen Grievance Redressal',
    ],
    metrics: [
      { label: 'GUEST TIER', value: 'City Mayor & Executive Head' },
      { label: 'LIVE AUDIENCE', value: '300+ Students Live' },
      { label: 'PIPELINE', value: '4K Color Grade & Audio Edit' },
      { label: 'COLLABORATION', value: 'DDSC & SSIEMS Parbhani' },
    ],
    sponsors: [
      {
        name: 'Venkatesha Pure Veg Restaurant',
        tagline: 'Pure Veg, Pure Taste',
        location: 'Opposite Gangasagar Lawns, Near Dental College, Pathari Road, Parbhani',
        badge: 'OFFICIAL SPONSOR',
        logo: venkateshaLogo,
      },
      {
        name: 'Tulsi (तुलसी)',
        marathiName: 'तुलसी फर्निचर व इलेक्ट्रॉनिक्स',
        location: 'Visawa Corner, Jintur Road, Parbhani',
        badge: 'OFFICIAL SPONSOR',
        logo: tulsiLogo,
      },
    ],
    hasVideo: false,
  },
  {
    id: 'ep-03',
    number: 'EPISODE 03',
    season: 'SEASON 01',
    title: 'COMING SOON',
    guestName: 'To Be Announced',
    guestTitle: 'Upcoming Episode',
    guestRole: 'Coming Soon',
    image: badgeImg,
    status: 'coming-soon',
    statusLabel: 'COMING SOON',
    statusColor: '#00d2ff',
    overview: 'Episode details will be revealed soon. Stay tuned for the official premiere announcement.',
    detailedBrief: 'Episode 03 is currently in production. The guest, discussion pillars, and official release date will be announced soon.',
    topics: [],
    metrics: [
      { label: 'STATUS', value: 'Coming Soon' },
      { label: 'SEASON', value: 'Season 01' },
      { label: 'GUEST', value: 'To Be Announced' },
      { label: 'SHOW', value: 'The Asif Talks' },
    ],
    hasVideo: false,
  },
];

export const EpisodesSection: React.FC = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'available' | 'upcoming'>('all');
  const [alertSaved, setAlertSaved] = useState(false);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedEpisode(null);
    };
    if (selectedEpisode) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedEpisode]);

  const filteredEpisodes = episodesData.filter((ep) => {
    if (activeFilter === 'available') return ep.status === 'available';
    if (activeFilter === 'upcoming') return ep.status !== 'available';
    return true;
  });

  const handleNotifyMe = () => {
    setAlertSaved(true);
    setTimeout(() => setAlertSaved(false), 3500);
  };

  return (
    <section
      id="episodes"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#00d2ff] selection:text-black py-16 sm:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#00d2ff]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <div className="flex items-center space-x-4 mb-5">
          <span
            className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#00d2ff]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            01 / OFFICIAL EPISODE VAULT
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#00d2ff] via-[#D4AF37]/40 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase block mb-2">
              THE ASIF TALKS VAULT
            </span>
            <h2
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.92] sm:leading-[0.88] select-none break-words"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">
                UNFILTERED EPISODES.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#38bdf8] to-[#D4AF37]">
                SEASON 01 ARCHIVES.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4 w-full sm:w-auto">
            <p
              className="text-xs sm:text-sm font-light text-zinc-400 max-w-sm leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Click any episode card below to view detailed breakdown, key dialogue pillars, and official streaming options.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap sm:flex-nowrap items-center p-1 rounded-lg border border-zinc-800 bg-[#070b13] w-full sm:w-auto gap-1">
              <button
                onClick={() => setActiveFilter('all')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider transition-all text-center ${
                  activeFilter === 'all'
                    ? 'bg-[#00d2ff] text-black font-semibold shadow-[0_0_12px_rgba(0,210,255,0.3)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                All (3)
              </button>
              <button
                onClick={() => setActiveFilter('available')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider transition-all text-center ${
                  activeFilter === 'available'
                    ? 'bg-[#00d2ff] text-black font-semibold shadow-[0_0_12px_rgba(0,210,255,0.3)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Available (1)
              </button>
              <button
                onClick={() => setActiveFilter('upcoming')}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider transition-all text-center ${
                  activeFilter === 'upcoming'
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Pipeline (2)
              </button>
            </div>
          </div>
        </div>

        {/* ================= EPISODES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEpisodes.map((ep) => (
            <motion.div
              key={ep.id}
              layout
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => setSelectedEpisode(ep)}
              className="relative rounded-2xl border border-zinc-800 bg-[#080d16] overflow-hidden group cursor-pointer flex flex-col justify-between transition-all duration-500 hover:border-[#00d2ff] hover:shadow-[0_20px_50px_rgba(0,210,255,0.2)]"
            >
              {/* Top Status Accent Bar */}
              <div
                className="h-[3px] w-full"
                style={{ backgroundColor: ep.statusColor }}
              />

              {/* Episode Header & Image Frame */}
              <div className="p-4 sm:p-6">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-[#00d2ff]">
                    {ep.number} //
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {ep.status !== 'coming-soon' && (
                      <span className="text-[8.5px] sm:text-[9px] font-mono tracking-wider px-2 py-0.5 rounded bg-[#00d2ff]/10 border border-[#00d2ff]/40 text-[#00d2ff] uppercase flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping" />
                        <span>300+ LIVE</span>
                      </span>
                    )}
                    <span
                      className={`text-[9px] sm:text-[9.5px] font-mono tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded uppercase border ${
                        ep.status === 'available'
                          ? 'bg-red-950/60 border-red-500/60 text-red-400'
                          : ep.status === 'post-production'
                          ? 'bg-amber-950/60 border-amber-500/60 text-amber-400'
                          : 'bg-cyan-950/60 border-cyan-500/60 text-cyan-400'
                      }`}
                    >
                      {ep.status === 'available' && '● '}
                      {ep.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Guest Image Card or Blank Coming Soon Frame */}
                {ep.status === 'coming-soon' ? (
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#090d16] to-[#04060a] border border-dashed border-zinc-800 group-hover:border-[#00d2ff]/40 mb-5 flex flex-col items-center justify-center p-6 text-center transition-colors">
                    <div className="w-14 h-14 rounded-full border border-zinc-700 bg-zinc-900/90 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#00d2ff] transition-all shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                      <span className="text-2xl text-zinc-400 group-hover:text-[#00d2ff] transition-colors">⏳</span>
                    </div>
                    <span className="text-xs font-mono tracking-[0.25em] text-white uppercase font-bold">
                      EPISODE 03
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#00d2ff] uppercase mt-1">
                      COMING SOON
                    </span>
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#04060a] border border-zinc-800 mb-5">
                    <img
                      src={ep.image}
                      alt={ep.guestName}
                      className="w-full h-full object-cover object-top filter brightness-[0.96] contrast-[1.05] group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Play / Inspect Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <div className="px-4 py-2 rounded-full bg-[#00d2ff] text-black text-xs font-mono font-semibold tracking-wider flex items-center space-x-2 shadow-[0_0_20px_#00d2ff]">
                        <span>{ep.hasVideo ? 'WATCH & VIEW DETAILS' : 'VIEW EPISODE DETAILS'}</span>
                        <span>↗</span>
                      </div>
                    </div>

                    {/* Guest Name on Image Bottom */}
                    <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                      <span className="text-[10px] font-mono text-[#00d2ff] tracking-wider uppercase block">
                        FEATURED GUEST
                      </span>
                      <h4 className="text-base font-bold text-white leading-tight">
                        {ep.guestName}
                      </h4>
                    </div>
                  </div>
                )}

                {/* Episode Title */}
                <h3
                  className="text-2xl sm:text-[1.7rem] font-normal uppercase text-white mb-2 leading-[0.95] group-hover:text-[#00d2ff] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {ep.title}
                </h3>

                {/* Guest Designation */}
                <p className="text-xs font-mono text-[#D4AF37] mb-3 leading-snug">
                  {ep.guestTitle}
                </p>

                {/* Overview Snippet */}
                <p
                  className="text-xs text-zinc-400 font-light line-clamp-3 leading-relaxed mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {ep.overview}
                </p>

                {/* Episode Sponsors Strip */}
                {ep.sponsors && ep.sponsors.length > 0 && (
                  <div className="mb-4 p-2.5 rounded-lg border border-[#D4AF37]/35 bg-[#D4AF37]/5 flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2 truncate">
                      <span className="text-[8.5px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold shrink-0">
                        SPONSORED BY
                      </span>
                      <div className="flex items-center space-x-1.5 shrink-0">
                        <div className="h-4.5 w-12 bg-black/90 rounded px-1 flex items-center justify-center border border-zinc-800">
                          <img src={venkateshaLogo} alt="Venkatesha" className="h-full w-auto object-contain" />
                        </div>
                        <div className="h-4.5 w-10 bg-white rounded px-1 flex items-center justify-center border border-zinc-800">
                          <img src={tulsiLogo} alt="Tulsi" className="h-full w-auto object-contain" />
                        </div>
                      </div>
                      <span className="text-[10px] text-zinc-200 font-mono truncate hidden sm:inline">
                        Venkatesha &amp; Tulsi
                      </span>
                    </div>
                    <span className="text-[9px] text-[#D4AF37] font-mono shrink-0 ml-1">
                      Parbhani 📍
                    </span>
                  </div>
                )}

                {/* Key Topic Chips (Top 2) */}
                {ep.topics.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                    {ep.topics.slice(0, 2).map((topic, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-sm border border-zinc-800 bg-[#05080e] text-[10px] font-mono text-zinc-400"
                      >
                        {topic}
                      </span>
                    ))}
                    {ep.topics.length > 2 && (
                      <span className="px-2 py-0.5 rounded-sm border border-zinc-800 bg-[#05080e] text-[10px] font-mono text-[#00d2ff]">
                        +{ep.topics.length - 2} more
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="pt-3 border-t border-zinc-800/60 flex items-center space-x-2 text-[10px] font-mono text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping" />
                    <span>PREMIERE DETAILS TO BE ANNOUNCED</span>
                  </div>
                )}
              </div>

              {/* Card Footer Action */}
              <div className="px-6 py-4 bg-[#05080e] border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {ep.status === 'coming-soon' ? 'COMING SOON // PREMIERE PIPELINE' : 'CLICK FOR FULL DOSSIER'}
                </span>
                <span className="text-[#00d2ff] group-hover:translate-x-1 transition-transform">
                  ➔
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= SEASON 01 OFFICIAL SPONSORS SHOWCASE ================= */}
        <div className="mt-14 p-4 sm:p-8 rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-br from-[#080c14] via-[#0b101c] to-[#060810] shadow-[0_15px_45px_rgba(0,0,0,0.85)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-zinc-800/80 pb-4">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-[9.5px] sm:text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#D4AF37] uppercase">
                  OFFICIAL SEASON 01 SPONSORS &amp; BRAND PARTNERS
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-wide"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                PROUDLY SUPPORTING EPISODE 1 &amp; EPISODE 2
              </h3>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-zinc-400">
              COMMUNITY &amp; BUSINESS ALLIANCE // PARBHANI
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Sponsor 1: Venkatesha Pure Veg */}
            <div className="p-4 sm:p-6 rounded-xl border border-zinc-800 bg-[#05070c] hover:border-[#D4AF37]/80 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 uppercase font-semibold">
                    OFFICIAL SPONSOR
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    EPISODE 01 &amp; 02
                  </span>
                </div>

                {/* Branded Golden Logo Box */}
                <div className="h-16 sm:h-20 w-full rounded-lg bg-black/90 border border-zinc-800/90 p-2.5 sm:p-3 flex items-center justify-center mb-4 group-hover:border-[#D4AF37]/60 transition-colors shadow-inner">
                  <img
                    src={venkateshaLogo}
                    alt="Venkatesha Pure Veg Restaurant Logo"
                    className="h-full w-auto max-w-[240px] sm:max-w-[280px] object-contain drop-shadow-[0_2px_14px_rgba(212,175,55,0.4)]"
                  />
                </div>

                <h4
                  className="text-lg sm:text-xl font-bold text-white uppercase group-hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Venkatesha Pure Veg Restaurant
                </h4>
                <p className="text-xs font-mono text-[#00d2ff] mt-1 font-medium italic">
                  &ldquo;Pure Veg, Pure Taste&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-start space-x-2 text-xs font-mono text-zinc-300">
                <span className="text-[#D4AF37] mt-0.5">📍</span>
                <span>Opposite Gangasagar Lawns, Near Dental College, Pathari Road, Parbhani</span>
              </div>
            </div>

            {/* Sponsor 2: Tulsi (तुलसी फर्निचर व इलेक्ट्रॉनिक्स) */}
            <div className="p-4 sm:p-6 rounded-xl border border-zinc-800 bg-[#05070c] hover:border-[#D4AF37]/80 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-blue-950/60 border border-blue-500/40 text-blue-400 uppercase font-semibold">
                    OFFICIAL SPONSOR
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    EPISODE 01 &amp; 02
                  </span>
                </div>

                {/* Branded Blue Logo Box */}
                <div className="h-16 sm:h-20 w-full rounded-lg bg-white p-2.5 flex items-center justify-center mb-4 border border-zinc-700 shadow-md">
                  <img
                    src={tulsiLogo}
                    alt="Tulsi Furniture & Electronics Logo"
                    className="h-full w-auto max-w-[190px] sm:max-w-[210px] object-contain"
                  />
                </div>

                <h4
                  className="text-lg sm:text-xl font-bold text-white uppercase group-hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Tulsi <span className="text-[#D4AF37] font-normal">(तुलसी)</span>
                </h4>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  तुलसी फर्निचर व इलेक्ट्रॉनिक्स
                </div>
                <p className="text-xs font-mono text-[#00d2ff] mt-1 font-medium">
                  Premium Furniture, Electronics &amp; Home Essentials
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-start space-x-2 text-xs font-mono text-zinc-300">
                <span className="text-[#D4AF37] mt-0.5">📍</span>
                <span>Visawa Corner, Jintur Road, Parbhani</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fast Track Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-[#060a12] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#00d2ff]/60 shrink-0">
              <img src={badgeImg} alt="Badge" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                SUGGEST A LEADER OR BUREAUCRAT FOR FUTURE EPISODES
              </h4>
              <p className="text-xs text-zinc-400 font-light mt-0.5">
                Have an IAS officer, police chief, municipal commissioner, or innovator who needs to be questioned? Contact our research desk.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@TheAsifTalks"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-sm border border-[#00d2ff] bg-[#00d2ff]/10 hover:bg-[#00d2ff] text-[#00d2ff] hover:text-black text-xs font-mono uppercase tracking-wider transition-all duration-300 shrink-0"
          >
            SUBSCRIBE ON YOUTUBE ↗
          </a>
        </div>

      </div>

      {/* ================= INTERACTIVE EPISODE DETAIL MODAL ================= */}
      <AnimatePresence>
        {selectedEpisode && (
          <div className="fixed inset-0 z-[9990] flex items-center justify-center p-2 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEpisode(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 25 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#090e17] border-2 border-[#00d2ff]/50 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,210,255,0.3)] z-10 max-h-[92dvh] sm:max-h-[90vh] flex flex-col"
            >
              {/* Modal Top Nav */}
              <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 border-b border-zinc-800 bg-[#05080e]/95">
                <div className="flex items-center space-x-2.5 sm:space-x-3 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00d2ff] animate-ping shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#00d2ff] uppercase truncate">
                    {selectedEpisode.number} // BRIEFING DOSSIER
                  </span>
                  <span className="text-zinc-600 hidden sm:inline">•</span>
                  <span className="text-xs font-mono text-[#D4AF37] hidden sm:inline">
                    {selectedEpisode.season}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedEpisode(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white hover:border-[#00d2ff] transition-colors text-sm shrink-0 ml-2"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8">
                
                {/* Top Split: Guest Photo & Episode Identity */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                  
                  {/* High-res Guest Photo Frame or Coming Soon Placeholder (4 Cols) */}
                  <div className="md:col-span-5 relative">
                    {selectedEpisode.status === 'coming-soon' ? (
                      <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-[#0a0f1c] to-[#04060b] flex flex-col items-center justify-center p-6 text-center shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
                        <div className="w-16 h-16 rounded-full border border-zinc-700/80 bg-zinc-900/90 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                          <span className="text-3xl text-[#00d2ff]">⏳</span>
                        </div>
                        <span className="text-xs font-mono tracking-[0.25em] text-white uppercase font-bold">
                          EPISODE 03
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-[#00d2ff] uppercase mt-1">
                          COMING SOON
                        </span>
                      </div>
                    ) : (
                      <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#00d2ff]/40 bg-[#030508] shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
                        <img
                          src={selectedEpisode.image}
                          alt={selectedEpisode.guestName}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="text-[9.5px] font-mono text-[#00d2ff] uppercase block">
                            PORTRAIT ARCHIVE
                          </span>
                          <span className="text-sm font-bold text-white">
                            {selectedEpisode.guestName}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title & Metadata (7 Cols) */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="text-[10px] font-mono tracking-widest px-3 py-1 rounded uppercase border"
                        style={{
                          borderColor: `${selectedEpisode.statusColor}50`,
                          color: selectedEpisode.statusColor,
                          backgroundColor: `${selectedEpisode.statusColor}15`,
                        }}
                      >
                        {selectedEpisode.statusLabel}
                      </span>
                      {selectedEpisode.status !== 'coming-soon' && (
                        <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded uppercase border border-[#00d2ff]/50 bg-[#00d2ff]/15 text-[#00d2ff] flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping" />
                          <span>300+ STUDENTS &amp; AUDIENCE LIVE</span>
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-3xl sm:text-4xl lg:text-5xl font-normal uppercase text-white leading-[0.92]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {selectedEpisode.title}
                    </h3>

                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-[#D4AF37]">
                        {selectedEpisode.guestName}
                      </div>
                      <div className="text-xs font-mono text-zinc-400">
                        {selectedEpisode.guestTitle}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-500">
                        {selectedEpisode.guestRole}
                      </div>
                    </div>

                    {/* Action Triggers */}
                    <div className="pt-3 flex flex-wrap gap-3">
                      {selectedEpisode.hasVideo ? (
                        <>
                          <button
                            onClick={() => setIsVideoModalOpen(true)}
                            className="px-6 py-3 rounded-sm bg-[#00d2ff] hover:bg-[#38bdf8] text-black font-semibold text-xs font-mono tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,210,255,0.35)] flex items-center space-x-2"
                          >
                            <span>STREAM IN-APP</span>
                            <span>▶</span>
                          </button>

                          <a
                            href={selectedEpisode.watchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-sm border border-red-500/60 bg-red-950/40 hover:bg-red-900/50 text-red-300 hover:text-white text-xs font-mono tracking-wider uppercase transition-all flex items-center space-x-2"
                          >
                            <span>OPEN IN YOUTUBE</span>
                            <span>↗</span>
                          </a>
                        </>
                      ) : (
                        <button
                          onClick={handleNotifyMe}
                          className="px-6 py-3 rounded-sm border border-[#D4AF37] bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black font-medium text-xs font-mono tracking-wider uppercase transition-all flex items-center space-x-2"
                        >
                          <span>{alertSaved ? '✓ PREMIERE ALERT SAVED' : 'NOTIFY ON OFFICIAL PREMIERE'}</span>
                          <span>🔔</span>
                        </button>
                      )}
                    </div>
                  </div>

                </div>

                {/* Section 2: Detailed Brief Narrative */}
                <div className="p-6 rounded-xl border border-zinc-800 bg-[#05080e] space-y-3">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#00d2ff] uppercase block">
                    // EPISODE SYNOPSIS &amp; BACKGROUND
                  </span>
                  <p
                    className="text-xs sm:text-sm text-zinc-300 font-light leading-[1.85]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {selectedEpisode.detailedBrief}
                  </p>
                </div>

                {/* Section 3: Core Discussion Topics Breakdown (Only if topics exist) */}
                {selectedEpisode.topics && selectedEpisode.topics.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase block">
                      // UNFILTERED INQUIRY TOPICS DECONSTRUCTED
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedEpisode.topics.map((topic, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-lg border border-zinc-800/90 bg-[#060a12] flex items-start space-x-2.5"
                        >
                          <span className="text-[#00d2ff] font-mono text-xs mt-0.5">
                            0{i + 1}.
                          </span>
                          <span className="text-xs text-zinc-300 font-medium leading-relaxed">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section 4: Official Episode Sponsors & Brand Partners */}
                {selectedEpisode.sponsors && selectedEpisode.sponsors.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
                        // OFFICIAL EPISODE SPONSORS &amp; BRAND PARTNERS
                      </span>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/50 via-[#00d2ff]/30 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedEpisode.sponsors.map((sponsor, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#0c0f17] via-[#080b12] to-[#04060a] relative overflow-hidden group hover:border-[#D4AF37] transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.7)] flex flex-col justify-between"
                        >
                          <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-[#D4AF37] to-transparent" />
                          
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[8.5px] font-mono tracking-widest px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/35 uppercase font-semibold">
                                {sponsor.badge}
                              </span>
                              <span className="text-[9.5px] font-mono text-zinc-500">
                                PARBHANI
                              </span>
                            </div>

                            {/* Sponsor Logo Box */}
                            {sponsor.logo && (
                              <div className={`h-16 w-full rounded-lg p-2 mb-3.5 flex items-center justify-center border border-zinc-800 ${sponsor.name.includes('Tulsi') ? 'bg-white' : 'bg-black/90'}`}>
                                <img
                                  src={sponsor.logo}
                                  alt={sponsor.name}
                                  className="h-full w-auto max-w-[220px] object-contain"
                                />
                              </div>
                            )}

                            <h5
                              className="text-base sm:text-lg font-bold text-white tracking-wide leading-tight"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {sponsor.name}
                            </h5>

                            {sponsor.marathiName && (
                              <div className="text-xs font-mono text-zinc-400 mt-0.5">
                                {sponsor.marathiName}
                              </div>
                            )}

                            {sponsor.tagline && (
                              <div className="text-xs text-[#00d2ff] font-mono italic mt-1">
                                &ldquo;{sponsor.tagline}&rdquo;
                              </div>
                            )}
                          </div>

                          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-start space-x-2 text-[11px] text-zinc-400 font-mono">
                            <span className="text-[#D4AF37] mt-0.5 text-xs">📍</span>
                            <span className="leading-relaxed text-zinc-300">{sponsor.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section 5: Specifications & Production Metrics */}
                <div className="p-5 rounded-xl border border-zinc-800/80 bg-[#04060b] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                  {selectedEpisode.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <span className="text-[9.5px] text-zinc-500 uppercase">{m.label}</span>
                      <span className="text-white font-medium mt-0.5">{m.value}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Modal Footer */}
              <div className="px-6 sm:px-8 py-4 border-t border-zinc-800 bg-[#05080e]/95 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">
                  OFFICIAL SHOW // THE ASIF TALKS (@THEASIFTALKS)
                </span>
                <button
                  onClick={() => setSelectedEpisode(null)}
                  className="px-4 py-1.5 rounded border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#00d2ff] transition-colors"
                >
                  CLOSE DOSSIER [ESC]
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Embedded Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/soyBXEQlqSQ?autoplay=1"
        title="Episode 1: What They Hide About Being an IAS"
        guest="Shri Sanjaysinh Chavan (IAS), District Collector"
      />
    </section>
  );
};

export default EpisodesSection;
