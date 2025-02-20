import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Timer, CreditCard } from 'lucide-react';

const BookingFormStep2 = ({ bookingData, onConfirm, onBack }) => {
    const { t } = useTranslation();
    const { date, time, duration } = bookingData;
    const amount = duration === 30 ? 50 : 100;

    const handlePayment = () => {
        // Replace 'YourPayPalUsername' with your actual PayPal.me username
        const paypalLink = `https://www.paypal.com/paypalme/YourPayPalUsername/${amount}`;

        // Open PayPal in a new window
        window.open(paypalLink, '_blank');

        // Move to success state
        // Note: In a production environment, you should verify the payment
        // before showing the success state
        onConfirm();
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 text-center">
                {t('booking.confirmDetails', 'Confirm Your Booking')}
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-sm text-gray-500">{t('booking.date', 'Date')}</p>
                            <p className="font-medium text-gray-900">{formatDate(date)}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-sm text-gray-500">{t('booking.time', 'Time')}</p>
                            <p className="font-medium text-gray-900">{time}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Timer className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-sm text-gray-500">{t('booking.duration', 'Duration')}</p>
                            <p className="font-medium text-gray-900">{duration} minutes</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-sm text-gray-500">{t('booking.amount', 'Amount')}</p>
                            <p className="font-medium text-gray-900">€{amount}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                    {t('booking.paypalInfo', 'You will be redirected to PayPal to complete your payment securely.')}
                </p>
            </div>

            <div className="space-y-3">
                <button
                    onClick={handlePayment}
                    className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-dark transition-colors"
                >
                    {t('booking.payNow', 'Pay Now')} (€{amount})
                </button>

                <button
                    onClick={onBack}
                    className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors"
                >
                    {t('booking.back', 'Go Back')}
                </button>
            </div>
        </div>
    );
};

export default BookingFormStep2;