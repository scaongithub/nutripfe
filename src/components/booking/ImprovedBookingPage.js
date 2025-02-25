import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Timer, CreditCard, ArrowRight, Check, ChevronLeft, ChevronRight, Video, X } from 'lucide-react';
import { useBooking } from './BookingContext';
import BookingService from './BookingService';

const ImprovedBookingPage = () => {



    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        date: null,
        time: null,
        duration: 30,
        name: '',
        email: '',
        phone: '',
        concerns: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);

    // Generate next 14 days
    const generateDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 1; i <= 28; i++) {
            const date = new Date();
            date.setDate(today.getDate() + i);

            // Skip weekends for this example (can be customized)
            if (date.getDay() !== 0) { // Skip Sundays
                dates.push(date);
            }
        }
        return dates;
    };

    const availableDates = generateDates();

    // Available time slots - could be fetched from an API
    const availableTimes = {
        morning: ['09:00', '10:00', '11:00'],
        afternoon: ['13:00', '14:00', '15:00', '16:00']
    };

    const handleDateSelect = (date) => {
        setBookingData({ ...bookingData, date });
    };

    const handleTimeSelect = (time) => {
        setBookingData({ ...bookingData, time });
    };

    const handleDurationSelect = (duration) => {
        setBookingData({ ...bookingData, duration });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    const isDateSelected = (date) => {
        return bookingData.date && date.toDateString() === bookingData.date.toDateString();
    };

    const handleSubmit = () => {
        // In a real app, you would submit the form data to your backend
        console.log('Booking submitted:', bookingData);
        setShowSuccess(true);
    };

    const handlePayment = () => {
        const amount = bookingData.duration === 30 ? 50 : 100;
        // Replace with your PayPal username
        const paypalLink = `https://www.paypal.com/paypalme/carloascarsini/${amount}`;
        window.open(paypalLink, '_blank');
        handleSubmit();
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        }).format(date);
    };

    const nextStep = () => {
        if (currentStep === 1 && !bookingData.date) return;
        if (currentStep === 2 && !bookingData.time) return;
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // Month navigation
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    // Filter dates for the current month view
    const currentMonthDates = availableDates.filter(date =>
        date.getMonth() === currentMonth && date.getFullYear() === currentYear
    );

    // Group dates by week for the calendar view
    const getMonthName = () => {
        return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(
            new Date(currentYear, currentMonth, 1)
        );
    };

    if (showSuccess) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">Booking Confirmed!</h2>
                <p className="text-gray-600 text-center mb-8">
                    We've sent a confirmation email to {bookingData.email}
                </p>

                <div className="bg-gray-50 p-6 rounded-lg w-full max-w-md">
                    <h3 className="font-semibold text-lg mb-4">Appointment Details</h3>

                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Calendar className="text-primary w-5 h-5 mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Date</p>
                                <p className="font-medium">{bookingData.date && formatDate(bookingData.date)}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Clock className="text-primary w-5 h-5 mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Time</p>
                                <p className="font-medium">{bookingData.time}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Timer className="text-primary w-5 h-5 mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Duration</p>
                                <p className="font-medium">{bookingData.duration} minutes</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Video className="text-primary w-5 h-5 mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Meeting Link</p>
                                <p className="font-medium text-primary">Check your email for details</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-8 bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md transition-colors"
                >
                    Return to Home
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Consultation</h1>
            <p className="text-gray-600 mb-8">Schedule your personalized nutrition session with Paola Michelle</p>

            {/* Progress Steps */}
            <div className="relative mb-12">
                <div className="flex justify-between">
                    {[1, 2, 3].map((step) => (
                        <div
                            key={step}
                            className={`relative flex items-center justify-center z-10 w-10 h-10 rounded-full ${
                                currentStep >= step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                            }`}
                        >
                            {step}
                        </div>
                    ))}
                </div>
                <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 -z-10"></div>
                <div
                    className="absolute top-5 left-0 h-1 bg-primary -z-5 transition-all duration-500"
                    style={{ width: `${(currentStep - 1) * 50}%` }}
                ></div>

                <div className="flex justify-between mt-2">
                    <span className="text-sm font-medium">Select Date & Time</span>
                    <span className="text-sm font-medium">Choose Duration</span>
                    <span className="text-sm font-medium">Your Details</span>
                </div>
            </div>

            {/* Step 1: Date and Time Selection */}
            {currentStep === 1 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Select a Date & Time</h2>

                        {/* Calendar Navigation */}
                        <div className="flex items-center justify-between mb-4">
                            <button
                                onClick={prevMonth}
                                className="p-2 rounded-full hover:bg-gray-100"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <h3 className="text-lg font-medium">{getMonthName()}</h3>
                            <button
                                onClick={nextMonth}
                                className="p-2 rounded-full hover:bg-gray-100"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Calendar View */}
                        <div className="mb-8">
                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                                    <div key={day} className="text-center text-sm text-gray-500">{day}</div>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1">
                                {/* Fill in empty spaces for the start of the month */}
                                {Array.from({ length: new Date(currentYear, currentMonth, 1).getDay() || 7 }).map((_, index) => (
                                    <div key={`empty-start-${index}`} className="h-12"></div>
                                ))}

                                {/* Calendar days */}
                                {Array.from({ length: new Date(currentYear, currentMonth + 1, 0).getDate() }).map((_, index) => {
                                    const day = index + 1;
                                    const date = new Date(currentYear, currentMonth, day);
                                    const isAvailable = currentMonthDates.some(
                                        availableDate => availableDate.getDate() === day
                                    );

                                    return (
                                        <button
                                            key={`day-${day}`}
                                            disabled={!isAvailable}
                                            onClick={() => isAvailable && handleDateSelect(date)}
                                            className={`h-12 flex items-center justify-center rounded-md ${
                                                isDateSelected(date)
                                                    ? 'bg-primary text-white'
                                                    : isAvailable
                                                        ? 'hover:bg-primary hover:bg-opacity-10 cursor-pointer'
                                                        : 'text-gray-300 cursor-not-allowed'
                                            }`}
                                        >
                                            {day}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Time Slots */}
                        {bookingData.date && (
                            <div>
                                <h3 className="text-md font-medium mb-3">Available Times for {formatDate(bookingData.date)}</h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm text-gray-500 mb-2">Morning</h4>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                            {availableTimes.morning.map(time => (
                                                <button
                                                    key={time}
                                                    onClick={() => handleTimeSelect(time)}
                                                    className={`py-2 px-3 rounded-md text-center ${
                                                        bookingData.time === time
                                                            ? 'bg-primary text-white'
                                                            : 'bg-gray-100 hover:bg-gray-200'
                                                    }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm text-gray-500 mb-2">Afternoon</h4>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                            {availableTimes.afternoon.map(time => (
                                                <button
                                                    key={time}
                                                    onClick={() => handleTimeSelect(time)}
                                                    className={`py-2 px-3 rounded-md text-center ${
                                                        bookingData.time === time
                                                            ? 'bg-primary text-white'
                                                            : 'bg-gray-100 hover:bg-gray-200'
                                                    }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={nextStep}
                            disabled={!bookingData.date || !bookingData.time}
                            className="flex items-center justify-center bg-primary hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-md transition-colors"
                        >
                            Continue <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2: Duration Selection */}
            {currentStep === 2 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-6">Choose Consultation Duration</h2>

                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div
                            onClick={() => handleDurationSelect(30)}
                            className={`border rounded-lg p-6 cursor-pointer transition-shadow hover:shadow-md ${
                                bookingData.duration === 30 ? 'border-primary' : 'border-gray-200'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-semibold text-lg">Initial Consultation</h3>
                                    <p className="text-gray-500">30 minutes</p>
                                </div>
                                <div className={`w-5 h-5 rounded-full ${
                                    bookingData.duration === 30
                                        ? 'bg-primary flex items-center justify-center'
                                        : 'border border-gray-300'
                                }`}>
                                    {bookingData.duration === 30 && <Check className="w-3 h-3 text-white" />}
                                </div>
                            </div>

                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />
                                    <span>Initial assessment of nutrition needs</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />
                                    <span>Overview of your health concerns</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />
                                    <span>Basic recommendations</span>
                                </li>
                            </ul>

                            <div className="mt-4 text-xl font-bold text-primary">€50</div>
                        </div>

                        <div
                            onClick={() => handleDurationSelect(60)}
                            className={`border rounded-lg p-6 cursor-pointer transition-shadow hover:shadow-md ${
                                bookingData.duration === 60 ? 'border-primary' : 'border-gray-200'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-semibold text-lg">Comprehensive Consultation</h3>
                                    <p className="text-gray-500">60 minutes</p>
                                </div>
                                <div className={`w-5 h-5 rounded-full ${
                                    bookingData.duration === 60
                                        ? 'bg-primary flex items-center justify-center'
                                        : 'border border-gray-300'
                                }`}>
                                    {bookingData.duration === 60 && <Check className="w-3 h-3 text-white" />}
                                </div>
                            </div>

                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />
                                    <span>In-depth nutrition assessment</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />
                                    <span>Detailed discussion of health history</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />
                                    <span>Personalized nutrition strategy</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />
                                    <span>Meal planning guidance</span>
                                </li>
                            </ul>

                            <div className="mt-4 text-xl font-bold text-primary">€100</div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-md mb-6">
                        <h3 className="font-medium text-blue-800 mb-2 flex items-center">
                            <Video className="w-4 h-4 mr-2" />
                            All consultations take place via secure video call
                        </h3>
                        <p className="text-sm text-blue-700">
                            After booking, you'll receive a confirmation email with your video call link and preparation instructions.
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <button
                            onClick={prevStep}
                            className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-md transition-colors"
                        >
                            <ChevronLeft className="mr-2 w-4 h-4" /> Back
                        </button>

                        <button
                            onClick={nextStep}
                            className="flex items-center justify-center bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-md transition-colors"
                        >
                            Continue <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 3: Personal Details */}
            {currentStep === 3 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-6">Your Information</h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={bookingData.name}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={bookingData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={bookingData.phone}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="concerns" className="block text-sm font-medium text-gray-700 mb-1">
                                        Health Concerns or Questions
                                    </label>
                                    <textarea
                                        id="concerns"
                                        name="concerns"
                                        value={bookingData.concerns}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                    ></textarea>
                                </div>
                            </form>

                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Sign In With</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path
                                                fill="#4285F4"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            />
                                        </svg>
                                        Google
                                    </button>

                                    <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                                        <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                                            <path
                                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                            />
                                        </svg>
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-medium text-lg mb-4">Booking Summary</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center">
                                    <Calendar className="text-primary w-5 h-5 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Date</p>
                                        <p className="font-medium">{bookingData.date && formatDate(bookingData.date)}</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Clock className="text-primary w-5 h-5 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Time</p>
                                        <p className="font-medium">{bookingData.time}</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Timer className="text-primary w-5 h-5 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Duration</p>
                                        <p className="font-medium">{bookingData.duration} minutes</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <CreditCard className="text-primary w-5 h-5 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Price</p>
                                        <p className="font-medium">€{bookingData.duration === 30 ? '50' : '100'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-md mb-6">
                                <p className="text-sm text-blue-600">
                                    You will be redirected to PayPal to complete your payment securely.
                                </p>
                            </div>

                            <button
                                onClick={handlePayment}
                                disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
                                className="w-full flex items-center justify-center bg-primary hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-md transition-colors"
                            >
                                Pay Now (€{bookingData.duration === 30 ? '50' : '100'})
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            onClick={prevStep}
                            className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-md transition-colors"
                        >
                            <ChevronLeft className="mr-2 w-4 h-4" /> Back
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImprovedBookingPage;