import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { GB, IT, ES } from 'country-flag-icons/react/3x2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.services'), path: '/services' },
    { name: t('navbar.about'), path: '/about' },
    { name: t('navbar.blog'), path: '/blog' },
    { name: t('navbar.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: GB },
    { code: 'it', name: 'Italiano', flag: IT },
    { code: 'es', name: 'Español', flag: ES },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="NutriLife Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-primary">NutriLife</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-500 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300">
              {t('navbar.bookNow')}
            </button>
            <div className="ml-4 relative">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-primary focus:border-primary"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                {languages.find(lang => lang.code === i18n.language)?.flag &&
                  React.createElement(languages.find(lang => lang.code === i18n.language).flag, {
                    title: languages.find(lang => lang.code === i18n.language).name,
                    className: "h-4 w-6"
                  })
                }
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-500 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300 w-full">
                {t('navbar.bookNow')}
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="flex items-center">
                    <span className="mr-2">{React.createElement(lang.flag, { className: "h-4 w-6 inline-block mr-2" })}</span>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;