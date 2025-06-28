import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-8 drop-shadow-md font-daft">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed font-body">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
