
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
    'about.description': 'Brazilian Day Vancouver is the biggest celebration of Brazilian culture in Canada — a vibrant two-day festival full of music, food, dance, and joy! Whether you\'re Brazilian or just love the energy of our culture, this is the event of the year you don\'t want to miss.',
    
    // Highlights
    'highlights.title': 'Event Highlights',
    'highlights.music': 'Live Music & Performances',
    'highlights.music.desc': 'Feel the rhythm with top Brazilian artists, "samba" shows, drumming groups, and "capoeira" demonstrations.',
    'highlights.tchan': 'Special Guest – "É O TCHAN!"',
    'highlights.tchan.desc': 'Friday, August 29 – LIVE performance by Brazil\'s iconic "axé" group "É o Tchan!" Get ready to dance the night away with unforgettable hits and electrifying energy.',
    'highlights.food': 'Brazilian Food & Drinks',
    'highlights.food.desc': 'Savor authentic Brazilian cuisine — from "feijoada" and "pão de queijo" to "caipirinhas" and "brigadeiros".',
    'highlights.culture': 'Cultural Experiences',
    'highlights.culture.desc': 'Enjoy immersive areas showcasing Brazilian art, fashion, games, and regional traditions.',
    'highlights.family': 'Family-Friendly Activities',
    'highlights.family.desc': 'Kids\' zone, face painting, games, and crafts make it a perfect day for the whole family.',
    'highlights.marketplace': 'Marketplace & Experiences',
    'highlights.marketplace.desc': 'Explore local vendors and Brazilian brands with handmade goods, music, clothing, and more.',
    
    // Schedule
    'schedule.title': 'Event Schedule',
    'schedule.friday': 'Friday, August 29 – Sunset "Samba"',
    'schedule.friday.time': '6 PM – 10 PM',
    'schedule.friday.dj': 'Live DJs',
    'schedule.friday.food': 'Street Food',
    'schedule.friday.vibes': 'Night Vibes',
    'schedule.friday.show': 'Main Show: "É o Tchan" – 8 PM',
    'schedule.saturday': 'Saturday, August 30 – Full Festival Day',
    'schedule.saturday.time': '10 AM – 10 PM',
    'schedule.saturday.music': 'Music & Dance All Day',
    'schedule.saturday.pavilions': 'Brazilian Experiences Pavilion - A full day of cultural immersion — experiences and attractions to be announced soon!',
    'schedule.saturday.kids': 'Kids\' Activities, Food, Marketplace & More!',
    'schedule.tickets': 'Tickets Required – Limited Availability! Grab yours now and don\'t miss out.',
    
    // Participate
    'participate.title': 'Be a Part of It',
    'participate.sponsor': 'Become a Sponsor',
    'participate.sponsor.desc': 'Showcase your brand to thousands of engaged festival-goers.',
    'participate.vendor': 'Be a Vendor',
    'participate.vendor.desc': 'Apply to sell food, crafts, or promote your business.',
    'participate.volunteer': 'Volunteer',
    'participate.volunteer.desc': 'Join our team and experience the festival from behind the scenes.',
    
    // Location
    'location.title': 'Location & Getting There',
    'location.address': 'Plaza of Nations – Parking Lot, Downtown Vancouver',
    'location.transit': 'Easy access by SkyTrain & buses',
    'location.parking': 'Paid parking available nearby',
    
    // Footer
    'footer.follow': 'Follow Us',
    'footer.instagram': 'Instagram'
  },
  pt: {
    // Header
    'header.title': 'Brazilian Day Vancouver 2025',
    'header.subtitle': 'A Maior Celebração Brasileira do Ano — Bem Aqui em Vancouver!',
    'header.date': '29–30 de Agosto, 2025',
    'header.location': 'Estacionamento Plaza of Nations',
    'header.cta': 'Compre Seus Ingressos Agora',
    
    // About
    'about.title': 'O que é o Brazilian Day?',
    'about.description': 'Brazilian Day Vancouver é a maior celebração da cultura brasileira no Canadá — um festival vibrante de dois dias cheio de música, comida, dança e alegria! Seja você brasileiro ou apenas ame a energia da nossa cultura, este é o evento do ano que você não pode perder.',
    
    // Highlights
    'highlights.title': 'Destaques do Evento',
    'highlights.music': 'Música ao Vivo & Apresentações',
    'highlights.music.desc': 'Sinta o ritmo com os melhores artistas brasileiros, shows de "samba", grupos de percussão e demonstrações de "capoeira".',
    'highlights.tchan': 'Atração Especial – "É O TCHAN!"',
    'highlights.tchan.desc': 'Sexta-feira, 29 de Agosto – Apresentação AO VIVO do icônico grupo de "axé" brasileiro "É o Tchan!" Prepare-se para dançar a noite toda com sucessos inesquecíveis e energia eletrizante.',
    'highlights.food': 'Comida e Bebidas Brasileiras',
    'highlights.food.desc': 'Saboreie a autêntica culinária brasileira — desde "feijoada" e "pão de queijo" até "caipirinhas" e "brigadeiros".',
    'highlights.culture': 'Experiências Culturais',
    'highlights.culture.desc': 'Aproveite áreas imersivas que mostram arte brasileira, moda, jogos e tradições regionais.',
    'highlights.family': 'Atividades para Toda a Família',
    'highlights.family.desc': 'Área kids, pintura facial, jogos e artesanato tornam este um dia perfeito para toda a família.',
    'highlights.marketplace': 'Mercado & Experiências',
    'highlights.marketplace.desc': 'Explore vendedores locais e marcas brasileiras com produtos artesanais, música, roupas e muito mais.',
    
    // Schedule
    'schedule.title': 'Programação do Evento',
    'schedule.friday': 'Sexta-feira, 29 de Agosto – "Samba" do Pôr do Sol',
    'schedule.friday.time': '18h – 22h',
    'schedule.friday.dj': 'DJs ao Vivo',
    'schedule.friday.food': 'Comida de Rua',
    'schedule.friday.vibes': 'Clima Noturno',
    'schedule.friday.show': 'Show Principal: "É o Tchan" – 20h',
    'schedule.saturday': 'Sábado, 30 de Agosto – Dia Completo do Festival',
    'schedule.saturday.time': '10h – 22h',
    'schedule.saturday.music': 'Música e Dança o Dia Todo',
    'schedule.saturday.pavilions': 'Pavilhão de Experiências Brasileiras - Um dia completo de imersão cultural — experiências e atrações a serem anunciadas em breve!',
    'schedule.saturday.kids': 'Atividades Kids, Comida, Mercado e Muito Mais!',
    'schedule.tickets': 'Ingressos Obrigatórios – Disponibilidade Limitada! Garanta os seus agora e não perca.',
    
    // Participate
    'participate.title': 'Faça Parte',
    'participate.sponsor': 'Torne-se um Patrocinador',
    'participate.sponsor.desc': 'Mostre sua marca para milhares de participantes engajados do festival.',
    'participate.vendor': 'Seja um Vendedor',
    'participate.vendor.desc': 'Candidate-se para vender comida, artesanato ou promover seu negócio.',
    'participate.volunteer': 'Seja Voluntário',
    'participate.volunteer.desc': 'Junte-se à nossa equipe e experimente o festival por trás das cenas.',
    
    // Location
    'location.title': 'Localização e Como Chegar',
    'location.address': 'Plaza of Nations – Estacionamento, Centro de Vancouver',
    'location.transit': 'Acesso fácil por SkyTrain e ônibus',
    'location.parking': 'Estacionamento pago disponível nas proximidades',
    
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
