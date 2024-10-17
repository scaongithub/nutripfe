import React from 'react';
import { format, addDays, isSameDay } from 'date-fns';

const AvailabilityCalendar = ({ onDateSelect, onTimeSelect, selectedDate, selectedTime }) => {
    const today = new Date();
    const availableDates = Array.from({ length: 14 }, (_, i) => addDays(today, i));

    const availableTimes = [
        '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Date and Time</h2>
            <div className="grid grid-cols-7 gap-2 mb-4">
                {availableDates.map((date) => (
                    <button
                        key={date.toISOString()}
                        onClick={() => onDateSelect(date)}
                        className={`p-2 rounded-md ${isSameDay(date, selectedDate) ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        {format(date, 'MMM d')}
                    </button>
                ))}
            </div>
            {selectedDate && (
                <div className="grid grid-cols-4 gap-2">
                    {availableTimes.map((time) => (
                        <button
                            key={time}
                            onClick={() => onTimeSelect(time)}
                            className={`p-2 rounded-md ${time === selectedTime ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvailabilityCalendar;