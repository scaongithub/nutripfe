import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, CheckCircle2, ArrowRight } from 'lucide-react';

const LeadMagnet = () => {
  const { t } = useTranslation();

  // Define benefits array directly in the component
  const benefits = [
    t('leadMagnet.benefit1', 'Complete 7-day meal planning guide'),
    t('leadMagnet.benefit2', 'Shopping list included'),
    t('leadMagnet.benefit3', '15 quick and healthy recipes'),
    t('leadMagnet.benefit4', 'Nutritional information for each meal')
  ];

  return (
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t('leadMagnet.title')}
              <span className="block text-primary text-2xl mt-2">
              {t('leadMagnet.subtitle')}
            </span>
            </h2>

            <div className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
              ))}
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:ml-8">
            <div className="sm:flex sm:flex-col sm:items-center">

              <svg
                  viewBox="0 0 240 320"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-60 h-80 rounded-lg shadow-lg mb-6"
              >
                {/* Background */}
                <rect width="240" height="320" fill="#ffffff"/>

                {/* Guide Cover Design */}
                <rect width="240" height="320" fill="#4A90E2" opacity="0.1"/>

                {/* Header Section */}
                <rect x="20" y="30" width="200" height="60" rx="4" fill="#4A90E2"/>
                <text x="40" y="60" fontFamily="Arial" fontSize="16" fill="#ffffff">7-Day</text>
                <text x="40" y="80" fontFamily="Arial" fontSize="14" fill="#ffffff">Mediterranean Diet Plan</text>

                {/* Meal Section */}
                <g transform="translate(20, 110)">
                  {/* Day 1 */}
                  <rect width="200" height="40" rx="4" fill="#ffffff" stroke="#4A90E2"/>
                  <text x="10" y="25" fontFamily="Arial" fontSize="14" fill="#4A90E2">Day 1</text>

                  {/* Food Icons */}
                  <circle cx="160" cy="20" r="12" fill="#50C878"/>
                  <circle cx="185" cy="20" r="12" fill="#FFA500"/>
                </g>

                {/* Recipe Section */}
                <g transform="translate(20, 160)">
                  <rect width="200" height="60" rx="4" fill="#50C878" opacity="0.1"/>
                  {/* Recipe Icons */}
                  <rect x="10" y="10" width="40" height="40" rx="4" fill="#50C878"/>
                  <rect x="60" y="10" width="130" height="8" rx="2" fill="#50C878"/>
                  <rect x="60" y="25" width="100" height="8" rx="2" fill="#50C878" opacity="0.7"/>
                  <rect x="60" y="40" width="80" height="8" rx="2" fill="#50C878" opacity="0.5"/>
                </g>

                {/* Nutrition Facts */}
                <g transform="translate(20, 230)">
                  <rect width="200" height="60" rx="4" fill="#4A90E2" opacity="0.1"/>
                  {/* Chart */}
                  <circle cx="30" cy="30" r="20" fill="none" stroke="#4A90E2" strokeWidth="4"/>
                  <path d="M30,10 A20,20 0 0,1 48,37" fill="none" stroke="#50C878" strokeWidth="4"/>

                  {/* Labels */}
                  <rect x="60" y="10" width="130" height="8" rx="2" fill="#4A90E2"/>
                  <rect x="60" y="25" width="100" height="8" rx="2" fill="#4A90E2" opacity="0.7"/>
                  <rect x="60" y="40" width="80" height="8" rx="2" fill="#4A90E2" opacity="0.5"/>
                </g>

                {/* Bottom Banner */}
                <g transform="translate(0, 280)">
                  <rect width="240" height="40" fill="#4A90E2"/>
                  <text x="20" y="25" fontFamily="Arial" fontSize="14" fill="#ffffff">+ Quick Recipe Book</text>
                </g>
              </svg>


              <div className="rounded-md shadow">
                <a
                    href="#"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t('leadMagnet.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LeadMagnet;