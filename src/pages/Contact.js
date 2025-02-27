import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  // Your WhatsApp number with international format (example: +34123456789)
  const whatsappNumber = "+34123456789";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to schedule a nutrition consultation.")}`;

  // Your email address
  const emailAddress = "paola@todoenbalance.com";
  const emailSubject = "Nutrition Consultation Inquiry";
  const emailBody = "Hello Paola,\n\nI'm interested in learning more about your nutrition services.";
  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('contact.getInTouch', 'Get in Touch')}
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.subtitle', 'Have questions about nutrition or ready to start your health journey? Reach out through any of these channels:')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp Contact */}
            <div className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
              </div>
              <p className="text-base text-gray-600 mb-4">
                {t('contact.whatsappDesc', 'Quick responses on weekdays from 9am-6pm CET')}
              </p>
              <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {t('contact.chatNow', 'Chat Now')}
              </a>
            </div>

            {/* Email Contact */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
              </div>
              <p className="text-base text-gray-600 mb-4">
                {t('contact.emailDesc', 'Send detailed inquiries for personalized responses')}
              </p>
              <a
                  href={emailLink}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {emailAddress}
              </a>
            </div>

            {/* Phone Contact */}
            <div className="bg-purple-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{t('contact.phone')}</h3>
              </div>
              <p className="text-base text-gray-600 mb-4">
                {t('contact.phoneDesc', 'Available for calls Monday through Friday, 10am-5pm CET')}
              </p>
              <a
                  href="tel:+34123456789"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                +34 123 456 789
              </a>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t('contact.locations')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Office 1 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.office1')}</h3>
                </div>
                <div className="ml-9 text-base text-gray-600">
                  <p>123 Main St</p>
                  <p>Suite 456</p>
                  <p>New York, NY 10001</p>

                  <div className="mt-4 flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-sm">
                      {t('contact.hours', 'Mon-Fri: 9am-5pm')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Office 2 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.office2')}</h3>
                </div>
                <div className="ml-9 text-base text-gray-600">
                  <p>Via Roma 123</p>
                  <p>Floor 2</p>
                  <p>Milan, Italy 20121</p>

                  <div className="mt-4 flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-sm">
                      {t('contact.hours', 'Mon-Fri: 9am-5pm')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-4">
              {t('contact.preferForm', 'Prefer to send a detailed message?')}
            </p>
            <a
                href="/contact-form"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {t('contact.useForm', 'Use Our Contact Form')}
            </a>
          </div>
        </div>
      </div>
  );
};

export default Contact;