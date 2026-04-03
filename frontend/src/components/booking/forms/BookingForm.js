// src/components/BookingForm.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SocialLogin from './SocialLogin';

const BookingForm = ({ date, time, duration, onClose }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        concerns: ''
    });

    useEffect(() => {
        // Initialize Google Sign-In
        const loadGoogleScript = () => {
            const script = document.createElement('script');
            script.src = 'https://apis.google.com/js/platform.js';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);

            script.onload = () => {
                window.gapi.load('auth2', () => {
                    window.gapi.auth2.init({
                        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
                    });
                });
            };
        };

        // Initialize Facebook SDK
        const loadFacebookScript = () => {
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId: process.env.REACT_APP_FACEBOOK_APP_ID,
                    cookie: true,
                    xfbml: true,
                    version: 'v18.0'
                });
            };

            const script = document.createElement('script');
            script.src = "https://connect.facebook.net/en_US/sdk.js";
            script.async = true;
            document.body.appendChild(script);
        };

        loadGoogleScript();
        loadFacebookScript();
    }, []);

    const handleSocialLogin = (userData) => {
        setFormData(prev => ({
            ...prev,
            name: userData.name || '',
            email: userData.email || ''
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = duration === 30 ? '50' : '100';
        // Replace with your PayPal username
        const paypalLink = `https://www.paypal.com/paypalme/YourPayPalUsername/${amount}`;
        window.open(paypalLink, '_blank');
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3">
                    <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">
                        {t('booking.confirmBooking')}
                    </h3>

                    {/* Booking Summary */}
                    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                            {formatDate(date)} at {time}
                        </p>
                        <p className="text-sm text-gray-700">
                            {t('booking.duration')}: {duration} {t('booking.minutes')}
                        </p>
                        <p className="text-sm font-medium text-primary">
                            {t('booking.price')}: €{duration === 30 ? '50' : '100'}
                        </p>
                    </div>

                    {/* Social Login */}
                    <SocialLogin onSocialLogin={handleSocialLogin} />

                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('booking.name')}
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('booking.email')}
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('booking.phone')}
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('booking.concerns')}
                            </label>
                            <textarea
                                value={formData.concerns}
                                onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                rows="3"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
                            >
                                {t('booking.proceedToPayment')}
                            </button>

                            <button
                                type="button"
                                onClick={onClose}
                                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
                            >
                                {t('booking.cancel')}
                            </button>
                        </div>
                    </form>
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-600"
                >
                    <span className="text-xl">×</span>
                </button>
            </div>
        </div>
    );
};

export default BookingForm;