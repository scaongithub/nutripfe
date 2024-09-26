import React from 'react';
import { useTranslation } from 'react-i18next';
import { VideoIcon, ClipboardList, TrendingUp, Users, Zap, Repeat } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: VideoIcon,
      title: t('services.virtualConsultation.title'),
      description: t('services.virtualConsultation.description'),
    },
    {
      icon: ClipboardList,
      title: t('services.customMealPlans.title'),
      description: t('services.customMealPlans.description'),
    },
    {
      icon: TrendingUp,
      title: t('services.progressTracking.title'),
      description: t('services.progressTracking.description'),
    },
    {
      icon: Users,
      title: t('services.groupCoaching.title'),
      description: t('services.groupCoaching.description'),
    },
    {
      icon: Zap,
      title: t('services.nutritionWorkshops.title'),
      description: t('services.nutritionWorkshops.description'),
    },
    {
      icon: Repeat,
      title: t('services.ongoingSupport.title'),
      description: t('services.ongoingSupport.description'),
    },
  ];

  return (
    <div className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-md text-white mb-4">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition duration-300"
          >
            {t('services.ctaButton')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;