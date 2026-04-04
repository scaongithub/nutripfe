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
        <div className="mt-16 grid gap-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 pt-12 border border-gray-100 flex flex-col items-center text-center relative mt-6">
              <div className="absolute -top-8 flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary shadow-sm border-2 border-white">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <a
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-gray-900 hover:bg-black hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            {t('services.ctaButton')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;