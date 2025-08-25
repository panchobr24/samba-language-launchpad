import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Music, Mic, Utensils, Instagram } from 'lucide-react';

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
  { name: 'BRAZILIAN DANCE', description: 'RHYTHMS CLASS', instagram: 'https://www.instagram.com/braziliandanceuk?igsh=M3AxeGh2NzVsajVq' },
  { name: 'BATUCADA ABRACE', description: 'BRAZILIAN DRUMS CARNAVAL', instagram: 'https://www.instagram.com/batucadabrace?igsh=MTllYXpvc3B1NmVzMQ==' },
  { name: 'SAMBA FUSION', description: 'BRAZILIAN SAMBA', instagram: 'https://www.instagram.com/sambafusion?igsh=dWpkY2UxMzIya2R0' },
  { name: 'MYA', description: 'DRAG SHOW', instagram: 'https://www.instagram.com/oh_my_mya_?igsh=OXlkcGR4NHk4NHVn' },
  { name: 'DJ LUIZ CAMPOS', description: 'DJ', instagram: 'https://www.instagram.com/djluizcampos?igsh=MWdmbXVjcDJzMTNscg==' },
  { name: 'BR SWAG & CAPOEIRA', description: 'CULTURAL DANCE', instagram: 'https://www.instagram.com/ca.brswag?igsh=Mm1lY3ZwY2p6eHpk' }
];

const BandLineupSection = () => {
  const { t } = useLanguage();

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

      </div>
    </section>
  );
};

export default BandLineupSection;
