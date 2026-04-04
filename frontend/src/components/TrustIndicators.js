import React from 'react';
import { useTranslation } from 'react-i18next';

const TrustIndicators = () => {
  const { t } = useTranslation();

  const indicators = [
    { name: t('trustIndicators.certification1', 'Certified Nutritionist'), logo: '/api/placeholder/120/40' },
    { name: t('trustIndicators.certification2', 'Health Coach'), logo: '/api/placeholder/120/40' },
    { name: t('trustIndicators.certification3', 'Dietitian Association'), logo: '/api/placeholder/120/40' },
    { name: t('trustIndicators.certification4', 'Wellness Expert'), logo: '/api/placeholder/120/40' },
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase text-gray-400 tracking-widest mb-10">
          {t('trustIndicators.title', 'Certifications & Associations')}
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {indicators.map((indicator, index) => (
            <div key={index} className="col-span-1 flex justify-center items-center p-6 sm:p-8 bg-gray-50/50 rounded-3xl border border-gray-100 hover:bg-gray-50 hover:scale-105 transition-all duration-300">
              <img
                className="max-h-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                src={indicator.logo}
                alt={indicator.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;