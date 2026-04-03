import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, Timer } from 'lucide-react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const BookingSuccess = () => {
  const [params] = useSearchParams();
  const bookingId = params.get('booking_id');
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (!bookingId) return;
    fetch(`${API_URL}/api/bookings/${bookingId}`)
      .then((r) => r.json())
      .then(setBooking)
      .catch(() => {});
  }, [bookingId]);

  const formattedDate = booking?.date
    ? new Date(booking.date + 'T00:00:00').toLocaleDateString('en-GB', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
      })
    : '—';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
        <p className="text-gray-500 mb-8">
          A confirmation email has been sent to{' '}
          <strong>{booking?.email || 'your inbox'}</strong>.
        </p>

        {booking && (
          <div className="bg-gray-50 rounded-xl p-6 text-left space-y-4 mb-8">
            <h2 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Appointment Details</h2>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span>{booking.time} CET</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Timer className="w-4 h-4 text-primary" />
              <span>{booking.duration_minutes} minutes · Video call</span>
            </div>
          </div>
        )}

        <p className="text-sm text-gray-500 mb-6">
          Check your email for the video call link and preparation instructions.
        </p>

        <Link
          to="/"
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
