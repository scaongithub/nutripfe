import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Scale,
  Heart,
  Activity,
  Droplet,
  Battery,
  Zap
} from 'lucide-react';

const Benefits = () => {
  const { t } = useTranslation();

  const benefitCategories = [
    {
      title: t('benefits.weightManagement.title'),
      items: [t('benefits.weightManagement.loseWeight'), t('benefits.weightManagement.loseFat'), t('benefits.weightManagement.gainWeight')],
      icon: Scale,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: t('benefits.bodyComposition.title'),
      items: [t('benefits.bodyComposition.overweight'), t('benefits.bodyComposition.obesity'), t('benefits.bodyComposition.buildMuscle')],
      icon: Heart,
      color: 'bg-rose-50 text-rose-600',
    },
    {
      title: t('benefits.eatingDisorders.title'),
      items: [t('benefits.eatingDisorders.anorexia'), t('benefits.eatingDisorders.bulimia')],
      icon: Activity,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: t('benefits.chronicConditions.title'),
      items: [t('benefits.chronicConditions.diabetes'), t('benefits.chronicConditions.highBloodPressure'), t('benefits.chronicConditions.highCholesterol')],
      icon: Droplet,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      title: t('benefits.metabolicHealth.title'),
      items: [t('benefits.metabolicHealth.insulinResistance'), t('benefits.metabolicHealth.highTriglycerides')],
      icon: Battery,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      title: t('benefits.energyVitality.title'),
      items: [t('benefits.energyVitality.feelMoreActive'), t('benefits.energyVitality.recoverEnergy')],
      icon: Zap,
      color: 'bg-yellow-50 text-yellow-600',
    }
  ];

  return (
    <div className="bg-gray-50/50 py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative Blur background */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl tracking-tight">
            {t('benefits.mainTitle')}
          </h2>
          <p className="mt-5 text-xl text-gray-600">
            {t('benefits.subtitle')}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefitCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-100 flex flex-col h-full">
              <div className={`flex items-center justify-center w-14 h-14 rounded-full ${category.color} mb-6 shadow-inner`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-3 flex-grow">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-gray-900 hover:bg-black hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            {t('benefits.ctaButton')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Benefits;