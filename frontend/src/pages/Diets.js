import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Check, Download } from 'lucide-react';

const Diets = () => {
  const { t } = useTranslation();
  const [loadingId, setLoadingId] = useState(null);

  const handlePaymentStripe = async (dietId) => {
    const email = window.prompt("Please enter your email to receive the download link:");
    if (!email) return;

    setLoadingId(dietId);
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
      const response = await fetch(`${API_URL}/api/payments/create-diet-checkout?diet_id=${dietId}&customer_email=${encodeURIComponent(email)}`, {
        method: 'POST'
      });
      const data = await response.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert(data.detail || "Payment initialization failed.");
        setLoadingId(null);
      }
    } catch (e) {
      alert("Error contacting the server.");
      setLoadingId(null);
    }
  };

  const diets = [
    {
      id: 'diet_mediterranean',
      title: t('diets.mediterranean.title', '1-Week Mediterranean Diet Plan'),
      description: t('diets.mediterranean.desc', 'A heart-healthy 7-day meal plan focusing on whole grains, healthy fats, and lean proteins.'),
      price: '€9.99',
      features: [
        t('diets.features.recipes', '7 daily meal plans with recipes'),
        t('diets.features.grocery', 'Complete grocery list'),
        t('diets.features.prep', 'Meal prep guide'),
      ]
    },
    {
      id: 'diet_lowcarb',
      title: t('diets.lowcarb.title', '1-Week Low-Carb Diet Plan'),
      description: t('diets.lowcarb.desc', 'Kickstart your metabolism with this delicious, easy-to-follow low carbohydrate meal plan.'),
      price: '€9.99',
      features: [
        t('diets.features.recipes', '7 daily meal plans with recipes'),
        t('diets.features.grocery', 'Complete grocery list'),
        t('diets.features.macros', 'Macronutrient breakdown included'),
      ]
    },
    {
       id: 'diet_plantbased',
       title: t('diets.plantbased.title', '1-Week Plant-Based Diet Plan'),
       description: t('diets.plantbased.desc', 'A fully vegan 7-day meal plan designed to provide optimal nutrition and energy.'),
       price: '€9.99',
       features: [
         t('diets.features.recipes', '7 daily meal plans with recipes'),
         t('diets.features.grocery', 'Complete grocery list'),
         t('diets.features.vegan', '100% Vegan & cruelty-free'),
       ]
    }
  ];

  return (
    <div className="bg-gray-50/50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-400/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {t('diets.hero.title', 'Downloadable Diet Plans')}
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            {t('diets.hero.subtitle', 'Kickstart your health journey with our expertly crafted 1-week diet eBooks. Instant download after purchase.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {diets.map((diet) => (
            <div key={diet.id} className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-white relative group">
              <div className="p-8 sm:p-10 flex-grow relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{diet.title}</h3>
                <p className="text-gray-500 font-medium mb-8 flex-grow leading-relaxed">{diet.description}</p>
                
                <div className="text-4xl font-black text-primary mb-8 px-4 py-2 bg-primary/5 rounded-full inline-block">
                  {diet.price}
                </div>

                <ul className="space-y-4 mb-4">
                  {diet.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gray-50/50 mt-auto flex flex-col space-y-3 relative z-10 box-border">
                <button
                  onClick={() => handlePaymentStripe(diet.id)}
                  disabled={loadingId === diet.id}
                  className="w-full flex items-center justify-center px-6 py-4 text-base font-bold rounded-full text-white bg-gray-900 hover:bg-primary shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:bg-gray-300 disabled:shadow-none disabled:transform-none"
                >
                  <Download className="w-5 h-5 mr-3" />
                  {loadingId === diet.id ? 'Redirecting...' : t('diets.buttons.stripe', 'Secure Checkout')}
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
