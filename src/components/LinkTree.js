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
        <div className="relative h-40 bg-primary">
          <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 bg-primary border-4 border-white rounded-full overflow-hidden">
              <img src="/api/placeholder/96/96?text=NL" alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
        <div className="pt-16 pb-8 px-4 text-center">
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