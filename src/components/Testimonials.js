import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flag } from 'lucide-react';

const Testimonials = () => {
  const { t, i18n } = useTranslation();

  const testimonials = [
    {
      name: "Isabella Romano",
      location: "Milano, Italia",
      content: t('testimonials.italian', "Ho iniziato il mio percorso con Paola tre mesi fa e i risultati sono incredibili. Non solo ho raggiunto il mio peso ideale, ma ho anche imparato un nuovo modo di approcciarmi al cibo. La sua conoscenza della cucina italiana le ha permesso di adattare il piano nutrizionale alle mie abitudini."),
      flag: "🇮🇹"
    },
    {
      name: "María Fernández",
      location: "Monterrey, México",
      content: t('testimonials.mexican', "Paola no solo me ayudó a mejorar mi alimentación, sino que también me enseñó a mantener mis tradiciones culinarias mexicanas de una manera saludable. Su comprensión de nuestra cultura alimentaria hizo que el proceso fuera natural y sostenible."),
      flag: "🇲🇽"
    },
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      content: t('testimonials.american', "Working with Paola has been transformative. She understands the challenges of a busy lifestyle and helped me develop healthy eating habits that fit my schedule. Her approach is both professional and personalizedーexactly what I needed."),
      flag: "🇺🇸"
    }
  ];

  const getLocalizedContent = (testimonial) => {
    switch(i18n.language) {
      case 'it':
        return testimonial.content;
      case 'es':
        // Spanish translations of testimonials
        return {
          "Isabella Romano": "Comencé mi viaje con Paola hace tres meses y los resultados son increíbles. No solo alcancé mi peso ideal, sino que también aprendí una nueva forma de relacionarme con la comida. Su conocimiento de la cocina italiana le permitió adaptar el plan nutricional a mis hábitos.",
          "María Fernández": testimonial.content,
          "Sarah Johnson": "Trabajar con Paola ha sido transformador. Ella entiende los desafíos de un estilo de vida ocupado y me ayudó a desarrollar hábitos alimenticios saludables que se ajustan a mi horario. Su enfoque es profesional y personalizado, exactamente lo que necesitaba."
        }[testimonial.name];
      default:
        // English translations
        return {
          "Isabella Romano": "I started my journey with Paola three months ago and the results are incredible. Not only did I reach my ideal weight, but I also learned a new way to approach food. Her knowledge of Italian cuisine allowed her to adapt the nutritional plan to my habits.",
          "María Fernández": "Paola not only helped me improve my nutrition, but also taught me how to maintain my Mexican culinary traditions in a healthy way. Her understanding of our food culture made the process natural and sustainable.",
          "Sarah Johnson": testimonial.content
        }[testimonial.name];
    }
  };

  return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('testimonials.title', 'What Our Clients Say')}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t('testimonials.subtitle', 'Success stories from around the world')}
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                  <div key={index} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div className="flex flex-col items-center">
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <span className="text-2xl">{testimonial.flag}</span>
                      </span>
                          <h3 className="mt-4 text-lg font-medium text-gray-900 tracking-tight">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                        <div className="mt-4">
                          <div className="relative">
                            <span className="text-4xl text-primary opacity-25 absolute top-0 left-0">"</span>
                            <p className="text-base text-gray-500 italic px-6 pt-4">
                              {getLocalizedContent(testimonial)}
                            </p>
                            <span className="text-4xl text-primary opacity-25 absolute bottom-0 right-0">"</span>
                          </div>
                        </div>
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