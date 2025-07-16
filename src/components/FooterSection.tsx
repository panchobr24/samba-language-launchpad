import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-gradient-to-br from-brazilian-blue to-brazilian-green text-white font-daft">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Contact Section */}
          <div className="flex flex-col items-center mb-10">
            <span className="block text-2xl font-bold text-white mb-4">{t('footer.contact_section')}</span>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2">
              <a
                href="https://wa.me/17788613392"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 via-brazilian-green to-brazilian-blue hover:from-green-500 hover:to-blue-800 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white"
                style={{ minWidth: 240, justifyContent: 'center' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="white"><path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L2.2 28.2a1.07 1.07 0 0 0 1.08 1.08c.17 0 .34-.04.5-.12l5.79-2.74a12.77 12.77 0 0 0 6.44 1.73c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.75-12.8-12.75zm0 23.2c-2.09 0-4.15-.54-5.97-1.56a1.07 1.07 0 0 0-.93-.06l-4.5 2.13 1.13-4.41a1.07 1.07 0 0 0-.11-.82A10.6 10.6 0 0 1 5.2 16c0-5.97 4.84-10.8 10.8-10.8s10.8 4.83 10.8 10.8-4.84 10.8-10.8 10.8zm5.44-7.13c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.6-.48-.52-.67-.53-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.18 4.43.72.28 1.28.45 1.72.58.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.08-.11-.27-.17-.57-.32z"/></svg>
                {t('footer.whatsapp_button')}
              </a>
              <a
                href="mailto:contact@youcanproductions.ca"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white"
                style={{ minWidth: 240, justifyContent: 'center' }}
              >
                <Mail className="w-6 h-6" />
                {t('footer.email_button')}
              </a>
            </div>
            <div className="mt-2 flex flex-col items-center">
              <a
                href="mailto:marketing@youcanproductions.ca"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white mb-2"
                style={{ minWidth: 240, justifyContent: 'center' }}
              >
                {t('footer.press_button')}
              </a>
            </div>
          </div>

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
