import React from 'react';
import { useTranslation } from 'react-i18next';
import { Scale, Leaf, Battery } from 'lucide-react';

const Benefits = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: Scale, title: t('benefits.sustainable.title'), description: t('benefits.sustainable.description') },
    { icon: Leaf, title: t('benefits.balanced.title'), description: t('benefits.balanced.description') },
    { icon: Battery, title: t('benefits.energy.title'), description: t('benefits.energy.description') },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">{t('benefits.title')}</h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <benefit.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{benefit.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Benefits;