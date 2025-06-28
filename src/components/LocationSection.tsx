
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Train, Car } from 'lucide-react';

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t('location.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-blue-900">
                {t('location.address')}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl">
              <Train className="w-12 h-12 text-blue-600" />
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Public Transit</h4>
                <p className="text-gray-700">{t('location.transit')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-green-50 rounded-xl">
              <Car className="w-12 h-12 text-green-600" />
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Parking</h4>
                <p className="text-gray-700">{t('location.parking')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
