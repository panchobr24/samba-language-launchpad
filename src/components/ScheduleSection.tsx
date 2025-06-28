
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Music, Utensils, Users } from 'lucide-react';

const ScheduleSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-brazilian-yellow/20 to-brazilian-green/20 font-daft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-4 drop-shadow-md">
            🗓️ Event Schedule
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Friday */}
          <Card className="bg-gradient-to-br from-brazilian-blue to-brazilian-green text-white shadow-2xl border-2 border-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                Friday, August 29 – Sunset "Samba"
              </CardTitle>
              <div className="flex items-center justify-center gap-2 text-brazilian-yellow">
                <Clock className="w-5 h-5" />
                <span className="text-xl font-bold">🕕 6 PM – 10 PM</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Music className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">🎧 Live DJs</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Utensils className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">🍽️ Street Food</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Users className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">💃 Night Vibes</span>
              </div>
              <div className="mt-6 p-4 bg-brazilian-yellow text-brazilian-blue rounded-lg font-bold text-center text-lg">
                🎤 Main Show: "É o Tchan" – 8 PM
              </div>
            </CardContent>
          </Card>

          {/* Saturday */}
          <Card className="bg-gradient-to-br from-brazilian-green to-brazilian-blue text-white shadow-2xl border-2 border-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                Saturday, August 30 – Full Festival Day
              </CardTitle>
              <div className="flex items-center justify-center gap-2 text-brazilian-yellow">
                <Clock className="w-5 h-5" />
                <span className="text-xl font-bold">🕙 10 AM – 10 PM</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Music className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">🎶 Music & Dance All Day</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Users className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">🎭 Brazilian Experiences Pavilion</span>
              </div>
              <div className="p-3 bg-white/20 rounded-lg">
                <p className="font-bold text-sm">A full day of cultural immersion — experiences and attractions to be announced soon!</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Utensils className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">🧒 Kids' Activities, Food, Marketplace & More!</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tickets Required Message */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-brazilian-green to-brazilian-blue text-white px-8 py-4 rounded-full font-bold text-lg inline-block shadow-xl border-2 border-white">
            🎟️ Tickets Required – Limited Availability! Grab yours now and don't miss out.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
