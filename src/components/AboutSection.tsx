import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-8 drop-shadow-md font-daft"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            {t('about.title')}
          </motion.h2>
          <motion.p 
            className="text-body-xl text-gray-800 leading-relaxed font-body"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            {t('about.description')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
