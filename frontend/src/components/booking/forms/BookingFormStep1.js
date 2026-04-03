import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SocialLogin from './SocialLogin';

const BookingFormStep1 = ({ initialData, onBack }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        concerns: ''
    });

    // Initialize social login SDKs
    useEffect(() => {
        // Initialize Google Sign-In
        window.gapi?.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
            });
        });

        // Initialize Facebook SDK
        window.fbAsyncInit = function() {
            window.FB.init({
                appId: process.env.REACT_APP_FACEBOOK_APP_ID,
                cookie: true,
                xfbml: true,
                version: 'v18.0'
            });
        };

        // Load Facebook SDK
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Initialize Sign in with Apple
        // Note: Apple Sign In requires additional setup in your Apple Developer account
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
        // Handle form submission
    };

    return (
        <div className="space-y-6">
            <SocialLogin onSocialLogin={handleSocialLogin} />

            <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    {t('booking.personalInfo')}
                </h3>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        {t('booking.name')}
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        {t('booking.email')}
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        {t('booking.phone')}
                    </label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        {t('booking.concerns')}
                    </label>
                    <textarea
                        value={formData.concerns}
                        onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                        rows="4"
                    />
                </div>

                <div className="flex justify-between space-x-4">
                    <button
                        type="button"
                        onClick={onBack}
                        className="w-1/2 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200"
                    >
                        {t('booking.back')}
                    </button>
                    <button
                        type="submit"
                        className="w-1/2 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
                    >
                        {t('booking.continue')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingFormStep1;