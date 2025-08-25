import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';

const MockupSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Como Será o Evento",
      subtitle: "Confira o mockup do nosso evento e veja como será a experiência",
      mapLegend: "Legenda do Mapa",
      locations: [
        {
          name: "Brasil Experience",
          description: "Um pequeno espaço para mergulhar na cultura brasileira, apreciar e mostrar para os gringos um pouquinho das nossas raízes."
        },
        {
          name: "Arena Brasil",
          description: "Atividades e experiências brasileiras para interação de toda a família."
        },
        {
          name: "Food Vendors",
          description: "Nossos queridos expositores de comida brasileira trazendo delícias irresistíveis para matar a saudade de casa."
        },
        {
          name: "Vendors",
          description: "Produtos com a nossa qualidade e criatividade brasileiras para você levar um pedacinho do evento para casa."
        },
        {
          name: "Kids Area",
          description: "Diversão garantida para a criançada, com atividades e brincadeiras especiais da Oficina Curumim."
        },
        {
          name: "Bar & Lounge",
          description: "Para brindar o final do verão com bebidas refrescantes e boa companhia."
        },
        {
          name: "Main Stage",
          description: "O coração do festival! No dia 29, show com É o Tchan. No dia 30, serão 10 horas de música brasileira para todos os gostos!"
        }
      ]
    },
    en: {
      title: "How the Event Will Look",
      subtitle: "Check out our event mockup and see how the experience will be",
      mapLegend: "Map Legend",
      locations: [
        {
          name: "Brasil Experience",
          description: "A small space to dive into Brazilian culture, appreciate it, and share a bit of our roots with the locals."
        },
        {
          name: "Arena Brasil",
          description: "Brazilian activities and experiences for the whole family to enjoy together."
        },
        {
          name: "Food Vendors",
          description: "Our beloved Brazilian food vendors bringing irresistible treats to satisfy your cravings."
        },
        {
          name: "Vendors",
          description: "Products showcasing the quality and creativity of Brazil for you to take home a piece of the event."
        },
        {
          name: "Kids Area",
          description: "Guaranteed fun for the little ones, with special activities and games from Oficina Curumim."
        },
        {
          name: "Bar & Lounge",
          description: "The perfect spot to toast to the end of summer with refreshing drinks and great company."
        },
        {
          name: "Main Stage",
          description: "The heart of the festival! On Sept 29, a show with É o Tchan. On Sept 30, 10 hours of Brazilian music for every taste!"
        }
      ]
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

        {/* Map Legend Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brazilian-blue mb-4 font-daft">
              {currentContent.mapLegend}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {currentContent.locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${
                  location.name === "Main Stage" ? "col-span-2 lg:col-span-3" : ""
                }`}
              >
                <h4 className="text-base md:text-lg font-bold text-brazilian-blue mb-2 md:mb-3 font-daft">
                  {location.name}
                </h4>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-body">
                  {location.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MockupSection; 