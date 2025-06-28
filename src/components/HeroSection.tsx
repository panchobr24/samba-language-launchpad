import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brazilian-yellow via-yellow-400 to-brazilian-yellow overflow-hidden font-daft">
      {/* Background Elements - Brazilian Flag Inspired */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brazilian-green rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-brazilian-blue rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-brazilian-green rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-brazilian-blue rounded-full"></div>
        {/* Tropical leaves pattern */}
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-brazilian-green opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-brazilian-green opacity-30 transform -rotate-45"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Event Logo - Much Larger */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/78594582-c731-46b2-a322-8d85310ce381.png" 
              alt="Brazilian Day Vancouver 2025 Logo" 
              className="w-80 h-80 md:w-96 md:h-96 mx-auto mb-8 drop-shadow-lg"
            />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-bold mb-8 text-brazilian-blue leading-relaxed font-body">
            {t('header.subtitle')}
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-lg">
            <div className="flex items-center gap-3 bg-brazilian-blue/90 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <MapPin className="w-6 h-6 text-brazilian-yellow" />
              <span className="font-bold font-body">{t('header.location')}</span>
            </div>
            <div className="flex items-center gap-3 bg-brazilian-green/90 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <Calendar className="w-6 h-6 text-brazilian-yellow" />
              <span className="font-bold font-body">{t('header.date')}</span>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://picpass.ca/Eventos/BrazilianDay/178?fbclid=PAZXh0bgNhZW0CMTEAAafhS9KDqIMkFqYnCj1d3XuWoAiaVyq0OES3YUAewri0eAjsZGmS8xNfI2zzTQ_aem_Ks1LueTEuq7kyOiMkf4o1Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brazilian-green to-brazilian-blue hover:from-brazilian-green/80 hover:to-brazilian-blue/80 text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white font-body"
            >
              {t('header.cta')}
            </Button>
          </a>
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
