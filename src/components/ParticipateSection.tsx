import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Store, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const ParticipateSection = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const opportunities = [
    {
      icon: Handshake,
      title: t('participate.sponsor'),
      desc: t('participate.sponsor.desc'),
      color: 'bg-brazilian-yellow'
    },
    {
      icon: Store,
      title: t('participate.vendor'),
      desc: t('participate.vendor.desc'),
      color: 'bg-brazilian-green'
    },
    {
      icon: Heart,
      title: t('participate.volunteer'),
      desc: t('participate.volunteer.desc'),
      color: 'bg-brazilian-blue'
    }
  ];

  return (
    <section className="py-20 sm:py-16 bg-gradient-to-br from-brazilian-blue/10 to-brazilian-green/10" ref={ref}>
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
            {t('participate.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="bg-white shadow-lg border-2 border-gray-100 relative overflow-hidden sm:p-6">
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <CardHeader className="text-center relative z-10">
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full ${opportunity.color} flex items-center justify-center`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-brazilian-blue font-daft">
                      {opportunity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <p className="text-gray-700 font-body text-body-base">
                      {opportunity.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Single WhatsApp Contact Button */}
        <motion.div 
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut"
          }}
        >
          <motion.a 
            href="https://wa.me/17788613392"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              y: -3,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-400 via-brazilian-green to-brazilian-blue hover:from-green-500 hover:to-blue-800 text-white font-extrabold text-2xl sm:text-lg sm:px-8 sm:py-4 px-16 py-8 min-h-[44px] rounded-full shadow-3xl border-2 border-white font-body relative overflow-visible transition-all duration-200 focus:ring-4 focus:ring-brazilian-yellow/60"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="absolute -inset-2 rounded-full bg-brazilian-yellow/30 blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0"></span>
              <MessageCircle className="w-7 h-7 mr-4 relative z-10" />
              <span className="relative z-10 sm:text-lg text-2xl">{t('participate.contact')}</span>
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ParticipateSection;
