const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

class BookingService {
    static async getAvailableSlots() {
        try {
            const response = await fetch(`${API_URL}/api/bookings/available-slots`);
            if (!response.ok) throw new Error('Failed to fetch available slots');
            return await response.json();
        } catch (error) {
            console.error('Error fetching available slots:', error);
            return [];
        }
    }

    static async createBooking(bookingData) {
        try {
            const response = await fetch(`${API_URL}/api/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || 'Failed to create booking');
            }

            return await response.json();
        } catch (error) {
            console.error('Booking creation failed:', error);
            throw error;
        }
    }
}

export default BookingService;