
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Music, Star, Coffee, Palette, Users, ShoppingBag } from 'lucide-react';

const HighlightsSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Music,
      title: '🕺 Live Music & Performances',
      desc: 'Feel the rhythm with top Brazilian artists, "samba" shows, drumming groups, and "capoeira" demonstrations.',
      color: 'bg-brazilian-green'
    },
    {
      icon: Star,
      title: '🌟 Special Guest – "É O TCHAN!"',
      desc: '🔥 Friday, August 29 – LIVE performance by Brazil\'s iconic "axé" group "É o Tchan!" Get ready to dance the night away with unforgettable hits and electrifying energy.',
      color: 'bg-brazilian-blue'
    },
    {
      icon: Coffee,
      title: '🍢 Brazilian Food & Drinks',
      desc: 'Savor authentic Brazilian cuisine — from "feijoada" and "pão de queijo" to "caipirinhas" and "brigadeiros".',
      color: 'bg-brazilian-yellow'
    },
    {
      icon: Palette,
      title: '🎨 Cultural Experiences',
      desc: 'Enjoy immersive areas showcasing Brazilian art, fashion, games, and regional traditions.',
      color: 'bg-brazilian-green'
    },
    {
      icon: Users,
      title: '👨‍👩‍👧‍👦 Family-Friendly Activities',
      desc: 'Kids\' zone, face painting, games, and crafts make it a perfect day for the whole family.',
      color: 'bg-brazilian-blue'
    },
    {
      icon: ShoppingBag,
      title: '🛍️ Marketplace & Experiences',
      desc: 'Explore local vendors and Brazilian brands with handmade goods, music, clothing, and more.',
      color: 'bg-brazilian-yellow'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-daft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-4 drop-shadow-md">
            📅 Event Highlights
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
                <h3 className="text-xl font-bold text-brazilian-blue mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-bold">
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
