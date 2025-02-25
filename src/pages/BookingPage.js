// src/pages/BookingPage.js
import React from 'react';
import { BookingProvider } from '../components/booking/BookingContext';
import ImprovedBookingPage from '../components/booking/ImprovedBookingPage';

const BookingPage = () => {
    return (
        <BookingProvider>
            <ImprovedBookingPage />
        </BookingProvider>
    );
};

export default BookingPage;