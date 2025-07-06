import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-gradient-to-br from-brazilian-blue to-brazilian-green text-white font-daft">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/17788613392"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 via-brazilian-green to-brazilian-blue hover:from-green-500 hover:to-blue-800 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white mb-4 mt-2"
            style={{ minWidth: 320, justifyContent: 'center' }}
          >
            <MessageCircle className="w-6 h-6" />
            Entre em Contato via WhatsApp
          </a>

          {/* Email label */}
          <div className="text-white text-lg font-bold mb-2 mt-2">
            Ou entre em contato conosco por e-mail
          </div>

          {/* Email Button */}
          <a
            href="mailto:contact@youcanproductions.ca"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white mb-8"
            style={{ minWidth: 320, justifyContent: 'center' }}
          >
            <Mail className="w-6 h-6" />
            contact@youcanproductions.ca
          </a>

          {/* Instagram Button */}
          <h2 className="text-3xl font-bold mb-8 drop-shadow-md mt-8">
            {t('footer.follow')}
          </h2>
          <a 
            href="https://www.instagram.com/youcanproductions?igsh=MWV6cjVmbXo4aHI0dg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white"
          >
            <Instagram className="w-6 h-6" />
            {t('footer.instagram')}
          </a>

          <div className="mt-12 pt-8 border-t border-white/20 text-center text-gray-200">
            <p className="font-bold">&copy; 2025 You Can Productions. All rights reserved.</p>
            <p className="mt-2 text-sm font-bold">
              Website developed by{' '}
              <a 
                href="https://www.instagram.com/jpzank?igsh=MW1zM2d1bGd5cnVndQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-300 transition-colors duration-200 underline"
              >
                JPZank
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
