import React from 'react';
import { HeroSection } from './components/HeroSection';
import { EpisodesSection } from './components/EpisodesSection';
import { AboutTalksSection } from './components/AboutTalksSection';
import { CollaborationDeskSection } from './components/CollaborationDeskSection';
import { FooterSection } from './components/FooterSection';
import { PremiereAlertBanner } from './components/PremiereAlertBanner';

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#00d2ff] selection:text-black">
      <HeroSection />
      <EpisodesSection />
      <AboutTalksSection />
      <CollaborationDeskSection />
      <FooterSection />
      <PremiereAlertBanner />
    </div>
  );
}

export default App;