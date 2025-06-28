
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Store, Heart } from 'lucide-react';

const ParticipateSection = () => {
  const { t } = useLanguage();

  const opportunities = [
    {
      icon: Handshake,
      key: 'sponsor',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Store,
      key: 'vendor',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Heart,
      key: 'volunteer',
      color: 'from-pink-400 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('participate.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <Card 
                key={opportunity.key}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${opportunity.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {t(`participate.${opportunity.key}`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 mb-6">
                    {t(`participate.${opportunity.key}.desc`)}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 font-semibold transition-all duration-200"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ParticipateSection;
