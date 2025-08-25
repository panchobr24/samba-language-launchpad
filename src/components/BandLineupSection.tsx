import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Music, Mic, Utensils, Instagram, Clock, ChevronDown, ChevronUp } from 'lucide-react';

// Band data from links.md
const fridayBands = [
  { name: 'É O TCHAN', instagram: 'https://www.instagram.com/eotchanoficial/' }
];

const saturdayBands = [
  { name: 'BOM TOM & FORRÓ CLASS', description: 'FORRÓ LIVE MUSIC AND DANCE', instagram: 'https://www.instagram.com/bomtomband?igsh=MTNycjNiajFpeTNwbQ==' },
  { name: 'MINI BOOGIE', description: 'FUNKY MUSIC', instagram: 'https://www.instagram.com/theminiboogie?igsh=Y3pycXgxeXo2cTNm' },
  { name: 'VIRGULINS', description: 'POP ROCK MPB', instagram: 'https://www.instagram.com/virgulins?igsh=MTk0OXN4MmVrYnY2bg==' },
  { name: 'SARA MAGAL', description: 'MPB', instagram: 'https://www.instagram.com/sara_magal?igsh=MWtkcHhkdXdyZGpzMg==' },
  { name: 'CABRAL\'S FAULT', description: 'BRAZILIAN ROCK', instagram: 'https://www.instagram.com/cabralsfault?igsh=MXJjdHI4eGs2c3c1Mg==' },
  { name: 'MENI AXÉ', description: 'AXÉ BAND', instagram: 'https://www.instagram.com/jpederik?igsh=c3I2ZjA2MGcyazh0' },
  { name: 'JP & DERIK', description: 'SERTANEJO / COUNTRY MUSIC', instagram: 'https://www.instagram.com/jpederik?igsh=c3I2ZjA2MGcyazh0' },
  { name: 'SAMBACOUVER', description: 'BRAZILIAN ROCK', instagram: 'https://www.instagram.com/sambacouver?igsh=NHV1Zmx4Znl4OHRs' },
  { name: 'CURUMIM', description: 'KIDS STAGE', instagram: 'https://www.instagram.com/oficina.curumim?igsh=aTN0eTJ0d2M0MXhh' },
  { name: 'TIAGO MARTINEZ', description: 'DJ', instagram: 'https://www.instagram.com/talktotiago?igsh=MXF0ZnVpOHIxOHQxcQ==' },
  { name: 'BRAZILIAN DANCE', description: 'RHYTHMS CLASS w/ PROF. MAIRA DAIHA', instagram: 'https://www.instagram.com/mairadaiha?igsh=YnlwOHQwaTkzZ2x2' },
  { name: 'BATUCADA ABRACE', description: 'BRAZILIAN DRUMS CARNAVAL', instagram: 'https://www.instagram.com/batucadabrace?igsh=MTllYXpvc3B1NmVzMQ==' },
  { name: 'SAMBA FUSION', description: 'BRAZILIAN SAMBA', instagram: 'https://www.instagram.com/sambafusion?igsh=dWpkY2UxMzIya2R0' },
  { name: 'MYA', description: 'DRAG SHOW', instagram: 'https://www.instagram.com/oh_my_mya_?igsh=OXlkcGR4NHk4NHVn' },
  { name: 'DJ LUIZ CAMPOS', description: 'DJ', instagram: 'https://www.instagram.com/djluizcampos?igsh=MWdmbXVjcDJzMTNscg==' },
  { name: 'BR SWAG & CAPOEIRA', description: 'CULTURAL DANCE', instagram: 'https://www.instagram.com/ca.brswag?igsh=Mm1lY3ZwY2p6eHpk' }
];

// Friday schedule data
const fridaySchedule = [
  { time: '6:00 PM - 6:30 PM', artist: 'DJ Luiz Campos', type: 'DJ' },
  { time: '8:00 PM - 10:00 PM', artist: 'É o Tchan!', type: 'Main Show' }
];

// Saturday schedule data
const saturdaySchedule = [
  { time: '12:00 PM - 12:15 PM', artist: 'Playlist Comunidade', type: 'DJ' },
  { time: '12:15 PM - 12:45 PM', artist: 'Palco Kids Curumin', type: 'Kids Show' },
  { time: '12:45 PM - 12:55 PM', artist: 'DJ Tiago Martinez', type: 'DJ' },
  { time: '12:55 PM - 1:40 PM', artist: 'Bom Tom & Forro', type: 'Live Band' },
  { time: '1:40 PM - 1:50 PM', artist: 'DJ Tiago Martinez', type: 'DJ' },
  { time: '1:50 PM - 2:35 PM', artist: 'Mini Boogie', type: 'Live Band' },
  { time: '2:35 PM - 3:00 PM', artist: 'Maira Daiha Aula Ritmos', type: 'Dance Class' },
  { time: '3:00 PM - 3:45 PM', artist: 'Virgulins', type: 'Live Band' },
  { time: '3:45 PM - 4:15 PM', artist: 'Batucada Abrace', type: 'Percussion' },
  { time: '4:15 PM - 5:00 PM', artist: 'Sara Magal', type: 'Live Band' },
  { time: '5:00 PM - 5:15 PM', artist: 'Samba Fusion', type: 'Dance' },
  { time: '5:15 PM - 6:00 PM', artist: 'Cabral\'s Fault', type: 'Live Band' },
  { time: '6:00 PM - 6:30 PM', artist: 'Mya Drag Artist', type: 'Drag Show' },
  { time: '6:30 PM - 7:15 PM', artist: 'Meni Axé', type: 'Live Band' },
  { time: '7:15 PM - 8:00 PM', artist: 'DJ Luiz Campos', type: 'DJ' },
  { time: '8:00 PM - 8:45 PM', artist: 'JP & Derik', type: 'Live Band' },
  { time: '8:45 PM - 9:15 PM', artist: 'BR Swag', type: 'Cultural Dance' },
  { time: '9:15 PM - 10:00 PM', artist: 'Sambacouver', type: 'Live Band' }
];

const BandLineupSection = () => {
  const { t } = useLanguage();
  const [showFridaySchedule, setShowFridaySchedule] = useState(false);
  const [showSaturdaySchedule, setShowSaturdaySchedule] = useState(false);

  // Simplified color scheme - 3 main colors with variations
  const getTypeColor = (type: string) => {
    const colors = {
      // Green variations
      'Live Band': 'bg-green-600',
      'Percussion': 'bg-green-500',
      'Cultural Dance': 'bg-green-700',
      
      // Blue variations  
      'Main Show': 'bg-blue-600',
      'DJ': 'bg-blue-500',
      'Drag Show': 'bg-blue-700',
      
      // Yellow variations
      'Kids Show': 'bg-yellow-500',
      'Dance Class': 'bg-yellow-600',
      'Dance': 'bg-yellow-400'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500';
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <section className="py-16 bg-white font-daft">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brazilian-blue mb-4 drop-shadow-md font-daft">
            {t('lineup.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('lineup.subtitle')}
          </p>
        </motion.div>

        {/* Day-by-Day Lineup */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Friday - É o Tchan */}
          <motion.div 
            className="relative"
            {...fadeInUp}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-brazilian-blue font-daft mb-2">
                {t('schedule.friday')} - {t('highlights.tchan')}
              </h3>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/line-up 29.png" 
                alt={t('lineup.friday.alt')}
                className="w-full h-auto object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
            </div>
            
            {/* É O TCHAN Link */}
            <motion.div 
              className="mt-6 flex justify-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.a
                href="https://www.instagram.com/eotchanoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-3 rounded-full bg-brazilian-green hover:bg-green-600 transition-all duration-300 text-white shadow-md border border-white"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-bold text-sm font-daft text-center mb-1 leading-tight">É O TCHAN</span>
                <span className="text-xs text-center opacity-90 leading-tight">ATRAÇÃO ESPECIAL</span>
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Saturday - Local Bands */}
          <motion.div 
            className="relative"
            {...fadeInUp}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-brazilian-blue font-daft mb-2">
                {t('schedule.saturday')} - {t('lineup.saturday.title')}
              </h3>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/line-up-30th-bands.jpeg" 
                alt={t('lineup.image.alt')}
                className="w-full h-auto object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
            </div>

            {/* Band Links Section */}
            <motion.div 
              className="mt-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                variants={fadeInUp}
              >
                {saturdayBands.map((band, index) => (
                  <motion.a
                    key={index}
                    href={band.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 rounded-full bg-brazilian-green hover:bg-green-600 transition-all duration-300 text-white shadow-md border border-white"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-bold text-sm font-daft text-center mb-1 leading-tight">{band.name}</span>
                    <span className="text-xs text-center opacity-90 leading-tight">{band.description}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

          </motion.div>
        </div>

        {/* Schedule Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8 max-w-7xl mx-auto">
          
          {/* Friday Schedule Section */}
          <motion.div
            className="bg-gray-50 rounded-3xl p-6"
            {...fadeInUp}
          >
            {/* Friday Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setShowFridaySchedule(!showFridaySchedule)}
                className="flex items-center gap-2 px-6 py-3 bg-brazilian-blue hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg"
              >
                <Clock className="w-5 h-5" />
                {showFridaySchedule ? t('lineup.schedule.friday.hide') : t('lineup.schedule.friday.button')}
                {showFridaySchedule ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>

            {/* Friday Schedule */}
            <motion.div
              initial={false}
              animate={{ 
                height: showFridaySchedule ? 'auto' : 0,
                opacity: showFridaySchedule ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {showFridaySchedule && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-brazilian-blue text-center mb-4 font-daft">
                    {t('lineup.schedule.friday.title')}
                  </h3>
                  <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                    <div className="grid gap-3">
                      {fridaySchedule.map((item, index) => (
                        <motion.div
                          key={`friday-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.02 }}
                          className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="text-sm font-bold text-brazilian-blue min-w-[120px]">
                              {item.time}
                            </div>
                            <div className="font-semibold text-gray-800">
                              {item.artist}
                            </div>
                          </div>
                          <div className={`text-xs px-2 py-1 text-white rounded-full ${getTypeColor(item.type)}`}>
                            {item.type}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Saturday Schedule Section */}
          <motion.div
            className="bg-gray-50 rounded-3xl p-6"
            {...fadeInUp}
          >
            {/* Saturday Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setShowSaturdaySchedule(!showSaturdaySchedule)}
                className="flex items-center gap-2 px-6 py-3 bg-brazilian-green hover:bg-green-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg"
              >
                <Clock className="w-5 h-5" />
                {showSaturdaySchedule ? t('lineup.schedule.saturday.hide') : t('lineup.schedule.saturday.button')}
                {showSaturdaySchedule ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>

            {/* Saturday Schedule */}
            <motion.div
              initial={false}
              animate={{ 
                height: showSaturdaySchedule ? 'auto' : 0,
                opacity: showSaturdaySchedule ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {showSaturdaySchedule && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-brazilian-blue text-center mb-4 font-daft">
                    {t('lineup.schedule.saturday.title')}
                  </h3>
                  <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                    <div className="grid gap-2">
                      {saturdaySchedule.map((item, index) => (
                        <motion.div
                          key={`saturday-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.02 }}
                          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <div className="text-sm font-bold text-brazilian-blue min-w-[120px]">
                              {item.time}
                            </div>
                            <div className="font-semibold text-gray-800 text-sm">
                              {item.artist}
                            </div>
                          </div>
                          <div className={`text-xs px-2 py-1 text-white rounded-full ${getTypeColor(item.type)}`}>
                            {item.type}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BandLineupSection;
