import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, MapPin, Users, ExternalLink, Calendar } from 'lucide-react';

const AfterPartySection = () => {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-16 bg-white text-brazilian-blue relative overflow-hidden font-daft">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,0,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,0,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,100,255,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brazilian-yellow via-brazilian-green to-brazilian-blue bg-clip-text text-transparent drop-shadow-md font-daft">
            {t('afterparty.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('afterparty.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* After Party Image */}
          <motion.div 
            className="relative"
            {...fadeInUp}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/after-party.png" 
                alt={t('afterparty.image.alt')}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Venue Info */}
            <motion.div variants={fadeInUp}>
              <p className="text-2xl font-bold text-brazilian-blue mb-4 font-daft">
                {t('afterparty.venue.new')}
              </p>
              <Card className="p-6 bg-white border-2 border-gradient-to-r from-brazilian-blue to-brazilian-green text-brazilian-blue">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-brazilian-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brazilian-blue mb-2 font-daft">
                      {t('afterparty.venue.name')}
                    </h3>
                    <p className="text-gray-700">
                      {t('afterparty.venue.address')}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Event Details */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-3 bg-white border-2 border-brazilian-green text-brazilian-blue">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-brazilian-green flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-brazilian-blue font-daft text-sm">{t('afterparty.time.title')}</p>
                      <p className="text-xs text-gray-700">{t('afterparty.time.hours')}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-3 bg-white border-2 border-brazilian-yellow text-brazilian-blue">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-brazilian-yellow flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-brazilian-blue font-daft text-sm">{t('afterparty.age.title')}</p>
                      <p className="text-xs text-gray-700">{t('afterparty.age.restriction')}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* DJ Schedule */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-brazilian-blue mb-4 font-daft">
                {t('afterparty.dj.title')}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Friday */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-4 sm:p-6 bg-white border-2 border-brazilian-blue text-brazilian-blue">
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <h4 className="text-base sm:text-lg font-bold text-brazilian-blue font-daft">{t('afterparty.friday.title')}</h4>
                      <Badge className="bg-brazilian-blue text-white text-xs">{t('afterparty.friday.date')}</Badge>
                    </div>
                    <p className="text-gray-700 mb-1 sm:mb-2 text-sm">
                      <strong>{t('afterparty.friday.dj')}</strong>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {t('afterparty.friday.description')}
                    </p>
                  </Card>
                </motion.div>

                {/* Saturday */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-4 sm:p-6 bg-white border-2 border-brazilian-green text-brazilian-blue">
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <h4 className="text-base sm:text-lg font-bold text-brazilian-blue font-daft">{t('afterparty.saturday.title')}</h4>
                      <Badge className="bg-brazilian-green text-white text-xs">{t('afterparty.saturday.date')}</Badge>
                    </div>
                    <p className="text-gray-700 mb-1 sm:mb-2 text-sm">
                      <strong>{t('afterparty.saturday.djs')}</strong>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {t('afterparty.saturday.description')}
                    </p>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="pt-6">
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <a 
                  href="https://picpass.ca/Eventos/After-Brazilian-Day/189" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>{t('afterparty.tickets.cta')}</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              <p className="text-center text-gray-600 text-sm mt-3">
                {t('afterparty.tickets.note')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AfterPartySection;
