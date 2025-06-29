import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Music, Star, Coffee, Palette, Users, ShoppingBag } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const HighlightsSection = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const highlights = [
    {
      icon: Music,
      title: t('highlights.music'),
      desc: t('highlights.music.desc'),
      color: 'bg-brazilian-green'
    },
    {
      icon: Star,
      title: t('highlights.tchan'),
      desc: t('highlights.tchan.desc'),
      color: 'bg-brazilian-blue'
    },
    {
      icon: Coffee,
      title: t('highlights.food'),
      desc: t('highlights.food.desc'),
      color: 'bg-brazilian-yellow'
    },
    {
      icon: Palette,
      title: t('highlights.culture'),
      desc: t('highlights.culture.desc'),
      color: 'bg-brazilian-green'
    },
    {
      icon: Users,
      title: t('highlights.family'),
      desc: t('highlights.family.desc'),
      color: 'bg-brazilian-blue'
    },
    {
      icon: ShoppingBag,
      title: t('highlights.marketplace'),
      desc: t('highlights.marketplace.desc'),
      color: 'bg-brazilian-yellow'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section className="py-20 sm:py-16 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
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
            {t('highlights.title')}
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div 
                key={index}
                className="text-center p-8 sm:p-6 rounded-2xl bg-white shadow-lg border-2 border-gray-100 relative overflow-hidden group"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-6 rounded-full ${highlight.color} flex items-center justify-center relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-brazilian-blue mb-4 font-daft relative z-10"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {highlight.title}
                </motion.h3>
                
                <p className="text-gray-700 leading-relaxed font-body text-body-base relative z-10">
                  {highlight.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightsSection;
