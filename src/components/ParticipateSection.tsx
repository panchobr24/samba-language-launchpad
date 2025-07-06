import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Store, Heart } from 'lucide-react';
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
                    <p className="text-gray-700 font-body text-body-base mb-4">
                      {opportunity.desc}
                    </p>
                    {opportunity.title === t('participate.vendor') && (
                      <div className="mt-4">
                        <a 
                          href="mailto:contact@youcanproductions.ca?subject=Candidatura de Vendedor - Brazilian Day Vancouver 2025&body=Olá,%0D%0A%0D%0AGostaria de me candidatar para ser vendedor no Brazilian Day Vancouver 2025.%0D%0A%0D%0APor favor, forneça as seguintes informações:%0D%0A- Nome da empresa:%0D%0A- Tipo de produtos/serviços:%0D%0A- Informações de contato:%0D%0A- Requisitos especiais:%0D%0A%0D%0AObrigado!"
                          className="inline-flex items-center justify-center px-4 py-2 bg-brazilian-green hover:bg-brazilian-green/80 text-white text-sm font-bold rounded-full transition-all duration-200 hover:scale-105 shadow-md"
                        >
                          {t('participate.vendor.apply')}
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
