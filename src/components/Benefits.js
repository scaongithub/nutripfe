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
      icon: Scale
    },
    {
      title: t('benefits.bodyComposition.title'),
      items: [t('benefits.bodyComposition.overweight'), t('benefits.bodyComposition.obesity'), t('benefits.bodyComposition.buildMuscle')],
      icon: Heart
    },
    {
      title: t('benefits.eatingDisorders.title'),
      items: [t('benefits.eatingDisorders.anorexia'), t('benefits.eatingDisorders.bulimia')],
      icon: Activity
    },
    {
      title: t('benefits.chronicConditions.title'),
      items: [t('benefits.chronicConditions.diabetes'), t('benefits.chronicConditions.highBloodPressure'), t('benefits.chronicConditions.highCholesterol')],
      icon: Droplet
    },
    {
      title: t('benefits.metabolicHealth.title'),
      items: [t('benefits.metabolicHealth.insulinResistance'), t('benefits.metabolicHealth.highTriglycerides')],
      icon: Battery
    },
    {
      title: t('benefits.energyVitality.title'),
      items: [t('benefits.energyVitality.feelMoreActive'), t('benefits.energyVitality.recoverEnergy')],
      icon: Zap
    }
  ];

  return (
    <div className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            {t('benefits.mainTitle')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefitCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-md text-white mb-4">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <ul className="list-disc list-inside text-gray-600">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition duration-300"
          >
            {t('benefits.ctaButton')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Benefits;