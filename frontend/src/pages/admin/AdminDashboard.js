import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminApi } from '../../services/adminApi';
import StatsBar from '../../components/admin/StatsBar';
import BookingCard from '../../components/admin/BookingCard';
import { LogOut, RefreshCw } from 'lucide-react';

const FILTERS = ['all', 'confirmed', 'pending', 'cancelled'];

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('upcoming'); // 'upcoming' | 'all'
  const navigate = useNavigate();

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [s, b] = await Promise.all([
        adminApi.getStats(),
        view === 'upcoming'
          ? adminApi.getUpcoming()
          : adminApi.getAllBookings(filter === 'all' ? '' : filter),
      ]);
      setStats(s);
      setBookings(b);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [view, filter]);

  useEffect(() => { load(); }, [load]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin');
  };

  const handleNotesUpdate = (id, notes) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, admin_notes: notes } : b));
  };

  const handleStatusUpdate = (id, status) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
    if (stats) {
      load(); // refresh stats after status change
    }
  };

  // Group bookings by date for the "all" view
  const groupedByDate = bookings.reduce((acc, b) => {
    const key = b.date;
    if (!acc[key]) acc[key] = [];
    acc[key].push(b);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="TODOenBALANCE" className="h-8" />
            <div>
              <h1 className="font-bold text-gray-900 text-lg leading-none">Dashboard</h1>
              <p className="text-xs text-gray-400">TODOenBALANCE · Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={load}
              disabled={loading}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors px-3 py-2 rounded-lg hover:bg-red-50"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <StatsBar stats={stats} />

        {/* View toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex bg-white border border-gray-200 rounded-xl p-1 gap-1">
            {['upcoming', 'all'].map((v) => (
              <button
                key={v}
                onClick={() => { setView(v); setFilter('all'); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                  view === v ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {v === 'upcoming' ? '📅 Upcoming 7 days' : '📋 All appointments'}
              </button>
            ))}
          </div>

          {view === 'all' && (
            <div className="flex gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
                    filter === f
                      ? 'bg-primary text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Booking list */}
        {loading ? (
          <div className="flex justify-center py-20 text-gray-400">
            <RefreshCw className="w-6 h-6 animate-spin" />
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-3">📭</p>
            <p className="font-medium">No appointments found</p>
          </div>
        ) : view === 'upcoming' ? (
          <div className="space-y-3">
            {bookings.map((b) => (
              <BookingCard
                key={b.id}
                booking={b}
                onNotesUpdate={handleNotesUpdate}
                onStatusUpdate={handleStatusUpdate}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedByDate).sort().map(([d, dayBookings]) => (
              <div key={d}>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  {new Date(d + 'T00:00:00').toLocaleDateString('en-GB', {
                    weekday: 'long', day: 'numeric', month: 'long',
                  })}
                </h3>
                <div className="space-y-3">
                  {dayBookings.map((b) => (
                    <BookingCard
                      key={b.id}
                      booking={b}
                      onNotesUpdate={handleNotesUpdate}
                      onStatusUpdate={handleStatusUpdate}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
