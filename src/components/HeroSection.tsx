
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-300 rounded-full"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4">
              BRAZILIAN
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
              DAY
            </h2>
            <div className="text-2xl md:text-3xl font-light text-yellow-300 mb-8">
              Vancouver 2025
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed">
            {t('header.subtitle')}
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-lg">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Calendar className="w-6 h-6 text-yellow-300" />
              <span>{t('header.date')}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <MapPin className="w-6 h-6 text-yellow-300" />
              <span>{t('header.location')}</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {t('header.cta')}
          </Button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
          <path d="M321.39,56.44c58.93-3.5,84.79-24.34,149.57-38.47,64.78-14.13,127.88,12.18,149.57,38.47,21.69,26.29,21.69,52.58,0,78.87-21.69,26.29-84.79,52.6-149.57,38.47-64.78-14.13-90.64-34.97-149.57-38.47-58.93-3.5-117.86,14.13-176.79,38.47C85.67,186.91,22.57,160.6,0.88,134.31,0.88,108.02,0.88,56.44,0.88,56.44H321.39Z"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
