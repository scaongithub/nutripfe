import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClipboardList, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: ClipboardList, title: t('services.personalizedPlans.title'), description: t('services.personalizedPlans.description') },
    { icon: Users, title: t('services.groupSessions.title'), description: t('services.groupSessions.description') },
    { icon: TrendingUp, title: t('services.corporateWellness.title'), description: t('services.corporateWellness.description') },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">{t('services.title')}</h2>
          <p className="mt-4 text-lg text-gray-500">{t('services.subtitle')}</p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {services.map((service) => (
            <div key={service.title} className="relative">
              <dt>
                <service.icon className="absolute h-6 w-6 text-primary" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{service.title}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{service.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Services;