import React, { useState } from 'react';
import AvailabilityCalendar from '../components/AvailabilityCalendar';
import BookingForm from '../components/BookingForm';

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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Consultancy</h1>

            <AvailabilityCalendar
                onDateSelect={handleDateSelect}
                onTimeSelect={handleTimeSelect}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
            />

            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Duration</h2>
                <div className="flex space-x-4">
                    <button
                        onClick={() => handleDurationChange(30)}
                        className={`px-4 py-2 rounded-md ${duration === 30 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        30 minutes
                    </button>
                    <button
                        onClick={() => handleDurationChange(60)}
                        className={`px-4 py-2 rounded-md ${duration === 60 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        1 hour
                    </button>
                </div>
            </div>

            <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className="mt-8 px-6 py-3 bg-primary text-white rounded-md disabled:opacity-50"
            >
                Book Now
            </button>

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