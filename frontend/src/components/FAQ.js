import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Clipboard, Scale, Clock, Calendar, Apple, Heart, Users, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: Clipboard,
      question: t('faq.question1', 'What happens during my first nutrition consultation?'),
      answer: t('faq.answer1', 'Your initial consultation will include a comprehensive assessment of your current health, dietary habits, and goals.' +
          ' We\'ll discuss your medical history, lifestyle, and any nutritional concerns you may have. This session typically lasts 60 minutes and concludes with a personalized plan to help you achieve your health objectives.'),
      schema: 'HowTo'
    },
    {
      icon: Scale,
      question: t('faq.question2', 'How long does it take to see results with personalized nutrition?'),
      answer: t('faq.answer2', 'Results vary based on individual goals and consistency. Many clients notice improvements in energy and digestion within 2-3 weeks. Weight management goals typically show measurable progress within 4-6 weeks with proper adherence to your nutrition plan. Remember that sustainable changes take time, and we\'ll adjust your plan as needed throughout your journey.'),
      schema: 'FAQ'
    },
    {
      icon: Clock,
      question: t('faq.question3', 'How often should I schedule follow-up appointments?'),
      answer: t('faq.answer3', 'For optimal results, I typically recommend bi-weekly follow-ups during the first month, then monthly sessions as you progress. These follow-up appointments allow us to track your progress, address any challenges, and adjust your nutrition plan accordingly. Regular sessions help maintain accountability and provide the support needed for lasting change.'),
      schema: 'FAQ'
    },
    {
      icon: Calendar,
      question: t('faq.question4', 'Do you accommodate special dietary needs like vegan, gluten-free, or ketogenic diets?'),
      answer: t('faq.answer4', 'Absolutely! I specialize in customizing nutrition plans for various dietary preferences and requirements. Whether you follow a plant-based, gluten-free, ketogenic, Mediterranean, or other specialized diet—or have food allergies and intolerances—I\'ll work with you to create a nutritional approach that aligns with your needs while ensuring optimal nutrition.'),
      schema: 'FAQ'
    },
    {
      icon: Apple,
      question: t('faq.question5', 'How do nutrition consultations help with medical conditions like diabetes or hypertension?'),
      answer: t('faq.answer5', 'Nutrition plays a crucial role in managing chronic conditions. For conditions like diabetes, hypertension, and high cholesterol, I create specialized meal plans that help regulate blood sugar, blood pressure, and lipid levels. While I work in conjunction with your healthcare providers, nutrition therapy can often reduce medication dependence and improve clinical markers through targeted dietary strategies.'),
      schema: 'MedicalWebPage'
    },
    {
      icon: Heart,
      question: t('faq.question6', 'What\'s the difference between weight loss and sustainable weight management?'),
      answer: t('faq.answer6', 'Weight loss focuses on short-term reduction in body weight, while sustainable weight management creates lasting habits that maintain your ideal weight long-term. My approach emphasizes the latter—teaching you practical skills, addressing behavioral patterns, and implementing gradual changes that become part of your lifestyle rather than following restrictive diets that often lead to weight cycling.'),
      schema: 'FAQ'
    },
    {
      icon: Users,
      question: t('faq.question7', 'Can you provide nutrition guidance for my entire family, including children?'),
      answer: t('faq.answer7', 'Yes! Family nutrition is incredibly important for establishing healthy habits early. I offer family-centered nutrition services that address the unique needs of each family member while creating practical meal plans that work for everyone. For children, I focus on promoting healthy relationships with food, supporting proper growth and development, and preventing nutrition-related issues.'),
      schema: 'FAQ'
    },
    {
      icon: HelpCircle,
      question: t('faq.question8', 'What\'s the difference between a nutritionist and a dietitian?'),
      answer: t('faq.answer8', 'While both professionals work in nutrition, a registered dietitian (RD) has completed accredited education programs, clinical training, and passed a registration exam. The term "nutritionist" varies in regulation by location. I hold a Master\'s degree in Clinical Nutrition and Endocrinology and am certified to provide comprehensive nutrition counseling, though specific credentials and terminology may differ by country.'),
      schema: 'FAQ'
    }
  ];

  return (
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              {t('faq.title', 'Frequently Asked Questions')}
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              {t('faq.subtitle', 'Everything you need to know about our nutrition services')}
            </p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="mb-6 bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    // Add schema markup for SEO
                    itemScope
                    itemType={`https://schema.org/${faq.schema}`}
                >
                  <button
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openIndex === index}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <faq.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <h3
                          className="text-lg font-semibold text-gray-900"
                          itemProp="name"
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <div className="ml-4">
                      {openIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  <div
                      className={`px-6 pb-6 ${openIndex === index ? 'block' : 'hidden'}`}
                      itemProp="text"
                  >
                    <div className="prose max-w-none text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              {t('faq.moreQuestions', "Didn't find what you're looking for?")}
            </p>
            <a
                href="/contact"
                className="mt-2 inline-flex items-center text-primary font-medium hover:text-primary-dark"
            >
              {t('faq.contactUs', 'Contact us for more information')}
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
  );
};

export default FAQ;