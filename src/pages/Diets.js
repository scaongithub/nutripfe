import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Check, Download } from 'lucide-react';

const Diets = () => {
  const { t } = useTranslation();

  const handlePaymentStripe = (dietId) => {
    alert(`Stripe Payment Integration Pending for Diet ID: ${dietId}`);
    // Future: Redirect to Stripe Checkout or open Stripe Modal
  };

  const handlePaymentPayPal = (dietId) => {
    alert(`PayPal Payment Integration Pending for Diet ID: ${dietId}`);
    // Future: Trigger PayPal flow
  };

  const diets = [
    {
      id: 'mediterranean-1w',
      title: t('diets.mediterranean.title', '1-Week Mediterranean Diet Plan'),
      description: t('diets.mediterranean.desc', 'A heart-healthy 7-day meal plan focusing on whole grains, healthy fats, and lean proteins.'),
      price: '$9.99',
      features: [
        t('diets.features.recipes', '7 daily meal plans with recipes'),
        t('diets.features.grocery', 'Complete grocery list'),
        t('diets.features.prep', 'Meal prep guide'),
      ]
    },
    {
      id: 'low-carb-1w',
      title: t('diets.lowcarb.title', '1-Week Low-Carb Diet Plan'),
      description: t('diets.lowcarb.desc', 'Kickstart your metabolism with this delicious, easy-to-follow low carbohydrate meal plan.'),
      price: '$9.99',
      features: [
        t('diets.features.recipes', '7 daily meal plans with recipes'),
        t('diets.features.grocery', 'Complete grocery list'),
        t('diets.features.macros', 'Macronutrient breakdown included'),
      ]
    },
    {
       id: 'plant-based-1w',
       title: t('diets.plantbased.title', '1-Week Plant-Based Diet Plan'),
       description: t('diets.plantbased.desc', 'A fully vegan 7-day meal plan designed to provide optimal nutrition and energy.'),
       price: '$9.99',
       features: [
         t('diets.features.recipes', '7 daily meal plans with recipes'),
         t('diets.features.grocery', 'Complete grocery list'),
         t('diets.features.vegan', '100% Vegan & cruelty-free'),
       ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {t('diets.hero.title', 'Downloadable Diet Plans')}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('diets.hero.subtitle', 'Kickstart your health journey with our expertly crafted 1-week diet eBooks. Instant download after purchase.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diets.map((diet) => (
            <div key={diet.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{diet.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{diet.description}</p>
                
                <div className="text-3xl font-extrabold text-primary mb-6">
                  {diet.price}
                </div>

                <ul className="space-y-4 mb-8">
                  {diet.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col space-y-3">
                <button
                  onClick={() => handlePaymentStripe(diet.id)}
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {t('diets.buttons.stripe', 'Get it now')}
                </button>
                <button
                  onClick={() => handlePaymentPayPal(diet.id)}
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t('diets.buttons.paypal', 'Get it Now Paypal')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diets;
