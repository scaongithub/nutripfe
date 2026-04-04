import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Home, Sparkles, User, FileText, Leaf, Menu, X, Construction, Calendar } from 'lucide-react';
import { GB, IT, ES, MX } from 'country-flag-icons/react/3x2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isAmericas = Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith('America');

  const navItems = [
    { name: t('navbar.home', 'Home'), path: '/', icon: Home },
    { name: t('navbar.services', 'Services'), path: '/services', icon: Sparkles },
    { name: t('navbar.about', 'About'), path: '/about', icon: User },
    { name: t('navbar.blog', 'Blog'), path: '/blog', icon: FileText },
    { name: t('navbar.diets', 'Diets'), path: '/diets', icon: Leaf },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: GB },
    { code: 'es', name: 'Español', flag: isAmericas ? MX : ES },
    { code: 'it', name: 'Italiano', flag: IT },
  ];

  const currentLang = languages.find(lang => lang.code === (i18n.language ? i18n.language.split('-')[0] : 'en')) || languages[0];

  return (
    <>
      {/* Top Warning Banner - kept un-floating so it stays at the top of the document */}
      <div className="bg-amber-100 text-amber-800 px-4 py-2 text-xs sm:text-sm font-medium text-center relative z-50">
        <div className="flex justify-center items-center gap-2 max-w-7xl mx-auto">
          <Construction className="w-4 h-4" />
          {t('navbar.workInProgress', 'Website Under Construction – Some features may be incomplete')}
        </div>
      </div>

      {/* Spacer to prevent layout jumps because the navbar is fixed */}
      <div className="h-24 md:h-32"></div>

      {/* Floating Pill Navigation */}
      <div className="fixed top-12 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300 transform mt-2">
        <nav className={`pointer-events-auto flex items-center gap-2 p-2 rounded-full transition-all duration-500 ease-out shadow-xl border border-white/50 ${scrolled ? 'bg-white/90 backdrop-blur-xl scale-95 shadow-2xl' : 'bg-white shadow-lg'}`}>
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 pl-4 pr-3 py-2 rounded-full hover:bg-gray-50 transition-colors">
            <img src="/logo.png" alt="TODOenBALANCE Logo" className="h-7 sm:h-9 w-auto"/>
            <div className="flex flex-col justify-center hidden lg:flex">
               <span className="text-sm font-extrabold text-primary leading-none tracking-tight">TODOenBALANCE</span>
            </div>
          </Link>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-8 bg-gray-200 mx-1"></div>

          {/* Desktop Links (Icons + Text) */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group relative flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-gray-900 text-white shadow-md transform -translate-y-1 scale-105 ring-4 ring-gray-900/10' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className={`text-sm font-semibold tracking-wide ${isActive ? 'text-white' : ''}`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right Section (Lang + Book) */}
          <div className="flex items-center gap-2 pl-2">
            
            {/* Lang Dropdown */}
            <div className="relative group rounded-full hover:bg-gray-50 p-1.5 transition-colors flex items-center border border-gray-100 cursor-pointer text-gray-700 hover:text-gray-900">
              {React.createElement(currentLang.flag, { className: "h-5 w-7 rounded-[4px] shadow-sm ml-1" })}
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={currentLang.code}
                className="appearance-none bg-transparent border-none py-1 pl-2 pr-6 text-sm font-bold focus:ring-0 cursor-pointer uppercase"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.code}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-2 flex items-center">
                  <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
              </div>
            </div>

            {/* Book Now Button (Desktop) */}
            <button 
              onClick={() => navigate('/booking')}
              className="hidden sm:flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ml-1"
            >
              <Calendar className="w-4 h-4" />
              {t('navbar.bookNow', 'Book Now')}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-32 px-6 md:hidden overflow-y-auto">
          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                    isActive ? 'bg-gray-900 text-white shadow-lg transform -translate-y-1' : 'bg-gray-50 text-gray-800 border border-gray-100 hover:bg-gray-100'
                  }`}
                >
                  <div className={`p-2 rounded-full ${isActive ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                    <item.icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                  {item.name}
                </Link>
              );
            })}
            <button 
              onClick={() => { setIsOpen(false); navigate('/booking'); }}
              className="mt-6 flex items-center justify-center gap-2 w-full bg-primary text-white px-6 py-5 rounded-2xl font-bold text-lg shadow-xl transform active:scale-95 transition-transform"
            >
              <Calendar className="w-6 h-6" />
              {t('navbar.bookNow', 'Book Now')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;