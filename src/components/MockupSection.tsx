import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';

const MockupSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Como Será o Evento",
      subtitle: "Confira o mockup do nosso evento e veja como será a experiência"
    },
    en: {
      title: "How the Event Will Look",
      subtitle: "Check out our event mockup and see how the experience will be"
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-4 font-daft">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </motion.div>

        {/* Desktop Mockup - Only visible on desktop */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group max-w-4xl">
              <div className="relative overflow-hidden rounded-lg shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/lovable-uploads/landscape_mockup.jpeg"
                  alt="Mockup do evento - versão desktop"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Mockup - Only visible on mobile */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105 max-w-xs">
                <img
                  src="/lovable-uploads/portrait_mockup.jpeg"
                  alt="Mockup do evento - versão mobile"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MockupSection; 