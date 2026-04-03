import React from 'react';
import { useTranslation } from 'react-i18next';

const TrustIndicators = () => {
  const { t } = useTranslation();

  const indicators = [
    { name: t('trustIndicators.certification1'), logo: '/api/placeholder/120/40' },
    { name: t('trustIndicators.certification2'), logo: '/api/placeholder/120/40' },
    { name: t('trustIndicators.certification3'), logo: '/api/placeholder/120/40' },
    { name: t('trustIndicators.certification4'), logo: '/api/placeholder/120/40' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          {t('trustIndicators.title')}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          {indicators.map((indicator) => (
            <div key={indicator.name} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
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