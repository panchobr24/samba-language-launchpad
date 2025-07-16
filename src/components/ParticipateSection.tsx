import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Store, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { trackCtaClick } from '@/lib/utils';

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
                    <p className="text-gray-700 font-body text-body-base mb-4">
                      {opportunity.desc}
                    </p>
                    {opportunity.title === t('participate.sponsor') && (
                      <div className="mt-4">
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdZCUG6rhdtQ0F5K_em7rG8xrYTSk8X1BkZoOCE6GdYUWqf_A/viewform?usp=header"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-brazilian-yellow hover:bg-yellow-400 text-brazilian-blue text-sm font-bold rounded-full transition-all duration-200 hover:scale-105 shadow-md"
                        >
                          {t('participate.sponsor.apply')}
                        </a>
                      </div>
                    )}
                    {opportunity.title === t('participate.vendor') && (
                      <div className="mt-4">
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSc_3L5d0BiI_DGGSlznJ0Mo9n6AZ82yg-n3bcipUsqinvC2Dg/viewform?usp=header"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-brazilian-green hover:bg-green-700 text-white text-sm font-bold rounded-full transition-all duration-200 hover:scale-105 shadow-md"
                        >
                          {t('participate.vendor.apply')}
                        </a>
                      </div>
                    )}
                    {opportunity.title === t('participate.volunteer') && (
                      <div className="mt-4">
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLScLPhH-Cc6UM-v2Q7BxJIfAuDJ3Obq-1PyUsWps2nUvdIyTjQ/viewform?usp=dialog"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-brazilian-blue hover:bg-brazilian-blue/80 text-white text-sm font-bold rounded-full transition-all duration-200 hover:scale-105 shadow-md"
                          onClick={() => trackCtaClick('participate-volunteer')}
                        >
                          {t('participate.volunteer.apply')}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ParticipateSection;
