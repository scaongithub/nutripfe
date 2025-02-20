import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Award, Globe } from 'lucide-react';

const About = () => {
  const { t, i18n } = useTranslation();

  const credentials = [
    {
      icon: GraduationCap,
      title: t('about.credentials.degree'),
      institution: 'Universidad Autónoma de Nuevo León',
      location: 'Monterrey, México'
    },
    {
      icon: Award,
      title: t('about.credentials.masters'),
      institution: 'Universidad Católica de Murcia',
      location: 'España'
    },
    {
      icon: Globe,
      title: t('about.credentials.exchange'),
      institution: 'Universidad Complutense de Madrid',
      location: 'España'
    }
  ];

  return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Paola Michelle
              </h1>
              <h2 className="mt-3 text-xl text-primary font-semibold">
                {t('about.title')}
              </h2>

              <div className="mt-6 prose prose-lg text-gray-500">
                <p className="lead">
                  {i18n.language === 'es' ? (
                      "¡Hola! Soy Paola Michelle, una nutricionista mexicana apasionada por el bienestar y la salud, actualmente viviendo en Italia."
                  ) : (
                      "Hello! I'm Paola Michelle, a Mexican nutritionist passionate about wellness and health, currently living in Italy."
                  )}
                </p>

                <p>
                  {i18n.language === 'es' ? (
                      "Mi trayectoria profesional comenzó en Monterrey, México, donde me gradué como Licenciada en Nutrición de la Facultad de Salud Pública y Nutrición de la Universidad Autónoma de Nuevo León."
                  ) : (
                      "My professional journey began in Monterrey, Mexico, where I graduated with a degree in Nutrition from the Faculty of Public Health and Nutrition at the Universidad Autónoma de Nuevo León."
                  )}
                </p>

                <p>
                  {i18n.language === 'es' ? (
                      "Con el deseo de profundizar mis conocimientos, realicé una Maestría en Nutrición Clínica y Endocrinología con el Instituto de Ciencias Nutrición y Salud, avalado por la Universidad Católica de Murcia en España."
                  ) : (
                      "Driven by the desire to deepen my knowledge, I completed a Master's degree in Clinical Nutrition and Endocrinology at the Institute of Nutrition and Health Sciences, endorsed by the Catholic University of Murcia in Spain."
                  )}
                </p>

                <p>
                  {i18n.language === 'es' ? (
                      "Mi misión es acompañarte en tu camino hacia una vida más saludable, brindándote asesoramiento nutricional personalizado que se adapte a tus necesidades y objetivos."
                  ) : (
                      "My mission is to accompany you on your journey towards a healthier life, providing personalized nutritional guidance tailored to your needs and goals."
                  )}
                </p>
              </div>

              <div className="mt-8">
                <a
                    href="/booking"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {t('about.cta')}
                </a>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 space-y-8">
              {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg">
                    <div className="flex-shrink-0">
                      <credential.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{credential.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{credential.institution}</p>
                      <p className="text-sm text-gray-500">{credential.location}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;