
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Music, Utensils, Users } from 'lucide-react';

const ScheduleSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t('schedule.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Friday */}
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                {t('schedule.friday')}
              </CardTitle>
              <div className="flex items-center justify-center gap-2 text-yellow-300">
                <Clock className="w-5 h-5" />
                <span className="text-xl">{t('schedule.friday.time')}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <Music className="w-6 h-6 text-yellow-300" />
                <span>{t('schedule.friday.dj')}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <Utensils className="w-6 h-6 text-yellow-300" />
                <span>{t('schedule.friday.food')}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <Users className="w-6 h-6 text-yellow-300" />
                <span>{t('schedule.friday.vibes')}</span>
              </div>
              <div className="mt-6 p-4 bg-yellow-400 text-blue-900 rounded-lg font-bold text-center">
                🔥 {t('schedule.friday.show')}
              </div>
            </CardContent>
          </Card>

          {/* Saturday */}
          <Card className="bg-gradient-to-br from-green-600 to-blue-700 text-white shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                {t('schedule.saturday')}
              </CardTitle>
              <div className="flex items-center justify-center gap-2 text-yellow-300">
                <Clock className="w-5 h-5" />
                <span className="text-xl">{t('schedule.saturday.time')}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <Music className="w-6 h-6 text-yellow-300" />
                <span>{t('schedule.saturday.music')}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <Users className="w-6 h-6 text-yellow-300" />
                <span>{t('schedule.saturday.pavilions')}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <Utensils className="w-6 h-6 text-yellow-300" />
                <span>{t('schedule.saturday.kids')}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tickets Required Message */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg inline-block shadow-xl">
            🎟️ {t('schedule.tickets')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
