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
            {t('schedule.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Friday */}
          <Card className="bg-gradient-to-br from-brazilian-blue to-brazilian-green text-white shadow-2xl border-2 border-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                {t('schedule.friday')}
              </CardTitle>
              <div className="flex items-center justify-center gap-2 text-brazilian-yellow">
                <Clock className="w-5 h-5" />
                <span className="text-xl font-bold">
                  {t('schedule.friday.time')}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Music className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">
                  {t('schedule.friday.dj')}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Utensils className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">
                  {t('schedule.friday.food')}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Users className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">
                  {t('schedule.friday.vibes')}
                </span>
              </div>
              <div className="mt-6 p-4 bg-brazilian-yellow text-brazilian-blue rounded-lg font-bold text-center text-lg">
                {t('schedule.friday.show')}
              </div>
            </CardContent>
          </Card>

          {/* Saturday */}
          <Card className="bg-gradient-to-br from-brazilian-green to-brazilian-blue text-white shadow-2xl border-2 border-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                {t('schedule.saturday')}
              </CardTitle>
              <div className="flex items-center justify-center gap-2 text-brazilian-yellow">
                <Clock className="w-5 h-5" />
                <span className="text-xl font-bold">
                  {t('schedule.saturday.time')}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Music className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">
                  {t('schedule.saturday.music')}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Users className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">
                  {t('schedule.saturday.pavilions')}
                </span>
              </div>
              <div className="p-3 bg-white/20 rounded-lg">
                <p className="font-bold text-sm">{t('schedule.saturday.pavilions')}</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/20 rounded-lg">
                <Utensils className="w-6 h-6 text-brazilian-yellow" />
                <span className="font-bold">
                  {t('schedule.saturday.kids')}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tickets Required Message */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-brazilian-green to-brazilian-blue text-white px-8 py-4 rounded-full font-bold text-lg inline-block shadow-xl border-2 border-white">
            {t('schedule.tickets')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
