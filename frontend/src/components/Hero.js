import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white pb-12 sm:pb-24 pt-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-blue-500 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden relative">
          
          {/* Subtle decorative background shape */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-black opacity-10 blur-3xl pointer-events-none"></div>

          <div className="relative px-6 py-20 sm:px-12 sm:py-32 lg:px-16 text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl max-w-4xl mx-auto">
              {t('hero.title')}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base text-blue-50 sm:text-xl md:mt-8 md:text-2xl font-medium">
              {t('hero.subtitle')}
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <a
                href="/booking"
                className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-primary bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-50 transition-all duration-300"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
