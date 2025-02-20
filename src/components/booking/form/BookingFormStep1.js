// BookingFormStep1.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBooking } from './BookingContext';

const BookingFormStep1 = () => {
    const { t } = useTranslation();
    const { setBookingData, setCurrentStep } = useBooking();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        concerns: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setBookingData((prev) => ({ ...prev, ...formData }));
        setCurrentStep(2);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
                {t('booking.personalInfo')}
            </h3>

            <div className="space-y-4">
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
            </div>

            <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
            >
                {t('booking.continue')}
            </button>
        </form>
    );
};