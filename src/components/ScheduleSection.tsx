import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Music, Utensils, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const ScheduleSection = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-brazilian-yellow/20 to-brazilian-green/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-4 drop-shadow-md font-daft">
            {t('schedule.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Friday */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="bg-gradient-to-br from-brazilian-blue to-brazilian-green text-white shadow-2xl border-2 border-white relative overflow-hidden min-h-[44px] sm:p-4">
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              
              <CardHeader className="text-center relative z-10">
                <CardTitle className="text-2xl md:text-3xl font-bold mb-2 font-daft">
                  {t('schedule.friday')}
                </CardTitle>
                {t('schedule.friday.desc') && t('schedule.friday.desc') !== 'schedule.friday.desc' && (
                  <p className="font-body font-normal italic text-white/80 text-base mt-2 mb-2 text-center max-w-xl mx-auto">{t('schedule.friday.desc')}</p>
                )}
                <motion.div 
                  className="flex items-center justify-center gap-2 text-brazilian-yellow"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Clock className="w-5 h-5" />
                  <span className="text-body-xl font-bold font-body">
                    {t('schedule.friday.time')}
                  </span>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="flex justify-center mb-2">
                  <img src="/lovable-uploads/eo_tchan.png" alt="É o Tchan" className="h-40 w-40 md:h-56 md:w-56 rounded-full shadow-lg object-cover bg-white/80 p-1 border-2 border-white" />
                </div>
                <motion.div 
                  className="flex items-center gap-3 p-3 sm:p-2 bg-white/30 rounded-lg min-h-[44px]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.4)", transition: { duration: 0.2 } }}
                >
                  <Music className="w-6 h-6 text-brazilian-yellow" />
                  <div className="flex flex-col text-left">
                    <span className="font-bold font-body text-lg text-white leading-tight">{t('schedule.friday.dj')}</span>
                    {t('schedule.friday.dj.desc') !== 'schedule.friday.dj.desc' && (
                      <span className="font-body font-normal italic text-white/80 text-base mt-1">{t('schedule.friday.dj.desc')}</span>
                    )}
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 p-3 sm:p-2 bg-white/30 rounded-lg min-h-[44px]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.4)", transition: { duration: 0.2 } }}
                >
                  <Utensils className="w-6 h-6 text-brazilian-yellow" />
                  <div className="flex flex-col text-left">
                    <span className="font-bold font-body text-lg text-white leading-tight">{t('schedule.friday.food')}</span>
                    {t('schedule.friday.food.desc') !== 'schedule.friday.food.desc' && (
                      <span className="font-body font-normal italic text-white/80 text-base mt-1">{t('schedule.friday.food.desc')}</span>
                    )}
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 p-3 sm:p-2 bg-white/30 rounded-lg min-h-[44px]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.4)", transition: { duration: 0.2 } }}
                >
                  <Users className="w-6 h-6 text-brazilian-yellow" />
                  <div className="flex flex-col text-left">
                    <span className="font-bold font-body text-lg text-white leading-tight">{t('schedule.friday.vibes')}</span>
                    {t('schedule.friday.vibes.desc') !== 'schedule.friday.vibes.desc' && (
                      <span className="font-body font-normal italic text-white/80 text-base mt-1">{t('schedule.friday.vibes.desc')}</span>
                    )}
                  </div>
                </motion.div>
                <motion.div 
                  className="mt-6 p-4 sm:p-2 bg-brazilian-yellow text-brazilian-blue rounded-lg font-bold text-center text-xl font-body shadow-md min-h-[44px]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Star className="inline-block w-6 h-6 mr-2 align-middle text-brazilian-blue" />
                  {t('schedule.friday.show')}
                  {t('schedule.friday.show.desc') !== 'schedule.friday.show.desc' && (
                    <span className="block font-body font-normal italic text-gray-700/80 text-base mt-1">{t('schedule.friday.show.desc')}</span>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Saturday */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="bg-gradient-to-br from-brazilian-green to-brazilian-blue text-white shadow-2xl border-2 border-white relative overflow-hidden min-h-[44px] sm:p-4">
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              
              <CardHeader className="text-center relative z-10">
                <CardTitle className="text-2xl md:text-3xl font-bold mb-2 font-daft">
                  {t('schedule.saturday')}
                </CardTitle>
                <motion.div 
                  className="flex items-center justify-center gap-2 text-brazilian-yellow"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Clock className="w-5 h-5" />
                  <span className="text-body-xl font-bold font-body">
                    {t('schedule.saturday.time')}
                  </span>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="flex justify-center mb-2">
                  <img src="/lovable-uploads/dia_30.png" alt="Dia 30 Highlight" className="h-40 w-40 md:h-56 md:w-56 rounded-full shadow-lg object-cover bg-white/80 p-1 border-2 border-white" />
                </div>
                <motion.div 
                  className="flex items-center gap-3 p-3 sm:p-2 bg-white/30 rounded-lg min-h-[44px]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.4)", transition: { duration: 0.2 } }}
                >
                  <Music className="w-6 h-6 text-brazilian-yellow" />
                  <div className="flex flex-col text-left">
                    <span className="font-bold font-body text-lg text-white leading-tight">{t('schedule.saturday.music')}</span>
                    {t('schedule.saturday.music.desc') !== 'schedule.saturday.music.desc' && (
                      <span className="font-body font-normal italic text-white/80 text-base mt-1">{t('schedule.saturday.music.desc')}</span>
                    )}
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 p-3 sm:p-2 bg-white/30 rounded-lg min-h-[44px]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.4)", transition: { duration: 0.2 } }}
                >
                  <Music className="w-6 h-6 text-brazilian-yellow" />
                  <div className="flex flex-col text-left">
                    <span className="font-bold font-body text-lg text-white leading-tight">{t('schedule.saturday.vibe')}</span>
                    {t('schedule.saturday.vibe.desc') !== 'schedule.saturday.vibe.desc' && (
                      <span className="font-body font-normal italic text-white/80 text-base mt-1">{t('schedule.saturday.vibe.desc')}</span>
                    )}
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 p-3 sm:p-2 bg-white/30 rounded-lg min-h-[44px]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.4)", transition: { duration: 0.2 } }}
                >
                  <Users className="w-6 h-6 text-brazilian-yellow" />
                  <div className="flex flex-col text-left">
                    <span className="font-bold font-body text-lg text-white leading-tight">{t('schedule.saturday.pavilions')}</span>
                    {t('schedule.saturday.pavilions.desc') !== 'schedule.saturday.pavilions.desc' && (
                      <span className="font-body font-normal italic text-white/80 text-base mt-1">{t('schedule.saturday.pavilions.desc')}</span>
                    )}
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 p-3 sm:p-2 bg-white/30 rounded-lg min-h-[44px]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.4)", transition: { duration: 0.2 } }}
                >
                  <Utensils className="w-6 h-6 text-brazilian-yellow" />
                  <div className="flex flex-col text-left">
                    <span className="font-bold font-body text-lg text-white leading-tight">{t('schedule.saturday.kids')}</span>
                    {t('schedule.saturday.kids.desc') !== 'schedule.saturday.kids.desc' && (
                      <span className="font-body font-normal italic text-white/80 text-base mt-1">{t('schedule.saturday.kids.desc')}</span>
                    )}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tickets Required Message */}
        <motion.div 
          className="text-center mt-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut"
          }}
        >
          <a
            href="https://picpass.ca/Eventos/BrazilianDay/178?fbclid=PAZXh0bgNhZW0CMTEAAafhS9KDqIMkFqYnCj1d3XuWoAiaVyq0OES3YUAewri0eAjsZGmS8xNfI2zzTQ_aem_Ks1LueTEuq7kyOiMkf4o1Q"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block' }}
          >
            <motion.div 
              className="bg-gradient-to-r from-brazilian-green to-brazilian-blue text-white px-8 py-4 rounded-full font-bold text-body-lg inline-block shadow-xl border-2 border-white font-body"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              {t('schedule.tickets')}
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
