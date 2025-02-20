// BookingContext.js
import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
    const [bookingData, setBookingData] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [error, setError] = useState(null);

    const value = {
        bookingData,
        setBookingData,
        currentStep,
        setCurrentStep,
        error,
        setError
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

export default BookingContext;
