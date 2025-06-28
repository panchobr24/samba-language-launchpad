
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white font-daft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-8 drop-shadow-md">
            🎉 What is Brazilian Day?
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed font-bold">
            Brazilian Day Vancouver is the biggest celebration of Brazilian culture in Canada — a vibrant two-day festival full of music, food, dance, and joy! Whether you're Brazilian or just love the energy of our culture, this is the event of the year you don't want to miss.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
