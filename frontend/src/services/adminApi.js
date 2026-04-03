const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const getHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('admin_token') || ''}`,
});

export const adminApi = {
  async login(email, password) {
    const res = await fetch(`${API_URL}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('Invalid credentials');
    return res.json(); // { access_token }
  },

  async getStats() {
    const res = await fetch(`${API_URL}/api/admin/stats`, { headers: getHeaders() });
    if (res.status === 401) { localStorage.removeItem('admin_token'); window.location.href = '/admin'; }
    return res.json();
  },

  async getUpcoming() {
    const res = await fetch(`${API_URL}/api/admin/bookings/upcoming`, { headers: getHeaders() });
    if (res.status === 401) { localStorage.removeItem('admin_token'); window.location.href = '/admin'; }
    return res.json();
  },

  async getAllBookings(status = '') {
    const params = status ? `?status=${status}` : '';
    const res = await fetch(`${API_URL}/api/admin/bookings${params}`, { headers: getHeaders() });
    if (res.status === 401) { localStorage.removeItem('admin_token'); window.location.href = '/admin'; }
    return res.json();
  },

  async updateNotes(bookingId, adminNotes) {
    const res = await fetch(`${API_URL}/api/admin/bookings/${bookingId}/notes`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify({ admin_notes: adminNotes }),
    });
    return res.json();
  },

  async updateStatus(bookingId, status) {
    const res = await fetch(`${API_URL}/api/admin/bookings/${bookingId}/status`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify({ status }),
    });
    return res.json();
  },
};

export const isAuthenticated = () => !!localStorage.getItem('admin_token');
