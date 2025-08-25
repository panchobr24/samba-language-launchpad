import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';

const CampaignBanner = () => {
  const { t } = useLanguage();
  return (
    <section className="py-10 sm:py-14 bg-white font-daft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-2xl border-4 border-white overflow-hidden"
          aria-label={t('campaign.title')}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden">
              <motion.img
                src="/lovable-uploads/BCPlace.jpg"
                alt={t('campaign.title')}
                className="w-full h-[320px] sm:h-[420px] lg:h-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
                initial={{ scale: 1.05, opacity: 0.9 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
              />
            </div>

            {/* Text panel */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 flex items-center">
              <div className="w-full">
                <div className="flex justify-center">
                  <motion.div
                    className="h-2 w-24 bg-gradient-to-r from-brazilian-green via-brazilian-blue to-brazilian-yellow rounded-full mb-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-3xl font-bold text-brazilian-blue mb-2 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
                >
                  {t('campaign.title')}
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg md:text-lg font-bold text-brazilian-blue/90 mb-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 }}
                >
                  {t('campaign.subtitle')}
                </motion.p>
                <motion.p
                  className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 text-justify"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
                >
                  {t('campaign.body')}
                </motion.p>
                <motion.p
                  className="font-body text-xs mt-3 text-gray-500 italic text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {t('campaign.note')}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignBanner;


