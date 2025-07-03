import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Train, Car } from 'lucide-react';

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white font-daft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-4 drop-shadow-md font-daft">
            {t('location.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-brazilian-blue">
                {t('location.address')}
              </h3>
            </div>
            <p className="text-body-xl font-bold text-gray-700">Downtown Vancouver</p>
          </div>

          {/* Google Maps Embedding */}
          <div className="mb-12">
            <div className="w-full h-96 md:h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-brazilian-blue/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.4208476230824!2d-123.11046138500893!3d49.27531654126338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717cd747aba9%3A0xf88d02f39aa064c7!2sPlaza%20of%20Nations!5e1!3m2!1sen!2sca!4v1751502232137!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Samba Language Launchpad Location"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 p-6 bg-brazilian-blue/10 rounded-xl border-2 border-brazilian-blue/20">
              <Train className="w-12 h-12 text-brazilian-blue" />
              <div>
                <h4 className="font-bold text-brazilian-blue mb-2 text-lg">
                  {t('location.transit')}
                </h4>
                <p className="text-gray-700 font-bold text-sm italic">{t('location.transit.desc')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-brazilian-green/10 rounded-xl border-2 border-brazilian-green/20">
              <Car className="w-12 h-12 text-brazilian-green" />
              <div>
                <h4 className="font-bold text-brazilian-green mb-2 text-lg">
                  {t('location.parking')}
                </h4>
                <p className="text-gray-700 font-bold text-sm italic">{t('location.parking.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
