import React from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    { name: t('testimonials.client1.name'), role: t('testimonials.client1.role'), content: t('testimonials.client1.content') },
    { name: t('testimonials.client2.name'), role: t('testimonials.client2.role'), content: t('testimonials.client2.content') },
    { name: t('testimonials.client3.name'), role: t('testimonials.client3.role'), content: t('testimonials.client3.content') },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('testimonials.title')}</h2>
          <p className="mt-4 text-lg text-gray-500">{t('testimonials.subtitle')}</p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <img
                          className="h-6 w-6 rounded-full"
                          src={`/api/placeholder/48/48?text=${testimonial.name.charAt(0)}`}
                          alt={testimonial.name}
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{testimonial.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{testimonial.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;