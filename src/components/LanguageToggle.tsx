
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`w-10 h-7 rounded-sm overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
          language === 'pt' ? 'border-yellow-400 shadow-lg' : 'border-gray-300'
        }`}
        title="Português"
      >
        <img 
          src="/lovable-uploads/c49a64fc-7d59-4e7b-a7cd-3b7589a58a26.png" 
          alt="Português" 
          className="w-full h-full object-cover"
        />
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`w-10 h-7 rounded-sm overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
          language === 'en' ? 'border-yellow-400 shadow-lg' : 'border-gray-300'
        }`}
        title="English"
      >
        <img 
          src="/lovable-uploads/c0572ac2-0340-474e-8aec-da1cdeea0c47.png" 
          alt="English" 
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default LanguageToggle;
