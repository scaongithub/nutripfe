import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Calendar, Clock, Clock3 } from 'lucide-react';

const BookingSuccess = ({ bookingData }) => {
    const { t } = useTranslation();
    const { date, time, duration, email } = bookingData;

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="text-center space-y-6">
            <div className="flex justify-center">
                <CheckCircle className="w-16 h-16 text-green-500" />
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                    {t('booking.confirmed', 'Booking Confirmed!')}
                </h3>
                <p className="mt-2 text-gray-600">
                    {t('booking.emailSent', 'We\'ve sent the confirmation to')} {email}
                </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                    {t('booking.appointmentDetails', 'Appointment Details')}
                </h4>

                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div className="text-left">
                            <p className="text-sm text-gray-500">{t('booking.date', 'Date')}</p>
                            <p className="text-gray-900">{formatDate(date)}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div className="text-left">
                            <p className="text-sm text-gray-500">{t('booking.time', 'Time')}</p>
                            <p className="text-gray-900">{time}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Clock3 className="w-5 h-5 text-primary" />
                        <div className="text-left">
                            <p className="text-sm text-gray-500">{t('booking.duration', 'Duration')}</p>
                            <p className="text-gray-900">{duration} minutes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800">
                    {t('booking.nextSteps', 'Check your email for preparation instructions and video call details.')}
                </p>
            </div>

            <div className="pt-6">
                <a
                    href="/"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                    {t('booking.backToHome', 'Back to Home')}
                </a>
            </div>
        </div>
    );
};

export default BookingSuccess;