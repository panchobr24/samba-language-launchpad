import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Music, Star, Coffee, Palette, Users, ShoppingBag } from 'lucide-react';

const HighlightsSection = () => {
  const { t } = useLanguage();

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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-4 drop-shadow-md font-daft">
            {t('highlights.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${highlight.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brazilian-blue mb-4 font-daft">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-body">
                  {highlight.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
