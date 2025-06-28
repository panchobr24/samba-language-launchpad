
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Music, Star, Coffee, Palette, Users, ShoppingBag } from 'lucide-react';

const HighlightsSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Music,
      key: 'music',
      color: 'text-yellow-500'
    },
    {
      icon: Star,
      key: 'tchan',
      color: 'text-red-500'
    },
    {
      icon: Coffee,
      key: 'food',
      color: 'text-green-500'
    },
    {
      icon: Palette,
      key: 'culture',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      key: 'family',
      color: 'text-purple-500'
    },
    {
      icon: ShoppingBag,
      key: 'marketplace',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t('highlights.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={highlight.key}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6">
                  <Icon className={`w-16 h-16 mx-auto ${highlight.color}`} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {t(`highlights.${highlight.key}`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`highlights.${highlight.key}.desc`)}
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
