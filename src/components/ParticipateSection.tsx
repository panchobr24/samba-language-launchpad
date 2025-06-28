
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Store, Heart, MessageCircle } from 'lucide-react';

const ParticipateSection = () => {
  const { t } = useLanguage();

  const opportunities = [
    {
      icon: Handshake,
      title: '✅ Become a Sponsor',
      desc: 'Showcase your brand to thousands of engaged festival-goers.',
      color: 'bg-brazilian-yellow'
    },
    {
      icon: Store,
      title: '✅ Be a Vendor',
      desc: 'Apply to sell food, crafts, or promote your business.',
      color: 'bg-brazilian-green'
    },
    {
      icon: Heart,
      title: '✅ Volunteer',
      desc: 'Join our team and experience the festival from behind the scenes.',
      color: 'bg-brazilian-blue'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brazilian-blue/10 to-brazilian-green/10 font-daft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-4 drop-shadow-md">
            🙌 Be a Part of It
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <Card 
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-100"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${opportunity.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brazilian-blue">
                    {opportunity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 font-bold">
                    {opportunity.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Single WhatsApp Contact Button */}
        <div className="text-center">
          <a 
            href="https://wa.me/17788613392"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-brazilian-green to-brazilian-blue hover:from-brazilian-green/80 hover:to-brazilian-blue/80 text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Interested? Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ParticipateSection;
