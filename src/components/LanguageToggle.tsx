import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="fixed top-4 right-4 z-50 flex gap-2 sm:gap-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <motion.button
        onClick={() => setLanguage('pt')}
        className={`w-10 h-7 sm:w-12 sm:h-8 rounded-sm overflow-hidden border-2 ${
          language === 'pt' ? 'border-yellow-400 shadow-lg' : 'border-gray-300'
        }`}
        title="Português"
        aria-label="Português"
        whileHover={{ 
          scale: 1.15,
          y: -2,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: language === 'pt' ? 1.1 : 1,
          borderColor: language === 'pt' ? '#fbbf24' : '#d1d5db'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.img 
          src="/lovable-uploads/c49a64fc-7d59-4e7b-a7cd-3b7589a58a26.png" 
          alt="Português" 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
      <motion.button
        onClick={() => setLanguage('en')}
        className={`w-10 h-7 sm:w-12 sm:h-8 rounded-sm overflow-hidden border-2 ${
          language === 'en' ? 'border-yellow-400 shadow-lg' : 'border-gray-300'
        }`}
        title="English"
        aria-label="English"
        whileHover={{ 
          scale: 1.15,
          y: -2,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: language === 'en' ? 1.1 : 1,
          borderColor: language === 'en' ? '#fbbf24' : '#d1d5db'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.img 
          src="/lovable-uploads/c0572ac2-0340-474e-8aec-da1cdeea0c47.png" 
          alt="English" 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    </motion.div>
  );
};

export default LanguageToggle;
