import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/useLanguage';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Instagram } from 'lucide-react';

// Vendor data from links.md
const vendors = [
  { name: 'Let\'s Bake', instagram: 'https://www.instagram.com/letsbake.ca?igsh=aDd3MmFsaGZkemRw', category: 'Food' },
  { name: 'Divo Brazilian Treats', instagram: 'https://www.instagram.com/divo.braziliantreats?igsh=bHZ6dnZwa2MybzAz', category: 'Food' },
  { name: 'River Road Cafe', instagram: 'https://www.instagram.com/river_road_cafe?igsh=ZzA0bTh0a3pqdm1n', category: 'Food' },
  { name: 'Brazil Gourmet', instagram: 'https://www.instagram.com/brazilgourmet.ca?igsh=OWJmOTcxNHNqdTFo', category: 'Food' },
  { name: 'Rio HVAC', instagram: 'https://www.instagram.com/riohvac_?igsh=MTE4dmNlZ2FuamRhNg==', category: 'Services' },
  { name: 'Brazilliant Catering', instagram: 'https://www.instagram.com/brazilliant_catering?igsh=amF0djJrNHkyYjJs', category: 'Food' },
  { name: 'Olá Açaí', instagram: 'https://www.instagram.com/olacafeacai?igsh=MWJoZHVidXB3aGRzMw==', category: 'Food' },
  { name: 'Oba Oba Brasil', instagram: 'https://www.instagram.com/obaobabrasilcanada?igsh=aDd1NWk5c3RveXV5', category: 'Food' },
  { name: 'E-Visa Immigration', instagram: 'https://www.instagram.com/evisaimmigration.brasil?igsh=MWEzdTFxb21oZ3pqNA==', category: 'Services' },
  { name: 'Metrotown Family Dentistry', instagram: 'https://www.instagram.com/metrotownfamilydentistry?igsh=NWxibjRteXlldDNh', category: 'Services' },
  { name: 'VSWI Canada', instagram: 'https://www.instagram.com/vswicanada?igsh=bDJ1cXQycnVhbXE0', category: 'Services' },
  { name: 'Embravan BC', instagram: 'https://www.instagram.com/embravan.bc?igsh=MTRxZTE2ZnNlZHNibQ==', category: 'Services' },
  { name: 'Giuliano Vargas Realtor', instagram: 'https://www.instagram.com/giurealtor?igsh=bHlpcjdjZXF4dGx2', category: 'Services' },
  { name: 'Delaz Club', instagram: 'https://www.instagram.com/delazclub?igsh=YnowdWJ1ejE4aGt5', category: 'Services' },
  { name: 'Gimme Coxinhas', instagram: 'https://www.instagram.com/gimmecoxinhas?igsh=MXFibzVpNDd3bHdqaw==', category: 'Food' },
  { name: 'Dannis Kitchen BC', instagram: 'https://www.instagram.com/danniskitchenbc?igsh=OXM0d3UyNTU3Zm5l', category: 'Food' },
  { name: 'Mortgages by Josie', instagram: 'https://www.instagram.com/mortgagesbyjosie?igsh=MTMyNG5pNGRvOThzZA==', category: 'Services' }
];

const VendorMarketplaceSection = () => {
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
            {t('vendors.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('vendors.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Vendors Image */}
          <motion.div 
            className="relative"
            {...fadeInUp}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/vendors.png" 
                alt={t('vendors.image.alt')}
                className="w-full h-auto object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Vendors List */}
            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Brazilian Street Food */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-brazilian-blue mb-4 font-daft">
                    Brazilian Street Food
                  </h3>
                  <div className="space-y-2">
                    {vendors.filter(v => v.category === 'Food').map((vendor, index) => (
                      <motion.a
                        key={index}
                        href={vendor.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Instagram className="w-4 h-4 text-brazilian-blue" />
                        <span className="font-medium text-gray-800">{vendor.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Brazilian Services */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-brazilian-blue mb-4 font-daft">
                    Brazilian Services
                  </h3>
                  <div className="space-y-2">
                    {vendors.filter(v => v.category === 'Services').map((vendor, index) => (
                      <motion.a
                        key={index}
                        href={vendor.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Instagram className="w-4 h-4 text-brazilian-blue" />
                        <span className="font-medium text-gray-800">{vendor.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>




          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VendorMarketplaceSection;
