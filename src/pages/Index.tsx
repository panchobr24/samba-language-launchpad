
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TicketsSection from '../components/TicketsSection';
import HighlightsSection from '../components/HighlightsSection';
import ScheduleSection from '../components/ScheduleSection';
import ParticipateSection from '../components/ParticipateSection';
import LocationSection from '../components/LocationSection';
import FooterSection from '../components/FooterSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageToggle />
        <HeroSection />
        <AboutSection />
        <TicketsSection />
        <HighlightsSection />
        <ScheduleSection />
        <ParticipateSection />
        <LocationSection />
        <FooterSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
