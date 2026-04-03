import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const BookingCancel = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <XCircle className="w-8 h-8 text-red-500" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Cancelled</h1>
      <p className="text-gray-500 mb-8">
        Your booking was not completed. No charge was made.
        Feel free to try again whenever you're ready.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/booking"
          className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
        >
          Try Again
        </Link>
        <Link
          to="/"
          className="border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  </div>
);

export default BookingCancel;
