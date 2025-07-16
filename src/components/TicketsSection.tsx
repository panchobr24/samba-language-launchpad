
import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TicketsSection = () => {
  const { t } = useLanguage();

  const tickets = [
    {
      key: 'kids',
      price: '$5',
      popular: false
    },
    {
      key: 'both',
      price: '$77',
      popular: true
    },
    {
      key: 'saturday',
      price: '$15',
      popular: false
    },
    {
      key: 'friday',
      price: '$70',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t('tickets.title')}
          </h2>
          <Badge variant="destructive" className="text-lg px-4 py-2">
            {t('tickets.limited')}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tickets.map((ticket) => (
            <Card 
              key={ticket.key} 
              className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                ticket.popular ? 'border-2 border-yellow-400 shadow-lg' : ''
              }`}
            >
              {ticket.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-blue-900 mb-2">
                  {ticket.price}
                </CardTitle>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(`tickets.${ticket.key}`)}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  onClick={ticket.popular ? () => trackCtaClick('tickets-main-cta') : undefined}
                >
                  {t('tickets.cta')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
