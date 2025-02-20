// src/pages/BookingPage.js
import React, { useState } from 'react';
import AvailabilityCalendar from '../components/AvailabilityCalendar';
import BookingForm from '../components/booking/forms/BookingForm';

const BookingPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [duration, setDuration] = useState(30);
    const [showForm, setShowForm] = useState(false);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setSelectedTime(null);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleDurationChange = (newDuration) => {
        setDuration(newDuration);
    };

    const handleBooking = () => {
        if (selectedDate && selectedTime) {
            setShowForm(true);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Consultation</h1>

            <div className="space-y-8">
                {/* Calendar Section */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Date and Time</h2>
                    <AvailabilityCalendar
                        onDateSelect={handleDateSelect}
                        onTimeSelect={handleTimeSelect}
                        selectedDate={selectedDate}
                        selectedTime={selectedTime}
                    />
                </div>

                {/* Duration Selection */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Duration</h2>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => handleDurationChange(30)}
                            className={`px-4 py-2 rounded-md ${
                                duration === 30
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 text-gray-700'
                            }`}
                        >
                            30 minutes - €50
                        </button>
                        <button
                            onClick={() => handleDurationChange(60)}
                            className={`px-4 py-2 rounded-md ${
                                duration === 60
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-200 text-gray-700'
                            }`}
                        >
                            60 minutes - €100
                        </button>
                    </div>
                </div>

                {/* Booking Button */}
                <div>
                    <button
                        onClick={handleBooking}
                        disabled={!selectedDate || !selectedTime}
                        className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {selectedDate && selectedTime
                            ? `Book Consultation for ${selectedTime}`
                            : 'Select a date and time'}
                    </button>
                </div>

                {/* Summary */}
                {selectedDate && selectedTime && (
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-medium text-gray-900">Booking Summary</h3>
                        <p className="text-gray-600">
                            Date: {selectedDate.toLocaleDateString()}
                        </p>
                        <p className="text-gray-600">
                            Time: {selectedTime}
                        </p>
                        <p className="text-gray-600">
                            Duration: {duration} minutes
                        </p>
                        <p className="text-gray-600">
                            Price: €{duration === 30 ? '50' : '100'}
                        </p>
                    </div>
                )}
            </div>

            {/* Booking Form Modal */}
            {showForm && (
                <BookingForm
                    date={selectedDate}
                    time={selectedTime}
                    duration={duration}
                    onClose={() => setShowForm(false)}
                />
            )}
        </div>
    );
};

export default BookingPage;