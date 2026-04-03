// src/components/AvailabilityCalendar.js
import React from 'react';

const AvailabilityCalendar = ({ onDateSelect, onTimeSelect, selectedDate, selectedTime }) => {
    // Generate next 14 days
    const generateAvailableDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 14; i++) {
            const date = new Date();
            date.setDate(today.getDate() + i);
            dates.push(date);
        }
        return dates;
    };

    const availableDates = generateAvailableDates();
    const availableTimes = [
        '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
    ];

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric'
        }).format(date);
    };

    const isSameDay = (date1, date2) => {
        if (!date1 || !date2) return false;
        return date1.toDateString() === date2.toDateString();
    };

    return (
        <div className="space-y-6">
            {/* Date Selection */}
            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Select Date</h3>
                <div className="grid grid-cols-7 gap-2">
                    {availableDates.map((date) => (
                        <button
                            key={date.toISOString()}
                            onClick={() => onDateSelect(date)}
                            className={`p-2 text-sm rounded-md ${
                                selectedDate && isSameDay(date, selectedDate)
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {formatDate(date)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Select Time</h3>
                    <div className="grid grid-cols-4 gap-2">
                        {availableTimes.map((time) => (
                            <button
                                key={time}
                                onClick={() => onTimeSelect(time)}
                                className={`p-2 text-sm rounded-md ${
                                    time === selectedTime
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AvailabilityCalendar;