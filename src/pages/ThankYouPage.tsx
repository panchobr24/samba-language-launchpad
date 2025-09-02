import React from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '../contexts/LanguageContext';
import { useLanguage } from '../contexts/useLanguage';
import LanguageToggle from '../components/LanguageToggle';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Instagram, Heart, Music, Users, Store } from 'lucide-react';

const ThankYouPageContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brazilian-yellow via-yellow-400 to-brazilian-yellow font-body">
      <LanguageToggle />

        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-brazilian-yellow via-yellow-400 to-brazilian-yellow overflow-hidden font-daft">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
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
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Logo */}
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
                <img
                  src="/lovable-uploads/logo_29_30.png"
                  alt={t('thankyou.logo.alt')}
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto mb-8 drop-shadow-lg"
                />
              </motion.div>

              {/* Thank You Message */}
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-brazilian-blue mb-6 drop-shadow-md font-daft"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: "easeOut"
                }}
              >
                {t('thankyou.title')}
              </motion.h1>

              <motion.p
                className="text-body-xl md:text-body-2xl font-bold mb-8 text-brazilian-blue leading-relaxed font-daft"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              >
                {t('thankyou.subtitle')}
              </motion.p>

              <motion.p
                className="text-body-lg text-gray-800 mb-12 leading-relaxed font-body max-w-2xl mx-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: "easeOut"
                }}
              >
                {t('thankyou.message')}
              </motion.p>

              {/* Event Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: "easeOut"
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white">
                  <Users className="w-8 h-8 text-brazilian-green mx-auto mb-3" />
                  <div className="text-2xl font-bold text-brazilian-blue font-daft">{t('thankyou.stats.attendees.count')}</div>
                  <div className="text-sm text-gray-700 font-body">{t('thankyou.stats.attendees')}</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white">
                  <Music className="w-8 h-8 text-brazilian-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-brazilian-blue font-daft">{t('thankyou.stats.artists.count')}</div>
                  <div className="text-sm text-gray-700 font-body">{t('thankyou.stats.artists')}</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white">
                  <Store className="w-8 h-8 text-brazilian-green mx-auto mb-3" />
                  <div className="text-2xl font-bold text-brazilian-blue font-daft">{t('thankyou.stats.vendors.count')}</div>
                  <div className="text-sm text-gray-700 font-body">{t('thankyou.stats.vendors')}</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white">
                  <Heart className="w-8 h-8 text-brazilian-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-brazilian-blue font-daft">{t('thankyou.stats.memories.count')}</div>
                  <div className="text-sm text-gray-700 font-body">{t('thankyou.stats.memories')}</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                className="mb-8"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.1,
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
                                    <a
                    href="https://www.instagram.com/youcanproductions?igsh=MWV6cjVmbXo4aHI0dg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto mx-auto bg-gradient-to-r from-brazilian-green to-brazilian-blue hover:from-brazilian-green/80 hover:to-brazilian-blue/80 text-white font-bold text-body-xl px-8 py-4 min-h-[44px] rounded-full shadow-2xl border-2 border-white font-body"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      <span className="font-bold font-body uppercase tracking-wide text-white text-lg drop-shadow-md">
                        {t('thankyou.follow')}
                      </span>
                    </Button>
                  </a>
                </motion.div>
              </motion.div>

              {/* Event Info */}
              <div className="pointer-events-none select-none mb-8">
                <motion.div
                  className="flex flex-col items-center gap-4 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-brazilian-blue" />
                    <span className="font-bold font-body text-brazilian-blue text-lg drop-shadow-sm">
                      {t('thankyou.location')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-brazilian-blue" />
                    <span className="font-bold font-body text-brazilian-blue text-lg drop-shadow-sm">
                      {t('thankyou.date')}
                    </span>
                  </div>
                </motion.div>

                {/* Media Message */}
                <motion.div
                  className="mt-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.4,
                    ease: "easeOut"
                  }}
                >
                  <p className="text-body-base text-brazilian-blue font-body font-medium text-center max-w-lg mx-auto">
                    {t('thankyou.media.message')}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brazilian-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4 font-daft">{t('thankyou.footer.title')}</h3>
            <p className="text-body-lg mb-6 font-body max-w-2xl mx-auto">
              {t('thankyou.footer.message')}
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/jpzank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brazilian-yellow transition-colors flex flex-col items-center gap-1"
                  aria-label={t('thankyou.footer.followwebdev')}
                >
                  <Instagram className="w-6 h-6" />
                  <span className="text-xs font-body">{t('thankyou.footer.followwebdev')}</span>
                </a>
              </div>
              <div className="text-sm text-white/80 font-body text-center">
                <p>{t('thankyou.footer.copyright')}</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

const ThankYouPage = () => {
  return (
    <LanguageProvider>
      <ThankYouPageContent />
    </LanguageProvider>
  );
};

export default ThankYouPage;
