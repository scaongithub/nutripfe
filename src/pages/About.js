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

      {/* Contact Section Integrated into About */}
      <div className="mt-24 pt-16 border-t border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('contact.getInTouch', 'Get in Touch')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle', 'Ready to start your health journey? Reach out through any of these channels:')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          {/* WhatsApp Contact */}
          <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              {t('contact.whatsappDesc', 'Quick responses on weekdays from 9am-6pm CET')}
            </p>
            <a
                href="https://wa.me/+34123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full justify-center"
            >
              {t('contact.chatNow', 'Chat Now')}
            </a>
          </div>

          {/* Email Contact */}
          <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              {t('contact.emailDesc', 'Send detailed inquiries for personalized responses')}
            </p>
            <a
                href="mailto:paola@todoenbalance.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full justify-center"
            >
              paola@todoenbalance.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;