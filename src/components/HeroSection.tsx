import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brazilian-yellow via-yellow-400 to-brazilian-yellow overflow-hidden font-daft">
      {/* Background Elements - Brazilian Flag Inspired with Floating Animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Larger animated circles */}
        <motion.div 
          className="absolute top-10 left-10 w-56 h-56 bg-brazilian-green rounded-full blur-sm"
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-32 right-32 w-40 h-40 bg-brazilian-blue rounded-full blur-md"
          animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/5 w-36 h-36 bg-brazilian-green rounded-full blur-md"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-24 right-1/4 w-48 h-48 bg-brazilian-blue rounded-full blur-lg"
          animate={{ y: [0, 30, 0], x: [0, -12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Larger and more visible tropical leaves */}
        <motion.div 
          className="absolute top-1/5 left-0 w-64 h-64 bg-brazilian-green opacity-30 transform rotate-45 blur-md"
          animate={{ rotate: [45, 55, 45], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/5 right-0 w-64 h-64 bg-brazilian-green opacity-30 transform -rotate-45 blur-md"
          animate={{ rotate: [-45, -55, -45], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Blurred yellow star */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-32 h-32 opacity-40"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: 'blur(6px)' }}>
            <polygon points="50,10 61,39 92,39 66,59 76,89 50,70 24,89 34,59 8,39 39,39" fill="#FFD700" />
          </svg>
        </motion.div>
        {/* Blurred blue star */}
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-24 h-24 opacity-30"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: 'blur(5px)' }}>
            <polygon points="50,10 61,39 92,39 66,59 76,89 50,70 24,89 34,59 8,39 39,39" fill="#0047AB" />
          </svg>
        </motion.div>
        {/* Blurred green star */}
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 opacity-30"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: 'blur(4px)' }}>
            <polygon points="50,10 61,39 92,39 66,59 76,89 50,70 24,89 34,59 8,39 39,39" fill="#228B22" />
          </svg>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Event Logo - Much Larger with Entrance Animation */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.img 
              src="/lovable-uploads/logo_29_30.png" 
              alt="Brazilian Day Vancouver 2025 Logo" 
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 mx-auto mb-8 drop-shadow-lg"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

          {/* Subtitle with Staggered Animation */}
          <motion.p 
            className="text-body-xl md:text-body-2xl font-bold mb-8 text-brazilian-blue leading-relaxed font-daft"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            {t('header.subtitle')}
          </motion.p>

          {/* Location and Date as styled text directly on the background */}
          <div className="pointer-events-none select-none mb-16">
            <motion.div
              className="flex flex-col items-center gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-7 h-7 text-brazilian-blue drop-shadow-sm" style={{ filter: 'drop-shadow(0 1px 2px white)' }} />
                <span className="font-bold font-body text-brazilian-blue text-xl md:text-2xl drop-shadow-[0_1px_2px_white]" style={{ textShadow: '0 1px 2px #fff' }}>{t('header.location')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-7 h-7 text-brazilian-blue drop-shadow-sm" style={{ filter: 'drop-shadow(0 1px 2px white)' }} />
                <span className="font-bold font-body text-brazilian-blue text-xl md:text-2xl drop-shadow-[0_1px_2px_white]" style={{ textShadow: '0 1px 2px #fff' }}>{t('header.date')}</span>
              </div>
            </motion.div>
          </div>

          {/* CTA Button with Enhanced Animation */}
          <motion.a 
            href="https://picpass.ca/Eventos/BrazilianDay/178?fbclid=PAZXh0bgNhZW0CMTEAAafhS9KDqIMkFqYnCj1d3XuWoAiaVyq0OES3YUAewri0eAjsZGmS8xNfI2zzTQ_aem_Ks1LueTEuq7kyOiMkf4o1Q"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: "easeOut"
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto mx-auto bg-gradient-to-r from-brazilian-green to-brazilian-blue hover:from-brazilian-green/80 hover:to-brazilian-blue/80 text-brazilian-blue font-bold text-body-xl sm:text-lg text-2xl px-4 sm:px-8 py-4 sm:py-4 min-h-[44px] rounded-full shadow-2xl border-2 border-white font-body relative overflow-hidden"
              >
                <span className="relative z-10 font-bold font-body uppercase tracking-wide text-white sm:text-lg text-2xl drop-shadow-md">{t('header.cta')}</span>
              </Button>
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
