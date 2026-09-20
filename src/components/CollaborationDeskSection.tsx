import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CollaborationDeskSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nominate' | 'partner'>('nominate');

  // Form 1: Suggest a Guest / Topic
  const [guestForm, setGuestForm] = useState({
    fullName: '',
    emailOrContact: '',
    guestName: '',
    designation: '',
    storyReason: '',
    topQuestion: '',
  });

  // Form 2: Sponsorship & Collabs
  const [partnerForm, setPartnerForm] = useState({
    contactPerson: '',
    workEmail: '',
    organization: '',
    collabType: 'Episode Title / Mid-Roll Sponsorship',
    proposalScope: '',
  });

  const [submittedMessage, setSubmittedMessage] = useState<{
    id: string;
    title: string;
    detail: string;
  } | null>(null);

  const handleGuestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `TAT-GST-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedMessage({
      id,
      title: `Guest Recommendation Submitted for "${guestForm.guestName}"`,
      detail: `Thank you, ${guestForm.fullName}. Our editorial desk has logged this nomination. You can also reach host Syed Asif directly at theasiftalks@gmail.com or via WhatsApp.`,
    });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `TAT-PTR-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedMessage({
      id,
      title: `Partnership Proposal Registered for "${partnerForm.organization}"`,
      detail: `Thank you, ${partnerForm.contactPerson}. Our team from DCode Developers Club (DDSC) and SSIEMS will review your proposal within 24-48 hours.`,
    });
  };

  const resetForm = () => {
    setSubmittedMessage(null);
    setGuestForm({
      fullName: '',
      emailOrContact: '',
      guestName: '',
      designation: '',
      storyReason: '',
      topQuestion: '',
    });
    setPartnerForm({
      contactPerson: '',
      workEmail: '',
      organization: '',
      collabType: 'Episode Title / Mid-Roll Sponsorship',
      proposalScope: '',
    });
  };

  return (
    <section
      id="collaborate"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#00d2ff] selection:text-black py-16 sm:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[38rem] h-[38rem] bg-[#00d2ff]/5 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <div className="flex items-center space-x-4 mb-5">
          <span
            className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#00d2ff]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            03 / DIRECT INQUIRIES &amp; INPUT
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#00d2ff] via-[#D4AF37]/40 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase block mb-2">
              COMMUNITY &amp; EXECUTIVE DESK
            </span>
            <h2
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.92] sm:leading-[0.88] select-none break-words"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">
                JOIN THE
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#38bdf8] to-[#D4AF37]">
                DIALOGUE.
              </span>
            </h2>
          </div>

          <p
            className="text-xs sm:text-sm font-light text-zinc-400 max-w-md leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Nominate who should sit in the hot seat next, or partner with us for campus roadshows and sponsorships.
          </p>
        </div>

        {/* ================= DIRECT CONTACT QUICK STRIP ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-10 sm:mb-12">
          {/* Email Quick Access */}
          <a
            href="mailto:theasiftalks@gmail.com"
            className="p-4 sm:p-5 rounded-xl border border-zinc-800 bg-[#070b13] hover:border-[#00d2ff]/60 hover:bg-[#00d2ff]/10 flex items-center justify-between group transition-all duration-300"
          >
            <div className="flex items-center space-x-3 truncate">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black border border-zinc-700 flex items-center justify-center text-base sm:text-lg text-[#00d2ff] shrink-0">
                ✉
              </div>
              <div className="truncate">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
                  OFFICIAL EMAIL INQUIRIES
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white font-mono group-hover:text-[#00d2ff] transition-colors truncate block">
                  theasiftalks@gmail.com
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-2">
              Write ↗
            </span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/918788740090"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 rounded-xl border border-zinc-800 bg-[#070b13] hover:border-emerald-500/60 hover:bg-emerald-950/20 flex items-center justify-between group transition-all duration-300"
          >
            <div className="flex items-center space-x-3 truncate">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black border border-zinc-700 flex items-center justify-center text-base sm:text-lg text-emerald-400 shrink-0">
                💬
              </div>
              <div className="truncate">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
                  WHATSAPP DIRECT LINE
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white font-mono group-hover:text-emerald-400 transition-colors truncate block">
                  +91 8788740090
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 ml-2">
              Chat ↗
            </span>
          </a>
        </div>

        {/* ================= MAIN DUAL TAB PORTAL ================= */}
        <div className="relative rounded-2xl border border-zinc-800 bg-[#080d16] p-4 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden mb-14">
          
          {/* Top Cyan Accent Horizon */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d2ff] to-transparent" />

          {/* Tab Selection Header */}
          <div className="flex flex-col sm:flex-row rounded-xl border border-zinc-800 bg-black/70 p-1.5 mb-10 gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab('nominate');
                setSubmittedMessage(null);
              }}
              className={`flex-1 py-3.5 px-4 text-xs font-mono tracking-wider uppercase rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                activeTab === 'nominate'
                  ? 'bg-[#00d2ff] text-black font-semibold shadow-[0_0_20px_rgba(0,210,255,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>1. Suggest a Guest / Topic</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('partner');
                setSubmittedMessage(null);
              }}
              className={`flex-1 py-3.5 px-4 text-xs font-mono tracking-wider uppercase rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                activeTab === 'partner'
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>2. Sponsorship &amp; Collabs</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {submittedMessage ? (
              /* Success Confirmation Card */
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-14 text-center space-y-4 max-w-lg mx-auto"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#00d2ff] text-[#00d2ff] text-2xl shadow-[0_0_25px_rgba(0,210,255,0.4)]">
                  ✓
                </div>
                <h3
                  className="text-3xl text-white font-normal uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  DISPATCH RECEIVED
                </h3>
                <div className="inline-block px-4 py-1.5 rounded bg-black border border-zinc-700 text-xs font-mono text-[#00d2ff]">
                  REF: {submittedMessage.id}
                </div>
                <h4 className="text-sm font-semibold text-zinc-200">
                  {submittedMessage.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {submittedMessage.detail}
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white hover:border-[#00d2ff] text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href="https://wa.me/918788740090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors flex items-center space-x-1"
                  >
                    <span>Follow Up on WhatsApp</span>
                    <span>↗</span>
                  </a>
                </div>
              </motion.div>
            ) : activeTab === 'nominate' ? (
              /* TAB 1: Suggest a Guest / Topic */
              <motion.form
                key="nominate-form"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onSubmit={handleGuestSubmit}
                className="space-y-6"
              >
                <div className="border-b border-zinc-800 pb-4 mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#00d2ff] block mb-1">
                    SUGGEST A GUEST / TOPIC
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl text-white uppercase tracking-wide"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    WHO NEEDS TO BE HEARD NEXT?
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-1">
                    Nominate bureaucrats, politicians, IPS officers, or trailblazing student founders.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#00d2ff] mb-2">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestForm.fullName}
                      onChange={(e) => setGuestForm({ ...guestForm, fullName: e.target.value })}
                      placeholder="e.g. Rahul Patil"
                      className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#00d2ff] text-xs text-white placeholder-zinc-600 px-4 py-3.5 outline-none rounded-sm transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#00d2ff] mb-2">
                      YOUR EMAIL / CONTACT *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestForm.emailOrContact}
                      onChange={(e) => setGuestForm({ ...guestForm, emailOrContact: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#00d2ff] text-xs text-white placeholder-zinc-600 px-4 py-3.5 outline-none rounded-sm transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#00d2ff] mb-2">
                      NOMINATED GUEST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestForm.guestName}
                      onChange={(e) => setGuestForm({ ...guestForm, guestName: e.target.value })}
                      placeholder="e.g. Smt. Deepa Mudhol (IAS)"
                      className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#00d2ff] text-xs text-white placeholder-zinc-600 px-4 py-3.5 outline-none rounded-sm transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#00d2ff] mb-2">
                      DESIGNATION / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      value={guestForm.designation}
                      onChange={(e) => setGuestForm({ ...guestForm, designation: e.target.value })}
                      placeholder="e.g. Superintendent of Police / CEO"
                      className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#00d2ff] text-xs text-white placeholder-zinc-600 px-4 py-3.5 outline-none rounded-sm transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#00d2ff] mb-2">
                    WHY SHOULD WE INVITE THEM? WHAT&apos;S THE STORY? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={guestForm.storyReason}
                    onChange={(e) => setGuestForm({ ...guestForm, storyReason: e.target.value })}
                    placeholder="Tell us what makes their perspective unique or what tough issues they can clarify for students..."
                    className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#00d2ff] text-xs text-white placeholder-zinc-600 p-4 outline-none rounded-sm transition-colors resize-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#00d2ff] mb-2">
                    TOP QUESTION YOU WANT ASIF TO ASK THEM
                  </label>
                  <input
                    type="text"
                    value={guestForm.topQuestion}
                    onChange={(e) => setGuestForm({ ...guestForm, topQuestion: e.target.value })}
                    placeholder="e.g. What is the biggest hurdle when implementing town planning schemes?"
                    className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#00d2ff] text-xs text-white placeholder-zinc-600 px-4 py-3.5 outline-none rounded-sm transition-colors font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 border border-[#00d2ff] bg-[#00d2ff] hover:bg-[#38bdf8] text-black font-semibold text-xs font-mono tracking-[0.25em] uppercase transition-all duration-300 rounded-sm shadow-[0_0_25px_rgba(0,210,255,0.35)]"
                >
                  SUBMIT GUEST RECOMMENDATION ↗
                </button>
              </motion.form>
            ) : (
              /* TAB 2: Sponsorship & Collabs */
              <motion.form
                key="partner-form"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onSubmit={handlePartnerSubmit}
                className="space-y-6"
              >
                <div className="border-b border-zinc-800 pb-4 mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] block mb-1">
                    SPONSORSHIP &amp; COLLABS
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl text-white uppercase tracking-wide"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    PARTNER WITH THE ASIF TALKS
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-1">
                    Collaborate on video integrations, campus roadshows, or youth brand sponsorships.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-2">
                      CONTACT PERSON NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerForm.contactPerson}
                      onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                      placeholder="e.g. Shruti Sharma"
                      className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#D4AF37] text-xs text-white placeholder-zinc-600 px-4 py-3.5 outline-none rounded-sm transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-2">
                      WORK / PROFESSIONAL EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={partnerForm.workEmail}
                      onChange={(e) => setPartnerForm({ ...partnerForm, workEmail: e.target.value })}
                      placeholder="e.g. partner@organization.com"
                      className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#D4AF37] text-xs text-white placeholder-zinc-600 px-4 py-3.5 outline-none rounded-sm transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-2">
                      ORGANIZATION / BRAND / COLLEGE CLUB *
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerForm.organization}
                      onChange={(e) => setPartnerForm({ ...partnerForm, organization: e.target.value })}
                      placeholder="e.g. Tech EdTech Brand / Student Council"
                      className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#D4AF37] text-xs text-white placeholder-zinc-600 px-4 py-3.5 outline-none rounded-sm transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-2">
                      COLLABORATION TYPE
                    </label>
                    <select
                      value={partnerForm.collabType}
                      onChange={(e) => setPartnerForm({ ...partnerForm, collabType: e.target.value })}
                      className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#D4AF37] text-xs text-white px-4 py-3.5 outline-none rounded-sm transition-colors font-mono"
                    >
                      <option value="Episode Title / Mid-Roll Sponsorship">
                        Episode Title / Mid-Roll Sponsorship
                      </option>
                      <option value="Campus Roadshow & Townhall">
                        Campus Roadshow &amp; Townhall
                      </option>
                      <option value="Student Brand & Tech Partner">
                        Student Brand &amp; Tech Partner
                      </option>
                      <option value="Institutional Co-Production">
                        Institutional Co-Production
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-2">
                    BRIEF PROPOSAL / SCOPE OF PARTNERSHIP *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={partnerForm.proposalScope}
                    onChange={(e) => setPartnerForm({ ...partnerForm, proposalScope: e.target.value })}
                    placeholder="Outline your timeline, goals, target audience overlap, and budget expectations..."
                    className="w-full bg-[#05080e] border border-zinc-800 focus:border-[#D4AF37] text-xs text-white placeholder-zinc-600 p-4 outline-none rounded-sm transition-colors resize-none font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 border border-[#D4AF37] bg-[#D4AF37] hover:bg-[#f0c868] text-black font-semibold text-xs font-mono tracking-[0.25em] uppercase transition-all duration-300 rounded-sm shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                >
                  DISPATCH PARTNERSHIP REQUEST ↗
                </button>
              </motion.form>
            )}
          </AnimatePresence>

        </div>

        {/* ================= CAMPUS TOWNHALL CALLOUT BANNER ================= */}
        <div className="p-8 sm:p-10 rounded-2xl border border-zinc-800 bg-gradient-to-r from-[#060a12] via-[#090e18] to-[#060a12] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 left-0 w-36 h-[2px] bg-gradient-to-r from-[#00d2ff] to-[#D4AF37]" />

          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#00d2ff] uppercase">
                COLLEGIATE OUTREACH &amp; LIVE STAGE
              </span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              WANT US TO HOST A TOWNHALL AT YOUR CAMPUS?
            </h3>
            <p className="text-xs sm:text-[13px] text-zinc-400 font-light max-w-xl leading-relaxed">
              Student council presidents and college authorities can invite <strong className="text-zinc-200">The Asif Talks</strong> for live stage interviews, career reality checks, and direct bureaucratic mentorship.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => {
                setActiveTab('partner');
                window.location.hash = '#collaborate';
              }}
              className="px-6 py-3.5 rounded-sm bg-[#D4AF37] hover:bg-[#f0c868] text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              PARTNER WITH US ↗
            </button>
            <a
              href="https://wa.me/918788740090"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-sm border border-emerald-500/50 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-all flex items-center space-x-1.5"
            >
              <span>WhatsApp</span>
              <span>💬</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CollaborationDeskSection;
