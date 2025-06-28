
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Train, Car } from 'lucide-react';

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white font-daft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-4 drop-shadow-md">
            📍 Location & Getting There
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-brazilian-blue">
                Plaza of Nations – Parking Lot
              </h3>
            </div>
            <p className="text-xl font-bold text-gray-700">Downtown Vancouver</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 p-6 bg-brazilian-blue/10 rounded-xl border-2 border-brazilian-blue/20">
              <Train className="w-12 h-12 text-brazilian-blue" />
              <div>
                <h4 className="font-bold text-brazilian-blue mb-2 text-lg">🚆 Public Transit</h4>
                <p className="text-gray-700 font-bold">Easy access by SkyTrain & buses</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-brazilian-green/10 rounded-xl border-2 border-brazilian-green/20">
              <Car className="w-12 h-12 text-brazilian-green" />
              <div>
                <h4 className="font-bold text-brazilian-green mb-2 text-lg">🚗 Parking</h4>
                <p className="text-gray-700 font-bold">Paid parking available nearby</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
