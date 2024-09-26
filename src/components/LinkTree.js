import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Twitter, Youtube, Globe } from 'lucide-react';

const LinkTree = () => {
  const { t } = useTranslation();

  const links = [
    { name: 'Website', icon: Globe, url: 'https://www.example.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/example' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/example' },
    { name: 'Twitter', icon: Twitter, url: 'https://www.twitter.com/example' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/example' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="relative h-40 bg-primary flex items-center justify-center">
          <img src="/logo.png" alt="NutriLife Logo" className="h-24 w-auto" />
        </div>
        <div className="pt-6 pb-8 px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">{t('linkTree.title')}</h2>
          <p className="text-sm text-gray-600 mt-1">{t('linkTree.subtitle')}</p>
        </div>
        <div className="pb-8 px-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg mb-3 transition duration-300 ease-in-out flex items-center justify-center"
            >
              <link.icon className="w-5 h-5 mr-2" />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkTree;