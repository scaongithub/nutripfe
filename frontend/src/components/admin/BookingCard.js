import React, { useState } from 'react';
import { adminApi } from '../../services/adminApi';

const STATUS_COLORS = {
  confirmed: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  cancelled: 'bg-red-100 text-red-800',
};

const BookingCard = ({ booking, onNotesUpdate, onStatusUpdate }) => {
  const [expanded, setExpanded] = useState(false);
  const [notes, setNotes] = useState(booking.admin_notes || '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSaveNotes = async () => {
    setSaving(true);
    await adminApi.updateNotes(booking.id, notes);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    onNotesUpdate(booking.id, notes);
  };

  const handleStatusChange = async (newStatus) => {
    await adminApi.updateStatus(booking.id, newStatus);
    onStatusUpdate(booking.id, newStatus);
  };

  const formattedDate = new Date(booking.date + 'T00:00:00').toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header row — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
            {booking.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{booking.name}</p>
            <p className="text-sm text-gray-500">{formattedDate} · {booking.time} · {booking.duration_minutes} min</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_COLORS[booking.status] || 'bg-gray-100 text-gray-700'}`}>
            {booking.status}
          </span>
          <svg className={`w-4 h-4 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded details */}
      {expanded && (
        <div className="border-t border-gray-100 p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Patient info */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Patient Info</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-gray-500">Email:</span> <a href={`mailto:${booking.email}`} className="text-primary hover:underline">{booking.email}</a></p>
                <p><span className="text-gray-500">Phone:</span> <a href={`tel:${booking.phone}`} className="text-primary hover:underline">{booking.phone}</a></p>
              </div>
              {booking.concerns && (
                <div className="mt-3">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Health Concerns</h4>
                  <p className="text-sm text-gray-700 bg-amber-50 p-3 rounded-lg">{booking.concerns}</p>
                </div>
              )}
            </div>

            {/* Paola's notes */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">My Notes (private)</h4>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Add your private notes about this patient…"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                onClick={handleSaveNotes}
                disabled={saving}
                className="text-sm bg-primary text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300"
              >
                {saved ? '✓ Saved!' : saving ? 'Saving…' : 'Save notes'}
              </button>
            </div>
          </div>

          {/* Status actions */}
          <div className="flex gap-2 pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-400 self-center mr-1">Change status:</span>
            {booking.status !== 'confirmed' && (
              <button
                onClick={() => handleStatusChange('confirmed')}
                className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
              >
                ✓ Confirm
              </button>
            )}
            {booking.status !== 'cancelled' && (
              <button
                onClick={() => handleStatusChange('cancelled')}
                className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full hover:bg-red-200 transition-colors"
              >
                ✕ Cancel
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
