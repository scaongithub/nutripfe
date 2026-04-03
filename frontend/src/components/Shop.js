import React from 'react';
import { BookOpen, Sparkle, ShieldCheck, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 'rainbow-reset',
    title: 'Rainbow Reset Meal Plan',
    description:
      'A 4-week step-by-step program that pairs colourful recipes with mindful eating prompts so you can reset your habits with joy.',
    price: '€29',
    badge: 'Best Seller',
    highlights: ['28 flavour-packed recipes', 'Weekly shopping lists', 'Macro-balanced guidance'],
    accent: 'from-pink-500 via-orange-400 to-yellow-400',
  },
  {
    id: 'glow-up',
    title: 'Plant-Powered Glow Up',
    description:
      'Discover vibrant, plant-forward meals designed to nourish your body, balance hormones, and keep your energy steady all day.',
    price: '€24',
    badge: 'New',
    highlights: ['Seasonal produce swaps', 'Snack and smoothie guide', 'Hormone-friendly tips'],
    accent: 'from-green-400 via-emerald-500 to-teal-500',
  },
];

const purchaseSteps = [
  {
    icon: BookOpen,
    title: 'Choose your ebook',
    detail: 'Browse the colourful collection curated for specific goals such as gut health, energy, or hormone balance.',
  },
  {
    icon: ShoppingCart,
    title: 'Secure checkout',
    detail: 'Review what is included, apply a promo code, and pay safely with cards or digital wallets.',
  },
  {
    icon: ShieldCheck,
    title: 'Instant download',
    detail: 'Receive a download link right away plus lifetime access to future updates.',
  },
];

const Shop = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-rose-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-semibold uppercase tracking-wide shadow-lg">
            Vibrant Shop
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Nourish your body with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500">colourful ebooks</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Each guide is crafted by Todo en Balance to turn nutrition science into delicious, doable action plans. Pick the ebook that matches your goals and follow the simple checkout steps below.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.id}
                className="relative rounded-3xl bg-white shadow-xl overflow-hidden border border-white/60 hover:border-white transition-transform duration-300 hover:-translate-y-1"
              >
                <div className={`absolute -top-24 -right-24 w-52 h-52 bg-gradient-to-br ${product.accent} opacity-40 blur-3xl`} />
                <div className="relative p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-wide text-white bg-gray-900/80 px-3 py-1 rounded-full shadow-lg">
                      {product.badge}
                    </span>
                    <span className="text-3xl font-extrabold text-gray-900">{product.price}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900">{product.title}</h3>
                  <p className="mt-3 text-gray-600 flex-1">{product.description}</p>
                  <ul className="mt-6 space-y-2">
                    {product.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <Sparkle className="w-4 h-4 text-pink-500 mt-0.5 mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 text-white font-semibold px-6 py-3 shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-[1.02] transition">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="bg-white rounded-3xl shadow-xl p-8 border border-white/60 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">How purchasing works</h3>
              <p className="mt-3 text-gray-600">
                Follow this guided flow for a smooth checkout experience and start reading within minutes.
              </p>
              <div className="mt-6 space-y-6">
                {purchaseSteps.map((step, index) => (
                  <div key={step.title} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center gap-2">
                        <step.icon className="w-5 h-5 text-pink-500" />
                        <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-white p-6 shadow-2xl">
              <h4 className="text-xl font-semibold">Need a personalised plan?</h4>
              <p className="mt-2 text-sm text-purple-50">
                Bundle your ebook with a one-on-one consultation and receive a tailored adaptation plus check-in session.
              </p>
              <a
                href="/booking"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white/90 text-purple-700 font-semibold px-5 py-2 hover:bg-white"
              >
                Book a bundle call
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Shop;
