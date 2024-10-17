import React, { useState } from 'react';
import { format } from 'date-fns';

const BookingForm = ({ date, time, duration, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the booking data to your server
        // and redirect to PayPal for payment
        const paypalLink = `https://www.paypal.com/paypalme/YourPayPalUsername/${duration === 30 ? '50' : '100'}`;
        window.open(paypalLink, '_blank');
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Confirm Your Booking</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">
                            {format(date, 'MMMM d, yyyy')} at {time}
                        </p>
                        <p className="text-sm text-gray-500">
                            Duration: {duration} minutes
                        </p>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                className="mt-2 p-2 w-full border rounded-md"
                                required
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className="mt-2 p-2 w-full border rounded-md"
                                required
                            />
                            <button
                                type="submit"
                                className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
                            >
                                Proceed to Payment
                            </button>
                        </form>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600"
                >
                    &#x2715;
                </button>
            </div>
        </div>
    );
};

export default BookingForm;