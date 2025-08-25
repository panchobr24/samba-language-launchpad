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
    
    // Campaign
    'campaign.title': 'BC Place Goes Green, Blue and Yellow',
    'campaign.subtitle': 'August 29–30 • Opening tribute for Brazilian Day Vancouver 2025',
    'bcplace.title': 'BC Place Goes Green, Blue and Yellow',
    'bcplace.subtitle': 'August 29–30 • Opening tribute for Brazilian Day Vancouver 2025',
    'bcplace.description': 'Vancouver\'s most iconic stadium will be illuminated in Brazil\'s colors to celebrate the opening of Brazilian Day Vancouver 2025. You can see this beautiful tribute FROM our festival location at Plaza of Nations.',
    'bcplace.schedule': 'Lighting scheduled for the evening of Aug 29 into the early hours of Aug 30',
    'campaign.body': 'On Friday night, August 29, Vancouver\'s most iconic stadium will be illuminated in Brazil\'s colors to celebrate the opening of Brazilian Day Vancouver 2025. The lighting honors the strength and pride of the Brazilian community across Greater Vancouver and invites everyone to join this unforgettable celebration!',
    'campaign.note': 'Lighting scheduled for the evening of Aug 29 into the early hours of Aug 30.',
    
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
    'schedule.saturday.time': '12 PM to 10 PM',
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
    'participate.sponsor.apply': 'Become a Sponsor',

    // Location
    'location.title': 'Location & Getting There',
    'location.address': 'Plaza of Nations, 750 Pacific Blvd, Vancouver, BC V6B 5E7',
    'location.transit': 'Easy access by SkyTrain',
    'location.transit.desc': 'The SkyTrain station Stadium–Chinatown is just a few minutes walk from the event.',
    'location.parking': 'Paid parking available',
    'location.parking.desc': 'Parking options available nearby.',
    'location.clarification.title': 'Important Location Information',
    'location.clarification.event.badge': 'Festival Location',
    'location.clarification.event.title': 'Brazilian Day at Plaza of Nations',
    'location.clarification.event.description': 'Our festival takes place at Plaza of Nations parking lot. All activities, food, music, and vendors are here.',
    'location.clarification.bcplace.badge': 'Viewing Experience',
    'location.clarification.bcplace.title': 'BC Place Illumination',
    'location.clarification.bcplace.description': 'BC Place stadium will be illuminated in Brazilian colors during the night. You can see this beautiful tribute FROM our festival location.',
    
    // Footer
    'footer.contact': 'Contact us by email',
    'footer.whatsapp': 'Contact us via WhatsApp',
    'footer.follow': 'Follow Us',
    'footer.instagram': 'Instagram',
    'footer.whatsapp_button': 'Contact us by WhatsApp',
    'footer.email_button': 'Contact us by e-mail',
    'footer.press': 'Press & Media Contact',
    'footer.press_button': 'Press & Media Contact',
    'footer.contact_section': 'Contact',
    
    // Tickets
    'tickets.title': 'Get Your Tickets',
    'tickets.limited': 'Limited Availability!',
    'tickets.both': 'Both Days (Aug 29-30)\nÉ o Tchan + Brazilian Day',
    'tickets.friday': 'Day 1 - Friday (Aug 29)\nÉ o Tchan Show',
    'tickets.saturday': 'Day 2 - Saturday (Aug 30)\nBrazilian Day Festival',
    'tickets.kids': 'Kids Tickets\n(Up to 12 years)',
    'tickets.cta': 'Buy Tickets',

    // Vendors
    'vendors.title': 'Food & Vendor Marketplace',
    'vendors.subtitle': 'Discover authentic Brazilian street food and local vendors offering the best flavors and products.',
    'vendors.image.alt': 'Confirmed vendors for Brazilian Day Vancouver 2025',
    'vendors.food.title': 'Brazilian Street Food',
    'vendors.food.description': 'Savor authentic Brazilian flavors with a variety of traditional street food including coxinhas, pastéis, hot dogs, bolos, and refreshing beverages. Experience the taste of Brazil with our local vendors offering the best homemade treats and classic Brazilian snacks.',
    'vendors.payment.title': 'Payment Methods',
    'vendors.payment.card': 'Credit & Debit Cards',
    'vendors.payment.cash': 'Cash Accepted',
    'vendors.payment.note': 'Most vendors bring their own card machines for your convenience.',
    'vendors.cta.title': 'Taste the Authentic Brazil!',
    'vendors.cta.description': 'From traditional coxinhas to gourmet hot dogs, experience the flavors that make Brazilian cuisine so special.',

    // After Party
    'afterparty.badge': 'Official After-Party',
    'afterparty.title': 'After-Party Events',
    'afterparty.subtitle': 'Keep the celebration going with our official after-party events both nights!',
    'afterparty.image.alt': 'After-party event at Library Square Public House',
    'afterparty.venue.name': 'Library Square Public House',
    'afterparty.venue.address': '300 W Georgia St, Vancouver, BC',
    'afterparty.time.title': 'Party Hours',
    'afterparty.time.hours': '10:00 PM - 3:00 AM',
    'afterparty.age.title': 'Age Restriction',
    'afterparty.age.restriction': '19+ Only',
    'afterparty.dj.title': 'DJ Schedule',
    'afterparty.venue.new': 'New after-party location:',
    'afterparty.friday.title': 'Friday After-Party',
    'afterparty.friday.date': 'Aug 29',
    'afterparty.friday.dj': 'DJ Tanaka',
    'afterparty.friday.description': 'É o Tchan after-show with axé, pagode baiano, and funk music until 3am.',
    'afterparty.saturday.title': 'Saturday Official After-Party',
    'afterparty.saturday.date': 'Aug 30',
    'afterparty.saturday.djs': 'DJ Lu & DJ Luiz Campos',
    'afterparty.saturday.description': 'Bailin event featuring the best funk music from 10pm to 3am.',
    'afterparty.tickets.cta': 'Get After-Party Tickets',
    'afterparty.tickets.note': 'Separate admission required. Purchase tickets online.',

    // Band Lineup
    'lineup.badge': 'Two-Day Musical Experience',
    'lineup.title': 'Band Lineup',
    'lineup.subtitle': 'Experiência Musical Brasileira de Dois Dias',
    'lineup.friday.alt': 'Friday lineup featuring É o Tchan',
    'lineup.friday.badge': 'É o Tchan Live Show',
    'lineup.friday.live.title': 'Live DJs',
    'lineup.friday.live.description': 'Vibrant DJ sets spinning the best of Brazilian funk, axé, and sertanejo music',
    'lineup.friday.food.title': 'Street Food',
    'lineup.friday.food.description': 'Authentic Brazilian flavors with coxinha, pastéis, barbecue, and much more',
    'lineup.saturday.title': 'Local Vancouver Bands',
    'lineup.saturday.bands.title': 'Local Vancouver Talent',
    'lineup.saturday.bands.description': 'Talented local bands showcasing the vibrant Brazilian music scene',
    'lineup.image.alt': 'Saturday band lineup for Brazilian Day Vancouver',
    'lineup.local.badge': 'Local Vancouver Talent',
    'lineup.local.title': 'Supporting Local Brazilian Musicians',
    'lineup.local.description': 'All our Saturday performers are talented local Vancouver bands, showcasing the vibrant Brazilian music scene in our city.',
    'lineup.dj.title': 'Between Performances',
    'lineup.dj.role': 'Live DJ Sets',
    'lineup.dj.description': 'DJ Luiz Campos will keep the energy high between live performances with the best Brazilian music.',
    'lineup.schedule.title': 'What to Expect',
    'lineup.schedule.live': 'Live band performances throughout the day',
    'lineup.schedule.dj': 'DJ sets between acts',
    'lineup.schedule.duration': 'Music from 12 PM to 10 PM',
    'lineup.styles.title': 'Music Styles',
    'lineup.styles.description': 'Experience a diverse range of Brazilian music genres performed by our talented local artists.',
    'lineup.styles.genres': 'Samba, Forró, MPB, Bossa Nova, Pagode, Brazilian Rock'
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
    
    // Campaign
    'campaign.title': 'BC Place nas cores Verde, Azul e Amarelo',
    'campaign.subtitle': '29–30 de agosto • Tributo de abertura do Brazilian Day 2025',
    'campaign.body': 'Na noite de sexta-feira, 29 de agosto, o estádio mais icônico de Vancouver será iluminado nas cores do Brasil para celebrar a abertura do Brazilian Day Vancouver 2025. A ação homenageia a força e o orgulho da comunidade brasileira na Grande Vancouver e convida todos a participarem desta celebração inesquecível!',
    'campaign.note': 'Iluminação prevista para a noite de 29 até a madrugada do dia 30.',
    'bcplace.title': 'BC Place nas cores Verde, Azul e Amarelo',
    'bcplace.subtitle': '29-30 de Agosto • Homenagem de abertura para o Brazilian Day Vancouver 2025',
    'bcplace.description': 'O estádio mais icônico de Vancouver será iluminado nas cores do Brasil para celebrar a abertura do Brazilian Day Vancouver 2025. Você pode ver esta bela homenagem DO local do nosso festival na Plaza of Nations.',
    'bcplace.schedule': 'Iluminação programada para a noite de 29 de Agosto até as primeiras horas de 30 de Agosto',
    
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
    'schedule.saturday.time': '12h até 22h',
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
    'participate.sponsor.apply': 'Quero ser patrocinador(a)',
    
    // Location
    'location.title': 'Localização e Como Chegar',
    'location.address': 'Plaza of Nations, 750 Pacific Blvd, Vancouver, BC V6B 5E7',
    'location.transit': 'Acesso fácil por SkyTrain e ônibus',
    'location.transit.desc': 'A estação Stadium–Chinatown do SkyTrain fica a poucos minutos a pé do evento.',
    'location.parking': 'Estacionamento pago disponível',
    'location.parking.desc': 'Opções de estacionamento disponíveis nas proximidades do evento.',
    'location.clarification.title': 'Informações Importantes sobre o Local',
    'location.clarification.event.badge': 'Local do Festival',
    'location.clarification.event.title': 'Brazilian Day na Plaza of Nations',
    'location.clarification.event.description': 'Nosso festival acontece no estacionamento da Plaza of Nations. Todas as atividades, comidas, música e vendedores estão aqui.',
    'location.clarification.bcplace.badge': 'Experiência Visual',
    'location.clarification.bcplace.title': 'Iluminação do BC Place',
    'location.clarification.bcplace.description': 'O estádio BC Place será iluminado nas cores do Brasil durante a noite. Você pode ver este belo tributo A PARTIR do nosso local do festival.',
    
    // Footer
    'footer.contact': 'Entre em contato conosco por e-mail',
    'footer.whatsapp': 'Entre em Contato via WhatsApp',
    'footer.follow': 'Fique por dentro e nos siga no',
    'footer.instagram': 'Instagram',
    'footer.whatsapp_button': 'Fale conosco pelo WhatsApp',
    'footer.email_button': 'Fale conosco por e-mail',
    'footer.press': 'Imprensa & Mídia',
    'footer.press_button': 'Contato para Imprensa & Mídia',
    'footer.contact_section': 'Contato',
    
    // Tickets
    'tickets.title': 'Garanta Seus Ingressos',
    'tickets.limited': 'Disponibilidade Limitada!',
    'tickets.both': 'Ambos os Dias (29-30 Ago)\nÉ o Tchan + Brazilian Day',
    'tickets.friday': 'Dia 1 - Sexta (29 Ago)\nShow É o Tchan',
    'tickets.saturday': 'Dia 2 - Sábado (30 Ago)\nFestival Brazilian Day',
    'tickets.kids': 'Ingressos Kids\n(Até 12 anos)',
    'tickets.cta': 'Comprar Ingressos',

    // Vendors
    'vendors.title': 'Praça de Alimentação e Vendedores',
    'vendors.subtitle': 'Descubra a autêntica comida de rua brasileira e vendedores locais oferecendo os melhores sabores e produtos.',
    'vendors.image.alt': 'Vendedores confirmados para o Brazilian Day Vancouver 2025',
    'vendors.food.title': 'Comida de Rua Brasileira',
    'vendors.food.description': 'Saboreie sabores autênticos brasileiros com uma variedade de comida de rua tradicional incluindo coxinhas, pastéis, cachorros quentes, bolos e bebidas refrescantes. Experimente o sabor do Brasil com nossos vendedores locais oferecendo as melhores guloseimas caseiras e lanches clássicos brasileiros.',
    'vendors.payment.title': 'Formas de Pagamento',
    'vendors.payment.card': 'Cartões de Crédito e Débito',
    'vendors.payment.cash': 'Dinheiro Aceito',
    'vendors.payment.note': 'A maioria dos vendedores traz suas próprias máquinas de cartão para sua conveniência.',
    'vendors.cta.title': 'Prove o Brasil Autêntico!',
    'vendors.cta.description': 'Das tradicionais coxinhas aos hot dogs gourmet, experimente os sabores que tornam a culinária brasileira tão especial.',

    // After Party
    'afterparty.badge': 'After-Party Oficial',
    'afterparty.title': 'Eventos After-Party',
    'afterparty.subtitle': 'Continue a celebração com nossos eventos oficiais de after-party nas duas noites!',
    'afterparty.image.alt': 'Evento after-party no Library Square Public House',
    'afterparty.venue.name': 'Library Square Public House',
    'afterparty.venue.address': '300 W Georgia St, Vancouver, BC',
    'afterparty.time.title': 'Horário da Festa',
    'afterparty.time.hours': '22:00 - 03:00',
    'afterparty.age.title': 'Restrição de Idade',
    'afterparty.age.restriction': 'Apenas +19 anos',
    'afterparty.dj.title': 'Programação dos DJs',
    'afterparty.venue.new': 'Novo local para o after:',
    'afterparty.friday.title': 'After-Party Sexta-feira',
    'afterparty.friday.date': '29 de Ago',
    'afterparty.friday.dj': 'DJ Tanaka',
    'afterparty.friday.description': 'Pós show do É o Tchan com axé, pagode baiano e funk até as 3h da manhã.',
    'afterparty.saturday.title': 'After-Party Oficial do Sábado',
    'afterparty.saturday.date': '30 de Ago',
    'afterparty.saturday.djs': 'DJ Lu e DJ Luiz Campos',
    'afterparty.saturday.description': 'Evento Bailin com o melhor do funk das 22h às 3h da manhã.',
    'afterparty.tickets.cta': 'Comprar Ingressos After-Party',
    'afterparty.tickets.note': 'Entrada separada necessária. Compre ingressos online.',

    // Band Lineup
    'lineup.badge': 'Experiência Musical de Dois Dias',
    'lineup.title': 'Line-up das Bandas',
    'lineup.subtitle': 'Experiência Musical Brasileira de Dois Dias',
    'lineup.friday.alt': 'Line-up de sexta-feira com É o Tchan',
    'lineup.friday.badge': 'Show Ao Vivo É o Tchan',
    'lineup.friday.live.title': 'DJs ao Vivo',
    'lineup.friday.live.description': 'Sets vibrantes de DJs tocando o melhor do funk, axé e sertanejo brasileiro',
    'lineup.friday.food.title': 'Comida de Rua',
    'lineup.friday.food.description': 'Sabores brasileiros autênticos com coxinha, pastéis, churrasco e muito mais',
    'lineup.saturday.title': 'Bandas Locais de Vancouver',
    'lineup.saturday.bands.title': 'Talento Local de Vancouver',
    'lineup.saturday.bands.description': 'Bandas locais talentosas mostrando a vibrante cena musical brasileira',
    'lineup.image.alt': 'Line-up de bandas do sábado para o Brazilian Day Vancouver',
    'lineup.local.badge': 'Talento Local de Vancouver',
    'lineup.local.title': 'Apoiando Músicos Brasileiros Locais',
    'lineup.local.description': 'Todos os nossos artistas do sábado são talentosas bandas locais de Vancouver, mostrando a vibrante cena musical brasileira da nossa cidade.',
    'lineup.dj.title': 'Entre as Apresentações',
    'lineup.dj.role': 'Sets de DJ ao Vivo',
    'lineup.dj.description': 'DJ Luiz Campos manterá a energia alta entre as apresentações ao vivo com a melhor música brasileira.',
    'lineup.schedule.title': 'O que Esperar',
    'lineup.schedule.live': 'Apresentações de bandas ao vivo durante todo o dia',
    'lineup.schedule.dj': 'Sets de DJ entre os shows',
    'lineup.schedule.duration': 'Música das 12h às 22h',
    'lineup.styles.title': 'Estilos Musicais',
    'lineup.styles.description': 'Experimente uma diversidade de gêneros musicais brasileiros interpretados pelos nossos talentosos artistas locais.',
    'lineup.styles.genres': 'Samba, Forró, MPB, Bossa Nova, Pagode, Rock Brasileiro'
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
