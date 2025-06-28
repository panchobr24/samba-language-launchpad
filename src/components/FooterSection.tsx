
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram } from 'lucide-react';

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">
            {t('footer.follow')}
          </h2>
          
          <a 
            href="https://www.instagram.com/youcanproductions?igsh=MWV6cjVmbXo4aHI0dg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Instagram className="w-6 h-6" />
            {t('footer.instagram')}
          </a>

          <div className="mt-12 pt-8 border-t border-white/20 text-center text-gray-400">
            <p>&copy; 2025 You Can Productions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
