import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import HeroSection from '../components/HeroSection';

import AboutSection from '../components/AboutSection';
import ScheduleSection from '../components/ScheduleSection';
import BandLineupSection from '../components/BandLineupSection';

import VendorMarketplaceSection from '../components/VendorMarketplaceSection';
import MockupSection from '../components/MockupSection';
import AfterPartySection from '../components/AfterPartySection';
import ParticipateSection from '../components/ParticipateSection';
import LocationSection from '../components/LocationSection';
import FooterSection from '../components/FooterSection';
import LoadingAnimation from '../components/LoadingAnimation';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation key="loading" />
        ) : (
          <motion.div 
            key="content"
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LanguageToggle />
            <HeroSection />
            <AboutSection />
            <ScheduleSection />
            <BandLineupSection />
            <VendorMarketplaceSection />
            <MockupSection />
            <AfterPartySection />
            <ParticipateSection />
            <LocationSection />
            <FooterSection />
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
};

export default Index;
