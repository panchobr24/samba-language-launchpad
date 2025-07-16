import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LanguageContext } from './LanguageContextObject';

type Language = 'en' | 'pt';

export type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Header
    'header.title': 'Brazilian Day Vancouver 2025',
    'header.subtitle': 'The Ultimate Brazilian Celebration of the Year in Vancouver!',
    'header.date': 'August 29 and 30, 2025',
    'header.location': 'Plaza of Nations Parking Lot',
    'header.cta': 'Get Your Tickets Now!',
    
    // About
    'about.title': 'What is Brazilian Day?',
    'about.description': 'Brazilian Day Vancouver is the biggest celebration of Brazilian culture in Canada, a two day festival full of music, food, dance, and joy! Whether you are Brazilian or just love the energy of our culture, this is the event of the year you do not want to miss.',
    
    // Highlights
    'highlights.title': 'Event Highlights',
    'highlights.music': 'Live Music & Performances',
    'highlights.music.desc': 'Feel the rhythm with top Brazilian artists, "samba" shows, drumming groups, and "capoeira" demonstrations.',
    'highlights.tchan': 'Special Guest "É O TCHAN!"',
    'highlights.tchan.desc': 'Friday, August 29, LIVE performance by Brazil\'s iconic "axé" group É o Tchan!',
    'highlights.food': 'Brazilian Food & Drinks',
    'highlights.food.desc': 'Savor authentic Brazilian cuisine from "feijoada" and "pão de queijo" to "cachorro quente" and "brigadeiros".',
    'highlights.culture': 'Cultural Experiences',
    'highlights.culture.desc': 'Enjoy immersive areas showcasing Brazilian art, fashion, games, and regional traditions.',
    'highlights.family': 'Family-Friendly Activities',
    'highlights.family.desc': 'Kids\' zone, face painting, games, and crafts make it a perfect day for the whole family.',
    'highlights.marketplace': 'Marketplace & Experiences',
    'highlights.marketplace.desc': 'Explore local vendors and Brazilian brands with handmade goods, music, clothing, and more.',
    
    // Schedule
    'schedule.title': 'Event Schedule',
    'schedule.friday': 'Friday, August 29',
    'schedule.friday.time': '6 PM to 10 PM',
    'schedule.friday.dj': 'Live DJs',
    'schedule.friday.dj.desc': 'Get ready to dance all night with vibrant DJ sets spinning the best of Brazilian funk, axé, sertanejo, and electronic music.',
    'schedule.friday.food': 'Street Food',
    'schedule.friday.food.desc': 'Authentic flavors straight from the streets of Brazil! Try pastel, coxinha, barbecue, brigadeiro, and much more.',
    'schedule.friday.vibes': 'Night Vibes',
    'schedule.friday.vibes.desc': 'Lights, rhythm, and tropical energy. The party starts at sunset and goes into the night with lots of excitement and a true Brazilian summer vibe.',
    'schedule.friday.show': 'Main Show: "É o Tchan" at 8 PM',
    'schedule.friday.show.desc': 'The group that marked generations takes the stage at 8 PM! Get ready to dance to axé classics with É o Tchan!',
    'schedule.saturday': 'Saturday, August 30',
    'schedule.saturday.time': '10 AM to 10 PM',
    'schedule.saturday.music': 'Music & Dance All Day',
    'schedule.saturday.music.desc': 'Live performances by local bands and dance groups throughout the day.',
    'schedule.saturday.vibe': 'Outdoor Vibes',
    'schedule.saturday.vibe.desc': 'Enjoy the festival in an open-air space by the waterfront, with views of downtown Vancouver.',
    'schedule.saturday.pavilions': 'Cultural immersion',
    'schedule.saturday.pavilions.desc': 'Explore Brazilian culture with immersive experiences, workshops, and attractions.',
    'schedule.saturday.kids': 'Kids\' Activities, Food, Marketplace & More!',
    'schedule.saturday.kids.desc': 'Fun activities for kids, delicious food, a vibrant marketplace, and much more!',
    'schedule.tickets': 'Tickets Required. Limited Availability! Grab yours now and do not miss out.',
    
    // Participate
    'participate.title': 'Be a Part of It',
    'participate.sponsor': 'Become a Sponsor',
    'participate.sponsor.desc': 'Showcase your brand to thousands of engaged festival goers.',
    'participate.vendor': 'Be a Vendor',
    'participate.vendor.desc': 'Apply to sell food, crafts, or promote your business.',
    'participate.volunteer': 'Volunteer',
    'participate.volunteer.desc': 'Join our team and experience the festival from behind the scenes.',
    'participate.vendor.apply': 'Apply to be a vendor',
    'participate.vendor.apply.desc': 'Join our marketplace and showcase your products to thousands of festival attendees!',
    'participate.contact': 'Interested? Get in Touch',
    'participate.volunteer.apply': 'Become a Volunteer',

    // Location
    'location.title': 'Location & Getting There',
    'location.address': 'Plaza of Nations, 750 Pacific Blvd, Vancouver, BC V6B 5E7',
    'location.transit': 'Easy access by SkyTrain',
    'location.transit.desc': 'The SkyTrain station Stadium–Chinatown is just a few minutes walk from the event.',
    'location.parking': 'Paid parking available',
    'location.parking.desc': 'Parking options available nearby.',
    
    // Footer
    'footer.contact': 'Contact us by email',
    'footer.whatsapp': 'Contact us via WhatsApp',
    'footer.follow': 'Follow Us',
    'footer.instagram': 'Instagram',
    'footer.whatsapp_button': 'Contact us by WhatsApp',
    'footer.email_button': 'Contact us by e-mail',
    'footer.press': 'Press & Media Contact',
    'footer.press_button': 'Press & Media Contact',
    'footer.contact_section': 'Contact'
  },
  pt: {
    // Header
    'header.title': 'Brazilian Day Vancouver 2025',
    'header.subtitle': 'A Maior Celebração Brasileira do Ano em Vancouver!',
    'header.date': '29 e 30 de Agosto de 2025',
    'header.location': 'Estacionamento Plaza of Nations',
    'header.cta': 'Garanta já o seu ingresso!',
    
    // About
    'about.title': 'O que é o Brazilian Day?',
    'about.description': 'Brazilian Day Vancouver é a maior celebração da cultura brasileira no Canadá, um festival de dois dias cheio de música, comida, dança e alegria! Seja você brasileiro ou apenas ame a energia da nossa cultura, este é o evento do ano que você não pode perder.',
    
    // Highlights
    'highlights.title': 'Destaques do Evento',
    'highlights.music': 'Música ao Vivo & Apresentações',
    'highlights.music.desc': 'Sinta o ritmo com os melhores artistas brasileiros, shows de "samba", grupos de percussão e demonstrações de "capoeira".',
    'highlights.tchan': 'Atracao Especial "É O TCHAN!"',
    'highlights.tchan.desc': 'Sexta feira, 29 de Agosto, Apresentacao AO VIVO do iconico grupo de "axe" brasileiro "É o Tchan!" Prepare se para dancar a noite toda com sucessos inesqueciveis e energia eletrizante.',
    'highlights.food': 'Comida e Bebidas Brasileiras',
    'highlights.food.desc': 'Saboreie a autêntica culinária brasileira desde "feijoada" e "pão de queijo" até "cachorro quente" e "brigadeiro".',
    'highlights.culture': 'Experiências Culturais',
    'highlights.culture.desc': 'Aproveite áreas imersivas que mostram arte brasileira, moda, jogos e tradições regionais.',
    'highlights.family': 'Atividades para Toda a Família',
    'highlights.family.desc': 'Área kids, pintura facial, jogos e artesanato tornam este um dia perfeito para toda a família.',
    'highlights.marketplace': 'Mercado & Experiências',
    'highlights.marketplace.desc': 'Explore vendedores locais e marcas brasileiras com produtos artesanais, música, roupas e muito mais.',
    
    // Schedule
    'schedule.title': 'Programação do Evento',
    'schedule.friday': 'Sexta-feira, 29 de Agosto',
    'schedule.friday.time': '18h até 22h',
    'schedule.friday.dj': 'DJs ao Vivo',
    'schedule.friday.dj.desc': 'Prepare-se para dançar a noite inteira com sets de DJs tocando o melhor do funk, axé, sertanejo e eletrônico brasileiro.',
    'schedule.friday.food': 'Comida de Rua',
    'schedule.friday.food.desc': 'Sabores autênticos direto das ruas do Brasil! Experimente pastel, coxinha, churrasco, brigadeiro e muito mais.',
    'schedule.friday.vibes': 'Clima Noturno',
    'schedule.friday.vibes.desc': 'Luzes, ritmo e energia tropical. A festa começa no fim da tarde e entra pela noite com muita animação e clima de verão brasileiro.',
    'schedule.friday.show': 'Atração Principal: É o Tchan',
    'schedule.friday.show.desc': 'O grupo que marcou gerações sobe ao palco às 20h! Prepare-se para dançar os clássicos do axé com É o Tchan!',
    'schedule.saturday': 'Sábado, 30 de Agosto',
    'schedule.saturday.time': '10h até 22h',
    'schedule.saturday.music': 'Música e Dança o Dia Todo',
    'schedule.saturday.music.desc': 'Apresentações ao vivo de bandas locais e grupos de dança durante todo o dia.',
    'schedule.saturday.vibe': 'Clima ao Ar Livre',
    'schedule.saturday.vibe.desc': 'Aproveite o festival em um espaço aberto, à beira-mar, com vista para o centro de Vancouver.',
    'schedule.saturday.pavilions': 'Imersão cultural',
    'schedule.saturday.pavilions.desc': 'Explore a cultura brasileira com experiências imersivas, oficinas e atrações.',
    'schedule.saturday.kids': 'Atividades Kids, Comida, Mercado e Muito Mais!',
    'schedule.saturday.kids.desc': 'Atividades divertidas para crianças, comidas deliciosas, mercado vibrante e muito mais!',
    'schedule.tickets': 'Ingressos Obrigatórios. Disponibilidade Limitada!',
    
    // Participate
    'participate.title': 'Faça Parte',
    'participate.sponsor': 'Torne-se um Patrocinador',
    'participate.sponsor.desc': 'Mostre sua marca para milhares de participantes engajados do festival.',
    'participate.vendor': 'Seja um Vendedor',
    'participate.vendor.desc': 'Candidate-se para vender comida, artesanato ou promover seu negócio.',
    'participate.volunteer': 'Seja Voluntário',
    'participate.volunteer.desc': 'Junte-se à nossa equipe e experimente o festival por trás das cenas.',
    'participate.vendor.apply': 'Candidate-se para ser um vendedor',
    'participate.contact': 'Interessado? Entre em Contato',
    'participate.volunteer.apply': 'Quero ser voluntário(a)',
    
    // Location
    'location.title': 'Localização e Como Chegar',
    'location.address': 'Plaza of Nations, 750 Pacific Blvd, Vancouver, BC V6B 5E7',
    'location.transit': 'Acesso fácil por SkyTrain e ônibus',
    'location.transit.desc': 'A estação Stadium–Chinatown do SkyTrain fica a poucos minutos a pé do evento.',
    'location.parking': 'Estacionamento pago disponível',
    'location.parking.desc': 'Opções de estacionamento disponíveis nas proximidades do evento.',
    
    // Footer
    'footer.contact': 'Entre em contato conosco por e-mail',
    'footer.whatsapp': 'Entre em Contato via WhatsApp',
    'footer.follow': 'Fique por dentro e nos siga no',
    'footer.instagram': 'Instagram',
    'footer.whatsapp_button': 'Fale conosco pelo WhatsApp',
    'footer.email_button': 'Fale conosco por e-mail',
    'footer.press': 'Imprensa & Mídia',
    'footer.press_button': 'Contato para Imprensa & Mídia',
    'footer.contact_section': 'Contato'
  }
};

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
