
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.title': 'Brazilian Day Vancouver 2025',
    'header.subtitle': 'The Ultimate Brazilian Celebration of the Year — Right Here in Vancouver!',
    'header.date': 'August 29–30, 2025',
    'header.location': 'Plaza of Nations Parking Lot',
    'header.cta': 'Get Your Tickets Now',
    
    // About
    'about.title': 'What is Brazilian Day?',
    'about.description': 'BRAZILIAN DAY VANCOUVER is the biggest celebration of Brazilian culture in Canada — a vibrant two-day festival full of music, food, dance, and joy! Whether you\'re Brazilian or just love the energy of our culture, this is the must-attend event of the year.',
    
    // Tickets
    'tickets.title': 'Ticket Prices',
    'tickets.kids': 'Brazilian Day - Kids (up to 12 years old)',
    'tickets.both': 'É o Tchan + Brazilian Day - tier 1 (both days)',
    'tickets.saturday': 'Brazilian Day - tier 1 (Aug 30 only)',
    'tickets.friday': 'É o Tchan - tier 1 (Aug 29 only)',
    'tickets.cta': 'Buy Tickets',
    'tickets.limited': 'Limited Availability!',
    
    // Highlights
    'highlights.title': 'Event Highlights',
    'highlights.music': 'Live Music & Performances',
    'highlights.music.desc': 'Brazilian artists, samba, drumming groups, capoeira',
    'highlights.tchan': 'Special Guest: É O TCHAN!',
    'highlights.tchan.desc': 'Aug 29, iconic axé group live at 8 PM',
    'highlights.food': 'Brazilian Food & Drinks',
    'highlights.food.desc': 'feijoada, pão de queijo, caipirinhas, brigadeiros',
    'highlights.culture': 'Cultural Experiences',
    'highlights.culture.desc': 'Brazilian art, fashion, games, regional traditions',
    'highlights.family': 'Family-Friendly Activities',
    'highlights.family.desc': 'kids\' zone, games, crafts',
    'highlights.marketplace': 'Marketplace & Experiences',
    'highlights.marketplace.desc': 'local vendors, music, handmade goods, more',
    
    // Schedule
    'schedule.title': 'Event Schedule',
    'schedule.friday': 'Friday, August 29 – "Sunset Samba"',
    'schedule.friday.time': '6 PM – 10 PM',
    'schedule.friday.dj': 'Live DJs',
    'schedule.friday.food': 'Street Food',
    'schedule.friday.vibes': 'Night Vibes',
    'schedule.friday.show': 'É o Tchan main show – 8 PM',
    'schedule.saturday': 'Saturday, August 30 – Full Festival Day',
    'schedule.saturday.time': '10 AM – 10 PM',
    'schedule.saturday.music': 'All-day music & dance',
    'schedule.saturday.pavilions': 'Cultural pavilions & attractions (details coming soon)',
    'schedule.saturday.kids': 'Kids\' zone, food, vendors, more',
    
    // Participate
    'participate.title': 'Be a Part of It',
    'participate.sponsor': 'Become a Sponsor',
    'participate.sponsor.desc': 'Showcase your brand',
    'participate.vendor': 'Be a Vendor',
    'participate.vendor.desc': 'Apply to sell or promote your business',
    'participate.volunteer': 'Volunteer',
    'participate.volunteer.desc': 'Join the team behind the scenes',
    
    // Location
    'location.title': 'Location & Getting There',
    'location.address': 'Plaza of Nations – Parking Lot, Downtown Vancouver',
    'location.transit': 'Accessible by SkyTrain & bus',
    'location.parking': 'Paid parking available',
    
    // Footer
    'footer.follow': 'Follow Us',
    'footer.instagram': 'Instagram'
  },
  pt: {
    // Header
    'header.title': 'Dia do Brasil Vancouver 2025',
    'header.subtitle': 'A Maior Celebração Brasileira do Ano — Bem Aqui em Vancouver!',
    'header.date': '29–30 de Agosto, 2025',
    'header.location': 'Estacionamento Plaza of Nations',
    'header.cta': 'Compre Seus Ingressos Agora',
    
    // About
    'about.title': 'O que é o Dia do Brasil?',
    'about.description': 'DIA DO BRASIL VANCOUVER é a maior celebração da cultura brasileira no Canadá — um festival vibrante de dois dias cheio de música, comida, dança e alegria! Seja você brasileiro ou apenas ame a energia da nossa cultura, este é o evento imperdível do ano.',
    
    // Tickets
    'tickets.title': 'Preços dos Ingressos',
    'tickets.kids': 'Dia do Brasil - Crianças (até 12 anos)',
    'tickets.both': 'É o Tchan + Dia do Brasil - lote 1 (ambos os dias)',
    'tickets.saturday': 'Dia do Brasil - lote 1 (apenas 30 de Ago)',
    'tickets.friday': 'É o Tchan - lote 1 (apenas 29 de Ago)',
    'tickets.cta': 'Comprar Ingressos',
    'tickets.limited': 'Disponibilidade Limitada!',
    
    // Highlights
    'highlights.title': 'Destaques do Evento',
    'highlights.music': 'Música ao Vivo & Apresentações',
    'highlights.music.desc': 'Artistas brasileiros, samba, grupos de percussão, capoeira',
    'highlights.tchan': 'Atração Especial: É O TCHAN!',
    'highlights.tchan.desc': '29 de Ago, grupo icônico de axé ao vivo às 20h',
    'highlights.food': 'Comida e Bebidas Brasileiras',
    'highlights.food.desc': 'feijoada, pão de queijo, caipirinhas, brigadeiros',
    'highlights.culture': 'Experiências Culturais',
    'highlights.culture.desc': 'Arte brasileira, moda, jogos, tradições regionais',
    'highlights.family': 'Atividades para Toda a Família',
    'highlights.family.desc': 'área kids, jogos, artesanato',
    'highlights.marketplace': 'Mercado & Experiências',
    'highlights.marketplace.desc': 'vendedores locais, música, produtos artesanais, mais',
    
    // Schedule
    'schedule.title': 'Programação do Evento',
    'schedule.friday': 'Sexta-feira, 29 de Agosto – "Samba do Pôr do Sol"',
    'schedule.friday.time': '18h – 22h',
    'schedule.friday.dj': 'DJs ao Vivo',
    'schedule.friday.food': 'Comida de Rua',
    'schedule.friday.vibes': 'Clima Noturno',
    'schedule.friday.show': 'Show principal É o Tchan – 20h',
    'schedule.saturday': 'Sábado, 30 de Agosto – Dia Completo do Festival',
    'schedule.saturday.time': '10h – 22h',
    'schedule.saturday.music': 'Música e dança o dia todo',
    'schedule.saturday.pavilions': 'Pavilhões culturais e atrações (detalhes em breve)',
    'schedule.saturday.kids': 'Área kids, comida, vendedores, mais',
    
    // Participate
    'participate.title': 'Faça Parte',
    'participate.sponsor': 'Torne-se um Patrocinador',
    'participate.sponsor.desc': 'Divulgue sua marca',
    'participate.vendor': 'Seja um Vendedor',
    'participate.vendor.desc': 'Candidate-se para vender ou promover seu negócio',
    'participate.volunteer': 'Seja Voluntário',
    'participate.volunteer.desc': 'Junte-se à equipe nos bastidores',
    
    // Location
    'location.title': 'Localização e Como Chegar',
    'location.address': 'Plaza of Nations – Estacionamento, Centro de Vancouver',
    'location.transit': 'Acessível por SkyTrain e ônibus',
    'location.parking': 'Estacionamento pago disponível',
    
    // Footer
    'footer.follow': 'Nos Siga',
    'footer.instagram': 'Instagram'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
